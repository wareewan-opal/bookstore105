<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>
<template>
<div class="container my-24 px-6 mx-auto">
<section class="mb-32 text-gray-800 text-center">
  <div class="flex justify-center">
    <div class="max-w-[800px]">
      <h2 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
        Are you ready ?<br />
        <span class="text-blue-600">welcome to bookstore</span>
      </h2>
      <p class="text-gray-500 text-l">
        This is a website for buying computer-related books. <br>Affordable price, useful, able to apply knowledge to real use.
      </p>
    </div>
  </div>
  <img class="h-80 w-50 pr-10 items-center" src="../assets/1537587.png" alt="pony">
</section>

</div>
</template>
<style>
</style>