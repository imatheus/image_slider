import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function SliderControls({ index, count, onPrevious, onNext, onSelect }) {
  const pages = Array.from({ length: count }, (_, i) => i);

  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-2">
        <button
          type="button"
          aria-label="Imagem anterior"
          onClick={onPrevious}
          className="rounded-full border border-mauve p-2 text-mauve hover:bg-mauve hover:text-white focus-visible:ring-4"
        >
          <ChevronLeft />
        </button>
        <button
          type="button"
          aria-label="Próxima imagem"
          onClick={onNext}
          className="rounded-full bg-mauve p-2 text-white hover:bg-ink focus-visible:ring-4"
        >
          <ChevronRight />
        </button>
      </div>

      <div className="flex gap-2">
        {pages.map((i) => (
          <button
            key={i}
            type="button"
            aria-label={`Ir para a imagem ${i + 1}`}
            aria-current={i === index ? 'true' : undefined}
            onClick={() => onSelect(i)}
            className={`size-3 rounded-full focus-visible:ring-4 ${
              i === index ? 'bg-mauve' : 'bg-mauve/30'
            }`}
          />
        ))}
      </div>

      <p className="font-bold">
        0{index + 1} / 0{count}
      </p>
    </div>
  );
}
