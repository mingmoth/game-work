<template>
  <div class="select" @click.stop.prevent="toggleSidebar">
    <img
      src="../assets/button/icon_leaderboard.png"
      alt=""
      class="select-image"
    />
    <div class="select-items">
      <img
        src="../assets/button/icon_r220.png"
        alt=""
        class="select-items-img"
        @click.stop.prevent="enterGame"
      />

      <img
        src="../assets/button/line.png"
        alt=""
        class="select-items-divider"
      />
      <img
        src="../assets/button/icon_slotgame.png"
        alt=""
        class="select-items-img"
        @click.stop.prevent="enterGame"
      />
      <img
        src="../assets/button/line.png"
        alt=""
        class="select-items-divider"
      />
      <img
        src="../assets/button/icon_15w.png"
        alt=""
        class="select-items-img"
        @click.stop.prevent="enterGame"
      />
      <div class="select-items-game">
        <div class="select-items-game-name" @click.stop.prevent="enterGame">老虎機</div>
        <div class="select-items-game-name" @click.stop.prevent="enterGame">百家樂</div>
        <div class="select-items-game-name" @click.stop.prevent="enterGame">15輪</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "Select",
  computed: {
    ...mapState(['isLogin', 'isToggle'])
  },
  methods: {
    toggleSidebar() {
      if(this.isToggle) {
        console.log('toggleback')
        this.$store.commit('toggleSidebar')
      }
    },
    enterGame() {
      if(!this.isLogin) {
        alert('請先登入')
      } else {
        alert('敬請期待')
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.select {
  width: 384px;
  height: 90px;
  background-color: #000;
  padding-left: 1.8em;
  display: flex;
  align-items: center;
  &-image {
    width: 85px;
    height: 85px;
    cursor: pointer;
  }
  &-items {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    cursor: pointer;
    &-img {
      width: 85px;
      height: 85px;
      margin-bottom: 6px;
    }
    &-divider {
      height: 55px;
    }
    &-game {
      position: absolute;
      bottom: 4px;
      right: 0;
      width: 278.2px;
      height: 16px;
      cursor: pointer;
      display: flex;
      justify-content: space-around;
      align-items: center;
      &-name {
        font-size: 14px;
        color: white;
      }
    }
  }
}
</style>