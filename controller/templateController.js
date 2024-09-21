const { checkout } = require("../routes/router");

const tempate ={
        index:(req,res)=>{
            res.render('index');
        },
        shopGrid:(req,res)=>{
            res.render('shopGrid');
        },
        shopDetails:(req,res)=>{
            res.render('shopDetails');
        },
        shopCart:(req,res)=>{
            res.render('shopCart');
        },
        check:(req,res)=>{
            res.render('checkout');
        },
        details:(req,res)=>{
            res.render('blogDetails');
        },
        blog:(req,res)=>{
            res.render('blogs');
        },
        contacts:(req,res)=>{
            res.render('contact');
        }
}
module.exports = tempate;