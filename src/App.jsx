import './assets/fonts/pretendard.css';
import './assets/fonts/pretendard-subset.css';
import './assets/styles/reset.css';
import './assets/styles/style.scss';

import Header from './components/Header';
import MainVisual from './components/MainVisual';

function App() {
  return (
    <>
      <Header />
      <div className='contnents-container'>
        <div className='inner'>
          <MainVisual />
      
        </div>
      </div>
    </>
  );
}

export default App;
