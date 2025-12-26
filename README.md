# 🌍 Journey360 — Landing Page & Lead Integration

Landing Page desenvolvida com **React (Vite)** e **TailwindCSS**, focada em conversão, captação de leads e integração segura com a **API Hubsys**.

O projeto foi concebido para atender requisitos de **segurança**, **escalabilidade** e **flexibilidade de deploy**, utilizando uma arquitetura **BFF (Backend-for-Frontend)** para proteger credenciais sensíveis e evitar problemas de CORS.

---

## 🎯 Objetivo do Projeto

- Disponibilizar uma landing page moderna e performática
- Centralizar integrações com a API Hubsys de forma segura
- Evitar exposição de tokens e credenciais no frontend
- Permitir deploy tanto em **Serverless** quanto em **VPS**

---

## 🧠 Arquitetura (BFF)

A arquitetura **Backend-for-Frontend** garante que:

- O frontend **nunca** consuma a API Hubsys diretamente
- As credenciais ficam isoladas no backend
- Headers sensíveis são tratados apenas no servidor
- O controle de CORS é totalmente resolvido

Fluxo simplificado:

Frontend (React) → BFF (Node / Serverless) → API Hubsys

---

## 🛠️ Stack Tecnológica

- **Frontend:** React + Vite
- **Estilização:** TailwindCSS
- **Backend:** Node.js (Express / Serverless Functions)
- **Deploy Serverless:** Vercel
- **Deploy Tradicional:** VPS + PM2 + Nginx
- **Gerenciamento de Processos:** PM2
- **Proxy Reverso:** Nginx
- **SSL:** Certbot (Let's Encrypt)

---

## 🗂️ Estrutura do Projeto

```text
journey360/
├── .env                  # Variáveis de ambiente (não versionar)
├── api/                  # Backend Serverless (Vercel)
├── dist/                 # Build de produção (React)
├── public/               # Assets públicos
├── src/                  # Código-fonte do Frontend
├── server.js             # Servidor Express (VPS)
├── vite.config.js        # Proxy local (Dev)
└── package.json          # Dependências e scripts
```

---

## 🔑 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
# Credenciais Hubsys
HUBSYS_API_STATIC_USER=seu-usuario
HUBSYS_API_STATIC_TOKEN=seu-token
HUBSYS_API_STATIC_PASSWORD=sua-senha-hash

# Porta (apenas VPS)
PORT=3000
```

> ⚠️ **Nunca versionar o arquivo `.env`.**

---

## 💻 Rodando Localmente (Desenvolvimento)

### 1️⃣ Instalação de dependências
```bash
npm install
```

### 2️⃣ Configuração do ambiente
Crie o `.env` conforme descrito acima.

### 3️⃣ Iniciar o servidor
```bash
npm run dev
```

A aplicação ficará disponível em:
👉 **http://localhost:3000**

O Vite utiliza proxy configurado em `vite.config.js`.

---

## 🚀 Deploy Serverless — Vercel (Recomendado)

### Passo a passo:
1. Faça push do projeto para o GitHub
2. Importe o repositório na Vercel
3. Acesse **Settings → Environment Variables**
4. Cadastre as variáveis:
   - HUBSYS_API_STATIC_USER
   - HUBSYS_API_STATIC_TOKEN
   - HUBSYS_API_STATIC_PASSWORD
5. Execute o deploy

A Vercel detecta automaticamente a pasta `/api` e cria as rotas serverless.

---

## 🖥️ Deploy em VPS (Node.js + Nginx)

### 1️⃣ Preparação do Servidor

```bash
sudo apt update
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs nginx
sudo npm install -g pm2
```

---

### 2️⃣ Clonagem e Setup

```bash
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo
npm install
nano .env
```

---

### 3️⃣ Build e Execução

```bash
npm run build
pm2 start server.js --name journey360
pm2 save
pm2 startup
```

---

### 4️⃣ Nginx — Proxy Reverso

```bash
sudo nano /etc/nginx/sites-available/journey360
```

```nginx
server {
    listen 80;
    server_name seudominio.com.br www.seudominio.com.br;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
sudo ln -s /etc/nginx/sites-available/journey360 /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

---

### 5️⃣ SSL (HTTPS)

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d seudominio.com.br
```

---

## 🐛 Troubleshooting

### ❌ 403 Forbidden
- Verifique as credenciais
- Confirme o ambiente do token (UAT / DSV2)

### ❌ 502 Bad Gateway
- Verifique o processo Node:
```bash
pm2 status
pm2 logs journey360
```

### ❌ Headers inválidos
- Utilize **X-USER** e **X-TOKEN**
- Não utilize `X-API-USER`

---

## 📈 Boas Práticas

- Nunca exponha tokens no frontend
- Utilize HTTPS sempre
- Versione apenas `.env.example`
- Monitore processos com PM2

---

## 📄 Licença

Projeto de uso interno.
Todos os direitos reservados.
