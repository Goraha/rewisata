
export default function Table({ data }: any) {
  return (
    <table className="w-full table-auto">
      <thead>
      <tr>
        <th>Nama</th>
        <th>Kapasitas</th>
        <th>Harga</th>
      </tr>
      </thead>
      <tbody>
        {
          data.map((item: any) => {
            return (
              <tr key={item.id} className="bg-white border-b hover:bg-gray-50">
                <td>{item.nama}</td>
                <td>{item.kapasitas}</td>
                <td>{item.harga}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}