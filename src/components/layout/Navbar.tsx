import Link from "next/link";
import { Search, ShoppingBag } from "lucide-react";

import Container from "./Container";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md">
      <Container>
        <nav className="flex h-20 items-center justify-between">
          <Link
    href="/"
    className="flex flex-col leading-none"
>
    <span className="text-2xl font-semibold tracking-[0.18em]">
        Silver Spot
    </span>

    <span className="mt-1 text-[10px] uppercase tracking-[0.3em] text-gray-500">
        925 Sterling Silver
    </span>
</Link>

          <div className="hidden items-center gap-10 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium tracking-wide text-gray-700 transition-colors hover:text-black"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-5">
            <button
              type="button"
              aria-label="Search"
              className="transition-opacity hover:opacity-70"
            >
              <Search className="h-5 w-5" />
            </button>

            <button
              type="button"
              aria-label="Shopping Cart"
              className="transition-opacity hover:opacity-70"
            >
              <ShoppingBag className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </Container>
    </header>
  );
}