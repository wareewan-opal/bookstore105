<script setup>
import { RouterLink, RouterView } from 'vue-router'
defineProps({
  books: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div>
    <h2 class="text-5xl md:text-6xl xl:text-5xl font-bold tracking-tight mb-12 mt-10 flex justify-center">List Book</h2>
    <div class="p-5 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
      <div v-for="book in books" :key="book.id">
        <div class="rounded overflow-hidden shadow-lg">
          <img class="p-1 bg-white border rounded max-w-sm object-contain" src="../assets/book.png" alt="Book">
          <div class="px-5 py-4">
            <div class="font-bold text-xl mb-2">bookname : {{book.bookname}}</div>
            <span class="text-gray-700 text-base">
             <p>Author : {{book.author}}</p> 
             <p>Size : {{book.booksize}}</p>
             <p>Page : {{book.bookpage}}</p>
             <p>Price : {{book.bookprice}} THB</p>
            </span>
          </div>
        </div>
    </div>
      </div> 
  </div>
</template>

<style>

</style>
