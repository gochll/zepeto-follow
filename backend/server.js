
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.static('frontend'));

app.post('/api/follow', async (req, res) => {
  const { id, count } = req.body;
  console.log(`팔로우 요청: ID=${id}, 수=${count}`);

  // 여기서 실제 봇 코드와 연결됨
  // 예시: await increaseFollowers(id, count);

  return res.json({ message: `팔로우 요청 완료 (ID: ${id}, 수: ${count})` });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`서버 실행 중: http://localhost:${PORT}`);
});
