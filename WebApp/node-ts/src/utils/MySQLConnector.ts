import { Connection, createConnection } from "mysql";
import dbconf from '../../../sql-storage/.env.json';

export class MySQL {
    private conn: Connection;

    constructor() {
        this.conn = createConnection(dbconf);
    }

    /**
     * getConn
     * 
     * @return mysql.Connection
     */
    public getConn() {
        return this.conn;
    }
}

export interface MySQLI extends MySQL{
}