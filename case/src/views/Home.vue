<template>
 <div class="container mt-3 mb-4 col-4 p-3 bg-light border">
       <BookStore/>
      <UserOperation/>
    
  </div>
</template>

<script>
import BookStore from "../components/BookStore"
import UserOperation from "../components/UserOperation"

export default {
  name: 'Home',
  components: { BookStore , UserOperation }
}
</script>
