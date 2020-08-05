// server.js
//
import path from 'path';
import express from 'express';
const PORT = process.env.PORT || 8080;
const app = express();

app.use("/",express.static(path.join(__dirname, 'client', 'build')));

app.get('/', (req, res) => {
  res.send('Welcome to backend');
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