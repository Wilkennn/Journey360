<div align="center">

# HubMsg Landing Page

![HubMsg Logo](https://raw.githubusercontent.com/hubsys-io/hub-message-landing-page/refs/heads/main/public/hubsys_favicon.ico?token=GHSAT0AAAAAADBYXUWHYHTABKCJKYBWIUDU2CJ3JTA)

*Transforme seu WhatsApp em uma máquina de vendas com o chatbot inteligente da HubMsg!*

Esta é a landing page oficial da **HubMsg**, desenvolvida para apresentar os recursos e benefícios da nossa plataforma de chatbot inteligente para WhatsApp. Descubra como a HubMsg pode otimizar seu atendimento ao cliente, qualificar leads e fornecer relatórios em tempo real.

</div>

---

## 🚀 Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias principais:

* **[React](https://react.dev/)**: Biblioteca JavaScript para construção de interfaces.
* **[Tailwind CSS](https://tailwindcss.com/)**: Framework CSS utilitário para estilização responsiva rápida.
* **[Material UI (MUI)](https://mui.com/)**: Componentes React baseados no Material Design do Google.
* **[Framer Motion](https://www.framer.com/motion/)**: Biblioteca para animações fluidas e declarativas.
* **[React Router DOM](https://reactrouter.com/en/main)**: Gerenciamento de rotas para SPAs.
* **[Tippy.js](https://atomiks.github.io/tippyjs/react/)**: Tooltips interativos e acessíveis.
* **[Swiper](https://swiperjs.com/)**: Slider/carrossel moderno e responsivo.
* **[React Icons](https://react-icons.github.io/react-icons/)**: Biblioteca de ícones populares em forma de componentes React.
* **[Vercel Speed Insights](https://vercel.com/docs/concepts/speed-insights)**: Ferramenta de monitoramento de desempenho integrada.

---

## 🧱 Estrutura do Projeto

```bash
hub-message-landing-page
├─ package-lock.json          # Arquivo de controle de versões das dependências
├─ package.json               # Metadados do projeto e lista de dependências
├─ public                     # Arquivos públicos acessíveis diretamente no navegador
│  ├─ hubsys_favicon.ico      # Ícone da página
│  ├─ index.html              # HTML base da aplicação
│  └─ logo.png                # Logo principal usada na interface
├─ README.md                  # Documentação principal do projeto
├─ src                        # Código-fonte da aplicação
│  ├─ App.js                  # Componente raiz do React
│  ├─ assets                  # Recursos visuais (ícones, imagens, etc.)
│  │  ├─ icons                # Ícones utilizados na aplicação
│  │  │  └─ flags             # Bandeiras de países
│  │  └─ images               # Imagens diversas da interface
│  ├─ components              # Componentes reutilizáveis da interface
│  ├─ data                    # Dados estáticos usados nos componentes
│  ├─ index.css               # Estilos globais
│  ├─ index.js                # Ponto de entrada do React DOM
│  ├─ pages                   # Páginas da aplicação
│  ├─ routes                  # Arquivo de configuração das rotas
│  └─ styles                  # Arquivos de estilo adicionais
└─ tailwind.config.js         # Configuração do Tailwind CSS
```

---

## 💻 Como Executar Localmente

Siga os passos abaixo para configurar e executar a landing page da HubMsg localmente.

### Requisitos

* **Node.js** (recomendado usar a versão LTS)
* **npm** (Node Package Manager)

> 🔗 [Instalar Node.js](https://nodejs.org/en/download/)

### Instalação

1. **Clone o repositório:**

```bash
git clone https://github.com/hubsys-io/hub-message-landing-page.git
```

2. **Acesse a pasta do projeto:**

```bash
cd hub-message-landing-page
```

3. **Instale as dependências:**

```bash
npm install
```

### Configuração do PostCSS e Tailwind CSS

Certifique-se de que o arquivo `postcss.config.js` esteja presente na raiz do projeto:

```javascript
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

E o `tailwind.config.js` deve conter:

```javascript
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': '#588C3C',
      },
    },
  },
  plugins: [],
};
```

### Executando o Projeto

Para iniciar o servidor de desenvolvimento:

```bash
npm start
```

A aplicação será aberta automaticamente em `http://localhost:3000`.

---

## 🛠️ Scripts Disponíveis

* `npm start`: Inicia o servidor de desenvolvimento.
* `npm run build`: Gera os arquivos otimizados para produção na pasta `build/`.
* `npm test`: Executa os testes (Jest).
* `npm run eject`: Expõe a configuração do React. **(Irreversível!)**

---

## 📄 Licença

Este projeto está licenciado sob a **Licença MIT**. Veja o arquivo `LICENSE` para mais detalhes.

---
