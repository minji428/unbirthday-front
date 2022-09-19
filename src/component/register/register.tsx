
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
        const param = {
            userId: this.state.id,
            password: this.state.pw,
            checkPrivacy: this.state.checkPrivacy
        }

        service.anyService("/account/reg", "post", this.handleClickJoinCallback, param)
    }

    handleClickJoinCallback = (response: any) => {
        console.log(response)
        let rData = response.data
        if(rData.rtCode === "00") {
            alert('회원가입이 완료되었습니다.\n로그인을 진행해주세요.')
            window.location.href = "/login"
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
                            <input type={'text'} name='id' className='RSnumber' placeholder='영문, 숫자 5자 이상 입력해주세요.' onChange={this.getId}/>
                        <div className="RSinfoText">비밀번호*</div>
                           <input type={'text'} name='password' className='RSnumber' placeholder='6자 이상 입력해주세요.' onChange={this.getPassword}/>
                        <div className="RSnameAccept">
                            <input type={'checkbox'} className='RScheckBtn' onChange={this.checkPrivacy}/>
                            <div className="RSaccept">
                                축하를 받은 날 내 이름이 홈화면에 뜨는 것에 동의해요
                            </div>
                        </div>
                    </div>
                </div>
                <div className="LoginBtn">
                    <div className = "logins" onClick={this.handleClickJoin}>회원가입</div>
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