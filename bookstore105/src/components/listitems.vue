<script setup>
import { RouterLink, RouterView } from 'vue-router'
defineProps({
  listitems: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div>
    <h2 class="text-5xl md:text-6xl xl:text-5xl font-bold tracking-tight mb-12 mt-10 flex justify-center">List Book</h2>
    <div class="p-5 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
      <div v-for="listitem in listitems" :key="listitem.id">
        <div class="rounded overflow-hidden shadow-lg">
          <img class="p-1 bg-white border rounded max-w-sm object-contain" src="../assets/book.png" alt="Book">
          <div class="px-5 py-4">
            <div class="font-bold text-xl mb-2">bookname : {{listitem.purchased}}</div>
          </div>
        </div>
    </div>
      </div> 
  </div>
</template>

<style>

</style>
