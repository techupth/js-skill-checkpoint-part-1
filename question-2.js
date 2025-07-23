// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];
// เริ่มเขียนโค้ดตรงนี้
// 1
inventory[0].quantity = 200;

// 2
inventory.push({name: "Orange", price: 20, quantity: 300});

// 3
let totalPriceInStock = 0;
for (let i = 0; i < inventory.length; i++) {
  totalPriceInStock += (inventory[i].quantity * inventory[i].price);
}

console.log(`มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก ${totalPriceInStock} บาท`);