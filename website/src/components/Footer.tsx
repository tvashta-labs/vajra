import Link from '@docusaurus/Link';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-outline-variant/40 bg-background flex flex-col md:flex-row justify-between items-center px-12 py-16">
      <div className="mb-8 md:mb-0">
        <div className="text-primary-container font-black uppercase text-base mb-2">VAJRA</div>
        <div className="font-body text-xs uppercase tracking-[0.2em] text-on-surface-variant font-bold">
          © 2026 tvashta labs
        </div>
      </div>
      <div className="flex flex-wrap gap-8">
        <a className="font-body text-xs uppercase tracking-[0.2em] text-on-surface-variant font-bold hover:text-white transition-all" href="https://github.com/tvashta-labs/vajra">
          Github
        </a>
        <Link className="font-body text-xs uppercase tracking-[0.2em] text-on-surface-variant font-bold hover:text-white transition-all" to="/docs/intro">
          Documentation
        </Link>
      </div>
    </footer>
  );
};