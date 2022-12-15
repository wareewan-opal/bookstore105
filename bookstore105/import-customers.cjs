var admin = require("firebase-admin");
const { getFirestore } = require('firebase-admin/firestore')

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

var db = getFirestore() ;

var customers = [
    {
        "id":"Wareewan",
        "firstname": "Wareewan",
        "lastname": "Pongpunchaikul"
    },
    {
        "id":"Siraphop",
        "firstname": "Siraphop",
        "lastname": "Pattaragatewit"
    },
    {
        "id":"Piyamon",
        "firstname": "Piyamon",
        "lastname": "Suddee"
    },
    {
        "id":"Pichaya",
        "firstname": "Pichaya",
        "lastname": "Pairin"
    },
    {
        "id":"Nithi",
        "firstname": "Nithi",
        "lastname": "Lampay"
    },
    {
        "id":"Kanyapat",
        "firstname": "Kanyapat",
        "lastname": "Wittayamanitkul"
    },
    {
        "id":"Nitchakarn",
        "firstname": "Nitchakarn",
        "lastname": "Pasanee"
    },
    {
        "id":"Palita",
        "firstname": "Palita",
        "lastname": "Prachanpon"
    },
    {
        "id":"Khongkwan",
        "firstname": "Khongkwan",
        "lastname": "Panjanaewaporn"
    },
    {
        "id":"Snoopy",
        "firstname": "Snoopy",
        "lastname": "Cutecute"
    }
]
customers.forEach(function(obj){
    db.collection("customers").add({
        id: obj.id,
        firstname: obj.firstname,
        lastname: obj.lastname
    }).then( docRef => { console.log("Document written with ID : "+docRef.id)})
  });