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
            <div className= 'main'>
            <text className='mainText'>
                오늘도<br/>
                해피 언버스데이- 👋
            </text>
            
            <div className="total">
                 {/* 아이디 비번 입력 */}
                <div className="info">
                    {/* 아이디 비번 */}
                    <div className = "numAndpass">
                        <text className="infoText">아이디</text>
                        <div className="number">
                            <div>아이디를 입력하세요.</div>
                            
                        </div>
                        {/* <div id='rectangle10' className='rectangle10'></div> */}
                        <text className="infoText">비밀번호</text>
                        <div className="number">
                           비밀번호를 입력하세요.
                        </div>
                        <div className="find">
                            아이디/비밀번호 찾기
                        </div>
                    </div>
    
                    <div className = "logins">로그인</div>
                </div>
    
                <div className="login">
                    <div className="texts">아직 가입 전이라면?</div>
                    <div className="loginText">30초만에 가입하기</div>
                </div>
            </div>
        </div>
        )
    }
}
export default login;