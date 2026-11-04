# Cerimónia de Finalistas ISCTE

Website da Cerimónia de Finalistas do ISCTE, organizada pela **AEISCTE-IUL** (Associação de Estudantes do ISCTE – Instituto Universitário de Lisboa).

É um site FrontEnd only informativo ao estudantes.

A versão atualizada ainda está no ar em https://cerimoniafinalistas.web.app/

## Secções

- **Hero** – logótipo da cerimónia e botão de inscrição
- **Informações** – informações importantes sobre o evento (mapa, etc.)
- **Edições Anteriores** – galeria de fotografias (com lightbox) e vídeo da cerimónia de 2022
- **FAQ** – perguntas frequentes em acordeão
- **Sobre nós** – apresentação da AEISCTE
- **Rodapé** – morada, email de contacto e redes sociais

## Estrutura

```
.
├── index.html      # Página principal
├── styles.css      # Estilos (layout, cores, responsivo)
├── main.js         # Menu mobile, animações ScrollReveal e acordeão do FAQ
└── images/         # Logótipos, fundos e fotografias da galeria
    └── Cerimonia_Finalistas_ISCTE/
```

## Dependências (via CDN)

- [Font Awesome 6.5.1](https://fontawesome.com/) – ícones
- [ScrollReveal](https://scrollrevealjs.org/) – animações ao fazer scroll
- [Lightbox2 2.8.2](https://lokeshdhakar.com/projects/lightbox2/) + jQuery 3.2.1 – galeria de imagens
- Google Fonts – Fredoka One, Herr Von Muellerhoff

## Executar localmente

Basta abrir o `index.html` no browser. Para recarregamento automático, recomenda-se a extensão **Live Server** do VS Code (configurada na porta `5501` em `.vscode/settings.json`):

1. Abrir a pasta do projeto no VS Code
2. Clicar com o botão direito em `index.html` → **Open with Live Server**
3. Aceder a `http://127.0.0.1:5501`

## Por fazer

- Preencher a secção **Informações** (mapa, horários, local)
- Substituir as perguntas e respostas de exemplo no **FAQ**
- Ligar o botão **Inscreve-te aqui** ao formulário de inscrição (atualmente aponta para `#about`)


© 2024 AEISCTE-IUL
