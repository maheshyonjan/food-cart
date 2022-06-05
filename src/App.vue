<template>
  <div class="main">
    <div class="navbar">
      <Navbar @changeStatus="showCart" />
    </div>

    <div class="bg-image">
      <h1 id="title">Food Cart</h1>  
    </div>
    <!-- <Test /> -->
    <!-- <div :key="item.id" v-for="item in cart.lists" >
      <p >{{item.name}}</p> 
      <p>{{item.quantity}}</p>
    </div> -->
    <div class="items">
      <ProductCard @emitProductDetails="storeCart" 
      @addBtn="addQuantity"  
      :products="products"   />
    </div>
    <Cart @hideCart="showCart" 
    @deleteCartItems="deleteCartItems" 
    v-show="cartStatus"/>
    <!-- <Cart @hideCart="showCart" 
    @deleteCartItems="deleteCartItems" 
    /> -->
  </div>
 
</template>
  

<script>
// // import Test from './components/Test.vue'
import Navbar from './components/Navbar.vue'
import ProductCard from './components/ProductCard.vue'
import Cart from './components/Cart.vue'



export default {
  
  name: 'App',
  data(){
    return{
      products:[],
      cart:{lists:[]},
      name:'banana',
      cartStatus: false,
    }
  },

  created(){
    this.products=[
      {
      id:1,
      name:'carrot',
      type:'vegitable',
      price:5,
      quantity:0,
      photo:'./assets/cart.svg'
      },
      {
      id:2,
      name:'banana',
      type:'fruits',
      price:6,
      quantity:0,
      photo:'./assets/cart.svg'
      },
      {
      id:3,
      name:'mango',
      type:'fruits',
      price:10,
      quantity:0,
      photo:'./assets/cart.svg'
      },  
      {
      id:4,
      name:'cucumber',
      type:'vegitable',
      price:5,
      quantity:0,
      photo:'./assets/cart.svg'
      }, 
    ]
  },
  provide(){
    return{
      cartProduct: this.cart.lists,

    }
  },
  components: {
    Navbar,
    ProductCard,
    Cart,
    // Test
  },
  methods:{
    addQuantity(value,index){
      this.products[index].quantity = value;
    },
    showCart(){
      this.cartStatus= !this.cartStatus
      console.log(this.cart.lists)
    },
    storeCart(product){
      this.cart.lists.push(product)
      console.log(this.cart.lists)
    },
    deleteCartItems(key){
      const cartItems = this.cart.lists
      console.log(cartItems)
      console.log(key)
      const filtered = cartItems.filter(item => item.id != key)
      this.cart.lists = filtered
      console.log(filtered)
    }

  }

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 62.5%;
}

.main {
  display:flex;
  flex-direction: column;
  
}
.fa-solid {
    font-size:10rem;
    color: red;
}

.bg-image{
  height:50vh;
  font-size: 20rem;
  background-image: url("./assets/pexels-nataliya-vaitkevich-6942034.jpg");
  background-size: 100%;
  background-repeat: no-repeat;
  display:flex;
  align-items: center;
  justify-content: center;
  color: white;
  overflow: hidden;

}

p{
  font-size: 3rem;
}

#title{
  font-family: Bebas Neue;
  display: flex;
  
  color:rgb(190, 224, 224);

}

.items{
  padding: 0px 2vw;
  display: flex;
  flex-wrap: wrap;
  
  justify-content: center;
  justify-content:space-between;
  
}

.cart{
  display: flex;
  position: absolute;
  right: 0;
}

</style>
