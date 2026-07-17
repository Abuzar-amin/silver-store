import { supabase } from "@/lib/supabase";

export default async function TestPage() {
  const { data, error } = await supabase
    .from("products")
    .select("*");

  if (error) {
    return (
      <pre className="p-8 text-red-600">
        {JSON.stringify(error, null, 2)}
      </pre>
    );
  }

  return (
    <pre className="p-8">
      {JSON.stringify(data, null, 2)}
    </pre>
  );
}