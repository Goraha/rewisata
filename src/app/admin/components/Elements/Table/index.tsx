'use client'
import React, { useState } from 'react'
import { FaFilePen,FaFileCircleMinus,FaMagnifyingGlass,FaFileCirclePlus,FaChevronRight,FaChevronLeft } from "react-icons/fa6";
import Button from "../../Elements/Button";
import Link from 'next/link';

export default function Table(props:any) {
  const {data,} = props;

  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');
  const searchFilter = (array:any) => {
    return array.filter(
      (el:any) => el.nama.toLowerCase().includes(search)
    )
  }

    
  const handleChange = (e:any) => {
    setSearch(e.target.value);
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

  return (
    <div className="w-full h-fit my-5 p-5 border-2 rounded">
      <div className='w-full'>
        <h1 className='text-2xl font-bold'>Data Destinasi</h1>
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
      <Link href={`/admin/destinasi/tambah`}>
        <Button variant="bg-blue-500">
          <FaFileCirclePlus />
        </Button>
      </Link>
      </div>
      <div className='w-full mt-5'>
        <table className="w-full table-auto">
          <thead>
          <tr>
            <th>Nama</th>
            <th>Kapasitas</th>
            <th>Harga Tiket</th>
            <th>Aksi</th>
          </tr>
          </thead>
          <tbody>
            {
              records.map((item: any) => {
                return (
                  <tr key={item.id} className="bg-white border-b hover:bg-gray-50">
                    <td>
                      {item.nama}
                    </td>
                    <td className='text-center'>
                      {item.kapasitas}
                    </td>
                    <td className='text-center'>
                      {item.harga}
                    </td>
                    <td className='text-center w-1/6'>
                    <Link href={`/admin/destinasi/ubah?id=${item.id}`}>
                      <Button variant="bg-blue-500">
                        <FaFilePen />
                      </Button>
                    </Link>
                    
                    <Button variant="bg-red-500 ml-1" id={item.id}>
                      <FaFileCircleMinus />
                    </Button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
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