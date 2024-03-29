
import React, {Component} from 'react';
import '../../static/signInFin/signInFin3.css';

class SignInFin3 extends React.Component<{}, any> {
    constructor(props: any){
        super(props)

        this.state = {

        }
    }

    render() {
        return(
            <div className= 'SF3main'>
                <div className="SF3alerts">
                    <div>💌&nbsp;받은 카드가 '내 카드함'에 저장되었어요.</div>
        </div>
            <div className="SF3colors">
                <img className="SF3color" src="../img/colors.png"/>
            </div>
            <div className="SF3texts">
                <div className="SF3mainText">
                     가입 완료
                </div>
                <div className="SF3btn">
                    <img src="../img/bt_send_card_blue.png"></img>
                </div>
    
            </div>
           <div className="SF3cakes">
                <img className="SF3cake" src="../img/blueCake.png"/>
           </div>
        </div>
        )
    }
}
export default SignInFin3;