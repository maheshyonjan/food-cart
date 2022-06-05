<template>
    <div :key="product.id" v-for="product in products" class="container">
        <div class="title">
            <h2>{{product.name}}</h2>
            <!-- <p>{{products}}</p> -->
        </div>
        <div class="content">
            <div class="picture">
                <img src="../assets/cart.svg" alt="carrot">
            </div>
            <div class="details">
                <div class="type">
                    <h6>Type:</h6>
                    <p id="type"> {{product.type}}</p>
                </div>
                <div class="price">
                    <h6>Price:</h6>
                    <p id="price">${{product.price}}</p>
                </div>
                <div class="quantity">
                    <h6>Quantity:</h6>
                    <input @input="addQty($event.target.value)"
                    id="quantity" 
                    type="number" min="0">
                </div>
                
            </div>
        </div>
        <div class="bottom">
            <p class="lable-text">Press to add item in cart</p>
            <button 
            @click="addTocart(product),itemsAdd(product.id)"
              
            class="btnAdd">Add</button>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'product-card',
        data(){
            return{
                quantityNum:0,
                number:''
            }
        },
        props:{
            products: Array,
            xyz : Array,
        },
        methods:{
            itemsAdd(id){
                const index = id-1;
              
                this.$emit('addBtn',this.quantityNum,index)
                this.quantityNum = 0
            },
            addQty(num){
                this.quantityNum = Math.floor(num)
                
            },
            addTocart(product){
                this.$emit('emitProductDetails',product)
                
            },
            
        },
        emits:[
                'addBtn','emitProductDetails'
            ]
    }
</script>

<style  scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 62.5%;
  font-family: Ubuntu ;
}
.title{
    display: flex;
    padding: 5px;
    justify-content: center;
    width: 100%;
    background-color:rgb(117, 184, 22);
}
h2{
    font-size:3rem;
    color: white;
}


.container{
    height: 400px;
    width: 400px;
    display:flex;
    align-items: center;
    flex-direction: column;
    margin-top: 50px;
    background-color: rgb(255, 232, 132);
    position: relative;
    box-shadow:0 0 10px rgba(234, 244, 125, 0.5);
}

.container p {
    font-size: 1.6rem;
}

.container:hover{
    box-shadow: 0 0 10px rgba(234, 244, 125, 0.5);
}

.picture{
    display:flex;
    align-items: center;
}
img{
    width: 125;
    height: 125px;
    margin-top:20px;
}

.details{
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 0px 25px;
    
    bottom: 75px;
    left: 0;
    position: absolute;
}
.details div{
     font-size: 3rem;
     padding:0px;
     margin:0px;
}
.details div p,input{
    color:rgb(24, 63, 13);
}

.type, .price, .quantity{
    display: flex;
    justify-content: space-between;
    color: rgb(4, 14, 103);

}

input{
    width:84px;
}

.bottom{
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-between;
    font-size: 3rem;
    padding: 8px 20px;
    width: 100%;
    background-color:rgb(59, 27, 60);
    bottom: 0;
    position: absolute;
}

.lable-text{
    color: rgb(206, 241, 242);
}

.btnAdd{
    background-color: rgb(117, 184, 22);
    border: none;
    display: block;
    padding: 8px 25px ;
    border-radius: 10px;
    color: white;
    transition: all 0.4s ease 0s;
    
}


.btnAdd:hover{
    cursor: pointer;
    background-color: rgb(82, 162, 32);
}

</style>