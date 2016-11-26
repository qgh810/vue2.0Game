<template lang="html">
  <div class="game-container">
    <div class="text-box">
      <div class="time">
        <span>剩余时间:{{allTime}}</span>
      </div>
      <!-- <div class="mark-box">
        <span>当前分数: {{mark}}</span>
      </div> -->
    </div>
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

    <transition name="modal">
      <div class="mask" v-show="showModal">
        <div class="modal">
          <div class="msg">
            <p class="title">
              游戏结束
            </p>
            <p>
              本轮得分
            </p>
            <p class="mark-number">{{mark}}</p>
            <!-- <p v-show="mark > 80">哇,你好厉害啊!</p>
            <p v-show="mark < 80">哟哟哟不错哦!</p> -->
            <!-- <p v-show="mark < 20">你是不是傻!</p> -->
          </div>
          <div class="btn-group">
            <button class="btn" @touchend="leaveGame">不玩了</button>
            <button class="btn" @touchend="resetData">再来一次</button>
          </div>
        </div>
      </div>
    </transition>
    <audio id="music" src="static/1.wav" controls="true" hidden="false"></audio>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ALLTIME: 60,
      // 总时间
      allTime: 0,
      // 分数
      mark: 0,
      // 游戏中
      gaming: false,
      showModal: false,
      playVoide: true,
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
  watch: {
  },
  mounted () {
    this.resetData()
    // this.play()
  },
  methods: {
    play () {
      if (!this.audio) {
        this.audio = document.getElementById('music')
      }
      var audio = this.audio
      audio.playbackRate = 4
      if (!audio.ended) {
        audio.currentTime = 0
      }
      // audio.stop()
      audio.play()
    },
    // 开始游戏
    startGame () {
      this.gaming = true
      this.tId = window.setInterval(() => {
        this.allTime -= 1
        if (this.allTime === 0) {
          this.gameOver()
        }
      }, 1000)
    },
    // 游戏结束
    gameOver () {
      this.gaming = false
      window.clearInterval(this.tId)
      // window.alert(this.mark)
      this.onShowModal()
      // this.resetData()
    },

    onShowModal () {
      this.showModal = true
    },

    leaveGame () {
      console.log('离开游戏')
      this.$router.go(-1)
    },
    resetData () {
      this.allTime = this.ALLTIME
      this.mark = 0
      this.gaming = false
      this.showModal = false
    },
    // 下一步
    next (row, selectedIndex) {
      if (this.rows.indexOf(row) !== this.rows.length - 1) return
      if (!this.gaming) {
        this.startGame()
      }
      if (this.playVoide) {
        this.play()
      }
      this.mark += 1
      this.lastTouchIndex = selectedIndex
      let newRow = {
        blackIndex: this.random(1, 3, true)
      }
      this.rows.unshift(newRow)
      this.rows.pop()
    },
    // 踩到白块
    over (row, selectedIndex) {
      if (this.rows.indexOf(row) !== this.rows.length - 1) return
      this.lastTouchIndex = selectedIndex

      this.gameOver()
      console.log(row)
      console.log(selectedIndex)
    },
    // 计算类名
    className (index) {
      var result = {
        col1: index % 3 === 0,
        col2: index % 3 === 1,
        col3: index % 3 === 2
      }
      return result
    },

    // 生成随机数
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
    .text-box
      position absolute
      top 0.1rem
      width 100%
      height 1rem
      line-height 1rem
      text-align center
      font-size 0.8rem
      color red
    .table
      width 100%
      /*transform translate3d(0, -25vh, 0)*/
      transition transform ease 1s
    .box
      display table-cell
      width 34vw
      height 25vh
      box-sizing border-box
      border 1px solid #222
      background #fff
    .black-box
      width 100%
      height 100%
      background #000
    .white-box
      width 100%
      height 100%
      background #fff
    .mask
      width 100%
      height 100%
      background rgba(0,0,0,0.7)
      position absolute
      top 0
      left 0
    .modal
      width 7rem
      height 5rem
      background #fff
      border-radius 0.5rem
      border 0.05rem solid #000
      position absolute
      top 0
      left 0
      right 0
      bottom 0
      margin auto
      /*transform translate3d(-50%, -50%, 0)*/
      overflow hidden
      .msg
        width 100%
        text-align center
        font-size 0.6rem
        padding 0.5rem 1rem
        box-sizing border-box
      .title
        font-size 0.5rem
        color #999
      .mark-number
        color red
      .btn-group
        width 100%
        height 1.4rem
        display flex
        position absolute
        bottom 0
        .btn
          background none
          color #000
          display inline-block
          width 50%
          height 100%
  .modal-enter-active, .modal-leave-active
    transition all .3s ease
    transform scale(1)
  .modal-enter, .modal-leave-active
    transform scale(1.1)
    opacity 0
</style>
