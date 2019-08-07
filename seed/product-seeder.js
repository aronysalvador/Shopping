var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping', { useNewUrlParser: true });

var products = [
    
    new Product({
        image:'https://www.northoptics.cl/wp-content/uploads/2017/09/microscopio-bilogico-barride-1.jpg',
        title:'Microscopio',
        description:'Microscopios Laser de Superficie, Metalográficos, de Polarización. Fabricados en la misma fabrica de Zeiss, con décadas de trayectoria en Chile y el mundo. ',
        price: 500 
    }),
    new Product({
        image:'https://images-na.ssl-images-amazon.com/images/I/41clC8meQiL._SX425_.jpg',
        title:'Televisor',
        description:'El televisor compatible con el alto rango dinámico (HDR) cambiará tu forma de ver televisión.',
        price: 500 
    }),
    new Product({
        image:'https://images-na.ssl-images-amazon.com/images/I/51qW82GJeyL._SY355_.jpg',
        title:'Telefono',
        description:'El smartphone más potente de la serie Galaxy J, y entre sus características se destacan un procesador octa-core Snapdragon 615',
        price: 1000
    }),
    new Product({
        image:'https://images-na.ssl-images-amazon.com/images/I/51XMN93MlsL._SX342_.jpg',
        title:'Lavadora',
        description:'Lavadora automática con nuevo diseño y sistema de dosificación automática: ahorra agua y detergente. Tecnología i-DOS',
        price: 500 
    })

];

var done = 0;
for(var i= 0; i < products.length; i++){
    products[i].save(function(err, result){
        done++;
        if(done == products.length){
            exit();
        }
    })

}

function exit (){
    mongoose.disconnect();
}