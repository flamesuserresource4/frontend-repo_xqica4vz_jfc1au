export default function Footer() {
  return (
    <footer id="contact" className="relative py-10 border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-400">
        <p className="text-sm">© {new Date().getFullYear()} NeoLock — Cybersecurity in motion.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Support</a>
        </div>
      </div>
    </footer>
  );
}
