exports.index = function(req, res){
  res.render('index', { title: 'Testing' });
  res.send('Hello World!');
};