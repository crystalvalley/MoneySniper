import * as db from '../utils/MySQLConnector';
import { Connection } from 'mysql';
import { Member } from './Member';

class MemberDAL {
    private conn : Connection;

    constructor() {
        let MySQLConnector = new db.MySQL();

        this.conn = MySQLConnector.getConn();
    }

    /**
     * @name findByEmail
     * @description getMember by email
     * 
     * @param String email
     * 
     * @returns Promise<Member> 
     */
    public async findByEmail(email: String): Promise<Member> {
        
        let query = `SELECT * FROM members WHERE email = "${email}"`;

        return new Promise((resolve, reject) => {
            this.conn.query(query, (err, res, field) => {
                if (err) throw err;
                
                let data = res[0];

                let member = new Member();
                member.email = data.email;
                member.password = data.password;

                resolve(member);
            });

            this.conn.end();
        });
    }

    /**
     * @name findAll
     */
    public findAll() : Promise<Array<Member>> {
        let query = `SELECT * FROM members`;

        return new Promise((resolve, reject) => {
            this.conn.query(query, async (err, res, field) => {
                if (err) throw err;

                let members = new Array();

                await res.forEach((elem: { email: string | undefined; password: string | undefined; }) => {
                    let member = new Member();
                    member.email = elem.email;
                    member.password = elem.password;

                    members.push(member);
                });

                resolve(members);
            });
        });
    }
}

export {
    MemberDAL
};