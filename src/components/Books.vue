<template>
	<div>
		<div class="books_header">
			<div class="title_container">
				<router-link to = "/" class="link">
          <img src='../assets/images/Back.svg' class="" alt="next" />
        </router-link>
				<h1 class="title">{{label}}</h1>
			</div>
			<div class="title_container">
				<input type="text"
				class="search" v-model="search" 
				placeholder="Search"/>
			</div>
		</div>
		<div class="books_container" >
      <div class="center" v-if="loading">
        <img src='../assets/images/loading.svg' class="loader" alt="loading" />
        <p class="loading_text">Loading</p>
      </div>
			<div class="book_container" v-for="(book, i) in renderBooks" v-bind:key="book.id">
				<a class= "link" v-on:click="handlePreview" v-bind:href="getDownload(i)">
					<div class="rectangle">
            <img :src="getPic(i)" :alt=book.title class="cover">
					</div>
				</a>
				<p class="book_name textwrap">{{ book.title }}</p>
				<p class="author textwrap" v-once v-for="(author,i) in book.authors" v-bind:key="i"> {{ author.name }}</p>		
			</div>
		</div>
	</div>
</template>
<script>
export default{
name: 'Books',
data() {
  return {
    books: [],
    label: '',
    search: '',
    loading: true
  }
},
computed: {
    renderBooks(){
      return this.books.filter(book => {
        return book.title.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
beforeMount(){
  this.getData();
},

methods: {
  async getData(){
    const title = window.location.href.split('=').pop();
    const URL = `http://skunkworks.ignitesol.com:8000/books/?topic=${title}`;
    await fetch(URL)
    .then((result)=>{
       result.json().then((resp)=>{
          this.books = resp.results;
          this.label = title;
          this.loading = false;
      })
    }).catch(function() {
        alert('Error: HTTP over HTTPS Mixed content error');
    });
  },
  getPic(i) {
    return this.books[i].formats['image/jpeg'] || require(`@/assets/images/default_cover.jpg`);
  },
  getDownload(index) {
    return this.books[index].formats['application/pdf'] || this.books[index].formats['text/html'] || this.books[index].formats['text/plain'];
  },
  handlePreview(e){
    if(e.target.parentElement.parentElement.href === "" || e.target.href === ""){
      e.preventDefault();
      alert("No viewable version available");
    }
  }
}
}
</script>
<style>
.books_header{
  background: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
}
.title_container{
  display: flex;
  align-items: center;
}
.title{
  color: #5E56E7;
  margin: 0;
  padding-left: 17px;
  text-transform: capitalize;
}
.search{
  border-radius: 4px;
  padding: 0 10px;
  height : 40px;
  background: #F0F0F6;
  width: 100%;
  border: none;
  background: url('../assets/images/Search.svg') #F0F0F6 no-repeat 12px 12px;
  padding-left: 40px;
  font-size: 14px;
  border: 2px solid transparent;
  margin-top: 10px;
}
.search:focus{
  border: 2px solid #5E56E7;
  outline: none;
}
.search:focus::placeholder {
  color: transparent;
}
.search::-webkit-input-placeholder {
  font-weight: bold;
}
.search::-moz-placeholder {
  font-weight: bold;
}
.search::-ms-input-placeholder {
  font-weight: bold;
}
.book_container{
  width: 114px;
}
.center{
  margin: auto;
  text-align: center;
}
.loader{
  width: 40px;
}
.loading_text{
  text-align: center;
  margin: 0;
  color: #5E56E7;
  font-weight: 500;
}
.rectangle{
  width: 114px;
  height: 162px;
  border-radius: 8px;
  box-shadow: 0 2px 5px 0 rgba(211, 209, 238, 0.5);
  overflow: hidden;
  cursor: pointer;
}
.cover{
  max-width: 100%;
  height: 100%;
  width: 100%;
}
.textwrap{
  font-size: 12px;
  width: 114px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; 
  -webkit-box-orient: vertical;
  font-weight: 500;
}
.book_name{
  text-transform: uppercase;
  margin-bottom: 0;
  color: #333333;
}
.author{
  color: #A0A0A0;
  margin-top: 5px;
}
@media screen and (min-width: 667px){
  .books_header{
    padding: 20px 40px;
  }
  .book_container{
    width: 115px;
  }
}
</style>