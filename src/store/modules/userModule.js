 const userModule = {
  state: {
    author: 'Nguyen Van Chung',
    auth: {
      isAuthenticated: true,
    },
    avartar: 'http://hoangthinhelt.com.vn/public/img/product/no-img.png',
  },

  getters: {
    isLogin: state => state.auth.isAuthenticated,
  },

  actions: {

  },

  mutations: {
    TOGGLE_AUTH(state) {
      state.auth.isAuthenticated = !state.auth.isAuthenticated
    }
  }
}

export default userModule

