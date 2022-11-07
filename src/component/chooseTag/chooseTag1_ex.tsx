import React, {Component} from 'react';
import '../../static/chooseTag/chooseTag.css';

class ChooseTag1 extends React.Component<{}, any> {
    constructor(props: any){
        super(props)

        this.state = {
            clickFirstTag: "",
        }

        this.clickTag = this.clickTag.bind(this)
    }

    clickTag = (event : any) => {
        this.setState({
            clickFirstTag : event.target.innerHTML
        })
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
                        <div className="CTeachTagPink" id={'1'} onClick={(e) => this.clickTag(e)}>#귀여운</div>
                        <div className="CTeachTagPink" id={'2'} onClick={(e) => this.clickTag(e)}>#킹받는</div>
                    </div>
    
                    <div className="CTrowTag">
                        <div className="CTeachTagPink" id={'3'} onClick={(e) => this.clickTag(e)}>#조각 같은</div>
                        <div className="CTeachTagPink" id={'4'} onClick={(e) => this.clickTag(e)}>#자꾸 보고 싶은</div>
                    </div>
    
                    <div className="CTrowTag">
                        <div className="CTeachTagPink" id={'5'} onClick={(e) => this.clickTag(e)}>#강아지 같은</div>
                        <div className="CTeachTagPink" id={'6'} onClick={(e) => this.clickTag(e)}>#고양이 같은</div>
                    </div>
    
                    <div className="CTrowTag">
                        <div className="CTeachTagPink" id={'7'} onClick={(e) => this.clickTag(e)}>#마주치면 웃음이 나는</div>
                        <div className="CTeachTagPink" id={'8'} onClick={(e) => this.clickTag(e)}>#몇 없어서 소중한</div>
                    </div>
    
                    <div className="CTrowTag">
                        <div className="CTeachTagPink" id={'9'} onClick={(e) => this.clickTag(e)}>#닮고 싶은</div>
                        <div className="CTeachTagPink" id={'10'} onClick={(e) => this.clickTag(e)}>#사랑스러운</div>
                    </div>
    
                    <div className="CTrowTag">
                        <div className="CTeachTagPink" id={'11'} onClick={(e) => this.clickTag(e)}>#눈에서 헤엄치고 싶은</div>
                        <div className="CTeachTagPink" id={'12'} onClick={(e) => this.clickTag(e)}>#은은한 광기의</div>
                    </div>
    
                    <div className="CTrowTag">
                        <div className="CTeachTagPink" id={'13'} onClick={(e) => this.clickTag(e)}>#모자르지만 착한</div>
                        <div className="CTeachTagPink" id={'14'} onClick={(e) => this.clickTag(e)}>#사...사..좋아하는</div>
                    </div>
                </div>
             </div>
            <div className="CTpart2"></div>    
        </div>
        )
    }
}
export default ChooseTag1;