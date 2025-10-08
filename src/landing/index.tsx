import Footer from '@/app/components/footer'
import Navbar from '@/app/components/navbar'
import Contact from '@/app/contact'
import Expertise from '@/app/expertise'
import Heritage from '@/app/heritage'
import Hero from '@/app/hero'
import Process from '@/app/process'
import Products from '@/app/products'
import React from 'react'

const Landing = () => {
  return (
    <>
     <Navbar />
     <Hero />
     <Expertise />
     <Heritage />
     <Products />
     <Process />
     <Contact />
     <Footer />
    </>
  )
}

export default Landing