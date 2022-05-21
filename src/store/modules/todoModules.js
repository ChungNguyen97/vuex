import axios from 'axios'

const todoModule = {
  state: {
    todos: [],
    params:{
      _limit:3
    }
  },
  getters: {
    getTodos: state => state.todos,
    getDoneTodos: state => state.todos.filter(todo => todo.completed),
    getContinueTodos: state => state.todos.filter(todo => !todo.completed),
    processBar: (state, getters) => Math.round((getters.getDoneTodos.length / state.todos.length) * 100)
  },
  actions: {
    async getTodo({ state, commit }) {
      const params = state.params
      try {
        const response = await axios.get(process.env.VUE_APP_BASE_URL,{params})
        commit('SET_TODOS', response.data)
      } catch (error) {
        console.log(error);
      }
    }
  },
  mutations: {
    SET_TODOS(state, todos) {
      return  state.todos = todos
    },
    CHANGE_LIMIT(state, payload){
      state.params._limit=payload
    }
  }

}

export default todoModule
