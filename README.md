# LaMPAD

Site do **Laboratório Multiusuário de Processamento de Alto Desempenho** da
Universidade Federal do Pampa (Unipampa).

Site estático (HTML/CSS/JS, sem etapa de build), publicado via GitHub Pages.
Conteúdo trilíngue: **PT / ES / EN**.

## Estrutura

```
index.html           Landing page (uma página, scroll por seções)
css/styles.css       Design system e layout
js/i18n.js           Dicionário PT/ES/EN + troca de idioma
js/main.js           "O Grid" do hero, menu mobile, reveals
assets/favicon.svg   Logomarca
docs/                Spec de design
```

## Rodar localmente

```bash
python3 -m http.server 8000
# abrir http://localhost:8000
```

## Configuração

Em `js/main.js`, o objeto `CONFIG` permite ajustar sem mexer no HTML:

- `publicCalendarUrl` · link do calendário público do Google (vazio = usa e-mail).
- `aiHorizonUrl` · site do AI Horizon Labs (crédito no rodapé).
