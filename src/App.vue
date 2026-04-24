<script>
export default {
    data() {
        return {
            foodPrice: '12.20'
        }
    },
    methods: {
    receiveEmit(){
            this.foodPrice = '30.45';
        }
    }}
</script>

<template>
 <h3>Vue 3 + Vite + TypeScript + Tailwind CSS</h3>
 <p>This is a simple vue with more details data </p>

<test>
product price: {{ foodPrice }}

</test>

</template>

<style scoped>

</style>
