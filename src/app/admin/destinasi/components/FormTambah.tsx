"use client";

export default function FormInput() {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    fetch("/api/destinasi/add", {
      method: "POST",
      body: JSON.stringify({
        nama: e.target.nama.value,
        alamat: e.target.alamat.value,
        kontak: e.target.kontak.value,
        surel: e.target.surel.value,
        tentang: e.target.tentang.value,
        kapasitas: e.target.kapasitas.value,
        harga: e.target.harga.value,
        lat: e.target.lat.value,
        lon: e.target.lon.value,
      }),
    });
  };


  return (
    <form className="w-full" onSubmit={(e)=>handleSubmit(e)}>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2">
            Nama Destinasi
          </label>
          <input type="text" name="nama" placeholder="Nama Destinasi..." className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" />
        </div>
        <div className="w-full md:w-1/4  px-3">
          <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2">
            Alamat
          </label>
          <input type="text" name="alamat"  placeholder="" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  />
        </div>
        <div className="w-full md:w-1/6 px-3">
          <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2">
            Kontak
          </label>
          <input type="text" name="kontak" placeholder="" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  />
        </div>
        <div className="w-full md:w-1/4  px-3">
          <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2">
            Surel
          </label>
          <input type="email" name="surel"  placeholder="destinasi@gmail.com" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Tentang
          </label>
          <textarea name="tentang" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" />
          <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you d like</p>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        
        <div className="w-full md:w-1/6  px-3">
          <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2">
            Kapasitas
          </label>
          <input type="number" name="kapasitas" placeholder="" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  />
        </div>
        <div className="w-full md:w-1/6  px-3">
          <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2">
            Harga Tiket
          </label>
          <input type="number" name="harga" placeholder="" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  />
        </div>
        
        <div className="w-full md:w-1/4  px-3">
          <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2">
            Lokasi/Latitude
          </label>
          <input type="text" name="lat" placeholder="" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  />
        </div>
        <div className="w-full md:w-1/4  px-3">
          <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2">
            Lokasi/Longtitude
          </label>
          <input type="text" name="lon" placeholder="" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  />
        </div>
      </div>
      
      <div className="md:flex md:items-center">
        <div className="md:w-2/3">
          <button type="submit" className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
            Simpan
          </button>
        </div>
      </div>
    </form>
  )
}