import FormUpdDes from "../components/Fragments/FormUpdDes";

async function getData(id:any) {
  const res = await fetch(`http://localhost:3000/api/destinasi?id=${id}`,{
    cache:"no-store",
  });
  if(!res.ok){
    throw new Error('Failed to fetch data');
  }else{
    return res.json();
  }
}
export default async function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  
  const data = await getData(searchParams?.id);
  //console.log(data);
  return (
    <main className="py-24">
      <div className="p-4 sm:ml-64">
        <div className="p-4">
          <div className="w-full h-fit p-5 border-2 rounded">
            <div className="w-full flex flex-col justify-end mb-5">
              <h1 className="text-2xl font-bold w-fit">Ubah Destinasi</h1>
            </div>
              <FormUpdDes data={data}/>
          </div>
        </div>
      </div>
    </main>
  );
}