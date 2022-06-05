<template>
    <div>
        <h1>This is Test</h1>
        <h1>{{product}}</h1>
        <h1>{{item}}</h1>
    </div>
</template>

<script>
    export default {
        name:'test-i',
        inject: [
            'product',
          
        ],
        props:[
            'item'
        ],
    }
    
</script>

<style scoped>
h1 {
    font-size: 5rem;
    color: red;
}
</style>