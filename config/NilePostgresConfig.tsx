import { Client } from 'node-postgres'

export const client = new Client({
    user: '019569c5-1565-7cc2-a6a6-d500e82fa9a5',
    host: 'us-west-2.db.thenile.dev',
    database: 'community_events_app_database',
    password: 'cd607e99-79f1-4b09-9a60-cc35c7e96499',
    port: 5432,
})