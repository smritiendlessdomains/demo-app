export default function ParkedDomainWeb3() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Banner */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 via-purple-600/20 to-pink-600/30 blur-3xl" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            myw3.site
          </h1>
          <p className="mt-6 text-gray-300 max-w-xl">
            A decentralized digital identity.  
            This domain is parked for demonstration and future activation.
          </p>

          {/* Socials */}
          <div className="mt-8 flex gap-4">
            {["X", "GitHub", "Lens", "Email"].map((item) => (
              <a
                key={item}
                href="#"
                className="px-4 py-2 border border-white/20 rounded-lg hover:bg-white hover:text-black transition"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-10">Projects</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Decentralized Identity",
            "AI Content Automation",
            "On-chain Profiles",
          ].map((project) => (
            <div
              key={project}
              className="border border-white/10 rounded-xl p-6 hover:border-cyan-400 transition"
            >
              <h3 className="text-xl font-semibold">{project}</h3>
              <p className="mt-3 text-sm text-gray-400">
                Experimental project showcasing Web3 + AI infrastructure.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-6 text-center text-gray-500 text-sm">
        Parked Domain · Powered by Next.js & Web3
      </footer>
    </main>
  );
}
