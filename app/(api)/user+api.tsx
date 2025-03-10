import { client } from "@/config/NilePostgresConfig";

export async function POST(request: Request) {
    const {name, email, image} = await request.json();
  try {
    await client.connect();
    const res = await client.query(`INSERT INTO USERS VALUES(DEFAULT, ${name}, ${email}, ${image})`);
    await client.end();
    return Response.json({res});
  } catch (error) {
    return Response.json({error});
  }
}

export async function GET(request: Request) {
  const email = new URL(request.url).searchParams.get('email');
  try { 
    await client.connect();
    const res = await client.query(`SELECT * FROM USERS WHERE email = ${email}`);
    await client.end(); 
    return  Response.json(res.rows[0]);
  } catch (error) {
    return Response.json({error});
  }
}
  