

module.exports = {
  index: function(req, res){
    UserService.getUser(req.user.email, function(err, data){
      if(err){
        res.notFound(err);
      }
      console.log('user: ' + JSON.stringify(data))
      var indexData = {
        user: data
      };
      res.view(indexData);
    })

  },
  new: function(req, res) {
    res.view()
  },
  postNew: function(req, res){
    Entry
      .create({title: req.param('title'),
              body: req.param('body')})
      .exec(function (err, entry) {
        if(err){
          sails.log("Error " + err);
          res.serverError({message: 'yeah dude'})
        }
        res.redirect('/Home');
      })
  }

};
