<template>
  <div class="home">
    <b-card >
      <BookStore/>
      <UserOperation/>
    </b-card>
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
