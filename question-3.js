// Question #3
let userPassword = "aas";
// เริ่มเขียนโค้ดตรงนี้
let  checkPasswordStrength = (userPassword) => {
    
    if (userPassword.length < 6) {
        return "Weak"
    } else if (userPassword.length > 6 && userPassword.length < 10) {
        return "Medium"
    } else {
        return "Strong"
    }
}
checkPasswordStrength(userPassword)
console.log(checkPasswordStrength(userPassword))