const createError = require('http-errors');

const db = require('../Models/firebase');

module.exports = {
  getAllUsers: async (req, res, next) => {
    result=[]
      db.collection('users').get()
.then((snapshot)=>{
  snapshot.forEach((doc)=>{
    console.log(doc.data());
    result.push(doc.data())
  });
  res.send(result);
});
  },

  createNewUser: async (req, res, next) => {
    try {
      var user_details=req.body;
      var document_num=0;
      db.collection('users').get()
.then((snapshot)=>{
  snapshot.forEach((doc)=>{
    document_num+=1;
  });
});
      db.collection('users').doc("2").set(user_details);
    } catch (error) {
      console.log(error.message);
      if (error.name === 'ValidationError') {
        next(createError(422, error.message));
        return;
      }
      next(error);
    }
  },

  findUser: async (req, res, next) => {
    const id = req.params.name;
    var result=[]
      const users = db.collection('users');
      const snapshot= users.where('username', '==', id).get()
      .then((snapshot)=>{
        snapshot.forEach((doc)=>{
          console.log(doc.data());
          result.push(doc.data())
        });
        res.send(result);
      });
  },
/*
  updateAProduct: async (req, res, next) => {
    try {
      const id = req.params.name;
      const updates = req.body;
      console.log(req.body);
      const options = { new: true };

      const result = await Product.findOneAndUpdate(id, updates, options);
      if (!result) {
        throw createError(404, 'Product does not exist');
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, 'Invalid Product Id'));
      }

      next(error);
    }
  },

  deleteAProduct: async (req, res, next) => {
    const id = req.params.name;
    try {
      const result = await Product.remove({'product_name': id});
      // console.log(result);
      if (!result) {
        throw createError(404, 'Product does not exist.');
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid Product id'));
        return;
      }
      next(error);
    }
  }
  */
};
