
const newTodoModule = {
  state: {
    newTodos : [
      { id: 1, name: 'hoc vuex', completed: true },
      { id: 2, name: 'hoc anh', completed: false },
      { id: 3, name: 'hoc phap', completed: true },
    ]
  },

  getters: {
    
  },

  actions: {

  },

  mutations: {
    TOGGLE_AUTH(state) {
      state.auth.isAuthenticated = !state.auth.isAuthenticated
    }
  }
}

export default newTodoModule

