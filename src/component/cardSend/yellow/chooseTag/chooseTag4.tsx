import React, {Component} from 'react';
import '../../../../static/chooseTag/chooseTag.css';

interface cardSendYellowBackFrame{
    clickFourth: any,
}

class ChooseTag4 extends React.Component<cardSendYellowBackFrame, any> {
    constructor(props: any){
        super(props)

        this.state = {
            clickFourthTag: ""
        }
        this.clickTag = this.clickTag.bind(this)
    }

    clickTag = (event : any) => {
        this.setState({
            clickFourthTag : event.target.innerHTML
        })
        this.props.clickFourth(event.target.innerHTML)
    }

    render() {
        return(
            <div className= 'CTmain'>
            <div className="CTpart1"></div>
             <div className="CTwhiteBox">
             <div className="CTxIcon">
                    <img className="CTxIconBtn" src="../img/xIcon.png"/>
                </div>
                <div className="CTmainText">#태그 선택</div>
                <div className="CTsubText">그 사람은 매사에 어떤 사람이라고 말해주고 싶나요?💬</div>
                <div className="CTtags">
                    <div className="CTrowTag">
                        <div className="CTeachTagOrange" onClick={(e) => this.clickTag(e)}>#좋은 에너지를 주는</div>
                        <div className="CTeachTagOrange" onClick={(e) => this.clickTag(e)}>#현명한</div>
                    </div>
    
                    <div className="CTrowTag">
                        <div className="CTeachTagOrange" onClick={(e) => this.clickTag(e)}>#유쾌한</div>
                        <div className="CTeachTagOrange" onClick={(e) => this.clickTag(e)}>#당당한</div>
                    </div>
    
                    <div className="CTrowTag">
                        <div className="CTeachTagOrange" onClick={(e) => this.clickTag(e)}>#성실한</div>
                        <div className="CTeachTagOrange" onClick={(e) => this.clickTag(e)}>#책임감 있는</div>
                    </div>
    
                    <div className="CTrowTag">
                        <div className="CTeachTagOrange" onClick={(e) => this.clickTag(e)}>#양보하는</div>
                        <div className="CTeachTagOrange" onClick={(e) => this.clickTag(e)}>#추진력 있는</div>
                    </div>
    
                    <div className="CTrowTag">
                        <div className="CTeachTagOrange" onClick={(e) => this.clickTag(e)}>#속 깊은</div>
                        <div className="CTeachTagOrange" onClick={(e) => this.clickTag(e)}>#주변을 챙기는</div>
                    </div>
    
                    <div className="CTrowTag">
                        <div className="CTeachTagOrange" onClick={(e) => this.clickTag(e)}>#결단력 있는</div>
                        <div className="CTeachTagOrange" onClick={(e) => this.clickTag(e)}>#꼼꼼한</div>
                    </div>

                    <div className="CTrowTag">
                        <div className="CTeachTagOrange" onClick={(e) => this.clickTag(e)}>#용기 있는</div>
                        <div className="CTeachTagOrange" onClick={(e) => this.clickTag(e)}>#열정적인</div>
                    </div>

                    <div className="CTrowTag">
                        <div className="CTeachTagOrange" onClick={(e) => this.clickTag(e)}>#늘 꾸준한</div>
                        <div className="CTeachTagOrange" onClick={(e) => this.clickTag(e)}>#노력하는</div>
                    </div>

                    <div className="CTrowTag">
                        <div className="CTeachTagOrange" onClick={(e) => this.clickTag(e)}>#함께 즐기는</div>
                        <div className="CTeachTagOrange" onClick={(e) => this.clickTag(e)}>#스스로를 사랑하는</div>
                    </div>
                </div>
             </div>
            <div className="CTpart2"></div>    
        </div>
        )
    }
}
export default ChooseTag4;