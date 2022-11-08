import React, {Component} from 'react';
import '../../static/gotten/cardGotten.css';

class CardGotten extends React.Component<{}, any> {
    constructor(props: any){
        super(props)

        this.state = {

        }
    }

    render() {
        return(
            <div className= 'CGmain'>
            <div className="CGstatus">
                <img src="../img/back.png" className="CGbackBtn"/>
                <div className="CGmainText">
                    받은 언버스데이 카드
                </div>
            </div>
    
            <hr></hr>
    
            <div className="CGcards">
                <div className="CGrow">
                    <div className="CGrowText">
                        9월 3일 토요일
                    </div>
                    <div className="CGrowCard">
                        <img className="CGeachCard" src="../img/newwhite.png"/>
                        <img className="CGeachCard" src="../img/pink.png"/>
                    </div>
                    <div className="CGrowCard">
                        <img className="CGeachCard" src="../img/newwhite.png"/>
                        <img className="CGeachCard" src="../img/pink.png"/>
                    </div>
                </div>
                <div className="CGrowText">
                    9월 4일 일요일
                </div>
                <div className="CGrowCard">
                    <img className="CGeachCard" src="../img/newwhite.png"/>
                    <img className="CGeachCard" src="../img/newwhite.png"/>
                </div>
                <div className="CGrowCard">
                    <img className="CGeachCard" src="../img/newwhite.png"/>
                    {/* <img className="CGeachCard" src=""/> */}
                </div>

                <div className="CGrowText">
                    9월 5일 월요일
                </div>
                <div className="CGrowCard">
                    <img className="CGeachCard" src="../img/newwhite.png"/>
                    {/* <img className="CGeachCard" src="../img/newwhite.png"/> */}
                </div>
                <div className="CGrowCard">
                    {/* <img className="CGeachCard" src="../img/newwhite.png"/> */}
                    {/* <img className="CGeachCard" src=""/> */}
                </div>
            </div>
        </div>
  
        )
        
    }
}
export default CardGotten;