import About from "../components/About"
import Blog from "../components/Blog"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Maps from "../components/Maps"
import Menu from "../components/Menu"
import Navbar from "../components/Navbar"
import Reviews from "../components/Reviews"
import { useState, useEffect } from "react"
import {DotLoader} from "react-spinners"



function Homepage() {

  const  [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [] )

  return (
    <>
    {
      loading ? (
        <div className="flex h-screen justify-center items-center">
                <DotLoader
            size={500}
            margin={50}
            color="#DC2626"
            />
      </div>
      ) : (
        <div>
              <Navbar/>
              <About />
              <Menu />
              <Reviews/>
              <Blog/>
              <Contact/>
              <Maps/>
              <Footer/>
          </div>
      )
      }
    </>
  )
}

export default Homepage
