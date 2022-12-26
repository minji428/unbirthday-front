import React, {Component} from 'react';
import '../../../../static/chooseTag/chooseTag.css';

interface cardSendYellowBackFrame{
    clickThird: any,
}

class ChooseTag3 extends React.Component<cardSendYellowBackFrame, any> {
    constructor(props: any){
        super(props)

        this.state = {
            clickThirdTag: ""
        }
        this.clickTag = this.clickTag.bind(this)
    }

    clickTag = (event : any) => {
        this.setState({
            clickThirdTag : event.target.innerHTML
        })
        this.props.clickThird(event.target.innerHTML)
    }

    render() {
        return(
            <div className= 'CTmain'>
            <div className="CTpart1"></div>
             <div className="CTwhiteBox">
             <div className="CTxIcon">
                    <img className="CTxIconBtn" src="../img/xIcon.png" onClick={(e) => this.clickTag(e)}/>
                </div>
                <div className="CTmainText">#태그 선택</div>
                <div className="CTsubText">그 사람의 어떤 모습을 특히 좋아하나요?💬</div>
                <div className="CTtags">
                    <div className="CTrowTag">
                        <div className="CTeachTagGreen" onClick={(e) => this.clickTag(e)}>#좋은 에너지를 주고</div>
                        <div className="CTeachTagGreen" onClick={(e) => this.clickTag(e)}>#현명하고</div>
                    </div>
    
                    <div className="CTrowTag">
                        <div className="CTeachTagGreen" onClick={(e) => this.clickTag(e)}>#유쾌하고</div>
                        <div className="CTeachTagGreen" onClick={(e) => this.clickTag(e)}>#당당하고</div>
                    </div>
    
                    <div className="CTrowTag">
                        <div className="CTeachTagGreen" onClick={(e) => this.clickTag(e)}>#성실하고</div>
                        <div className="CTeachTagGreen" onClick={(e) => this.clickTag(e)}>#책임감 있고</div>
                    </div>
    
                    <div className="CTrowTag">
                        <div className="CTeachTagGreen" onClick={(e) => this.clickTag(e)}>#배려하고</div>
                        <div className="CTeachTagGreen" onClick={(e) => this.clickTag(e)}>#추진력 있고</div>
                    </div>
    
                    <div className="CTrowTag">
                        <div className="CTeachTagGreen" onClick={(e) => this.clickTag(e)}>#속 깊고</div>
                        <div className="CTeachTagGreen" onClick={(e) => this.clickTag(e)}>#주변을 챙기고</div>
                    </div>
    
                    <div className="CTrowTag">
                        <div className="CTeachTagGreen" onClick={(e) => this.clickTag(e)}>#결단력 있고</div>
                        <div className="CTeachTagGreen" onClick={(e) => this.clickTag(e)}>#꼼꼼하고</div>
                    </div>

                    <div className="CTrowTag">
                        <div className="CTeachTagGreen" onClick={(e) => this.clickTag(e)}>#용기 있고</div>
                        <div className="CTeachTagGreen" onClick={(e) => this.clickTag(e)}>#열정적이고</div>
                    </div>

                    <div className="CTrowTag">
                        <div className="CTeachTagGreen" onClick={(e) => this.clickTag(e)}>#늘 꾸준하고</div>
                        <div className="CTeachTagGreen" onClick={(e) => this.clickTag(e)}>#노력하고</div>
                    </div>

                    <div className="CTrowTag">
                        <div className="CTeachTagGreen" onClick={(e) => this.clickTag(e)}>#함께 즐기고</div>
                        <div className="CTeachTagGreen" onClick={(e) => this.clickTag(e)}>#스스로를 사랑하고</div>
                    </div>
                </div>
             </div>
            <div className="CTpart2"></div>    
        </div>
        )
    }
}
export default ChooseTag3;