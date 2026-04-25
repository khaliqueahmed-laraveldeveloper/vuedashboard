    <script>
    import componentOne from './components/componentOne.vue'
    import componentTwo from './components/componentTwo.vue'
export default {
            components: {
    componentOne,
    componentTwo
  },
            data() {
                return {
                    toggleValue: true
                }
            },
            computed:{
            activeComp() {
            if(this.toggleValue) {
                    return 'componentOne'
                    }
                    else {
                    return 'componentTwo'
                    }
            }},
            }
    </script>

<template v-slot="default">
<button @click="toggleValue= !toggleValue">switch button</button>
<keep-alive exclude="componentTwo">
  <component :is="activeComp"></component>
</keep-alive>
</template>

<style scoped>

</style>
