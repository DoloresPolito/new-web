import React, { useState } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';


function CarouselSlick() {
    const settings = {
      dots: true,
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 2
    };
    return (
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <img src={"https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg"}/>
          </div>
          <div>
            <img src={"https://www.educaciontrespuntocero.com/wp-content/uploads/2020/04/mejores-bancos-de-imagenes-gratis.jpg"}/>
          </div>
          <div>
            <img src={"https://static.vecteezy.com/system/resources/thumbnails/023/329/714/small/heart-tree-love-for-nature-red-landscape-at-sunset-generativ-ai-photo.jpg"} />
          </div>
          <div>
            <img src={"https://cdn.pixabay.com/photo/2017/10/17/16/10/fantasy-2861107_640.jpg"} />
          </div>
        </Slider>
      </div>
    );
  }

export default CarouselSlick;