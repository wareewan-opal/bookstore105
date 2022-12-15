<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useRoute } from "vue-router";
import { ref, onMounted, watch} from "vue";
import { collection, query, where, getDocs, orderBy, limit} from "firebase/firestore";
import db from "../firebase/init.js";
import Documents from "./Documents.vue";

const route = useRoute();
const topic = ref("")
const books = ref([])
const customers = ref([])
const listitems = ref([])
let qryId;

async function getQuery(){
    
    qryId = route.params.id
    console.log(qryId)
    books.value = []
    let qry = null
    let qrybook = null
    let qrycustomer = null
    let qrycustomer2 = null
    let qrylistitem = null

    if(qryId == 1){
        console.log("No.1")
        topic.value = "List bookname with > 400 THB."
        const booksRef = collection(db, "books")
        qrybook = query(booksRef , where("bookprice", ">", 400))
        console.log(qrybook)
    }else if (qryId == 2){
        console.log("No.2")
        topic.value = "List All customer and sort firstname (desc)"
        const customersRef = collection(db, "customers")
        qrycustomer = query(customersRef ,orderBy("firstname", "desc"))
        console.log(qrycustomer)
    }else if (qryId == 3){
        console.log("No.3")
        topic.value = "Count payment-status (status = false)"
        const listitemsRef = collection(db, "listitems")
        qrylistitem = query(listitemsRef ,where("paymentstatus","==",false))
        console.log(qrylistitem)
    }
    else if (qryId == 4)
    {
        console.log("No.4")
        topic.value = "List Customers who have not placed an order."
        // const customersRef = collection(db, "customers")
        // qrycustomer = query(customersRef ,where("firstname","==",false))
        // console.log(qrylistitem)

        const q = query(collection(db, "customers"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach( async (doc)  => {
  
        const q = query(collection(db, "listitems"),where("purchased.name","==","Kanyapat"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc2) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log("xxxxx")
        });
    })
    }
    
    if (qryId == 5){
        console.log("No.5")
        topic.value = "List bookname and author with price < 250."
        const booksRef = collection(db, "books")
        qrybook = query(booksRef , where("bookprice", "<", 250))
        console.log(qrybook)
    }else if (qryId == 6){
        // console.log("No.6")
        // topic.value = "Show Customers who have orders for &gt; 1 book"
        // const booksRef = collection(db, "books")
        // const customersRef = collection(db, "customers")
        // qrybook = query(booksRef , where("", "<", 250))
        // console.log(qrybook)
    }else if(qryId == 7){
        topic.value = "bookprice with price > 200 THB (limit 5 name)."
        const booksRef = collection(db, "books")
        qrybook = query(booksRef , where("bookprice", ">", 200),limit(5))
    }

    // customers
    if(qrycustomer != null){
        const querySnap1 = await getDocs(qrycustomer)
        books.value = []
        customers.value = []
        listitems.value =[]
    querySnap1.forEach((doc) => {
        let data = doc.data()
        data.id = doc.id
        // books.value.push(data)
        customers.value.push(data)
    })
    console.log(customers.value)
    }
    // books
    if(qrybook != null){
    const querySnap2 = await getDocs(qrybook)
    books.value = []
    customers.value = []
    listitems.value =[]
    querySnap2.forEach((doc) => {
        let data = doc.data()
        data.id = doc.id
        books.value.push(data)
        // customers.value.push(data)
    })
    console.log(books.value)
    }
    // listitem
    if(qrylistitem != null){
    const querySnap3 = await getDocs(qrylistitem)
    books.value = []
    customers.value = []
    listitems.value =[]
    querySnap3.forEach((doc) => {
        let data = doc.data()
        data.id = doc.id
        listitems.value.push(data)
    })
    console.log(listitems.value)
    }
;}
watch(() => route.params.id, getQuery)
onMounted(() => {
    getQuery() 
})
</script>

<template>
    <Documents :customers="customers" :books="books" :qryId="qryId" :listitems="listitems"/>
</template>

<style>
</style>
