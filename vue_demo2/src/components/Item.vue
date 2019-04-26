<template>
  <li class="list-group-item">
    <div class="handle">
      <a href="javascript:;" @click="delItem">删除</a>
    </div>
    <p class="user"><span >{{comment.name}}</span><span>说:</span></p>
    <p class="centence">{{comment.content}}</p>
  </li>
</template>

<script>
    export default {
      // 在组件中使用参数、方法
      props: {
        // 指定属性名、属性值的类型
        comment: Object,
        delComment: Function,
        index: Number
      },

      methods: {
        delItem() {
          const {
            comment, index, delComment
          } = this
          if (window.confirm(`确定删除${comment.name}的评论吗？`)){
            delComment(index)
          };
        }
      }
    }
</script>

<style>
  li {
    transition: .5s;
    overflow: hidden;
  }

  .handle {
    width: 40px;
    border: 1px solid #ccc;
    background: #fff;
    position: absolute;
    right: 10px;
    top: 1px;
    text-align: center;
  }

  .handle a {
    display: block;
    text-decoration: none;
  }

  .list-group-item .centence {
    padding: 0px 50px;
  }

  .user {
    font-size: 22px;
  }
</style>
