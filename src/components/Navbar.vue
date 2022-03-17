<template>
  <div class="header">
    <img src="../assets/header/header_bg.jpg" alt="" class="header-bg" />
    <div class="header-body">
      <div class="header-body-head">
        <img
          src="../assets/header/logo.png"
          alt=""
          class="header-body-head-logo"
        />
        <button class="header-body-head-login" v-if="!isLogin">登入</button>
      </div>
      <div class="header-body-info" v-if="isLogin">
        <div class="header-body-info-id"></div>
        <div class="header-body-info-credit"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      isLogin: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  height: 61.5px;
  width: 384px;
  &-bg {
    height: 61.5px;
    width: 384px;
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
        margin-left: 35%;
        font-size: 15px;
        color: white;
        background-color: blue;
        border: none;
        width: 70px;
        height: 30px;
        border-radius: 14px;
        cursor: pointer;
        &:hover {
          font-weight: 700;
        }
      }
    }
    &-info {
      width: 384px;
      height: 20px;
      border: 1px solid green;
    }
  }
}
</style>