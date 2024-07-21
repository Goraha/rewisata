'use client'
import { useRouter } from "next/navigation";
import { useState} from "react";
import { FaFilePen,FaFileCircleMinus,FaMagnifyingGlass,FaFileCirclePlus,FaChevronRight,FaChevronLeft } from "react-icons/fa6";
import Button from "../../../components/Elements/Button";
import Link from 'next/link';
import Modal from "../../../components/LayModal";
import InputForm from "../../../components/Elements/Input";

export default function DaftarPen(props:any) {
  const {data,} = props;
  const [stModal,setstModal] = useState(false);
  const [deleteID,setdeleteID] = useState("");
  const [deleteList,setdeleteList] = useState([{
    id:"",
    nama:"",
  }]);
  const [error,setError] = useState("");
  const [loading,setLoading] = useState(false);
  const {push} = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');
  const searchFilter = (array:any) => {
    return array.filter(
      (el:any) => el.username.toLowerCase().includes(search)
    )
  }
  const handleChange = (e:any) => {
    setSearch(e.target.value);
  }

  const handleOnClick = (e:any) => {
    setdeleteID(e.currentTarget.id);
    
    setdeleteList(
      data.filter((i:any) => i.id === e.currentTarget.id)
    );
    setstModal(!stModal);
  }
  const handleOnClickBatal = () => {
    setdeleteID("");
    setstModal(!stModal);
  }

  const filter = searchFilter(data);
  const nbPerPage = 3;
  const lastIndex = currentPage * nbPerPage;
  const startIndex = lastIndex - nbPerPage ;
  const numberOfPages = Math.ceil(filter.length / nbPerPage);
  const records = filter.slice(startIndex, lastIndex);


  function nextPage(){
    if (currentPage != numberOfPages){
        setCurrentPage(prev => prev + 1)
    }
  }
  function prevPage(){
    if (currentPage != 1){
        setCurrentPage(prev => prev - 1)
    }
  }
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const res = await fetch("/api/destinasi/delete", {
      method: "POST",
      body: JSON.stringify({
        id: e.target.id.value,
      }),
    });
    if(res.status===200){
      e.target.reset();
      window.location.reload();
      setLoading(false);
      setError("");
      alert("Berhasil Hapus Data");
    }else{
      console.log(res);
      setError("Gagal Hapus Data");
      setLoading(false);
    }
  };
  return (
    <div className="w-full h-fit my-5 p-5 border-2 rounded">
      <div className='w-full'>
        <h1 className='text-2xl font-bold'>Data Pengelola</h1>
      </div>
      <div className="flex justify-end ">
        <div className="relative flex rounded-lg shadow-sm">
          <input type="text" placeholder="CarI Berdasarkan Nama..." onChange={handleChange} 
          className="py-3 px-4 ps-11 w-full text-sm border border-gray-200 rounded-s-xl rounded-e-xl"/>
          <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
            <FaMagnifyingGlass  />
          </div> 
        </div>
      </div>
      <div className='w-full mt-5 flex justify-end'>
      <Link href={`/admin/pengelola/tambah`}>
        <Button variant="bg-blue-500">
          <FaFileCirclePlus />
        </Button>
      </Link>
      </div>
      <div className='w-full mt-5'>
        <table className="w-full table-auto">
          <thead>
          <tr>
            <th>Username</th>
            <th>Password</th>
            <th>Aksi</th>
          </tr>
          </thead>
          <tbody>
            {
              records.map((item: any) => {
                return (
                  <tr key={item.id} className="bg-white border-b hover:bg-gray-50">
                    <td className='text-center'>
                      {item.username}
                    </td>
                    <td className='text-center'>
                      {item.password}
                    </td>
                    <td className='text-center w-1/6'>
                    <Link href={`/admin/pengelola/ubah?id=${item.id}`}>
                      <Button variant="bg-blue-500">
                        <FaFilePen />
                      </Button>
                    </Link>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        <Modal title="Hapus Data Destinasi" stModal={stModal}>
        <form className="w-full" onSubmit={(e)=>handleSubmit(e)}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <input type="hidden" name="id" value={deleteID}/>
            <InputForm tipe="text" value={deleteList[0].nama} label="Nama Destinasi" name="nama" type="text" placeholder="Nama Destinasi..." divWidth="md:w-1/4"/>
          </div>
          <div className="flex items-center justify-center">
            <div className="md:w-1/4 p-1">
              <Button variant="bg-red-500 w-full text-sm" type="submit">
                  Hapus
              </Button>
            </div>
            <div className="md:w-1/4 p-1">
              <Button variant="bg-blue-500 w-full text-sm" type="button" onClick={handleOnClickBatal}>
                  Batal
              </Button>
            </div>
          </div>
        </form>
        </Modal>
      </div>
      
      <div className="flex justify-end ">

      </div>
      <div className='w-full justify-end items-center p-5'>
        <div className='flex flex-row items-center gap-4'>
          <span className='cursor-pointer font-semibold' onClick={() => prevPage()}><FaChevronLeft /></span>
          <div className='flex flex-row items-center'>
            <span>{currentPage}</span>
            <span>/</span>
            <span>{numberOfPages}</span>
          </div>
          <span className='cursor-pointer font-semibold' onClick={() => nextPage()}><FaChevronRight /></span>
        </div>
      </div>
    </div>
    
  );
};