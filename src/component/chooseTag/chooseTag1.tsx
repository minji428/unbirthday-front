import React, {Component} from 'react';
import '../../static/chooseTag/chooseTag.css';

class ChooseTag1 extends React.Component<{}, any> {
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
                <div className="CTsubText">그 사람의 모습은 어떤가요?💬</div>
                <div className="CTtags">
                    <div className="CTrowTag">
                        <div className="CTeachTagPink">#귀여운</div>
                        <div className="CTeachTagPink">#킹받는</div>
                    </div>
    
                    <div className="CTrowTag">
                        <div className="CTeachTagPink">#조각 같은</div>
                        <div className="CTeachTagPink">#자꾸 보고 싶은</div>
                    </div>
    
                    <div className="CTrowTag">
                        <div className="CTeachTagPink">#강아지 같은</div>
                        <div className="CTeachTagPink">#고양이 같은</div>
                    </div>
    
                    <div className="CTrowTag">
                        <div className="CTeachTagPink">#마주치면 웃음이 나는</div>
                        <div className="CTeachTagPink">#몇 없어서 소중한</div>
                    </div>
    
                    <div className="CTrowTag">
                        <div className="CTeachTagPink">#닮고 싶은</div>
                        <div className="CTeachTagPink">#사랑스러운</div>
                    </div>
    
                    <div className="CTrowTag">
                        <div className="CTeachTagPink">#눈에서 헤엄치고 싶은</div>
                        <div className="CTeachTagPink">#은은한 광기의</div>
                    </div>
    
                    <div className="CTrowTag">
                        <div className="CTeachTagPink">#모자르지만 착한</div>
                        <div className="CTeachTagPink">#사...사..좋아하는</div>
                    </div>
                </div>
             </div>
            <div className="CTpart2"></div>    
        </div>
        )
    }
}
export default ChooseTag1;