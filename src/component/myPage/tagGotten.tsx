import React, {Component} from 'react';
// import {StyleSheet} from 'react-native';
import '../../static/gotten/tagGotten.css';
import * as service from '../../service/service'

type Tag = {
    tag: string,
    num: number,
}

type TagGotten = {
    first_tag: Tag[],
    second_tag: Tag[],
    third_tag: Tag[],
    fourth_tag: Tag[],
}

class tagGotten extends React.Component<{}, any> {
    constructor(props: any){
        super(props)

        this.state = {
            tags: [] as TagGotten[],
        }
    }

    componentDidMount() {
        const id = sessionStorage.getItem("id")

        this.getAllTags(id)
    }

    getAllTags = async(id: unknown) => {
        if(typeof id === 'string') {
            const param = {
                id: id,
            }
            service.anyService("/mypage/taggotten", "get", this.getAllTagsCallBack, param)
        } else {
            //id가 없으면?
        }
    }

    getAllTagsCallBack = (response: any) => {
        console.log(response)
        let rData = response.data

        if(rData.rtCode === "00" || rData.rtCode === "09") {
            this.setState({
                tags: rData.data
            })
        } else {
            alert(rData.rtMsg)
        }
    }

    showTag = (num: number, tag: Tag) => {
        let className = ""
        
        //2번 이상 받은 태그는 색깔 채우기
        tag.num === 1 ? className = "-BlankTag" : className = "-Tag"

        if(num === 1) {
            className = "TGpink" + className
        } else if(num === 2) {
            className = "TGblue" + className
        } else if(num === 3) {
            className = "TGgreen" + className
        } else {
            className = "TGorange" + className
        }

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
                        {/* <div className="TGpink-BlankTag">#조각 같은</div>
                        <div className="TGgreen-BlankTag">#모자르지만 착한</div> */}
                        { this.state.tags.first_tag && Object.keys(this.state.tags.first_tag).length > 0
                            ? Object.keys(this.state.tags.first_tag).map(key =>  
                                this.showTag(1, {tag: key, num: this.state.tags.first_tag[key]})
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
                        {/* <div className="TGblue-BlankTag">#시크한</div>
                        <div className="TGblue-Tag">#빛이 나는</div> */}
                        { this.state.tags.first_tag && Object.keys(this.state.tags.first_tag).length > 0 
                            ? Object.keys(this.state.tags.second_tag).map(key =>  
                                this.showTag(2, {tag: key, num: this.state.tags.second_tag[key]})
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
                        {/* <div className="TGgreen-Tag">#당당하고</div>
                        <div className="TGBlankTag"></div> */}
                        { this.state.tags.first_tag && Object.keys(this.state.tags.first_tag).length > 0 
                            ? Object.keys(this.state.tags.third_tag).map(key =>  
                                this.showTag(3, {tag: key, num: this.state.tags.third_tag[key]})
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
                        {/* <div className="TGorange-BlankTag">#현명한</div>
                        <div className="TGBlankTag"></div> */}
                        { this.state.tags.first_tag && Object.keys(this.state.tags.first_tag).length > 0
                            ? Object.keys(this.state.tags.fourth_tag).map(key =>  
                                this.showTag(4, {tag: key, num: this.state.tags.fourth_tag[key]})
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
                <div className="TGshare">공유하기</div>
            </div>
        </div>
  
        )
        
    }
}
export default tagGotten;