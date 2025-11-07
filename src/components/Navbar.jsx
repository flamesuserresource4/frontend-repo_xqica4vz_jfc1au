import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-20 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <motion.a
          href="#"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 text-green-400"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-green-400 animate-pulse" />
          <span className="font-semibold tracking-wide">NeoLock</span>
        </motion.a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          <a
            href="#preview"
            className="px-3 py-1.5 rounded-md bg-green-500/10 text-green-300 border border-green-500/30 hover:bg-green-500/20 transition-colors"
          >
            Preview
          </a>
        </nav>
      </div>
    </header>
  );
}
