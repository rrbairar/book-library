<template>
  <div>
    <header class="App-header">
      <h1>Gutenberg Project</h1>
      <h2>A social cataloging website that allows you to freely search its database of books, annotations, and reviews.</h2>
    </header>
    <div class="book_list_container">
      <router-link to = "/books?topic=fiction" class="link"><BookList title="Fiction" logo="img" navigation="nav img"/></router-link>
      <router-link to = "/books?topic=drama" class="link"><BookList title="Drama" logo="img" navigation="nav img"/></router-link>
      <router-link to = "/books?topic=humour" class="link"><BookList title="Humour" logo="img" navigation="nav img"/></router-link>
      <router-link to = "/books?topic=politics" class="link"><BookList title="Politics" logo="img" navigation="nav img"/></router-link>
      <router-link to = "/books?topic=philosophy" class="link"><BookList title="Philosophy" logo="img" navigation="nav img"/></router-link>
      <router-link to = "/books?topic=history" class="link"><BookList title="History" logo="img" navigation="nav img"/></router-link>
      <router-link to = "/books?topic=adventure" class="link"><BookList title="Adventure" logo="img" navigation="nav img"/></router-link>
    </div>
  </div>
</template>
<script>
  import BookList from './BookList.vue';
  export default{
    name: 'Nav',
    components:{
      BookList
    }
  }
</script>
<style>

</style>
