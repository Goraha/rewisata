import { addDoc, collection, getDocs, getFirestore, query,GeoPoint } from "firebase/firestore";
import app from "./init";

const firestore = getFirestore(app);

export async function retData(CollactionName: string) {
  const snapshot = await getDocs(collection(firestore, CollactionName)); 
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return data
}

export async function insertData(
  data:{
    nama: string,
    alamat: string,
    kontak: string,
    surel: string,
    tentang: string,
    kapasitas: number,
    harga: number,
    location: GeoPoint,
    //location: {latitude:number,longitude:number},
  }
) 
{
  const q = query(
    collection(firestore, "destinasi"),
  );
  try {
    await addDoc(collection(firestore, "destinasi"), data);
    return {status:true,statusCode:200,massage:"Sukses add data"}
  } catch (error) {
    return {status:false,statusCode:400,massage:"Gagal add data"}
  }
}