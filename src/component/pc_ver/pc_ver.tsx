import React, {Component} from 'react';
import '../../static/pc_ver.css';
class main extends React.Component<{}, any> {

    render() {
        return(
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
    }
}
export default main;