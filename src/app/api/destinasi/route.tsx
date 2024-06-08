import { NextRequest, NextResponse } from "next/server";
import {retData} from "../../../lib/firebase/service";


export async function GET(request: NextRequest) {
  const data = await retData('destinasi');

  const {searchParams} = new URL(request.url);
  const id = searchParams.get('id');
  if(id){
    const detailDestinasi = data.find((item)=>item.id === id);
    if(detailDestinasi){
      return NextResponse.json({status:200,massage:"success",data:detailDestinasi});
    }else{
      return NextResponse.json({status:404,massage:"not Found",data:{}});
    }
    
  }
  return NextResponse.json({status:200,massage:"success",data:data});
  
}

