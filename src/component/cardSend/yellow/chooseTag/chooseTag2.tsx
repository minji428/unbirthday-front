import React, {Component} from 'react';
import '../../../static/chooseTag/chooseTag.css';

interface cardSendYellowBackFrame{
    clickSecond: any,
}

class ChooseTag2 extends React.Component<cardSendYellowBackFrame, any> {
    constructor(props: any){
        super(props)

        this.state = {
            clickSecondTag: ""
        }
        this.clickTag = this.clickTag.bind(this)
    }

    clickTag = (event : any) => {
        this.setState({
            clickSecondTag : event.target.innerHTML
        })
        this.props.clickSecond(event.target.innerHTML)
    }

    render() {
        return(
            <div className= 'CTmain'>
            <div className="CTpart1"></div>
             <div className="CTwhiteBox">
                <img className="CTxIcon" src="../img/xIcon.png"/>
                <div className="CTmainText">#태그 선택</div>
                <div className="CTsubText">말해주고 싶은 그 사람만의 분위기는 무엇인가요?💬</div>
                <div className="CTtags">
                    <div className="CTrowTag">
                        <div className="CTeachTagBlue" onClick={(e) => this.clickTag(e)}>#유잼인</div>
                        <div className="CTeachTagBlue" onClick={(e) => this.clickTag(e)}>#포근한</div>
                    </div>
    
                    <div className="CTrowTag">
                        <div className="CTeachTagBlue" onClick={(e) => this.clickTag(e)}>#빛이 나는</div>
                        <div className="CTeachTagBlue" onClick={(e) => this.clickTag(e)}>#한여름 사이다 같은</div>
                    </div>
    
                    <div className="CTrowTag">
                        <div className="CTeachTagBlue" onClick={(e) => this.clickTag(e)}>#아이처럼 밝은</div>
                        <div className="CTeachTagBlue" onClick={(e) => this.clickTag(e)}>#친근한</div>
                    </div>
    
                    <div className="CTrowTag">
                        <div className="CTeachTagBlue" onClick={(e) => this.clickTag(e)}>#봄날의 햇살같은</div>
                        <div className="CTeachTagBlue" onClick={(e) => this.clickTag(e)}>#어른스러운</div>
                    </div>
    
                    <div className="CTrowTag">
                        <div className="CTeachTagBlue" onClick={(e) => this.clickTag(e)}>#닮고 싶은</div>
                        <div className="CTeachTagBlue" onClick={(e) => this.clickTag(e)}>#시크한</div>
                    </div>
    
                    <div className="CTrowTag">
                        <div className="CTeachTagBlue" onClick={(e) => this.clickTag(e)}>#소나무처럼 곧은</div>
                        <div className="CTeachTagBlue" onClick={(e) => this.clickTag(e)}>#마이웨이를 가는</div>
                    </div>
                </div>
             </div>
            <div className="CTpart2"></div>    
        </div>
        )
    }
}
export default ChooseTag2;