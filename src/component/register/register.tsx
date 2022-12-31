
import React, {Component} from 'react';
import '../../static/register.css';
import * as service from '../../service/service'
import SignInFin1 from '../signInFin/signInFin1';

class Register extends React.Component<{}, any> {
    constructor(props: any){
        super(props)

        this.state = {
            id : "",
            pw : "",
            checkPrivacy : false,
            isDone: false,
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
        
        if (regexpChkId.test(this.state.id) === false) {
            alert("아이디는 영문, 숫자 6자 이상 입력해주세요.")
        } else if (regexpChkPw.test(this.state.pw) === false) {
            alert("비밀번호는 특수문자와 영문, 숫자를 포함하여 8자 이상 입력해주세요.")
        } else if(regexpChkId.test(this.state.id) === true &&
            regexpChkPw.test(this.state.pw) === true) {
            const param = {
                userId: this.state.id,
                password: this.state.pw,
                checkPrivacy: this.state.checkPrivacy
            }
    
            service.anyService("/account/reg", "post", this.handleClickJoinCallback, param)
        } else {
            // 멘트 정하기
            alert("비정상적인 오류로 회원가입에 실패하였습니다. 관리자에게 문의해주세요.");
        }

    }

    handleClickJoinCallback = (response: any) => {
        let rData = response.data
        
        if(rData.rtCode === "00") {
            this.setState({isDone: true})
            //alert('회원가입이 완료되었습니다.\n로그인을 진행해주세요.')
            //window.location.href = "/login"
            sessionStorage.setItem('id', this.state.id)
        } else {
            alert(rData.rtMsg)
        }
    }

    login(){
        window.location.href = "/login"
    }
    
    clickLogo(){
        window.location.href = 'https://unbirthday.kr'
    }

    render() {
        if(this.state.isDone){
            return <SignInFin1 />
        }
        return(
            <div className= 'RSmain'>
                <div className='logo' onClick={this.clickLogo}>
                    <img src="../../img/bt_logo.png"/>
                </div>
            <div className='RSmainText'>
                가입하고<br></br>
                364일의 언버스데이<br></br>
                즐기기👋
            </div>
            
            <div className="RStotal">
                <div className="RSinfo">
                    <div className = "RSnumAndpass">
                        <div className="RSinfoText">아이디*</div>
                            <input type={'text'} name='id' className='RSnumber' placeholder='영문, 숫자 6자 이상 입력해주세요.' onChange={this.getId}/>
                        <div className="RSinfoText">비밀번호*</div>
                           <input type={'password'} name='password' className='RSnumber' placeholder='특수문자와 영문, 숫자를 포함하여 8자 이상 입력해주세요.' onChange={this.getPassword}/>
                        <div className="RSnameAccept">
                            <div className="RSaccept">
                                <div>
                                    아이디/비밀번호 외 정보를 수집하지 않아 계정 찾기가 불가합니다.
                                </div>
                                <div>
                                    계정을 잘 기억해주세요:)
                                </div>
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