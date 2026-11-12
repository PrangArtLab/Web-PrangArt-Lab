export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-charcoal px-5 text-ivory">
      <div className="text-center">
        <p className="mb-3 text-xs uppercase tracking-[0.32em] text-ivory/50">404</p>
        <h1 className="text-4xl font-black tracking-[-0.06em] sm:text-5xl">This page wandered off.</h1>
        <p className="mt-4 max-w-md text-ivory/70">The page you requested cannot be found. Return to the studio and explore our work.</p>
        <a href="/" className="mt-8 inline-flex rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-charcoal">
          Back to home
        </a>
      </div>
    </main>
  );
}
