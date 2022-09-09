import React, {Component} from 'react';
import '../../static/chooseTag/chooseTag.css';
{/* <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"></link> */}


class ChooseTag4 extends React.Component<{}, any> {
    constructor(props: any){
        super(props)

        this.state = {

        }
    }

    render() {
        return(
            <div className= 'CTmain'>
            <div className="CTpart1"></div>
             <div className="CTwhiteBox">
                <img className="CTxIcon" src="../img/xIcon.png"/>
                <div className="CTmainText">#태그 선택</div>
                <div className="CTsubText">그 사람은 매사에 어떤 사람이라고 말해주고 싶나요?💬</div>
                <div className="CTtags">
                    <div className="CTrowTag">
                        <div className="CTeachTagOrange">#좋은 에너지를 주는</div>
                        <div className="CTeachTagOrange">#현명한</div>
                    </div>
    
                    <div className="CTrowTag">
                        <div className="CTeachTagOrange">#유쾌한</div>
                        <div className="CTeachTagOrange">#당당한</div>
                    </div>
    
                    <div className="CTrowTag">
                        <div className="CTeachTagOrange">#성실한</div>
                        <div className="CTeachTagOrange">#책임감 있는</div>
                    </div>
    
                    <div className="CTrowTag">
                        <div className="CTeachTagOrange">#양보하는</div>
                        <div className="CTeachTagOrange">#추진력 있는</div>
                    </div>
    
                    <div className="CTrowTag">
                        <div className="CTeachTagOrange">#속 깊은</div>
                        <div className="CTeachTagOrange">#주변을 챙기는</div>
                    </div>
    
                    <div className="CTrowTag">
                        <div className="CTeachTagOrange">#결단력 있는</div>
                        <div className="CTeachTagOrange">#꼼꼼한</div>
                    </div>

                    <div className="CTrowTag">
                        <div className="CTeachTagOrange">#용기 있는</div>
                        <div className="CTeachTagOrange">#열정적인</div>
                    </div>

                    <div className="CTrowTag">
                        <div className="CTeachTagOrange">#늘 꾸준한</div>
                        <div className="CTeachTagOrange">#노력하는</div>
                    </div>

                    <div className="CTrowTag">
                        <div className="CTeachTagOrange">#함께 즐기는</div>
                        <div className="CTeachTagOrange">#스스로를 사랑하는</div>
                    </div>
                </div>
             </div>
            <div className="CTpart2"></div>    
        </div>
        )
    }
}
export default ChooseTag4;