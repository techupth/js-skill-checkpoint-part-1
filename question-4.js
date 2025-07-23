// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
let minQuantityProduct = inventory[0].quantity; 
let minProductName = "";
for (let i = 1; i < inventory.length; i++) {
  if (inventory[i].quantity < minQuantityProduct) {
    minQuantityProduct = inventory[i].quantity;
    minProductName = inventory[i].name;
  }
}
console.log(`สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${minProductName} ซึ่งมี ${minQuantityProduct} ชิ้น`)
