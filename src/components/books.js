import React, {Component} from 'react';
import './books.css';


class Books extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  drawBooks(){
    var bookSection1 = <div className="singleBookContainer">
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

    var bookSection2 = <div className="singleBookContainer">
      <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/covers/2.jpg" alt="book2" className="bookCoverImage"/>
      <h5>공학자의 오경묵상</h5>
      <p className="bookDescription">2020.11. BOOKK(부크크)</p>
      <ul className="list-inline">
        <li><a href="https://www.aladin.co.kr/shop/wproduct.aspx?ISBN=K112735243&start=pnaver_02" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/stores/aladdin.png" className="bookStoreIcon" alt="aladin"/></a></li>
        <li><a href="http://pod.kyobobook.co.kr/podBook/podBookDetailView.ink?ejkGb=KOR&barcode=1400000403693" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/stores/kyobo.png" className="bookStoreIcon" alt="kyobo"/></a></li>
        <li><a href="https://book.naver.com/bookdb/book_detail.nhn?bid=17469780" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/stores/naver.png" className="bookStoreIcon" alt="naver"/></a></li>
        <li><a href="http://www.yes24.com/Product/Goods/95590656" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/stores/yes24.png" className="bookStoreIcon" alt="yes24"/></a></li>
      </ul>
    </div>
    
    var bookSection3 = <div className="singleBookContainer">
      <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/covers/3.jpg" alt="book3" className="bookCoverImage"/>
      <h5>공학자의 지혜묵상</h5>
      <p className="bookDescription">2020.05. BOOKK(부크크)</p>
      <ul className="list-inline">
        <li><a href="https://www.aladin.co.kr/shop/wproduct.aspx?ISBN=K452639642&start=pnaver_02" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/stores/aladdin.png" className="bookStoreIcon" alt="aladin"/></a></li>
        <li><a href="http://pod.kyobobook.co.kr/podBook/podBookDetailView.ink?ejkGb=KOR&barcode=1400000378984" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/stores/kyobo.png" className="bookStoreIcon" alt="kyobo"/></a></li>
        <li><a href="https://book.naver.com/bookdb/book_detail.nhn?bid=16369629" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/stores/naver.png" className="bookStoreIcon" alt="naver"/></a></li>
        <li><a href="http://www.yes24.com/Product/Goods/90392271" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/stores/yes24.png" className="bookStoreIcon" alt="yes24"/></a></li>
      </ul>
    </div>
    
    var bookSection4 = <div className="singleBookContainer">
      <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/covers/4.jpg" alt="book4" className="bookCoverImage"/>
      <h5>나는 아직 잊힐 준비가 되지 않았어요</h5>
      <p className="bookDescription">2020.08. BOOKK(부크크)</p>
      <ul className="list-inline">
        <li><a href="https://www.aladin.co.kr/shop/wproduct.aspx?ISBN=K622632023&start=pnaver_02" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/stores/aladdin.png" className="bookStoreIcon" alt="aladin"/></a></li>
        <li><a href="http://pod.kyobobook.co.kr/podBook/podBookDetailView.ink?ejkGb=KOR&barcode=1400000388044" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/stores/kyobo.png" className="bookStoreIcon" alt="kyobo"/></a></li>
        <li><a href="https://book.naver.com/bookdb/book_detail.nhn?bid=16629718" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/stores/naver.png" className="bookStoreIcon" alt="naver"/></a></li>
        <li><a href="http://www.yes24.com/Product/Goods/92154589" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/stores/yes24.png" className="bookStoreIcon" alt="yes24"/></a></li>
      </ul>
    </div>
    
    var bookSection5 = <div className="singleBookContainer">
      <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/covers/5.jpg" alt="book5" className="bookCoverImage"/>
      <h5>법대로 합시다</h5>
      <p className="bookDescription">2016.02. 지식과감성#</p>
      <ul className="list-inline">
        <li><a href="http://digital.kyobobook.co.kr/digital/ebook/ebookDetail.ink?LINK=NVE&category=001&barcode=4801159610081" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/stores/kyobo.png" className="bookStoreIcon" alt="kyobo"/></a></li>
        <li><a href="https://book.naver.com/bookdb/book_detail.nhn?bid=10236421" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/stores/naver.png" className="bookStoreIcon" alt="naver"/></a></li>
        <li><a href="http://www.yes24.com/Product/Goods/30660689" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/stores/yes24.png" className="bookStoreIcon" alt="yes24"/></a></li>
      </ul>
    </div>
    
    var bookSection6 = <div className="singleBookContainer">
      <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/covers/6.jpg" alt="book6" className="bookCoverImage"/>
      <h5>실전 민사소송법</h5>
      <p className="bookDescription">2020.05. BOOKK(부크크)</p>
      <ul className="list-inline">
        <li><a href="https://www.aladin.co.kr/shop/wproduct.aspx?ISBN=K572639625&start=pnaver_02" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/stores/aladdin.png" className="bookStoreIcon" alt="aladin"/></a></li>
        <li><a href="http://pod.kyobobook.co.kr/podBook/podBookDetailView.ink?ejkGb=KOR&barcode=1400000377208" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/stores/kyobo.png" className="bookStoreIcon" alt="kyobo"/></a></li>
        <li><a href="https://book.naver.com/bookdb/book_detail.nhn?bid=16357665" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/stores/naver.png" className="bookStoreIcon" alt="naver"/></a></li>
        <li><a href="http://www.yes24.com/Product/Goods/90250538" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/stores/yes24.png" className="bookStoreIcon" alt="yes24"/></a></li>
      </ul>
    </div>

    var bookSection7 = <div className="singleBookContainer">
      <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/covers/7.jpg" alt="book7" className="bookCoverImage"/>
      <h5>코딩하는 공익</h5>
      <p className="bookDescription">2020.04. 세창출판사</p>
      <ul className="list-inline">
        <li><a href="https://www.aladin.co.kr/shop/wproduct.aspx?ISBN=8955866119&start=pnaver_02" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/stores/aladdin.png" className="bookStoreIcon" alt="aladin"/></a></li>
        <li><a href="http://www.kyobobook.co.kr/product/detailViewKor.laf?mallGb=KOR&ejkGb=KOR&linkclassName=&barcode=9788955866117" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/stores/kyobo.png" className="bookStoreIcon" alt="kyobo"/></a></li>
        <li><a href="https://book.naver.com/bookdb/book_detail.nhn?bid=16340073" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/stores/naver.png" className="bookStoreIcon" alt="naver"/></a></li>
        <li><a href="http://www.yes24.com/Product/Goods/90081924" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/stores/yes24.png" className="bookStoreIcon" alt="yes24"/></a></li>
      </ul>
    </div>
    
    var bookSection8 = <div className="singleBookContainer">
      <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/covers/8.jpg" alt="book8" className="bookCoverImage"/>
      <h5><a href="https://needleworm.github.io/bhban_ai" target="_blank"  rel="noreferrer">
        쉬운 딥러닝 <i className="fas fa-external-link-alt"></i>
        </a>
        </h5>
      <p className="bookDescription">2021.04. 생능출판사</p>
      <ul className="list-inline">
        <li><a href="https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=269891239" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/stores/aladdin.png" className="bookStoreIcon" alt="aladin"/></a></li>
        <li><a href="http://www.kyobobook.co.kr/product/detailViewKor.laf?ejkGb=KOR&mallGb=KOR&barcode=9788970504872&orderClick=LAG&Kc=" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/stores/kyobo.png" className="bookStoreIcon" alt="kyobo"/></a></li>
        <li><a href="https://book.naver.com/bookdb/book_detail.nhn?bid=19007726" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/stores/naver.png" className="bookStoreIcon" alt="naver"/></a></li>
        <li><a href="http://www.yes24.com/Product/Goods/99552196" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/stores/yes24.png" className="bookStoreIcon" alt="yes24"/></a></li>
      </ul>
    </div>

    var bookSection9 = <div className="singleBookContainer">
      <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/covers/9.jpg" alt="book9" className="bookCoverImage"/>
      <h5><a href="https://needleworm.github.io/financebook" target="_blank"  rel="noreferrer">
          내 자산 자동으로 관리하기 <i className="fas fa-external-link-alt"></i>
        </a>
        </h5>
      <p className="bookDescription">2021.07. 생능출판사</p>
      <ul className="list-inline">
        <li><a href="https://digital.kyobobook.co.kr/digital/ebook/ebookDetail.ink?LINK=NVE&category=001&barcode=480D210717470" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/stores/kyobo.png" className="bookStoreIcon" alt="kyobo"/></a></li>
        <li><a href="https://book.naver.com/bookdb/book_detail.nhn?bid=20764734" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/stores/naver.png" className="bookStoreIcon" alt="naver"/></a></li>
          <li><a href="https://ridibooks.com/books/4638000001" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/stores/ridi.jpg" className="bookStoreIcon" alt="ridibooks"/></a></li>
      </ul>
    </div>
    
    var bookSection10 = <div className="singleBookContainer">
      <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/covers/10.jpg" alt="book10" className="bookCoverImage"/>
      <h5><a href="https://needleworm.github.io/101" target="_blank"  rel="noreferrer">
          101가지 컴퓨터 활용팁 <i className="fas fa-external-link-alt"></i>
        </a>
        </h5>
      <p className="bookDescription">2021.07. 생능출판사</p>
      <ul className="list-inline">
        <li><a href="https://www.aladin.co.kr/shop/wproduct.aspx?ISBN=897050494X&start=pnaver_02" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/stores/aladdin.png" className="bookStoreIcon" alt="aladin"/></a></li>
        <li><a href="http://www.kyobobook.co.kr/product/detailViewKor.laf?mallGb=KOR&ejkGb=KOR&linkClass=&barcode=9788970504940" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/stores/kyobo.png" className="bookStoreIcon" alt="kyobo"/></a></li>
        <li><a href="https://book.naver.com/bookdb/book_detail.nhn?bid=20739091" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/stores/naver.png" className="bookStoreIcon" alt="naver"/></a></li>
        <li><a href="http://www.yes24.com/Product/Goods/102593399" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/stores/yes24.png" className="bookStoreIcon" alt="yes24"/></a></li>
      </ul>
    </div>
    
    var bookSection11 = <div className="singleBookContainer">
      <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/covers/11.jpeg" alt="book11" className="bookCoverImage"/>
      <h5>Cheesecake Vol.1</h5>
      <p className="bookDescription">2021.10. BOOKK (부크크)</p>
      <ul className="list-inline">
        <li><a href="http://aladin.kr/p/l4o7A" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/stores/aladdin.png" className="bookStoreIcon" alt="aladin"/></a></li>
        <li><a href="https://book.naver.com/bookdb/book_detail.nhn?bid=21295784" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/stores/naver.png" className="bookStoreIcon" alt="naver"/></a></li>
        <li><a href="http://www.yes24.com/Product/Goods/105138391" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/stores/yes24.png" className="bookStoreIcon" alt="yes24"/></a></li>
      </ul>
    </div>
    
    var bookSection12 = <div className="singleBookContainer">
      <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/covers/12.jpg" alt="book12" className="bookCoverImage"/>
      <h5><a href="https://needleworm.github.io/frontend" target="_blank"  rel="noreferrer">
          HTML, CSS, 자바스크립트 <i className="fas fa-external-link-alt"></i>
        </a>
        </h5>
      <p className="bookDescription">2022.02. 생능북스</p>
      <ul className="list-inline">
        <li><a href="https://www.aladin.co.kr/shop/wproduct.aspx?ISBN=8970505369&start=pnaver_02" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/stores/aladdin.png" className="bookStoreIcon" alt="aladin"/></a></li>
        <li><a href="http://www.kyobobook.co.kr/product/detailViewKor.laf?mallGb=KOR&ejkGb=KOR&linkClass=&barcode=9788970505367" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/stores/kyobo.png" className="bookStoreIcon" alt="kyobo"/></a></li>
        <li><a href="https://book.naver.com/bookdb/book_detail.nhn?bid=21499497" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/stores/naver.png" className="bookStoreIcon" alt="naver"/></a></li>
        <li><a href="http://www.yes24.com/Product/Goods/107010853" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/stores/yes24.png" className="bookStoreIcon" alt="yes24"/></a></li>
      </ul>
    </div>
    
    var bookSection13 = <div className="singleBookContainer">
      <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/covers/13.jpg" alt="book12" className="bookCoverImage"/>
      <h5><a href="https://needleworm.github.io/dataset" target="_blank"  rel="noreferrer">
          142가지 데이터셋 <i className="fas fa-external-link-alt"></i>
        </a>
        </h5>
      <p className="bookDescription">2022.02. 생능북스</p>
      <ul className="list-inline">
        <li><a href="https://www.aladin.co.kr/shop/wproduct.aspx?ISBN=8970505350&start=pnaver_02" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/stores/aladdin.png" className="bookStoreIcon" alt="aladin"/></a></li>
        <li><a href="http://www.kyobobook.co.kr/product/detailViewKor.laf?mallGb=KOR&ejkGb=KOR&linkClass=&barcode=9788970505350" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/stores/kyobo.png" className="bookStoreIcon" alt="kyobo"/></a></li>
        <li><a href="https://book.naver.com/bookdb/book_detail.nhn?bid=21508184" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/stores/naver.png" className="bookStoreIcon" alt="naver"/></a></li>
        <li><a href="http://www.yes24.com/Product/Goods/107036705" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/stores/yes24.png" className="bookStoreIcon" alt="yes24"/></a></li>
      </ul>
    </div>
    
    var bookSection14 = <div className="singleBookContainer">
      <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/covers/14.jpg" alt="book12" className="bookCoverImage"/>
      <h5><a href="https://needleworm.github.io/tech3" target="_blank"  rel="noreferrer">
          가상자산 수업 <i className="fas fa-external-link-alt"></i>
        </a>
        </h5>
      <p className="bookDescription">2022.06. 생능북스</p>
      <ul className="list-inline">
        <li><a href="https://www.aladin.co.kr/shop/wproduct.aspx?ISBN=8970505504&start=pnaver_02" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/stores/aladdin.png" className="bookStoreIcon" alt="aladin"/></a></li>
        <li><a href="http://www.kyobobook.co.kr/product/detailViewKor.laf?mallGb=KOR&ejkGb=KOR&linkClass=&barcode=9788970505503" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/stores/kyobo.png" className="bookStoreIcon" alt="kyobo"/></a></li>
        <li><a href="https://book.naver.com/bookdb/book_detail.naver?bid=22485863" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/stores/naver.png" className="bookStoreIcon" alt="naver"/></a></li>
        <li><a href="http://www.yes24.com/Product/Goods/109708603" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/stores/yes24.png" className="bookStoreIcon" alt="yes24"/></a></li>
      </ul>
    </div>
    
    var bookSection15 = <div className="singleBookContainer">
      <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/covers/15.jpg" alt="book12" className="bookCoverImage"/>
      <h5><a href="https://www.bookk.co.kr/book/view/146587" target="_blank"  rel="noreferrer">
          별처럼 찬란히 빛나는 꿈으로 <i className="fas fa-external-link-alt"></i>
        </a>
        </h5>
      <p className="bookDescription">2022.08. BOOKK(부크크)</p>
      <ul className="list-inline">
        <li><a href="https://www.aladin.co.kr/shop/wproduct.aspx?ISBN=K202839180" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/stores/aladdin.png" className="bookStoreIcon" alt="aladin"/></a></li>
        <li><a href="https://www.bookk.co.kr/book/view/146587" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/stores/kyobo.png" className="bookStoreIcon" alt="kyobo"/></a></li>
        <li><a href="https://search.shopping.naver.com/book/catalog/34370748635" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/stores/naver.png" className="bookStoreIcon" alt="naver"/></a></li>
        <li><a href="http://www.yes24.com/Product/Goods/112344499" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/stores/yes24.png" className="bookStoreIcon" alt="yes24"/></a></li>
      </ul>
    </div>
    
    var bookSection16 = <div className="singleBookContainer">
      <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/covers/16.png" alt="book12" className="bookCoverImage"/>
      <h5><a href="https://needleworm.github.io/dev" target="_blank"  rel="noreferrer">
        비전공이지만 개발자로 먹고삽니다 <i className="fas fa-external-link-alt"></i>
        </a>
        </h5>
      <p className="bookDescription">2022.12. 생능북스</p>
      <ul className="list-inline">
        <li><a href="https://www.aladin.co.kr/shop/wproduct.aspx?ISBN=897050558X" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/stores/aladdin.png" className="bookStoreIcon" alt="aladin"/></a></li>
        <li><a href="https://product.kyobobook.co.kr/detail/S000200326244" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/stores/kyobo.png" className="bookStoreIcon" alt="kyobo"/></a></li>
        <li><a href="https://search.shopping.naver.com/book/catalog/36085390618" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/stores/naver.png" className="bookStoreIcon" alt="naver"/></a></li>
        <li><a href="http://www.yes24.com/product/goods/115621142" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/stores/yes24.png" className="bookStoreIcon" alt="yes24"/></a></li>
      </ul>
    </div>

    return(
      <div className="bookContainer">
        {bookSection16}
        {bookSection15}
        {bookSection14}
        {bookSection13}
        {bookSection12}
        {bookSection11}
        {bookSection10}
        {bookSection9}
        {bookSection8}
        {bookSection1}
        {bookSection7}
        {bookSection3}
        {bookSection2}
        {bookSection6}
        {bookSection4}
        {bookSection5}
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