import React from "react";
import '../../styles/font.css';
import '../../styles/index.min.css';
import '../../styles/common.css';
import '../../styles/output.css';


export default function SubPage() {

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
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css"
            />
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
                    href="/Main"
                    className="logo lg:px-[50px] h-[60px] px-4"
                >
                    <img
                    src="../../img/logo_d_e.svg"
                    className="hidden h-full lg:block logo_d_e"
                    />
                    <img
                    src="../../img/logo_l_e.svg"
                    className="block h-full lg:hidden logo_l_e"
                    />
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
            <div className="flex flex-col lg:flex-row 2xl:gap-[200px] lg:gap-[12.5vw] gap-4 justify-center container 2xl:px-20 mt-[80px] pt-14">
                <h3 className="">
                <strong className="text-primary" style={{}}>
                    ‘C&amp;G TECH’
                </strong>
                <br className="lg:hidden block" />
                는 압롤 박스 분야의 <br className=" lg:block" />
                앞선 기술력 바탕으로
                <br className=" lg:block" />
                <strong
                    className="text-primary"
                    style={{
                    background: "url(/img/after_stroke.svg)no-repeat 0 100%/contain"
                    }}
                >
                    30년 전통 최고 기업
                </strong>{" "}
                입니다.
                </h3>
                <p className="text-lg font-medium text-paragraph">
                수년간 암롤박스와 스크랩/고철박스를 생산해온 특화된
                <br className="hidden lg:block" /> 기술력과 노하우를 갖고 있는 용접
                구조물 전문 기업으로
                <br className="hidden lg:block" /> 여러 기업의 파트너로서 자리잡고
                있습니다.
                </p>
            </div>
            {/* <img class="lg:hidden block py-4" src="/img/main/Container.png"> */}
            <img
                className="lg:hidden block py-4 my-4 "
                src="../../img/main/Container_m.png"
            />
            {/* 1 */}
            <section className=" lg:pt-[400px] section2 " style={{}}>
                <div
                style={{ background: "linear-gradient(0deg, white 60%,transparent)" }}
                >
                <div className="container flex justify-center gap-[5.2vw] flex-col-reverse lg:flex-row lg:px-0">
                    <ol className="flex flex-col self-stretch justify-center flex-grow gap-4 lg:py-10 partner lg:col-6 ">
                    <li className="flex justify-center gap-6 flex-col lg:flex-row">
                        <img
                        id="Ci"
                        src="../../img/introduce/graph.png"
                        className="m-auto w-fit"
                        />
                        <img
                        id="Ci"
                        src="../../img/introduce/graph-1.png"
                        className="m-auto w-fit"
                        />
                    </li>
                    <li>
                        <img
                        id="Ci"
                        src="../../img/introduce/graph-2.png"
                        className="m-auto"
                        />
                    </li>
                    </ol>
                    <div className="flex flex-col justify-center gap-3 lg:py-10 lg:pb-8 lg:w-fit items-center text-center">
                    <h2 className="">
                        <span
                        className="w-fit"
                        style={{
                            background:
                            "url(../../img/after_stroke.svg)no-repeat 0 100%/contain"
                        }}
                        >
                        Why? <i className="text-primary">C&amp;G</i>
                        </span>
                    </h2>
                    <span className="text-lg font-medium text-paragraph">
                        고객을 최우선으로 하여 고객이 만족할 수 있는
                        <br />
                        품질과 비용 절약을 제공 합니다.
                    </span>
                    </div>
                </div>
                </div>
            </section>
            <style
                dangerouslySetInnerHTML={{
                __html:
                    "\n    /* section.section2{background:url(/img/main/Container.png)no-repeat 0% 20% /contain fixed;} */\n    \n    @media (min-width: 960px)  {\n      section.section2{background: url(/img/main/Container.png)no-repeat 0 70% /contain fixed;}\n    }\n  "
                }}
            />
            {/* 2 */}
            <section className="py-20 bg-[#FFFAF5]">
                <div className="container flex flex-col lg:gap-9">
                <div className="flex flex-col items-center justify-center gap-3 py-10 pb-8">
                    <h2 className="flex flex-col gap-4 text-center items-center">
                    <i
                        className="w-fit"
                        style={{
                        background: "url(../../img/after_stroke.svg)no-repeat 0 90%/contain"
                        }}
                    >
                        Our Services
                    </i>
                    <span className="text-lg font-medium text-paragraph">
                        변치 않는 믿음과 신뢰를 바탕으로 지속적인 고객서비스를 진행하고
                        있습니다.
                    </span>
                    </h2>
                </div>
                <ol className="flex flex-col self-stretch justify-center flex-grow lg:py-10 overflow-hidden lg:flex-row gap-[2.5vw] partner h5 items-center">
                    <li
                    className="ourService group"
                    style={{
                        background: "url(/img/introduce/service1.png) 50% /cover"
                    }}
                    >
                    <div className="">
                        <img
                        className="block transition-all group-hover:hidden w-[150px]"
                        src="/img/icon/service/icon1.svg"
                        />
                        <img
                        className="hidden transition-all group-hover:block group-hover:opacity-100 w-[150px] opacity-0"
                        src="/img/icon/service/icon1_w.svg"
                        />
                        고객 비용 절감을 위한
                        <br />
                        직접 유통 시스템
                    </div>
                    </li>
                    <li
                    className="ourService group"
                    style={{
                        background: "url(../../img/introduce/service2.png) 50% /cover"
                    }}
                    >
                    <div>
                        <img
                        className="block transition-all group-hover:hidden w-[150px]"
                        src="../../img/icon/service/icon2.svg"
                        />
                        <img
                        className="hidden transition-all group-hover:block w-[150px]"
                        src="../../img/icon/service/icon2_w.svg"
                        />
                        무료 렌탈 서비스
                    </div>
                    </li>
                    <li
                    className="ourService group"
                    style={{
                        background: "url(../../img/introduce/service3.png) 50% /cover"
                    }}
                    >
                    <div>
                        <img
                        className="block transition-all group-hover:hidden w-[150px]"
                        src="../../img/icon/service/icon3.svg"
                        />
                        <img
                        className="hidden transition-all group-hover:block w-[150px]"
                        src="../../img/icon/service/icon3_w.svg"
                        />
                        품질 보증을 위한 A/S 서비스
                    </div>
                    </li>
                </ol>
                </div>
            </section>
            {/* 3 */}
            <section className="py-20">
                <main className="lg:container relative flex flex-col lg:flex-row justify-center gap-8 overflow-hidden">
                <div className="flex flex-col gap-6 py-10 pb-8 container">
                    <p className="flex flex-col gap-3 text-xl font-bold text-primary">
                    Partner
                    <span className="w-[100px] h-[5px] bg-primary" />
                    </p>
                    <h2 className="flex flex-col gap-4">
                    Easy Integrations with
                    <br className="hidden lg:block" /> Our Partner
                    <span className="text-lg font-medium text-paragraph">
                        100여개의 다양한 기업들의 선택으로 제품에 대한{" "}
                        <br className="hidden lg:block" />
                        기술력과 신뢰도를 보여줍니다.
                    </span>
                    </h2>
                </div>
                <div className="py-10 lg:col-6 overflow-hidden lg:overflow-visible relative">
                    <div className="absolute bottom-0 right-0 z-10 w-full lg:h-1/2 h-6 bg-gradient-to-b from-transparent to-white" />
                    <img
                    src="../../img/introduce/ourService_bg.png"
                    className="absolute top-0 right-0 w-full -z-10"
                    />
                    {/* animate-[moveforeverBtoT_30s_linear_infinite] */}
                    <ol className="flex flex-col self-stretch justify-center flex-grow gap-9 partner ">
                    <li className="flex self-stretch justify-center gap-12 ">
                        <img src="../../img/main/partner/1.png" />
                        <img src="../../img/main/partner/2.png" />
                        <img src="../../img/main/partner/3.png" />
                        <img src="../../img/main/partner/4.png" />
                        <img src="../../img/main/partner/5.png" />
                    </li>
                    <li className="flex self-stretch justify-center gap-12 ">
                        <img src="../../img/main/partner/6.png" />
                        <img src="../../img/main/partner/7.png" />
                        <img src="../../img/main/partner/8.png" />
                        <img src="../../img/main/partner/9.png" />
                        <img src="../../img/main/partner/10.png" />
                        <img src="../../img/main/partner/11.png" />
                    </li>
                    {/* <li class="flex self-stretch justify-end gap-12 ">
                <img src="/img/main/partner/12.png">
                <img src="/img/main/partner/13.png">
                <img src="/img/main/partner/1.png">
                <img src="/img/main/partner/2.png">
                <img src="/img/main/partner/3.png">
                <img src="/img/main/partner/4.png">
                <img src="/img/main/partner/5.png">
                <img src="/img/main/partner/6.png">
                <img src="/img/main/partner/7.png">
                <img src="/img/main/partner/8.png">
                <img src="/img/main/partner/9.png">
                <img src="/img/main/partner/10.png">
                <img src="/img/main/partner/11.png">
                <img src="/img/main/partner/12.png">
                <img src="/img/main/partner/13.png">
                <img src="/img/main/partner/14.png">
                <img src="/img/main/partner/15.png">
                <img src="/img/main/partner/16.png">
                <img src="/img/main/partner/17.png">
                <img src="/img/main/partner/18.png">
                <img src="/img/main/partner/19.png">
                <img src="/img/main/partner/20.png">
                <img src="/img/main/partner/21.png">
                <img src="/img/main/partner/22.png">
                <img src="/img/main/partner/23.png">
                <img src="/img/main/partner/24.png">
                <img src="/img/main/partner/25.png">
                <img src="/img/main/partner/26.png">
                <img src="/img/main/partner/27.png">
                <img src="/img/main/partner/28.png">
                <img src="/img/main/partner/29.png">
                <img src="/img/main/partner/14.png">
                <img src="/img/main/partner/15.png">
                <img src="/img/main/partner/16.png">
                <img src="/img/main/partner/17.png">
                <img src="/img/main/partner/18.png">
                <img src="/img/main/partner/19.png">
                <img src="/img/main/partner/20.png">
                <img src="/img/main/partner/21.png">
                <img src="/img/main/partner/22.png">
                <img src="/img/main/partner/23.png">
                <img src="/img/main/partner/24.png">
                <img src="/img/main/partner/25.png">
                <img src="/img/main/partner/26.png">
                <img src="/img/main/partner/27.png">
                <img src="/img/main/partner/28.png">
                <img src="/img/main/partner/29.png">
            </li> */}
                    </ol>
                </div>
                </main>
            </section>
            {/* 4 */}
            <section className="flex lg:flex-row flex-col">
                <div
                id="daumRoughmapContainer1677504388452"
                className="h-full root_daum_roughmap root_daum_roughmap_landing lg:col-6 col-12"
                >
                {/* 3. 실행 스크립트 */}
                </div>
                <div className="lg:flex hidden flex-col gap-4 lg:p-9 lg:col-6 border-t">
                <p className="flex flex-col gap-3 text-xl font-bold text-primary">
                    Contact
                    <span className="w-[100px] h-[5px] bg-primary" />
                </p>
                <h2 className="flex flex-col gap-4">C&amp;G TECH</h2>
                <ol className="flex flex-col text-xl font-medium flex-grow self-stretch">
                    <li className="p-4 border-b flex-grow self-stretch">
                    <strong className="min-w-[200px] pr-2 inline-block">Adress</strong>
                    경기도 평택시 서탄면 서탄2로 226
                    </li>
                    <li className="p-4 border-b flex-grow self-stretch">
                    <strong className="min-w-[200px] pr-2 inline-block">Tel</strong>
                    031-668-8386
                    </li>
                    <li className="p-4 border-b flex-grow self-stretch">
                    <strong className="min-w-[200px] pr-2 inline-block">Mob</strong>
                    경기도 평택시 서탄면 서탄2로 226
                    </li>
                    <li className="p-4 border-b flex-grow self-stretch">
                    <strong className="min-w-[200px] pr-2 inline-block">Email</strong>
                    경기도 평택시 서탄면 서탄2로 226
                    </li>
                </ol>
                </div>
            </section>
            <footer className="w-full lg:py-[150px] py-12 border-t-[3px] border-primary border-solid ">
                <div className="container flex justify-between lg:flex-row flex-col gap-10">
                <a className="logo lg:h-[60px] h-14">
                    <img src="../../img/logo_l_e.svg" className="h-full" />
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
                        <a href="/Main">Home</a>
                        </li>
                        <li>
                        <a href="/Sub1">기업소개</a>
                        </li>
                        <li>
                        <a href="">제품소개</a>
                        </li>
                        <li>
                        <a href="/Sub3">견적문의</a>
                        </li>
                    </ol>
                    </li>
                    <li className="flex flex-col gap-4 text-xl font-medium">
                    <h5>Family Site</h5>
                    <div
                        className="relative p-4 border border-text2 w-[180px]"
                        style={{}}
                    >
                        <a
                        className="flex justify-between h-full dropdown-toggle"
                        href="#"
                        >
                        Family Site{" "}
                        <span className="transition-all material-icons-round">
                            expand_more
                        </span>
                        </a>
                        <ul
                        className="p-4 border border-text2 dropdown absolute hidden w-[180px] -left-px top-full"
                        style={{}}
                        >
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
                        <img src="../../img/icon/Instagtam.svg" />
                        </a>
                    </li>
                    <li>
                        <a href="">
                        <img src="../../img/icon/Youtube.svg" />
                        </a>
                    </li>
                    <li>
                        <a href="">
                        <img src="../../img/icon/Naver.svg" />
                        </a>
                    </li>
                    <li>
                        <a href="">
                        <img src="../../img/icon/Facebook.svg" />
                        </a>
                    </li>
                    </ul>
                </div>
                </div>
            </footer>
            </>
    );
}
    
  