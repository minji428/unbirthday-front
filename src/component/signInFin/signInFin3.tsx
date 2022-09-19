
import React, {Component} from 'react';
import '../../static/signInFin/signInFin3.css';
{/* <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"></link> */}


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
                    카드 보내기
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