export default function HomePage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
      <div className="bg-primary-foregoround p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2  bg-green-400">Test</div>
      <div className="bg-primary-foregoround p-4 rounded-lg bg-white text-black">Test</div>
      <div className="bg-primary-foregoround p-4 rounded-lg  bg-green-400">Test</div>
      <div className="bg-primary-foregoround p-4 rounded-lg lg:col-span-2 bg-white text-black">Test</div>
      <div className="bg-primary-foregoround p-4 rounded-lg bg-green-400">Test</div>
      <div className="bg-primary-foregoround p-4 rounded-lg bg-white text-black">Test</div>
    </div>
  );
}
