<script setup>
import { collection, query, where } from "firebase/firestore";
import { ref } from "vue";
import { useRoute } from "vue-router";
import querylist from '../components/querylist.vue';
import db from "../firebase/init";
import Documents from "../components/Documents.vue";

</script>
<template>
    <div>
    <!-- <querylist :querylist="querylist"/> -->
    <div class="justify-center">
    <h2 class="text-5xl md:text-6xl xl:text-5xl font-bold tracking-tight mb-12 mt-10 flex justify-center">
        Query
      </h2>
      <br/>
    <RouterLink to="/query/1">
    <li class="text-gray-800 text-l ml-10">
        List bookname with &gt; 400 THB.
    </li>
    </RouterLink>
    <RouterLink to="/query/2">
    <li class="text-gray-800 text-l ml-10">
        List All customer and sort firstname (desc)
    </li>
    </RouterLink>
    <RouterLink to="/query/3">
        <li class="text-gray-800 text-l ml-10">
            Count payment-status (status = "false")
        </li>
    </RouterLink>
    <RouterLink to="/query/4">
        <li class="text-gray-800 text-l ml-10">
            Find Max for bookpage
        </li>
    </RouterLink>
    <RouterLink to="/query/5">
        <li class="text-gray-800 text-l ml-10">
            Find Min for bookpage
        </li>
    </RouterLink>
    <RouterLink to="/query/6">
        <li class="text-gray-800 text-l ml-10">
            List bookname and author with price &lt; 250.
        </li>
    </RouterLink>
    <RouterLink to="/query/7">
        <li class="text-gray-800 text-l ml-10">
            Find listitems bookprice equal 360 THB
        </li>
    </RouterLink>
    <RouterLink to="/query/8">
        <li class="text-gray-800 text-l ml-10">
            Show bookname and price if price > 200 THB (limit 5 name).
        </li>
    </RouterLink>
    <RouterLink to="/query/9">
        <li class="text-gray-800 text-l ml-10">
            Get the total price from all customers.
        </li>
    </RouterLink>
    <RouterLink to="/query/10">
        <li class="text-gray-800 text-l ml-10">
            bookpages with pages 300 to 400
        </li>
    </RouterLink>
  </div>
  <querylist :querylist="querylist"/>
</div>
</template>
<style>
</style>