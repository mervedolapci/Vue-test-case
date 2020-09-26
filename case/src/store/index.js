import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bookList : [],
    userList:[]
  },
  mutations: {
  add_book_list(state,payload){
    state.bookList.push(payload)
  },
  add_user_list(state,payload){
    const index = state.bookList.findIndex((item) => item.name === payload.selectedBook);
    state.bookList[index].user=payload.name
    state.userList.push(payload);
  },
  remove_book(state, payload) {  
    const index = state.bookList.findIndex((item) => item.name === payload.name);
    state.bookList.splice(index, 1);
  },
  get_user_list(state,payload){  
  state.userList.find((item) => item.selectedBook === payload )    
  },
  remove_user_from_book(state,payload){
    const index = state.bookList.findIndex((item) => item.name === payload.selectedBook);
    state.bookList[index].user=null

  }
  },
  actions: {
  add_book_list({commit},payload){     
      const bookItem = {...payload, user: null}
      commit('add_book_list', bookItem)
  },
  add_user({commit},payload){
    commit('add_user_list',payload)
  },
  remove_user_name({commit},payload){
    commit('remove_user_from_book',payload)
  }
 
  },
  modules: {

  },
  getters :{
    get_book_list(state){
      return state.bookList
    },
    get_user_list(state){
       return state.userList 
    }, 
    get_books_for_user(state){
      return state.bookList.filter(item=> item.user !== null)
    },
  }
})
