import React from 'react';
import Page from '../../components/Page';
import aboutStyles from '../../styles/About.module.scss';
import poonworldmap from '../../public/svg/poonworldmap.svg';
import poparty from '../../public/svg/poparty.svg';
import footprints from '../../assets/t-shirt-hiking-boot-footprint-clip-art-footprint-1e19238d33f89455b11c65ed08cc5031 1.png';
import map from '../../assets/NigeriaMap.png';
import Image from 'next/image';
import Hero from '../../components/Hero';

const about = () => {
  return (
    <Page title="About">
      <main className="container">
        <Hero
          subtitle="About"
          title="#23ForObi"
          description="This is everything you need to know about the #23ForObi online
              campaign"
        />
        {/* Hero */}
        {/*<div className={aboutStyles.hero}>
          <div className="container">
            <h1 className={aboutStyles.hero__title}>
              <span>About</span>
              <br />
              <span>#23ForObi</span>
            </h1>
            <p className={aboutStyles.hero__subtitle}>
              This is everything you need to know about the #23ForObi online
              campaign
            </p>
          </div>
        </div>*/}
        {/* /Hero */}
        <div className="container">
          {/* About */}
          <div className={aboutStyles.about}>
            <div className={aboutStyles.about__information}>
              <div className={aboutStyles.about__heading}>200M Nigerians</div>
              <p>
                We are a volunteer force of professionals scattered all over the
                world, we are dedicated to championing the cause of #23forObi to
                liberate 200 million Nigerians from poverty and impending doom.
              </p>
            </div>
            <div className={aboutStyles.about__image}>
              <Image
                src={poonworldmap.src}
                layout="fill"
                alt="Peter Obi on world map"
              ></Image>
            </div>
            <div className={aboutStyles.about__aim}>
              <Image src={footprints} width="47.36px" height="75px" alt="" />
              <div className={aboutStyles.about__heading}>
                <h5 className="text-[#2F3733] font-bold text-5xl">774 LGAs</h5>
                <p className="text-[#000000] font-normal py-2 text-justify">
                  With footprints across every villages, we will take back
                  Nigeria one village at a time.
                  <br /> Join us!
                </p>
              </div>
            </div>
          </div>
          {/* /About */}
          {/* Goals */}
          <div className={aboutStyles.about}>
            <div className={aboutStyles.about__information}>
              <div className={aboutStyles.about__heading}>23 Votes</div>
              <p>
                The goal is to deliver at least 23 votes per village within each
                state and with your help and the help of your loved ones, we can
                do this.
              </p>
            </div>
            <div className={aboutStyles.about__image}>
              <Image src={poparty.src} layout="fill" alt="labor party"></Image>
            </div>
            <div className={aboutStyles.about__aim}>
              <Image src={map} alt="" />
              <div className={aboutStyles.about__heading}>
                <h5 className="text-[#2F3733] font-bold text-5xl">36 states</h5>
                <p className="text-[#000000] font-normal py-2 text-justify">
                  Across the 36 States and Abuja, join us and deliver 23 votes
                  for Peter Obi.
                </p>
              </div>
            </div>
          </div>
          {/* /Goals */}
          {/* HelpPO */}
          <section className={aboutStyles.helppo}>
            <h2 className={aboutStyles.helppo__title}>
              Things you can do to help Peter Obi
            </h2>
            <p className={aboutStyles.helppo__subtitle}>
              These are the things you can do to help Peter Obi win this
              election
            </p>
            <div className={aboutStyles.helppo__stepOne}>
              <div>
                <svg
                  width="805"
                  height="334"
                  viewBox="0 0 805 334"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_f_1218_22226)">
                    <path
                      d="M578.94 298L36 284.426L110.037 273.938H768.969L578.94 298Z"
                      fill="#9E9E9E"
                      floodOpacity="0.9"
                    />
                  </g>
                  <path
                    d="M597.32 273.835L655.061 22.884C656.807 15.2968 654.084 7.37736 648.041 2.46791L639.404 0L77.9544 246.174C63.7639 275.172 77.3374 281.959 86.5921 282.576L577.815 289.149C587.112 289.274 595.235 282.895 597.32 273.835Z"
                    fill="#62F08B"
                  />
                  <path
                    d="M639.254 0H181.208C170.728 0 161.392 6.61792 157.921 16.5057L71.3096 263.267C68.5132 271.234 74.3649 279.593 82.8079 279.692L576.414 285.486C585.098 285.588 592.684 279.639 594.657 271.183L653.675 18.1712C655.841 8.88364 648.791 0 639.254 0Z"
                    fill="#E4FFEC"
                  />
                  <path
                    d="M187.228 20.5606C187.927 18.5913 189.79 17.2754 191.88 17.2754H235.8C237.414 17.2754 238.593 18.7979 238.19 20.36L230.07 51.8255C229.507 54.0051 227.542 55.528 225.291 55.528H178.315C176.61 55.528 175.419 53.8411 175.989 52.2348L187.228 20.5606Z"
                    fill="#81F9A4"
                  />
                  <path
                    d="M168.82 86.23C170.459 81.516 174.902 78.3562 179.893 78.3562H267.638C271.207 78.3562 273.849 81.675 273.049 85.1534L250.017 185.316C249.051 189.519 245.31 192.497 240.998 192.497H139.691C135.871 192.497 133.192 188.729 134.446 185.121L168.82 86.23Z"
                    fill="#F3FFF7"
                    stroke="#CDFFDB"
                    strokeWidth="1.23395"
                  />
                  <path
                    d="M247.891 27.7935C248.456 25.2529 250.709 23.4453 253.312 23.4453H600.149C603.581 23.4453 606.191 26.5264 605.627 29.911C605.18 32.5885 602.864 34.5509 600.149 34.5509H253.312C249.759 34.5509 247.12 31.2613 247.891 27.7935Z"
                    fill="#62F08B"
                  />
                  <path
                    d="M246.141 39.494C246.286 38.7723 246.919 38.2528 247.655 38.2528H602.053C603.196 38.2528 604.065 39.279 603.877 40.4064C603.728 41.2995 602.955 41.9535 602.05 41.9519L247.653 41.3409C246.679 41.3392 245.95 40.4484 246.141 39.494Z"
                    fill="#62F08B"
                  />
                  <path
                    d="M288.612 82.0875C289.177 79.5469 291.43 77.7393 294.033 77.7393H341.019C344.451 77.7393 347.061 80.8203 346.497 84.2049C346.05 86.8824 343.734 88.8448 341.019 88.8448H294.033C290.48 88.8448 287.841 85.5553 288.612 82.0875Z"
                    fill="#81F9A4"
                  />
                  <path
                    d="M125.73 222.141C126.295 219.601 128.548 217.793 131.151 217.793H401.483C404.914 217.793 407.525 220.874 406.96 224.259C406.514 226.936 404.198 228.899 401.483 228.899H131.151C127.598 228.899 124.96 225.609 125.73 222.141Z"
                    fill="#62F08B"
                  />
                  <path
                    d="M428.049 222.141C428.613 219.601 430.866 217.793 433.469 217.793H573.002C576.434 217.793 579.044 220.874 578.48 224.259C578.033 226.936 575.717 228.899 573.002 228.899H433.469C429.917 228.899 427.278 225.609 428.049 222.141Z"
                    fill="#62F08B"
                  />
                  <path
                    d="M284.91 110.468C285.474 107.928 287.728 106.12 290.33 106.12L408.886 106.12C412.318 106.12 414.928 109.201 414.364 112.586C413.917 115.263 411.601 117.226 408.886 117.226H290.33C286.778 117.226 284.139 113.936 284.91 110.468Z"
                    fill="#81F9A4"
                  />
                  <path
                    d="M279.357 142.551C279.922 140.011 282.175 138.203 284.778 138.203L403.334 138.203C406.765 138.203 409.375 141.284 408.811 144.669C408.365 147.346 406.048 149.309 403.334 149.309H284.778C281.225 149.309 278.586 146.019 279.357 142.551Z"
                    fill="#81F9A4"
                  />
                  <path
                    d="M273.187 174.634C273.752 172.094 276.005 170.286 278.608 170.286L397.164 170.286C400.595 170.286 403.205 173.367 402.641 176.752C402.195 179.429 399.878 181.392 397.164 181.392H278.608C275.055 181.392 272.417 178.102 273.187 174.634Z"
                    fill="#81F9A4"
                  />
                  <path
                    d="M273.187 248.671C273.752 246.131 276.005 244.323 278.608 244.323L569.917 244.323C573.349 244.323 575.959 247.404 575.395 250.789C574.948 253.466 572.632 255.429 569.917 255.429H278.608C275.055 255.429 272.417 252.139 273.187 248.671Z"
                    fill="#62F08B"
                  />
                  <path
                    d="M282.691 124.036C283.111 122.217 284.731 120.928 286.599 120.928L539.715 120.928C542.173 120.928 544.053 123.119 543.679 125.548C543.378 127.504 541.695 128.948 539.715 128.948H286.599C284.02 128.948 282.111 126.549 282.691 124.036Z"
                    fill="#2EE061"
                  />
                  <path
                    d="M277.138 156.119C277.558 154.3 279.179 153.011 281.046 153.011L534.163 153.011C536.621 153.011 538.5 155.202 538.126 157.631C537.825 159.587 536.142 161.031 534.163 161.031H281.046C278.467 161.031 276.559 158.632 277.138 156.119Z"
                    fill="#2EE061"
                  />
                  <path
                    d="M270.969 188.201C271.388 186.382 273.009 185.093 274.876 185.093L527.993 185.093C530.451 185.093 532.33 187.284 531.956 189.713C531.655 191.669 529.972 193.113 527.993 193.113H274.876C272.297 193.113 270.389 190.714 270.969 188.201Z"
                    fill="#2EE061"
                  />
                  <path
                    d="M369.435 82.0875C370 79.5469 372.253 77.7393 374.856 77.7393H421.843C425.274 77.7393 427.884 80.8203 427.32 84.2049C426.874 86.8824 424.557 88.8448 421.843 88.8448H374.856C371.303 88.8448 368.665 85.5553 369.435 82.0875Z"
                    fill="#81F9A4"
                  />
                  <path
                    d="M449.642 82.0875C450.207 79.5469 452.46 77.7393 455.063 77.7393H502.05C505.481 77.7393 508.091 80.8203 507.527 84.2049C507.081 86.8824 504.764 88.8448 502.05 88.8448H455.063C451.51 88.8448 448.872 85.5553 449.642 82.0875Z"
                    fill="#81F9A4"
                  />
                  <path
                    d="M529.849 82.0875C530.414 79.5469 532.667 77.7393 535.27 77.7393H582.257C585.688 77.7393 588.298 80.8203 587.734 84.2049C587.288 86.8824 584.971 88.8448 582.257 88.8448H535.27C531.717 88.8448 529.079 85.5553 529.849 82.0875Z"
                    fill="#81F9A4"
                  />
                  <defs>
                    <filter
                      id="filter0_f_1218_22226"
                      x="0.215321"
                      y="238.153"
                      width="804.538"
                      height="95.6319"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="17.8923"
                        result="effect1_foregroundBlur_1218_22226"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
              <div>
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle opacity="0.1" cx="24" cy="24" r="24" fill="#018226" />
                  <path
                    d="M29.9375 31.6875V34H19.9375V31.6875H23.6V21.15C23.6 20.7333 23.6125 20.3042 23.6375 19.8625L21.0375 22.0375C20.8875 22.1542 20.7375 22.2292 20.5875 22.2625C20.4458 22.2875 20.3083 22.2875 20.175 22.2625C20.05 22.2375 19.9375 22.1958 19.8375 22.1375C19.7375 22.0708 19.6625 22 19.6125 21.925L18.6375 20.5875L24.15 15.9H26.6875V31.6875H29.9375Z"
                    fill="#018226"
                  />
                </svg>
                <p className={aboutStyles.helppo__stepOne_title}>
                  Sensitize people around you{' '}
                  <span style={{ fontWeight: 600 }}>to get their PVC</span>
                </p>
                <p className={aboutStyles.helppo__stepOne_subtitle}>
                  You can always call the people close to you and sensitize them
                  on the importance of getting their Personal Voters Card{' '}
                  <b>(PVC)</b>.
                </p>
              </div>
            </div>
            <div className={aboutStyles.helppo__stepOne}>
              <div>
                <svg
                  width="636"
                  height="467"
                  viewBox="0 0 636 467"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_f_1218_22249)">
                    <path
                      d="M338.958 430.602L36 310.598L61.3157 292.743L514.093 299.387H600L338.958 430.602Z"
                      fill="#9E9E9E"
                      floodOpacity="0.5"
                    />
                  </g>
                  <path
                    d="M52.1855 265.157V53.8691L298.388 137.478L296.706 374.276L347.741 403.455L338.768 405.138C323.123 403.275 307.765 399.505 293.037 393.912L87.0502 315.69C66.0624 307.721 52.1855 287.607 52.1855 265.157Z"
                    fill="#81F9A4"
                  />
                  <path
                    d="M519.281 289.397L522.719 59.4795L298.388 137.477L294.855 346.452C294.167 387.129 336.966 413.958 373.277 395.612L489.61 336.835C507.552 327.769 518.981 309.497 519.281 289.397Z"
                    fill="#03D13F"
                  />
                  <path
                    d="M298.388 137.478L52.1855 53.8688L295.584 0L522.718 59.4801L298.388 137.478Z"
                    fill="#CDFFDB"
                  />
                  <path
                    d="M323.065 80.8033L240.062 52.7467L263.617 46.5742L343.254 74.0697L323.065 80.8033Z"
                    fill="#2F3733"
                  />
                  <path
                    d="M275.173 14.5414L246.231 47.6957L242.306 52.1848L324.186 79.6803L356.104 36.1745C359.413 31.6638 357.268 25.2361 351.913 23.6172L299.128 7.65903C290.484 5.04587 281.111 7.73876 275.173 14.5414Z"
                    fill="white"
                    stroke="#F1F1F1"
                    strokeWidth="1.35135"
                  />
                  <path
                    d="M266.173 55.4118L257.534 52.2686C256.665 51.9525 256.363 50.8769 256.94 50.1548L263.56 41.8749C264.268 40.9902 265.452 40.6405 266.526 40.9989L274.78 43.7517C275.643 44.0392 275.981 45.079 275.453 45.8188L269.296 54.4423C268.591 55.4303 267.313 55.8268 266.173 55.4118Z"
                    fill="#D60602"
                  />
                  <path
                    d="M280.735 60.9812L272.583 57.874C271.743 57.554 271.444 56.5194 271.983 55.8007L278.151 47.5721C278.849 46.6409 280.064 46.2611 281.168 46.6293L289.362 49.362C290.224 49.6496 290.562 50.6893 290.034 51.4291L283.897 60.0261C283.183 61.0266 281.883 61.419 280.735 60.9812Z"
                    fill="#56CE70"
                  />
                  <path
                    d="M295.876 66.5925L287.724 63.4853C286.885 63.1654 286.585 62.1308 287.124 61.412L293.292 53.1834C293.99 52.2522 295.206 51.8724 296.31 52.2406L304.504 54.9733C305.366 55.2609 305.704 56.3007 305.176 57.0404L299.039 65.6374C298.324 66.6379 297.025 67.0304 295.876 66.5925Z"
                    fill="#5678CE"
                  />
                  <path
                    d="M311.579 72.2048L303.427 69.0976C302.588 68.7777 302.289 67.7431 302.827 67.0243L308.995 58.7957C309.693 57.8646 310.909 57.4847 312.013 57.8529L320.207 60.5856C321.069 60.8732 321.407 61.913 320.879 62.6527L314.742 71.2497C314.027 72.2502 312.728 72.6427 311.579 72.2048Z"
                    fill="#CE9E56"
                  />
                  <path
                    d="M276.349 41.4686L268.199 38.7502C267.324 38.4584 266.992 37.3955 267.545 36.6577L273.664 28.494C274.362 27.5628 275.578 27.183 276.682 27.5512L284.833 30.2696C285.708 30.5613 286.04 31.6242 285.487 32.362L279.367 40.5258C278.669 41.4569 277.453 41.8368 276.349 41.4686Z"
                    fill="#018226"
                  />
                  <path
                    d="M290.931 47.0799L282.78 44.3615C281.905 44.0697 281.573 43.0069 282.126 42.269L288.245 34.1053C288.943 33.1741 290.159 32.7943 291.263 33.1625L299.414 35.8809C300.289 36.1727 300.621 37.2355 300.068 37.9734L293.948 46.1371C293.25 47.0683 292.035 47.4481 290.931 47.0799Z"
                    fill="#CE9E56"
                  />
                  <path
                    d="M306.072 52.6912L297.921 49.9728C297.047 49.6811 296.715 48.6182 297.268 47.8803L303.387 39.7166C304.085 38.7855 305.301 38.4056 306.405 38.7738L314.555 41.4922C315.43 41.784 315.762 42.8468 315.209 43.5847L309.09 51.7484C308.392 52.6796 307.176 53.0594 306.072 52.6912Z"
                    fill="#D60602"
                  />
                  <path
                    d="M321.776 58.3035L313.625 55.5851C312.751 55.2934 312.419 54.2305 312.972 53.4927L319.091 45.3289C319.789 44.3978 321.005 44.0179 322.109 44.3861L330.26 47.1045C331.134 47.3963 331.466 48.4591 330.913 49.197L324.794 57.3607C324.096 58.2919 322.88 58.6717 321.776 58.3035Z"
                    fill="#56CE70"
                  />
                  <path
                    d="M286.443 28.0018L278.292 25.2834C277.418 24.9916 277.086 23.9287 277.639 23.1909L283.758 15.0272C284.456 14.096 285.672 13.7162 286.776 14.0844L294.927 16.8028C295.801 17.0945 296.133 18.1574 295.58 18.8952L289.461 27.059C288.763 27.9901 287.547 28.37 286.443 28.0018Z"
                    fill="#5678CE"
                  />
                  <path
                    d="M301.025 33.6131L292.874 30.8947C292 30.6029 291.668 29.5401 292.221 28.8022L298.34 20.6385C299.038 19.7073 300.254 19.3275 301.358 19.6957L309.509 22.4141C310.383 22.7059 310.715 23.7687 310.162 24.5066L304.043 32.6703C303.345 33.6015 302.129 33.9813 301.025 33.6131Z"
                    fill="#CE5D56"
                  />
                  <path
                    d="M316.168 39.2235L308.017 36.505C307.142 36.2133 306.81 35.1504 307.363 34.4126L313.483 26.2489C314.181 25.3177 315.396 24.9379 316.5 25.306L324.651 28.0245C325.526 28.3162 325.858 29.3791 325.305 30.1169L319.186 38.2806C318.488 39.2118 317.272 39.5916 316.168 39.2235Z"
                    fill="#018226"
                  />
                  <path
                    d="M331.871 44.8358L323.72 42.1173C322.845 41.8256 322.513 40.7627 323.066 40.0249L329.186 31.8612C329.884 30.93 331.1 30.5502 332.204 30.9183L340.354 33.6368C341.229 33.9285 341.561 34.9914 341.008 35.7292L334.889 43.8929C334.191 44.8241 332.975 45.2039 331.871 44.8358Z"
                    fill="#5678CE"
                  />
                  <defs>
                    <filter
                      id="filter0_f_1218_22249"
                      x="0.220001"
                      y="256.963"
                      width="635.56"
                      height="209.419"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="17.89"
                        result="effect1_foregroundBlur_1218_22249"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
              <div>
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle opacity="0.1" cx="24" cy="24" r="24" fill="#018226" />
                  <path
                    d="M29.2625 31.125C29.5958 31.125 29.8583 31.2208 30.05 31.4125C30.25 31.5958 30.35 31.8417 30.35 32.15V34H17.95V32.975C17.95 32.7667 17.9917 32.55 18.075 32.325C18.1667 32.0917 18.3083 31.8833 18.5 31.7L23.9875 26.2C24.4458 25.7333 24.8542 25.2875 25.2125 24.8625C25.5792 24.4375 25.8833 24.0167 26.125 23.6C26.3667 23.1833 26.55 22.7625 26.675 22.3375C26.8083 21.9042 26.875 21.45 26.875 20.975C26.875 20.5417 26.8125 20.1625 26.6875 19.8375C26.5625 19.5042 26.3833 19.225 26.15 19C25.925 18.775 25.65 18.6083 25.325 18.5C25.0083 18.3833 24.65 18.325 24.25 18.325C23.8833 18.325 23.5417 18.3792 23.225 18.4875C22.9167 18.5875 22.6417 18.7333 22.4 18.925C22.1583 19.1083 21.9542 19.325 21.7875 19.575C21.6208 19.825 21.4958 20.1 21.4125 20.4C21.2708 20.7833 21.0875 21.0375 20.8625 21.1625C20.6375 21.2875 20.3125 21.3167 19.8875 21.25L18.2625 20.9625C18.3875 20.0958 18.6292 19.3375 18.9875 18.6875C19.3458 18.0292 19.7917 17.4833 20.325 17.05C20.8667 16.6083 21.4833 16.2792 22.175 16.0625C22.875 15.8375 23.625 15.725 24.425 15.725C25.2583 15.725 26.0208 15.85 26.7125 16.1C27.4042 16.3417 27.9958 16.6875 28.4875 17.1375C28.9792 17.5875 29.3625 18.1292 29.6375 18.7625C29.9125 19.3958 30.05 20.1 30.05 20.875C30.05 21.5417 29.95 22.1583 29.75 22.725C29.5583 23.2917 29.2958 23.8333 28.9625 24.35C28.6375 24.8667 28.2542 25.3667 27.8125 25.85C27.3708 26.3333 26.9083 26.825 26.425 27.325L22.35 31.4875C22.7417 31.3708 23.1292 31.2833 23.5125 31.225C23.9042 31.1583 24.275 31.125 24.625 31.125H29.2625Z"
                    fill="#018226"
                  />
                </svg>

                <p className={aboutStyles.helppo__stepOne_title} >
                  Come out and vote{' '}
                  <span style={{ fontWeight: 600 }}>
                    VOTE THE{' '}
                    <span style={{ color: '#D60602' }}>LABOUR PARTY</span>
                  </span>
                </p>
                <p className={aboutStyles.helppo__stepOne_subtitle}>
                  Come out and vote en masse for the Labour Party presidential
                  candidate by the name{' '}
                  <b style={{ color: '#018226' }}>Peter Obi</b> and let’s make
                  Nigeria great again.
                </p>
              </div>
            </div>
          </section>
          {/* /HelpPO */}
        </div>
      </main>
    </Page>
  );
};

export default about;
