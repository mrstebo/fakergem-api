const morgan = require('morgan');
const app = require('express')();

app.use(morgan('dev'));

app.use(require('./routes/address'));

app.listen(process.env.PORT || 3000);
