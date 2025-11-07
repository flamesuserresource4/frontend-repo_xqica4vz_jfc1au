import { useRef, useState, useMemo } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  // Motion values for cursor-follow tilt
  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);
  const tiltX = useSpring(mvY, { stiffness: 120, damping: 20, mass: 0.6 });
  const tiltY = useSpring(mvX, { stiffness: 120, damping: 20, mass: 0.6 });
  const rotateX = useTransform(tiltX, [-50, 50], [10, -10]);
  const rotateY = useTransform(tiltY, [-50, 50], [-12, 12]);

  // Spline app ref
  const splineAppRef = useRef(null);
  const [unlocked, setUnlocked] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100; // 0..100
    const y = ((e.clientY - rect.top) / rect.height) * 100; // 0..100
    mvX.set(x - 50); // -50..50
    mvY.set(y - 50); // -50..50
  };

  const handleSplineLoad = (app) => {
    splineAppRef.current = app;
  };

  const handleToggleLock = () => {
    const next = !unlocked;
    setUnlocked(next);

    // Try to drive Spline scene if it has events/variables wired
    const app = splineAppRef.current;
    if (app) {
      try {
        // Emit generic mouse events that many Spline scenes listen to
        app.emitEvent('mouseDown');
        if (!next) app.emitEvent('mouseUp');
      } catch {}
      try {
        // If the scene has a boolean variable named `unlocked`, set it
        app.setVariable && app.setVariable('unlocked', next);
      } catch {}
    }
  };

  const glow = useMemo(
    () => (unlocked ? 'shadow-[0_0_60px_rgba(239,68,68,0.35)]' : 'shadow-[0_0_60px_rgba(34,197,94,0.25)]'),
    [unlocked]
  );

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full overflow-hidden bg-[radial-gradient(1200px_600px_at_70%_-10%,rgba(34,197,94,0.18),transparent),radial-gradient(900px_500px_at_20%_10%,rgba(239,68,68,0.12),transparent)]"
    >
      {/* 3D scene with interactive tilt */}
      <motion.div
        style={{ rotateX, rotateY }}
        animate={{ scale: unlocked ? 1.03 : 1 }}
        transition={{ type: 'spring', stiffness: 120, damping: 18 }}
        className={`absolute inset-0 will-change-transform ${glow}`}
        onClick={handleToggleLock}
      >
        <Spline
          scene="https://prod.spline.design/k3vzWf8TfEDJKl71/scene.splinecode"
          onLoad={handleSplineLoad}
          style={{ width: '100%', height: '100%' }}
        />
      </motion.div>

      {/* overlay that doesn't block interaction */}
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
            Minimal lock, maximal trust
            <span className="block text-zinc-200">follows your cursor — {unlocked ? 'unlocked' : 'click to unlock'}.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
            className="mt-5 max-w-xl text-zinc-300"
          >
            A clean, modern 3D lock with a white body and red shackle. Smooth parallax reacts to your mouse. Click to toggle an opening state; if the Spline scene has animations wired, it will play them.
          </motion.p>
          <div className="mt-8 flex items-center gap-4">
            <a
              href="#features"
              className="px-5 py-3 rounded-lg bg-white text-black font-medium hover:bg-zinc-100 transition-colors"
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:justify-self-end hidden md:flex"
        >
          <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-3 text-sm text-zinc-200">
            Status: <span className={unlocked ? 'text-red-400' : 'text-green-400'}>{unlocked ? 'Unlocked' : 'Locked'}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
