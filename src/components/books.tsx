import React from 'react';
import './books.css';


function Books() {
  const alladinIcon = <img src='https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/stores/aladdin.png' className="bookStoreIcon" alt="aladin"/>
  const kyoboIcon = <img src='https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/stores/kyobo.png' className="bookStoreIcon" alt="kyobo"/>
  const naverIcon = <img src='https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/stores/naver.png' className="bookStoreIcon" alt="naver"/>
  const yes24Icon = <img src='https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/stores/yes24.png' className="bookStoreIcon" alt="yes24"/>

  const drawBooks = () => {
    let bookSection1 = <div className="singleBookContainer">
      <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/covers/19.png" alt="book1" className="bookCoverImage"/>
      <h5>AI족집게 수능영단어</h5>
      <p className="bookDescription">2023.2. 생능북스</p>
      <ul className="list-inline">
        <li><a href="#" target="_blank" rel="noreferrer">{alladinIcon}</a></li>
        <li><a href="#" target="_blank"  rel="noreferrer">{kyoboIcon}</a></li>
        <li><a href="#" target="_blank"  rel="noreferrer">{naverIcon}</a></li>
        <li><a href="#" target="_blank"  rel="noreferrer">{yes24Icon}</a></li>
      </ul>
    </div>


    return(
      <div className="bookContainer">

        {bookSection1}
      </div>
    )
  }

  const sectionTitle = () => {
    return(
      <div className="row">
        <div className="col-lg-12 text-center">
            <h2 className="section-heading subpageHeading">Books</h2>
        </div>
      </div>
    )
  }

  return (
      <section id="books" className="animated bounceInDown">{sectionTitle()}{drawBooks()}
    </section>
  );
}
  
export default Books;