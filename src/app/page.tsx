import dynamic from "next/dynamic";
import { useMemo } from "react";
import { FaMagnifyingGlass  } from "react-icons/fa6";
import DestList from "@/components/DestList";
import Navbar from "@/components/Navbar";

async function getData() {
  //const res = await fetch('http://localhost:3000/api/destinasi');
  const res = await fetch('http://localhost:3000/api/destinasi',
    {
      cache:"no-store",
    }

  );
  if(!res.ok){
    throw new Error('Failed to fetch data');
  }else{
    return res.json();
  }
}

export default async function Page() {
  const Map = useMemo(() => dynamic(
    () => import('../components/Map'),
    {
        loading: () => <p>A map is loading</p>,
        ssr: false
    }
  ), [])

  const data = await getData();
  return (
    <>
    <Navbar />
    <main className="flex flex flex-col sm:flex-row min-h-screen p-5">
    
    <div className="w-full sm:w-2/3 h-fit border-2 p-5 my-5 mx-0 sm:mx-5 rounded">
      <div className="w-full">
        <div className="relative flex rounded-lg shadow-sm">
          <input type="text" className="py-3 px-4 ps-11 block w-full border-gray-200 shadow-sm rounded-s-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" />
          <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
            <FaMagnifyingGlass  />
          </div>
          <button type="button" className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">Cari</button>
        </div>
      </div>
      <div className="w-full h-96 my-5">
        <Map data={data}/>
      </div>
    </div>

    <div className="w-full sm:w-1/3 h-fit my-5 p-5 border-2 rounded">
      <DestList data={data}/>
    </div>
    </main>
    </>
    
  )
}