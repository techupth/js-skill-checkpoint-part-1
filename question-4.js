// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
let minName = inventory[0].name
let minQuantity = inventory[0].quantity
for (let i = 1; i < inventory.length; i++) {
 if (minQuantity > inventory[i].quantity) {
  minQuantity = inventory[i].quantity
  minName = inventory[i].name
}
}
console.log(`สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${minName} ซึ่งมี ${minQuantity} ชิ้น`)

// โจทย์ หาที่มีจำนวนมากที่สุด 

let maxName = inventory[0].name;
let maxQuantity = inventory[0].quantity
for (let i = 1; i < inventory.length; i++) {
 if (maxQuantity < inventory[i].quantity) {
  maxQuantity = inventory[i].quantity
  maxName = inventory[i].name
}
}
console.log(`สินค้าที่มีจำนวนมากที่สุดในคลังสินค้าคือ ${maxName} ซึ่งมี ${maxQuantity} ชิ้น`)





