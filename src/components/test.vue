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
</template>
<script >
export default {
    data() {
        return {
            name:'',
            email:'',
            users:[]
        }
    },
    methods: {
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