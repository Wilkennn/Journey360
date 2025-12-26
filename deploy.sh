#!/bin/bash

# ==========================================
# CONFIGURAÇÕES INICIAIS
# ==========================================
REPO_URL="https://github.com/SEU-USUARIO/SEU-REPO.git"

# Nome da pasta do projeto e do serviço PM2
PROJECT_NAME="journey360"
PROJECT_DIR="/var/www/$PROJECT_NAME"

# Cores
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

log() { echo -e "${GREEN}[DEPLOY]${NC} $1"; }
warn() { echo -e "${YELLOW}[ATENÇÃO]${NC} $1"; }
error() { echo -e "${RED}[ERRO]${NC} $1"; exit 1; }

if [ "$EUID" -ne 0 ]; then
  error "Por favor, execute como root (sudo ./deploy.sh)"
fi

# ==========================================
# 1. ATUALIZAÇÃO DO SISTEMA
# ==========================================
log "Verificando dependências..."
# Instala Git e Nginx se não existirem
if ! command -v git &> /dev/null; then apt update && apt install -y git nginx build-essential; fi

if ! command -v node &> /dev/null; then
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
    apt install -y nodejs
fi

if ! command -v pm2 &> /dev/null; then npm install -g pm2; fi

# ==========================================
# 2. CLONE E BUILD
# ==========================================
if [ -d "$PROJECT_DIR" ]; then
    log "Atualizando repositório..."
    cd "$PROJECT_DIR"
    git pull
else
    log "Clonando repositório..."
    git clone "$REPO_URL" "$PROJECT_DIR"
    cd "$PROJECT_DIR"
fi

log "Instalando e compilando..."
npm install
npm run build

# ==========================================
# 3. CONFIGURAÇÃO INTELIGENTE DO .ENV
# ==========================================
if [ ! -f .env ]; then
    log "Arquivo .env não encontrado. Gerando..."

    VAR_USER=${HUBSYS_API_STATIC_USER:-}
    VAR_TOKEN=${HUBSYS_API_STATIC_TOKEN:-}
    VAR_PASS=${HUBSYS_API_STATIC_PASSWORD:-}

    if [ -z "$VAR_USER" ] || [ -z "$VAR_TOKEN" ] || [ -z "$VAR_PASS" ]; then
        warn "Variáveis de ambiente não detectadas automaticamente."
        read -p "Digite o User: " VAR_USER
        read -p "Digite o Token: " VAR_TOKEN
        read -p "Digite a Senha (Hash): " VAR_PASS
    else
        log "Variáveis de ambiente detectadas! Usando valores do sistema."
    fi

    cat > .env <<EOF
HUBSYS_API_STATIC_USER=$VAR_USER
HUBSYS_API_STATIC_TOKEN=$VAR_TOKEN
HUBSYS_API_STATIC_PASSWORD=$VAR_PASS
PORT=3000
EOF
    log ".env criado com sucesso."
else
    log ".env já existe. Mantendo configuração atual."
fi

# ==========================================
# 4. START SERVIDOR (PM2)
# ==========================================
log "Reiniciando aplicação..."
pm2 delete "$PROJECT_NAME" 2>/dev/null || true
pm2 start server.js --name "$PROJECT_NAME"
pm2 save
pm2 startup | bash 2>/dev/null

# ==========================================
# 5. NGINX E SSL
# ==========================================
MY_DOMAIN=${DOMAIN_NAME:-}

if [ -z "$MY_DOMAIN" ]; then
    echo ""
    read -p "Digite o DOMÍNIO para configurar Nginx (Enter para pular): " MY_DOMAIN
fi

if [ -n "$MY_DOMAIN" ]; then
    log "Configurando Nginx para $MY_DOMAIN..."
    cat > /etc/nginx/sites-available/$PROJECT_NAME <<EOF
server {
    listen 80;
    server_name $MY_DOMAIN www.$MY_DOMAIN;
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOF
    ln -sfn /etc/nginx/sites-available/$PROJECT_NAME /etc/nginx/sites-enabled/
    nginx -t && systemctl restart nginx
    
    # SSL automático se solicitado
    if [ "$SSL_AUTO" == "true" ]; then
        apt install -y certbot python3-certbot-nginx
        certbot --nginx -d "$MY_DOMAIN" --non-interactive --agree-tos -m "admin@$MY_DOMAIN" --redirect
    fi
fi

log "DEPLOY FINALIZADO! 🚀"