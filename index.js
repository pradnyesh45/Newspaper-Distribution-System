const express = require('express');
const app = express();
const port = 8000;

app.use('/', require('./routes/index'));

app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, () => console.log(`Server running on port: ${port}`));