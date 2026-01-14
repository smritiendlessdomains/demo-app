import EzoicAd from "../components/EzoicAd";

export default function ParkedDomainWeb3() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Banner */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 via-purple-600/20 to-pink-600/30 blur-3xl" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
          <h1 className="text-5xl md:text-6xl font-extrabold">
            myw3.site
          </h1>
          <p className="mt-6 text-gray-300 max-w-xl">
            A decentralized digital identity.
          </p>
        </div>
      </section>

      {/* 🔹 AD SLOT */}
      <div className="max-w-6xl mx-auto px-6 my-16">
        <EzoicAd id={101} />
      </div>

      {/* Portfolio */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-10">Projects</h2>
      </section>

      <footer className="border-t border-white/10 py-6 text-center text-gray-500 text-sm">
        Parked Domain · Powered by Next.js & Web3
      </footer>
    </main>
  );
}
