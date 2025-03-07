import { Client } from 'node-postgres'

export const client = new Client({
    user: process.env.DATABASE_USER,
    host: 'us-west-2.db.thenile.dev',
    database: 'community_events_app_database',
    password: process.env.DATABASE_PASSWORD,
    port: 5432,
})