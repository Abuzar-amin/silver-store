import Container from "@/components/layout/Container";
import SearchBar from "./SearchBar";
import SortDropdown from "./SortDropdown";

export default function ShopToolbar() {
  return (
    <section className="py-6">
      <Container>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <SearchBar />
          <SortDropdown />
        </div>
      </Container>
    </section>
  );
}