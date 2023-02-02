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
        let rData = response.data

        if(rData.rtCode === "00") {
            sessionStorage.setItem('id', this.state.id);
            
            if(sessionStorage.getItem('card') !== null) {

                window.location.href = `/cardreceive/${sessionStorage.getItem('card')}`
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

    clickLogo(){
        window.location.href = 'https://unbirthday.kr'
    }

    notion(){
        window.location.href = 'https://eminent-clavicle-a2a.notion.site/620ee737c47240e0a77faba2b831df24'
    }

    instagram(){
        window.location.href = 'https://instagram.com/happy__un_birthday?igshid=Zjc2ZTc4Nzk='
    }   


    render() {
        return(
            <div className= 'LoginMain'>
                {/* <ToastContainer 
                    onClick={this.toMyPage}
                    limit={1}
                /> */}
                <div className='logo' onClick={this.clickLogo}>
                    <img src="../../img/bt_logo.png"/>
                </div>
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
                    </div>
                </div>
                
                <div className="LoginBtn">
                    <img src="../img/bt_login.png" onClick={this.handleClickLogin}/>
                </div>

                <div className="myButtonsLogin">
                        <div className="instagram_my">
                            <img src="../img/bt_insta.png" onClick={this.instagram}/>
                        </div>
                        <div className="instagram_my" >
                            <img src="../img/bt_notion.png" onClick={this.notion}/>
                        </div>

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