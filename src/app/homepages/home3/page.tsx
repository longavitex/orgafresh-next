import TopNavThree from "@/components/Headers/TopNav/TopNavThree"
import MenuThree from "@/components/Headers/Menu/MenuThree"
import SliderThree from "@/components/Slider/SliderThree"
import Banner from "@/components/Home3/Banner"
import productData from '@/data/Product.json'
import ArrivalProduct from "@/components/Home3/ArrivalProduct"
import Deal from "@/components/Home3/Deal"
import FeatureProduct from "@/components/Home3/FeatureProduct"
import Category from "@/components/Home3/Category"
import dataReview from "@/data/Review.json"
import ReviewSection from "@/components/Home2/ReviewSection"
import Footer from "@/components/Footer/Footer"

const Home3 = () => {
    return (
        <>
            <TopNavThree />
            <MenuThree />
            <SliderThree />
            <Banner />
            <ArrivalProduct data={productData} limit={6} />
            <Deal />
            <FeatureProduct data={productData} />
            <Category />
            <Footer borderTop={true} />
        </>
    )
}

export default Home3