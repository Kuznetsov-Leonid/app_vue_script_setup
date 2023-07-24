<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
  export default{
    name: 'my-button'
  }
</script>

<style scoped>
  .btn{
    border: 1px solid teal;
    padding: 10px 15px;
    background: none;
    color: teal;
    transition: 0.3s;
  }
  .btn:hover{
    background: teal;
    color: white;
    border: 1px solid white;
  }
</style>