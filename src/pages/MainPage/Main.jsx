import React from 'react';
import '../../styles/font.css';
import '../../styles/index.min.css';
import '../../styles/common.css';
import '../../styles/output.css';

export default function MainPage() {

    return (
        <>
            <title>(주)C&amp;G TECH</title>
            {/*------------------------ 구글아이콘 ------------------------*/}
            <link
                href="https://fonts.googleapis.com/icon?family=Material+Icons+Round"
                rel="stylesheet"
            />
            {/* 폰트어썸 */}
            {/* <link rel="stylesheet" href="//use.fontawesome.com/releases/v5.5.0/css/all.css"> */}
            {/* 폰트 */}
            <link
                href="https://webfontworld.github.io/gmarket/GmarketSans.css"
                rel="stylesheet"
            />
            {/*swiper 스와이퍼 css & js*/}
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css"
            />
            {/* 만약에 cdn으로만 할시 type="text/tailwindcss"를 꼭 추가해서 작업하기 */}
            <header className="">
                <nav className="container flex items-center justify-between w-full">
                    <a className="logo px-[50px] h-[60px]">
                        <img src="../../img/logo_d_e.svg" className="block h-full logo_d_e" />
                        <img src="../../img/logo_l_e.svg" className="hidden h-full logo_l_e" />
                    </a>
                    <ol className="flex items-center self-stretch justify-center flex-grow gap-20">
                        <li>
                            <a href="/Sub1" className="">
                                기업소개
                            </a>
                        </li>
                        <li>
                            <a href="" className="">
                                제품소개
                            </a>
                        </li>
                        <li>
                            <a href="/Sub3" className="">
                                문의하기
                            </a>
                        </li>
                    </ol>
                    <a href="/Sub3" className=" button_bg">
                        문의 바로가기{" "}
                        <span className="material-icons-round">chevron_right</span>
                    </a>
                </nav>
            </header>
            <div className="index">
                <section className="pb-[60px] swiper mySwiper">
                    <ul className="swiper-wrapper">
                        <li
                            className="w-full swiper-slide"
                            style={{
                                background:
                                    "url(../../img/main/main_banner_bg.png)no-repeat 0 0 /cover"
                            }}
                        >
                            <div className="flex items-center self-stretch h-[915px] overflow-hidden container ">
                                <div className="flex flex-col gap-6 ">
                                    <p className="font-bold text-white text-7xl">
                                        C&amp;G Technology
                                        <br />
                                        새로운 가치의 창조
                                    </p>
                                    <p className="text-3xl font-medium text-white ">
                                        환경분야 기술을 선도하는 특화된 기술력으로
                                        <br />
                                        고객의 가치를 최우선으로 지향합니다.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li
                            className="w-full swiper-slide"
                            style={{
                                background:
                                    "url(../../img/main/main_banner_bg2.png)no-repeat 0 0 /cover"
                            }}
                        >
                            <div className="flex items-center self-stretch h-[915px] overflow-hidden container ">
                                <div className="flex flex-col gap-6 ">
                                    <p className="font-bold text-white text-7xl">
                                        C&amp;G Technology
                                        <br />
                                        새로운 가치의 창조
                                    </p>
                                    <p className="text-3xl font-medium text-white ">
                                        특화된 기술력으로 고객가치를
                                        <br />
                                        실현하는 C&amp;G TECH
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className="container">
                            <div className="swiper-pagination !bottom-[20%]" />
                        </li>
                    </ul>
                    <div className="flex flex-col justify-center items-center  h-[400px] max-w-[1300px]  gap-2.5 p-9 rounded-lg bg-white shadow-3 self-stretch m-auto relative z-10 !mt-[-100px]">
                        <div className="flex flex-col items-center justify-center gap-6">
                            <p className="text-[40px] font-bold text-center gradient1 text_clip">
                                특화된 기술력으로 고객가치를
                                <br />
                                실현하는 C&amp;G TECH
                            </p>
                            <img src="../../img/main/smile.png" />
                            <p className="text-xl font-medium text-center ">
                                암롤박스의 특화된 기술력으로 깨끗하고 쾌적한 환경을 만들기 위해
                                <br />그 어떤 종류의 폐기물도 처리가능한 C&amp;G TEC 만의 제작
                                기술력을 제공합니다.
                            </p>
                        </div>
                    </div>
                </section>
                {/* 1 */}
                <section
                    className="py-20 overflow-hidden"
                    style={{
                        background:
                            "url(../../img/main/business_area_bg.png)no-repeat 0 0 /contain"
                    }}
                >
                    <div className="flex gap-[200px] justify-center container 2xl:px-20 ">
                        <h3 className="">
                            A COLLECTION OF
                            <br />
                            <strong
                                className="text-primary"
                                style={{
                                    background:
                                        "url(../../img/after_stroke.svg)no-repeat 0 100%/contain"
                                }}
                            >
                                ECO-FRIENDLY
                            </strong>
                            <br />
                            TECHNOLOGIES
                        </h3>
                        <div className="flex flex-col gap-[18px]">
                            <p className="flex flex-col gap-3 text-xl font-bold text-primary">
                                Business
                                <br />
                                Area
                                <span className="w-[100px] h-[5px] bg-primary" />
                            </p>
                            <p className="text-lg font-medium text-paragraph">
                                국내 암롤박스 업계 최고의 기술력과 축적된 경험을 바탕으로
                                <br />
                                더욱 간편하고 깨끗한 환경 조성과 함께 고객가치 실현
                            </p>
                            <a href="" className="btn_circle">
                                <div className="">More View</div>
                            </a>
                        </div>
                    </div>
                    <ul className="container flex flex-col flex-grow gap-20 py-20 2xl:px-20 ">
                        <li>
                            <a
                                href="#!"
                                className="flex items-center relative group h-[400px] justify-end"
                            >
                                <img
                                    src="../../img/main/product2.png"
                                    className=" absolute top-0 right-[calc(50%+80px)]"
                                />
                                <div className="flex flex-col justify-end  self-stretch flex-grow gap-9 px-[25px] col-6">
                                    <div className="flex flex-col gap-3.5">
                                        <h3 className="flex flex-col gap-2.5">
                                            <div className="flex items-center  gap-2.5">
                                                <i className="tag bg-point1">Hot</i>
                                                <i className="tag">New</i>
                                            </div>
                                            중고 암롤박스
                                        </h3>
                                        <p className="text-lg font-medium text-paragraph">
                                            다량의 산업/건설 폐기물 처리 및 맞춤형 제작
                                        </p>
                                    </div>
                                    <button className="button_stroke">
                                        More View
                                        <span className="material-icons-round">chevron_right</span>
                                    </button>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#!" className="flex items-center relative group h-[400px]">
                                <div className="flex flex-col justify-end  self-stretch flex-grow gap-9 px-[25px] col-6">
                                    <div className="flex flex-col gap-3.5">
                                        <h3 className="flex flex-col gap-2.5">
                                            <div className="flex items-center  gap-2.5">
                                                <i className="tag bg-point1">Hot</i>
                                                <i className="tag">New</i>
                                            </div>
                                            스크랩박스
                                        </h3>
                                        <p className="text-lg font-medium text-paragraph">
                                            다량의 산업/건설 폐기물 처리 및 맞춤형 제작
                                        </p>
                                    </div>
                                    <button className="button_stroke">
                                        More View
                                        <span className="material-icons-round">chevron_right</span>
                                    </button>
                                </div>
                                <img
                                    src="../../img/main/product1.png"
                                    className=" absolute top-0 right-[calc(-50%+80px)]"
                                    style={{ right: "calc(-50% + 80px)" }}
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href="#!"
                                className="flex items-center relative group h-[400px] justify-end"
                            >
                                <img
                                    src="../../img/main/product13.png"
                                    className=" absolute top-0 right-[calc(50%+80px)]"
                                />
                                <div className="flex flex-col justify-end  self-stretch flex-grow gap-9 px-[25px] col-6">
                                    <div className="flex flex-col gap-3.5">
                                        <h3 className="flex flex-col gap-2.5">
                                            <div className="flex items-center  gap-2.5">
                                                <i className="tag bg-point1">Hot</i>
                                                <i className="tag bg-point3">Trending</i>
                                            </div>
                                            중고 암롤박스
                                        </h3>
                                        <p className="text-lg font-medium text-paragraph">
                                            다량의 산업/건설 폐기물 처리 및 맞춤형 제작
                                        </p>
                                    </div>
                                    <button className="button_stroke">
                                        More View
                                        <span className="material-icons-round">chevron_right</span>
                                    </button>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#!" className="flex items-center relative group h-[400px]">
                                <div className="flex flex-col justify-end  self-stretch flex-grow gap-9 px-[25px] col-6">
                                    <div className="flex flex-col gap-3.5">
                                        <h3 className="flex flex-col gap-2.5">
                                            <div className="flex items-center  gap-2.5">
                                                <i className="tag bg-point1">Hot</i>
                                                <i className="tag">New</i>
                                            </div>
                                            박스수리
                                        </h3>
                                        <p className="text-lg font-medium text-paragraph">
                                            다량의 산업/건설 폐기물 처리 및 맞춤형 제작
                                        </p>
                                    </div>
                                    <button className="button_stroke">
                                        More View
                                        <span className="material-icons-round">chevron_right</span>
                                    </button>
                                </div>
                                <img
                                    src="../../img/main/product4.png"
                                    className=" absolute top-0 right-[calc(-50%+80px)]"
                                />
                            </a>
                        </li>
                    </ul>
                </section>
                {/* 2 */}
                <section className="pt-[60px] pb-[100px] bg-white relative">
                    <div className="w-[1350px] h-[460px] rounded-tl-full rounded-bl-full bg-surfaceMid absolute right-0 top-0" />
                    {/* 배경 */}
                    <img
                        src="../../img/main/about_us_bg.png"
                        className="absolute right-0 w-full top-10 mix-blend-multiply"
                    />
                    {/* 배경 */}
                    <main className="container flex self-stretch justify-end gap-20">
                        <img
                            src="../../img/main/product2.png"
                            className=" absolute top-0 right-[calc(50%+80px)]"
                        />
                        <div className="flex flex-grow gap-[30px] col-6">
                            <ul className="flex flex-col self-stretch justify-center py-10 gap-9">
                                <li className="flex flex-col gap-3">
                                    <p className="text-xl font-bold text-primary">About Us</p>
                                    <span className="w-[100px] h-[5px] bg-primary" />
                                </li>
                                <li className="flex flex-col gap-3">
                                    <h3>실시간 제품현황</h3>
                                    <span className="text-lg font-medium text-paragraph">
                                        즉시 출고를 위한
                                        <br />
                                        실시간 제품 현황을 안내하여
                                        <br />
                                        긴급 상황에 유연하게 대처 가능합니다.
                                    </span>
                                </li>
                            </ul>
                            <ol className="flex flex-col justify-center  self-stretch flex-grow gap-[15px]">
                                <li className="flex items-center self-stretch gap-4">
                                    <p className="rounded-full text-[40px] font-bold w-24 h-24 flex items-center  justify-center bg-white shadow-1">
                                        <i className="gradient2 text_clip">21</i>
                                    </p>
                                    <div className="flex flex-col items-center justify-center flex-grow gap-2">
                                        <img src="../../img/main/about_us_checkbox.png" />
                                        <p className="text-lg font-medium ">즉시 출고 가능</p>
                                    </div>
                                </li>
                                <li className="flex items-center self-stretch gap-4">
                                    <p className="rounded-full text-[40px] font-bold w-24 h-24 flex items-center  justify-center bg-white shadow-1">
                                        <i className="gradient2 text_clip">27</i>
                                    </p>
                                    <div className="flex flex-col items-center justify-center flex-grow gap-2">
                                        <img src="../../img/main/about_us_checkbox.png" />
                                        <p className="text-lg font-medium ">렌탈가능</p>
                                    </div>
                                </li>
                                <li className="flex items-center self-stretch gap-4">
                                    <p className="rounded-full text-[40px] font-bold w-24 h-24 flex items-center  justify-center bg-white shadow-1">
                                        <i className="gradient2 text_clip">11</i>
                                    </p>
                                    <div className="flex flex-col items-center justify-center flex-grow gap-2">
                                        <img src="../../img/main/about_us_checkbox.png" />
                                        <p className="text-lg font-medium ">즉시 중고 가능</p>
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </main>
                    {/* <div class="absolute right-0 w-16 h-16 rounded-full bg-surfaceLow top-1/2 mix-blend-multiply"></div> */}
                </section>
                {/* 3 */}
                <section className="py-20">
                    <main className="container relative">
                        <div className="absolute right-0 h-1/2 bottom-0 w-[300px] bg-gradient-to-r from-transparent to-white z-10" />
                        <div className="absolute left-0 h-1/2 bottom-0 w-[300px] bg-gradient-to-l from-transparent to-white z-10" />
                        <div className="flex flex-col items-center justify-center gap-3 py-10 pb-8">
                            <p className="flex flex-col gap-3 text-xl font-bold text-center text-primary">
                                Partner
                                <span className="w-[100px] h-[5px] bg-primary" />
                            </p>
                            <h2
                                className="flex flex-col gap-4 text-center"
                                style={{
                                    background:
                                        "url(../../img/after_stroke.svg)no-repeat 0 25%/contain"
                                }}
                            >
                                Our Partner
                                <span className="text-lg font-medium text-paragraph">
                                    100여개의 다양한 기업들의 선택으로 제품에 대한 <br />
                                    기술력과 신뢰도를 보여줍니다.
                                </span>
                            </h2>
                        </div>
                        <ol className="flex flex-col self-stretch justify-center flex-grow py-10 overflow-hidden gap-9 partner">
                            <li className="flex items-center self-stretch gap-12 animate-[moveforeverL_30s_linear_infinite]">
                                <img src="../../img/main/partner/1.png" />
                                <img src="../../img/main/partner/2.png" />
                                <img src="../../img/main/partner/3.png" />
                                <img src="../../img/main/partner/4.png" />
                                <img src="../../img/main/partner/5.png" />
                                <img src="../../img/main/partner/6.png" />
                                <img src="../../img/main/partner/7.png" />
                                <img src="../../img/main/partner/8.png" />
                                <img src="../../img/main/partner/9.png" />
                                <img src="../../img/main/partner/10.png" />
                                <img src="../../img/main/partner/11.png" />
                                <img src="../../img/main/partner/12.png" />
                                <img src="../../img/main/partner/13.png" />
                                <img src="../../img/main/partner/1.png" />
                                <img src="../../img/main/partner/2.png" />
                                <img src="../../img/main/partner/3.png" />
                                <img src="../../img/main/partner/4.png" />
                                <img src="../../img/main/partner/5.png" />
                                <img src="../../img/main/partner/6.png" />
                                <img src="../../img/main/partner/7.png" />
                                <img src="../../img/main/partner/8.png" />
                                <img src="../../img/main/partner/9.png" />
                                <img src="../../img/main/partner/10.png" />
                                <img src="../../img/main/partner/11.png" />
                                <img src="../../img/main/partner/12.png" />
                                <img src="../../img/main/partner/13.png" />
                            </li>
                            <li className="flex justify-end self-stretch gap-12  animate-[moveforeverR_30s_linear_infinite]">
                                <img src="../../img/main/partner/14.png" />
                                <img src="../../img/main/partner/15.png" />
                                <img src="../../img/main/partner/16.png" />
                                <img src="../../img/main/partner/17.png" />
                                <img src="../../img/main/partner/18.png" />
                                <img src="../../img/main/partner/19.png" />
                                <img src="../../img/main/partner/20.png" />
                                <img src="../../img/main/partner/21.png" />
                                <img src="../../img/main/partner/22.png" />
                                <img src="../../img/main/partner/23.png" />
                                <img src="../../img/main/partner/24.png" />
                                <img src="../../img/main/partner/25.png" />
                                <img src="../../img/main/partner/26.png" />
                                <img src="../../img/main/partner/27.png" />
                                <img src="../../img/main/partner/28.png" />
                                <img src="../../img/main/partner/29.png" />
                                <img src="../../img/main/partner/14.png" />
                                <img src="../../img/main/partner/15.png" />
                                <img src="../../img/main/partner/16.png" />
                                <img src="../../img/main/partner/17.png" />
                                <img src="../../img/main/partner/18.png" />
                                <img src="../../img/main/partner/19.png" />
                                <img src="../../img/main/partner/20.png" />
                                <img src="../../img/main/partner/21.png" />
                                <img src="../../img/main/partner/22.png" />
                                <img src="../../img/main/partner/23.png" />
                                <img src="../../img/main/partner/24.png" />
                                <img src="../../img/main/partner/25.png" />
                                <img src="../../img/main/partner/26.png" />
                                <img src="../../img/main/partner/27.png" />
                                <img src="../../img/main/partner/28.png" />
                                <img src="../../img/main/partner/29.png" />
                            </li>
                        </ol>
                    </main>
                    {/* <div class="absolute right-0 w-16 h-16 rounded-full bg-surfaceLow top-1/2 mix-blend-multiply"></div> */}
                </section>
                {/* 4 */}
                <a
                    className="block py-[60px] shadow-3 text-white mt-[100px]"
                    style={{
                        background: "url(../../img/main/ask_bg.png)no-repeat 0% 35% /cover"
                    }}
                >
                    <div className="container flex flex-col gap-20">
                        <div className="flex flex-col gap-8">
                            <p className=" text-[55px] font-bold">견적 문의하기</p>
                            <p className="text-2xl !font-light ">
                                문의사항을 남겨주시면 빠르고 상세하게 답변 드리겠습니다.
                            </p>
                        </div>
                        <div className="flex flex-col gap-16 w-[360px]">
                            <h5 className="">Call: 010-5403-7768</h5>
                            <p className="flex items-center justify-between pb-5 text-xl font-medium border-b border-solid">
                                문의하기{" "}
                                <span className="text-3xl text-right material-icons-round">
                                    add
                                </span>
                            </p>
                        </div>
                    </div>
                </a>
                {/* 5 */}
            </div>
            <footer className="w-full lg:py-[150px] py-12 border-t-[3px] border-primary border-solid ">
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
            {/*커스텀 js-*/}
            {/* Tailwind JS */}
            {/* Custom scripts */}
        </>
    );
}


