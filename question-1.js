// Question #1
/*- ให้เขียนโปรแกรมดังนี้
    
    - ให้เขียนโปรแกรมดังนี้
    
    1) เพิ่ม Object ใหม่เข้าไปใน `myTodo` ซึ่งมี `id` เป็น `5` และมี `todo` เป็น `"Walk the dog"` 
    
    2) แก้ไขชื่อ Object ที่มี `id` เป็น `4` เพื่อให้ `todo` ของ Object นั้นมีค่าเป็น `"Go to the gym"`
    
    3) ลบ Object สุดท้ายใน Array ออก
    
    4) นำ `myTodo` มาแสดงบนหน้าจอ Console
    
    5) ให้นำข้อมูลใน Object สุดท้ายมาแสดงบนหน้าจอ Console ในรูปแบบ
    `"To-do id: <ค่าของ id>, <ค่าของ todo>"` (ห้าม Hard-Code ค่าเข้าไปใน String โดยตรง)*/

const myTodo = [
  { id: 1, todo: "Buy groceries" },
  { id: 2, todo: "Finish homework" },
  { id: 3, todo: "Call mom" },
  { id: 4, todo: "Wash dishes" },
];
// เริ่มเขียนโค้ดตรงนี้
//1
myTodo.push({id: 5, todo: "Walk the dog"});
console.log(myTodo)

//2
const targetTodo = myTodo.find((item) => item.id ===4);
if (targetTodo) {
  targetTodo.todo = "Go to the gym"

}

//3
myTodo.pop();

//4
console.log(myTodo);

//5
console.log(`To-do id: ${myTodo[myTodo.length-1].id}, ${myTodo[myTodo.length -1].todo}`, )
