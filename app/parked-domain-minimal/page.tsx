import EzoicAd from "../components/EzoicAd";

export default function ParkedDomainMinimal() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Banner */}
      <section className="relative h-72 bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          smriti.eth
        </h1>
        <p className="absolute bottom-6 text-white/80">
          Digital Identity · Web3 Builder
        </p>
      </section>

      {/* 🔹 AD SLOT */}
      <div className="max-w-5xl mx-auto px-6 my-10">
        <EzoicAd id={101} />
      </div>

      {/* Profile */}
      <section className="max-w-5xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
        {/* Left */}
        <div className="md:col-span-1">
          <div className="rounded-xl bg-white shadow p-6">
            <h2 className="text-xl font-semibold">About</h2>
            <p className="mt-4 text-sm text-gray-600">
              This domain is parked for demo purposes. It represents a
              decentralized digital identity showcasing work, links, and
              portfolio.
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold mb-6">Portfolio</h2>
        </div>
      </section>

      <footer className="text-center py-6 text-sm text-gray-500">
        © 2026 smriti.eth · Parked Domain Demo
      </footer>
    </main>
  );
}
