<template>
    <header>
    <img src="../assets/shopping-cart.svg" alt="logo">
    <nav class="top-nav-bar">
      <ul class="nav_links">
        <li><a href="#">home</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Past Orders</a></li>
        
      </ul>
    </nav>
    
    <div class="right-navbar">
      <img src="../assets/cart.svg" alt="logo">
      <ul>
        <li><p @click="$emit('changeStatus')">cart (0)</p></li>
      </ul>
      
    </div>
  </header>
</template>

<script>
    export default {
      name:'Navbar-i' ,
      methods:{
        
      }
    }
    
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap');

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 62.5%;
}

header{
  background-color:rgb(65, 68, 96);
  margin: 0;
  padding: 0;
 
}

img{
  width: 3rem;
  height: 3rem;
}

ul,li, a ,p {
  font-family: ubuntu;
  color: rgb(255, 255, 255);
  font-weight: 500;
  font-size: 1.6rem;
  text-decoration: none;
  list-style: none;

}

.nav_links li {
  display: inline-block;
  padding: 0 20px;
}

.nav_links li a , .right-navbar li p {
  transition: all 0.4s ease 0s;
}

.nav_links li a:hover, .right-navbar li p:hover {
  color: aqua;
}


.right-navbar{
  display: flex;
  justify-content: space-between;
}


header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 10%;
}
</style>