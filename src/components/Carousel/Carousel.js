import React, { useEffect } from 'react'

export default function Carousel() {


    return (
        <div>
            <div id="carouselExampleIndicators"  className="carousel slide course__carousel" data-ride="carousel">
                <ol className="carousel-indicators carousel__button" style={{zIndex:'1'}}>
                    <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                    <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                    <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                </ol>
                <div className="carousel-inner course__carousel__item">
                    <div className="carousel-item active">
                        <img src="./images/carousel/cr1.jpg"  className="d-block w-100" />
                    </div>
                    <div className="carousel-item">
                        <img src="./images/carousel/cr2.png" className="d-block w-100" />
                    </div>
                    <div className="carousel-item">
                        <img src="./images/carousel/cr1.jpg"  className="d-block w-100" />
                    </div>
                </div>
                <a className="carousel-control-prev " href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span aria-hidden="true"><img src="./images/icons/back-session.png" /></span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span aria-hidden="true"><img src="./images/icons/next-session.png" /></span>
                </a>
            </div>
        </div>

    )
}

