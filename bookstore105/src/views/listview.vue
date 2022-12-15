<script setup>
import { useRoute } from "vue-router";
import {ref , onMounted, watch} from 'vue'
import db from '../firebase/init.js'
import { collection, onSnapshot } from "firebase/firestore"
import Documents from "../components/Documents.vue";


const listitems = ref([])
const route = useRoute();
const getListitems = async () => {
    const listitemRef = collection(db, "listitems")
    onSnapshot(listitemRef, (snapshot) => {
        listitems.value = []
        snapshot.forEach((doc) => {
            let getData = {}
            getData = {id: doc.id, ...doc.data()}
            listitems.value.push(getData)
        })
    })
    console.log(listitems.value.id)
}
onMounted(() => {
    getListitems() 
})
watch(() => route.params.id, getListitems);
</script>

<template>
<Documents :listitems="listitems"/>
</template>
<style>
</style>