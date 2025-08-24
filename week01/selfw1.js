// โจทย์ 1 : Function คำนวณผลรวม
// เขียนฟังก์ชันชื่อ sum(a, b) ที่รับค่าตัวเลข 2 ตัว แล้วคืนค่าผลบวกของมัน
function sum(a,b){
    return a+b
}
console.log(sum(5, 7));
//โจทย์ 2 : Function เช็คเลขคู่/คี่
// เขียนฟังก์ชันชื่อ isEven(n) ที่รับตัวเลขหนึ่งตัว แล้วคืนค่าเป็น true ถ้าเป็นเลขคู่ และ false ถ้าเป็นเลขคี่
function isEven(n) {
    return n % 2 === 0
}
console.log(isEven(10)); 
console.log(isEven(7)); 
// โจทย์ 3 : Function กลับข้อความ
// เขียนฟังก์ชัน reverseString(str) ที่รับข้อความเข้ามา แล้วคืนค่าข้อความที่กลับด้าน
function reverseString(str) {
   return str.split("").reverse().join("");
}
console.log(reverseString("hello")); // "olleh"
// โจทย์ 4 : Function หาผลรวมใน Array
// เขียนฟังก์ชัน sumArray(arr) ที่รับ Array ของตัวเลข แล้วคืนค่าผลรวมของตัวเลขทั้งหมด
function sumArray(arr) {
  let total = 0
  for (let i = 0; i< arr.length; i++){
    total += arr[i];
  }
  return total
}
console.log(sumArray([1, 2, 3, 4]));

