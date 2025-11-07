import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <section id="preview" className="py-24 bg-gradient-to-b from-black via-zinc-950 to-black">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl md:text-3xl font-bold">See the lock in action</h3>
            <p className="mt-3 text-zinc-300">Interact with the 3D model above. Rotate, zoom, and explore the cyberpunk texture work and realistic reflections.</p>
            <div className="mt-10 grid sm:grid-cols-2 gap-6 text-left">
              <div className="rounded-xl border border-white/10 p-6 bg-white/5">
                <h4 className="font-semibold">Interaction Tips</h4>
                <ul className="mt-2 list-disc pl-5 text-sm text-zinc-300 space-y-1">
                  <li>Drag to rotate the lock.</li>
                  <li>Scroll to zoom in/out.</li>
                  <li>Double-tap to focus on parts.</li>
                </ul>
              </div>
              <div className="rounded-xl border border-white/10 p-6 bg-white/5">
                <h4 className="font-semibold">Tasarım Notu</h4>
                <p className="mt-2 text-sm text-zinc-300">Koyu temada neon yeşil yansımalarla siberpunk bir his verirken, gerçekçi malzeme ve ışık davranışları korunur.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
