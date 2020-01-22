const express = require('express');
const app = express();
const routes = require('./routes/index');
const port = 5001;

app.use(express.json());

routes(app);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// module.exports = app;