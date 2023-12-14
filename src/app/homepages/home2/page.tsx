import TopNavTwo from "@/components/Headers/TopNav/TopNavTwo"
import MenuTwo from "@/components/Headers/Menu/MenuTwo"
import SliderTwo from "@/components/Slider/SliderTwo"
import Category from "@/components/Home2/Category"
import productData from '@/data/Product.json'
import ArrivalOrganic from "@/components/Home2/ArrivalOrganic"
import Deal from "@/components/Home2/Deal"

const Home2 = () => {
    return (
        <>
            <TopNavTwo />
            <MenuTwo />
            <SliderTwo />
            <Category />
            <ArrivalOrganic data={productData} limit={6} />
            <Deal data={productData} limit={6} />
            <div className="h-[500px]"></div>
        </>
    )
}

export default Home2