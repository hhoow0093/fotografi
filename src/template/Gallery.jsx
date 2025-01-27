import React from 'react';
import "../css/Gallery.css";
import Dentist from "../assets/Photos/dentist/Denture.jpg";
import fnb from "../assets/Photos/fnb/CoffeeMilk.png";
import flower from "../assets/Photos/scenery/flower/flowerhaha.jpg";
import aesthetic from "../assets/Photos/scenery/Aesthetic/Hotel.jpg";

const Gallery = () => {
  return (
      <>
          <section className="gallery">
              <div className="container pt-5">
                  <div className="row">
                      <div className="col-12 col-md-6 kategori-1 mt-3"><img src= { Dentist } alt="" srcset="" id='dentist' /></div>
                      <div className="col-12 col-md-6 kategori-2 mt-3"><img src={fnb} alt="" srcset="" id='fnb'/></div>
                      <div className="col-12 col-md-6 kategori-3 mt-3"><img src={flower} alt="" srcset="" id='flower' /></div>
                      <div className="col-12 col-md-6 kategori-4 mt-3"><img src={aesthetic} alt="" srcset="" id='aes'/></div>
                  </div>
              </div>
          </section>
      </>
  )
}

export default Gallery
