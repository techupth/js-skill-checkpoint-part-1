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

let calculateTotalPrice = () => {
  let totalPrice = 0;
  for (let i=0; i<products.length; i++) 
    totalPrice = products[i].price + products[i].price
    if (promotionCode === "Sale20") {
      return promotionCode = (totalPrice*20)/100
    }else if (promotionCode === "Sale50") {
      return promotionCode = (totalPrice*50)/100
    }else {
       
    }
    console.log(totalPrice)
}
calculateTotalPrice(products,promotionCode)
console.log(calculateTotalPrice(products,promotionCode))
