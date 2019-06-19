import { MySQL } from "../../src/utils/MySQLConnector";
import { Connection } from "mysql";

test('Create MySQLInstance', () => {
    let mysql = new MySQL();

    expect(mysql).toBeInstanceOf(MySQL);
});

test('DB connection test', done => {
    let mysql = new MySQL();

    let conn = mysql.getConn();

    conn.connect((err) => {
        if (err) {
            return;
        }
        done();
    });
    conn.end();
});
