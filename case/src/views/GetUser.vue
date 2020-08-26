<template>
 <div class="container mt-3 mb-4 col-4 p-3 bg-light border">
<strong>Get User</strong>
<router-link to="/"  class="nav-link">Return Home Page</router-link>
<select class="form-control" v-model="selected">
<option disabled value="">Please select a book</option>
<option  v-for="(item, index) in users" :key="index" :value="item.selectedBook">{{item.selectedBook}}</option>
</select> 
<div v-if="selected" >
    {{getUser(selected)}}
    <b-card class="info" mt-2>
    <p>{{this.userInfo.id}}</p>
    <p>{{this.userInfo.name}}</p>
    <p>{{this.userInfo.address}}</p>
    <button @click="removeUserFromBook" variant="dark" size="sm">delete</button>
    </b-card>
    
</div>

</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    data() {
      return {
          selected: '',
          userInfo:{},
          temp :{}
      }
  },
  methods: {
      getUser(item) {             
   this.userInfo=this.$store.state.userList.find((object) => object.selectedBook === item )
    },
    removeUserFromBook(){
    this.$store.dispatch('remove_user_name',this.userInfo)
     this.$toasted.show('Book has been getted from user');
        setTimeout(() => {
        this.$toasted.clear()
        this.userInfo={}
    }, 1000);

     }
      
  },
    computed: {
    ...mapGetters({books: 'get_books_for_user', users:'get_user_list'})
  },

}
</script>

<style scoped>
</style>