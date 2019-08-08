var express = require('express');
var router = express.Router();
var Product = require('../models/product');

/* GET home page. */
router.get('/', function(req, res, next) {
  Product.find( function(err,docs){
    var productChunks = [];
    var chunkSize = 3 ;
    for(var i = 0; i < docs.length; i += chunkSize){
        productChunks.push(docs.slice(i, i + chunkSize));
        res.render('indexProducts', { products: docs });
    }    
  });
});

router.get('/details', function(req, res, next) {
    var id = req.query.id;
    Product.find( function(err,docs){ 
      switch (id) {
        case 'Microscopio':
          res.render('indexDetails', { products: docs[0]});
          break;
        case 'Televisor':
          res.render('indexDetails', { products: docs[1]});
          break;
        case 'Telefono':
          res.render('indexDetails', { products: docs[2]});
          break;
        case 'Lavadora':
          res.render('indexDetails', { products: docs[3]});
          break;
        default:
          console.log('Lo lamentamos, por el momento no disponemos de Productos' );
      }
    });
});

router.get('/orderCart', function(req, res, next) {
  var id = req.query.id;
  Product.find( function(err,docs){ 
    switch (id) {
      case 'Microscopio':
        res.render('indexOrderCarts', { products: docs[0]});
        break;
      case 'Televisor':
        res.render('indexOrderCarts', { products: docs[1]});
        break;
      case 'Telefono':
        res.render('indexOrderCarts', { products: docs[2]});
        break;
      case 'Lavadora':
        res.render('indexOrderCarts', { products: docs[3]});
        break;
      default:
        console.log('Lo lamentamos, por el momento no disponemos de Productos' );
    }
  });  
});

// router.get('/orderCart', function(req, res, next) {
//   var id = req.query.id;
//   var getProduct2 = getProduct(id);
//   Product.find( function(err,docs){     
//     res.render('indexOrderCarts', { products: docs[getProduct2]});
//   });  
// });

// function getProduct(res){
//   let resGetProduct = "";
//   Product.find( function(err,docs){ 
//     switch (res) {
//       case 'Microscopio':
//         resGetProduct = 0;
//         break;
//       case 'Televisor':
//         resGetProduct = 1;
//         break;
//       case 'Telefono':
//         resGetProduct = 2;
//         break;
//       case 'Lavadora':
//           resGetProduct = 3;
//         break;
//       default:
//         console.log('Lo lamentamos, por el momento no disponemos de Productos' );
//     }
//   });
//   return resGetProduct
// }

module.exports = router;
