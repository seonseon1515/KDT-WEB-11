//임시 db
const comments = [
  {
      id: 1,
      userid: 'hello',
      date: '2024-02-01',
      comment: '안뇽안뇽하이11',
  },
  {
      id: 2,
      userid: 'hello2',
      date: '2024-03-01',
      comment: '안뇽안뇽하이22',
  },
  {
      id: 3,
      userid: 'hello3',
      date: '2024-04-01',
      comment: '안뇽안뇽하이33',
  },
  {
      id: 4,
      userid: 'hello4',
      date: '2024-05-01',
      comment: '안뇽안뇽하이44',
  },
];
// 키 값은 다똑같아야 함

// 외부에서 쓸 수 있게끔 모듈화
module.exports = comments;