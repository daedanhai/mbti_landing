import MvAnddown from '../assets/images/mv_anddown.png';
import MvIosdown from '../assets/images/mv_iosdown.png';


function MainVisual() {
  return (
    <div className="mainvisual-container">
        <div className="inner">
            <div className="txt-container">
                <div className="title-wrap">
                    <h2>솔직한 익명</h2>
                    <h2>
                        <b>MBTI</b> 커뮤니티,믑티
                    </h2>
                </div>
                <hr />
                <div className="down-wrap">
                    <p>DOWNLOAD NOW</p>
                    <ul>
                        <li><a href="#"><img src={MvAnddown} alt="믑티 안드로이드 앱 다운로드 바로가기"/></a></li>
                        <li><a href="#"><img src={MvIosdown} alt="믑티 IOS 앱 다운로드 바로가기"/></a></li>
                    </ul>
                </div>
            </div>
            
            <div className="visual-wrap">

            </div>

        </div>
    </div>
  );
}

export default MainVisual;
