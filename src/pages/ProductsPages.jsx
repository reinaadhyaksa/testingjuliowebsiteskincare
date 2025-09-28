import HeroProducts from '../components/productspage/HeroProudcts'
import Products from '../components/homepage/Products'
import { Features } from '../components/productspage/Features'
import { Instructions } from '../components/productspage/Instructions'
import { Testimonial } from '../components/productspage/Testimonial'
 
const Produk = () => {
    return (
        <div className="bg-black text-white min-h-screen">
            <HeroProducts />
            <Products />
            <Features />
            <Instructions />
            <Testimonial />
        </div>
    )
}

export default Produk