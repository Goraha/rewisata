"use client";

import { GeoPoint} from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useState } from "react";
import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
export default function FormAddDes() {
  
  const {push} = useRouter();
  const [error,setError] = useState("");
  const [loading,setLoading] = useState(false);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const res = await fetch("/api/destinasi/add", {
      method: "POST",
      body: JSON.stringify({
        nama: e.target.nama.value,
        alamat: e.target.alamat.value,
        kontak: e.target.kontak.value,
        surel: e.target.surel.value,
        tentang: e.target.tentang.value,
        kapasitas: Number(e.target.kapasitas.value),
        harga:  Number(e.target.harga.value),
        location: new GeoPoint(Number(e.target.lat.value), Number(e.target.lon.value)),
      }),
    });
    if(res.status===200){
      e.target.reset();
      push("/admin/destinasi");
      setLoading(false);
      setError("");
      alert("Berhasilang Menyimpan Data");
    }else{
      console.log(res);
      setError("Gagal Menyimpan Data");
      setLoading(false);
    }
  };
    return (
    <>
      {
        error !== '' && 
        <div className="w-full flex flex-col items-center justify-center">
        <h1>{error}</h1>
      </div>
      }
      <form className="w-full" onSubmit={(e)=>handleSubmit(e)}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <InputForm tipe="text" label="Nama Destinasi" name="nama" type="text" placeholder="Nama Destinasi..." divWidth="md:w-1/4"/>
          <InputForm tipe="text" label="Alamat" name="alamat" type="text" placeholder="" divWidth="md:w-1/4"/>
          <InputForm tipe="text" label="Kontak" name="kontak" type="text" placeholder="08xxxxxxx" divWidth="md:w-1/4"/>
          <InputForm tipe="text" label="Surel" name="surel" type="email" placeholder="gpa@gmail.com" divWidth="md:w-1/4"/>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <InputForm tipe="textarea" label="Tentang" name="tentang" type="" placeholder="" divWidth="md:w-full"/>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <InputForm tipe="text" label="Kapasitas" name="kapasitas" type="number" placeholder="1" divWidth="md:w-1/4"/>
          <InputForm tipe="text" label="Harga Tiket" name="harga" type="number" placeholder="1" divWidth="md:w-1/4"/>
          <InputForm tipe="text" label="Latitude" name="lat" type="text" placeholder="1" divWidth="md:w-1/4"/>
          <InputForm tipe="text" label="Longtitude" name="lon" type="text" placeholder="1" divWidth="md:w-1/4"/>
        </div>
        <div className="flex items-center justify-between">
          <div className="md:w-1/4">
            <Button variant="bg-blue-500 w-full" type="submit">
                Simpan
            </Button>
          </div>
        </div>
      </form>
    </>
      
  
    );
  };