<template lang="html">
  <div class="game-container">
    <table class="table">
      <tr v-for="row in rows">
        <td v-for="n in 3">
          <div class="box" :class="{'black': n === row.selectedIndex}">
            <div class="black-box" v-show="n === row.selectedIndex"></div>
          </div>
        </td>
      </tr>
    </table>
    <!-- <div class="box" v-for="n in 12" :class="className($index)">1</div> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 分数
      mark: 0,
      rows: [
        {
          selectedIndex: 3
        },
        {
          selectedIndex: 2
        },
        {
          selectedIndex: 1
        },
        {
          selectedIndex: 2
        },
        {
          selectedIndex: 2
        }
      ]
    }
  },
  computed: {},
  ready () {},
  attached () {},
  methods: {
    className (index) {
      var result = {
        col1: index % 3 === 0,
        col2: index % 3 === 1,
        col3: index % 3 === 2
      }
      return result
    }
  },
  components: {}
}
</script>

<style lang="stylus">
  .game-container
    width 100%
    height 100%
    .table
      width 100%
      transform translate3d(0, -25vh, 0)
      transition transform ease 1s
    .box
      display table-cell
      width 34vw
      height 25vh
      box-sizing border-box
      border 1px solid #000
      background #fff
    .black-box
      width 100%
      height 100%
      background #000
</style>
