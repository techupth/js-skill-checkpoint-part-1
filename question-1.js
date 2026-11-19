// Question #1
/*
เรามี Array ของ Object myTodo ที่บรรจุรายการภารกิจ (To-dos) ที่ต้องทำในวันหนึ่ง 
โดย Object แต่ละอันจะมี Key 2 ตัว ได้แก่ id และ todo ตามตัวอย่างด้านล่าง
*/
const myTodo = [
  { id: 1, todo: "Buy groceries" },
  { id: 2, todo: "Finish homework" },
  { id: 3, todo: "Call mom" },
  { id: 4, todo: "Wash dishes" },
];

/* ยกตัวอย่างเช่น

ถ้า myTodo มีค่าตามนี้
const myTodo = [
  { id: 1, todo: "Buy groceries" },
  { id: 2, todo: "Finish homework" },
  { id: 3, todo: "Call mom" },
  { id: 4, todo: "Wash dishes" }, 
];

โปรแกรมของเราต้องแสดงผลออกมาว่า

[
  { id: 1, todo: "Buy groceries" },
  { id: 2, todo: "Finish homework" },
  { id: 3, todo: "Call mom" },
  { id: 4, todo: "Go to the gym" },
];

"To-do id: 4, Go to the gym "
*/


// เริ่มเขียนโค้ดตรงนี้
// 1) เพิ่ม Object ใหม่เข้าไปใน `myTodo` ซึ่งมี `id` เป็น `5` และมี `todo` เป็น `"Walk the dog"`✅ 
myTodo.push({ id: 5, todo: "Walk the dog" });

//  2) แก้ไขชื่อ Object ที่มี `id` เป็น `4` เพื่อให้ `todo` ของ Object นั้นมีค่าเป็น `"Go to the gym"`✅
myTodo[3].todo = "Go to the gym";

// 3) ลบ Object สุดท้ายใน Array ออก✅
myTodo.pop();

// 4) นำ `myTodo` มาแสดงบนหน้าจอ Console✅
console.log(myTodo);


/*5) ให้นำข้อมูลใน Object สุดท้ายมาแสดงบนหน้าจอ Console ในรูปแบบ
`"To-do id: <ค่าของ id>, <ค่าของ todo>"` (ห้าม Hard-Code ค่าเข้าไปใน String โดยตรง)✅
*/
console.log(`"To-do id: ${myTodo[3].id}, ${myTodo[3].todo}"`);
