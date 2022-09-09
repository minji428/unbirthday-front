import React, {Component} from 'react';
import '../../static/cardSend/cardSend1.css';
{/* <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"></link> */}


class cardSend1 extends React.Component<{}, any> {
    constructor(props: any){
        super(props)

        this.state = {

        }
    }

    render() {
        return(
            <div className= 'CS1main'>
                <div className="CS1btn">
                    <img src="../img/back.png" className="CS1backBtn"/>
                </div>
                <div className='CS1mainText'>
                        그 사람을 깜짝 놀래켜줄<br></br>
                        카드를 선택해주세요.
                </div>
                <div className="CS1cards">
                    <div className="CS1card-1st">
                        <img className="CS1card" src="../img/_.png"/>
                        <img className="CS1card" src="../img/orange.png"/>
                    </div>
                            
                    <div className="CS1card-1st">
                        <img className="CS1card" src="../img/newwhite.png"/>
                        <img className="CS1card" src="../img/pink.png"/>
                    </div>
                </div>
               
            </div>
        )
    }
}
export default cardSend1;