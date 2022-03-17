<template>
  <div class="footer" @click.stop.prevent="toggleSidebar">
    <img src="../assets/footer/footer_bg.jpg" alt="" class="footer-bg">
    <div class="footer-body">
      <div class="footer-body-item">優惠活動</div>
      <div class="footer-body-item">會員中心</div>
      <div class="footer-body-item">線上客服</div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Footer',
  computed: {
    ...mapState(['isToggle', 'isToggle'])
  },
  methods: {
    toggleSidebar() {
      if(this.isToggle) {
        console.log('toggleback')
        this.$store.commit('toggleSidebar')
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.footer {
  position: absolute;
  bottom: 0px;
  height: 61.5px;
  width: 384px;
  &-bg {
    position: absolute;
    height: 61.5px;
    width: 384px;
  }
  &-body {
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 61.5px;
    color: white;
    &-item {
      font-size: 1em;
      cursor: pointer;
      &:hover {
        font-weight: 700;
      }
      
    }
  }
}
</style>