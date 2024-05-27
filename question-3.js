// Question #3
let userPassword1 = "swnalWadqQ";
let userPassword2 = "TechUp";
let userPassword3 = "abcde";

// เริ่มเขียนโค้ดตรงนี้z
function checkPasswordStrength(userPassword) {
  if (userPassword.length < 6) {
    return "Weak";
  } else if (userPassword.length >= 6 && userPassword.length <= 10) {
    return "Medium";
  } else if (userPassword.length > 10) {
    return "Strong";
  }
}

console.log(checkPasswordStrength(userPassword1)); // "Strong"
console.log(checkPasswordStrength(userPassword2)); // "Medium"
console.log(checkPasswordStrength(userPassword3)); // "Weak"
