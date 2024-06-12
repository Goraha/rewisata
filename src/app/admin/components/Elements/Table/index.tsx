'use client'
import React, { useState } from 'react'
import { FaPencil,FaX } from "react-icons/fa6";
import Button from "../../Elements/Button";
export default function Table(props:any) {
const {data,} = props;

const [currentPage, setCurrentPage] = useState(1)
const nbPerPage = 3;
const lastIndex = currentPage * nbPerPage
const startIndex = lastIndex - nbPerPage 
const numberOfPages = Math.ceil(data.length / nbPerPage)
const records = data.slice(startIndex, lastIndex)
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
                  <Button variant="bg-slate-500" type="submit">
                    <FaPencil />
                  </Button>
                  <Button variant="bg-red-500" type="submit">
                    <FaX />
                  </Button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <div className='w-full flex flex-row items-center p-5'>
        <div className='flex flex-row items-center gap-4'>
          <span className='cursor-pointer font-semibold' onClick={() => prevPage()}>prev</span>
          <div className='flex flex-row items-center'>
            <span>{currentPage}</span>
            <span>/</span>
            <span>{numberOfPages}</span>
          </div>
          <span className='cursor-pointer font-semibold' onClick={() => nextPage()}>next</span>
        </div>
    </div>
    </div>
    
  );
};