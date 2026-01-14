import Image from "next/image";

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

            {/* Socials */}
            <div className="mt-6 space-y-2">
              <a href="#" className="block text-indigo-600 hover:underline">
                Twitter / X
              </a>
              <a href="#" className="block text-indigo-600 hover:underline">
                GitHub
              </a>
              <a href="#" className="block text-indigo-600 hover:underline">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold mb-6">Portfolio</h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {["AI Identity Platform", "Web3 Profile Builder", "RSS Content Engine"].map(
              (item) => (
                <div
                  key={item}
                  className="bg-white rounded-xl shadow p-5 hover:shadow-lg transition"
                >
                  <h3 className="font-semibold">{item}</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Short description of the project, tools used, and outcome.
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500">
        © 2026 smriti.eth · Parked Domain Demo
      </footer>
    </main>
  );
}
