import { collection, getDocs, getFirestore } from "firebase/firestore";
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