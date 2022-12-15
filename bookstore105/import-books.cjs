var admin = require("firebase-admin");
const { getFirestore } = require('firebase-admin/firestore')
var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),

});

var db = getFirestore() ;

var books = [
  {
    "bookid":"009",
    "bookname": "คัมภีร์ Python ฉบับสมบูรณ์ (ปกอ่อน)",
    "author": "อรพิน ประวัติบริสุทธิ์",
    "booksize": "170 x 230 x 40 มม.",
    "bookpage": "608 หน้า",
    "bookprice": 395,
  },
  {
    "bookid":"004",
    "bookname": "Coding ระดับเริ่มต้นด้วย SCRATCH",
    "author": "ROSIE DICKINS, JONATHAN MEIMOTH และ LOUIE STOWELL",
    "booksize": "18.4 x 24 x 0.5 CM",
    "bookpage": "96 หน้า",
    "bookprice": 165,
  },
  {
    "booking":"001",
    "bookname": "เริ่มต้น Coding สร้าง Mobile App อย่างมืออาชีพด้วย Kotlin และ Andriod Studio",
    "author": "ศุภชัย สมพานิช",
    "booksize": "170 x 227 x 28 มม.",
    "bookpage": "384 หน้า",
    "bookprice": 360,
  },
  {
    "bookid":"006",
    "bookname": "โครงสร้างข้อมูลกับภาษา C/C++",
    "author": "อุหมาด หมัดอาด้ำ",
    "booksize": "171 x 240 x 16 มม.",
    "bookpage": "352 หน้า",
    "bookprice": 295,
  },
  {
    "bookid":"007",
    "bookname": "วิเคราะห์ข้อมูลปริมาณมากด้วย Excel Pivot Table + Data Analysis ฉบับสมบูรณ์TCH",
    "author": "พันจันทร์ ธนวัฒนเสถียร, มณีนุช สมานหมู่",
    "booksize": "146 x 210 x 15 มม.",
    "bookpage": "272 หน้า",
    "bookprice": 229,
  },
  {
    "bookid" : "010",
    "bookname":"IoT สถาปัตยกรรมการสื่อสาร : Internet of Things",
    "author":"ชัชชัย คุณบัว",
    "booksize":"170 x 240 x 15 มม.",
    "bookpage":"272 หน้า",
    "bookprice":220
  },
  {
    "bookid":"002",
    "bookname":"วิทยาการคอมพิวเตอร์และเทคโนโลยีสารสนเทศ (ปกอ่อน)",
    "author":"โอภาส เอี่ยมศิริวงศ์",
    "booksize":"191 x 241 x 20 มม.",
    "bookpage":"468 หน้า",
    "bookprice":256
  },
  {
    "bookid":"005",
    "bookname":"คู่มือสอนวาดและขายออนไลน์ ภาพ Vector ฉบับมืออาชีพ",
    "author":"อนัน วาโซะ",
    "booksize":"173 x 230 x 18 มม.",
    "bookpage":"376 หน้า",
    "bookprice":365
  },
  {
    "bookid":"008",
    "bookname":"Practical Microcontroller & Programming with ARDUINO เรียนง่ายเป็นเร็ว",
    "author":"ทศพล บ้านคลองสี่",
    "booksize":"17x22.86 ซม.",
    "bookpage":"336 หน้า",
    "bookprice":450
  },
  {
    "bookid":"003",
    "bookname":"เรียนรู้ Data Science และ AI : Machine Learning ด้วย Python",
    "author":"กอบเกียรติ สระอุบล",
    "booksize":"166 x 230 x 33 มม.",
    "bookpage":"640 หน้า",
    "bookprice":365
  }
];

books.forEach(function(obj){
  db.collection("books").add({
      bookname: obj.bookname,
      author: obj.author,
      booksize: obj.booksize,
      bookpage: obj.bookpage,
      bookprice: obj.bookprice
  }).then( docRef => { console.log("Document written with ID : "+ docRef.id)})
});
