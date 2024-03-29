
import React, {Component} from 'react';
import { Slide, toast, ToastContainer } from "react-toastify";

import '../../static/signInFin/signInFin1.css';
import '../../static/signInFin/signInFin3.css';

class SignInFin1 extends React.Component<{}, any> {
    constructor(props: any){
        super(props)

        this.state = {

        }
    }
    componentDidMount(): void {
        if(sessionStorage.getItem('card') !== null) {
            let newTimerId = window.setInterval(() => {
                toast("💌 카드가 저장됐어요. 내 카드함으로 가보실래요?", {
                    position: 'top-center',
                    closeButton: false,
                    className: 'SF3alerts-toast',
                    draggablePercent: 60,
                    draggableDirection: 'y',
                    autoClose: false,
                    transition: Slide,
                })
            }, 5000);
        }

    }

    toLogin = (event: any) => {
        window.location.href = "/login"
    }
    
    render() {
        return(
            <div className= 'SF1main'>
                <ToastContainer 
                    onClick={this.toLogin}
                    limit={1}
                />
            <div className="SF1colors">
                <img className="SF1color" src="../img/colors.png"/>
            </div>
            <div className="SF1texts">
                <div className="SF1mainText">
                     가입 완료
                </div>
                <div className="SF1subTextCombine">
                  당신의 매일이 <br></br>
                  생일처럼 빛날 거예요-!
                </div>
                <div className="SF2btnCombine">
                    <img src="../img/bt_send_card_blue.png"></img>
                </div>
    
            </div>
           <div className="SF1cakes">
                <img className="SF1cake" src="../img/blueCake.png"/>
           </div>
        </div>
        )
    }
}
export default SignInFin1;