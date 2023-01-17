import React from 'react';
import './books.css';


function Books() {
  const alladinIcon = <img src='https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/stores/aladdin.png' className="bookStoreIcon" alt="aladin"/>
  const kyoboIcon = <img src='https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/stores/kyobo.png' className="bookStoreIcon" alt="kyobo"/>
  const naverIcon = <img src='https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/stores/naver.png' className="bookStoreIcon" alt="naver"/>
  const yes24Icon = <img src='https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/stores/yes24.png' className="bookStoreIcon" alt="yes24"/>

  const drawBooks = () => {
    
    
    let bookSection1 = <div className="singleBookContainer">
      <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/covers/19.jpg" alt="book19" className="bookCoverImage"/>
      <h5><a href="https://needleworm.github.io/ai_voca" target="_blank"  rel="noreferrer">AI족집게 수능영단어 <i className="fas fa-external-link-alt"></i></a></h5>
      <p className="bookDescription">2023.01. 생능북스</p>
      <ul className="list-inline">
        <li><a href="https://www.aladin.co.kr/shop/wproduct.aspx?ISBN=8970506667" target="_blank"  rel="noreferrer">{alladinIcon}</a></li>
        <li><a href="https://product.kyobobook.co.kr/detail/S000200661730" target="_blank"  rel="noreferrer">{kyoboIcon}</a></li>
        <li><a href="https://search.shopping.naver.com/book/catalog/37153902621" target="_blank"  rel="noreferrer">{naverIcon}</a></li>
        <li><a href="http://www.yes24.com/Product/Goods/116904678" target="_blank"  rel="noreferrer">{yes24Icon}</a></li>
      </ul>
    </div>


    let soon = <div className="singleBookContainer">
      <img src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/books/covers/soon.jpg" alt="book1" className="bookCoverImage"/>
      <h5>Coming Soon</h5>
      <p className="bookDescription">...</p>
      <ul className="list-inline">
        <li><a href="#" target="_blank" rel="noreferrer">{alladinIcon}</a></li>
        <li><a href="#" target="_blank"  rel="noreferrer">{kyoboIcon}</a></li>
        <li><a href="#" target="_blank"  rel="noreferrer">{naverIcon}</a></li>
        <li><a href="#" target="_blank"  rel="noreferrer">{yes24Icon}</a></li>
      </ul>
    </div>


    return(
      <div className="bookContainer">
        {soon}
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