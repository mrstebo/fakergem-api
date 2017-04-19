const morgan = require('morgan');
const app = require('express')();

app.use(morgan('dev'));

app.use(require('./routes/address'));
app.use(require('./routes/app'));
app.use(require('./routes/boolean'));
app.use(require('./routes/color'));
app.use(require('./routes/date'));
app.use(require('./routes/friends'));
app.use(require('./routes/lorem'));
app.use(require('./routes/lorem_flickr'));
app.use(require('./routes/name'));
app.use(require('./routes/number'));
app.use(require('./routes/placeholdit'));
app.use(require('./routes/rock_band'));
app.use(require('./routes/slack_emoji'));
app.use(require('./routes/star_wars'));
app.use(require('./routes/superhero'));
app.use(require('./routes/time'));

app.listen(process.env.PORT || 3000);
