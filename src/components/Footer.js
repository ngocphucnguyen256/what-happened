import snsIcon1 from '../assets/snsicon-01.png'
import snsIcon2 from '../assets/snsicon-02.png'
import snsIcon3 from '../assets/snsicon-03.png'

const Footer =()=>{






    return(
        <div className="footer">
            <div className=" footer__container">
                    <div className="footer__left">
                        <p className="footer__heading">what happened</p>
                        <p className="footer__desc">[공지] 개인 정보 처리 방침 변경 사전 안내
[공지] 29CM 강남 스토어 영업 종료
[공지] 개인 정보 처리 방침 변경 사전 안내
[공지] iOS 10 이하 버전 지원 중단 안내
[공지] 개인 정보 처리 방침 변경 사전 안내</p>
                    </div>
                    <div className="footer__right">
                            <div className="footer__right--item">
                                <p className="footer__heading">about us</p>
                                <p className="footer__desc">회사 소개
인재 채용
상시 할인 혜택</p>
                            </div>
                            <div className="footer__right--item">
                                <p className="footer__heading">my order</p>
                                <p className="footer__desc">내 주문
주문 배송
취소 / 교환 / 반품 내역
상품 리뷰 내역
증빙 서류 발급</p>
                            </div>
                            <div className="footer__right--item">
                                <p className="footer__heading">my account</p>
                                <p className="footer__desc">회원 정보 수정
회원 등급
마일리지 현황
쿠폰</p>
                            </div>
                            <div className="footer__right--item">
                                <p className="footer__heading">help</p>
                                <p className="footer__desc">1 : 1 상담 내역
상품 Q & A 내역
공지 사항
자주하는 질문
고객의 소리</p>
                            </div>
                    </div>
            </div>
            <div className="footer__copyright">
            <p className="footer__copyright--text">© 2020-2021 what happened corp  l  (주) 왓헤픈 ｜ 대표자 : 홍길동 ｜ 사업자 등록번호 : 356-00-00000 ㅣ test0101@what happened.co.kr
서울특별시 강남구 도산대로 8길 17 ｜ FAX : 070-0000-0000  l  서비스 이용약관  l  개인정보처리방침</p>
            <ul className="footer__copyright--list">
                <li className="footer__copyright--icon"><img src={snsIcon1} alt="icon"/></li>
                <li className="footer__copyright--icon"><img src={snsIcon2} alt="icon"/></li>
                <li className="footer__copyright--icon"><img src={snsIcon3} alt="icon"/></li>
            </ul>
            </div>
        </div>
    )
}


export default Footer