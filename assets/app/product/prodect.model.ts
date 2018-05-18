export class Product {
    public productName: string;
    public productPrice: Number;
    public imagepath: String;
    public button:Boolean;
  
    constructor(name: string, price: Number, imagePath: string) {
      this.productName = name;
      this.productPrice = price;
      this.imagepath = imagePath;
    }
  }
  