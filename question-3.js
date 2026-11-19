// Question #3
/*
สมมุติว่ามี Variable `userPassword` ที่บรรจุรหัสผ่านของผู้ใช้งาน
ให้เขียนฟังก์ชัน `checkPasswordStrength` ซึ่งรับ `userPassword` 
เป็น Argument และ Return ผลลัพธ์ออกมาเป็น String ตามเงื่อนไขต่อไปนี้

จำนวนตัวอักษรใน userPassword
< 6 = "Weak"
<=10 = "Medium"
> 10 = "Strong"

ตัวอย่างเช่น
    1. ถ้า userPassword มีค่าเป็น "ssswnalWadqQ" ฟังก์ชันจะ Return ค่า "Strong"
    -> let userPassword = "ssswnalWadqQ"
         console.log(checkPasswordStrength(userPassword)); // "Strong"
    
    2. ถ้า userPassword มีค่าเป็น "TechUp" ฟังก์ชันจะ Return ค่า "Medium"
    -> let userPassword = "TechUp"
         console.log(checkPasswordStrength(userPassword)); // "Medium"

    3. ถ้า userPassword มีค่าเป็น "abcde" ฟังก์ชันจะ Return ค่า "Weak"
    -> let userPassword = "abcde"
         console.log(checkPasswordStrength(userPassword)); // "Weak"
*/


let userPassword = "";
// let userPassword1 = "21012000";
// let userPassword2 = "Nichapa Charoendee";

// เริ่มเขียนโค้ดตรงนี้

// 1. สร้าง function ของ password ซึ่งรับ `userPassword` เป็น Argument✅
    function checkPasswordStrength(userPassword) { 
        
        // 2. ถ้าจำนวนตัวอักษรใน userPassword < 6  Return -> "Weak"✅  
       if (userPassword.length < 6) {
          return "Weak";
       
        // 3. ถ้าจำนวนตัวอักษรใน userPassword <=10  Return -> "Medium"✅
        } else if (userPassword.length <= 10) {
                return "Medium";

            // 4. ถ้าจำนวนตัวอักษรใน userPassword > 10  Return -> "Strong"✅เกือบหลับ
            } else {
                return "Strong";
            }
    }

// 5. ผลลัพธ์ออกมาเป็น String ✅ เริ่ด
console.log(checkPasswordStrength(userPassword));
// console.log(checkPasswordStrength(userPassword1));
// console.log(checkPasswordStrength(userPassword2));