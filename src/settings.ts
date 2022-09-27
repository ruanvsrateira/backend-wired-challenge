import { config } from "dotenv";

config({ path: __dirname + "/.env" });

const DATABASE_USER = process.env.DATABASE_USER;
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;
const DATABASE_DIALECT = process.env.DATABASE_DIALECT;
export const SERVER_PORT = process.env.SERVER_PORT;
export const DATABASE_URL = `${DATABASE_DIALECT}+srv://${DATABASE_USER}:${DATABASE_PASSWORD}@cluster0.y0gd3lh.mongodb.net/?retryWrites=true&w=majority`;
