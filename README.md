# RMA Solutions - Portal de Assessoria Contábil & Trabalhista a Condomínios

Este é o novo portal da **RMA Solutions**, desenvolvido como uma aplicação web moderna de alto desempenho e forte apelo estético premium (UI/UX) para elevar a percepção de seriedade, segurança e eficiência operacional da marca.

---

## 🎨 Design System & Experiência de Usuário (UX)

O portal foi construído em conformidade estrita com as preferências de marca da RMA:
- **Cores Sóbrias & Corporativas (Base):**
  - **Deep Navy (Azul Marinho Principal):** HSL `222.2 47.4% 11.2%` (`#0F172A` / Slate-900) - Transmite solidez, solidez financeira e governança.
  - **Space Gray (Cinza Espacial):** HSL `215.4 16.3% 46.9%` (`#64748B` / Slate-500) - Usado em elementos secundários e detalhes metálicos.
  - **White & Clean Glass:** Fundos claros e glassmorphism refinado (`backdrop-blur`) para um layout arejado.
- **Red Accent (Identidade Brand do Logotipo):**
  - Integração do tom de vermelho do logotipo oficial (`#DC2626` / Red-600) usado pontualmente nos botões de CTA, links interativos e ícones.
- **Área do Cliente "Regra dos 2 Segundos":**
  - O acesso ao portal está posicionado de forma persistente no canto superior direito do cabeçalho.
  - **UX Mobile Premium:** Em dispositivos móveis, o botão de login fica localizado em destaque no cabeçalho estático, eliminando a necessidade de abrir o menu hambúrguer para efetuar login, permitindo acesso em menos de 1 segundo!
- **Tipografia:** Uso da fonte moderna sem-serifa **Inter** carregada dinamicamente via Google Fonts (Next.js font optimization).
- **Espaçamento e Layout:** Layout estruturado sobre um grid clássico de 12 colunas com espaçamentos generosos (whitespaces) que remetem a interfaces sofisticadas de tecnologia e finanças.

---

## 🛠️ Tecnologias Utilizadas

- **Next.js 15 (App Router):** Roteamento moderno de arquivos, layouts aninhados e suporte nativo a React Server Components (RSC) e Client Components.
- **Tailwind CSS v3:** Utilitários CSS altamente otimizados para responsividade mobile-first e customização de cores via variáveis HSL.
- **Lucide React:** Conjunto elegante de ícones vetoriais modernos.
- **Clsx & Tailwind Merge:** Utilitário para concatenação e resolução inteligente de conflitos de classes Tailwind.
- **TypeScript:** Tipagem estática estrita para maior segurança operacional do software.

---

## 📂 Hierarquia e Arquitetura de Pastas

Organizada sob as melhores práticas oficiais do ecossistema Next.js:

```text
c:\RMA\
├── public/                       # Arquivos estáticos servidos diretamente
│   └── logo.png                  # Logo oficial da RMA (cópia de RMA.png)
├── src/
│   ├── app/                      # Next.js 15 App Router
│   │   ├── layout.tsx            # Root Layout (Metadados SEO, Navbar, Footer e Fontes)
│   │   ├── globals.css           # Configurações globais Tailwind + Variáveis HSL
│   │   ├── page.tsx              # Home Page (Hero Impacto + Quick Services Grid)
│   │   ├── cliente/              # Área restrita
│   │   │   └── page.tsx          # Login interativo seguro (Morador vs Síndico)
│   │   ├── servicos/             # Catálogo de serviços
│   │   │   └── page.tsx          # Detalhamento técnico com layout em colunas e tags
│   │   └── fale-conosco/         # Contato rápido
│   │       └── page.tsx          # Formulário reativo e dados de fones/endereço
│   ├── components/               # Componentes compartilhados
│   │   ├── navbar.tsx            # Header responsivo com hamburger menu e CTA fixo
│   │   └── footer.tsx            # Footer institucional com endereço e fones oficiais
│   ├── data/                     # Dados estáticos tipados
│   │   └── services.ts           # Estrutura de dados contendo especificações dos serviços
│   └── lib/                      # Funções auxiliares reutilizáveis
│       └── utils.ts              # Função cn para junção de classes Tailwind
├── package.json                  # Dependências e scripts npm
├── tailwind.config.ts            # Configurações de breakpoints, fontes e cores Tailwind
├── tsconfig.json                 # Arquivo de configuração TypeScript
└── README.md                     # Este documento de especificações
```

---

## 🚀 Como Executar o Projeto Localmente

1. **Instale as dependências:**
   ```bash
   npm install
   ```

2. **Execute o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   Abra [http://localhost:3000](http://localhost:3000) no seu navegador para visualizar o portal.

3. **Gere a build de produção:**
   ```bash
   npm run build
   ```

---

## ⚙️ Dados Institucionais Obrigatórios (Rodapé)
Em conformidade com as diretrizes da marca, o rodapé exibe com total fidelidade os seguintes dados corporativos e de localização da sede:
- **Endereço Sede:** *Rua Sete de Setembro, 235 – 1º andar – sala 16 – Centro de Guarulhos-SP - CEP 07011-020*
- **Telefones:** *(11) 4803-8005 / 8006*
- **Assinatura Contábil:** *RMA - Assessoria Contábil e Trabalhista a Condomínios*
