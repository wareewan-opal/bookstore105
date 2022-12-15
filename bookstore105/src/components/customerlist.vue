<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import { addDoc ,collection, deleteDoc, doc, getDoc ,query , where , getDocs } from 'firebase/firestore';
import db from '../firebase/init.js'
defineProps({
  customers: {
    type: Array,
    required: true
  }
})
const listitems = ref([])
const customer = ref([])
const firstname = ref('')
const lastname = ref('')
// add customers
async function addnewcustomers(){
    // listTickets.value = {userId:localStorage.getItem("firstname"),ticketId : props.ticket.id,beginning:beginning.value,destination: props.ticket.route.destination,timeStamp : Timestamp.fromDate(new Date()),numOfCustomer:numOfCustomer.value,totalPrice:totalPrice.value}
    customer.value = {firstname:firstname.value,lastname:lastname.value}
    console.log(firstname.value)
    console.log(lastname.value)

    const addNewPost =  await addDoc(collection(db, "customers"), customer.value)
    console.log(addNewPost)
}
// delete customers
async function deletecustomers(customer) {
  const deleteCustomer = await deleteDoc(doc(db,"customers",customer), customer.value)  
  console.log(customer)
}
// detail
async function detailslistitem(customer){
//   const docRef = docs(db, "listitems", );
// const docSnap = await getDoc(docRef);
//  // const getListitem = await getDocs(doc(db,"listitems","7CIAZRAYyll36klHydHU"))
//   console.log(docSnap.data())
const q = query(collection(db, "listitems"), where("purchased.name", "==", customer));
const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});
}
</script>

<template>
  <div>
    <h2 class="text-5xl md:text-6xl xl:text-5xl font-bold tracking-tight mb-12 mt-10 flex justify-center">Customers</h2>
    <!-- form new customers -->
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
              <th scope="col" class="py-3 px-6">
                <div>
                  <label for="first_name" class="text-sm font-medium text-gray-900 dark:text-white bo">First name :</label> &nbsp;&nbsp;
                  <input v-model="firstname" type="text" placeholder="  John" class="border border-indigo-600">
              </div>
              </th>
              <th scope="col" class="py-3 px-6">
                <div>
                  <label for="last_name" class=" text-sm font-medium text-gray-900 dark:text-white">Last name :</label>&nbsp;&nbsp;
                  <input v-model="lastname" type="text" placeholder="  Doe" class="border border-indigo-600">
              </div>
              </th>
              <th scope="col" class="py-3 px-6">
                <button @click="addnewcustomers()" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
                focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 
                text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Add New Customer
              </button>
              </th>
          </tr>
      </thead>
    </table>
    <div class="p-10 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-3 gap-10 justify-center">
      <div v-for="customer in customers" :key="customer.id">
      <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 gap-10">
      <div class="flex flex-col items-center pb-10">
      <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="../assets/bear.png" alt="Bonnie image"/>
      <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{{customer.firstname}} {{customer.lastname}}</h5>
      <span class="text-sm text-gray-500 dark:text-gray-400">Role : Customer</span>
      <div class="flex mt-4 space-x-3 md:mt-6">
      <div @click="detailslistitem(customer.id)"
      class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg 
      hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 
      dark:focus:ring-blue-800">Detail</div>
      <div @click="deletecustomers(customer.id)"
      class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg 
      hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 
      dark:focus:ring-blue-800">Delete Customer</div>
    </div>
</div>
</div>
        </div>
  </div>
  </div>
  <!-- list customers -->

</template>

<style>

</style>
