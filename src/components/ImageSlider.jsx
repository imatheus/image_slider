import { useEffect, useState } from 'react';
import { slides } from '../data/slides.js';
import SliderControls from './SliderControls.jsx';

export default function ImageSlider() {
  const [index, setIndex] = useState(2);
  const activeSlide = slides[index];

  const next = () => setIndex((current) => (current + 1) % slides.length);
  const previous = () =>
    setIndex((current) => (current - 1 + slides.length) % slides.length);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        setIndex((current) => (current + 1) % slides.length);
      }
      if (event.key === 'ArrowLeft') {
        setIndex((current) => (current - 1 + slides.length) % slides.length);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <section aria-label="Galeria da vida selvagem" className="space-y-4">
      <div className="relative h-80 overflow-hidden rounded-3xl">
        {slides.map((slide, i) => (
          <img
            key={slide.id}
            src={slide.image}
            alt={slide.alt}
            className={`absolute size-full object-cover transition-opacity duration-500 ${
              i === index ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      <div aria-live="polite" className="space-y-2">
        <p className="text-sm text-mauve">{activeSlide.badge}</p>
        <h2 className="text-3xl font-bold">{activeSlide.animal}</h2>
        <p className="font-medium">{activeSlide.summary}</p>
        <p className="text-slate-500">{activeSlide.description}</p>
      </div>

      <SliderControls
        index={index}
        count={slides.length}
        onPrevious={previous}
        onNext={next}
        onSelect={setIndex}
      />
    </section>
  );
}
