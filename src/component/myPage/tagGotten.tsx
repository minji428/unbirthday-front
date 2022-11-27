import React, {Component} from 'react';
import {Tag, AllTags} from './myCards'

// import {StyleSheet} from 'react-native';
import '../../static/gotten/tagGotten.css';
import * as service from '../../service/service'

interface MyCardsProps {
    tags: AllTags,
}

class TagGotten extends React.Component<MyCardsProps, any> {
    constructor(props: any){
        super(props)

        this.state = {
            tags: this.props.tags
        }
    }

    showTag = (color: string, tag: Tag) => {
        let className = ""
        
        //2번 이상 받은 태그는 색깔 채우기
        tag.num === 1 ? className = `TG${color}-BlankTag` : className = `TG${color}-Tag`

        return (
            <div className={className} key={tag.tag}>{tag.tag}</div>
        )
    }

    handleClickBackBtn = async(e: any) => {
        window.location.href="/mypage"
    }
    
    render() {
        return(
            <div className= 'TGmain'>
            <div className ="TGstatus">
                <img src="../img/back.png" className="TGbackBtn"/>
                <img src="../img/back.png" className="TGbackBtn" onClick={this.handleClickBackBtn} />
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
                            {/* <div className="TGpink-Tag">#조각 같은</div>
                            <div className="TGgreen-Tag">#모자르지만 착한</div>
                            <div className="TGpink-BlankTag">#조각 같은</div>
                            <div className="TGgreen-BlankTag">#모자르지만 착한</div>
                            <div className="TGpink-BlankTag">#조각 같은</div>
                            <div className="TGpink-BlankTag">#조각 같은</div>
                            <div className="TGpink-BlankTag">#조각 같은</div> */}
                            { this.state.tags.first_tag && Object.keys(this.state.tags.first_tag).length > 0
                                ? Object.keys(this.state.tags.first_tag).map(key =>  
                                    this.showTag('pink', {tag: key, num: this.state.tags.first_tag[key]})
                                )
                                : ''
                            }
                        </div>
                </div>
    
                <div className="TGrow">
                    <div className="TGrowText">
                        나만의 분위기는?
                    </div>

                    <div className="TGrowTag">
                        {/* <div className="TGblue-Tag">#시크한</div>
                        <div className="TGblue-BlankTag">#빛이 나는</div>
                        <div className="TGblue-BlankTag">#시크한</div>
                        <div className="TGblue-BlankTag">#빛이 나는</div>
                        <div className="TGblue-BlankTag">#빛이 나는</div> */}
                            { this.state.tags.first_tag && Object.keys(this.state.tags.first_tag).length > 0 
                                ? Object.keys(this.state.tags.second_tag).map(key =>  
                                    this.showTag('blue', {tag: key, num: this.state.tags.second_tag[key]})
                            )
                                : ''
                            }
                        </div>
                        
                </div>
    
                <div className="TGrow">
                    <div className="TGrowText">
                        사람들이 좋아하는 나의 모습은?
                    </div>
                    <div className="TGrowTag">
                            {/* <div className="TGgreen-BlankTag">#당당하고</div>
                            <div className="TGBlankTag"></div> */}
                            { this.state.tags.first_tag && Object.keys(this.state.tags.first_tag).length > 0 
                                ? Object.keys(this.state.tags.third_tag).map(key =>  
                                    this.showTag('green', {tag: key, num: this.state.tags.third_tag[key]})
                                )
                                : ''
                            }
                    </div>
                    
                </div>
    
                <div className="TGrow">
                    <div className="TGrowText">
                        나는 매사에 어떤 사람?
                    </div>
                    <div className="TGrowTag">
                        {/* <div className="TGorange-Tag">#현명한</div>
                        <div className="TGorange-Tag">#빛이나는</div>
                        <div className="TGorange-BlankTag">#현명한</div> */}
                        {/* <div className="TGorange-BlankTag">#빛이나는</div> */}
                        { this.state.tags.first_tag && Object.keys(this.state.tags.first_tag).length > 0
                            ? Object.keys(this.state.tags.fourth_tag).map(key =>  
                                this.showTag('orange', {tag: key, num: this.state.tags.fourth_tag[key]})
                            )
                            : ''
                        }
                    </div>
                </div>
            </div>
            
            <div className="TGdirection">
                <div className="TGnotice">
                    <img className= "TGnoticeImg" src="../img/notice.png"/>
                    <div className="TGnoticeText">&emsp;&emsp;2번 이상 받은 태그는 색이 채워져요.</div>
                </div>
                <img src="../../img/bt_share.png" className="TGshare"/>
            </div>
        </div>
  
        )
        
    }
}
export default TagGotten;