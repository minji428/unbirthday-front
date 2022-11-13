
import React, {Component} from 'react';
import '../../static/register.css';
import * as service from '../../service/service'

class Register extends React.Component<{}, any> {
    constructor(props: any){
        super(props)

        this.state = {
            id : "",
            pw : "",
            checkPrivacy : false
        }

        this.handleClickJoin = this.handleClickJoin.bind(this)
        this.handleClickJoinCallback = this.handleClickJoinCallback.bind(this)
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
    

    // 입력한 개인정보 동의 가져오기
    checkPrivacy = (event: any) => {
        let check = event.target.checked
        this.setState({checkPrivacy : check})
    }

    handleClickJoin = async(e: any) => {
        let regId = "^(?=.*[a-zA-z])(?=.*[0-9]).{6,12}$"
        let regexpChkId = new RegExp(regId)

        let regPw = "^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,}$"
        let regexpChkPw = new RegExp(regPw)
        
        if(regexpChkId.test(this.state.id) === true &&
            regexpChkPw.test(this.state.pw) === true) {
            const param = {
                userId: this.state.id,
                password: this.state.pw,
                checkPrivacy: this.state.checkPrivacy
            }
    
            service.anyService("/account/reg", "post", this.handleClickJoinCallback, param)
        } else {
            // 멘트 정하기
            alert("양식을 맞춰주세요");
        }

    }

    handleClickJoinCallback = (response: any) => {
        console.log(response)
        let rData = response.data
        if(rData.rtCode === "00") {
            alert('회원가입이 완료되었습니다.\n로그인을 진행해주세요.')
            window.location.href = "/login"
        }
    }

    login(){
        window.location.href = "/login"
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
                            <input type={'text'} name='id' className='RSnumber' placeholder='영문, 숫자 5자 이상 입력해주세요.' onChange={this.getId}/>
                        <div className="RSinfoText">비밀번호*</div>
                           <input type={'text'} name='password' className='RSnumber' placeholder='6자 이상 입력해주세요.' onChange={this.getPassword}/>
                        <div className="RSnameAccept">
                            <input type={'checkbox'} className='RScheckBtn' onChange={this.checkPrivacy}/>
                            <div className="RSaccept">
                                Un-Birthday를 축하받은 내 이름이 홈화면에 뜨는 것에 동의해요
                            </div>
                        </div>
                    </div>
                </div>
                <div className="LoginBtn">
                    <img src="../img/bt_register.png" onClick={this.handleClickJoin}/>
                </div>
                    
    
                <div className="RSlogin">
                    <div className="RStexts">이미 계정이 있다면?</div>
                    <div className="RSloginText" onClick={this.login}>로그인하기</div>
                </div>
            </div>
        </div>
        )
    }
}
export default Register;