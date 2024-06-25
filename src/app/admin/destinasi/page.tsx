
import DaftarDes from "./components/Fragments/DaftarDes";
async function getData() {
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
  const data = await getData();
  return (
    <main className="py-24">
       <div className="p-4 sm:ml-64">
        <div className="p-4">
          <DaftarDes data={data.data}/>
        </div>
      </div>
    </main>
  );
}