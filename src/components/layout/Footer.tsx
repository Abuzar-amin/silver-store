import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t py-8">
      <Container>
        <p className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Silver Store. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}