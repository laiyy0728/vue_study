/*
用于使用 LocalStorage 存储数据的工具模块

如果需要暴露一个功能，使用函数暴露
否则使用对象暴露
 */
const TODOS_KEY = 'todos_key'
export default {
  saveTodos(todos){
    window.localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
  },

  readTodos(){
    return  JSON.parse(window.localStorage.getItem(TODOS_KEY) || '[]')
  }
}
