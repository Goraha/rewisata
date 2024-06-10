import { NextRequest, NextResponse } from "next/server";
import { insertData } from "@/lib/firebase/service";
export async function POST(request: NextRequest) {
  const req = await request.json();
  const res = await insertData(req);
  //console.log(req);
  return NextResponse.json({status:res.status,massage:res.massage},{status:res.statusCode});
}

