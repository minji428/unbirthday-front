import React, {Component} from 'react';
import '../../static/main.css';

class main extends React.Component<{}, any> {
    constructor(props: any){
        super(props)

        this.state = {

        }
    }

    render() {
        return(
            <div className= 'main'>
                <div className="happyUnbirthday">
                    <img src="./img/happyUnbirthday.png"/>
                </div>
                <div className="names">
                    <div>&emsp;&emsp;&emsp;김채윤&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;김채윤&emsp;&emsp;</div>
                    <div>&emsp;&nbsp;&nbsp;장원영&nbsp;김채윤&emsp;&emsp;&emsp;&emsp;장원영&nbsp;김채윤&emsp;</div>
                    <div>&nbsp;장원영&nbsp;김채윤&nbsp;장원영&nbsp;김채윤&nbsp;장원영&nbsp;김채윤&nbsp;</div>
                    <div>&nbsp;김채윤&nbsp;장원영&nbsp;김채윤&nbsp;장원영&nbsp;김채윤&nbsp;장원영&nbsp;</div>
                    <div>&emsp;장원영</div>
                    <div>&emsp;&nbsp;&nbsp;김채윤&nbsp;장원영&nbsp;김채윤&nbsp;장원영&nbsp;김채윤&nbsp; </div>
        
                    <div>&emsp;&emsp;&emsp;장원영&nbsp;김채윤&nbsp;장원영&nbsp;김채윤&nbsp;</div>
                    <div>&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;장원영&nbsp;김채윤&nbsp;장원영&nbsp; </div>
                    <div>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;윤은빈&nbsp;김채윤&emsp; </div>
                    <div>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;김채윤&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  </div>
                    <div> </div>
                </div>
        
                <div className="buttons">
                    <div>카드 보내기</div>
                    <div>내 카드함</div>
                </div>
            </div>
        )
    }
}
export default main;