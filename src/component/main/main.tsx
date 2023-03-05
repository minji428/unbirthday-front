import React, {Component} from 'react';
import '../../static/main.css';
import '../../static/pc_ver/pc_ver.css';
import * as service from '../../service/service';
import styled from 'styled-components';
import { keyframes } from "styled-components";
import ReactGA from "react-ga4";
import {View,StatusBar} from "react-native";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
// import {SafeAreaView} from 'react-native-safe-area-context';

class main extends React.Component<{}, any> {
    constructor(props: any){
        super(props)

        this.state = {
            receiverName : [],
        }
        
        this.cardSend = this.cardSend.bind(this)
    }

    componentDidMount(): void {
        service.anyService("/main", "get", this.mainCallback)
    }

    isOnMobile(): boolean {
        let details = navigator.userAgent
        let regexp = /android|iphone|kindle|ipad/i
        let isMobileDevice = regexp.test(details)

        return isMobileDevice
    }
    
    mainCallback = (response: any) => {
        let arr = new Array();
        const receiver = response.data.data

        receiver.forEach((element: any) => {
          arr.push(element.name)
        })
        this.setState({
            receiverName : arr
        })
    }

    cardSend(){
        ReactGA.event({
            category: "Button",
            action: "cardsend",
            label: "home",
        });
        window.location.href = '/cardsend'
    }

    mycards() {
        ReactGA.event({
            category: "Button",
            action: "to_mypage",
            label: "home",
        });
        if(sessionStorage.getItem("id") === null) {
            window.location.href = '/login'
        } else {
            window.location.href = '/mypage'
        }
        
    }

    instagram(){
        window.location.href = 'https://instagram.com/happy__un_birthday?igshid=Zjc2ZTc4Nzk='
    }   

    render() {
        if(!this.isOnMobile()) {
            return (
                <div className='pcMain'>
                    <div className="parties">
                        <img src="../../img/colors.png"/>
                        <img src="../../img/colors.png"/>
                    </div>
                    <div className="mains">
                        <img className="pcLogo" src="../../img/bt_logo.png"/>
                        <div className='texts'>
                            생일이 아니더라도, 오늘을 축하해!<br></br>
                            모바일로 언버스데이 카드를 주고 받아 보세요 :)
                        </div>
                    </div>
                </div>
            )
        } else {
            return(
                <SafeAreaProvider>
                    <StatusBar backgroundColor={'#393939'}/>
                    <SafeAreaView style={{flex:1,backgroundColor:"#393939",marginTop:StatusBar.currentHeight}}>
                        <View>
                        <div className= 'HomeMain'>
                            <div className="happyUnbirthday">
                                <img src="./img/bt_logo.png"/>
                            </div>
                        
                            <div className="name-heart">
                                <div className='heartimg'>
                                    <img src='./img/heart.png'/>
                                </div>
                                <div className="names">
                                    <div className="NameRow"> 
                                        <div>{this.state.receiverName[0]}</div>
                                        <div>{this.state.receiverName[1]}</div>
                                    </div>
                                    <div className="NameRow">
                                        <div className="insideRow2">
                                            <div>{this.state.receiverName[2]}</div>
                                            <div>{this.state.receiverName[3]}</div>
                                        </div> 
                                        <div className="insideRow2">
                                            <div>{this.state.receiverName[4]}</div>
                                            <div>{this.state.receiverName[5]}</div>
                                        </div>
                                    </div>
                                    <div className="NameRow"> 
                                        <div className="insideRow3">
                                            <div>{this.state.receiverName[6]}</div>
                                            <div>{this.state.receiverName[7]}</div>
                                            <div>{this.state.receiverName[8]}</div>
                                            <div>{this.state.receiverName[9]}</div>
                                            <div>{this.state.receiverName[10]}</div>
                                            <div>{this.state.receiverName[11]}</div>
                                        </div>
                                    </div>
                                    <div className="NameRow"> 
                                        <div className="insideRow3">
                                            <div>{this.state.receiverName[12]}</div>
                                            <div>{this.state.receiverName[13]}</div>
                                            <div>{this.state.receiverName[14]}</div>
                                            <div>{this.state.receiverName[15]}</div>
                                            <div>{this.state.receiverName[16]}</div>
                                            <div>{this.state.receiverName[17]}</div>
                                        </div>
                                    </div>
                                        <div className="NameRow"> 
                                        <div className="insideRow3">
                                            <div>{this.state.receiverName[18]}</div>
                                            <div>{this.state.receiverName[19]}</div>
                                            <div>{this.state.receiverName[20]}</div>
                                            <div>{this.state.receiverName[21]}</div>
                                            <div>{this.state.receiverName[22]}</div>
                                        </div>
                                    </div>
                                    <div className="NameRow"> 
                                        <div className="insideRow6">
                                            <div>{this.state.receiverName[23]}</div>
                                            <div>{this.state.receiverName[24]}</div>
                                            <div>{this.state.receiverName[25]}</div>
                                            <div>{this.state.receiverName[26]}</div>
                                            <div>{this.state.receiverName[27]}</div>
                                        </div>
                                    </div>
                                    <div className="NameRow"> 
                                        <div className="insideRow7">
                                            <div>{this.state.receiverName[28]}</div>
                                            <div>{this.state.receiverName[29]}</div>
                                            <div>{this.state.receiverName[30]}</div>
                                            <div>{this.state.receiverName[31]}</div>
                                        </div>
                                    </div>
                                    <div className="NameRow"> 
                                        <div className="insideRow8">
                                            <div>{this.state.receiverName[32]}</div>
                                            <div>{this.state.receiverName[33]}</div>
                                            <div>{this.state.receiverName[34]}</div>
                                        </div>
                                    </div>
                                    <div className="NameRow"> 
                                        <div className="insideRow9">
                                            <div>{this.state.receiverName[35]}</div>
                                            <div>{this.state.receiverName[36]}</div>
                                        </div>
                                    </div>
                                    <div className="NameRow"> 
                                        <div className="insideRow3">
                                            <div>{this.state.receiverName[37]}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ment">
                                <div>
                                    바로 지금 언버스데이를 축하받은 사람들
                                </div>
                                <div>
                                    생일이 아닌 오늘을 축하해!
                                </div>
                            </div>

                            <div className="btns">
                                <div className="btn1">
                                    <img src="../img/bt_send_card.png" onClick={this.cardSend}></img>
                                </div>
                                <div className="btn2">
                                    <img src="../img/bt_mycards.png" onClick={this.mycards}></img>
                                </div>
                            </div>

                            <div className="instagram">
                                <img src="../img/bt_insta.png" onClick={this.instagram}/>
                            </div>
                        </div>
                    </View>                            
                </SafeAreaView> 
            </SafeAreaProvider>                         
            )
        }

    }
}
export default main;

const hue = keyframes`
 from {
   -webkit-filter: hue-rotate(0deg);
 }
 to {
   -webkit-filter: hue-rotate(-360deg);
 }
`;
const AnimatedGradientText = styled.h1`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* align-items: center; */
    flex:1.5;
    font-family: 'GmarketSansMedium','serif', 'sans-serif', 'monospace', 'X';
    width: 100%;

    font-size: 12pt;
    margin-bottom: 5%;

  color: #f35626;
  background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: ${hue} 10s infinite linear;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-feature-settings: "kern";
  font-size: 48px;
  font-weight: 700;
  line-height: 48px;
  overflow-wrap: break-word;
  text-align: center;
  text-rendering: optimizelegibility;
  -moz-osx-font-smoothing: grayscale;
`;