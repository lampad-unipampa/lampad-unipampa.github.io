# Novo site LaMPAD · Design

Data: 2026-06-20
Repositório: `lampad-unipampa.github.io` (GitHub Pages, servido na raiz)

## Objetivo

Recriar o site do Laboratório Multiusuário de Processamento de Alto Desempenho
(LaMPAD) da Unipampa com design moderno, clean, atrativo e profissional, a partir
do conteúdo real do site atual (https://sites.unipampa.edu.br/lampad/).

## Decisões fechadas

- **Stack:** HTML/CSS/JS puro, sem etapa de build. Fontes via Google Fonts (`<link>`).
- **Estrutura:** landing page única, navegação por âncoras (scroll).
- **Idiomas:** trilíngue PT / ES / EN, troca no cliente, sem recarregar.
- **Direção visual:** light acadêmico clean, com um acento forte.

## Sistema visual

### Cores
- Fundo: `#FFFFFF`, seções alternadas `#F6F8FB`
- Tinta (texto/títulos): `#0B1220`
- Texto suave: `#5B6678`
- Acento (azul-ciência): `#2563EB`; profundo `#1E40AF`
- Sinal (nó ativo, uso mínimo): `#06B6D4`
- Hairline/bordas: `#E3E8F0`

### Tipografia
- Display: **Bricolage Grotesque** (títulos, com restrição)
- Corpo: **Inter**
- Dados/labels técnicos: **JetBrains Mono** (specs de hardware, eyebrows, números)

### Elemento-assinatura: "O Grid"
No hero, a infraestrutura real é representada como uma grade de nós:
6 workstations GPU + 10 servidores (Grid 02) + 7 servidores (Grid 03). Poucos nós
"ativos" pulsam suavemente (jobs em execução), evocando cluster de computação e o
horizonte do Pampa. Respeita `prefers-reduced-motion`.

## Logomarca

Marca vetorial (SVG) própria: tile arredondado em acento azul contendo uma grade de
nós (3×3) com um caminho de nós conectados/ativos, representando processamento
multiusuário distribuído. Wordmark "LaMPAD" em Bricolage Grotesque. Versão favicon
derivada do mesmo SVG.

## Seções da landing

1. Header fixo: logo + nav + switcher PT/ES/EN + CTA Agendar
2. Hero: título, subtítulo, CTA "Agendar uso", "O Grid" + mini-stats reais
3. Sobre: o que é o LaMPAD, PNIPE, caráter multiusuário
4. Infraestrutura: 3 grids reais como cards com specs em monoespaçada
5. Agendamento: explicação + botão para o Google Calendar público
6. Parceiros: PPGs, grupos de pesquisa, colaboradores externos, PampaTec (chips/cards)
7. Comitê Gestor + Comitê Assessor: cards de pessoas (nomes/papéis reais)
8. Contato: lampad@unipampa.edu.br + CTA
9. Footer: vínculo Unipampa, acessibilidade, links

## Conteúdo real (fonte)

### Infraestrutura
- Grid 01 (workstations GPU): 1× RTX 5090 32GB + 96GB DDR5; 2× RTX 5080 16GB + 64GB
  DDR5; 2× RTX 3060 8GB + 64GB DDR4; 1× RTX 3060 8GB + 128GB DDR4
- Grid 02: 10× Intel Core i7-9700 @3.00GHz, 32GB cada
- Grid 03: 7× Intel Core i7-7700 @3.60GHz, 32GB cada

### Parceiros
- PPGs: PPGES, PPGEE, PPGEng, PPGCAP
- Grupos: AI Horizon Labs, GAMA, LEA, LESSE, LOS, NP3, CTA
- Externos: ITA, UNISINOS, UFAM, UFU, Max Planck Institute (Alemanha), UFRN, UFRGS,
  Universidad de Antioquia (Colômbia)
- Ecossistema: PampaTec

### Comitê Gestor
- Prof. Dr. Rodrigo Brandão Mansilha · Coordenador
- Prof. Dr. Diego Kreutz · Vice-Coordenador
- Prof. Dr. Gilleanes Thorwald Araujo Guedes · PPGES
- Profa. Dra. Chiara Valsecchi · PPGEng
- Prof. Dr. Felipe Bovolini Grigoletto · PPGEE
- Profa. Dra. Natalia Braun Chagas · Coordenação Acadêmica
- Julio César de Carvalho Lopes · STIC

### Comitê Assessor
- Prof. Dr. Alessandro Gonçalves Girardi · GAMA
- Prof. Dr. Claudio Schepke · CLP e LEA
- Prof. Dr. Elder de Macedo Rodrigues · CTA
- Prof. Dr. Maicon Bernardino da Silveira · LESSE
- Prof. Dr. Marcelo Caggiani Luizelli · LOS
- Prof. Dr. Silvio E. Quincozes · AI Horizon Labs

### Contato
- E-mail: lampad@unipampa.edu.br

## Estrutura de arquivos

```
index.html
css/styles.css
js/i18n.js     (dicionário PT/ES/EN + switcher, persistência localStorage)
js/main.js     (nav sticky, mobile menu, scroll reveal, grid hero)
assets/        (favicon.svg)
```

## Acessibilidade

Skip-link, HTML semântico com landmarks, foco visível por teclado, `aria-label`,
contraste AA, `prefers-reduced-motion` respeitado, layout mobile-first.
