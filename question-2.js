/*
- สมมุติว่ามี Variable `inventory` ที่บรรจุข้อมูลสินค้า เช่น ราคาสินค้า (`price`) และจำนวนสินค้าในคลังสินค้า (`quantity`) ซึ่งมีโครงสร้างข้อมูลดังนี้
    
    ```jsx
    const inventory = [
      { name: "Apple", price: 35, quantity: 100 },
    	{ name: "Banana", price: 10, quantity: 50 },
    ];

- ให้เขียนโปรแกรมดังนี้
    1) ให้แก้ไขจำนวนสินค้า “Apple” จาก `100` เป็น `200`
    2) เพิ่มสินค้าใหม่ที่ชื่อ “Orange” ที่มีราคา `20` บาท และมีจำนวน `300` ชิ้นในสต็อก
    3) ให้คำนวณมูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก
- ผลลัพธ์ของโปรแกรมควรจะแสดงออกมาทางหน้าจอ Console แบบนี้ 
    const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
	{ name: "Banana", price: 10, quantity: 50 },
];
    มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก 13500 บาท */

// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];
// เริ่มเขียนโค้ดตรงนี้
//1
const apple = inventory.find((item) => item.name === "Apple");
if (apple) {
  apple.quantity = 200;
}
console.log(inventory);

//2
inventory.push({ name: "Orange", price: 20, quantity: 300 });
console.log(inventory);

//3
let totalValue = 0;
for (let i = 0; i < inventory.length; i++){
   totalValue += inventory[i].price * inventory[i].quantity;
}
console.log(`มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก ${totalValue} บาท`);