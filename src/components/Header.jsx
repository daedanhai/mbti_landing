
import LogoType from '../assets/images/logo_type.svg';
import LogoBeta from '../assets/images/logo_beta.svg';
import IosDown from '../assets/images/h_iosdown.png';
import AndDown from '../assets/images/h_anddown.png';

function Header() {
  return (
    <header id="header">
      <div className="inner">
        <a href="/" className="logo">
          <span className="type"><img src={LogoType} alt='믑티'/></span>
          <span className="beta"><img src={LogoBeta} alt='beta'/></span>
        </a>
        <ul className="down-wrap">
          <li><a href="#"><img src={IosDown} alt='ios_down'/></a></li>
          <li><a href="#"><img src={AndDown} alt='and_down'/></a></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
