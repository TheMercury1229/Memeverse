import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { NextApiRequest, NextApiResponse } from "next";

const privateKey = process.env.PRIVATE_KEY!;

export async function GET(
  request: NextRequest,
  res: NextApiResponse,
  req: NextApiRequest
) {
  res.setHeader(
    "Access-Control-Allow-Origin",
    process.env.NEXT_PUBLIC_ALLOWED_ORIGIN || "https://memeverse-two.vercel.app"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // Handle OPTIONS preflight request for CORS
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method === "POST") {
    // Your upload logic
    const { searchParams } = new URL(request.url);
    const token = searchParams.get("token") || crypto.randomUUID();
    const expire =
      searchParams.get("expire") ||
      (Math.floor(Date.now() / 1000) + 2400).toString();
    const privateAPIKey = privateKey;
    const signature = crypto
      .createHmac("sha1", privateAPIKey)
      .update(token + expire)
      .digest("hex");

    return NextResponse.json({
      token,
      expire,
      signature,
    });
  }
}
