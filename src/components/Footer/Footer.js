import React from 'react'
import STARLIGHT from './../../asset/images/icons/STARLIGHT.png';
import VCB from './../../asset/images/icons/VCB.png';
import VIETTINBANK from './../../asset/images/icons/VIETTINBANK.png';
import zalopay_icon from './../../asset/images/icons/zalopay_icon.png';
import logo from './../../asset/images/logo.png';
import payoo from './../../asset/images/icons/payoo.jpg';
import laban from './../../asset/images/icons/laban.png';
import AGRIBANK from './../../asset/images/icons/AGRIBANK.png';
import IVB from './../../asset/images/icons/IVB.png';
import VPBank from './../../asset/images/icons/vpbank.png';
import android from './../../asset/images/icons/android-logo.png';
import apple from './../../asset/images/icons/apple-logo.png';
import facebook from './../../asset/images/icons/facebook-logo.png';
import zalo from './../../asset/images/icons/zalo-logo.png';
import bocongthuong from './../../asset/images/icons/bocongthuong.png';

export default function Footer() {
    return (
        <div className="footer" id="footer">
            <div className="container">
                <div className="row footer__info">
                    <div className="col-12 col-sm-12 col-md-4 footer__detail">
                        <p id="footerTitleTix" className="footer__title">COURSERA</p>
                        <div className="row">
                            <div className="col-5 pr-0 hideOnMobile">
                                <a href="#">FAQ</a><br/>
                                <a href="#">Brand Guidelines</a>
                            </div>
                            <div className="col-6 pl-0 hideOnMobile">
                                <a href="#">Thỏa thuận sử dụng</a><br/>
                                <a href="#">Chính sách bảo mật</a>
                            </div>
                            <div className="col-12 hideOnPC">
                                <a href="#">FAQ</a><br/>
                                <a href="#">Brand Guidelines</a>
                                <a href="#">Thỏa thuận sử dụng</a><br/>
                                <a href="#">Chính sách bảo mật</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 footer__partner hideOnMobile">
                        <p className="footer__title">ĐỐI TÁC</p>
                        <div className="col-12 row">
                            <a href="#"><img src={STARLIGHT} /></a>
                            <a href="#"><img src={VCB} /></a>
                            <a href="#"><img src={VIETTINBANK} /></a>
                            <a href="#"><img src={zalopay_icon} /></a>
                            <a href="#"><img src={logo} /></a>
                        </div>
                        <div className="col-12 row">
                            <a href="#"><img src={payoo} /></a>
                            <a href="#"><img src={laban} /></a>
                            <a href="#"><img src={AGRIBANK} /></a>
                            <a href="#"><img src={VPBank} /></a>
                            <a href="#"><img src={IVB} /></a>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 footer__app ">
                        <div className="col-6 hideOnMobile">
                            <p className="footer__title ">MOBILE APP</p>
                            <a href="#"><img src={android}/></a>
                            <a href="#"><img src={apple}/></a>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 footer__social">
                            <p className="footer__title hideOnMobile">SOCIAL</p>
                            <a href="#"><img src={facebook}/></a>
                            <a href="#"><img src={zalo}/></a>
                        </div>
                    </div>
                </div>
                <hr id="hrFooter"/>
                <div className="row footer__add">
                    <div className="col-12 col-sm-12 col-md-1 p-0">
                        <img className="imgLogo" src={logo} style={{width:'100%', borderRadius:'10px', cursor:'pointer'}}/>
                    </div>
                    <div className="col-12 col-sm-12 col-md-8 pr-0 address__detail">
                        <p className="footer__title">COURSERA</p>
                        <p>Coursera is the global online learning platform that offers anyone, anywhere access to online courses and degrees from world-class universities and companies. </p>
                        <p>Email: <a href="#" style={{color:'red'}}>support@coursera.vn</a></p>
                    </div>
                    <div className="col-12 col-sm-12 col-md-2 p-0">
                        <img className="imgBoCo" src={bocongthuong} style={{width:'100%', cursor:'pointer'}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
