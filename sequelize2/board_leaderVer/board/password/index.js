const express = require('express');
const session = require('express-session');
const crypto = require('crypto');
const bcrypt = require('bcrypt')
const app = express();
const PORT = 8000;
let sign = ''; // 전역변수로 패스워드 저장



app.use(express.json());

app.post('/sign', (req, res) => {
    const { pw } = req.body;
    sign = bcryptPassword(pw);
   // const sign = createHashePassworrd(pw);
    res.json({ result: sign });
    //sign = cipherEncrypt(pw);
    //sign = createdPdkdf;

  
});

app.post('/verify', (req,res)=> {
  const{pw} =req.body;
  // const compare = verifyPassword(pw,sign);
  //const result = decipher(sign);
  const result = comparePassword(pw,sign)
  res.json({result: result})
})


app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

// 단방향
//해시함수
const createHashePassworrd = (password) => {
    // createHash(알고리즘).update(암호화할값).digest(인코딩 방식)
    return crypto.createHash('sha256').update(password).digest('base64');
};

// pdkdf2 함수
const salt = crypto.randomBytes(16).toString('base64'); // 솔트 생성
const iterations = 1000; // 반복횟수(process.env에 넣어서 모르게 하는 것이 좋음)
const keylen = 64; //생성할 키의 길이
const digest = 'sha256'; // 알고리즘

// 암호화 생성
const createdPdkdf = (password)=> {
  //pdkdf 함수(비밀번호, 솔트, 반복횟수, 키의길이, 알고리즘)으로 생성,반환은 buffer 값
  const sign = crypto.pdkdf2Sync(password, salt, iterations, keylen, digest);
  console.log(sign);
  console.log(salt);
  return sign.toString('base64')
}

// 암호비교
const verifyPassword = (password, dbPassword) => {
  const compare = crypto.pdkdf2Sync(password, salt, iterations, keylen, digest).toString('base64');
  if(compare===dbPassword){
    return true;
  } else{false}
}

// 양방향
const algorithme= 'aes-256-cbc' // 256비트 키를 사용, 블록크기 128 비트
const key  = crypto.randomBytes(32);
const iv = crypto.randomBytes(16); // 초기화 백터, 보완성을 높이기 위해 사용
// 양방향 암호화(보통 문서)
const cipherEncrypto = (word) => {
  const cipher = crypto.createCipheriv(algorithme,key,iv); // 암호화 객체 생성
  let encrypteData = cipher.update(word,'utf-8','base64'); //암호화할 데이터 처리(word, 입력데이터 인코딩, 출력데이터 인코딩)
  encrypteData += cipher.final('base64'); // 최종결과 생성
  return encrypteData;
}

//복호화
const decipher = (encryptedData) => {
  const decipher = crypto.createDecipheriv(algorithme, key, iv) // 복호화 객체 생성
  let decryptedData = decipher.uadate(encryptedData, 'base64','utf-8');
  decryptedData = decipher.final('utf-8');
  return decryptedData;
}

// bcrypt 단방향
const saltNumber = 10;
// 암호화
const bcryptPassword = (password) => {
  return bcrypt.hashSync(password, saltNumber);
};

// 비교
const comparePassword =(password,dbPassword) => {
  return bcrypt.compareSync(password,dbPassword); 
}
