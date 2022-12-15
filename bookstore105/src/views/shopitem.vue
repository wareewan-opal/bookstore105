<script setup>
import { useRoute } from "vue-router";
import {ref , onMounted, watch} from 'vue'
import db from '../firebase/init.js'
import { collection, onSnapshot } from "firebase/firestore"
import Booklist from "../components/booklist.vue";

const books = ref([])
const route = useRoute();
const getBooks = async () => {
    const bookRef = collection(db, "books")
    onSnapshot(bookRef, (snapshot) => {
        books.value = []
        snapshot.forEach((doc) => {
            let getData = {}
            getData = {id: doc.id, ...doc.data()}
            books.value.push(getData)
        })
    })
    console.log(books)
}
onMounted(() => {
    getBooks() 
})
watch(() => route.params.id, getBooks);
</script>

<template>
<Booklist :books="books"/>
</template>
<style>
</style>