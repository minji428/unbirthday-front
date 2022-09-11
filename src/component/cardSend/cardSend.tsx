import React, {Component} from 'react';
import '../../static/cardSend/cardSend.css';

class cardSend extends React.Component<{}, any> {
    constructor(props: any){
        super(props)

        this.state = {

        }

        this.yelloCard = this.yelloCard.bind(this)
        this.orangeCard = this.orangeCard.bind(this)
        this.whiteCard = this.whiteCard.bind(this)
        this.purpleCard = this.purpleCard.bind(this)
    }

    yelloCard(){
        window.location.href = '/cardSend/yellow'
    }

    orangeCard(){

    }

    whiteCard(){

    }

    purpleCard(){

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
                        <img onClick={this.yelloCard} className="CS1card" src="../img/_.png"/>
                        <img onClick={this.orangeCard} className="CS1card" src="../img/orange.png"/>
                    </div>
                            
                    <div className="CS1card-1st">
                        <img onClick={this.whiteCard} className="CS1card" src="../img/newwhite.png"/>
                        <img onClick={this.purpleCard} className="CS1card" src="../img/pink.png"/>
                    </div>
                </div>
               
            </div>
        )
    }
}
export default cardSend;