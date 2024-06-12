"use client";
import FormAddDes from "../../components/Fragments/FormAddDes";
import Button from "../../components/Elements/Button";
export default function Page() {
  
  return (
    <main className="py-24">
       <div className="p-4 sm:ml-64">
        <div className="p-4">
          <div className="w-full h-fit my-5 p-5 border-2 rounded">
          <div className="w-full flex flex-col justify-end mb-5">
          <Button variant=" w-fit bg-blue-500" type="submit">
              Kembali
          </Button>
            <h1 className="text-2xl font-bold w-fit">Tambah Destinasi</h1>
          </div>
            <FormAddDes />
          </div>
        </div>
      </div>
    </main>
  );
}