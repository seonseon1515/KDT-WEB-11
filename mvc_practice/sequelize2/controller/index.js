const main = (req, res) => {
    res.redner('idnex');
};

const post = (req, res) => {
  res.redner('post'); // 전체 글 페이지
};
const detail = (req, res) => {
  res.redner('detail'); // 전체 글 페이지
};

const write = (req, res) => {
  res.redner('write'); // 전체 글 페이지
};

module.exports = { main, post, detail,write };
