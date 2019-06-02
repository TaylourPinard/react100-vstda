/* eslint no-console: "off" */
const server = require('./server');


server.listen(process.env.PORT || 3000, () => {
    console.log(`Server is listening on %d in %s mode`, this.address().port, app.settings.env);
});
