var admin = require("firebase-admin");
const { getFirestore } = require('firebase-admin/firestore')
var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),

});

var db = getFirestore() ;
var listitems = [{
    "postdate":new Date(),
    "payment-status":true,
    "purchased" :{
        "name":"Wareewan",
        "bookid":["009","004"],
        "bookprice":[395,165]
    }
},
{
    "postdate":new Date(),
    "payment-status":true,
    "purchased" :{
        "name":"Palita",
        "bookid":"001",
        "bookprice":360
}
},{
    "postdate":new Date(),
    "payment-status":false,
    "purchased" :{
        "name":"Snoopy",
        "bookid":"006",
        "bookprice":295
}
},{
    "postdate":new Date(),
    "payment-status":true,
    "purchased" :{
        "name":"Siraphop",
        "bookid":["010","002"],
        "bookprice":[220,256]
}
},{
    "postdate":new Date(),
    "payment-status":false,
    "purchased" :{
        "name":"Pichaya",
        "bookid":["008","003"],
        "bookprice":[450,365]
}
},{
    "postdate":new Date(),
    "payment-status":true,
    "purchased" :{
        "name":"Kanyapat",
        "bookid":"003",
        "bookprice":365
}  
},
{
    "postdate":new Date(),
    "payment-status":true,
    "purchased" :{
        "name":"Khongkwan",
        "bookid":["002","020"],
        "bookprice":[256,220]
}
},{
    "postdate":new Date(),
    "payment-status":false,
    "purchased" :{
        "name":"Khongkwan",
        "bookid":"010",
        "bookprice":220
}
},{
    "postdate":new Date(),
    "payment-status":true,
    "purchased" :{
        "name":"Nitchakarn",
        "bookid":"008",
        "bookprice":450
}
},{
    "postdate":new Date(),
    "payment-status":true,
    "purchased" :{
        "name":"Piyamon",
        "bookid":"001",
        "bookprice":360
}
}
];

listitems.forEach(function(obj){
    db.collection("listitems").add({
        postdate: obj.postdate,
        paymentstatus: obj["payment-status"],
        purchased: obj.purchased
    }).then( docRef => { console.log("Document written with ID : "+ docRef.id)})
  });