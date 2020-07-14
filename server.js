// server.js
//
import express from 'express';
const PORT = process.env.HTTP_PORT || 4001;
const app = express();
app.get('/', (req, res) => {
  res.send('Flowers smell nice');
});
app.get('/user', (req, res) => {
  res.json({
    name: 'Kevin E',
    age: '20'
  });
});

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}.`);
});