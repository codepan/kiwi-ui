import CarouselItem from '../carousel/CarouselItem'

CarouselItem.install = Vue => {
  Vue.component(CarouselItem.name, CarouselItem)
}

export default CarouselItem