import React, {Component, useEffect} from 'react';
import '../../static/login.css';

class login extends React.Component<{}, any> {
    constructor(props: any){
        super(props)

        this.state = {

        }
    }

    render() {
        // useEffect(() => {
        //     const font = document.createElement('link')
        //     font.rel="stylesheet"
        //     font.href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300&display=swap"
        //     document.head.appendChild(font)

        //     return () => {
        //         document.head.removeChild(font)
        //     }
        // }, [])
        return(
            <div className= 'LoginMain'>
            <text className='LoginmainText'>
                오늘도<br/>
                해피 언버스데이- 👋
            </text>
            
            <div className="Logintotal">
                <div className="Logininfo">
                    <div className = "LoginnumAndpass">
                        <div className="LogininfoText">아이디</div>
                        <div className="Loginnumber">
                            <div>아이디를 입력하세요.</div>
                        </div>
                        
                        <div className="LogininfoText">비밀번호</div>
                        <div className="Loginnumber">
                           비밀번호를 입력하세요.
                        </div>
                        <div className="Loginfind">
                            아이디/비밀번호 찾기
                        </div>
                    </div>
                </div>
                
                <div className="LoginBtn">
                    <div className = "logins">로그인</div>

                </div>
    
                <div className="login">
                    <div className="Logintexts">아직 가입 전이라면?</div>
                    <div className="loginText">30초만에 가입하기</div>
                </div>
            </div>
        </div>
        )
    }
}
export default login;