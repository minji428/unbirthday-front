import React, {Component} from 'react';
// import {StyleSheet} from 'react-native';
import '../../static/gotten/tagGotten.css';

class tagGotten extends React.Component<{}, any> {
    constructor(props: any){
        super(props)

        this.state = {

        }
    }

    render() {
        return(
            <div className= 'TGmain'>
            <div className ="TGstatus">
                <img src="../img/back.png" className="TGbackBtn"/>
                <div className ="TGmainText">
                    받은 언버스데이 #태그
                </div>
            </div>
            <div className="TGtags">
                <div className="TGrow">
                    <div className="TGrowText">
                        나의 평소 모습은?
                    </div>
                    <div className="TGrowTag">
                        <div className="TGpink-BlankTag">#조각 같은</div>
                        <div className="TGgreen-BlankTag">#모자르지만 착한</div>
                    </div>
                </div>
    
                <div className="TGrow">
                    <div className="TGrowText">
                        나만의 분위기는?
                    </div>
                    <div className="TGrowTag">
                        <div className="TGblue-BlankTag">#시크한</div>
                        <div className="TGblue-Tag">#빛이 나는</div>
                    </div>
                </div>
    
                <div className="TGrow">
                    <div className="TGrowText">
                        사람들이 좋아하는 나의 모습은?
                    </div>
                    <div className="TGrowTag">
                        <div className="TGgreen-Tag">#당당하고</div>
                        <div className="TGBlankTag"></div>
                    </div>
                </div>
    
                <div className="TGrow">
                    <div className="TGrowText">
                        나는 매사에 어떤 사람?
                    </div>
                    <div className="TGrowTag">
                        <div className="TGorange-BlankTag">#현명한</div>
                        <div className="TGBlankTag"></div>
                    </div>
                </div>
            </div>
            
            <div className="TGdirection">
                <div className="TGnotice">
                    <img className= "TGnoticeImg" src="../img/notice.png"/>
                    <div className="TGnoticeText">&emsp;&emsp;2번 이상 받은 태그는 색이 채워져요.</div>
                </div>
                <div className="TGshare">공유하기</div>
            </div>
        </div>
  
        )
        
    }
}
export default tagGotten;