import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Test test is this thing on');
});

app.listen(port, () => {
  console.log(`🚀 Server ready at: http://localhost:${port}`);
});
