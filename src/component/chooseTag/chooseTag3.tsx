import React, {Component} from 'react';
import '../../static/chooseTag/chooseTag.css';
{/* <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"></link> */}


class ChooseTag3 extends React.Component<{}, any> {
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
                <div className="CTsubText">그 사람의 어떤 모습을 특히 좋아하나요?💬</div>
                <div className="CTtags">
                    <div className="CTrowTag">
                        <div className="CTeachTagGreen">#좋은 에너지를 주고</div>
                        <div className="CTeachTagGreen">#현명하고</div>
                    </div>
    
                    <div className="CTrowTag">
                        <div className="CTeachTagGreen">#유쾌하고</div>
                        <div className="CTeachTagGreen">#당당하고</div>
                    </div>
    
                    <div className="CTrowTag">
                        <div className="CTeachTagGreen">#성실하고</div>
                        <div className="CTeachTagGreen">#책임감 있고</div>
                    </div>
    
                    <div className="CTrowTag">
                        <div className="CTeachTagGreen">#양보하고</div>
                        <div className="CTeachTagGreen">#추진력 있고</div>
                    </div>
    
                    <div className="CTrowTag">
                        <div className="CTeachTagGreen">#속 깊고</div>
                        <div className="CTeachTagGreen">#주변을 챙기고</div>
                    </div>
    
                    <div className="CTrowTag">
                        <div className="CTeachTagGreen">#결단력 있고</div>
                        <div className="CTeachTagGreen">#꼼꼼하고</div>
                    </div>

                    <div className="CTrowTag">
                        <div className="CTeachTagGreen">#용기 있고</div>
                        <div className="CTeachTagGreen">#열정적이고</div>
                    </div>

                    <div className="CTrowTag">
                        <div className="CTeachTagGreen">#늘 꾸준하고</div>
                        <div className="CTeachTagGreen">#노력하고</div>
                    </div>

                    <div className="CTrowTag">
                        <div className="CTeachTagGreen">#함께 즐기고</div>
                        <div className="CTeachTagGreen">#스스로를 사랑하고</div>
                    </div>
                </div>
             </div>
            <div className="CTpart2"></div>    
        </div>
        )
    }
}
export default ChooseTag3;