"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Paragraph", href: "/paragraph" },
  { name: "Substack", href: "/substack" },
  { name: "Parked Domain Minimal", href: "/parked-domain-minimal" },
  { name: "Parked Domain Web3", href: "/parked-domain-web3" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="text-lg font-semibold text-gray-900">
          MyApp
        </Link>

        {/* Links */}
        <div className="flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm transition-colors ${
                  isActive
                    ? "font-semibold text-gray-900"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
