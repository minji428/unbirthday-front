
import React, {Component} from 'react';
import '../../static/register.css';
{/* <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"></link> */}


class Register extends React.Component<{}, any> {
    constructor(props: any){
        super(props)

        this.state = {

        }
    }

    render() {
        return(
            <div className= 'RSmain'>
            <div className='RSmainText'>
                가입하고<br></br>
                364일의 언버스데이<br></br>
                즐기기👋
            </div>
            
            <div className="RStotal">
                <div className="RSinfo">
                    <div className = "RSnumAndpass">
                        <div className="RSinfoText">아이디*</div>
                        <div className="RSnumber">
                            <div>영문, 숫자 5자 이상 입력해주세요.</div>
                            
                        </div>
                        <div className="RSinfoText">비밀번호*</div>
                        <div className="RSnumber">
                           6자 이상 입력해주세요.
                        </div>
                        <div className="RSnameAccept">
                            <div className="RScheckBtn"></div>
                            <div className="RSaccept">
                                축하를 받은 날 내 이름이 홈화면에 뜨는 것에 동의해요
                            </div>
                        </div>
                    </div>
                </div>
                <div className="LoginBtn">
                    <div className = "logins">로그인</div>

                </div>
                    
    
                <div className="RSlogin">
                    <div className="RStexts">이미 계정이 있다면?</div>
                    <div className="RSloginText">로그인하기</div>
                </div>
            </div>
        </div>
        )
    }
}
export default Register;