const express = require('express');
const app = express();
const port = 8000;

app.use('/', require('./routes/index'));

app.listen(port, () => console.log(`Server running on port: ${port}`));