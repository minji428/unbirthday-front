import React, {Component, useEffect} from 'react';
import { Slide, toast, ToastContainer } from "react-toastify";
import '../../static/login.css';
import * as service from '../../service/service';

class login extends React.Component<{}, any> {
    constructor(props: any){
        super(props)

        this.state = {
            id: "",
            pw: "",
        }
    }

    join(){
        window.location.href = "/register"
    }
    
    // 입력한 ID 값 가져오기
    getId = (event: any) => {
        let getId = event.target.value
        this.setState({id : getId})
    }

    // 입력한 PASSWORD 값 가져오기
    getPassword = (event: any) => {
        let getPassword = event.target.value
        this.setState({pw : getPassword})
    }

    handleClickLogin = async(e: any) => {
        const param = {
            userId: this.state.id,
            password: this.state.pw
        }

        service.anyService("/account/login", "post", this.handleClickLoginCallback, param)
    }

    handleClickLoginCallback = (response: any) => {
        console.log(response)
        let rData = response.data

        if(rData.rtCode === "00") {
            sessionStorage.setItem('id', this.state.id);
            
            if(sessionStorage.getItem('card') !== null) {
                
                // toast("💌 카드가 저장됐어요. 내 카드함으로 가보실래요?", {
                //         position: 'top-center',
                //         closeButton: false,
                //         className: 'SF3alerts-toast',
                //         draggablePercent: 60,
                //         draggableDirection: 'y',
                //         autoClose: false,
                //         transition: Slide,
                //     })
                window.location.href = `/cardreceive/${sessionStorage.getItem('card')}`
                sessionStorage.removeItem('card')
            } else{
                window.location.href = "/mypage"
            }
        } else {
            alert(rData.rtMsg)
        }
    }

    toMyPage = (event: any) => {
        window.location.href = "/mypage"
    }

    render() {
        return(
            <div className= 'LoginMain'>
                {/* <ToastContainer 
                    onClick={this.toMyPage}
                    limit={1}
                /> */}
            <text className='LoginmainText'>
                오늘도<br/>
                해피 언버스데이- 👋
            </text>
            
            <div className="Logintotal">
                <div className="Logininfo">
                    <div className = "LoginnumAndpass">
                        <div className="LogininfoText">아이디</div>
                        <div className="Loginnumber">
                            <input type={'text'} name='id' placeholder='아이디를 입력하세요.' onChange={this.getId}/>
                        </div>
                        <div className="LogininfoText">비밀번호</div>
                        <div className="Loginnumber">
                            <input type={'password'} name='pw' placeholder='비밀번호를 입력하세요.' onChange={this.getPassword}/>
                        </div>
                        <div className="Loginfind">
                            <div>
                            아이디/비밀번호 외 정보를 수집하지 않아
                            </div>
                            <div>
                            계정 찾기가 불가합니다. 계정을 잘 기억해주세요:)
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="LoginBtn">
                    <img src="../img/bt_login.png" onClick={this.handleClickLogin}/>
                </div>
    
                <div className="login">
                    <div className="Logintexts">아직 가입 전이라면?</div>
                    <div className="loginText" onClick={this.join}>30초만에 가입하기</div>
                </div>
            </div>
        </div>
        )
    }
}
export default login;