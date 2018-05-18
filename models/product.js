var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var schema=new Schema(
    {
        imagepath:{type:String,required:true},
        productName: {type:String,required:true},
        productPrice: {type:Number,required:true}

    }
);

module.exports=mongoose.model('Product', schema);