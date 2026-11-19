/*- สมมุติว่ามี Variable `userPassword` ที่บรรจุรหัสผ่านของผู้ใช้งาน
- ให้เขียนฟังก์ชัน `checkPasswordStrength` ซึ่งรับ `userPassword` เป็น Argument และ Return ผลลัพธ์ออกมาเป็น String ตามเงื่อนไขต่อไปนี้
    
    | จำนวนตัวอักษรใน `userPassword` | ผลลัพธ์ |
    | --- | --- |
    | น้อยกว่า 6 | “Weak” |
    | ตั้งแต่ 6 จนถึง 10 | “Medium” |
    | มากกว่า 10 | “Strong” |
- ตัวอย่างเช่น
    - ถ้า `userPassword` มีค่าเป็น `"ssswnalWadqQ"` ฟังก์ชันจะ Return ค่า `"Strong"`
        let userPassword = "ssswnalWadqQ"
        console.log(checkPasswordStrength(userPassword)); // "Strong" */
// Question #3
let userPassword = "";
// เริ่มเขียนโค้ดตรงนี้
function checkPasswordStrength(userPassword) {
  if (userPassword.lenght < 6 ) {
    return "Weak";
    } else if (userPassword.lenght < 10 ) {
    return "Medium";
    } else {
    return "Strong";
  }
  
}

console.log(checkPasswordStrength("123"))
