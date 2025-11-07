import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[radial-gradient(1200px_600px_at_70%_-10%,rgba(22,163,74,0.25),transparent),radial-gradient(800px_400px_at_20%_10%,rgba(34,197,94,0.15),transparent)]">
      {/* Spline scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/mwBbOy4jrazr59EO/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* subtle gradient overlay that doesn't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white"
          >
            Cyberpunk-grade security,
            <span className="block text-green-400">real-world reliable.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
            className="mt-5 max-w-xl text-zinc-300"
          >
            A 3D animated lock forged for the future. Dark theme, neon green highlights, and ultra-realistic material rendering—built to showcase fintech and identity protection.
          </motion.p>
          <div className="mt-8 flex items-center gap-4">
            <a
              href="#features"
              className="px-5 py-3 rounded-lg bg-green-500 text-black font-medium shadow-[0_0_30px_rgba(34,197,94,0.35)] hover:shadow-[0_0_40px_rgba(34,197,94,0.55)] transition-shadow"
            >
              Explore Features
            </a>
            <a
              href="#preview"
              className="px-5 py-3 rounded-lg border border-white/15 text-white hover:bg-white/5 transition-colors"
            >
              Live Preview
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
