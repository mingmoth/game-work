<template>
  <div class="header" @click.stop.prevent="toggleSidebar">
    <img src="../assets/header/header_bg.jpg" alt="" class="header-bg" />
    <div class="header-body">
      <div class="header-body-head">
        <img
          src="../assets/header/logo.png"
          alt=""
          class="header-body-head-logo"
        />
        <button class="header-body-head-login" v-if="!isLogin" @click.stop.prevent="login">登入
          <img src="../assets/footer/footer_bg.jpg" alt="" class="header-body-head-login-bg">
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "Navbar",
  computed: {
    ...mapState(['isLogin', 'isToggle'])
  },
  methods: {
    login() {
      this.$store.commit('loginUser')
    },
    toggleSidebar() {
      if(this.isToggle) {
        this.$store.commit('toggleSidebar')
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  height: 61.5px;
  width: 384px;
  &-bg {
    position: relative;
    height: 61.5px;
    width: 384px;
    z-index: -2;
  }
  &-body {
    position: absolute;
    top: 0;
    width: 384px;
    height: 61.5px;
    &-head {
      height: 61.5px;
      width: 384px;
      display: flex;
      align-items: center;
      &-logo {
        width: 76.5px;
        height: 42px;
        margin-left: 1em;
      }
      &-login {
        position: relative;
        margin-left: 35%;
        font-size: 15px;
        color: white;
        border: none;
        outline: none;
        background-color: transparent;
        width: 70px;
        height: 30px;
        border-radius: 15px;
        cursor: pointer;
        &:hover {
          font-weight: 700;
        }
        &-bg {
          position: absolute;
          top: 0;
          left: 0;
          z-index: -1;
          width: 70px;
          height: 30px;
          border-radius: 15px;
        }
      }
    }
  }
}
</style>