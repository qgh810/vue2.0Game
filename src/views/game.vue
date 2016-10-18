<template lang="html">
  <div class="game-container">
    <table class="table">
      <tr v-for="row in rows">
        <td v-for="n in 3">
          <div class="box">
            <div class="black-box" v-show="n === row.blackIndex" @touchend="next(row, n)"></div>
            <div class="white-box" v-show="n !== row.blackIndex" @touchend="over(row, n)"></div>
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
      // 总时间
      allTime: 60,
      // 分数
      mark: 0,
      rows: [
        {
          blackIndex: 3
        },
        {
          blackIndex: 2
        },
        {
          blackIndex: 1
        },
        {
          blackIndex: 2
        }
      ],
      lastTouchIndex: -1
    }
  },
  computed: {},
  created () {
  },
  attached () {},
  methods: {
    next (row, selectedIndex) {
      if (this.rows.indexOf(row) !== this.rows.length - 1) return
      this.lastTouchIndex = selectedIndex
      let newRow = {
        blackIndex: this.random(1, 3, true)
      }
      this.rows.unshift(newRow)
      this.rows.pop()
    },
    over (row, selectedIndex) {
      if (this.rows.indexOf(row) !== this.rows.length - 1) return
      this.lastTouchIndex = selectedIndex
      console.log(row)
      console.log(selectedIndex)
    },
    className (index) {
      var result = {
        col1: index % 3 === 0,
        col2: index % 3 === 1,
        col3: index % 3 === 2
      }
      return result
    },
    random (min, max, isInt) {
      if (!min) return window.Math.random()
      var result = false
      result = min + window.Math.random() * (max - min + 1)
      if (isInt) {
        result = parseInt(result)
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
      /*transform translate3d(0, -25vh, 0)*/
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
    .white-box
      width 100%
      height 100%
      background #fff
</style>
