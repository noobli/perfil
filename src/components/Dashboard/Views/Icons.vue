<template>
  <div class="jhony">
    <gallery :images="images" :options="options" :index="index" @close="index = null"></gallery>
    <div class="image col-md-3 col-sm-4 col-xs-6" v-for="(image, imageIndex) in images" :key="image"
      @click="index = imageIndex" :style="{backgroundImage: `url(${image})`}"></div>
  </div>
</template>
<script>
import VueGallery from 'vue-gallery'

export default {
  components: {
    'gallery': VueGallery
  },
  data () {
    return {
      images: [
        'https://source.unsplash.com/random/640x640',
        'https://source.unsplash.com/user/erondu/640x640',
        'https://source.unsplash.com/category/buildings/640x640/?montreal',
        'https://source.unsplash.com/random/640x640?as',
        'https://source.unsplash.com/random/640x640?bs',
        'https://source.unsplash.com/random/640x640?cs',
        'https://source.unsplash.com/random/640x640?ds',
        'https://source.unsplash.com/random/640x640?aa',
        'https://source.unsplash.com/random/640x640?sdf',
        'https://source.unsplash.com/random/640x640?ca',
        'https://source.unsplash.com/random/640x640?da',
        'https://source.unsplash.com/random/640x640?aa',
        'https://source.unsplash.com/random/640x640?sdf',
        'https://source.unsplash.com/random/640x640?ra',
        'https://source.unsplash.com/random/640x640?ta',
        'https://source.unsplash.com/random/640x640'
      ],
      index: null,
      options: {
        closeOnSlideClick: true
      }
    }
  }
}
</script>
<style>
  .image {
    height: 200px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;
    cursor: pointer;
  }
</style>
