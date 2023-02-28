import React, {Component} from 'react';
import ReactGA from "react-ga4";
import '../../static/cardSend/cardSend.css';
import { SafeAreaView } from 'react-native';
class cardSend extends React.Component<{}, any> {
    constructor(props: any){
        super(props)

        this.state = {

        }

        this.backButton = this.backButton.bind(this)
        this.yelloCard = this.yelloCard.bind(this)
        this.orangeCard = this.orangeCard.bind(this)
        this.whiteCard = this.whiteCard.bind(this)
        this.purpleCard = this.purpleCard.bind(this)
    }

    yelloCard(){
        ReactGA.event({
            category: "Button",
            action: "choose_card_yellow",
            label: "cardSend",
          });
        window.location.href = '/cardsend/yellow'
    }

    orangeCard(){
        ReactGA.event({
            category: "Button",
            action: "choose_card_orange",
            label: "cardSend",
        });
        window.location.href = '/cardsend/orange'
    }

    whiteCard(){
        ReactGA.event({
            category: "Button",
            action: "choose_card_white",
            label: "cardSend",
        });
        window.location.href = '/cardsend/white'
    }

    purpleCard(){
        ReactGA.event({
            category: "Button",
            action: "choose_card_purple",
            label: "cardSend",
        });
        window.location.href = '/cardsend/purple'
    }

    backButton(){
        window.location.href = '/'
    }

    clickLogo(){
        window.location.href = 'https://unbirthday.kr'
    }

    render() {
        return(
            <SafeAreaView style={{backgroundColor:"#393939"}}>

            
            <div className= 'CS1main'>
                {/* <div className='logo' onClick={this.clickLogo}>
                    <img src="../../img/bt_logo.png"/>
                </div> */}
                <div className="CS1btn">
                    <img src="../img/back.png" className="CS1backBtn" onClick={this.backButton}/>
                </div>
                <div className='CS1mainText'>
                        그 사람을 깜짝 놀래켜줄<br></br>
                        카드를 선택해주세요.
                </div>
                <div className="CS1cards">
                    <div className="CS1card-1st">
                        <img onClick={this.yelloCard} className="CS1card CS1card-first"  src="../img/yellow.png"/>
                        <img onClick={this.orangeCard} className="CS1card CS1card-second"  src="../img/orange.png"/>
                    </div>
                            
                    <div className="CS1card-2nd">
                        <img onClick={this.whiteCard} className="CS1card CS1card-third" src="../img/newwhite.png"/>
                        <img onClick={this.purpleCard} className="CS1card CS1card-fourth" src="../img/pink.png"/>
                    </div>
                </div>
               
            </div>
            </SafeAreaView>
        )
    }
}
export default cardSend;