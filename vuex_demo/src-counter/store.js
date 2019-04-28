/*
Vuex 核心管理对象模块
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = { // 初始化状态
  count: 0
};

const mutations = {
  // 增加
  INCREMENT(state) {
    state.count++
  },

  // 减少
  DECREMENT(state) {
    state.count--;
  }
};

const actions = {
  increment({commit}) {
    // 提交 mutation
    commit('INCREMENT')
  },
  decrement({commit}) {
    commit('DECREMENT')
  },
  incrementOfOdd({commit, state}) {
    if (state.count % 2 === 1){
      commit('INCREMENT')
    }
  },
  incrementAsync({commit}) {
    setTimeout(() => {
      commit('INCREMENT')
    }, 1000)
  }
};

// 计算属性
const getters = {
  evenOrAdd(state) {
    return state.count % 2 === 0 ? '偶数' : '奇数'
  }
};

export default new Vuex.Store({
  state, // 状态对象
  mutations, // 包含多个更新 state 函数的对象
  actions, // 包含对个对应时间回调函数的对象
  getters // 包含多个 get 计算属性函数的对象
})
