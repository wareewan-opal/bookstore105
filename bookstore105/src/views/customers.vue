<script setup>
import { useRoute } from "vue-router";
import {ref , onMounted, watch} from 'vue'
import db from '../firebase/init.js'
import { collection, onSnapshot } from "firebase/firestore"
import customerlist from "../components/customerlist.vue";

const customers = ref([])
const route = useRoute();
const getCustomers = async () => {
    const customerRef = collection(db, "customers")
    onSnapshot(customerRef, (snapshot) => {
        customers.value = []
        snapshot.forEach((doc) => {
            let getData = {}
            getData = {id: doc.id, ...doc.data()}
            customers.value.push(getData)
        })
    })
    console.log(customers)
    // console.log(firstname)
}
onMounted(() => {
    getCustomers() 
})
watch(() => route.params.id, getCustomers);
</script>

<template>
<customerlist :customers="customers"/>
</template>
<style>
</style>