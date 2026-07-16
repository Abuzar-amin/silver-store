import Link from "next/link";
import Container from "./Container";

export default function Navbar() {
  return (
    <header className="border-b">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-xl font-semibold tracking-wide"
          >
            Silver Spot
          </Link>

          <div className="flex items-center gap-8">
            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </nav>
      </Container>
    </header>
  );
}