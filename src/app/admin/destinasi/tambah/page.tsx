import FormAddDes from "../components/Fragments/FormAddDes";

export default async function Page() {
  return (
    <main className="py-24">
      <div className="p-4 sm:ml-64">
        <div className="p-4">
          <div className="w-full h-fit p-5 border-2 rounded">
            <div className="w-full flex flex-col justify-end mb-5">
              <h1 className="text-2xl font-bold w-fit">Tambah Destinasi</h1>
            </div>
              <FormAddDes />
          </div>
        </div>
      </div>
    </main>
  );
}