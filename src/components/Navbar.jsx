import React from 'react';
import { ShieldCheck, Phone, Menu } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setOpen(false);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto container px-6">
        <div className="mt-4 backdrop-blur-xl bg-slate-900/60 border border-white/10 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-teal-400 to-cyan-500 grid place-items-center shadow">
                <ShieldCheck className="h-5 w-5 text-slate-900" />
              </div>
              <span className="font-semibold text-white tracking-tight">AMMN Brokerage</span>
            </a>

            <nav className="hidden md:flex items-center gap-6 text-slate-200">
              <a href="#solutions" className="hover:text-white transition-colors">Solutions</a>
              <a href="#process" className="hover:text-white transition-colors">Process</a>
              <a href="#testimonials" className="hover:text-white transition-colors">Why Us</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              <a href="#contact" className="ml-2 inline-flex items-center gap-2 rounded-xl bg-teal-500/90 hover:bg-teal-400 text-slate-950 font-semibold px-4 py-2 transition-colors"> <Phone className="h-4 w-4"/> Call </a>
            </nav>

            <button onClick={() => setOpen(v => !v)} className="md:hidden text-white/90">
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {open && (
            <div className="md:hidden px-4 pb-4 space-y-2 text-slate-200">
              <a href="#solutions" className="block">Solutions</a>
              <a href="#process" className="block">Process</a>
              <a href="#testimonials" className="block">Why Us</a>
              <a href="#contact" className="block">Contact</a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
