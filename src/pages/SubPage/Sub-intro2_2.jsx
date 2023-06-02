import React from "react";
import '../../styles/font.css';
import '../../styles/index.min.css';
import '../../styles/common.css';
import '../../styles/output.css';

export default function SubPage22() {
    return (
    <>
      <title>(주)C&amp;G TECH</title>
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
      >
        <i className="material-icons-round sm:text-3xl">arrow_upward</i>
      </button>
      <header className="">
        <nav className="lg:container flex items-center justify-between w-full h-full">
          <a
            href="/html/MainPage/Main.html"
            className="logo lg:px-[50px] h-[60px] px-4"
          >
            {/* <img src="/img/logo_d_e.svg" class="hidden h-full lg:block logo_d_e"> */}
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
              <a href="/html/MainPage/SubPage/Sub_rental.html" className="">
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
      <div className="flex flex-col gap-9 justify-center container mt-[60px] pt-20">
        <h3
          className="text-primary w-fit inline-block"
          style={{
            background: "url(/img/after_stroke.svg)no-repeat 0 100%/contain"
          }}
        >
          Categorys
        </h3>
        <ul id="tabs-nav" className="flex gap-8 h6">
          <li className="self-stretch flex-grow h-[75px] shadow-md rounded-md overflow-hidden">
            <a
              href="#tab1"
              className="flex h-full w-full items-center px-6 py-4 justify-between"
            >
              암롤박스
              <span className="material-icons-round rounded-md bg-white text-primary p-2 w-fit h-fit">
                north_east
              </span>
            </a>
          </li>
          <li className="self-stretch flex-grow h-[75px] shadow-md rounded-md overflow-hidden">
            <a
              href="#tab2"
              className="flex h-full w-full items-center px-6 py-4 justify-between"
            >
              고철/스크랩
              <span className="material-icons-round rounded-md bg-white text-primary p-2 w-fit h-fit">
                north_east
              </span>
            </a>
          </li>
          <li className="self-stretch flex-grow h-[75px] shadow-md rounded-md overflow-hidden">
            <a
              href="#tab3"
              className="flex h-full w-full items-center px-6 py-4 justify-between"
            >
              중고박스
              <span className="material-icons-round rounded-md bg-white text-primary p-2 w-fit h-fit">
                north_east
              </span>
            </a>
          </li>
          <li className="self-stretch flex-grow h-[75px] shadow-md rounded-md overflow-hidden">
            <a
              href="#tab4"
              className="flex h-full w-full items-center px-6 py-4 justify-between"
            >
              박스수리
              <span className="material-icons-round rounded-md bg-white text-primary p-2 w-fit h-fit">
                north_east
              </span>
            </a>
          </li>
        </ul>
      </div>
      {/* 1 */}
      <section className="pb-[140px]">
        <ul id="tabs-content" className="">
          <li id="tab1" className="tab-content">
            <img
              src="/img/introduce2/cg_bg_pc.png"
              className="py-9 md:block hidden"
            />
            <img
              src="/img/introduce2/cg_bg_m.png"
              className="py-9 block md:hidden"
            />
            <div className="container pt-9">
              <div className="mb-9 w-full after:content-[''] after:block after:clear-both h-12">
                <span className="float-right flex rounded-md overflow-hidden border">
                  <input
                    className="outline-none p-3 w-[250px]"
                    type="text"
                    placeholder="찾으시는 상품을 입력해 주세요."
                  />
                  <button className="material-icons-round bg-primary2 text-white p-3">
                    search
                  </button>
                </span>
              </div>
              <ol className="flex gap-9 flex-wrap">
                <li className="flex flex-col  overflow-hidden bg-white self-stretch flex-grow w-[calc(50%-18px)]">
                  <img src="/img/introduce2/product.png" />
                  <div className="flex flex-col  items-end self-stretch  overflow-hidden gap-[18px] px-[25px] pt-[30px] pb-10 bg-[#fcfefe] border-t border-[#c7d9d2]">
                    <h4 className="text-[32px] font-medium w-full">
                      25루베 슬러지 오니 암롤박스
                    </h4>
                    <div className="flex justify-between items-end w-full">
                      <i className="flex justify-center items-center gap-3 px-[25px] py-2 rounded-[100px] border border-primary2  font-bold  text-primary2">
                        #건설폐기물 양문형
                      </i>
                      <p className=" text-sm font-medium  text-paragraph">
                        2022.00.00
                      </p>
                    </div>
                  </div>
                </li>
                <li className="flex flex-col  overflow-hidden bg-white self-stretch flex-grow w-[calc(50%-18px)]">
                  <img src="/img/introduce2/product.png" />
                  <div className="flex flex-col  items-end self-stretch  overflow-hidden gap-[18px] px-[25px] pt-[30px] pb-10 bg-[#fcfefe] border-t border-[#c7d9d2]">
                    <h4 className="text-[32px] font-medium w-full">
                      25루베 슬러지 오니 암롤박스
                    </h4>
                    <div className="flex justify-between items-end w-full">
                      <i className="flex justify-center items-center gap-3 px-[25px] py-2 rounded-[100px] border border-primary2  font-bold  text-primary2">
                        #건설폐기물 양문형
                      </i>
                      <p className=" text-sm font-medium  text-paragraph">
                        2022.00.00
                      </p>
                    </div>
                  </div>
                </li>
                <li className="flex flex-col  overflow-hidden bg-white self-stretch flex-grow w-[calc(50%-18px)]">
                  <img src="/img/introduce2/product.png" />
                  <div className="flex flex-col  items-end self-stretch  overflow-hidden gap-[18px] px-[25px] pt-[30px] pb-10 bg-[#fcfefe] border-t border-[#c7d9d2]">
                    <h4 className="text-[32px] font-medium w-full">
                      25루베 슬러지 오니 암롤박스
                    </h4>
                    <div className="flex justify-between items-end w-full">
                      <i className="flex justify-center items-center gap-3 px-[25px] py-2 rounded-[100px] border border-primary2  font-bold  text-primary2">
                        #건설폐기물 양문형
                      </i>
                      <p className=" text-sm font-medium  text-paragraph">
                        2022.00.00
                      </p>
                    </div>
                  </div>
                </li>
                <li className="flex flex-col  overflow-hidden bg-white self-stretch flex-grow w-[calc(50%-18px)]">
                  <img src="/img/introduce2/product.png" />
                  <div className="flex flex-col  items-end self-stretch  overflow-hidden gap-[18px] px-[25px] pt-[30px] pb-10 bg-[#fcfefe] border-t border-[#c7d9d2]">
                    <h4 className="text-[32px] font-medium w-full">
                      25루베 슬러지 오니 암롤박스
                    </h4>
                    <div className="flex justify-between items-end w-full">
                      <i className="flex justify-center items-center gap-3 px-[25px] py-2 rounded-[100px] border border-primary2  font-bold  text-primary2">
                        #건설폐기물 양문형
                      </i>
                      <p className=" text-sm font-medium  text-paragraph">
                        2022.00.00
                      </p>
                    </div>
                  </div>
                </li>
              </ol>
            </div>
            <a
              href=""
              className=" button_bg lg:flex mx-auto mt-12 !bg-primary2 !w-[320px] !h-16"
            >
              더보기 <span className="material-icons-round">expand_more</span>
            </a>
          </li>
        </ul>
      </section>
      {/* 2 */}
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
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">기업소개</a>
                </li>
                <li>
                  <a href="">제품소개</a>
                </li>
                <li>
                  <a href="">견적문의</a>
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
                    "\n            .dropdown-toggle.on span{ transform: rotate(180deg) ;}\n          "
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
    </>
  )
}