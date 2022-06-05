<template>
    <div  class="cart">
        <header>
                <div class="right-side">
                    <h1>Cart</h1>
                    <img src="../assets/cart.svg" alt="cart">
                </div>
                <div class="left-side">
                    <i @click="$emit('hideCart')" style="text-decoration: none;"  class="fa-solid fa-square-xmark"></i>
                </div>
        </header>
        <div class="catagory">
            <ul>
                <li>Product</li>
                <li>Price</li>
                <li>Quantity</li>
                <li>Total</li> 
                <li>Remove</li>
            </ul>
             <CartItems @deleteItems="emiter"/>
        </div>
        <!-- <Test/> -->
       
    </div>
    
</template>

<script>
    // // import Test from '../components/Test.vue'
    import CartItems from './CartItems.vue'
    
    export default {
        name:'cart-i',
        components: {
            // Test,
            CartItems
        },
        methods:{
            emiter(key){
                this.$emit('deleteCartItems',key)
            }
        }
    }
</script>

<style scoped>


*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 62.5%;
}
.cart{
    background-color: rgba(33, 54, 84, 0.81);
    height: 100vh;
    width: 500px;
    display: flex;
    flex-direction: column;
}

header{
    background-color: rgb(6, 22, 38);
    padding: 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    justify-content: space-between;
}

.right-side{
    display: flex;

}

h1{
    font-size: 5rem;
    font-family: Ubuntu;
    color: rgb(228, 251, 246);
}
img{
    height:50px;
    width: 50px;
}
.fa-solid {
    font-size:5rem;
    color: red;
    
}
.catagory {
    font-size: 6rem;
    color: rgb(213, 255, 248);
    padding: 10px;
}
.catagory ul{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.catagory ul li {
    font-family: Ubuntu;
    list-style-type: none;
    width: 20vw;
}


.items-display{
    font-size: 5rem;
    color: rgb(172, 254, 84);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
    
}
.items-display ul{
    display: flex;
    flex-direction: column;
}

.items-display ul li{
    font-family: Ubuntu;
    list-style-type: none;
}



</style>