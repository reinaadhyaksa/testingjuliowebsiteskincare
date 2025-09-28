import Hero from '../components/homepage/Hero'
import Features from '../components/homepage/Features'
import Products from '../components/homepage/Products'
import About from '../components/homepage/About'
import Contact from '../components/homepage/Contact'
 
export const HomePage = () => {
    return (
        <>
            <Hero />
            <About />
            <Features />
            <Products />
            <Contact />
        </>
    )
}