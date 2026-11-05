# Contador
![Screenshot](Screenshot.png)
Um pequeno projeto de front-end desenvolvido para praticar os fundamentos de HTML, CSS e JavaScript. A aplicação permite incrementar, decrementar e zerar um valor por meio de uma interface simples e responsiva.

## Funcionalidades

- Incrementar o contador em uma unidade.
- Decrementar o contador em uma unidade.
- Redefinir o valor para zero.
- Alterar a cor do número conforme o valor:
  - Verde para valores positivos.
  - Vermelho para valores negativos.
- Animação sutil ao alterar o contador.
- Desabilitar o botão de redefinição quando o valor já está em zero.
- Atualização acessível do valor com `output` e `aria-live`.
- Layout adaptado para telas menores e respeito à preferência por movimento reduzido do sistema.

## Tecnologias

- **HTML5** — estrutura semântica e elementos acessíveis.
- **CSS3** — layout responsivo, variáveis CSS, estados visuais e animações.
- **JavaScript** — manipulação do DOM e tratamento de eventos.

## Como executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/CapyRyanMUs/ContadorSite.git
   ```
2. Abra a pasta do projeto.
3. Abra o arquivo `index.html` no navegador.

Não é necessário instalar dependências.

## Estrutura do projeto

```text
ContadorSite/
├── index.html
├── style.css
└── script.js
```

## Escopo

Este é um exercício de front-end. O valor do contador existe apenas enquanto a página está aberta: ele não é salvo em `localStorage`, não é enviado para um servidor e volta a zero ao recarregar a página.

O projeto tem como foco praticar interação com o DOM, eventos de clique, atualização de interface, estilização com CSS e fundamentos de acessibilidade.

---

Desenvolvido por [CapyRyanMUs](https://github.com/CapyRyanMUs).
