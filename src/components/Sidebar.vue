<template>
  <div class="side">
    <div class="side-user" v-if="isLogin">
      <img src="../assets/game/bg_index.jpg" alt="" class="side-user-bg">
      <div class="side-user-id">TEST0001</div>
      <img src="../assets/button/line.png" alt="" class="side-user-divider">
      <div class="side-user-credit">$ 4,600.00</div>
    </div>
    <label for="sidebar-toggle" class="toggle">
      <img src="../assets/icon/icon_menu.svg" alt="" class="toggle-icon">
    </label>
    <input type="checkbox" class="sidebar-toggle" id="sidebar-toggle">
    <div class="sidebar">
      <div class="sidebar-head">
        <div class="sidebar-head-user">TEST0001</div>
        <div class="sidebar-head-credit">$ 4,600.00 (TWD)</div>
      </div>
      <div class="sidebar-item">出納櫃台</div>
      <div class="sidebar-item">修改密碼</div>
      <div class="sidebar-item">遊戲介紹</div>
      <div class="sidebar-item">聯絡我們</div>
      <button class="sidebar-logout">登出
        <img src="../assets/footer/footer_bg.jpg" alt="" class="sidebar-logout-img">
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      isLogin: false
    }
  }
}
</script>

<style lang="scss">
.side {
  &-user {
    width: 384px;
    height: 30px;
    position: relative;
    color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    &-bg {
      position: absolute;
      z-index: -1;
      height: 30px;
      width: 384px;
    }
    &-credit {
      color: orange;
    }
    &-divider {
      height: 30px;
    }
  }
}
.toggle {
  position: absolute;
  width: 40px;
  height: 40px;
  cursor: pointer;
  right: 1em;
  top: 14px;
}
.sidebar-toggle {
  display: none;
}

.sidebar {
  width: 220px;
  height: 652px;
  background-color: black;
  position: absolute;
  top: 61.5px;
  right: 0;
  z-index: 2;
  transform: scale(0, 1);
  transform-origin: right;
  transition: transform 0.3s ease-out;
  padding: 1.5em 1em;
  color: white;
  &-head {
    border-bottom: 2px solid grey;
    &-user {
      font-size: 1.2em;
      margin-bottom: 4px;
    }
    &-credit {
      margin-bottom: 1em;
    }
  }
  &-item {
    padding-top: 1em;
    padding-bottom: 0.3em;
    &:hover {
      cursor: pointer;
      color: orange;
    }
  }
  &-logout {
    position: absolute;
    bottom: -18em;
    left: 50%;
    transform: translateX(-50%);
    position: relative;
    width: 120px;
    height: 30px;
    border-radius: 15px;
    background: transparent;
    border: none;
    outline: none;
    color: white;
    &-img {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      width: 120px;
      height: 30px;
      border-radius: 15px;
    }
  }
}
.sidebar-toggle:checked ~ .sidebar {
  transform: scale(1, 1);
}
</style>