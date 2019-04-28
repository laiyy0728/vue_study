/*
包含所有基于 state 的 getter 计算属性对象
 */
export default {
  totalCount(state) {
    return state.todos.length
  },

  completeCount(state) {
    return state.todos.reduce( (preTotal, todo) => preTotal + (todo.complete? 1 : 0), 0)
  },

  // 判断是否全部选中
  isAllSeleted(state, getters){
    return getters.totalCount === getters.completeCount && getters.totalCount > 0
  }
}
