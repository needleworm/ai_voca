import React, {Component} from 'react';
import './books.css';


class Books extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  drawBooks(){
    let bookSection1 = <div className="singleBookContainer">
      <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/covers/1.jpg" alt="book1" className="bookCoverImage"/>
      <h5><a href="https://needleworm.github.io/bhban_rpa" target="_blank"  rel="noreferrer">
          6개월 치 업무를 하루 만에 끝내는 업무자동화 <i className="fas fa-external-link-alt"></i>
        </a>
        </h5>
      <p className="bookDescription">2020.12. 생능출판사</p>
      <ul className="list-inline">
        <li><a href="https://www.aladin.co.kr/shop/wproduct.aspx?ISBN=8970504745&start=pnaver_02" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/stores/aladdin.png" className="bookStoreIcon" alt="aladin"/></a></li>
        <li><a href="http://www.kyobobook.co.kr/product/detailViewKor.laf?mallGb=KOR&ejkGb=KOR&linkclassName=&barcode=9788970504742" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/stores/kyobo.png" className="bookStoreIcon" alt="kyobo"/></a></li>
        <li><a href="https://book.naver.com/bookdb/book_detail.nhn?bid=17665326" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/stores/naver.png" className="bookStoreIcon" alt="naver"/></a></li>
        <li><a href="http://www.yes24.com/Product/Goods/96360166" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/stores/yes24.png" className="bookStoreIcon" alt="yes24"/></a></li>
      </ul>
    </div>

    return(
      <div className="bookContainer">
        {bookSection1}
      </div>
    )
  }

  sectionTitle(){
    return(
      <div className="row">
        <div className="col-lg-12 text-center">
            <h2 className="section-heading subpageHeading">Books</h2>
        </div>
      </div>
    )
  }

  render() {
    return (
      <section id="books" className="animated bounceInDown">
          {this.sectionTitle()}
          {this.drawBooks()}
      </section>
    );
  }
}
  
export default Books;