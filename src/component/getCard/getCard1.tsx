
import React, {Component} from 'react';
import '../../static/getCard/getCard1.css';
{/* <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"></link> */}


class GetCard1 extends React.Component<{}, any> {
    constructor(props: any){
        super(props)

        this.state = {

        }
    }

    render() {
        return(
            <div className= 'GC1main'>
            <div className="GC1colors">
                <img className="GC1color" src="../img/colors.png"/>
            </div>
            <div className="GC1cakes">
                <img className="GC1cake" src="../img/pinkCake.png"/>
                <div className="GC1texts">
                    <div className="GC1subText">
                      은빈님에게
                    </div>
                    <div className="GC1subText">
                      언버스데이 카드가 도착했어요&nbsp;💌
                    </div>
                </div>
            </div>
            <div className="GC1btns">
                <div className="GC1btn">뭐지?</div>
            </div>
           
        </div>
        )
    }
}
export default GetCard1;