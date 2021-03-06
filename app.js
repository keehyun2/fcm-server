const express = require('express');
const { moniterMessage } = require('./service/firestore.js');

const port = process.env.PORT || 5000;

const app = express();

app.get('/', (req, res) => {
  res.json({
    success: true
  });
});

// open the server
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Express is running on port ${port}`);
});

moniterMessage();
