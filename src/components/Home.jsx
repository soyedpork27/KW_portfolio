import React from 'react';
import FlipText from './Home/FlipText';


function Home(props) {

  const texts = ['FRONT END', 'JAVASCRIPT', 'React.js', 'SCSS', 'Node.js', 'MySQL', 'FIGMA'];

  return (
    <div className='page'>
      <h2>HELLO WORLD</h2>
      <h3>전찬혁의 웹 포트폴리오 입니다.</h3>

      <div className='home-content_wrap'>
        <div className='content-frame_wrap'>
          <div className='imgFrame'>
            <div className='flip_card'>
              <div className='front'>
                <img src={`${process.env.PUBLIC_URL}/images/char.png`} alt="짱구 이미지" />
                <p className='front_text'>마우스를 올려보세요 ~_~</p>
              </div>
              {/* 아래 이미지 사진으로! */}
              <img src={`${process.env.PUBLIC_URL}/logo192.png`} alt="" className='back' />
            </div>
          </div>
          
        </div>

        <div className='content-text_wrap'>

          <p className='name'>JEON CHAN HYEOK</p>
          <p className='nick_name'>Keyboard Warrior</p>

          <div className='text-animate_wrap'>
            <img src={`${process.env.PUBLIC_URL}/images/char01.gif`} alt="" className='gif' />

            <FlipText texts={texts} size={24} sec={1700} />

          </div>

          {/* velog 이미지 */}
          {/* 링크 시작 */}

          <div className='content-link_wrap'>
            <div className='content-link_box'>

              <a href="https://velog.io/@k_warrior27/posts" target='_blank' rel="noreferrer" title='블로그 바로가기' className='link_text' > <img src="https://velog.velcdn.com/images/hyeongjun/post/5fff0129-f29b-4dfa-b28b-f3af0e11ed4f/image.png" alt="" className='link_img' />
                <span className='blog_link'>
                  KeyBoardWarrior의 블로그
                </span>
              </a>
            </div>
          </div>



        </div>


      </div>

      <div className='ticker-wrap'>
        <h4 className='ticker-title'>
          WHAT CAN I DO
        </h4>
        <p className='ticker-box'>
          <span className='ticker-text'>
            React
          </span>
          <span className='ticker-text'>
            드래그 이벤트
          </span>
          <span className='ticker-text'>
            node express
          </span>
          <span className='ticker-text'>
            redux
          </span>
          <span className='ticker-text'>
            useContext
          </span>

        </p>
      </div>

    </div>
  );
}

export default Home;