import Carousel from "@/components/ui/carousel/Carousel"
import banner1 from '@/assets/images/banner-images/banner1.svg';
import banner2 from '@/assets/images/banner-images/banner2.svg';
import banner3 from '@/assets/images/banner-images/banner3.svg';



export const Demo = () => {

  const slideItems = [
    {
      id: '1',
      item: banner1
    },
    {
      id: '2',
      item: banner2
    },
    {
      id: '3',
      item: banner3
    },
  ]

  const slides = slideItems.map((slideItem) => (
    <img src={slideItem.item} alt="" className="w-full xl:w-[1440px]" />
  ))

  return (
    <div className="reset">
      <div className="w-full">
        <Carousel slideItems={slideItems} interval={5000} autoSlide={true}>
          {slides}
        </Carousel>
      </div>
    </div>
  )
}
