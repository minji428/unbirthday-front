
import React, {Component} from 'react';
import '../../static/signInFin/signInFin2.css';

class SignInFin2 extends React.Component<{}, any> {
    constructor(props: any){
        super(props)

        this.state = {

        }
    }

    render() {
        return(
            <div className= 'SF2main'>
                <div className='logo'>
                    <img src="../../img/bt_logo.png"/>
                </div>
            <div className="SF2colors">
                <img className="SF2color" src="../img/colors.png"/>
            </div>
            <div className="SF2texts">
                <div className="SF2mainText">
                     가입 완료
                </div>
                <div className="SF2btn">
                    <img src="../img/bt_send_card_blue.png"></img>
                </div>
    
            </div>
           <div className="SF2cakes">
                <img className="SF2cake" src="../img/blueCake.png"/>
           </div>
        </div>
        )
    }
}
export default SignInFin2;