import React, {Component} from 'react';
import '../../../static/cardSend/cardSendBack.css';
import * as service from '../../../service/service'

import ChooseTagFirst from './chooseTag/chooseTag1';
import ChooseTagSecond from './chooseTag/chooseTag2'
import ChooseTagThird from './chooseTag/chooseTag3'
import ChooseTagFourth from './chooseTag/chooseTag4'

import CardSendComplete from './cardSendComplete'

interface cardSendOrangeFrontProps {
    toPerson: any,
    fromPerson: any,
}

interface Tag{
    FirstTag : chooseTag1
}

interface chooseTag1 {
    FirstTag : any,
}

interface chooseTag2 {
    SecondTag : any
}

interface chooseTag3 {
    ThirdTag : any
}

interface chooseTag4 {
    FourthTag : any
}

class cardSendOrangeBack extends React.Component<cardSendOrangeFrontProps, any> {
    constructor(props: any){
        super(props)

        this.state = {
            chooseFirstTag : false,
            chooseSecondTag : false,
            chooseThirdTag : false,
            chooseFourthTag : false,
            firstTag : "",
            secondTag : "",
            thirdTag : "",
            fourthTag : "",
            memo: "생일에나 할 수 있는 얘기를 오늘 해보네!\n낯간지럽지만 꼭 해주고 싶은 말이야.\n매일이 생일처럼 특별했으면 좋겠어.\n오늘도 해피 언버스데이 :)",
        }

        this.chooseTagFirst = this.chooseTagFirst.bind(this)
        this.chooseTagSecond = this.chooseTagSecond.bind(this)
        this.chooseTagThird = this.chooseTagThird.bind(this)
        this.chooseTagFourth = this.chooseTagFourth.bind(this)
        this.clickFirst = this.clickFirst.bind(this)
        this.clickSecond = this.clickSecond.bind(this)
        this.clickThird = this.clickThird.bind(this)
        this.clickFourth = this.clickFourth.bind(this)
        this.writeMemo = this.writeMemo.bind(this)
    }

    backButton(){
        // location.href로 하면 새로고침 되어서 이전에 작성했던 내용들이 사라짐..
        // 뒷장 쓰기 했던 것 처럼 컴포넌트를 변경하는 방법 생각해보기
        window.location.href = '/cardsend/orange'
    }

        // 첫번째 태그 선택하는 화면
        chooseTagFirst(){
            this.setState({
                chooseFirstTag: true
            })
        }
    
        // 두번째 태그 선택하는 화면
        chooseTagSecond(){
            this.setState({
                chooseSecondTag: true
            })
        }
    
        // 세번째 태그 선택하는 화면
        chooseTagThird(){
            this.setState({
                chooseThirdTag: true
            })
        }
    
        // 네번째 태그 선택하는 화면
        chooseTagFourth(){
            this.setState({
                chooseFourthTag: true
            })
        }
    
        // 첫번째 태그 선택 완료
        clickFirst = (data: any) => {
            this.setState({
                firstTag : data,
                chooseFirstTag : false
            })
        }
    
        // 두번째 태그 선택 완료
        clickSecond = (data: any) => {
            this.setState({
                secondTag : data,
                chooseSecondTag : false
            })
        }
    
        // 세번째 태그 선택 완료
        clickThird = (data: any) => {
            this.setState({
                thirdTag : data,
                chooseThirdTag : false
            })
        }
    
        // 네번째 태그 선택 완료
        clickFourth = (data: any) => {
            this.setState({
                fourthTag : data,
                chooseFourthTag : false
            })
        }
    
        writeMemo = (data: any) => {
            this.setState({
                memo : data.target.value
            })
        }
    
        completeCard = async(e: any) => {
            const param = {
                send : this.props.fromPerson,
                receive : this.props.toPerson,
                firstTag : this.state.firstTag,
                secondTag : this.state.secondTag,
                thirdTag : this.state.thirdTag,
                fourthTag : this.state.fourthTag,
                memo : this.state.memo,
                cardColor : "orange"
            }
    
            service.anyService("/card/send/complete", "post", this.handleCompleteCard, param)
        }
    
        handleCompleteCard = (response: any) => {
            console.log(response)
            console.log(response.data)
            window.location.href = '/cardsend/orange/{reponse.data.data}'
        }

    render() {
        return(
            <div className= 'CS3main'>
            <div className="CS3btn">
                <img src="../img/back.png" className="CS3backBtn" onClick={this.backButton}/>
            </div>
                <div className='CS3mainText'>
                    그 사람을 생각하며 채워주세요.
                </div>
                <div className="CS3yelloBox">
                    <div>
                        <img className="CS3card" src="../img/OrangeBack.png"/>
                    </div>
                        
                    <div className="CS3insideYellow">
                        <div className='CS3personNameforOrange'>
                            HAPPY<br></br>
                            UN-BIRTHDAY {this.props.toPerson}
                        </div>
                        <div className="CS3tagMessage">
                            <div className="CS3temp">
                                <div className="CS3tagSpace">
                                    <span className="CS3tag">
                                        <div onClick={this.chooseTagFirst}>{this.state.firstTag ? this.state.firstTag : "#태그선택"}</div>
                                        {this.state.chooseFirstTag ? <ChooseTagFirst clickFirst = {this.clickFirst}/>:''}
                                    </span>
                                 </div>
                                <div className="CS3textSpace">
                                    <div className='CS3subText'>
                                        {this.props.toPerson}(이)는
                                    </div>
                                </div>
                            </div>
                                
                            <div className="CS3temp">
                                 <div className="CS3textSpace">
                                    <div className='CS3subText'>
                                        정말 
                                    </div>
                                </div>
                    
                                <div className="CS3tagSpace">
                                    <span className="CS3tag">
                                        <div onClick={this.chooseTagSecond}>{this.state.secondTag ? this.state.secondTag : "#태그선택"}</div>
                                        {this.state.chooseSecondTag ? <ChooseTagSecond clickSecond = {this.clickSecond}/>:''}
                                        </span>
                                    </div>
                                    
                                    <div className="CS3textSpace">
                                        <div className='CS3subText'>사람이야.</div>
                                    </div>
                                </div>
            
                                <div className="CS3temp">
                                    <div className="CS3textSpace">
                                        <div className='CS3subText'>나는</div>
                                    </div>
                                    
                                    <div className="CS3textSpace">
                                        <div className='CS3subText'>{this.props.toPerson}(이)의</div>
                                    </div>
                                    
                                    <div className="CS3tagSpace">
                                        <span className="CS3tag">
                                            <div onClick={this.chooseTagThird}>{this.state.thirdTag ? this.state.thirdTag : "#태그선택"}</div>
                                            {this.state.chooseThirdTag ? <ChooseTagThird clickThird = {this.clickThird}/>:''}
                                        </span>
                                    </div>
                                </div>
            
                                <div className="CS3temp">
                                    <div className="CS3tagSpace">
                                        <span className="CS3tag">
                                            <div onClick={this.chooseTagFourth}>{this.state.fourthTag ? this.state.fourthTag : "#태그선택"}</div>
                                            {this.state.chooseFourthTag ? <ChooseTagFourth clickFourth = {this.clickFourth}/>:''}
                                        </span>
                                    </div>
                                    <div className="CS3textSpace">
                                        <div className='CS3subText'>
                                        모습이 좋아.</div>
                                    </div>
                                </div>
    
                            </div> 
                        
                        
                            <textarea name="memo" cols={10} rows={6} onChange={this.writeMemo} placeholder={"생일에나 할 수 있는 얘기를 오늘 해보네!\n낯간지럽지만 꼭 해주고 싶은 말이야.\n매일이 생일처럼 특별했으면 좋겠어.\n오늘도 해피 언버스데이 :) "}/>
                            <div className="CS3notice">최소 1자 이상 입력해주세요.</div>
    
    
                        </div>
                    </div>
                    
                    <div className='CS3complete'>
                        <div onClick={this.completeCard}>
                            완성하기
                        </div>
                        {/* 완성하기 누르면 uuid 생성하고 그 url로 이동시킨 다음에 Complete 보여주기 */}
                    </div>
                </div>
   
        )
    }
}
export default cardSendOrangeBack;