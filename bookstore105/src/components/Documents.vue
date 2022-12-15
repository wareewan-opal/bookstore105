<script setup>
const props = defineProps({
  customers: {
    type: Object,
    required: true,
  },
  books:{
    type: Object,
    required:true,
  },
  qryId:{
    type: Number,
    required:true
  },
  listitems: {
    type: Array,
    required: true
  }
});
// console.log("efewf")
console.log("book" + props.books)
</script>

<template>
<div class="overflow-x-auto relative" v-if="qryId == 1">
  <span v-for="(doc) in books" :key="doc.id">
  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
              <th scope="col" class="py-3 px-6">Book Name</th>
              <th scope="col" class="py-3 px-6">Book Price</th>
          </tr>
      </thead>
      <tbody>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">{{doc.bookname}}</th>
              <td class="py-4 px-6">{{doc.bookprice}} THB.</td>
          </tr>
      </tbody>
  </table>
</span>
</div>
<div class="overflow-x-auto relative" v-if="qryId == 2">
  <span v-for="(doc) in customers" :key="doc.id">
  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
              <th>Firstname - Lastname</th>
              <th class="text-left">{{doc.firstname}} {{doc.lastname}}</th>
              <!-- <th scope="col" class="py-3 px-6">Lastname</th> -->
          </tr>
      </thead>
  </table>
</span>
</div>
<div v-if="qryId == 3">
  <span v-for="(doc) in listitems" :key="doc.id">
  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
              <th >Name</th>
              <td >{{doc.purchased.name}}</td>
              <th >Status Payment</th>
              <td >{{doc.paymentstatus}}</td>
          </tr>
      </thead>
  </table>
</span>
</div>
  <div>
      <span v-for="doc in books" :key="doc.id">
        <div v-if="qryId == 5">
        Bookname : {{doc.bookname}} , 
        Author : {{doc.author}} ,
        Bookprice : {{doc.bookprice}}
      </div>
    </span>
    <span v-for="doc in books" :key="doc.id">
      <div v-if="qryId == 7">
        Bookname : {{doc.bookname}} , 
        Bookprice : {{doc.bookprice}}
      </div>
    </span>
  </div> 
  </template>

<style scoped></style>
