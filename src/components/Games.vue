<template>
  <div class="games" @click.stop.prevent="toggleSidebar">
    <img src="../assets/game/bg_index.jpg" alt="" class="games-bg" />
    <div class="row">
      <div class="games-container-item" @click.stop.prevent="enterGame">
        <div class="games-container-item-title">實體機台</div>
        <img src="../assets/game/mechine.png" alt="" />
      </div>
      <div class="games-container-item" @click.stop.prevent="enterGame">
        <div class="games-container-item-title">視訊直播</div>
        <img src="../assets/game/live.png" alt="" />
      </div>
      <div class="games-container-item" @click.stop.prevent="enterGame">
        <div class="games-container-item-title">電子遊戲</div>
        <img src="../assets/game/electronic.png" alt="" />
      </div>
      <div class="games-container-item">
        <div class="games-container-item-title">體育賽事</div>
        <img src="../assets/game/sports.png" alt="" />
        <div class="games-container-item-maintain">
          <img src="../assets/game/tag_soon.png" alt="" class="games-container-item-maintain-img">
        </div>
      </div>
      <div class="games-container-item">
        <div class="games-container-item-title">電競遊戲</div>
        <img src="../assets/game/esports.png" alt="" />
        <div class="games-container-item-maintain">
          <img src="../assets/game/tag_soon.png" alt="" class="games-container-item-maintain-img">
        </div>
      </div>
      <div class="games-container-item" @click.stop.prevent="enterGame">
        <div class="games-container-item-title">樂透彩票</div>
        <img src="../assets/game/lottory.png" alt="" />
      </div>
      <div class="games-container-item">
        <div class="games-container-item-title">團體遊戲</div>
        <img src="../assets/game/fish.png" alt="" />
        <div class="games-container-item-maintain">
          <img src="../assets/game/tag_soon.png" alt="" class="games-container-item-maintain-img">
        </div>
      </div>
      <div class="games-container-item">
        <div class="games-container-item-title">釣魚遊戲</div>
        <img src="../assets/game/fish_icon.png" alt="" />
        <div class="games-container-item-maintain">
          <img src="../assets/game/tag_soon.png" alt="" class="games-container-item-maintain-img">
        </div>
      </div>
      <div class="games-container-item">
        <div class="games-container-item-title">真人直播</div>
        <img src="../assets/game/card-effect.png" alt="" />
        <div class="games-container-item-maintain">
          <img src="../assets/game/tag_soon.png" alt="" class="games-container-item-maintain-img">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "Games",
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
.games {
  position: relative;
  width: 384px;
  height: 280px;
  &-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 384px;
    height: 280px;
  }
  .row {
    margin: 0;
    padding-top: 0.5em;
    position: relative;
    display: flex;
    width: 384px;
    height: 280px;
    overflow-y: auto;
    &::-webkit-scrollbar {
      display: none 
    }
    .games-container-item {
      flex-basis: 33.333333%;
      max-width: 33.333333%;
      height: 110px;
      position: relative;
      &-title {
        position: absolute;
        color: white;
        font-size: 13px;
        top: 1em;
        left: 50%;
        transform: translateX(-50%);
      }
      img {
        width: 100%;
        cursor: pointer;
      }
      &-maintain {
        position: absolute;
        top: 2.5px;
        left: 15px;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #000;
        opacity: 70%;
        img {
          position: relative;
          width: 87px;
        }
      }
    }
  }
}
</style>