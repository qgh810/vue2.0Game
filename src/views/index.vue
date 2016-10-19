<template lang="html">
  <div>
    <div class="title-box">
      <span class="title">标题</span>
    </div>
    <div class="btn-box">
      <button class="btn" :class="{'touching': btnTouching}" @touchstart.stop="btnTouching=true"  @touchend.stop="startGame">点击开始</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      btnTouching: false
    }
  },
  computed: {},
  ready () {},
  attached () {},
  methods: {
    /**
     * 开始游戏
     */
    startGame () {
      this.btnTouching = false
      console.log('开始游戏')
      console.log(this.$router.push('/game'))
    }
  },
  components: {}
}
</script>

<style lang="stylus">

  .title-box
    width 100%
    height 5rem
    text-align center
    line-height 5rem
    font-size 0.9rem
  .btn-box
    width 100%
    .btn
      display block
      width 80%
      height 1.2rem
      margin 0 auto
      border-radius 1rem
      font-size 0.45rem
      background #478e90
      &.touching
        background #268184
</style>
