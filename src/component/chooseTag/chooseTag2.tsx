import React, {Component} from 'react';
import '../../static/chooseTag/chooseTag.css';
{/* <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"></link> */}


class ChooseTag2 extends React.Component<{}, any> {
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
                <div className="CTsubText">말해주고 싶은 그 사람만의 분위기는 무엇인가요?💬</div>
                <div className="CTtags">
                    <div className="CTrowTag">
                        <div className="CTeachTagBlue">#유잼인</div>
                        <div className="CTeachTagBlue">#포근한</div>
                    </div>
    
                    <div className="CTrowTag">
                        <div className="CTeachTagBlue">#빛이 나는</div>
                        <div className="CTeachTagBlue">#한여름 사이다 같은</div>
                    </div>
    
                    <div className="CTrowTag">
                        <div className="CTeachTagBlue">#아이처럼 밝은</div>
                        <div className="CTeachTagBlue">#친근한</div>
                    </div>
    
                    <div className="CTrowTag">
                        <div className="CTeachTagBlue">#봄날의 햇살같은</div>
                        <div className="CTeachTagBlue">#어른스러운</div>
                    </div>
    
                    <div className="CTrowTag">
                        <div className="CTeachTagBlue">#닮고 싶은</div>
                        <div className="CTeachTagBlue">#시크한</div>
                    </div>
    
                    <div className="CTrowTag">
                        <div className="CTeachTagBlue">#소나무처럼 곧은</div>
                        <div className="CTeachTagBlue">#마이웨이를 가는</div>
                    </div>
                </div>
             </div>
            <div className="CTpart2"></div>    
        </div>
        )
    }
}
export default ChooseTag2;