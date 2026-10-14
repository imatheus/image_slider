export default function Background() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <div className="absolute top-20 right-10 h-48 w-36 rotate-6 rounded-3xl bg-mauve/10" />
      <div className="absolute bottom-20 left-10 h-48 w-36 -rotate-6 rounded-3xl bg-mauve/10" />
    </div>
  );
}
