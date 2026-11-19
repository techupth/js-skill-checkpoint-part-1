//สมมุติว่ามี Variable inventory ที่บรรจุข้อมูลสินค้าในคลังสินค้า เช่น ราคาสินค้า (price) 
// และจำนวนสินค้าในคลังสินค้า (quantity) ซึ่งมีโครงสร้างข้อมูลดังนี้
// สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ Banana ซึ่งมี 50 ชิ้น

// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
let minQuantity = inventory[0].quantity ;
let minName = inventory[0].name;
for (let i =0; i < inventory.length; i++) {
if (i === 0) {
} else if (inventory[i].minQuantity < minQuantity) {
  minQuantity = inventory[i].quantity;
}
}
console.log(`สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ $(minName) ซึ่งมี $(minQuantity) ชิ้น`);