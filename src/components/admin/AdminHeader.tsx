export default function AdminHeader() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-8">
      <h1 className="text-xl font-semibold">
        Admin Dashboard
      </h1>

      <div className="text-sm text-gray-500">
        Welcome back 👋
      </div>
    </header>
  );
}