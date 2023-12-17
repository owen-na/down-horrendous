import { db, sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
    const client = await db.connect();

  try {
    const result =
      await client.sql`CREATE TABLE Test ( Name varchar(255), Owner varchar(255) );`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}