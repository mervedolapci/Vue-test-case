<template>
    <div class="container mt-3 mb-4 col-6 p-5 bg-light border">
 <form @submit.prevent="submitForm">
      <div class="form-group">
      <strong>ADD NEW BOOK </strong>
      <router-link to="/"  class="nav-link">Return Home Page</router-link>
     <validation-provider rules="required" v-slot="{ errors }">
      <input type="text" name="name" class="form-control form-control-sm" v-model="books.name" placeholder="please enter book name" />
       <span>{{ errors[0] }}</span>
     </validation-provider>
      <validation-provider rules="required" v-slot="{ errors }">
      <input type="text" name="author" class="form-control form-control-sm" v-model="books.author" placeholder="please enter author"/>
       <span>{{ errors[0] }}</span>
     </validation-provider>
      <validation-provider rules="required" v-slot="{ errors }">
      <input type="text" name="imageUrl" class="form-control form-control-sm" v-model="books.img" placeholder="place enter img src"/>
       <span>{{ errors[0] }}</span>
     </validation-provider>
     <br> <b-button  type="submit" variant="dark">save</b-button>
    </div>
 </form>
    </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import {mapMutations} from 'vuex'


export default {
    components: { ValidationProvider, ValidationObserver },
    data() {
        return {
          books: {
            name: '',
            author: '',
            img: '',
            user: null
          }
        }
    },
    methods: {
      ...mapMutations([
        "add_book_list"
      ]),
      submitForm(){       
        this.$store.dispatch('add_book_list', this.books);   
      //  this.clearForm()
 
      },
     clearForm(){
        this.books.name = '';
        this.books.author = '';
        this.books.img = '';
      }
      
    },
}
</script>