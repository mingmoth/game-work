<template>
  <div class="system">
    <img src="../assets/footer/jp_bg.jpg" alt="" class="system-bg">
    <div class="system-body">
      <div class="system-body-item">
        <div class="system-body-item-title">EGT JP</div>
        <div class="system-body-item-num">1091179.57</div>
      </div>
      <div class="system-body-item">
        <div class="system-body-item-title">15輪 JP</div>
        <div class="system-body-item-num">1091179.57</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'System',
}
</script>

<style lang="scss" scoped>
.system {
  width: 384px;
  height: 35px;
  position: relative;
  &-bg {
    position: absolute;
    top: 0;
    z-index: 0;
    width: 384px;
    height: 35px;
  }
  &-body {
    display: flex;
    justify-content: space-between;
    position: relative;
    z-index: 1;
    border: 1px solid rgba(0, 0, 0, 0.5);
    &-item {
      height: 35px;
      width: 50%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      font-weight: 700;
      font-size: 15px;
      color: rgba(0, 0, 0, 0.5);
      cursor: pointer;
      border-right: 1px solid rgba(0, 0, 0, 0.5);
      &-num {
        color: black;
        &:hover {
          color: rgba(0, 0, 0, 0.5);
        }
      }
    }
  }
}
</style>