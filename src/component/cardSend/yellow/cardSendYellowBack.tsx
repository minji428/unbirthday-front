import React, {Component} from 'react';
import { Modal } from 'reactstrap';
import '../../../static/cardSend/cardSendBack.css';

import ChooseTagFirst from './chooseTag1';
// import ChooseTagFirst from '../../chooseTag/chooseTag1'
import ChooseTagSecond from '../../chooseTag/chooseTag2'
import ChooseTagThird from '../../chooseTag/chooseTag3'
import ChooseTagFourth from '../../chooseTag/chooseTag4'

import CardSendComplete from './cardSendComplete'

interface cardSendYellowFrontProps {
    toPerson: any,
    fromPerson: any,
}

interface Tag{
    FirstTag : chooseTag1
}

interface chooseTag1 {
    FirstTag : any,
}

class cardSendYellowBack extends React.Component<cardSendYellowFrontProps, any> {
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
        }

        this.toggle = this.toggle.bind(this)
        this.chooseTagFirst = this.chooseTagFirst.bind(this)
        this.chooseTagSecond = this.chooseTagSecond.bind(this)
        this.chooseTagThird = this.chooseTagThird.bind(this)
        this.chooseTagFourth = this.chooseTagFourth.bind(this)
        this.clickFirst = this.clickFirst.bind(this)
    }

    backButton(){
        // location.href로 하면 새로고침 되어서 이전에 작성했던 내용들이 사라짐..
        // 뒷장 쓰기 했던 것 처럼 컴포넌트를 변경하는 방법 생각해보기
        window.location.href = '/cardsend/yellow'
    }

    toggle(flag: any) {

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
                        <img className="CS3card" src="../img/yellowBack.png"/>
                    </div>
                        
                    <div className="CS3insideYellow">
                        <div className='CS3personName'>
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
                                        <div onClick={this.chooseTagSecond}>{this.state.secondTag ? "dd" : "#태그선택"}</div>
                                        {this.state.chooseSecondTag ? <ChooseTagSecond/>:''}
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
                                            <div onClick={this.chooseTagThird}>{this.state.thirdTag ? "dd" : "#태그선택"}</div>
                                            {this.state.chooseThirdTag ? <ChooseTagThird/>:''}
                                        </span>
                                    </div>
                                </div>
            
                                <div className="CS3temp">
                                    <div className="CS3tagSpace">
                                        <span className="CS3tag">
                                            <div onClick={this.chooseTagFourth}>{this.state.fourthTag ? "dd" : "#태그선택"}</div>
                                            {this.state.chooseFourthTag ? <ChooseTagFourth/>:''}
                                        </span>
                                    </div>
                                    <div className="CS3textSpace">
                                        <div className='CS3subText'>
                                        모습이 좋아.</div>
                                    </div>
                                </div>
    
                            </div> 
                        
                        
                             <div className="CS3writeMessage" >
                                <div>생일에나 할 수 있는 얘기를 오늘 해보네! </div>
                                <div>낯간지럽지만 꼭 해주고 싶은 말이야.</div> 
                                <div>매일이 생일처럼 특별했으면 좋겠어.</div> 
                                <div>오늘도 해피 언버스데이 :)  </div>            
                                <div className="CS3numCnt"> 
                                    <div>80/90</div>
                                </div>
                            </div>
                            <div className="CS3notice">최소 1자 이상 입력해주세요.</div>
    
    
                        </div>
                    </div>
                    
                    <div className='CS3complete'>
                        <div>
                            완성하기
                        </div>
                        {/* 완성하기 누르면 uuid 생성하고 그 url로 이동시킨 다음에 Complete 보여주기 */}
                    </div>


                    <div>
                        <Modal isOpen={this.state.modalFirst} size="md" toggle={this.toggle}>
                            
                        </Modal>
                    </div>

                </div>
   
        )
    }
}
export default cardSendYellowBack;