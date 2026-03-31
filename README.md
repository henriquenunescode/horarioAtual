# Horário Atual

Página web simples que exibe uma saudação e uma imagem de acordo com o horário do dia do usuário.

## Como funciona

Ao carregar a página, o JavaScript lê a hora atual do dispositivo e define:

- **Manhã** (00h–11h) → "Bom dia!" + imagem de manhã + fundo azul claro
- **Tarde** (12h–17h) → "Boa tarde!" + imagem de tarde + fundo laranja terroso
- **Noite** (18h–23h) → "Boa noite!" + imagem de noite + fundo cinza escuro

## Estrutura

```
horarioAtual/
├── index.html   # Estrutura da página
├── style.css    # Estilização
├── script.js    # Lógica de detecção do horário
└── imgs/
    ├── manha.jpg
    ├── tarde.jpg
    └── noite.jpg
```

## Como usar

Basta abrir o arquivo `index.html` diretamente no navegador — nenhuma dependência ou instalação necessária.
