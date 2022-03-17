<template>
  <div id="home">
    <Navbar />
    <Sidebar />
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Sidebar from '../components/Sidebar.vue'
import Footer from '../components/Footer.vue'
export default {
  name: 'Home',
  components: {
    Navbar, Sidebar, Footer,
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
