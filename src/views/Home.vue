<template>
  <div class="home">
    
    <b-steps 
      v-model="activeStep" 
      type="is-black" 
      class="animate__animated animate__zoomIn" >
      <template v-for="(step, index) in steps">
          <b-step-item
              :key="index"
              :visible="step.visible"
              :label="step.label"
              :step="index+1"
              clickable
              >
              <div class="step-item-content">
                <h1>{{ step.prodctName }}</h1>
                <img :src="step.productImg" alt="">
              </div>
              
          </b-step-item>
          
      </template>
      <div class="step-nav-button" slot="navigation"
        slot-scope="{previous, next}">
        <b-button
            class="steps-butons"
            :disabled="previous.disabled"
            type="is-dark"
            @click.prevent="previous.action">
            Previous
        </b-button>
        <b-button
            class="steps-butons"
            :disabled="next.disabled"
            type="is-dark"
            @click.prevent="next.action">
            Next
        </b-button>
      </div>
    </b-steps>
    <div class="featured-home-styles">
      <div 
        class="featuerd-product-holder-one"
        data-aos="fade-down"
        >
        <div class="image-container">
          <img :src="jordanRoyal" alt="">
        </div>
        <div class="product-name-container">
          <h1>Hyper Royal</h1>
        </div>
        <div class="image-container-lower">
          <img :src="jordanRoyal" alt="">
        </div>
      </div>
      <div 
        class="featuerd-product-holder-two"
         data-aos="fade-up"
        >
        <div class="image-container">
          <img :src="yeezy" alt="">
        </div>
        <div class="product-name-container">
          <h1>Tail Light</h1>
        </div>
        <div class="image-container-lower">
          <img :src="yeezy" alt="">
        </div>
      </div>
      <div 
        class="featuerd-product-holder-three"
         data-aos="fade-down"
        >
        <div class="image-container">
          <img :src="desert" alt="">
        </div>
        <div class="product-name-container">
          <h1>Desert Sand</h1>
        </div>
        <div class="image-container-lower">
          <img :src="desert" alt="">
        </div>
      </div>
    </div>
    <div class="hottest-product">
      <div  class="hottest-product-header">
        <h1>The Future</h1>
        <a>BID</a>
      </div>
      <div class="hottest-product-image" data-aos="zoom-in">
        <img :src="futur" alt="">
      </div>
      
    </div>
  </div>  
</template>

<script>
// @ is an alias to /src

import nikeReact from "./../assets/images/nikeReact.png"
import airMax from "./../assets/images/airMax.png"
import jordanMcr from "./../assets/images/jordanMcr.png"
import vaporMax from "./../assets/images/vaporMax.png"
import jordanRoyal from "./../assets/images/jordanRoyal.png"
import yeezy from "./../assets/images/yeezy.png"
import desert from "./../assets/images/desert.png"
import futur from "./../assets/images/futur.png"


export default {
  name: 'Home',
  components: {
    
  },
  data(){
    return{
      activeStep: 0,
      nikeReact,
      airMax,
      jordanMcr,
      vaporMax,
      jordanRoyal,
      yeezy,
      desert,
      futur,
      customNavigation: true,
    }
  },
  computed: {
    products() {
      return [
          {
              label: 'React 2',
              prodctName: 'Nike Epic React Flyknit 2',
              productDescription: 'The Nike Epic React Flyknit 2 takes a step up from its predecessor with smooth, lightweight performance.',
              productImg: nikeReact,
          },
          {
              label: '270',
              prodctName: 'Air Max 270',
              productDescription: 'Nikes first lifestyle Air Max meets the softest, smoothest and most resilient foam.',
              productImg: airMax,
          },
          {
              label: 'MCR',
              prodctName: 'Jordan MCR',
              productDescription: 'THE FEARLESS ONES: MAISON CHÂTEAU ROUGE.',
              productImg: jordanMcr,
          },
          {
              label: 'Vapor Max',
              prodctName: 'Vapor Max',
              productDescription: 'You couldn’t dream of a Nike shoe this dynamic.',
              productImg: vaporMax,
          }
      ]
    },
    steps() {
        const steps = [...this.products]
        return steps
    },
  },
}
</script>

<style scoped>
.home{
  background-image: url("./../assets/svg/bgHome.svg");
  background-repeat: no-repeat;
  background-position: 10% 0; 
   
}

 @media (max-width: 768px) {
  .home{
    background-image: none;
  }    
} 


</style>
