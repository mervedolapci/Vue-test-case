<template>
<div class="container col-9 m-4 border"><strong>List</strong>
    <router-link to="/"  class="nav-link">Return Home Page</router-link>
<b-card-group deck v-for="(item, index) in datalist" :key="index" >
  <!-- Card body -->
  <b-row align-v="center">
    <b-col md="auto">
      <!-- Avatar -->
      <a href="javascript:;">
        <img
        rounded="circle"
        class="img-center shadow shadow-lg--hover" 
        style="width: 100px; height:100px;"
        :src="item.img">
      </a>
    </b-col>
    <b-col class="ml--2">
      <h5 class="mb-0">
        <a href="#">{{item.author}}</a>
      </h5>
      <p class="text-sm text-muted mb-0">{{item.name}}</p>
    </b-col>
    <b-col md="auto">
      <button  @click.prevent="removeItem(item)" variant="dark" size="sm">Remove</button>
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
        //message = `${item.name} has been removed `;
        this.$store.commit('remove_book', item);
    }
}
}
</script>