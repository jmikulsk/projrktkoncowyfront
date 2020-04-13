const express = require('express');

const app = express();

app.use(express.static('./dist/projrktkoncowyfront'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/projrktkoncowyfront/'}),
);

app.listen(process.env.PORT || 8080);
