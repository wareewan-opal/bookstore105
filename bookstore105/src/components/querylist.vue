<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useRoute } from "vue-router";
import { ref, onMounted, watch, reactive} from "vue";
import { collection, query, where, getDocs, orderBy, limit} from "firebase/firestore";
import db from "../firebase/init.js";
import Documents from "./Documents.vue";
import { getCountFromServer } from "firebase/firestore";
import { onSnapshot } from "firebase/firestore";


const route = useRoute();
const topic = ref("")
const books = ref([])
const customers = ref([])
const listitems = ref([])
const state = reactive({showAgg: false , qryId: 1})
let qryId ;
const aggData = ref(0)
const isTable = ref(true)

async function getQuery(){
    isTable.value = true
    qryId = route.params.id
    console.log(qryId)
    books.value = []
    state.showAgg = false
    let qry = null
    let qrybook = null
    let qrycustomer = null
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
        isTable.value = false
        const querySnap = await getCountFromServer(qrylistitem);
        aggData.value = querySnap.data().count;
        console.log(aggData.value)
    }else if (qryId == 4){
        console.log("No.4")
        topic.value = "Find Max for bookpage"
        const booksRef = collection(db, "books")
        qrybook = query(booksRef, orderBy("bookpage","desc"),limit(1))
        console.log(qrybook)
        let page = ref()
        const querySnap = await getDocs(qrybook)
        querySnap.forEach((doc) => {
            page.value = doc.data().bookpage
            console.log(doc.data())
        })
        console.log(page.value)
        qrybook = query(booksRef, where("bookpage","==",page.value))
    }if(qryId == 5){
        console.log("No.5")
        topic.value = "Find Min for bookpage"
        const booksRef = collection(db, "books")
        qrybook = query(booksRef, orderBy("bookpage","asc"),limit(1))
        console.log(qrybook)
        let page = ref()
        const querySnap = await getDocs(qrybook)
        querySnap.forEach((doc) => {
            page.value = doc.data().bookpage
            console.log(doc.data())
        })
        console.log(page.value)
        qrybook = query(booksRef, where("bookpage","==",page.value))
    }
    if (qryId == 6){
        console.log("No.6")
        topic.value = "List bookname and author with price < 250."
        const booksRef = collection(db, "books")
        qrybook = query(booksRef , where("bookprice", "<", 250))
        console.log(qrybook)
    }else if (qryId == 7){
        console.log("No.7")
        topic.value = "Find listitems bookprice equal 360 THB."
        const listitemsRef = collection(db, "listitems")
        qrylistitem = query(listitemsRef , where("purchased.bookprice", "array-contains", 360))
        console.log(qrylistitem)
    }else if(qryId == 8){
        console.log("No.8")
        topic.value = "bookprice with price > 200 THB (limit 5 name)."
        const booksRef = collection(db, "books")
        qrybook = query(booksRef , where("bookprice", ">", 200),limit(5))
    }else if(qryId == 9){
        console.log("No.9")
        topic.value = "Get the total price from all customers."
        const listitemsRef = collection(db, "listitems")
        onSnapshot(listitemsRef, (snapshot) => {
        listitems.value = []
        // aggData.value = null
        let total = 0
        snapshot.forEach((doc) => {
            let getData = {}
            getData = {id: doc.id, ...doc.data()}
            // listitems.value.push(getData)
            // aggData.value += getData.purchased.bookprice
            getData.purchased.bookprice.forEach((price) => {
                total += price
            })
        })
        console.log(total)
        aggData.value = total
    })
    }
    else if(qryId ==10){
        console.log("No.10")
        topic.value = "bookpages with pages 300 to 400"
        const booksRef = collection(db, "books")
        qrybook = query(booksRef , where("bookpage", ">=", 300), where("bookpage", "<=" , 400))
        console.log(qrybook)
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
}

watch(() => route.params.id, getQuery)
onMounted(() => {
    getQuery() 
})
</script>

<template>
    <Documents :customers="customers" :books="books" :qryId="qryId" :listitems="listitems" :data="aggData"/>
</template>

<style>
</style>
