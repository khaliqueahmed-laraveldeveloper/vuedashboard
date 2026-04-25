    <script>
    import componentOne from './components/componentOne.vue'
    import componentTwo from './components/componentTwo.vue'
        export default {
                    components: {
            componentOne,
            componentTwo
        },
            }
    </script>

<template>
  
 <router-link to="/com1">One</router-link>
 <br>
 <router-link to="/com2">Two</router-link>

<router-view></router-view>
</template>

<style scoped>

</style>
