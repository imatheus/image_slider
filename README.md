# WILD / STORIES — Image Slider

Aula 11: galeria interativa de animais feita com **Vite + React (JSX) + Tailwind CSS v4 + Lucide React**.

## Como rodar

```bash
npm install
npm run dev
```

## Arquitetura

```
App
├── Background          (cartões inclinados com ângulos fixos)
├── Header
├── Hero / Introdução
└── ImageSlider         (estado: index)
    ├── imagens (map a partir de slides, sobrepostas com relative/absolute)
    ├── conteúdo do slide ativo
    └── SliderControls  (anterior, próximo, indicadores, contador 03 / 05)
```

- `src/data/slides.js`: um único array de objetos (`id`, `image`, `alt`, `badge`, `animal`, `summary`, `description`).
- `src/components/ImageSlider.jsx`: `useState` para o slide ativo, navegação circular com módulo e `useEffect` para as setas do teclado (com limpeza do listener).
- `src/components/SliderControls.jsx`: recebe `onPrevious`, `onNext` e `onSelect` por props; indicadores clicáveis com `aria-current`.
- `src/index.css`: tokens `@theme` (`ink`, `mauve`, `lavender`).
- Ícones: `lucide-react`.

## Imagens

Ficam em `src/assets/images/image-1.jpg` ... `image-5.jpg` e são importadas em `src/data/slides.js`. Fotos baixadas da Wikimedia Commons (huskies, urso-kodiak, panda, leão e girafa); confira a licença de cada arquivo na página da Commons antes de publicar. Para usar as do `slider.zip` do professor, basta substituir os arquivos mantendo os nomes.

## Acessibilidade

`button type="button"`, `aria-label` nos controles, `aria-current` no indicador ativo, `aria-live` no conteúdo, `alt` nas imagens e foco visível.

## Testes manuais

- Próximo/anterior funcionam e são circulares (1º ↔ último).
- Setas ← → do teclado trocam o slide.
- Indicadores levam ao slide escolhido; contador acompanha.
- Layout em duas colunas no desktop e vertical no mobile.

## Screenshots

_Adicionar capturas desktop (1440 × 900) e mobile (390 × 844)._
