const express = require('express');
const bodyParser = require('body-parser');

const app = express ();


app.use( bodyParser.json() );

require('./routes/dialogFlowRoutes')(app);

app.listen(process.env.PORT || 3000);
