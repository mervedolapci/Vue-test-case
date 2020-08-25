<template>
  <div>
    <b-card style="max-width: 20rem;" class="my-5 mx-5"  >
    <b-card-text>
    <strong>BOOK STORE OPERATIONS</strong>
    </b-card-text>
    <b-button to='/addNewBook' variant="dark">Add New Book</b-button><br><br>
    <b-button to='/bookList' variant="dark">Book List</b-button>
  </b-card>    
</div>
</template>
<script>
export default {
  name: 'BookStore',
}
</script>

<style>

a {
  text-decoration:none;
  color:#1ab188;
  transition:.5s ease;
}
.form {
  background:rgba(#13232f,.9);
  padding: 40px;
  max-width:600px;
  margin:40px auto;
  box-shadow:0 4px 10px 4px rgba(#13232f,.3);
}
input, textarea {
  font-size:22px;
  display:block;
  width:100%;
  height:100%;
  padding:5px 10px;
  background:none;
  background-image:none;
  border:1px solid gray;
  color:purple;
  border-radius:0;
}
.button {
  border:0;
  outline:none;
  border-radius:0;
  padding:15px 0;
  font-size:2rem;
  font-weight:bold;
  text-transform:uppercase;
  letter-spacing:.1em;
  background:gray;
  color:white ;
  transition:all.5s ease;
  -webkit-appearance: none;
 
}

</style>