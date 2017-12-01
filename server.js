const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const app = express();
var body_parser = require('body-parser');
var book = require('./controller/book');

app.use(body_parser.json({
    extended: true,
    limit: '50mb'
}));
 
const compiler = webpack(webpackConfig);
 
/* API */
var router = express.Router();
router.route('/book/:action?/:id?')
    .get(book.execute)
    .post(book.execute)
    .put(book.execute)
    .delete(book.execute);

app.use('/api', router);

app.use(express.static(__dirname + '/app'));
 
app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));
 
const server = app.listen(3000, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});









