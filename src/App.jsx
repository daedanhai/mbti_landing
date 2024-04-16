import './assets/fonts/pretendard.css';
import './assets/fonts/pretendard-subset.css';
import './assets/styles/reset.css';
import './assets/styles/global.css';
import './assets/styles/style.scss';

import Header from './components/Header';
import MainVisual from './components/MainVisual';


import Sec01Phone from './assets/images/section01_phone.png';
import Sec01Obj01 from './assets/images/section01_obj01.png';
import Sec01Obj02 from './assets/images/section01_obj02.png';
import Sec01Obj03 from './assets/images/section01_obj03.png';
import Sec01Obj04 from './assets/images/section01_obj04.png';

import Sec02Sticker01 from './assets/images/section02_sticker01.png';
import Sec02Sticker02 from './assets/images/section02_sticker02.png';

import istj from './assets/images/mbti_istj.png';
import isfp from './assets/images/mbti_isfp.png';
import intj from './assets/images/mbti_intj.png';
import isfj from './assets/images/mbti_isfj.png';
import intp from './assets/images/mbti_intp.png';
import infp from './assets/images/mbti_infp.png';
import enfp from './assets/images/mbti_enfp.png';
import estp from './assets/images/mbti_estp.png';

import esfp from './assets/images/mbti_esfp.png';
import estj from './assets/images/mbti_estj.png';
import enfj from './assets/images/mbti_enfj.png';
import entj from './assets/images/mbti_entj.png';
import esfj from './assets/images/mbti_esfj.png';
import entp from './assets/images/mbti_entp.png';
import infj from './assets/images/mbti_infj.png';
import istp from './assets/images/mbti_istp.png';

function App() {
  return (
    <>
      <Header />
      <div className='contnents-container'>
        <div className='inner'>
          <MainVisual />
          
          <div className='section section01'>
            <div className='inner'>
              
              <div className='title-wrap'>
                <p>MBTI로 솔직하게</p>
                <h2>새로운 방식의 익명 소통 커뮤니티</h2>
              </div>

              <div className='circle-wrap'>

                <div className='circle'>
                  <div className='phone'><img src={Sec01Phone} alt='phone'/></div>
                </div>

                <div className='obj obj01'><img src={Sec01Obj01}/></div>
                <div className='obj obj02'><img src={Sec01Obj02}/></div>
                <div className='obj obj03'><img src={Sec01Obj03}/></div>
                <div className='obj obj04'><img src={Sec01Obj04}/></div>

              </div>

            </div>
          </div>

          <div className='section section02'>
            <div className='inner'>

              <div className='sticker-container'>
                <div className='sticker-wrap'>
                  <div className='sticker01'><img src={Sec02Sticker01}/></div>
                  <div className='sticker02'><img src={Sec02Sticker02}/></div>
                </div>
              </div>

              <div className='mbti-container'>

                <div className='mbti-wrap'>
                  <div className='mbti-box top'>
                      <div className='mbti'><img src={istj}/></div>
                      <div className='mbti'><img src={isfp}/></div>
                      <div className='mbti'><img src={intj}/></div>
                      <div className='mbti'><img src={isfj}/></div>
                      <div className='mbti'><img src={intp}/></div>
                      <div className='mbti'><img src={infp}/></div>
                      <div className='mbti'><img src={enfp}/></div>
                      <div className='mbti'><img src={estp}/></div>
                    </div>
                    
                    <div className='mbti-box bottom'>
                      <div className='mbti'><img src={esfp}/></div>
                      <div className='mbti'><img src={estj}/></div>
                      <div className='mbti'><img src={enfj}/></div>
                      <div className='mbti'><img src={entj}/></div>
                      <div className='mbti'><img src={esfj}/></div>
                      <div className='mbti'><img src={entp}/></div>
                      <div className='mbti'><img src={infj}/></div>
                      <div className='mbti'><img src={istp}/></div>
                    </div>
                </div>

                 

              </div>
             
            </div>
          </div>

          <div className='section section03'>
            <div className='inner'>
              <div className='info-box info-box01'>
                <div className='img-wrap'></div>
                <div className='txt-wrap'>
                  <div className='title-wrap'>
                    <p>MBTI 필터</p>
                    <h3>보고싶은 MBTI 성향 필터링</h3>
                  </div>
                  <p>MBTI 필터를 사용하여 보고싶은 유형의 MBTI의 게시글을필터링 하여 확인 할 수 있습니다. 나와 같은 MBTI나 성향 별로 선택하여 게시글을 즐기세요.</p>
                </div>
              </div>
              <div className='info-box info-box02'></div>
              <div className='info-box info-box03'></div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
