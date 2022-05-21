import Vue from "vue";
import Vuex from 'vuex'
import userModule from './modules/userModule'
import todoModule from './modules/todoModules'
import newTodoModule from './modules/newTodoModule'

Vue.use(Vuex)

export  const store = new Vuex.Store({
  modules: {
    userModule,
    todoModule,
    newTodoModule
  },


})