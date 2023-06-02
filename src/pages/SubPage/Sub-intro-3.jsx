import React from "react";
import '../../styles/font.css';
import '../../styles/index.min.css';
import '../../styles/common.css';
import '../../styles/output.css';


export default function SubPage3() {
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
        <header className="on">
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
                <a href="/html/MainPage/SubPage/Sub-intro2.html" className="">
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
        <section className="bg-surfaceMid pt-20">
            <div className="container  flex lg:gap-20 justify-center py-5 lg:flex-row flex-col">
            <img src="../../img/introduce3/ask.png" />
            <div className="py-10">
                <h3>
                무엇을
                <br />
                도와드릴까요?
                </h3>
                <div className="flex lg:gap-12 gap-4  mt-9">
                <a href="" className="button_bg">
                    견적요정하기
                    <span className="material-icons-round">chevron_right</span>
                </a>
                <a href="" className="button_stroke">
                    제품 둘러보기
                    <span className="material-icons-round">chevron_right</span>
                </a>
                </div>
            </div>
            </div>
        </section>
        <section className="flex flex-col lg:gap-14 justify-center container my-20">
            <div className="mb-9 w-full flex lg:block items-center gap-4 flex-col">
            <h3
                className="w-fit inline-block "
                style={{
                background: "url(../../img/after_stroke.svg)no-repeat 0 100%/contain"
                }}
            >
                자주묻는질문
            </h3>
            <span className="float-right flex rounded-md overflow-hidden border">
                <input
                className="outline-none p-3 w-[250px]"
                type="text"
                placeholder="검색어를 입력해 주세요."
                />
                <button className="material-icons-round bg-primary2 text-white p-3 focus:ring-0">
                search
                </button>
            </span>
            </div>
            <div
            id="accordionExample"
            className="font-['pretendard'] flex flex-col gap-8"
            >
            <div className="rounded-t-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                <h6 className="mb-0 font-['pretendard']" id="headingOne">
                <button
                    className="group relative flex w-full items-center rounded-t-[15px] border-0 bg-white py-4 px-5 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235) text-left"
                    type="button"
                    data-te-collapse-init=""
                    data-te-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                >
                    암롤박스는 하중이 어디까지 가능한가요?
                    <span className="material-icons-round ml-auto -mr-1 h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                    expand_more
                    </span>
                </button>
                </h6>
                <div
                id="collapseOne"
                className="!visible"
                data-te-collapse-item=""
                data-te-collapse-show=""
                aria-labelledby="headingOne"
                data-te-parent="#accordionExample"
                >
                <div className="py-4 px-5">
                    <strong>강조할 부분</strong> 여기에 내용입력
                </div>
                </div>
            </div>
            {/* 아코디언 1 */}
            <div className="rounded-t-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                <h6 className="mb-0 font-['pretendard']" id="headingTwo">
                <button
                    className="group relative flex w-full items-center rounded-t-[15px] border-0 bg-white py-4 px-5 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235) text-left"
                    type="button"
                    data-te-collapse-init=""
                    data-te-collapse-collapsed=""
                    data-te-target="#collapseTwo"
                    aria-expanded="true"
                    aria-controls="collapseTwo"
                >
                    암롤박스는 하중이 어디까지 가능한가요?
                    <span className="material-icons-round ml-auto -mr-1 h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                    expand_more
                    </span>
                </button>
                </h6>
                <div
                id="collapseTwo"
                className="hidden"
                aria-labelledby="headingTwo"
                data-te-parent="#accordionExample"
                >
                <div className="py-4 px-5">
                    <strong>강조할 부분</strong> 여기에 내용입력
                </div>
                </div>
            </div>
            {/* 아코디언 2 */}
            <div className="rounded-t-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                <h6 className="mb-0 font-['pretendard']" id="headingThree">
                <button
                    className="group relative flex w-full items-center rounded-t-[15px] border-0 bg-white py-4 px-5 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235) text-left"
                    type="button"
                    data-te-collapse-init=""
                    data-te-collapse-collapsed=""
                    data-te-target="#collapseThree"
                    aria-expanded="true"
                    aria-controls="collapseThree"
                >
                    암롤박스는 하중이 어디까지 가능한가요?
                    <span className="material-icons-round ml-auto -mr-1 h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                    expand_more
                    </span>
                </button>
                </h6>
                <div
                id="collapseThree"
                className="hidden"
                aria-labelledby="headingThree"
                data-te-parent="#accordionExample"
                >
                <div className="py-4 px-5">
                    <strong>강조할 부분</strong> 여기에 내용입력
                </div>
                </div>
            </div>
            {/* 아코디언 3 */}
            </div>
        </section>
        {/* 1 */}
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
        </>
    );
}
  