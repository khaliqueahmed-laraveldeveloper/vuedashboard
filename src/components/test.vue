<template>

<slot name='price' v-bind:localdata="testPrice"></slot>


</template>

<script >
export default {

    data() {
        return {
           
            testPrice: '200'
        }
    }
   

}



</script>
<style scoped>

 
</style>