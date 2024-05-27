// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";
// เริ่มเขียนโค้ดตรงนี้
function calculateTotalPrice (products, promotionCode) {
  let totalValue = 0
  for (let i = 0 ; i < products.length ; i++) {
    totalValue = totalValue + products[i].quantity * products[i].price 
    console.log(totalValue);
  }
  if (promotionCode === "SALE50") {
    totalValue = totalValue / 2   
    return `ราคาสินค้าเท่ากับ ${totalValue}`
  } else if (promotionCode === "SALE20") {
    totalValue = totalValue * 0.80 
    return `ราคาสินค้าเท่ากับ ${totalValue}`
  } else {
    totalValue;
    return `ราคาสินค้าเท่ากับ ${totalValue}`
  }
}
 console.log(calculateTotalPrice(products, promotionCode));

 //ให้ทิ้งไว้ก่อนแล้วมาเขียนด้วยตัวเอง 



