import { client } from "@/config/NilePostgresConfig";

export async function POST(request: Request) {
    const {name, email, image} = await request.json();

    await client.connect();
    const res = await client.query(`INSERT INTO USERS VALUES(DEFAULT, ${name}, ${email}, ${image})`);
    await client.end();
    return Response.json({res});
  }
  