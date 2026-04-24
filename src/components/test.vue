<template>
<form v-on:submit.prevent="handleSubmit">
    <label for="name">Name:</label>
    <input type="text" id="name" v-model="name" required />
    
    <label for="email">Email:</label>
    <input type="email" id="email" v-model="email" required />
    
    <button type="submit">Submit</button>

</form>
<ul>
    <li v-for="(user, index) in users" :key="index">
        {{ user.name }} - {{ user.email }}
    </li>
</ul>
<slot></slot>


</template>
<script >
export default {
props:{
    foodPrice: {
        type: String,
        required: true,
        default: '0',
        validator: (value) => {
        // This explicitly checks the type and throws an error if it fails
        return typeof value === 'string';
        }
    },},
    data() {
        return {
            name:'',
            email:'',
            users:[]
        }
    },
    methods: {
    handlePrice(){
        this.$emit('foodPriceChanged', '20.23');
        },

        handleSubmit(){
        
        let user={
        name:this.name,
        email:this.email
        }

        this.users.push(user);

        this.name=null;
        this.email=null;

        }
    },
}
</script>
<style scoped>
li{list-style:none;}
input{
display:block;
margin-bottom:10px;
color:brown;
}
 
</style>