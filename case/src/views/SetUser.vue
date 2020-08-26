<template>
<div class="container mt-3 mb-5 col-6 p-5 bg-light border">
    <form @submit.prevent="add">
      <div class="form-group">
      <strong>SET USER</strong>
      <router-link to="/"  class="nav-link">Return Home Page</router-link>  
    <select class="form-control" v-model="user.selectedBook">
    <option disabled value="">Please select a book</option>
    <option  v-for="(item, index) in datalist" :key="index" :value="item.name">{{item.name}}</option>
    </select>
    <validation-provider rules="required" v-slot="{ errors }">
      <input type="text" name="name" class="form-control form-control-sm" v-model="user.name" placeholder="please enter name and surname" />
       <span>{{ errors[0] }}</span>
     </validation-provider>
      <validation-provider rules="required" v-slot="{ errors }">
      <input type="text" name="id" class="form-control form-control-sm" v-model="user.id" placeholder="please insert identity number"/>
       <span>{{ errors[0] }}</span>
     </validation-provider>
      <validation-provider rules="required" v-slot="{ errors }">
      <input type="text" name="address" class="form-control form-control-sm" v-model="user.address" placeholder="place enter address"/>
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
import {mapGetters} from 'vuex'


export default {
    components: { ValidationProvider, ValidationObserver },
    data() {
        return {
          user: {
            name: '',
            id: '',
            address: '',
            selectedBook:''
          }
        }
    },
    methods: {
      ...mapMutations([
        "add_user_list"
      ]),
      add(){  
        this.$store.dispatch('add_user', this.user)
        this.$toasted.show('Book has been setted user');
        setTimeout(() => {
        this.$toasted.clear()
    }, 1000);
        },
    },
    computed: {
    ...mapGetters({datalist:'get_book_list'})
  },
}
</script>