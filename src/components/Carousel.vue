<template>
  <div class="carosuel-wrapper">
    <div class="carosuel-announce">
      <div class="carosuel-announce-info">公告 : 幸運轉盤活動開啟公告看這裡!</div>
    </div>
    <div
      id="carouselExampleInterval"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="10000">
          <img src="../assets/banner/banner01.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img src="../assets/banner/banner02.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="../assets/banner/banner03.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="../assets/banner/banner04.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="../assets/banner/banner05.jpg" class="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Carousel",
};
</script>

<style lang="scss" scoped>
.carosuel-wrapper {
  position: relative;
  .carosuel-announce {
    position: absolute;
    z-index: 1;
    width: 384px;
    height: 30px;
    padding-left: 1em;
    background: #000;
    opacity: 80%;
    &-info {
      z-index: 2;
      line-height: 30px;
      font-size: 14px;
      color: white;
    }
  }
  .carousel {
    width: 384px;
    height: 185px;
    img {
      width: 384px;
      height: 185px;
      object-fit: cover;
    }
  }
}
</style>