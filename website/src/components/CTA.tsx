import Link from '@docusaurus/Link';

export const CTA: React.FC = () => {
  return (
    <section className="py-24 px-8 md:px-24 bg-background border-t border-outline-variant/30">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-8 text-white">
          Ready to optimize your model loading?
        </h2>
        <Link to="/docs/intro" className="px-12 py-6 bg-primary-container text-black font-black uppercase tracking-[0.3em] text-lg hover:brightness-110 transition-all active:scale-95 shadow-[0_0_30px_rgba(0,245,255,0.3)] no-underline hover:no-underline">
          Get Started Now
        </Link>
        <p className="mt-8 font-mono text-sm uppercase tracking-[0.2em] text-on-surface-variant font-bold">
          Python sdk available on github
        </p>
      </div>
    </section>
  );
};