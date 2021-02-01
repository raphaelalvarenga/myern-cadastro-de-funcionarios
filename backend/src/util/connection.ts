import { Sequelize } from "sequelize";

const database = process.env.DBNAME as string;
const user = process.env.DBUSER as string;
const pass = process.env.DBPASS as string;
const dialect = process.env.DBDIALECT as "mysql" | "postgres" | "sqlite" | "mariadb" | "mssql" | undefined;
const host = process.env.DBHOST;

export const sequelize = new Sequelize(database, user, pass, { host, dialect });