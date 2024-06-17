import { addDoc, collection, getDocs, getFirestore, query,GeoPoint,updateDoc,doc,deleteDoc } from "firebase/firestore";
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

export async function updateData(
  data:{
    id: string,
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
  try {
    await updateDoc(doc(firestore, "destinasi", data.id), {
      nama: data.nama,
      alamat: data.alamat,
      kontak: data.kontak,
      surel: data.surel,
      tentang: data.tentang,
      kapasitas: data.kapasitas,
      harga: data.harga,
      location: data.location,
    });
    //await addDoc(collection(firestore, "destinasi"), data);
    return {status:true,statusCode:200,massage:"Sukses update data"}
  } catch (error) {
    return {status:false,statusCode:400,massage:"Gagal update data"}
  }
}

export async function deleteData(
  data:{
    id: string,
  }
) 
{
  try {
    await deleteDoc(doc(firestore, "destinasi", data.id));
    //await addDoc(collection(firestore, "destinasi"), data);
    return {status:true,statusCode:200,massage:"Sukses hapus data"}
  } catch (error) {
    return {status:false,statusCode:400,massage:"Gagal hapus data"}
  }
}