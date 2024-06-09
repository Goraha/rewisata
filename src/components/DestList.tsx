
export default function DestList({ data }: any) {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center">
        <h1 className="text-2xl font-bold">Destinasi Terdekat</h1>
      </div>
      <div className="divide-y">
        {
          data.data.map((item: any) => {
            return (
              <div key={item.id}>
                <div>
                  <p className="font-bold">{item.nama}</p>
                  <p>{item.tentang}</p>
                  <p>Harga Tiket : {item.harga}</p>
                  <p>kapasitas : {item.kapasitas} orang</p>
                  <button>Detail</button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}