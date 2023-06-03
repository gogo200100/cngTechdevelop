import React from "react";
import '../../styles/font.css';
import '../../styles/index.min.css';
import '../../styles/common.css';
import '../../styles/output.css';

export default function SubPageRental() {
    return (
    <>
      <title>(주)C&amp;G TECH</title>
      {/*------------------------ 구글아이콘 ------------------------*/}
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons+Round"
        rel="stylesheet"
      />
      <link
        href="https://webfontworld.github.io/gmarket/GmarketSans.css"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="/css/font.css" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css"
      />
      <link rel="stylesheet" href="/css/index.min.css" />
      <link rel="stylesheet" href="/css/common.css" />
      <link rel="stylesheet" href="/css/output.css" />
      <button
        type="button"
        id="top_btn"
        x-data="topBtn"
        className="top_btn animate-bounce"
        style={{ display: "inline-block" }}
      >
        <i className="material-icons-round sm:text-3xl">arrow_upward</i>
      </button>
      <header className="on">
        <nav className="lg:container flex items-center justify-between w-full h-full">
          <a
            href="/main"
            className="logo lg:px-[25px] h-[60px] px-4"
          >
            <img src="/img/logo_l_e.svg" className="block h-full logo_l_e" />
          </a>
          <ol className="items-center self-stretch justify-center flex-grow gap-20 lg:flex menu">
            <li>
              <a href="/Sub1" className="">
                기업소개
              </a>
            </li>
            <li>
              <a href="/Sub2" className="">
                제품소개
              </a>
            </li>
            <li>
              <a href="/SubRental" className="">
                렌탈/대여
              </a>
            </li>
            <li>
              <a href="/Sub3" className="">
                문의하기
              </a>
            </li>
          </ol>
          <a
            href="/Sub3"
            className=" button_bg lg:flex"
          >
            문의 바로가기{" "}
            <span className="material-icons-round">chevron_right</span>
          </a>
          <button
            type="button"
            className="h-full w-[80px] btn_menu_btn flex items-center justify-center md:hidden"
          >
            <span className="menu_icon" />
          </button>
        </nav>
      </header>
      <div className="hidden menu_close" />
      {/* <img class="lg:hidden block py-4" src="/img/main/Container.png"> */}
      {/* 1 */}
      <section
        classname="mt-20 py-20"
        style={{ background: "linear-gradient(0deg, white 60%,transparent)" }}
      >
        <div>
          <div classname="container flex justify-center lg:flex-row lg:px-0 flex-col">
            <div
              classname="flex flex-col lg:gap-10 gap-[2.5vw] lg:py-10 lg:p-8 p-6 bg-white/80 shadow-default-button rounded-md lg:col-6 col-12 lg:mt-[50px]"
              style={{ margin: "0 50px" }}
            >
              <h3 className="pb-[4.2vw]">
                <span className="w-fit">
                  C&amp;G테크 암롤박스 무료 렌탈 서비스
                </span>
              </h3>
              <h4 className=" font-medium">
                암롤박스 주문/제작 중 대기시간이 길어질 경우
                <br />
                무료 렌탈 서비스를 제공하고 있습니다.
              </h4>
              <ul className="text-lg flex flex-col gap-4">
                <li>
                  📌 무료 렌탈은 신규 제작 암롤박스 금액 전부 입금 후 렌탈
                  가능합니다.
                </li>
                <li>
                  📌 제작 완료후 신제품 수거를 안할 경우 해당 날짜 부터 렌탈 제품
                  일별 금액 청구
                </li>
                <li>📌 여유 제품이 있을 경우에만 렌탈이 가능합니다.</li>
                <li>📌 유료 렌탈은 제품 크기에 따라 금액이 상이합니다.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* 2 */}
      <section
        classname="py-20"
        style={{ background: "linear-gradient(0deg, white 60%,transparent)" }}
      >
        <div>
          <div classname="container flex justify-center lg:flex-row lg:px-0 flex-col">
            <div
              classname="flex flex-col lg:gap-10 gap-[2.5vw] lg:py-10 lg:p-8 p-6 bg-white/80 shadow-default-button rounded-md lg:col-6 col-12 lg:mt-[50px]"
              style={{ margin: "0 50px" }}
            >
              <h3 className="pb-[4.2vw]">
                <span className="w-fit">
                  C&amp;G테크 암롤박스 유료 렌탈 서비스
                </span>
              </h3>
              <h4 className=" font-medium">
                일별 렌탈료를 납부하여 중고제품에 대하여
                <br />
                유료 렌탈이 가능합니다.
              </h4>
              <ul className="text-lg flex flex-col gap-4">
                <li>📌 유료 렌탈은 제품 크기에 따라 금액이 상이합니다 </li>
                <li>📌 렌탈료는 일별로 납부됩니다.</li>
                <li>📌 파손 및 분실 금액 별도 청구됩니다.</li>
              </ul>
            </div>
            <div className="lg:col-6 after:block after:clear-both after:content-['']">
              <img
                id="Ci"
                src="/img/rental/1.jpg"
                className="lg:mb-[50px] lg:mt-0 mt-[-50px] lg:ml-[-120px] lg:px-0 px-[25px]"
                style={{ width: 580 }}
              />
            </div>
          </div>
        </div>
      </section>
      {/* 3 */}
      <section className="py-20">
        <main className="container relative flex flex-col justify-center gap-20 overflow-hidden">
          <h2 className="">주의사항</h2>
          <ol className="flex self-stretch flex-grow gap-20 flex-wrap font-medium">
            <li className="flex self-stretch gap-4 flex-col h4 flex-grow">
              <img src="/img/rental/notice.png" className="w-fit" />
              01.<i>암롤박스 전용 렌탈</i>
            </li>
            <li className="flex self-stretch gap-4 flex-col h4 flex-grow">
              <img src="/img/rental/notice.png" className="w-fit" />
              02.<i>기간 외 사용시 렌탈료 일별 금액 청구</i>
            </li>
            <li className="flex self-stretch gap-4 flex-col h4 flex-grow">
              <img src="/img/rental/notice.png" className="w-fit" />
              03.<i>직접 공장에 와서 수거 및 반납</i>
            </li>
            <li className="flex self-stretch gap-4 flex-col h4 flex-grow">
              <img src="/img/rental/notice.png" className="w-fit" />
              04.<i>운송업 이용시 운송비 별도</i>
            </li>
            <li className="flex self-stretch gap-4 flex-col h4 flex-grow">
              <img src="/img/rental/notice.png" className="w-fit" />
              05.<i>파손 및 분실 금액 별도 청구</i>
            </li>
          </ol>
        </main>
      </section>
      {/* 4 */}
      <footer className="w-full lg:py-[150px] py-12 border-t-[3px] border-primary border-solid bg-white ">
        <div className="container flex justify-between lg:flex-row flex-col gap-10">
          <a className="logo lg:h-[60px] h-14">
            <img src="/img/logo_l_e.svg" className="h-full" />
          </a>
          <ul className="flex justify-between lg:col-8 gap-4 flex-col lg:flex-row">
            <li className="">
              <h5>CONTACT</h5>
              <ol className="flex flex-col gap-4 text-xl font-medium pt-6 text-text2">
                <li className="flex lg:flex-col gap-2">
                  <strong className="min-w-[100px] inline-block">Adress</strong>
                  경기도 평택시 서탄면 서탄2로 226
                </li>
                <li className="flex lg:flex-col gap-2">
                  <strong className="min-w-[100px] inline-block">Tel</strong>
                  031-668-8386
                </li>
                <li className="flex lg:flex-col gap-2">
                  <strong className="min-w-[100px] inline-block">Mob</strong>
                  경기도 평택시 서탄면 서탄2로 226
                </li>
                <li className="flex lg:flex-col gap-2">
                  <strong className="min-w-[100px] inline-block">Email</strong>
                  경기도 평택시 서탄면 서탄2로 226
                </li>
              </ol>
            </li>
            <li className="lg:block hidden">
              <h5>About</h5>
              <ol className="flex flex-col gap-6 text-xl font-medium pt-6  text-text2">
                <li>
                  <a href="/main">Home</a>
                </li>
                <li>
                  <a href="/Sub1">기업소개</a>
                </li>
                <li>
                  <a href="/Sub2">제품소개</a>
                </li>
                <li>
                  <a href="/Sub3">견적문의</a>
                </li>
              </ol>
            </li>
            <li className="flex flex-col gap-4 text-xl font-medium">
              <h5>Family Site</h5>
              <div className="relative p-4 border border-text2 w-[180px]">
                <a
                  className="flex justify-between h-full dropdown-toggle"
                  href="#"
                >
                  Family Site{" "}
                  <span className="transition-all material-icons-round">
                    expand_more
                  </span>
                </a>
                <ul className="p-4 border border-text2 dropdown absolute hidden w-[180px] -left-px top-full">
                  <li>
                    <a href="#!">크리샤 </a>
                  </li>
                </ul>
              </div>
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    "\n              .dropdown-toggle.on span{ transform: rotate(180deg) ;}\n            "
                }}
              />
            </li>
          </ul>
        </div>
        <div className="container pt-[60px]">
          <ul className="flex border-b border-solid pb-9">
            <li>
              <a href="">개인정보처리방침 | </a>
            </li>
            <li>
              <a href=""> 개인정보처리방침</a>
            </li>
          </ul>
          <div className="flex justify-between pt-9 lg:flex-row flex-col gap-4">
            <p>Copyright © 2022 C&amp;G tech. All Rights Reserved.</p>
            <ul className="flex gap-4">
              <li>
                <a href="">
                  <img src="/img/icon/Instagtam.svg" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src="/img/icon/Youtube.svg" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src="/img/icon/Naver.svg" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src="/img/icon/Facebook.svg" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {/* Code injected by live-server */}
      {/* Code injected by live-server */}
      {/* Code injected by live-server */}
    </>
  )
}