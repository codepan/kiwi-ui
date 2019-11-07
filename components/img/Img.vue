<template>
  <div class="kw-img">
    <canvas class="canvasRef"></canvas>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'kwImg',
    props: {
      src: {
        type: String,
        default: ''
      }
    },
    methods: {
      renderImage () {
        let image = new Image()
        let canvas = document.querySelector('.canvasRef').getContext('2d')
        image.onload = () => {
          canvas.drawImage(image, image.width / 2, image.height / 2, image.width / 2, image.height / 2, image.width / 2, image.width / 2, 90, 90)
        }
        image.src = this.src
      }
    },
    mounted () {
      this.renderImage()
    }
  }
</script>

<style lang="scss">
  .kw-img{
    display: inline-block;
  }
</style>
