import React from 'react'
import Carousel from 'react-material-ui-carousel'
import './banner.css';


const data = [
    "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61CiqVTRBEL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71jejTRepKL._SX1500_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img2020/fashion/WA_2020/WeddingGWJan/Women1500._CB585417446_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img18/Lawn_Garden/Ud/Jan_24/GW/3000x1200-hero._CB585520984_.jpg",
    "https://m.media-amazon.com/images/I/A1VGl-22SsL._SX3000_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/Jan/PC_GW_Hero_3000x1200_V1._CB585404408_.jpg"
]

const Banner = () => {
  return (
    <div>
        <Carousel
        className="carasousel" 
        autoplay={true}
        animation='slide'
        indicators={false}
        navButtonsAlwaysvisible={true}
        cycleNavigation={true}
        navButtonsProps={{
            style:{
                backgroundColor:"#fff",
                color:"#494949",
                borderRadius: 0,
                marginTop: -22,
                height: "104px",
            }
        }}
        
        >
           
            {
              data.map((imag,i)=>{
                return (
                    <>
                    <img src={imag} alt="" className="banner_img"/>
                    </>
                )
                })
            }

        </Carousel>
    </div>

  )
}

export default Banner