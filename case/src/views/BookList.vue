<template>
 <div class="container border bg-light mt-3 mb-4 col-4 p-3  ">
<strong> Book List</strong>
<router-link to="/"  class="nav-link">Return Home Page</router-link>
<b-card-group deck v-for="(item, index) in datalist" :key="index" >
  <b-row align-v="center">
    <b-col md="auto">
      <a href="javascript:;">
        <img
        rounded="circle"
        class="img-center shadow shadow-lg--hover" 
        style="width: 100px; height:100px;"
        :src="item.img">
      </a>
    </b-col>
    <b-col class="ml--2">
      <h5 class="mb-0">{{item.name}}</h5>
      <p class="text-sm text-muted mb-0">{{item.author}}</p>
    </b-col>
    <b-col md="auto">
        <div  v-if="item.user!==null"><p>At User</p></div>
        <div else >
        <p> In store </p>
        <button  @click.prevent="removeItem(item)" variant="dark" size="sm">Remove</button>
        </div>
    </b-col>
  </b-row>
</b-card-group>
 </div>
</template>
<script>
import { mapGetters } from "vuex";
import { mapState } from 'vuex';
export default {
    data() {
    return {

    }
  },
  computed: {
    ...mapGetters({datalist:'get_book_list'})
  },
methods: {
     removeItem(item) {             
        this.$store.commit('remove_book', item);
        this.$toasted.show(' Book has been removed ');
        setTimeout(() => {
        this.$toasted.clear()
        }, 1000);
      

    }
}
}
</script>