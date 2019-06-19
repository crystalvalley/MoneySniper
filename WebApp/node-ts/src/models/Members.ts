import * as db from '../utils/MySQLConnector';
import { Connection } from 'mysql';

interface MembersI {
    
}

class Members implements MembersI {
    private conn: Connection;

    constructor() {
        let MySQLConnector = new db.MySQL();
        this.conn = MySQLConnector.getConn();
    }

    /**
     * getMember by email
     * 
     * @param String email
     * 
     * @returns 
     */
    public async getbyEmail(email: String) {
        
        let query = `SELECT * FROM members WHERE email = "${email}"`;

        return new Promise((resolve, reject) => {
            this.conn.query(query, (err, res, field) => {
                if (err) throw err;
                
                resolve(res);
            });
        });
    }
}

export {
    Members,
    MembersI
};