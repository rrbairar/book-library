<template>
  <router-view/>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 200;
    src: local(''),
         url('./assets/fonts/Montserrat/Montserrat-Thin.ttf') format('truetype')
  }
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    src: local(''),
         url('./assets/fonts/Montserrat/Montserrat-Thin.ttf') format('truetype')
  }
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    src: local(''),
         url('./assets/fonts/Montserrat/Montserrat-Thin.ttf') format('truetype')
  }
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    src: local(''),
         url('./assets/fonts/Montserrat/Montserrat-Bold.ttf') format('truetype')
  }
  body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
    background: #F8F7FF;
    color: #333333;
  }
  .App-header{
    height: 100%;
    background: url('./assets/images/Pattern.svg');
    background-size: cover;
    padding: 40px 20px;
  }
  .App-header h1{
    font-size: 48px;
    color: #5E56E7;
    margin: 0;
  }
  .App-header h2{
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 0;
  }
  .book_list_container{
    background: #F8F7FF;
    padding: 30px 20px;
  }
  .books_container{
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    padding: 20px;
    background: #F8F7FF;
    height: 100%;
    gap: 10px;
  }
  a.link{
    text-decoration: none;
    display: block;
  }
  a.link:link {
    color: #333333;
  }
  a.link:visited {
    color: #333333;
  }
  a.link:hover {
    color: #333333;
  }
  a.link:active {
    color: #333333;
  }
  @media screen and (min-width: 667px){
    .books_container{
      padding: 40px !important;
      gap: 40px;
    }
    .book_list_container{
      background: #F8F7FF;
      padding: 30px 20px;
      flex-wrap: wrap;
      display: flex;
      justify-content: space-between;
    }
    a.link{
      flex-basis: calc(50% - 50px);
    }
  }
</style>
