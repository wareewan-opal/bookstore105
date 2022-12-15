<script setup>
import { onBeforeMount, ref ,onMounted} from "vue";

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
  },
  data:{
    type: Number,
    required: true
  }
});

// console.log("efewf")
console.log("book" + props.books)
console.log(props.data)
// console.log(countResult.value)
</script>

<template>
  <div>
      <span v-for="(doc) in books" :key="doc.id">
        <div v-if="qryId == 1">
          Bookname : {{doc.bookname}} <br>
          Bookprice : {{doc.bookprice}} THB.
        </div>
      </span>
      {{doc}}
    <span v-for="(doc) in customers" :key="doc.id">
      <div v-if="qryId == 2">
        Firstname - Lastname : {{doc.firstname}} {{doc.lastname}}
      </div> 
    </span>
    <span v-if="qryId == 3">CountResult : {{data}}</span>
    <span v-for="(doc) in listitems" :key="doc.id">
      <div v-if="qryId == 3">
        Name : {{doc.purchased.name}} ,
        Status Payment :{{doc.paymentstatus}} 
      </div> 
    </span>
    <span v-for="(doc) in books" :key="doc.id">
      <div v-if="qryId == 4">
        Bookname : {{doc.bookname}} ,
        Max-BookPage :{{doc.bookpage}} 
        <!-- {{doc}} -->
      </div> 
    </span>
    <span v-for="(doc) in books" :key="doc.id">
      <div v-if="qryId == 5">
        Bookname : {{doc.bookname}} ,
        Min-BookPage :{{doc.bookpage}} 
        <!-- {{doc}} -->
      </div> 
    </span>
      <span v-for="doc in books" :key="doc.id">
        <div v-if="qryId == 6">
        Bookname : {{doc.bookname}} , 
        Author : {{doc.author}} ,
        Bookprice : {{doc.bookprice}}
      </div>
    </span>
    <span v-for="(doc) in listitems" :key="doc.id">
      <div v-if="qryId == 7">
        BookName : {{doc.purchased.name}} ,
        BookId : {{doc.purchased.bookid}} ,
        Bookprice :{{doc.purchased.bookprice}} 
      </div> 
    </span>
    <span v-for="doc in books" :key="doc.id">
      <div v-if="qryId == 8">
        BookId : {{doc.bookid}} , 
        Bookprice : {{doc.bookprice}}
      </div>
    </span>
      <div v-if="qryId == 9">
        Total Price : {{data}}
      </div>
      <span v-for="doc in books" :key="doc.id">
        <div v-if="qryId == 10">
          Bookname : {{doc.bookname}} , 
          Bookpage : {{doc.bookpage}}
        </div>
      </span>
  </div> 
  </template>

<style scoped></style>
