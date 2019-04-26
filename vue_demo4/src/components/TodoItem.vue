<template>
  <li @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)" :style="{background: bgColor}">
    <label>
      <input type="checkbox" v-model="item.complete"/>
      <span>{{item.title}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="delItem">删除</button>
  </li>
</template>

<script>
  import Pubsub from 'pubsub-js'

  export default {
    props: {
      item: Object,
      index: Number,
    },
    data() {
      return {
        isShow: false, // 标识按钮是否默认显示
        bgColor: 'white' // 默认背景颜色
      }
    },
    methods: {
      handleEnter(isEnter) {
        if (isEnter) {
          this.bgColor = 'gray';
          this.isShow = true
        } else {
          this.bgColor = 'white';
          this.isShow = false
        }
      },
      delItem() {
        const {item, index} = this;
        if (window.confirm(`确认删除：${item.title} 吗？`)) {
          console.log(index)
          // this.deleteTodo(index)
          // 发布消息
          Pubsub.publish('deleteTodo', index)
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }

</style>
