<template>

    <div class="container justify-center flex mx-auto mt-10">
        <div class="product_details">

            <v-card class="mx-auto" width="944">

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


                    <v-row>
                        <v-col class="d-flex justify-end">

                            <v-btn :icon="productDetailsSave ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                                @click="productDetailsSave = !productDetailsSave">

                            </v-btn>
                        </v-col>
                    </v-row>

                </v-container>


                <v-expand-transition>
                    <div v-show="productDetailsSave">
                        <v-divider></v-divider>

                        <v-container>
                            <v-col>
                                <v-card-title class="d-flex justify-center">
                                    <p class="font-weight-black px-8">Pricing</p>
                                </v-card-title>
                            </v-col>

                            <v-row>

                                <v-col>
                                    <p>Price Per Item</p>
                                    <v-text-field label="Product Name" variant="outlined"></v-text-field>
                                </v-col>
                                <v-col>
                                    <p>Compare at price</p>
                                    <v-text-field label="Price Per Item" variant="outlined"></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>

                                <v-col>
                                    <p class="text-subtitle-2">Cost per item</p>
                                    <v-text-field label="Cost Per Item" variant="outlined"></v-text-field>
                                    <p class="text-subtitle-2 font-italic font-weight-thin">Won't be shown to customer
                                    </p>
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col class="d-flex justify-end">

                                    <v-btn :icon="inventorySave ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                                        @click="inventorySave = !inventorySave" label="Save">

                                    </v-btn>
                                </v-col>
                            </v-row>

                        </v-container>

                    </div>
                </v-expand-transition>


                <v-expand-transition>
                    <div v-show="inventorySave">
                        <v-divider></v-divider>

                        <v-container>
                            <v-col>
                                <v-card-title class="d-flex justify-center">
                                    <p class="font-weight-black px-8">Inventory</p>
                                </v-card-title>
                            </v-col>

                            <v-row>

                                <v-col>
                                    <p>Item Quantity</p>
                                    <v-text-field label="Product Quantity" variant="outlined"></v-text-field>
                                </v-col>
                                <v-col>
                                    <p>Bar Code (QR) </p>
                                    <v-text-field label="Bar code" variant="outlined"></v-text-field>
                                </v-col>
                                <v-col>
                                    <p>Weight in gms </p>
                                    <v-text-field label="Weight" variant="outlined"></v-text-field>
                                </v-col>
                            </v-row>


                            <v-row>
                                <v-col class="d-flex justify-end">

                                    <v-btn :icon="optionSave ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                                        @click="optionSave = !optionSave" label="Save">
                                    </v-btn>
                                </v-col>
                            </v-row>

                        </v-container>

                    </div>
                </v-expand-transition>

                <v-expand-transition>
                    <div v-show="optionSave">
                        <v-row>
                            <v-col class="d-flex px-8 py-8">
                                <p class="font-weight-black">Options</p>
                            </v-col>

                        </v-row>

                        <v-row> <v-col class="d-flex px-8 py-8">
                                <v-checkbox v-model="productOptions" color="success"
                                    label="Does this product have options like size and color" value="success"
                                    hide-details></v-checkbox>
                            </v-col>
                        </v-row>
                    </div>
                </v-expand-transition>

                <v-card>
                    <v-expand-transition>
                        <div v-show="productOptions">
                            <v-row>
                                <v-col cols=6 class="d-fle px-8 p-8">
                                    <p>Option Name</p>
                                    <v-text-field v-model="optionName" label="name" variant="outlined"></v-text-field>
                                </v-col>
                                <v-col cols="6" class="d-fle px-8 ">
                                    <p>Option Values</p>

                                    <v-row class="d-flex justify-center align-center" v-for="i in optionsValues">
                                        <v-col cols="1">
                                            <v-col cols="auto">
                                                <v-btn density="compact" icon="mdi-plus" @click="addOption"></v-btn>
                                            </v-col>
                                        </v-col>
                                        <v-col cols="8">

                                            <v-text-field v-model="optionValue"  label="value" variant="outlined"></v-text-field>
                                        </v-col>
                                        <v-col cols="">
                                            <v-btn density="compact" icon="mdi-minus" @click="removeOption"></v-btn>
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>
                            <v-btn @click="handleSubmit">Submit</v-btn>
                         

                            <v-row> <v-col class="d-flex px-8 py-8">

                                                            </v-col>
                            </v-row>
                        </div>
                    </v-expand-transition>
                </v-card>



            </v-card>



        </div>
    </div>
</template>

<script setup>
const productDetailsSave = ref(false)
const show = ref(false)
const inventorySave = ref(false)
const optionSave = ref(true)
const productOptions = ref(true)
const optionsValues = ref([{name: ""}])
const optionName= ref('')
const optionValue =ref('')



const addOption=()=>{
    console.log("add btn");
    optionsValues.value.push({name: optionValue.value})
}
const removeOption=()=>{
    console.log("add btn");
    optionsValues.value.pop('')
}
const handleSubmit=()=>{
    console.log(optionName.value, "jkfkjkjdkjdkf",  optionValue.value );
}


</script>

<style lang="scss" scoped></style>