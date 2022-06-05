<template>
<div :key="items.id" v-for="items in products" class="container">
    <ul>
        <li id="name" >{{items.name}}</li>
        <li id="price">${{items.price}}</li>
        <li id="quantity">{{items.quantity}}</li>
        <li id="total">$15</li>
        <i @click="deleteItems(items.id)" 
        class="fa fa-times" 
        aria-hidden="true"></i>
    </ul>
</div>
</template>

<script>
    export default {
        name:'cartItems-i',
        inject: [
            'cartProduct',
        ],
        data(){
            return{
                products: this.cartProduct
            }
        },
        methods:{
            deleteItems(key){
               this.products= this.products.filter(item=> item.id != key )
                this.$emit('deleteItems',key)
                console.log(key)
                console.log(this.products)
                console.log(this.cartProduct)
               
            }
        },
        emits:[
            'deleteItems'
        ]
        
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap');
*{
    padding: 0;
    margin:0;
    box-sizing: border-box;
}
ul li {
    font-family: 'Ubuntu';
    font-size: 2rem;
    list-style-type:none;
    display:flex;
    color: rgb(182, 255, 182);
    
}

ul{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    padding-Top: 10px;
}

.fa {
    font-size: 3rem;
    color: rgb(255, 63, 63);
}
</style>