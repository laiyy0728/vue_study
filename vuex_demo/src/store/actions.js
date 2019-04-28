/*
接收组件通知，触发 mutations 调用，
 */

import {ADD_TODO, DELETE_TODO, SELECT_ALL_TODO, CLEAR_ALL_COMPLETE, RECEIVE_TODOS} from './mutation-types'

import storageUtil from '../util/StorageUtil'

export default {

  addTodo({commit}, todo){
    // 提交对 mutation 调用
    commit(ADD_TODO, {todo})
  },
  delItem({commit}, index){
    commit(DELETE_TODO, {index})
  },
  selectAllTodos({commit}, allCheck){
    commit(SELECT_ALL_TODO, {allCheck})
  },
  clearCompletedTodos({commit}) {
    commit(CLEAR_ALL_COMPLETE)
  },

  // 异步获取 todos 并更新状态
  reqTodos({commit}) {
      setTimeout(() => {
        const todos = storageUtil.readTodos()
        // 提交 mutation
        commit(RECEIVE_TODOS, {todos})
      }, 1000)
  }
}
