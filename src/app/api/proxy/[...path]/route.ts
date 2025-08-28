// src/app/api/proxy/[...path]/route.ts
import { NextRequest, NextResponse } from "next/server";

const BACKEND_URL = "http://103.186.20.116:9001";

export async function GET(req: NextRequest, { params }: { params: { path: string[] } }) {
  const endpoint = params.path.join("/");
  const url = `${BACKEND_URL}/${endpoint}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        ...Object.fromEntries(req.headers),
        host: "", // avoid host forwarding
      },
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Proxy failed" }, { status: 500 });
  }
}

export async function POST(req: NextRequest, { params }: { params: { path: string[] } }) {
  const endpoint = params.path.join("/");
  const url = `${BACKEND_URL}/${endpoint}`;

  try {
    const body = await req.json();

    const response = await fetch(url, {
      method: "POST",
      headers: {
        ...Object.fromEntries(req.headers),
        host: "",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Proxy failed" }, { status: 500 });
  }
}
