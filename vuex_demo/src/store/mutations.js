/*
  包含多个由 action 触发，直接更新状态的方法的对象
 */
import {ADD_TODO, DELETE_TODO, SELECT_ALL_TODO,CLEAR_ALL_COMPLETE, RECEIVE_TODOS} from './mutation-types'

export default {
  [ADD_TODO](state, {todo}) {
    state.todos.unshift(todo)
  },
  [DELETE_TODO](state, {index}){
    state.todos.splice(index, 1)
  },
  [SELECT_ALL_TODO](state, {allCheck}) {
    state.todos.forEach(todo => todo.complete = allCheck)
  },
  [CLEAR_ALL_COMPLETE](state) {
    state.todos = state.todos.filter(todo => !todo.complete)
  },
  [RECEIVE_TODOS](state, {todos}){
    state.todos = todos
  }
}
