import React from 'react';
import FlipText from './Home/FlipText';

import { BsFillKanbanFill } from "react-icons/bs";


function Home(props) {

  // 공부중인 텍스트 리스트
  const texts = ['React.js', 'Node.js', 'MySQL', 'REACT-NATIVE'];

  return (
    <div className='page'>

      <h2>직접 만들어보는 개발자 전찬혁 입니다</h2>
      {/* <h3>전찬혁의 웹 포트폴리오 입니다.</h3> */}

      <div className='home-content_wrap'>

        <div className='content-frame_wrap'>
          <div className='imgFrame'>
            <div className='flip_card'>
              <div className='front'>
                <div className='front-img_box'>
                  <img src={`${process.env.PUBLIC_URL}/images/id.jpeg`} alt="내 이미지" />
                </div>
                <p className='front_text'>마우스를 올려보세요 ~_~</p>
              </div>
              {/* 아래 이미지 사진으로! */}
              <img src={`${process.env.PUBLIC_URL}/images/char.png`} alt="" className='back' />
            </div>
          </div>
          
        </div>

        <div className='content-text_wrap'>

          {/* <p className='name'>JEON CHAN HYEOK</p>
          <p className='nick_name'>Keyboard Warrior</p> */}

          <div className='home-introduce'>
            <p className='home-introduce_paragraph'>
              안녕하세요, 저는 저에게 <span className='strong'>필요한 서비스를 직접 기획하고 개발하여 사용</span>하는 것을 좋아합니다.
            </p>

            <p className='home-introduce_paragraph'>
              나만의 영단어장과 칸반보드를 만들어 배포했고, <span className='strong'>현재는 운동 기록 앱 서비스와 모임에서 사용할 SNS 서비스를 기획중</span>이며, 이를 실현하기 위해 React-Native와 Node.js 공부를 병행하고 있습니다.
              <br />
              <span className='strong'>칸반보드는 실제로 운영, 사용중이며 불편한 점을 꾸준히 개선하고 있습니다.</span>
            </p>

            <p className='home-introduce_paragraph'>
              <span className='strong'>
              더 좋은 사용자 경험을 제공하기 위해 서비스를 직접 만들고 사용해보며 능력을 발전시키고 있습니다.
              </span>
            </p>

            저의 포트폴리오를 보러 와 주셔서 감사합니다.
          </div>

        </div>

      </div>

      <div className='home-etc_wrap'>

        {/* 할 수 있는 것 */}
        <article className='etc-can_wrap etc_box'>
          <h3 className='etc-title'>
            할 수 있는 것
          </h3>
          <ul className='skill_wrap'>
            <li>
              <img src={`${process.env.PUBLIC_URL}/images/languages/javascript.svg`} alt="" className='skill_img' />
              javascript
            </li>
            <li>
            <img src={`${process.env.PUBLIC_URL}/logo192.png`} alt="" className='skill_img' />
              React.js
            </li>
            <li>
              <img src={`${process.env.PUBLIC_URL}/images/languages/node.png`} alt="" className='skill_img' />
              Node.js : express
            </li>
            <li>
            <img src={`${process.env.PUBLIC_URL}/images/languages/mysql.png`} alt="" className='skill_img' />
              MySQL
            </li>
          </ul>

        </article>
        
        {/* 공부중... */}
        <article className='etc_box'>
          <h3 className='etc-title'>
            공부중...
          </h3>
          <div className='text-animate_wrap'>
            <div>
              <p className='char_txt'>LV.2 신입 개발자</p>
              <img src={`${process.env.PUBLIC_URL}/images/char01.gif`} alt="" className='gif' />
            </div>

            <FlipText texts={texts} size={24} sec={2000} />
          </div>

        </article>

        {/* 내 활동 */}
        <article className='etc-history_wrap etc_box'>
          <h3 className='etc-title'>
            내 활동
          </h3>
          <ul className='history_wrap'>
            <li>그린 아카데미 프론트엔드 과정 수료
              <p className='his_date'>22.11 - 23.05</p>
            </li>
            <li>개발자 모임 Code Channel 운영중
              <p className='his_date'>24.03 ~</p>
            </li>
          </ul>

        </article>

        {/* 블로그 링크 */}
        <article className='etc-link_wrap etc_box'>
          <h3 className='etc-title'>
            내 블로그
          </h3>
          <div className='content-link_wrap'>
            <div className='content-link_box'>

              <a href="https://velog.io/@k_warrior27/posts" target='_blank' rel="noreferrer" title='블로그 바로가기' className='link_text' > <img src="https://velog.velcdn.com/images/hyeongjun/post/5fff0129-f29b-4dfa-b28b-f3af0e11ed4f/image.png" alt="" className='link_img' />
                <span className='blog_link'>
                  KeyBoardWarrior의 블로그
                </span>
              </a>
            </div>
          </div>

        </article>

        {/* 깃허브 링크 */}
        <article className='etc-link_wrap etc_box'>
          <h3 className='etc-title'>
            깃허브
          </h3>
          <div className='content-link_wrap'>
            <div className='content-link_box'>

              <a href="https://github.com/soyedpork27" target='_blank' rel="noreferrer" title='깃허브 바로가기' className='link_text' > <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="" className='link_img' />
                <span className='blog_link'>
                  KeyBoardWarrior의 github
                </span>
              </a>
            </div>
          </div>

        </article>

        {/* 서비스 링크 */}
        <article className='etc-link_wrap etc_box'>
          <h3 className='etc-title service-title'>
            운영중인 서비스
          </h3>
          <div className='content-link_wrap'>
            <div className='content-link_box'>

              <a href="https://kwskanban.netlify.app/" target='_blank' rel="noreferrer" title='서비스 바로가기' className='link_text' > 
                <BsFillKanbanFill className='service-icon' />
                <span className='blog_link'>
                  KeyBoardWarrior의 칸반보드
                </span>
              </a>
            </div>
          </div>

        </article>


      </div>


      {/* <div className='ticker-wrap'>
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
      </div> */}

    </div>
  );
}

export default Home;