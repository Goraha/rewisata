"use client";
import { FaLocationCrosshairs,FaRegCircleXmark } from "react-icons/fa6";
import { GeoPoint} from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useState  } from "react";
import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import Map from "../Map";

export default function FormUpdDes(props:any) {
  const data =props.data.data;
  const {push} = useRouter();
  const [error,setError] = useState("");
  const [loading,setLoading] = useState(false);
  const [stModal,setstModal] = useState(false);
  const [posisi, setPosisi] = useState([
    {
      lat:data?.location.latitude,
      lng:data?.location.longitude,
    }
  ]);

  const sendDataToParent = (index:any) => {
    setPosisi([
      {
        lat:index.lat,
        lng:index.lng,
      }
    ]);
  };

 const handleOnClick = () => {
   setstModal(!stModal);
 }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const res = await fetch("/api/destinasi/update", {
      method: "POST",
      body: JSON.stringify({
        id: data.id,
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
            <InputForm tipe="text" value={data?.nama} label="Nama Destinasi" name="nama" type="text" placeholder="Nama Destinasi..." divWidth="md:w-1/4"/>
            <InputForm tipe="text" value={data?.alamat} label="Alamat" name="alamat" type="text" placeholder="" divWidth="md:w-1/4"/>
            <InputForm tipe="text" value={data?.kontak} label="Kontak" name="kontak" type="text" placeholder="08xxxxxxx" divWidth="md:w-1/4"/>
            <InputForm tipe="text" value={data?.surel} label="Surel" name="surel" type="email" placeholder="gpa@gmail.com" divWidth="md:w-1/4"/>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <InputForm tipe="textarea" value={data?.tentang} label="Tentang" name="tentang" type="" placeholder="" divWidth="md:w-full"/>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <InputForm tipe="text" value={data?.kapasitas} label="Kapasitas" name="kapasitas" type="number" placeholder="1" divWidth="md:w-1/4"/>
            <InputForm tipe="text" value={data?.harga} label="Harga Tiket" name="harga" type="number" placeholder="1" divWidth="md:w-1/4"/>
            <div className="w-full px-3 md:w-1/3">
              <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2">
                Lokasi
              </label>
              <div className="sm:flex">
                <input type="text" placeholder="Latitude" name="lat" value={posisi[0].lat} className="py-3 px-4 pe-11 block w-1/2 text-xs bg-gray-200 text-gray-700 focus:outline-none focus:bg-white border border-r-black"/>
                <input type="text" placeholder="Longtitude" name="lon" value={posisi[0].lng} className="py-3 px-4 pe-11 block w-1/2 text-xs bg-gray-200 text-gray-700 focus:outline-none focus:bg-white border "/>
                <span >
                <Button variant="bg-blue-500 h-full" type="button" onClick={handleOnClick}><FaLocationCrosshairs /> </Button>
                </span>
              </div>
            </div>
            
            
          </div>
          <div className="flex items-center justify-between">
            <div className="md:w-1/4">
              <Button variant="bg-blue-500 w-full text-sm" type="submit">
                  Simpan
              </Button>
            </div>
          </div>
        </form>
        <div id="default-modal" aria-hidden="true" className={`${stModal ? "block" : "invisible"} fixed top-0 right-0 left-0 md:left-1/3 z-50 w-full`}>
          <div className="relative p-4 w-full max-w-2xl max-h-full">
              
            <div className="relative bg-white rounded-lg drop-shadow-2xl bg-gray-50">
          
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-black">
                Lokasi
              </h3>
              <button type="button" className="hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-hide="default-modal"  onClick={handleOnClick}>
                  <FaRegCircleXmark />
                <span className="sr-only">Close modal</span>
              </button>
            </div>
              
            <div className="p-4 md:p-5 space-y-4">
              <div className="w-full h-96">
                <Map sendDataToParent={sendDataToParent} lat={posisi[0].lat} lng={posisi[0].lng}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
      
  
    );
  };