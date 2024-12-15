import Image from "next/image";

import Hero from "./Hero/Hero";
import Product from "./featuredproduct/Product";
import Catogorise from "./TopCategories/Catogories";
import Popular from "./Popular/Popular";
import Our from "./ourproducts/OurProducts";
  export default function Home() {
  return (
       <div>
               
               <Hero/>
               <Product/>
               <Catogorise/>
               <Popular/>
               <Our/>

       </div>
  )
}
