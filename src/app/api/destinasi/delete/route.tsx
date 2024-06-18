import { NextRequest, NextResponse } from "next/server";
import { deleteData } from "@/lib/firebase/service";
export async function POST(request: NextRequest) {
  const req = await request.json();
  const res = await deleteData(req, "destinasi");
  //console.log(req);
  return NextResponse.json({status:res.status,massage:res.massage},{status:res.statusCode});
}