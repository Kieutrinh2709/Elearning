// import React, { useEffect } from 'react'
// import { Select } from 'antd';


// const { Option } = Select;
// export default function Carousel() {


//     return (
//         <div>
//             <div id="carouselExampleIndicators"  className="carousel slide movie__carousel" data-ride="carousel">
//                 <ol className="carousel-indicators carousel__button" style={{zIndex:'1'}}>
//                     <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
//                     <li data-target="#carouselExampleIndicators" data-slide-to={1} />
//                     <li data-target="#carouselExampleIndicators" data-slide-to={2} />
//                 </ol>
//                 <div className="carousel-inner movie__carousel__item">
//                     <div className="carousel-item active">
//                         <img src="./images/carousel/cr1.jpg"  className="d-block w-100" />
//                     </div>
//                     <div className="carousel-item">
//                         <img src="./images/carousel/cr1.jpg" className="d-block w-100" />
//                     </div>
//                     <div className="carousel-item">
//                         <img src="./images/carousel/cr1.jpg"  className="d-block w-100" />
//                     </div>
//                 </div>
//                 <a className="carousel-control-prev " href="#carouselExampleIndicators" role="button" data-slide="prev">
//                     <span aria-hidden="true"><img src="./images/icons/back-session.png" /></span>
//                 </a>
//                 <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
//                     <span aria-hidden="true"><img src="./images/icons/next-session.png" /></span>
//                 </a>
//             </div>
//         </div>

//     )
// }

import { Carousel } from 'antd';
import React from 'react';
const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const Banner = () => (
    <Carousel autoplay>
        <div>
            <div className="carousel-item active">
                <img src="./images/carousel/cr1.jpg" className="d-block w-100" />
            </div>
        </div>
        <div>
            <div className="carousel-item">
                <img src="./images/carousel/cr1.jpg" className="d-block w-100" />
            </div>
        </div>
        <div>
            <div className="carousel-item">
                <img src="./images/carousel/cr1.jpg" className="d-block w-100" />
            </div>
        </div>
        <div>
            <div className="carousel-item">
                <img src="./images/carousel/cr1.jpg" className="d-block w-100" />
            </div>
        </div>
    </Carousel>
);

export default Banner;
