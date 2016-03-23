module.exports = {
  index: function(req, res){
    res.send('The image:index controller  ' + 
      req.params.image_id);
  },
  create: function(req, res){
    res.send('The image:create Post controller');
  },
  like: function(req, res){
    res.send('The image:like Post controller');
  },
  comment: function(req, res){
    res.send('The image:comment Post controller');
  }
};