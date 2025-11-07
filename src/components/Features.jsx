import { Shield, Lock, Sparkles, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Shield,
    title: 'Bank-grade encryption',
    desc: 'Designed for fintech and identity systems with uncompromising security.'
  },
  {
    icon: Lock,
    title: 'Realistic 3D presence',
    desc: 'Physically-inspired materials and lighting for a believable cyber-lock.'
  },
  {
    icon: Cpu,
    title: 'Optimized performance',
    desc: 'Smooth animation and responsive interactions across devices.'
  },
  {
    icon: Sparkles,
    title: 'Neon cyberpunk aesthetic',
    desc: 'Dark UI with emerald accents and subtle glow effects.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white"
        >
          Built for the future
        </motion.h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 hover:border-green-500/30 transition-colors"
            >
              <f.icon className="h-6 w-6 text-green-400" />
              <h3 className="mt-4 font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-zinc-300">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
