<template>
  
  <div class="container justify-center flex mx-auto mt-10">
    <div class="product_details">

  <v-card
    class="mx-auto"
    width="944"
  >
  
  <v-container>
    <v-col>
        <v-card-title class="d-flex justify-center">
            <p class="d-flex text-center align-center font-weight-black px-8">Add New Product</p>
        </v-card-title>
    </v-col>
    <v-col>
        <v-card-title class="">
            <p class="font-weight-bold px-8">Product Details</p>
        </v-card-title>
    </v-col>
    <v-row>

        <v-col>
            <p>Product Name</p>
            <v-text-field label="Product Name" variant="outlined"></v-text-field>
        </v-col>
        <v-col>
            <p>Price</p>
            <v-text-field label="Price Per Item" variant="outlined"></v-text-field>
        </v-col>
    </v-row>
    <v-row>

        <v-col>
            <p>Product Description</p>
            <v-textarea label="Description" variant="outlined"></v-textarea>
        </v-col>
    </v-row>

    <v-row>

<v-col>
    <p>Product Image</p>
    <v-file-input clearable label="File input" variant="outlined"></v-file-input>
</v-col>
</v-row>


<v-row >
    <v-col class="d-flex justify-end">
        <v-btn variant="outlined">
  Save
</v-btn>
    </v-col>
</v-row>

  </v-container>

  <v-container>
    <v-col>
        <v-card-title class="d-flex justify-center">
            <p class="d-flex text-center align-center font-weight-black px-8">Add New Product</p>
        </v-card-title>
    </v-col>
    <v-col>
        <v-card-title class="">
            <p class="font-weight-bold px-8">Product Details</p>
        </v-card-title>
    </v-col>
    <v-row>

        <v-col>
            <p>Product Name</p>
            <v-text-field label="Product Name" variant="outlined"></v-text-field>
        </v-col>
        <v-col>
            <p>Price</p>
            <v-text-field label="Price Per Item" variant="outlined"></v-text-field>
        </v-col>
    </v-row>
    <v-row>

        <v-col>
            <p>Product Description</p>
            <v-textarea label="Description" variant="outlined"></v-textarea>
        </v-col>
    </v-row>

    <v-row>

<v-col>
    <p>Product Image</p>
    <v-file-input clearable label="File input" variant="outlined"></v-file-input>
</v-col>
</v-row>


<v-row >
    <v-col class="d-flex justify-end">
        <v-btn variant="outlined">
  Save
</v-btn>
    </v-col>
</v-row>

  </v-container>


   

  </v-card>

    </div>
   </div>
</template>

<script setup>
const productDetailsSave =ref(false)

</script>

<style lang="scss" scoped>

</style>