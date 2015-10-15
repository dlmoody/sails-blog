

module.exports = {
  getUser: function(email, callback){
    User.findOneByEmail(email)
        .exec(function(err, data){
          callback(err, data);
        });
  },
  extend:function(user, callback){
    _.extend({
      
    })
  }
};
