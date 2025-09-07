// จงเขียนโค้ดที่ใช้ .map() เพื่อสร้าง array ใหม่ ที่เป็น ค่ากำลังสอง ของทุกตัวเลข
const numbers = [2, 4, 6, 8, 10];
const squares = numbers.map(n => n ** 2);
console.log(squares);

// จงเขียนโค้ดที่ใช้ .filter() เพื่อเลือกเฉพาะ คะแนนที่ผ่าน (≥ 50) 
const scores = [45, 67, 82, 33, 90, 56];
const pass = scores.filter(score => score >= 50);
console.log(pass);

//จงเขียนโค้ดที่ใช้ .reduce() เพื่อหาผลรวมของราคาทั้งหมด
const prices = [100, 250, 50, 300];
const total = prices.reduce((sum, price) => sum + price, 0);
console.log(total);

//จงเขียนโค้ดที่ใช้ .map() เพื่อแปลงชื่อผลไม้ทั้งหมดให้เป็นตัวพิมพ์ใหญ่ (UPPERCASE) และใช้ .filter() เลือกเฉพาะชื่อที่ ยาวเกิน 4 ตัวอักษร
const fruits = ["apple", "banana", "kiwi", "mango", "pear"];
const result = fruits
  .map(fruit => fruit.toUpperCase())
  .filter(fruit => fruit.length > 4);

console.log(result);
//ใช้ .filter() เอาเฉพาะสินค้าที่ quantity > 0 (มีในสต็อก)
// ใช้ .map() แปลงเป็นราคารวมต่อสินค้า (price × quantity)
// ใช้ .reduce() หายอดรวมราคาสินค้าทั้งหมด
const products = [
  { name: "Shirt", price: 500, quantity: 2 },
  { name: "Jeans", price: 1200, quantity: 1 },
  { name: "Shoes", price: 1500, quantity: 0 },
  { name: "Hat", price: 300, quantity: 3 }
];
const totalStock = products.filter(item => item.quantity > 0).map(item => item.price * item.quantity).reduce((sum,val)=>sum+val,0);
console.log(totalStock);