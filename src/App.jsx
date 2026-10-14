import Background from './components/Background.jsx';
import ImageSlider from './components/ImageSlider.jsx';
import panda from './assets/images/image-3.jpg';

export default function App() {
  return (
    <div className="relative min-h-screen bg-lavender text-ink">
      <Background />
      <div className="relative mx-auto max-w-5xl p-6">
        <header className="mb-10">
          <img
            src={panda}
            alt="Avatar"
            className="size-12 rounded-full border-2 border-mauve object-cover"
          />
        </header>
        <main className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <section className="space-y-4">
            <h1 className="text-5xl font-bold">A natureza em cada detalhe.</h1>
            <p className="text-lg text-slate-500">Descubra espécies extraordinárias.</p>
          </section>
          <ImageSlider />
        </main>
      </div>
    </div>
  );
}
