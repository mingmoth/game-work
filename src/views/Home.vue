<template>
  <div id="home">
    <Navbar />
    <Sidebar />
    <div class="banner">
      <Carousel />
    </div>
    <System />
    <Select />
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Sidebar from '../components/Sidebar.vue'
import Carousel from '../components/Carousel.vue'
import System from '../components/System.vue'
import Select from '../components/Select.vue'
import Footer from '../components/Footer.vue'
export default {
  name: 'Home',
  components: {
    Navbar, Sidebar, Carousel, System, Select, Footer,
  }
}
</script>

<style scoped>
#home {
  position: relative;
  height: 713.5px;
  width: 384px;
  background-color: green;
}
</style>
