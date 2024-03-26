<template>
    <header class="bg-white-300">
        <div class="text flex justify-around p-2 ">

            <p class="justify-center ">Free shipping on orders above KES 2,000</p>
            <p class="">help</p>
        </div>

    </header>
   <header class="flex  mx-auto w-full content-center bg-green-400">
       <ul class="grid grid-cols-6 gap-4 h-14 container mx-auto items-center ">
       <NuxtLink to="/">BeeShop</NuxtLink>
    <li> <NuxtLink to="/home">Home</NuxtLink></li>
    <li> <NuxtLink to="/products">Products</NuxtLink></li>
    <li> <NuxtLink to="/about">About</NuxtLink></li>
    <li> <NuxtLink to="/contact">Contact Us</NuxtLink></li>

<li class="">
<InputGroup>
    <!-- <Button label="Search" /> -->
    <InputText placeholder="Keyword" class="rounded-xl px-3" />
    <Button label="Search"  class="px-3 bg-red-300 rounded-xl ml-2"/>
</InputGroup>
</li>
   </ul>

   
</header>
<slot/>
</template>

<script setup>


</script>

<style scoped>
.router-link-exact-active{
    color: brown;
    font-weight: bold;
}

</style>