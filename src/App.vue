<template>
  <div id="app">
    <!-- 使用 router-link 组件来导航. -->
    <!-- 通过传入 `to` 属性指定链接. -->
    <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
    <!-- <router-link to="/foo">Go to Foo</router-link> -->
    <!-- <router-link to="/bar">Go to Bar</router-link> -->

    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <transition name="views">
      <router-view class="views"></router-view>
    </transition>
    <!-- <hello></hello> -->
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  components: {
    Hello
  }
}
</script>

<style lang="stylus">
  @import "./assets/style/base.styl";

  #app
    width 100%
    height 100%
    color #000
  .views
    width 100%
    height 100%
  .views-enter-active, .views-leave-active
    transition all ease 0.5s
    opacity 1
    transform translate3d(0,0,0)

  .views-enter, .views-leave-active
    transform translate3d(0.2rem, 0, 0)
    opacity 0
</style>
