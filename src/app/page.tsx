
import Map from "./Map";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
      <div className="w-full h-96 bg-red-500">

      </div>
      <div className="w-full h-screen">
      <Map />
      </div>
    </main>
  );
}
