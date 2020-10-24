<template>
  <div>
    <navigationBar/>
    <router-view/>
    <footerCred/>
  </div>
</template>

<script>

import navigationBar from './components/navigation';
import footerCred from './components/footer';

import './styles/base.scss'
import 'animate.css'

import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  components: { 
    footerCred,
    navigationBar
  },
  created () {
    AOS.init({
      duration: 1000,
    })
  },
}
</script>

<style lang="scss">
</style>
