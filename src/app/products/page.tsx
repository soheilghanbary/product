import { useMemo } from "react";

export default function ProductsPage() {
  const products = useMemo(() => {
    return Array.from(Array(30).keys());
  }, []);

  return (
    <div className="grid xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
      {products.map((product, i) => (
        <div
          key={i}
          className="rounded-xl bg-secondary shadow-md p-3"
        >
          <img src="https://api.lorem.space/image/shoes?w=640&h=480&r=2020" className="w-full rounded-lg shadow-md" />
          <div className="text-xs flex flex-col gap-2 mt-4">
            <h2 className="text-heading">ساعت مچی Apple Watch Ultra G3341</h2>
            <p className="font-medium dark:text-indigo-300 text-indigo-400">3.400.000 تومان</p>
          </div>
        </div>
      ))}
    </div>
  );
}
