// Question #4
/*
สมมุติว่ามี Variable inventory ที่บรรจุข้อมูลสินค้าในคลังสินค้า เช่น ราคาสินค้า (price) 
และจำนวนสินค้าในคลังสินค้า (quantity) ซึ่งมีโครงสร้างข้อมูลดังนี้
*/
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];

/*
ให้เขียนโปรแกรมในการหาสินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้า เช่น ถ้า `inventory` มีค่าเป็นแบบนี้
   
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
	{ name: "Banana", price: 10, quantity: 50 },
	{ name: "Orange", price: 30, quantity: 60 },
];
ผลลัพธ์ของโปรแกรมควรจะแสดงผลดังนี้
" สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ Banana ซึ่งมี 50 ชิ้น "

หรือถ้า inventory มีค่าเป็นแบบนี้

const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
	{ name: "Banana", price: 10, quantity: 2000 },
	{ name: "Orange", price: 30, quantity: 60 },
];
ผลลัพธ์ของโปรแกรมควรจะแสดงผลดังนี้
" สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ Orange ซึ่งมี 60 ชิ้น "
*/

// เริ่มเขียนโค้ดตรงนี้
// 1. ตั้งชื่อตัวแปรเพื่อนำสินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้ามาใส่✅
  let lowProduct = inventory[0];

// 2. หา & เปรียบเทียบสินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้า✅
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].quantity < lowProduct.quantity) {
      lowProduct = inventory[i];
    }
  }

/* 3. แสดงผลสินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าด้วยประโยคนี้
      " สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ Banana ซึ่งมี 50 ชิ้น "✅ */

  console.log(`สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${lowProduct.name} ซึ่งมี ${lowProduct.quantity} ชิ้น`);
    

      // console.log(inventory);
      // console.log(lowProduct);
       
      