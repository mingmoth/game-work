<template>
  <div>
    <label for="sidebar-toggle" class="toggle">
      <img src="../assets/icon/icon_menu.svg" alt="" class="toggle-icon">
    </label>
    <input type="checkbox" class="sidebar-toggle" id="sidebar-toggle">
    <div class="sidebar">
      <div class="sidebar-head">
        <div class="sidebar-head-user">test0001</div>
        <div class="sidebar-head-credit">$ 4,600.00 (TWD)</div>
      </div>
      <div class="sidebar-item">出納櫃台</div>
      <div class="sidebar-item">修改密碼</div>
      <div class="sidebar-item">遊戲介紹</div>
      <div class="sidebar-item">聯絡我們</div>
      <button class="sidebar-logout">登出</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style lang="scss">
.toggle {
  position: absolute;
  width: 40px;
  height: 40px;
  cursor: pointer;
  right: 1em;
  top: 14px;
}
.sidebar-toggle {
  visibility: hidden;
}

.sidebar {
  width: 220px;
  height: 604px;
  background-color: black;
  position: absolute;
  top: 61.5px;
  right: 0;
  z-index: 1;
  transform: scale(0, 1);
  transform-origin: right;
  transition: transform 0.3s ease-out;
  padding: 1.5em 1em;
  color: white;
  &-head {
    border-bottom: 2px solid grey;
    &-user {
      font-size: 1.5em;
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
}
.sidebar-toggle:checked ~ .sidebar {
  transform: scale(1, 1);
}
</style>