const mysql = require('mysql2/promise');
//mysql연결
const getConn = async () => {
    return await mysql.createConnection({
        host: 'localhost',
        user: 'newkdt',
        password: '1234',
        database: 'kdt11',
        port: 3306,
    });
};
//문자열 보간(대체?) 방법
//`SELECT * FROM visitor WHERE id=${id}`
//1. sql 인젝션 공격에 취약
//2. 문자열에 특수문자가 포함될 경우 오류가 발생될 수도 있음 
// Prepared Statement 
//`SELECT * FROM visitor WHERE id= ?`

//쿼리문 작성
const allVisitor = async () => {
    const conn = await getConn();
    const query = `SELECT * FROM visitor`;
    const [rows] = await conn.query(query);
    await conn.end();
    return rows;
};

const getVisitor = async (id) => {
    const conn = await getConn();
    // const query = `SELECT * FROM visitor WHERE id=${id}`;
    // 보안에 취약한 코드이므로 참고할만한 코드가 아님
    const query = '`SELECT * FROM visitor WHERE id=?'
    const [rows] = await conn.query(query,[id]);
    // 여러개를 넣을 수 있어서 배열 형태
    await conn.end();
    return rows;
};

const postVisitor = async (data) => {
    const conn = await getConn();
    // const query = `INSERT INTO visitor (name, comment) VALUES ('${data.name}', '${data.comment}')`;
    const query = `INSERT INTO visitor (name, comment) VALUES (?,?)`;
    const [result] = await conn.query(query,[data.name, data.comment]);
    await conn.end();
    return result;
};

const patchVisitor = async (data) => {
    const conn = await getConn();
    // const query = `UPDATE visitor SET name='${data.name}', comment='${data.comment}' WHERE id=${data.id}`;
    const query = `UPDATE visitor SET name=?, comment=? WHERE id=?`;
    const [result] = await conn.query(query, [data.name , data. comment]);
    await conn.end();
    return result;
};

// 방명록 하나 삭제


module.exports = { allVisitor, getVisitor, postVisitor, patchVisitor, deleteVisitor };