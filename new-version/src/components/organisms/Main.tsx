import React from 'react'

function Main() {
  return (
    <main>   
    {/* <!-- Hero Start --> */}
    <section
      className="pt-44"
      style={{background: "url('assets/images/hero/hero-three/hero-three-bg.jpg') no-repeat center center/cover"}} 
       >
      <div className="mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center pb-20">
          {/* <!-- Left --> */}
          <div className="lg:w-1/2">
            <h1
              className="text-5xl leading-snug xl:text-[66px] mb-8 xl:leading-normal font-bold text-white"
            >
              Hey, I am <br />
              Adam Boudjemaa <br />
              <span
                className="inline-block"
                style={{background: "url('assets/images/hero/hero-one/wide-line.svg') no-repeat bottom"}}
                 
              >
              Blockchain Lead</span>
            </h1>
            <p className="text-2xl text-borderl-500 mb-4">
              Agency work with top rated talented people provide blockchain quality
              services.
            </p>
            <div className="flex items-center gap-8 mt-10">
              <a
                href="#/"
                className="bg-new-500 text-interface-100 px-6 py-4 rounded-lg inline-flex justify-center items-center hover:bg-new-600 font-medium transition-all"
              >
                <span>Hire Me</span>
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 16.5L18 12.5M18 12.5L14 8.5M18 12.5L6 12.5"
                    stroke="#04091E"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a href="https://www.youtube.com/watch?v=XNhiqQJ01hQ" className="flex video-popup items-center gap-5">
                <span
                  className="w-[60px] pulsing-dev h-[60px] rounded-full grid place-items-center border border-new-500"
                >
                  <svg
                    width="18"
                    height="22"
                    viewBox="0 0 18 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 18.4719V3.52806C0 1.14774 2.63921 -0.284513 4.63497 1.01273L16.1303 8.48467C17.9503 9.6677 17.9503 12.3323 16.1303 13.5153L4.63496 20.9873C2.63921 22.2845 0 20.8523 0 18.4719Z"
                      fill="#DAED1A"
                    />
                  </svg>
                </span>
                <span
                  ><span className="text-white uppercase text-lg font-medium"
                    >WATCH</span>
                  <br />
                  <span className="text-base font-medium text-interface-200"
                    >Intro Video</span></span>
              </a>
            </div>
            <div className="pt-14">
              <p className="text-base text-interface-200">
                Over
                <span className="text-new-500 font-semibold text-xl"> 50,000+ client </span>
                all over the world.
              </p>
            </div>
          </div>
          {/* <!-- Right --> */}
          <div className="lg:w-1/2">
            <div>
              <img src="assets/images/core/1_Adam.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- Hero End --> */}

    {/* <!-- Social Link --> */}
    <section className="py-8">
      <div className="mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          <div className="group">
            <a
              href="https://ethereum.stackexchange.com/users/49141/adam-boudj"
              className="group-hover:bg-new-500 group-hover:border-transparent transition-all flex space-x-3 p-8 rounded-xl border border-dashed bg-[#0A1429] border-[#3A3E4E] items-center justify-center"
            >
              <svg
                className="group-hover:fill-interface-100 fill-white"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_537_18847)">
                  <path
                    d="M10.7402 24.731L27.9702 28.391L28.6919 24.9093L11.4619 21.2227L10.7402 24.731Z"
                  />
                  <path
                    d="M10.3584 29.2852H27.9684V32.8302H10.3584V29.2852Z"
                  />
                  <path
                    d="M13 16.385L28.9533 23.9283L30.4317 20.6883L14.47 13.125L13 16.385Z"
                  />
                  <path
                    d="M28.955 23.9294L28.9533 23.9277L28.9517 23.9294H28.955Z"
                    fill="white"
                  />
                  <path
                    d="M3.3335 25.7148V39.9998H34.9868V25.7148H31.4652V36.4282H6.85516V25.7148H3.3335Z"
                  />
                  <path
                    d="M17.4219 8.4375L30.9369 19.8925L33.1802 17.1425L19.6652 5.6875L17.4219 8.4375Z"
                  />
                  <path
                    d="M36.6669 14.3117L26.1635 0L23.3452 2.14333L33.8485 16.455L36.6669 14.3117Z"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_537_18847">
                    <rect width="40" height="40" />
                  </clipPath>
                </defs>
              </svg>
              <span
                className="text-white transition-all group-hover:text-interface-100 text-2xl font-semibold"
                >S. Overlfow</span>
            </a>
          </div>
          <div className="group">
            <a
              href="https://github.com/Aboudjem"
              className="group-hover:bg-new-500 group-hover:border-transparent transition-all flex space-x-3 p-8 rounded-xl border border-dashed bg-[#0A1429] border-[#3A3E4E] items-center justify-center"
            >
              <svg
                className="fill-white group-hover:fill-interface-500"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_537_18858)">
                  <path
                    d="M14.4272 32.1624C14.1491 32.2142 14.0276 32.3447 14.0625 32.5529C14.0971 32.7611 14.2534 32.8307 14.5311 32.7611C14.8092 32.6918 14.9306 32.57 14.8957 32.3965C14.8612 32.2057 14.705 32.1275 14.4272 32.1624Z"
                  />
                  <path
                    d="M12.943 32.3703C12.6652 32.3703 12.5264 32.4652 12.5264 32.6566C12.5264 32.8823 12.674 32.9775 12.969 32.9428C13.2469 32.9428 13.3859 32.8473 13.3859 32.6566C13.3859 32.4312 13.2382 32.3353 12.943 32.3703Z"
                  />
                  <path
                    d="M10.9119 32.2921C10.8425 32.4831 10.9555 32.613 11.2504 32.6828C11.5108 32.7865 11.6758 32.7346 11.7451 32.5265C11.7973 32.3358 11.6843 32.1972 11.4066 32.1098C11.1461 32.0406 10.9813 32.1005 10.9119 32.2921Z"
                  />
                  <path
                    d="M37.7994 2.20032C36.3323 0.733532 34.5663 0 32.4999 0H7.49995C5.43417 0 3.66748 0.733532 2.20032 2.20032C0.733532 3.66738 0 5.43408 0 7.49995V32.5002C0 34.5662 0.733532 36.3327 2.20032 37.7995C3.66738 39.2666 5.43417 40.0001 7.49995 40.0001H13.3333C13.7149 40.0001 14.0016 39.987 14.1925 39.9614C14.3833 39.9351 14.5741 39.8222 14.7652 39.6224C14.9564 39.4229 15.0516 39.132 15.0516 38.7502C15.0516 38.6984 15.0471 38.1075 15.0385 36.9791C15.0296 35.8504 15.0254 34.9564 15.0254 34.2966L14.4264 34.4008C14.0445 34.4701 13.5627 34.5007 12.981 34.4919C12.3996 34.4832 11.7962 34.4226 11.1713 34.3097C10.546 34.1967 9.96461 33.9364 9.42636 33.5287C8.88839 33.1204 8.50649 32.5867 8.28073 31.9271L8.02023 31.3278C7.84665 30.9289 7.57338 30.486 7.20005 30.0003C6.82671 29.5139 6.44919 29.184 6.06728 29.0104L5.88494 28.8802C5.76354 28.7934 5.65071 28.6888 5.54645 28.5674C5.44238 28.4456 5.3643 28.324 5.31222 28.2028C5.26014 28.0811 5.30337 27.9812 5.44238 27.9028C5.58139 27.8249 5.83286 27.7862 6.19762 27.7862L6.71826 27.8642C7.0656 27.9335 7.49503 28.1416 8.00746 28.4891C8.51953 28.8362 8.94047 29.2875 9.27039 29.8429C9.6699 30.5549 10.1512 31.0971 10.7157 31.4704C11.2798 31.8441 11.8485 32.0308 12.4213 32.0308C12.9941 32.0308 13.4889 31.9873 13.9057 31.9009C14.3221 31.8139 14.7128 31.6833 15.0775 31.5098C15.2338 30.3467 15.6592 29.4521 16.3534 28.8272C15.3639 28.7229 14.4743 28.5669 13.6841 28.3584C12.8944 28.1498 12.0783 27.8115 11.2364 27.3426C10.3941 26.8738 9.69544 26.2926 9.13987 25.5977C8.58438 24.9029 8.1285 23.9915 7.77286 22.8633C7.41704 21.7346 7.23909 20.4323 7.23909 18.9568C7.23909 16.8563 7.9251 15.0678 9.29657 13.5922C8.65407 12.0124 8.71472 10.2418 9.47872 8.27982C9.98221 8.12348 10.7289 8.24078 11.7184 8.63145C12.708 9.02238 13.4326 9.35668 13.8929 9.63406C14.3531 9.91152 14.7219 10.1461 14.9997 10.3373C16.6146 9.88589 18.2812 9.66023 19.9998 9.66023C21.7184 9.66023 23.3852 9.88589 25.0002 10.3373L25.9897 9.71232C26.6671 9.29547 27.4656 8.91357 28.3858 8.5665C29.306 8.21935 30.0089 8.12376 30.4953 8.2801C31.2762 10.2421 31.3461 12.0127 30.7032 13.5924C32.0746 15.0681 32.7608 16.8565 32.7608 18.9571C32.7608 20.4329 32.5829 21.7395 32.227 22.8764C31.8715 24.0135 31.4117 24.9253 30.847 25.611C30.2829 26.2969 29.5797 26.8737 28.7378 27.3428C27.8957 27.8114 27.0797 28.1503 26.2897 28.3582C25.4997 28.5667 24.6101 28.7234 23.6205 28.8276C24.5227 29.6086 24.974 30.8409 24.974 32.5252V38.7494C24.974 39.0446 25.0171 39.2832 25.1039 39.4655C25.1913 39.6477 25.3299 39.7732 25.5208 39.8432C25.7126 39.9125 25.881 39.9559 26.029 39.9731C26.1769 39.9905 26.3892 39.9993 26.667 39.9993H32.5003C34.5661 39.9993 36.3329 39.2657 37.7993 37.7987C39.2664 36.3316 39.9999 34.5648 39.9999 32.499V7.49995C39.9997 5.43408 39.2662 3.66711 37.7994 2.20032Z"
                  />
                  <path
                    d="M7.91658 29.1155C7.79517 29.202 7.8125 29.3409 7.96875 29.5319C8.1426 29.7054 8.28134 29.7315 8.38559 29.6099C8.507 29.5234 8.48967 29.3845 8.33315 29.1931C8.15966 29.0371 8.02083 29.011 7.91658 29.1155Z"
                  />
                  <path
                    d="M7.05753 28.4626C7.00554 28.5844 7.06629 28.6886 7.23987 28.7751C7.3786 28.8622 7.4918 28.8451 7.57836 28.7233C7.63035 28.6015 7.5696 28.4973 7.39602 28.4102C7.22244 28.358 7.10961 28.3755 7.05753 28.4626Z"
                  />
                  <path
                    d="M8.72426 30.1304C8.56783 30.2169 8.56783 30.3736 8.72426 30.599C8.8805 30.825 9.02781 30.8856 9.16691 30.7812C9.32325 30.6596 9.32325 30.4946 9.16691 30.2862C9.02818 30.0611 8.8805 30.0084 8.72426 30.1304Z"
                  />
                  <path
                    d="M9.63557 31.3014C9.47923 31.4406 9.51371 31.6049 9.73973 31.7965C9.94779 32.0044 10.1215 32.0306 10.2604 31.8739C10.3994 31.7354 10.3646 31.5706 10.1562 31.3796C9.94815 31.1716 9.77448 31.1453 9.63557 31.3014Z"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_537_18858">
                    <rect width="40" height="40" />
                  </clipPath>
                </defs>
              </svg>

              <span
                className="text-white transition-all group-hover:text-interface-100 text-2xl font-semibold"
                >Github</span>
            </a>
          </div>
          <div className="group">
            <a
              href="https://medium.com/@adamboudj"
              className="group-hover:bg-new-500 group-hover:border-transparent transition-all flex space-x-3 p-8 rounded-xl border border-dashed bg-[#0A1429] border-[#3A3E4E] items-center justify-center"
            >
              <svg
                className="fill-white group-hover:fill-interface-100"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.5622 19.9991C22.5622 26.2723 17.5115 31.3577 11.2811 31.3577C5.0507 31.3577 0 26.2723 0 19.9991C0 13.726 5.0507 8.64062 11.2811 8.64062C17.5114 8.64062 22.5622 13.726 22.5622 19.9991Z"
                />
                <path
                  d="M34.9378 19.9987C34.9378 25.9038 32.4124 30.6907 29.2973 30.6907C26.1821 30.6907 23.6567 25.9038 23.6567 19.9987C23.6567 14.0936 26.1821 9.30664 29.2973 9.30664C32.4125 9.30664 34.9378 14.0936 34.9378 19.9987Z"
                />
                <path
                  d="M39.9998 19.9995C39.9998 25.2902 39.1116 29.5791 38.016 29.5791C36.9203 29.5791 36.0322 25.2902 36.0322 19.9995C36.0322 14.7088 36.9203 10.4199 38.016 10.4199C39.1116 10.4199 39.9998 14.7088 39.9998 19.9995Z"
                />
              </svg>
              <span
                className="text-white transition-all group-hover:text-interface-100 text-2xl font-semibold"
                >Medium</span>
            </a>
          </div>
          <div className="group">
            <a
              href="https://www.linkedin.com/in/adamboudjemaa"
              className="group-hover:bg-new-500 group-hover:border-transparent transition-all flex space-x-3 p-8 rounded-xl border border-dashed bg-[#0A1429] border-[#3A3E4E] items-center justify-center"
            >
              <svg
                className="fill-white group-hover:fill-interface-100"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_537_18883)">
                  <path
                    d="M34.5455 0H5.45455C4.00791 0 2.62053 0.574674 1.5976 1.5976C0.574674 2.62053 0 4.00791 0 5.45455L0 34.5455C0 35.9921 0.574674 37.3795 1.5976 38.4024C2.62053 39.4253 4.00791 40 5.45455 40H34.5455C35.9921 40 37.3795 39.4253 38.4024 38.4024C39.4253 37.3795 40 35.9921 40 34.5455V5.45455C40 4.00791 39.4253 2.62053 38.4024 1.5976C37.3795 0.574674 35.9921 0 34.5455 0ZM13.6364 31.6545C13.6367 31.7655 13.6151 31.8754 13.5728 31.9779C13.5306 32.0805 13.4685 32.1737 13.3902 32.2522C13.3119 32.3308 13.2188 32.3931 13.1164 32.4356C13.0139 32.4781 12.9041 32.5 12.7932 32.5H9.2C9.08889 32.5003 8.97882 32.4786 8.8761 32.4363C8.77339 32.3939 8.68007 32.3316 8.6015 32.253C8.52294 32.1745 8.46067 32.0812 8.41829 31.9784C8.37591 31.8757 8.35425 31.7657 8.35455 31.6545V16.5909C8.35455 16.3667 8.44362 16.1516 8.60217 15.9931C8.76073 15.8345 8.97577 15.7455 9.2 15.7455H12.7932C13.017 15.7461 13.2315 15.8354 13.3895 15.9939C13.5476 16.1524 13.6364 16.3671 13.6364 16.5909V31.6545ZM10.9955 14.3182C10.3212 14.3182 9.66209 14.1182 9.10147 13.7436C8.54084 13.3691 8.10389 12.8366 7.84587 12.2137C7.58784 11.5908 7.52033 10.9053 7.65187 10.244C7.78341 9.58271 8.10809 8.97527 8.58486 8.4985C9.06163 8.02173 9.66908 7.69705 10.3304 7.5655C10.9917 7.43396 11.6771 7.50148 12.3001 7.7595C12.923 8.01753 13.4554 8.45448 13.83 9.0151C14.2046 9.57572 14.4045 10.2348 14.4045 10.9091C14.4045 11.8132 14.0454 12.6804 13.406 13.3197C12.7667 13.959 11.8996 14.3182 10.9955 14.3182ZM32.4182 31.7136C32.4185 31.8158 32.3986 31.917 32.3596 32.0114C32.3207 32.1059 32.2634 32.1917 32.1912 32.2639C32.119 32.3362 32.0332 32.3934 31.9387 32.4324C31.8443 32.4713 31.7431 32.4912 31.6409 32.4909H27.7773C27.6751 32.4912 27.5739 32.4713 27.4795 32.4324C27.385 32.3934 27.2992 32.3362 27.227 32.2639C27.1548 32.1917 27.0975 32.1059 27.0586 32.0114C27.0196 31.917 26.9997 31.8158 27 31.7136V24.6568C27 23.6023 27.3091 20.0386 24.2432 20.0386C21.8682 20.0386 21.3841 22.4773 21.2886 23.5727V31.7227C21.2887 31.9269 21.2083 32.1229 21.065 32.2684C20.9217 32.4138 20.7269 32.497 20.5227 32.5H16.7909C16.6889 32.5 16.588 32.4799 16.4938 32.4408C16.3996 32.4017 16.3141 32.3444 16.2421 32.2722C16.1701 32.2 16.1131 32.1143 16.0742 32.02C16.0354 31.9257 16.0156 31.8247 16.0159 31.7227V16.525C16.0156 16.423 16.0354 16.322 16.0742 16.2277C16.1131 16.1334 16.1701 16.0477 16.2421 15.9755C16.3141 15.9033 16.3996 15.846 16.4938 15.8069C16.588 15.7678 16.6889 15.7477 16.7909 15.7477H20.5227C20.7289 15.7477 20.9266 15.8296 21.0723 15.9754C21.2181 16.1212 21.3 16.3189 21.3 16.525V17.8386C22.1818 16.5136 23.4886 15.4955 26.2773 15.4955C32.4545 15.4955 32.4136 21.2636 32.4136 24.4318L32.4182 31.7136Z"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_537_18883">
                    <rect width="40" height="40" />
                  </clipPath>
                </defs>
              </svg>

              <span
                className="text-white transition-all group-hover:text-interface-100 text-2xl font-semibold"
                >Linkedin</span>
            </a>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- Social Link End --> */}

    {/* <!-- Services --> */}
    <section className="py-120">
      <div className="mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 gap-5 xl:gap-10 lg:gap-16 place-items-center mb-14"
        >
          <div className="xl:col-span-2">
            <h2 className="text-white font-bold lg:text-5xl text-4xl capitalize leading-snug">
              Expertise
              <span className="relative">
                <span className="relative z-20">Service!</span>
                <svg
                  className="absolute  -left-1 z-0 -top-2 hidden md:block"
                  width="206"
                  height="75"
                  viewBox="0 0 206 75"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.1282 14.4113C66.5337 9.03391 151.827 4.45371 187.897 15.4254C226.745 27.2424 180.759 53.1141 129.951 64.6499C77.3856 76.585 18.356 73.496 6.50757 58.6571C-13.495 33.6061 61.3156 8.13765 120.395 3.11796"
                    stroke="#DAED1A"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </svg>
                Let’s check it out.
              </span>
            </h2>
          </div>
          <div className="xl:col-span-3">
            <p className="text-white text-xl">
              We put your ideas and thus your wishes in the form of a unique
              web, decentralized projects that inspire you and your customers. We’ve expert
              team to solve your problems.
            </p>
          </div>
        </div>
        <div className="swiper devServiceSlider">
          <div className="swiper-wrapper pb-10 lg:pb-16">
            <article className="swiper-slide">
              <div
                className="relative transition duration-200 cursor-pointer border border-transparent hover:border-new-500 bg-interface-600 px-7 py-8 group shadow-customThree rounded-custom"
              >
                <div
                  className="w-[70px] h-[70px] rounded-full bg-new-500 group-hover:bg-opacity-10 bg-opacity-10 pl-5 pt-3 mb-6"
                >
                  <svg
                    className="stroke-new-500"
                    width="58"
                    height="58"
                    viewBox="0 0 58 58"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_123_2937)">
                      <path
                        d="M53.5613 4.88276C51.5972 2.91869 48.3713 3.06301 46.5905 5.19462L38.5469 14.8224L43.6218 19.8973L53.2496 11.8536C55.3809 10.0727 55.5252 6.84671 53.5613 4.88276Z"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M57.1515 21.3477V46.9823C57.1515 51.136 53.7846 54.5041 49.6309 54.5041H42.6758C46.8295 54.5041 50.1964 51.136 50.1964 46.9823V21.3477H57.1515Z"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.0598 17.3598C11.3095 17.3598 12.3227 16.3467 12.3227 15.0969C12.3227 13.8471 11.3095 12.834 10.0598 12.834C8.81001 12.834 7.79688 13.8471 7.79688 15.0969C7.79688 16.3467 8.81001 17.3598 10.0598 17.3598Z"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M18.052 17.3598C19.3017 17.3598 20.3149 16.3467 20.3149 15.0969C20.3149 13.8471 19.3017 12.834 18.052 12.834C16.8022 12.834 15.7891 13.8471 15.7891 15.0969C15.7891 16.3467 16.8022 17.3598 18.052 17.3598Z"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M26.0442 17.3598C27.2939 17.3598 28.3071 16.3467 28.3071 15.0969C28.3071 13.8471 27.2939 12.834 26.0442 12.834C24.7944 12.834 23.7812 13.8471 23.7812 15.0969C23.7812 16.3467 24.7944 17.3598 26.0442 17.3598Z"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M38.547 14.8223L43.5002 8.89365C43.229 8.86408 42.9539 8.84766 42.6747 8.84766H8.37137C4.21769 8.84766 0.849609 12.2146 0.849609 16.3694V21.3474H29.2728C31.0918 19.1368 31.5654 16.2453 38.547 14.8223Z"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M43.6229 19.8964C43.5223 20.4003 43.3941 20.8834 43.2422 21.3466H50.1964V16.3686C50.1964 15.7535 50.1209 15.1562 49.9816 14.584L43.6229 19.8964Z"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M54.3544 10.5176C54.0802 11.0121 53.7118 11.4664 53.2495 11.8526L49.9805 14.5838C50.1197 15.1561 50.1952 15.7533 50.1952 16.3684V21.3465H57.1503V16.3684C57.1503 14.0044 56.0593 11.8964 54.3544 10.5176Z"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M43.241 21.3477C41.2519 27.413 35.055 29.9169 29.538 26.8586C27.7016 25.8405 27.3455 23.3383 28.8237 21.847C28.9839 21.6853 29.1323 21.5185 29.2728 21.3477H0.849609V46.9823C0.849609 51.136 4.21769 54.5041 8.37137 54.5041H42.6747C46.8284 54.5041 50.1954 51.136 50.1954 46.9823V21.3477H43.241Z"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M38.5475 14.8223C31.0265 16.3552 31.0585 19.5924 28.8243 21.8466C27.3462 23.338 27.7021 25.8401 29.5385 26.8582C35.4768 30.1501 42.2039 26.9986 43.6223 19.8972L38.5475 14.8223Z"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19.2668 32.2168H10.7042C9.09859 32.2168 7.79688 33.5185 7.79688 35.1242V43.6868C7.79688 45.2924 9.09859 46.5941 10.7042 46.5941H19.2668C20.8725 46.5941 22.1742 45.2924 22.1742 43.6868V35.1242C22.1742 33.5185 20.8725 32.2168 19.2668 32.2168Z"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M41.2974 32.6719H29.0196C27.7359 32.6719 26.6953 33.7125 26.6953 34.9962C26.6953 36.2799 27.7359 37.3205 29.0196 37.3205H41.2975C42.5812 37.3205 43.6218 36.2799 43.6218 34.9962C43.6218 33.7125 42.5811 32.6719 41.2974 32.6719Z"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M41.2974 41.4902H29.0196C27.7359 41.4902 26.6953 42.5308 26.6953 43.8145C26.6953 45.0982 27.7359 46.1388 29.0196 46.1388H41.2975C42.5812 46.1388 43.6218 45.0982 43.6218 43.8145C43.6218 42.5309 42.5811 41.4902 41.2974 41.4902Z"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_123_2937">
                        <rect width="58" height="58" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h3 className="mb-6 font-semibold text-2xl text-white">
                  Website/ App Design UX/ UI Design &
                </h3>
                <p className="pb-6 text-white text-base">
                Unlock your digital potential with captivating website and app designs.
                Our expert UX/UI services create delightful user experiences, driving your online success.
                </p>
                <a
                  href="service-pd.html"
                  className="underline flex relative group-hover:text-new-500 z-10 items-center text-white"
                >
                  <span>Learn more</span>
                  <svg
                    className="stroke-white group-hover:stroke-new-500"
                    width="25"
                    height="26"
                    viewBox="0 0 25 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.10156 18.0748L17.2491 7.92383"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.10156 7.92383H17.2491V18.0748"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <img
                  src="assets/images/bg/services-circle.png"
                  className="absolute top-5 -right-12 opacity-0 group-hover:opacity-100 transition-opacity"
                  alt=""
                />
              </div>
            </article>
            <article className="swiper-slide">
              <div
                className="relative transition duration-200 cursor-pointer border border-transparent hover:border-new-500 bg-interface-600 px-7 py-8 group shadow-customThree rounded-custom"
              >
                <div
                  className="w-[70px] h-[70px] rounded-full bg-new-500 group-hover:bg-opacity-10 bg-opacity-10 pl-5 pt-3 mb-6"
                >
                  <svg
                    className="stroke-new-500"
                    width="58"
                    height="58"
                    viewBox="0 0 58 58"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M50.7949 56.2427H12.2161C9.49188 56.2427 7.20703 54.0457 7.20703 51.2336V5.27296C7.20703 3.33963 8.78885 1.75781 10.7222 1.75781H47.1919C49.1252 1.75781 50.707 3.33963 50.707 5.27296V56.2427H50.7949Z"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.20703 51.2337C7.20703 53.9579 9.404 56.2428 12.2161 56.2428H50.707V46.2246H12.2161C9.49188 46.2246 7.20703 48.5095 7.20703 51.2337Z"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17.8398 51.2344H40.1611"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22.4102 24.342L35.9435 7.99654C37.4374 6.23896 40.0738 6.0632 41.7435 7.7329C43.3253 9.31472 43.2374 11.7753 41.7435 13.2693C41.6556 13.3571 24.8708 27.242 24.8708 27.242"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M23.7293 31.1089C21.796 32.6907 15.1172 33.7453 15.1172 33.7453C15.1172 33.7453 17.6657 30.5816 18.1051 26.5392C18.3687 24.4301 21.6202 23.0241 23.7293 25.1332C25.399 26.8029 25.5748 29.615 23.7293 31.1089Z"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M40.6029 27.5059L36.3848 31.8119L42.6242 33.7453L40.6029 27.5059Z"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M28.6504 24.0776L36.3837 31.811L40.6019 27.5049L33.5716 20.4746"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M29.1778 16.1686L19.5112 6.58984C17.3142 7.29287 15.996 8.69893 15.293 10.808L25.3112 20.7383"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22.1476 9.13867L17.9294 13.3569L16.4355 14.8508C15.7324 15.5538 15.7324 16.6084 16.4355 17.3114L19.5991 20.475"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22.3242 37.4355H35.9454"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.3809 41.3906H42.8869"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="mb-6 font-semibold text-2xl text-white">
                  DApp Development
                </h3>
                <p className="pb-6 text-white text-base">
                Experience the future of decentralized solutions.
                Our DApp development expertise empowers businesses with secure, transparent, and efficient blockchain-based applications for enhanced performance and user trust.
                </p>
                <a
                  href="service-pd.html"
                  className="underline flex relative group-hover:text-new-500 z-10 items-center text-white"
                >
                  <span>Learn more</span>
                  <svg
                    className="stroke-white group-hover:stroke-new-500"
                    width="25"
                    height="26"
                    viewBox="0 0 25 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.10156 18.0748L17.2491 7.92383"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.10156 7.92383H17.2491V18.0748"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <img
                  src="assets/images/bg/services-circle.png"
                  className="absolute top-5 -right-12 opacity-0 group-hover:opacity-100 transition-opacity"
                  alt=""
                />
              </div>
            </article>
            <article className="swiper-slide">
              <div
                className="relative transition duration-200 cursor-pointer border border-transparent hover:border-new-500 bg-interface-600 px-7 py-8 group shadow-customThree rounded-custom"
              >
                <div
                  className="w-[70px] h-[70px] rounded-full bg-new-500 group-hover:bg-opacity-10 bg-opacity-10 pl-5 pt-3 mb-6"
                >
                  <svg
                    className="fill-new-500"
                    width="58"
                    height="58"
                    viewBox="0 0 58 58"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_442_1156)">
                      <path
                        d="M28.4767 49.0273C28.266 48.8166 27.9737 48.6953 27.6758 48.6953C27.3778 48.6953 27.0856 48.8165 26.8749 49.0273C26.6642 49.2379 26.543 49.5302 26.543 49.8281C26.543 50.1273 26.6642 50.4183 26.8749 50.629C27.0856 50.8409 27.3778 50.9609 27.6758 50.9609C27.9737 50.9609 28.266 50.8409 28.4767 50.629C28.6874 50.4183 28.8086 50.1262 28.8086 49.8281C28.8086 49.5302 28.6873 49.2379 28.4767 49.0273Z"
                      />
                      <path
                        d="M33.869 38.5776V30.2421C33.869 29.8658 33.6821 29.5139 33.3702 29.3034C33.0583 29.0928 32.6622 29.0508 32.313 29.1913L12.7932 37.0527H6.50607C2.91869 37.0527 0 39.9714 0 43.559C0 47.1466 2.91869 50.0653 6.5063 50.0653H7.25497V56.868C7.25497 57.4936 7.76213 58.0008 8.38778 58.0008H13.0124C13.638 58.0008 14.1452 57.4936 14.1452 56.868V50.6117L32.3135 57.919C32.4498 57.9739 32.5933 58.0009 32.7361 58.0009C32.959 58.0009 33.1804 57.9351 33.3704 57.8068C33.6822 57.5962 33.869 57.2443 33.869 56.8681V48.5328C36.1407 48.0159 37.842 45.9812 37.842 43.5552C37.842 41.1293 36.1407 39.0945 33.869 38.5776ZM11.8794 55.7352H9.52059V50.0652H11.8796V55.7352H11.8794ZM11.8797 47.7995H6.5063C4.16795 47.7995 2.26562 45.8972 2.26562 43.559C2.26562 41.2206 4.16795 39.3183 6.5063 39.3183H11.8801L11.8797 47.7995ZM31.6035 55.1914H31.6034L14.1457 48.1699V38.9504L26.5417 33.9581V45.2001C26.5417 45.8256 27.0489 46.3329 27.6746 46.3329C28.3002 46.3329 28.8074 45.8256 28.8074 45.2001V33.0456L31.6035 31.9195V55.1914ZM33.869 46.1589V40.9514C34.8728 41.3898 35.5764 42.3916 35.5764 43.5551C35.5764 44.7186 34.8729 45.7205 33.869 46.1589Z"
                      />
                      <path
                        d="M48.6481 42.4551H42.2344C41.6087 42.4551 41.1016 42.9624 41.1016 43.5879C41.1016 44.2134 41.6087 44.7207 42.2344 44.7207H48.6481C49.2738 44.7207 49.7809 44.2134 49.7809 43.5879C49.7809 42.9624 49.2738 42.4551 48.6481 42.4551Z"
                      />
                      <path
                        d="M43.3885 34.154C42.9461 33.7117 42.2288 33.7117 41.7863 34.154L39.574 36.3663C39.1316 36.8087 39.1316 37.526 39.574 37.9685C39.7953 38.1896 40.0852 38.3003 40.3751 38.3003C40.665 38.3003 40.955 38.1896 41.1761 37.9685L43.3885 35.7561C43.8308 35.3137 43.8308 34.5964 43.3885 34.154Z"
                      />
                      <path
                        d="M43.4722 51.3135L41.1859 49.027C40.7435 48.5848 40.0262 48.5848 39.5837 49.027C39.1414 49.4694 39.1414 50.1867 39.5837 50.6291L41.8702 52.9156C42.0914 53.1367 42.3813 53.2474 42.6712 53.2474C42.9611 53.2474 43.2511 53.1367 43.4722 52.9156C43.9146 52.4732 43.9146 51.7559 43.4722 51.3135Z"
                      />
                      <path
                        d="M53.4687 0H32.3984C29.8999 0 27.8671 2.03272 27.8671 4.53124V4.98437H8.83593C7.33677 4.98437 6.11719 6.20406 6.11719 7.70311V25.6015C6.11719 27.1006 7.33677 28.3203 8.83593 28.3203H10.0065V31.7942C10.0065 32.2525 10.2825 32.6655 10.7057 32.8409C10.8459 32.8989 10.993 32.9271 11.139 32.9271C11.4338 32.9271 11.7236 32.812 11.9403 32.5953L16.2153 28.3203H38.7172C40.2164 28.3203 41.4359 27.1006 41.4359 25.6015V22.2031H53.4687C55.9672 22.2031 57.9999 20.1704 57.9999 17.6718V4.53124C57.9998 2.03272 55.9672 0 53.4687 0ZM39.1703 25.6015C39.1703 25.8514 38.9671 26.0546 38.7172 26.0546H15.7461C15.4457 26.0546 15.1575 26.174 14.9451 26.3864L12.2722 29.0594V27.1875C12.2722 26.5619 11.765 26.0546 11.1394 26.0546H8.83593C8.58603 26.0546 8.38281 25.8514 8.38281 25.6015V7.70311C8.38281 7.45321 8.58603 7.24999 8.83593 7.24999H27.8671V17.6718C27.8671 20.1704 29.8999 22.2031 32.3984 22.2031H39.1703V25.6015ZM55.7343 17.6718C55.7343 18.9211 54.7179 19.9375 53.4687 19.9375H32.3984C31.1491 19.9375 30.1328 18.9211 30.1328 17.6718V4.53124C30.1328 3.28198 31.1491 2.26562 32.3984 2.26562H53.4687C54.7179 2.26562 55.7343 3.28198 55.7343 4.53124V17.6718Z"
                      />
                      <path
                        d="M47.4834 10.1202L39.7305 5.64401C39.38 5.44158 38.9481 5.44158 38.5977 5.64401C38.2472 5.84633 38.0312 6.22039 38.0312 6.62503V15.5773C38.0312 15.9819 38.2472 16.356 38.5977 16.5583C38.7729 16.6596 38.9684 16.7101 39.1641 16.7101C39.3597 16.7101 39.5552 16.6596 39.7305 16.5583L47.4834 12.0821C47.8339 11.8798 48.0498 11.5057 48.0498 11.1011C48.0498 10.6965 47.834 10.3225 47.4834 10.1202ZM40.2969 13.6153V8.58717L44.6514 11.1012L40.2969 13.6153Z"
                      />
                      <path
                        d="M24.3008 11.8945H12.9727C12.347 11.8945 11.8398 12.4018 11.8398 13.0273C11.8398 13.6529 12.347 14.1602 12.9727 14.1602H24.3008C24.9264 14.1602 25.4336 13.6529 25.4336 13.0273C25.4336 12.4018 24.9264 11.8945 24.3008 11.8945Z"
                      />
                      <path
                        d="M25.1017 18.5702C24.891 18.3594 24.5987 18.2383 24.3008 18.2383C24.0028 18.2383 23.7106 18.3594 23.4999 18.5702C23.2892 18.7809 23.168 19.0732 23.168 19.3711C23.168 19.669 23.2892 19.9613 23.4999 20.1719C23.7106 20.3826 24.0028 20.5039 24.3008 20.5039C24.5998 20.5039 24.891 20.3827 25.1017 20.1719C25.3124 19.9613 25.4336 19.669 25.4336 19.3711C25.4336 19.0732 25.3124 18.7809 25.1017 18.5702Z"
                      />
                      <path
                        d="M20.0515 18.2383H12.9727C12.347 18.2383 11.8398 18.7456 11.8398 19.3711C11.8398 19.9966 12.347 20.5039 12.9727 20.5039H20.0515C20.6771 20.5039 21.1843 19.9966 21.1843 19.3711C21.1843 18.7456 20.6771 18.2383 20.0515 18.2383Z"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_442_1156">
                        <rect width="58" height="58" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h3 className="mb-6 font-semibold text-2xl text-white">
                  Web3 Integration
                </h3>
                <p className="pb-6 text-white text-base">
                Step into the decentralized world with seamless Web3 integration.
                Connect your platform to blockchain networks using ethers.js and web3.js, enabling secure and innovative user-centric experiences.
                </p>
                <a
                  href="service-pd.html"
                  className="underline flex relative group-hover:text-new-500 z-10 items-center text-white"
                >
                  <span>Learn more</span>
                  <svg
                    className="stroke-white group-hover:stroke-new-500"
                    width="25"
                    height="26"
                    viewBox="0 0 25 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.10156 18.0748L17.2491 7.92383"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.10156 7.92383H17.2491V18.0748"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <img
                  src="assets/images/bg/services-circle.png"
                  className="absolute top-5 -right-12 opacity-0 group-hover:opacity-100 transition-opacity"
                  alt=""
                />
              </div>
            </article>
            <article className="swiper-slide">
              <div
                className="relative transition duration-200 cursor-pointer border border-transparent hover:border-new-500 bg-interface-600 px-7 py-8 group shadow-customThree rounded-custom"
              >
                <div
                  className="w-[70px] h-[70px] rounded-full bg-new-500 group-hover:bg-opacity-10 bg-opacity-10 pl-5 pt-3 mb-6"
                >
                  <svg
                    className="stroke-new-500"
                    width="58"
                    height="58"
                    viewBox="0 0 58 58"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_123_2937)">
                      <path
                        d="M53.5613 4.88276C51.5972 2.91869 48.3713 3.06301 46.5905 5.19462L38.5469 14.8224L43.6218 19.8973L53.2496 11.8536C55.3809 10.0727 55.5252 6.84671 53.5613 4.88276Z"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M57.1515 21.3477V46.9823C57.1515 51.136 53.7846 54.5041 49.6309 54.5041H42.6758C46.8295 54.5041 50.1964 51.136 50.1964 46.9823V21.3477H57.1515Z"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.0598 17.3598C11.3095 17.3598 12.3227 16.3467 12.3227 15.0969C12.3227 13.8471 11.3095 12.834 10.0598 12.834C8.81001 12.834 7.79688 13.8471 7.79688 15.0969C7.79688 16.3467 8.81001 17.3598 10.0598 17.3598Z"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M18.052 17.3598C19.3017 17.3598 20.3149 16.3467 20.3149 15.0969C20.3149 13.8471 19.3017 12.834 18.052 12.834C16.8022 12.834 15.7891 13.8471 15.7891 15.0969C15.7891 16.3467 16.8022 17.3598 18.052 17.3598Z"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M26.0442 17.3598C27.2939 17.3598 28.3071 16.3467 28.3071 15.0969C28.3071 13.8471 27.2939 12.834 26.0442 12.834C24.7944 12.834 23.7812 13.8471 23.7812 15.0969C23.7812 16.3467 24.7944 17.3598 26.0442 17.3598Z"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M38.547 14.8223L43.5002 8.89365C43.229 8.86408 42.9539 8.84766 42.6747 8.84766H8.37137C4.21769 8.84766 0.849609 12.2146 0.849609 16.3694V21.3474H29.2728C31.0918 19.1368 31.5654 16.2453 38.547 14.8223Z"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M43.6229 19.8964C43.5223 20.4003 43.3941 20.8834 43.2422 21.3466H50.1964V16.3686C50.1964 15.7535 50.1209 15.1562 49.9816 14.584L43.6229 19.8964Z"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M54.3544 10.5176C54.0802 11.0121 53.7118 11.4664 53.2495 11.8526L49.9805 14.5838C50.1197 15.1561 50.1952 15.7533 50.1952 16.3684V21.3465H57.1503V16.3684C57.1503 14.0044 56.0593 11.8964 54.3544 10.5176Z"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M43.241 21.3477C41.2519 27.413 35.055 29.9169 29.538 26.8586C27.7016 25.8405 27.3455 23.3383 28.8237 21.847C28.9839 21.6853 29.1323 21.5185 29.2728 21.3477H0.849609V46.9823C0.849609 51.136 4.21769 54.5041 8.37137 54.5041H42.6747C46.8284 54.5041 50.1954 51.136 50.1954 46.9823V21.3477H43.241Z"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M38.5475 14.8223C31.0265 16.3552 31.0585 19.5924 28.8243 21.8466C27.3462 23.338 27.7021 25.8401 29.5385 26.8582C35.4768 30.1501 42.2039 26.9986 43.6223 19.8972L38.5475 14.8223Z"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19.2668 32.2168H10.7042C9.09859 32.2168 7.79688 33.5185 7.79688 35.1242V43.6868C7.79688 45.2924 9.09859 46.5941 10.7042 46.5941H19.2668C20.8725 46.5941 22.1742 45.2924 22.1742 43.6868V35.1242C22.1742 33.5185 20.8725 32.2168 19.2668 32.2168Z"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M41.2974 32.6719H29.0196C27.7359 32.6719 26.6953 33.7125 26.6953 34.9962C26.6953 36.2799 27.7359 37.3205 29.0196 37.3205H41.2975C42.5812 37.3205 43.6218 36.2799 43.6218 34.9962C43.6218 33.7125 42.5811 32.6719 41.2974 32.6719Z"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M41.2974 41.4902H29.0196C27.7359 41.4902 26.6953 42.5308 26.6953 43.8145C26.6953 45.0982 27.7359 46.1388 29.0196 46.1388H41.2975C42.5812 46.1388 43.6218 45.0982 43.6218 43.8145C43.6218 42.5309 42.5811 41.4902 41.2974 41.4902Z"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_123_2937">
                        <rect width="58" height="58" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h3 className="mb-6 font-semibold text-2xl text-white">
                  Full Stack Applications
                </h3>
                <p className="pb-6 text-white text-base">
                Empower your business with versatile Full Stack Applications.
                Our end-to-end development expertise delivers powerful, scalable, and feature-rich solutions, catering to all your digital needs for success.
                </p>
                <a
                  href="service-pd.html"
                  className="underline flex relative group-hover:text-new-500 z-10 items-center text-white"
                >
                  <span>Learn more</span>
                  <svg
                    className="stroke-white group-hover:stroke-new-500"
                    width="25"
                    height="26"
                    viewBox="0 0 25 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.10156 18.0748L17.2491 7.92383"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.10156 7.92383H17.2491V18.0748"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <img
                  src="assets/images/bg/services-circle.png"
                  className="absolute top-5 -right-12 opacity-0 group-hover:opacity-100 transition-opacity"
                  alt=""
                />
              </div>
            </article>
          </div>
          <div className="service-pagination dev-style swiper-pagination"></div>
        </div>
      </div>
    </section>
    {/* <!-- Services End --> */}

 {/* <!-- Resume --> */}
    <section className="pb-120">
      <div className="mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div
          className="bg-interface-600 rounded-xl border border-[#494C5F] p-8 xl:p-14"
        >
          <h2 className="text-white text-4xl font-medium">Resume</h2>
          {/* <!-- About --> */}
          <div className="grid lg:grid-cols-3 gap-5 xl:gap-10 items-center py-12 md:py-20">
            <div className="pb-4">
              <div className="flex flex-col gap-y-5 md:flex-row justify-between pb-5 border-b border-[#494C5F]">
                <div>
                  <h3 className="text-2xl text-white font-semibold mb-2">
                    Richard Lord
                  </h3>
                  <span className="text-white text-lg">Web developer</span>
                </div>
                <div className="flex space-x-2 items-center">
                  <h3 className="text-7xl leading-none text-new-500 font-bold">
                    5
                  </h3>
                  <p className="text-lg text-white font-medium">
                    Years <br />
                    Experience
                  </p>
                </div>
              </div>
              <p className="text-white text-lg mt-5 leading-normal">
              Hi there! I'm Adam Boudjemaa, a passionate blockchain developer with over
      5 years of experience in the industry. My expertise lies in Solidity,
      Web3, and smart contract development, having successfully deployed 300+
      smart contracts across more than 10 different EVM blockchains, including
      Ethereum, Fantom, Binance Chain, and Polygon. I'm proud to have
      co-authored ERC-3643, one of the most widely used security token standards
      for real-world assets (RWA). This groundbreaking DeFi standard has been
      mentioned by Binance in their research report, highlighting its
      significance in the tokenization of real-world assets .
              </p>
              <p className="text-white text-lg leading-normal">
              As an expert in Solidity, EVM, Huff, and Assembly, I strive to
      create cutting-edge solutions in the ever-evolving world of blockchain
      technology. My goal is to drive innovation and help shape the future of
      decentralized finance. Let's connect and explore the endless possibilities
      of the blockchain world together!
              </p>
            
            </div>
            <div className="mx-auto">
              <img src="assets/images/core/2_Adam.png" className="w-full" alt="" />
            </div>
            <div>
              <ul className="divide-y divide-[#494C5F]">
                <li className="flex justify-between items-center pl-4 py-5">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4">
                     Blockchain Lead
                    </h4>

                    {/* Microsoft SVG ===> Polytrade SVG */}
                    <svg
                      width="84"
                      height="19"
                      viewBox="0 0 84 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_537_18642)">
                        <path
                          d="M83.7819 8.30878V6.83524H81.9521V4.54465L81.8906 4.56347L80.1719 5.0894L80.1382 5.09971V6.83524H77.4256V5.86847C77.4256 5.41831 77.5262 5.07369 77.7247 4.84411C77.9218 4.61698 78.2035 4.50162 78.5629 4.50162C78.8214 4.50162 79.0888 4.56249 79.3582 4.68244L79.4256 4.71254V3.16094L79.3938 3.14949C79.1426 3.059 78.801 3.01367 78.3776 3.01367C77.8439 3.01367 77.359 3.12969 76.936 3.35993C76.5192 3.58408 76.1757 3.92359 75.9468 4.33782C75.7145 4.75574 75.5966 5.23831 75.5966 5.77242V6.8354H74.3226V8.30895H75.5966V14.5162H77.4256V8.30878H80.1382V12.2534C80.1382 13.878 80.9044 14.7014 82.4157 14.7014C82.6769 14.6999 82.9372 14.6709 83.1923 14.615C83.464 14.5566 83.6489 14.4982 83.7578 14.4358L83.7819 14.4216V12.9345L83.7076 12.9837C83.6083 13.05 83.4847 13.104 83.3397 13.1441C83.1941 13.185 83.0725 13.2056 82.9784 13.2056C82.6243 13.2056 82.3625 13.1102 82.1999 12.9219C82.0356 12.732 81.9521 12.3997 81.9521 11.935V8.30878H83.7819ZM70.238 13.2058C69.5742 13.2058 69.0509 12.9855 68.6819 12.552C68.3109 12.1161 68.1227 11.4949 68.1227 10.7054C68.1227 9.89098 68.3109 9.25362 68.6822 8.81C69.0512 8.36949 69.5696 8.1458 70.2232 8.1458C70.8572 8.1458 71.3621 8.35934 71.7237 8.78104C72.0871 9.20469 72.2716 9.83698 72.2716 10.6609C72.2716 11.4949 72.0981 12.1357 71.7561 12.5643C71.4165 12.9898 70.9058 13.2058 70.238 13.2058ZM70.3195 6.65016C69.053 6.65016 68.0469 7.02129 67.3299 7.75324C66.613 8.48534 66.2496 9.49825 66.2496 10.7645C66.2496 11.967 66.6043 12.9343 67.304 13.6391C68.0038 14.344 68.9561 14.7011 70.1341 14.7011C71.3619 14.7011 72.3478 14.3249 73.0649 13.5828C73.7816 12.8415 74.1449 11.8381 74.1449 10.6013C74.1449 9.38011 73.804 8.40565 73.1316 7.70562C72.4588 7.00525 71.5124 6.65016 70.3195 6.65016ZM63.3005 6.65016C62.439 6.65016 61.7263 6.87058 61.1819 7.30504C60.6344 7.74211 60.3565 8.31549 60.3565 9.00914C60.3565 9.36964 60.4164 9.68987 60.5346 9.96151C60.6532 10.2341 60.837 10.474 61.0811 10.6755C61.3233 10.8753 61.6972 11.0845 62.1929 11.2973C62.6093 11.4688 62.9201 11.6139 63.1174 11.7281C63.3103 11.8402 63.4473 11.9528 63.5245 12.0624C63.5996 12.1696 63.6378 12.3166 63.6378 12.4977C63.6378 13.0138 63.2514 13.2648 62.4563 13.2648C62.1613 13.2648 61.8248 13.2033 61.4563 13.0819C61.0905 12.9623 60.7452 12.7871 60.4325 12.5627L60.3565 12.5083V14.2691L60.3844 14.2822C60.6432 14.4016 60.9695 14.5023 61.3541 14.5816C61.738 14.6608 62.0865 14.7012 62.3896 14.7012C63.3244 14.7012 64.0773 14.4798 64.6265 14.0428C65.1796 13.6026 65.4597 13.0159 65.4597 12.2981C65.4597 11.7805 65.3088 11.3364 65.0113 10.9783C64.7163 10.6233 64.2038 10.2971 63.489 10.009C62.9196 9.78036 62.5547 9.59071 62.4043 9.44507C62.2591 9.30435 62.1855 9.10536 62.1855 8.85353C62.1855 8.63 62.2765 8.45114 62.4632 8.30616C62.6514 8.16053 62.9132 8.0864 63.2414 8.0864C63.5463 8.0864 63.858 8.13451 64.1681 8.22876C64.478 8.32318 64.75 8.44967 64.9773 8.60415L65.0519 8.6552V6.9848L65.0233 6.97253C64.8138 6.88253 64.5373 6.80562 64.2018 6.74344C63.8674 6.68158 63.5641 6.65016 63.3005 6.65016ZM55.5883 13.2058C54.9246 13.2058 54.4012 12.9855 54.0323 12.552C53.6612 12.1161 53.4735 11.4949 53.4735 10.7054C53.4735 9.89098 53.6614 9.25362 54.0328 8.81C54.4015 8.36949 54.9197 8.1458 55.5736 8.1458C56.2077 8.1458 56.7125 8.35934 57.0742 8.78104C57.4376 9.20469 57.622 9.83698 57.622 10.6609C57.622 11.4949 57.4486 12.1357 57.1066 12.5643C56.7668 12.9898 56.2563 13.2058 55.5883 13.2058ZM55.67 6.65016C54.4031 6.65016 53.3971 7.02129 52.6804 7.75324C51.9636 8.48534 51.5999 9.49825 51.5999 10.7645C51.5999 11.9675 51.955 12.9343 52.6545 13.6391C53.3542 14.344 54.3064 14.7011 55.4848 14.7011C56.712 14.7011 57.6984 14.3249 58.4155 13.5828C59.132 12.8415 59.4955 11.8381 59.4955 10.6013C59.4955 9.38011 59.1545 8.40565 58.4819 7.70562C57.8089 7.00525 56.8627 6.65016 55.67 6.65016ZM48.8234 8.16544V6.83524H47.0167V14.5158H48.8233V10.5868C48.8233 9.91864 48.9748 9.3698 49.2738 8.95531C49.5688 8.54573 49.9622 8.33807 50.4421 8.33807C50.605 8.33807 50.7876 8.36491 50.9854 8.41809C51.1813 8.47078 51.3232 8.52805 51.4068 8.58827L51.4827 8.64342V6.82214L51.4532 6.80954C51.2852 6.73804 51.0471 6.70204 50.746 6.70204C50.2919 6.70204 49.8856 6.84784 49.5377 7.13502C49.2322 7.38751 49.0113 7.73376 48.8426 8.16544H48.8234ZM43.7813 6.65016C42.9525 6.65016 42.213 6.82804 41.5842 7.17838C40.9542 7.52938 40.4667 8.03093 40.1352 8.66829C39.8051 9.30434 39.6376 10.0473 39.6376 10.8757C39.6376 11.6013 39.8 12.2673 40.1211 12.8541C40.4425 13.4421 40.8974 13.902 41.4731 14.2211C42.0481 14.5397 42.7126 14.7012 43.4482 14.7012C44.3068 14.7012 45.0398 14.5296 45.6278 14.1912L45.6514 14.1774V12.5223L45.5756 12.5777C45.3051 12.7737 45.0073 12.9288 44.6916 13.0379C44.3722 13.1493 44.0813 13.2056 43.826 13.2056C43.117 13.2056 42.548 12.9839 42.1348 12.5466C41.7208 12.1086 41.5109 11.4938 41.5109 10.72C41.5109 9.94138 41.7298 9.31073 42.1612 8.84518C42.5914 8.38127 43.1615 8.14596 43.8558 8.14596C44.4496 8.14596 45.0282 8.34707 45.5756 8.74422L45.6514 8.7992V7.05516L45.627 7.04142C45.4208 6.92605 45.14 6.83082 44.7911 6.75865C44.4439 6.68665 44.1042 6.65016 43.7813 6.65016ZM38.3933 6.83524H36.5864V14.5158H38.3933V6.83524ZM37.5083 3.56333C37.211 3.56333 36.9516 3.66462 36.7386 3.86507C36.5245 4.06634 36.4159 4.31965 36.4159 4.61845C36.4159 4.91267 36.5232 5.16124 36.735 5.35711C36.9456 5.55233 37.2058 5.65133 37.5083 5.65133C37.8107 5.65133 38.0719 5.55233 38.2849 5.35744C38.4993 5.16124 38.6081 4.91267 38.6081 4.61845C38.6081 4.33013 38.5022 4.07927 38.2938 3.87325C38.0855 3.66756 37.821 3.56333 37.5083 3.56333ZM33.0005 6.26873V14.5157H34.8443V3.79847H32.2924L29.0486 11.7589L25.9009 3.79847H23.2451V14.5158H24.9779V6.26791H25.0374L28.3614 14.5158H29.6688L32.9409 6.26856L33.0005 6.26873Z"
                          fill="#F4F8F7"
                        />
                        <path
                          d="M8.49911 8.71591H0V0.216797H8.49911V8.71591Z"
                          fill="#F1511B"
                        />
                        <path
                          d="M17.8829 8.71591H9.38379V0.216797H17.8829V8.71591Z"
                          fill="#80CC28"
                        />
                        <path
                          d="M8.49895 18.1026H0V9.60352H8.49895V18.1026Z"
                          fill="#00ADEF"
                        />
                        <path
                          d="M17.8829 18.1026H9.38379V9.60352H17.8829V18.1026Z"
                          fill="#FBBC09"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_537_18642">
                          <rect
                            width="83.7818"
                            height="18"
                            fill="white"
                            transform="translate(0 0.216797)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div>
                    <span className="bg-new-500 px-3 py-2 rounded-md">
                      Current</span>
                  </div>
                </li>
                <li className="flex justify-between items-center pl-4 py-5">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4">
                      Head of Blockchain
                    </h4>

                    {/* Uber SVG ===> Retreeb SVG */}
                    <svg
                      width="41"
                      height="19"
                      viewBox="0 0 41 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_537_18632)">
                        <path
                          d="M0 2.41602V10.7826C0 13.9332 2.19712 16.0156 5.0625 16.0156C6.45638 16.0156 7.69837 15.4823 8.59612 14.5475V15.7895H10.5806V2.41602H8.57587V10.6645C8.57587 12.7857 7.1415 14.2184 5.29031 14.2184C3.41719 14.2184 2.00644 12.8228 2.00644 10.6645V2.4177H0V2.41602ZM12.555 2.41602V15.7895H14.4619V14.566C15.3411 15.4638 16.5831 16.0173 17.9381 16.0173C18.6088 16.0235 19.2741 15.8967 19.8954 15.6441C20.5168 15.3916 21.0819 15.0183 21.558 14.546C22.0341 14.0736 22.4119 13.5115 22.6693 12.8922C22.9268 12.2728 23.0589 11.6086 23.058 10.9379C23.0611 10.2656 22.9308 9.59936 22.6745 8.97782C22.4182 8.35629 22.0411 7.79181 21.565 7.31712C21.0889 6.84244 20.5233 6.46699 19.901 6.21256C19.2787 5.95812 18.6121 5.82975 17.9398 5.83489C17.2957 5.83408 16.6579 5.96221 16.0641 6.21175C15.4702 6.46128 14.9323 6.82716 14.4821 7.28783V2.4177H12.5533L12.555 2.41602ZM29.2089 5.85514C26.3621 5.85514 24.2055 8.16702 24.2055 10.9176C24.2055 13.8201 26.4566 15.997 29.3794 15.997C31.1563 15.997 32.6076 15.2157 33.5812 13.9163L32.1874 12.8853C31.4617 13.859 30.5066 14.3146 29.3794 14.3146C27.7374 14.3146 26.4212 13.1333 26.1529 11.5471H34.0791V10.9176C34.0791 8.01514 32.0169 5.85514 29.2089 5.85514ZM39.8317 5.96989C38.7619 5.96989 37.9789 6.46602 37.5013 7.24902V6.04583H35.5927V15.7895H37.5199V10.246C37.5199 8.73739 38.4379 7.76539 39.6984 7.76539H40.5V5.9682H39.8317V5.96989ZM29.1684 7.53589C30.6028 7.53589 31.8077 8.52814 32.1317 10.0165H26.19C26.5326 8.52814 27.7358 7.53589 29.1684 7.53589ZM17.8082 7.55614C19.6408 7.55614 21.1494 9.0462 21.1494 10.9379C21.153 11.8284 20.8033 12.684 20.1769 13.317C19.5506 13.95 18.6987 14.3088 17.8082 14.3146C17.3651 14.3155 16.9263 14.2287 16.517 14.0591C16.1076 13.8896 15.7359 13.6407 15.4233 13.3267C15.1106 13.0128 14.8632 12.6401 14.6953 12.2301C14.5274 11.8201 14.4423 11.3809 14.445 10.9379C14.4419 10.4946 14.5266 10.0551 14.6941 9.64475C14.8617 9.23438 15.1089 8.86123 15.4214 8.54685C15.7339 8.23247 16.1055 7.98307 16.5149 7.81303C16.9242 7.64299 17.3632 7.55568 17.8065 7.55614H17.8082Z"
                          fill="#F4F8F7"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_537_18632">
                          <rect
                            width="40.5"
                            height="18"
                            fill="white"
                            transform="translate(0 0.216797)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div>
                    <span className="bg-new-500 px-3 py-2 rounded-md">
                      Current</span>
                  </div>
                </li>
                <li className="flex justify-between items-center pl-4 py-5">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4">
                    Blockchain Engineer
                    </h4>

                    {/* Linkedin SVG ===> Securrency SVG */}
                    <svg
                      width="72"
                      height="19"
                      viewBox="0 0 72 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_537_18621)">
                        <path
                          d="M72 1.50253V16.9311C72 17.2721 71.8645 17.5991 71.6234 17.8402C71.3823 18.0813 71.0553 18.2168 70.7143 18.2168H55.2857C54.9447 18.2168 54.6177 18.0813 54.3766 17.8402C54.1355 17.5991 54 17.2721 54 16.9311V1.50253C54 1.16153 54.1355 0.834502 54.3766 0.59338C54.6177 0.352258 54.9447 0.216797 55.2857 0.216797L70.7143 0.216797C71.0553 0.216797 71.3823 0.352258 71.6234 0.59338C71.8645 0.834502 72 1.16153 72 1.50253ZM59.1428 6.64533H56.5715V15.6453H59.1428V6.64533ZM59.4643 4.074C59.4643 3.18638 58.7447 2.4668 57.8572 2.4668C56.9696 2.4668 56.25 3.18638 56.25 4.074C56.25 4.96148 56.9696 5.68106 57.8572 5.68106C58.7447 5.68106 59.4643 4.96148 59.4643 4.074ZM69.4285 10.8753C69.4285 8.0468 68.49 6.38827 65.7515 6.38827C65.1797 6.38831 64.6167 6.52908 64.1122 6.79813C63.6077 7.06719 63.1771 7.45627 62.8585 7.93106V6.64533H60.4285V15.6453H63V11.4411C62.9662 11.1359 62.9956 10.8271 63.0864 10.5338C63.1771 10.2404 63.3273 9.96896 63.5275 9.73619C63.7277 9.50342 63.9737 9.31434 64.2501 9.18074C64.5265 9.04713 64.8275 8.97186 65.1343 8.95959C66.6257 8.95959 66.8572 10.4253 66.8572 11.4411V15.6453H69.4285V10.8753Z"
                          fill="#0A66C2"
                        />
                        <path
                          d="M28.4143 10.7598L32.3872 15.6455H29.25L25.7143 11.1585V15.6455H23.1428V2.78845H25.7143V10.3485L28.98 6.64552H32.2585L28.4143 10.7598ZM18.1285 6.38845C17.5655 6.39688 17.0129 6.54164 16.5181 6.81033C16.0232 7.07902 15.6009 7.46364 15.2872 7.93125V6.64552H12.8572V15.6455H15.4285V11.4412C15.3948 11.1361 15.4242 10.8272 15.5149 10.5339C15.6057 10.2406 15.7558 9.96915 15.956 9.73637C16.1562 9.5036 16.4022 9.31453 16.6786 9.18093C16.955 9.04732 17.256 8.97205 17.5628 8.95978C19.0543 8.95978 19.2857 10.4255 19.2857 11.4412V15.6455H21.8572V10.8755C21.8572 8.04698 20.9185 6.38845 18.18 6.38845H18.1285ZM41.1428 11.3512C41.1526 11.5397 41.1526 11.7285 41.1428 11.917H34.3928V12.007C34.5024 12.5431 34.7994 13.0227 35.2306 13.3596C35.6618 13.6966 36.199 13.8688 36.7457 13.8455C37.1795 13.8644 37.6125 13.7955 38.019 13.6431C38.4255 13.4907 38.7971 13.2578 39.1115 12.9585L40.8215 14.2442C40.2795 14.7973 39.6276 15.2306 38.9079 15.5163C38.1881 15.8019 37.4165 15.9336 36.6428 15.9027C36.002 15.9432 35.36 15.8457 34.7602 15.6168C34.1603 15.388 33.6165 15.033 33.1656 14.576C32.7147 14.1189 32.3671 13.5704 32.1463 12.9676C31.9255 12.3647 31.8366 11.7214 31.8857 11.0813C31.8726 10.4493 31.9897 9.82139 32.2299 9.23669C32.47 8.65199 32.828 8.12302 33.2815 7.68274C33.7351 7.24247 34.2745 6.90033 34.866 6.67765C35.4576 6.45497 36.0887 6.35653 36.72 6.38845C39.1372 6.38845 41.1428 8.09845 41.1428 11.3512ZM38.7515 10.2455C38.742 9.99085 38.6808 9.74077 38.5716 9.51052C38.4623 9.28028 38.3074 9.07468 38.1161 8.90627C37.9248 8.73786 37.7013 8.61015 37.4591 8.53094C37.2168 8.45172 36.961 8.42266 36.7072 8.44552C35.5766 8.32331 34.5527 9.11967 34.3928 10.2455H38.7515ZM2.57147 2.78845H0V15.6455H7.71427V13.0743H2.57147V2.78845ZM48.8572 2.78845H51.4285V15.6455H48.9985V14.7455C48.69 15.1257 48.2967 15.4283 47.8502 15.6293C47.4037 15.8302 46.9164 15.9239 46.4272 15.9027C45.8296 15.8874 45.2414 15.75 44.6988 15.4989C44.1562 15.2479 43.6707 14.8886 43.2721 14.443C42.8735 13.9975 42.5703 13.4751 42.381 12.908C42.1917 12.341 42.1204 11.7412 42.1715 11.1455C42.1108 10.549 42.1749 9.94644 42.3598 9.37608C42.5446 8.80572 42.8462 8.2801 43.2453 7.83264C43.6444 7.38519 44.1322 7.0257 44.6778 6.77707C45.2234 6.52843 45.8148 6.39609 46.4143 6.38845C46.8608 6.36889 47.3068 6.43839 47.7262 6.59291C48.1456 6.74742 48.5301 6.98386 48.8572 7.28845V2.78845ZM49.05 11.1455C49.0904 10.8486 49.0667 10.5465 48.9805 10.2596C48.8943 9.97261 48.7475 9.70749 48.5501 9.48206C48.3527 9.25664 48.1093 9.07617 47.8362 8.95282C47.5632 8.82946 47.2668 8.76609 46.9672 8.76698C45.7372 8.85628 44.8051 9.91406 44.8715 11.1455C44.8051 12.377 45.7372 13.4349 46.9672 13.5242C47.2668 13.5251 47.5632 13.4617 47.8363 13.3383C48.1093 13.215 48.3528 13.0345 48.5502 12.8091C48.7476 12.5836 48.8943 12.3185 48.9805 12.0315C49.0668 11.7445 49.0905 11.4424 49.05 11.1455ZM10.2857 2.53125C9.87223 2.53711 9.47636 2.69965 9.17804 2.98606C8.87973 3.27247 8.70121 3.66141 8.67853 4.07433C8.67853 4.96181 9.39811 5.68139 10.2857 5.68139C11.1734 5.68139 11.8927 4.96167 11.8927 4.07433C11.8699 3.66145 11.6914 3.27258 11.3931 2.9862C11.0949 2.69982 10.6992 2.53714 10.2857 2.53125ZM9 15.6455H11.5715V6.64552H9V15.6455Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_537_18621">
                          <rect
                            width="72"
                            height="18"
                            fill="white"
                            transform="translate(0 0.216797)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="shrink-0">
                    <span
                      className="border border-new-500 text-new-500 px-3 py-2 rounded-md"
                    >
                      2021-2021</span>
                  </div>
                </li>

                <li className="flex justify-between items-center pl-4 py-5">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4">
                    Blockchain Engineer
                    </h4>

                    {/* Linkedin SVG ===> Fantom Foundation SVG */}
                    <svg
                      width="72"
                      height="19"
                      viewBox="0 0 72 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_537_18621)">
                        <path
                          d="M72 1.50253V16.9311C72 17.2721 71.8645 17.5991 71.6234 17.8402C71.3823 18.0813 71.0553 18.2168 70.7143 18.2168H55.2857C54.9447 18.2168 54.6177 18.0813 54.3766 17.8402C54.1355 17.5991 54 17.2721 54 16.9311V1.50253C54 1.16153 54.1355 0.834502 54.3766 0.59338C54.6177 0.352258 54.9447 0.216797 55.2857 0.216797L70.7143 0.216797C71.0553 0.216797 71.3823 0.352258 71.6234 0.59338C71.8645 0.834502 72 1.16153 72 1.50253ZM59.1428 6.64533H56.5715V15.6453H59.1428V6.64533ZM59.4643 4.074C59.4643 3.18638 58.7447 2.4668 57.8572 2.4668C56.9696 2.4668 56.25 3.18638 56.25 4.074C56.25 4.96148 56.9696 5.68106 57.8572 5.68106C58.7447 5.68106 59.4643 4.96148 59.4643 4.074ZM69.4285 10.8753C69.4285 8.0468 68.49 6.38827 65.7515 6.38827C65.1797 6.38831 64.6167 6.52908 64.1122 6.79813C63.6077 7.06719 63.1771 7.45627 62.8585 7.93106V6.64533H60.4285V15.6453H63V11.4411C62.9662 11.1359 62.9956 10.8271 63.0864 10.5338C63.1771 10.2404 63.3273 9.96896 63.5275 9.73619C63.7277 9.50342 63.9737 9.31434 64.2501 9.18074C64.5265 9.04713 64.8275 8.97186 65.1343 8.95959C66.6257 8.95959 66.8572 10.4253 66.8572 11.4411V15.6453H69.4285V10.8753Z"
                          fill="#0A66C2"
                        />
                        <path
                          d="M28.4143 10.7598L32.3872 15.6455H29.25L25.7143 11.1585V15.6455H23.1428V2.78845H25.7143V10.3485L28.98 6.64552H32.2585L28.4143 10.7598ZM18.1285 6.38845C17.5655 6.39688 17.0129 6.54164 16.5181 6.81033C16.0232 7.07902 15.6009 7.46364 15.2872 7.93125V6.64552H12.8572V15.6455H15.4285V11.4412C15.3948 11.1361 15.4242 10.8272 15.5149 10.5339C15.6057 10.2406 15.7558 9.96915 15.956 9.73637C16.1562 9.5036 16.4022 9.31453 16.6786 9.18093C16.955 9.04732 17.256 8.97205 17.5628 8.95978C19.0543 8.95978 19.2857 10.4255 19.2857 11.4412V15.6455H21.8572V10.8755C21.8572 8.04698 20.9185 6.38845 18.18 6.38845H18.1285ZM41.1428 11.3512C41.1526 11.5397 41.1526 11.7285 41.1428 11.917H34.3928V12.007C34.5024 12.5431 34.7994 13.0227 35.2306 13.3596C35.6618 13.6966 36.199 13.8688 36.7457 13.8455C37.1795 13.8644 37.6125 13.7955 38.019 13.6431C38.4255 13.4907 38.7971 13.2578 39.1115 12.9585L40.8215 14.2442C40.2795 14.7973 39.6276 15.2306 38.9079 15.5163C38.1881 15.8019 37.4165 15.9336 36.6428 15.9027C36.002 15.9432 35.36 15.8457 34.7602 15.6168C34.1603 15.388 33.6165 15.033 33.1656 14.576C32.7147 14.1189 32.3671 13.5704 32.1463 12.9676C31.9255 12.3647 31.8366 11.7214 31.8857 11.0813C31.8726 10.4493 31.9897 9.82139 32.2299 9.23669C32.47 8.65199 32.828 8.12302 33.2815 7.68274C33.7351 7.24247 34.2745 6.90033 34.866 6.67765C35.4576 6.45497 36.0887 6.35653 36.72 6.38845C39.1372 6.38845 41.1428 8.09845 41.1428 11.3512ZM38.7515 10.2455C38.742 9.99085 38.6808 9.74077 38.5716 9.51052C38.4623 9.28028 38.3074 9.07468 38.1161 8.90627C37.9248 8.73786 37.7013 8.61015 37.4591 8.53094C37.2168 8.45172 36.961 8.42266 36.7072 8.44552C35.5766 8.32331 34.5527 9.11967 34.3928 10.2455H38.7515ZM2.57147 2.78845H0V15.6455H7.71427V13.0743H2.57147V2.78845ZM48.8572 2.78845H51.4285V15.6455H48.9985V14.7455C48.69 15.1257 48.2967 15.4283 47.8502 15.6293C47.4037 15.8302 46.9164 15.9239 46.4272 15.9027C45.8296 15.8874 45.2414 15.75 44.6988 15.4989C44.1562 15.2479 43.6707 14.8886 43.2721 14.443C42.8735 13.9975 42.5703 13.4751 42.381 12.908C42.1917 12.341 42.1204 11.7412 42.1715 11.1455C42.1108 10.549 42.1749 9.94644 42.3598 9.37608C42.5446 8.80572 42.8462 8.2801 43.2453 7.83264C43.6444 7.38519 44.1322 7.0257 44.6778 6.77707C45.2234 6.52843 45.8148 6.39609 46.4143 6.38845C46.8608 6.36889 47.3068 6.43839 47.7262 6.59291C48.1456 6.74742 48.5301 6.98386 48.8572 7.28845V2.78845ZM49.05 11.1455C49.0904 10.8486 49.0667 10.5465 48.9805 10.2596C48.8943 9.97261 48.7475 9.70749 48.5501 9.48206C48.3527 9.25664 48.1093 9.07617 47.8362 8.95282C47.5632 8.82946 47.2668 8.76609 46.9672 8.76698C45.7372 8.85628 44.8051 9.91406 44.8715 11.1455C44.8051 12.377 45.7372 13.4349 46.9672 13.5242C47.2668 13.5251 47.5632 13.4617 47.8363 13.3383C48.1093 13.215 48.3528 13.0345 48.5502 12.8091C48.7476 12.5836 48.8943 12.3185 48.9805 12.0315C49.0668 11.7445 49.0905 11.4424 49.05 11.1455ZM10.2857 2.53125C9.87223 2.53711 9.47636 2.69965 9.17804 2.98606C8.87973 3.27247 8.70121 3.66141 8.67853 4.07433C8.67853 4.96181 9.39811 5.68139 10.2857 5.68139C11.1734 5.68139 11.8927 4.96167 11.8927 4.07433C11.8699 3.66145 11.6914 3.27258 11.3931 2.9862C11.0949 2.69982 10.6992 2.53714 10.2857 2.53125ZM9 15.6455H11.5715V6.64552H9V15.6455Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_537_18621">
                          <rect
                            width="72"
                            height="18"
                            fill="white"
                            transform="translate(0 0.216797)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="shrink-0">
                    <span
                      className="border border-new-500 text-new-500 px-3 py-2 rounded-md"
                    >
                      2020-2021</span>
                  </div>
                </li>

                <li className="flex justify-between items-center pl-4 py-5">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4">
                    Blockchain Developer
                    </h4>

                    {/* Linkedin SVG ===> Tokeny Solutions SVG */}
                    <svg
                      width="72"
                      height="19"
                      viewBox="0 0 72 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_537_18621)">
                        <path
                          d="M72 1.50253V16.9311C72 17.2721 71.8645 17.5991 71.6234 17.8402C71.3823 18.0813 71.0553 18.2168 70.7143 18.2168H55.2857C54.9447 18.2168 54.6177 18.0813 54.3766 17.8402C54.1355 17.5991 54 17.2721 54 16.9311V1.50253C54 1.16153 54.1355 0.834502 54.3766 0.59338C54.6177 0.352258 54.9447 0.216797 55.2857 0.216797L70.7143 0.216797C71.0553 0.216797 71.3823 0.352258 71.6234 0.59338C71.8645 0.834502 72 1.16153 72 1.50253ZM59.1428 6.64533H56.5715V15.6453H59.1428V6.64533ZM59.4643 4.074C59.4643 3.18638 58.7447 2.4668 57.8572 2.4668C56.9696 2.4668 56.25 3.18638 56.25 4.074C56.25 4.96148 56.9696 5.68106 57.8572 5.68106C58.7447 5.68106 59.4643 4.96148 59.4643 4.074ZM69.4285 10.8753C69.4285 8.0468 68.49 6.38827 65.7515 6.38827C65.1797 6.38831 64.6167 6.52908 64.1122 6.79813C63.6077 7.06719 63.1771 7.45627 62.8585 7.93106V6.64533H60.4285V15.6453H63V11.4411C62.9662 11.1359 62.9956 10.8271 63.0864 10.5338C63.1771 10.2404 63.3273 9.96896 63.5275 9.73619C63.7277 9.50342 63.9737 9.31434 64.2501 9.18074C64.5265 9.04713 64.8275 8.97186 65.1343 8.95959C66.6257 8.95959 66.8572 10.4253 66.8572 11.4411V15.6453H69.4285V10.8753Z"
                          fill="#0A66C2"
                        />
                        <path
                          d="M28.4143 10.7598L32.3872 15.6455H29.25L25.7143 11.1585V15.6455H23.1428V2.78845H25.7143V10.3485L28.98 6.64552H32.2585L28.4143 10.7598ZM18.1285 6.38845C17.5655 6.39688 17.0129 6.54164 16.5181 6.81033C16.0232 7.07902 15.6009 7.46364 15.2872 7.93125V6.64552H12.8572V15.6455H15.4285V11.4412C15.3948 11.1361 15.4242 10.8272 15.5149 10.5339C15.6057 10.2406 15.7558 9.96915 15.956 9.73637C16.1562 9.5036 16.4022 9.31453 16.6786 9.18093C16.955 9.04732 17.256 8.97205 17.5628 8.95978C19.0543 8.95978 19.2857 10.4255 19.2857 11.4412V15.6455H21.8572V10.8755C21.8572 8.04698 20.9185 6.38845 18.18 6.38845H18.1285ZM41.1428 11.3512C41.1526 11.5397 41.1526 11.7285 41.1428 11.917H34.3928V12.007C34.5024 12.5431 34.7994 13.0227 35.2306 13.3596C35.6618 13.6966 36.199 13.8688 36.7457 13.8455C37.1795 13.8644 37.6125 13.7955 38.019 13.6431C38.4255 13.4907 38.7971 13.2578 39.1115 12.9585L40.8215 14.2442C40.2795 14.7973 39.6276 15.2306 38.9079 15.5163C38.1881 15.8019 37.4165 15.9336 36.6428 15.9027C36.002 15.9432 35.36 15.8457 34.7602 15.6168C34.1603 15.388 33.6165 15.033 33.1656 14.576C32.7147 14.1189 32.3671 13.5704 32.1463 12.9676C31.9255 12.3647 31.8366 11.7214 31.8857 11.0813C31.8726 10.4493 31.9897 9.82139 32.2299 9.23669C32.47 8.65199 32.828 8.12302 33.2815 7.68274C33.7351 7.24247 34.2745 6.90033 34.866 6.67765C35.4576 6.45497 36.0887 6.35653 36.72 6.38845C39.1372 6.38845 41.1428 8.09845 41.1428 11.3512ZM38.7515 10.2455C38.742 9.99085 38.6808 9.74077 38.5716 9.51052C38.4623 9.28028 38.3074 9.07468 38.1161 8.90627C37.9248 8.73786 37.7013 8.61015 37.4591 8.53094C37.2168 8.45172 36.961 8.42266 36.7072 8.44552C35.5766 8.32331 34.5527 9.11967 34.3928 10.2455H38.7515ZM2.57147 2.78845H0V15.6455H7.71427V13.0743H2.57147V2.78845ZM48.8572 2.78845H51.4285V15.6455H48.9985V14.7455C48.69 15.1257 48.2967 15.4283 47.8502 15.6293C47.4037 15.8302 46.9164 15.9239 46.4272 15.9027C45.8296 15.8874 45.2414 15.75 44.6988 15.4989C44.1562 15.2479 43.6707 14.8886 43.2721 14.443C42.8735 13.9975 42.5703 13.4751 42.381 12.908C42.1917 12.341 42.1204 11.7412 42.1715 11.1455C42.1108 10.549 42.1749 9.94644 42.3598 9.37608C42.5446 8.80572 42.8462 8.2801 43.2453 7.83264C43.6444 7.38519 44.1322 7.0257 44.6778 6.77707C45.2234 6.52843 45.8148 6.39609 46.4143 6.38845C46.8608 6.36889 47.3068 6.43839 47.7262 6.59291C48.1456 6.74742 48.5301 6.98386 48.8572 7.28845V2.78845ZM49.05 11.1455C49.0904 10.8486 49.0667 10.5465 48.9805 10.2596C48.8943 9.97261 48.7475 9.70749 48.5501 9.48206C48.3527 9.25664 48.1093 9.07617 47.8362 8.95282C47.5632 8.82946 47.2668 8.76609 46.9672 8.76698C45.7372 8.85628 44.8051 9.91406 44.8715 11.1455C44.8051 12.377 45.7372 13.4349 46.9672 13.5242C47.2668 13.5251 47.5632 13.4617 47.8363 13.3383C48.1093 13.215 48.3528 13.0345 48.5502 12.8091C48.7476 12.5836 48.8943 12.3185 48.9805 12.0315C49.0668 11.7445 49.0905 11.4424 49.05 11.1455ZM10.2857 2.53125C9.87223 2.53711 9.47636 2.69965 9.17804 2.98606C8.87973 3.27247 8.70121 3.66141 8.67853 4.07433C8.67853 4.96181 9.39811 5.68139 10.2857 5.68139C11.1734 5.68139 11.8927 4.96167 11.8927 4.07433C11.8699 3.66145 11.6914 3.27258 11.3931 2.9862C11.0949 2.69982 10.6992 2.53714 10.2857 2.53125ZM9 15.6455H11.5715V6.64552H9V15.6455Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_537_18621">
                          <rect
                            width="72"
                            height="18"
                            fill="white"
                            transform="translate(0 0.216797)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="shrink-0">
                    <span
                      className="border border-new-500 text-new-500 px-3 py-2 rounded-md"
                    >
                      2019-2021</span>
                  </div>
                </li>

                <li className="flex justify-between items-center pl-4 py-5">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4">
                    Blockchain Developer
                    </h4>

                    {/* Linkedin SVG ===> Flexper SVG */}
                    <svg
                      width="72"
                      height="19"
                      viewBox="0 0 72 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_537_18621)">
                        <path
                          d="M72 1.50253V16.9311C72 17.2721 71.8645 17.5991 71.6234 17.8402C71.3823 18.0813 71.0553 18.2168 70.7143 18.2168H55.2857C54.9447 18.2168 54.6177 18.0813 54.3766 17.8402C54.1355 17.5991 54 17.2721 54 16.9311V1.50253C54 1.16153 54.1355 0.834502 54.3766 0.59338C54.6177 0.352258 54.9447 0.216797 55.2857 0.216797L70.7143 0.216797C71.0553 0.216797 71.3823 0.352258 71.6234 0.59338C71.8645 0.834502 72 1.16153 72 1.50253ZM59.1428 6.64533H56.5715V15.6453H59.1428V6.64533ZM59.4643 4.074C59.4643 3.18638 58.7447 2.4668 57.8572 2.4668C56.9696 2.4668 56.25 3.18638 56.25 4.074C56.25 4.96148 56.9696 5.68106 57.8572 5.68106C58.7447 5.68106 59.4643 4.96148 59.4643 4.074ZM69.4285 10.8753C69.4285 8.0468 68.49 6.38827 65.7515 6.38827C65.1797 6.38831 64.6167 6.52908 64.1122 6.79813C63.6077 7.06719 63.1771 7.45627 62.8585 7.93106V6.64533H60.4285V15.6453H63V11.4411C62.9662 11.1359 62.9956 10.8271 63.0864 10.5338C63.1771 10.2404 63.3273 9.96896 63.5275 9.73619C63.7277 9.50342 63.9737 9.31434 64.2501 9.18074C64.5265 9.04713 64.8275 8.97186 65.1343 8.95959C66.6257 8.95959 66.8572 10.4253 66.8572 11.4411V15.6453H69.4285V10.8753Z"
                          fill="#0A66C2"
                        />
                        <path
                          d="M28.4143 10.7598L32.3872 15.6455H29.25L25.7143 11.1585V15.6455H23.1428V2.78845H25.7143V10.3485L28.98 6.64552H32.2585L28.4143 10.7598ZM18.1285 6.38845C17.5655 6.39688 17.0129 6.54164 16.5181 6.81033C16.0232 7.07902 15.6009 7.46364 15.2872 7.93125V6.64552H12.8572V15.6455H15.4285V11.4412C15.3948 11.1361 15.4242 10.8272 15.5149 10.5339C15.6057 10.2406 15.7558 9.96915 15.956 9.73637C16.1562 9.5036 16.4022 9.31453 16.6786 9.18093C16.955 9.04732 17.256 8.97205 17.5628 8.95978C19.0543 8.95978 19.2857 10.4255 19.2857 11.4412V15.6455H21.8572V10.8755C21.8572 8.04698 20.9185 6.38845 18.18 6.38845H18.1285ZM41.1428 11.3512C41.1526 11.5397 41.1526 11.7285 41.1428 11.917H34.3928V12.007C34.5024 12.5431 34.7994 13.0227 35.2306 13.3596C35.6618 13.6966 36.199 13.8688 36.7457 13.8455C37.1795 13.8644 37.6125 13.7955 38.019 13.6431C38.4255 13.4907 38.7971 13.2578 39.1115 12.9585L40.8215 14.2442C40.2795 14.7973 39.6276 15.2306 38.9079 15.5163C38.1881 15.8019 37.4165 15.9336 36.6428 15.9027C36.002 15.9432 35.36 15.8457 34.7602 15.6168C34.1603 15.388 33.6165 15.033 33.1656 14.576C32.7147 14.1189 32.3671 13.5704 32.1463 12.9676C31.9255 12.3647 31.8366 11.7214 31.8857 11.0813C31.8726 10.4493 31.9897 9.82139 32.2299 9.23669C32.47 8.65199 32.828 8.12302 33.2815 7.68274C33.7351 7.24247 34.2745 6.90033 34.866 6.67765C35.4576 6.45497 36.0887 6.35653 36.72 6.38845C39.1372 6.38845 41.1428 8.09845 41.1428 11.3512ZM38.7515 10.2455C38.742 9.99085 38.6808 9.74077 38.5716 9.51052C38.4623 9.28028 38.3074 9.07468 38.1161 8.90627C37.9248 8.73786 37.7013 8.61015 37.4591 8.53094C37.2168 8.45172 36.961 8.42266 36.7072 8.44552C35.5766 8.32331 34.5527 9.11967 34.3928 10.2455H38.7515ZM2.57147 2.78845H0V15.6455H7.71427V13.0743H2.57147V2.78845ZM48.8572 2.78845H51.4285V15.6455H48.9985V14.7455C48.69 15.1257 48.2967 15.4283 47.8502 15.6293C47.4037 15.8302 46.9164 15.9239 46.4272 15.9027C45.8296 15.8874 45.2414 15.75 44.6988 15.4989C44.1562 15.2479 43.6707 14.8886 43.2721 14.443C42.8735 13.9975 42.5703 13.4751 42.381 12.908C42.1917 12.341 42.1204 11.7412 42.1715 11.1455C42.1108 10.549 42.1749 9.94644 42.3598 9.37608C42.5446 8.80572 42.8462 8.2801 43.2453 7.83264C43.6444 7.38519 44.1322 7.0257 44.6778 6.77707C45.2234 6.52843 45.8148 6.39609 46.4143 6.38845C46.8608 6.36889 47.3068 6.43839 47.7262 6.59291C48.1456 6.74742 48.5301 6.98386 48.8572 7.28845V2.78845ZM49.05 11.1455C49.0904 10.8486 49.0667 10.5465 48.9805 10.2596C48.8943 9.97261 48.7475 9.70749 48.5501 9.48206C48.3527 9.25664 48.1093 9.07617 47.8362 8.95282C47.5632 8.82946 47.2668 8.76609 46.9672 8.76698C45.7372 8.85628 44.8051 9.91406 44.8715 11.1455C44.8051 12.377 45.7372 13.4349 46.9672 13.5242C47.2668 13.5251 47.5632 13.4617 47.8363 13.3383C48.1093 13.215 48.3528 13.0345 48.5502 12.8091C48.7476 12.5836 48.8943 12.3185 48.9805 12.0315C49.0668 11.7445 49.0905 11.4424 49.05 11.1455ZM10.2857 2.53125C9.87223 2.53711 9.47636 2.69965 9.17804 2.98606C8.87973 3.27247 8.70121 3.66141 8.67853 4.07433C8.67853 4.96181 9.39811 5.68139 10.2857 5.68139C11.1734 5.68139 11.8927 4.96167 11.8927 4.07433C11.8699 3.66145 11.6914 3.27258 11.3931 2.9862C11.0949 2.69982 10.6992 2.53714 10.2857 2.53125ZM9 15.6455H11.5715V6.64552H9V15.6455Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_537_18621">
                          <rect
                            width="72"
                            height="18"
                            fill="white"
                            transform="translate(0 0.216797)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="shrink-0">
                    <span
                      className="border border-new-500 text-new-500 px-3 py-2 rounded-md"
                    >
                      2019-2019</span>
                  </div>
                </li>

                <li className="flex justify-between items-center pl-4 py-5">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4">
                   Blockchain Smart Contract Developer
                    </h4>

                    {/* Linkedin SVG ===> Equisafe SVG */}
                    <svg
                      width="72"
                      height="19"
                      viewBox="0 0 72 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_537_18621)">
                        <path
                          d="M72 1.50253V16.9311C72 17.2721 71.8645 17.5991 71.6234 17.8402C71.3823 18.0813 71.0553 18.2168 70.7143 18.2168H55.2857C54.9447 18.2168 54.6177 18.0813 54.3766 17.8402C54.1355 17.5991 54 17.2721 54 16.9311V1.50253C54 1.16153 54.1355 0.834502 54.3766 0.59338C54.6177 0.352258 54.9447 0.216797 55.2857 0.216797L70.7143 0.216797C71.0553 0.216797 71.3823 0.352258 71.6234 0.59338C71.8645 0.834502 72 1.16153 72 1.50253ZM59.1428 6.64533H56.5715V15.6453H59.1428V6.64533ZM59.4643 4.074C59.4643 3.18638 58.7447 2.4668 57.8572 2.4668C56.9696 2.4668 56.25 3.18638 56.25 4.074C56.25 4.96148 56.9696 5.68106 57.8572 5.68106C58.7447 5.68106 59.4643 4.96148 59.4643 4.074ZM69.4285 10.8753C69.4285 8.0468 68.49 6.38827 65.7515 6.38827C65.1797 6.38831 64.6167 6.52908 64.1122 6.79813C63.6077 7.06719 63.1771 7.45627 62.8585 7.93106V6.64533H60.4285V15.6453H63V11.4411C62.9662 11.1359 62.9956 10.8271 63.0864 10.5338C63.1771 10.2404 63.3273 9.96896 63.5275 9.73619C63.7277 9.50342 63.9737 9.31434 64.2501 9.18074C64.5265 9.04713 64.8275 8.97186 65.1343 8.95959C66.6257 8.95959 66.8572 10.4253 66.8572 11.4411V15.6453H69.4285V10.8753Z"
                          fill="#0A66C2"
                        />
                        <path
                          d="M28.4143 10.7598L32.3872 15.6455H29.25L25.7143 11.1585V15.6455H23.1428V2.78845H25.7143V10.3485L28.98 6.64552H32.2585L28.4143 10.7598ZM18.1285 6.38845C17.5655 6.39688 17.0129 6.54164 16.5181 6.81033C16.0232 7.07902 15.6009 7.46364 15.2872 7.93125V6.64552H12.8572V15.6455H15.4285V11.4412C15.3948 11.1361 15.4242 10.8272 15.5149 10.5339C15.6057 10.2406 15.7558 9.96915 15.956 9.73637C16.1562 9.5036 16.4022 9.31453 16.6786 9.18093C16.955 9.04732 17.256 8.97205 17.5628 8.95978C19.0543 8.95978 19.2857 10.4255 19.2857 11.4412V15.6455H21.8572V10.8755C21.8572 8.04698 20.9185 6.38845 18.18 6.38845H18.1285ZM41.1428 11.3512C41.1526 11.5397 41.1526 11.7285 41.1428 11.917H34.3928V12.007C34.5024 12.5431 34.7994 13.0227 35.2306 13.3596C35.6618 13.6966 36.199 13.8688 36.7457 13.8455C37.1795 13.8644 37.6125 13.7955 38.019 13.6431C38.4255 13.4907 38.7971 13.2578 39.1115 12.9585L40.8215 14.2442C40.2795 14.7973 39.6276 15.2306 38.9079 15.5163C38.1881 15.8019 37.4165 15.9336 36.6428 15.9027C36.002 15.9432 35.36 15.8457 34.7602 15.6168C34.1603 15.388 33.6165 15.033 33.1656 14.576C32.7147 14.1189 32.3671 13.5704 32.1463 12.9676C31.9255 12.3647 31.8366 11.7214 31.8857 11.0813C31.8726 10.4493 31.9897 9.82139 32.2299 9.23669C32.47 8.65199 32.828 8.12302 33.2815 7.68274C33.7351 7.24247 34.2745 6.90033 34.866 6.67765C35.4576 6.45497 36.0887 6.35653 36.72 6.38845C39.1372 6.38845 41.1428 8.09845 41.1428 11.3512ZM38.7515 10.2455C38.742 9.99085 38.6808 9.74077 38.5716 9.51052C38.4623 9.28028 38.3074 9.07468 38.1161 8.90627C37.9248 8.73786 37.7013 8.61015 37.4591 8.53094C37.2168 8.45172 36.961 8.42266 36.7072 8.44552C35.5766 8.32331 34.5527 9.11967 34.3928 10.2455H38.7515ZM2.57147 2.78845H0V15.6455H7.71427V13.0743H2.57147V2.78845ZM48.8572 2.78845H51.4285V15.6455H48.9985V14.7455C48.69 15.1257 48.2967 15.4283 47.8502 15.6293C47.4037 15.8302 46.9164 15.9239 46.4272 15.9027C45.8296 15.8874 45.2414 15.75 44.6988 15.4989C44.1562 15.2479 43.6707 14.8886 43.2721 14.443C42.8735 13.9975 42.5703 13.4751 42.381 12.908C42.1917 12.341 42.1204 11.7412 42.1715 11.1455C42.1108 10.549 42.1749 9.94644 42.3598 9.37608C42.5446 8.80572 42.8462 8.2801 43.2453 7.83264C43.6444 7.38519 44.1322 7.0257 44.6778 6.77707C45.2234 6.52843 45.8148 6.39609 46.4143 6.38845C46.8608 6.36889 47.3068 6.43839 47.7262 6.59291C48.1456 6.74742 48.5301 6.98386 48.8572 7.28845V2.78845ZM49.05 11.1455C49.0904 10.8486 49.0667 10.5465 48.9805 10.2596C48.8943 9.97261 48.7475 9.70749 48.5501 9.48206C48.3527 9.25664 48.1093 9.07617 47.8362 8.95282C47.5632 8.82946 47.2668 8.76609 46.9672 8.76698C45.7372 8.85628 44.8051 9.91406 44.8715 11.1455C44.8051 12.377 45.7372 13.4349 46.9672 13.5242C47.2668 13.5251 47.5632 13.4617 47.8363 13.3383C48.1093 13.215 48.3528 13.0345 48.5502 12.8091C48.7476 12.5836 48.8943 12.3185 48.9805 12.0315C49.0668 11.7445 49.0905 11.4424 49.05 11.1455ZM10.2857 2.53125C9.87223 2.53711 9.47636 2.69965 9.17804 2.98606C8.87973 3.27247 8.70121 3.66141 8.67853 4.07433C8.67853 4.96181 9.39811 5.68139 10.2857 5.68139C11.1734 5.68139 11.8927 4.96167 11.8927 4.07433C11.8699 3.66145 11.6914 3.27258 11.3931 2.9862C11.0949 2.69982 10.6992 2.53714 10.2857 2.53125ZM9 15.6455H11.5715V6.64552H9V15.6455Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_537_18621">
                          <rect
                            width="72"
                            height="18"
                            fill="white"
                            transform="translate(0 0.216797)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="shrink-0">
                    <span
                      className="border border-new-500 text-new-500 px-3 py-2 rounded-md"
                    >
                      2018-2019</span>
                  </div>
                </li>

                <li className="flex justify-between items-center pl-4 py-5">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4">
                   Blockchain Smart Contract Developer
                    </h4>

                    {/* Linkedin SVG ===> BTU Protocol  */}
                    <svg
                      width="72"
                      height="19"
                      viewBox="0 0 72 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_537_18621)">
                        <path
                          d="M72 1.50253V16.9311C72 17.2721 71.8645 17.5991 71.6234 17.8402C71.3823 18.0813 71.0553 18.2168 70.7143 18.2168H55.2857C54.9447 18.2168 54.6177 18.0813 54.3766 17.8402C54.1355 17.5991 54 17.2721 54 16.9311V1.50253C54 1.16153 54.1355 0.834502 54.3766 0.59338C54.6177 0.352258 54.9447 0.216797 55.2857 0.216797L70.7143 0.216797C71.0553 0.216797 71.3823 0.352258 71.6234 0.59338C71.8645 0.834502 72 1.16153 72 1.50253ZM59.1428 6.64533H56.5715V15.6453H59.1428V6.64533ZM59.4643 4.074C59.4643 3.18638 58.7447 2.4668 57.8572 2.4668C56.9696 2.4668 56.25 3.18638 56.25 4.074C56.25 4.96148 56.9696 5.68106 57.8572 5.68106C58.7447 5.68106 59.4643 4.96148 59.4643 4.074ZM69.4285 10.8753C69.4285 8.0468 68.49 6.38827 65.7515 6.38827C65.1797 6.38831 64.6167 6.52908 64.1122 6.79813C63.6077 7.06719 63.1771 7.45627 62.8585 7.93106V6.64533H60.4285V15.6453H63V11.4411C62.9662 11.1359 62.9956 10.8271 63.0864 10.5338C63.1771 10.2404 63.3273 9.96896 63.5275 9.73619C63.7277 9.50342 63.9737 9.31434 64.2501 9.18074C64.5265 9.04713 64.8275 8.97186 65.1343 8.95959C66.6257 8.95959 66.8572 10.4253 66.8572 11.4411V15.6453H69.4285V10.8753Z"
                          fill="#0A66C2"
                        />
                        <path
                          d="M28.4143 10.7598L32.3872 15.6455H29.25L25.7143 11.1585V15.6455H23.1428V2.78845H25.7143V10.3485L28.98 6.64552H32.2585L28.4143 10.7598ZM18.1285 6.38845C17.5655 6.39688 17.0129 6.54164 16.5181 6.81033C16.0232 7.07902 15.6009 7.46364 15.2872 7.93125V6.64552H12.8572V15.6455H15.4285V11.4412C15.3948 11.1361 15.4242 10.8272 15.5149 10.5339C15.6057 10.2406 15.7558 9.96915 15.956 9.73637C16.1562 9.5036 16.4022 9.31453 16.6786 9.18093C16.955 9.04732 17.256 8.97205 17.5628 8.95978C19.0543 8.95978 19.2857 10.4255 19.2857 11.4412V15.6455H21.8572V10.8755C21.8572 8.04698 20.9185 6.38845 18.18 6.38845H18.1285ZM41.1428 11.3512C41.1526 11.5397 41.1526 11.7285 41.1428 11.917H34.3928V12.007C34.5024 12.5431 34.7994 13.0227 35.2306 13.3596C35.6618 13.6966 36.199 13.8688 36.7457 13.8455C37.1795 13.8644 37.6125 13.7955 38.019 13.6431C38.4255 13.4907 38.7971 13.2578 39.1115 12.9585L40.8215 14.2442C40.2795 14.7973 39.6276 15.2306 38.9079 15.5163C38.1881 15.8019 37.4165 15.9336 36.6428 15.9027C36.002 15.9432 35.36 15.8457 34.7602 15.6168C34.1603 15.388 33.6165 15.033 33.1656 14.576C32.7147 14.1189 32.3671 13.5704 32.1463 12.9676C31.9255 12.3647 31.8366 11.7214 31.8857 11.0813C31.8726 10.4493 31.9897 9.82139 32.2299 9.23669C32.47 8.65199 32.828 8.12302 33.2815 7.68274C33.7351 7.24247 34.2745 6.90033 34.866 6.67765C35.4576 6.45497 36.0887 6.35653 36.72 6.38845C39.1372 6.38845 41.1428 8.09845 41.1428 11.3512ZM38.7515 10.2455C38.742 9.99085 38.6808 9.74077 38.5716 9.51052C38.4623 9.28028 38.3074 9.07468 38.1161 8.90627C37.9248 8.73786 37.7013 8.61015 37.4591 8.53094C37.2168 8.45172 36.961 8.42266 36.7072 8.44552C35.5766 8.32331 34.5527 9.11967 34.3928 10.2455H38.7515ZM2.57147 2.78845H0V15.6455H7.71427V13.0743H2.57147V2.78845ZM48.8572 2.78845H51.4285V15.6455H48.9985V14.7455C48.69 15.1257 48.2967 15.4283 47.8502 15.6293C47.4037 15.8302 46.9164 15.9239 46.4272 15.9027C45.8296 15.8874 45.2414 15.75 44.6988 15.4989C44.1562 15.2479 43.6707 14.8886 43.2721 14.443C42.8735 13.9975 42.5703 13.4751 42.381 12.908C42.1917 12.341 42.1204 11.7412 42.1715 11.1455C42.1108 10.549 42.1749 9.94644 42.3598 9.37608C42.5446 8.80572 42.8462 8.2801 43.2453 7.83264C43.6444 7.38519 44.1322 7.0257 44.6778 6.77707C45.2234 6.52843 45.8148 6.39609 46.4143 6.38845C46.8608 6.36889 47.3068 6.43839 47.7262 6.59291C48.1456 6.74742 48.5301 6.98386 48.8572 7.28845V2.78845ZM49.05 11.1455C49.0904 10.8486 49.0667 10.5465 48.9805 10.2596C48.8943 9.97261 48.7475 9.70749 48.5501 9.48206C48.3527 9.25664 48.1093 9.07617 47.8362 8.95282C47.5632 8.82946 47.2668 8.76609 46.9672 8.76698C45.7372 8.85628 44.8051 9.91406 44.8715 11.1455C44.8051 12.377 45.7372 13.4349 46.9672 13.5242C47.2668 13.5251 47.5632 13.4617 47.8363 13.3383C48.1093 13.215 48.3528 13.0345 48.5502 12.8091C48.7476 12.5836 48.8943 12.3185 48.9805 12.0315C49.0668 11.7445 49.0905 11.4424 49.05 11.1455ZM10.2857 2.53125C9.87223 2.53711 9.47636 2.69965 9.17804 2.98606C8.87973 3.27247 8.70121 3.66141 8.67853 4.07433C8.67853 4.96181 9.39811 5.68139 10.2857 5.68139C11.1734 5.68139 11.8927 4.96167 11.8927 4.07433C11.8699 3.66145 11.6914 3.27258 11.3931 2.9862C11.0949 2.69982 10.6992 2.53714 10.2857 2.53125ZM9 15.6455H11.5715V6.64552H9V15.6455Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_537_18621">
                          <rect
                            width="72"
                            height="18"
                            fill="white"
                            transform="translate(0 0.216797)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="shrink-0">
                    <span
                      className="border border-new-500 text-new-500 px-3 py-2 rounded-md"
                    >
                      2018-2019</span>
                  </div>
                </li>

                <li className="flex justify-between items-center pl-4 py-5">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4">
                    IT Security Engineer
                    </h4>

                    {/* Linkedin SVG ===> ArcelorMittal  */}
                    <svg
                      width="72"
                      height="19"
                      viewBox="0 0 72 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_537_18621)">
                        <path
                          d="M72 1.50253V16.9311C72 17.2721 71.8645 17.5991 71.6234 17.8402C71.3823 18.0813 71.0553 18.2168 70.7143 18.2168H55.2857C54.9447 18.2168 54.6177 18.0813 54.3766 17.8402C54.1355 17.5991 54 17.2721 54 16.9311V1.50253C54 1.16153 54.1355 0.834502 54.3766 0.59338C54.6177 0.352258 54.9447 0.216797 55.2857 0.216797L70.7143 0.216797C71.0553 0.216797 71.3823 0.352258 71.6234 0.59338C71.8645 0.834502 72 1.16153 72 1.50253ZM59.1428 6.64533H56.5715V15.6453H59.1428V6.64533ZM59.4643 4.074C59.4643 3.18638 58.7447 2.4668 57.8572 2.4668C56.9696 2.4668 56.25 3.18638 56.25 4.074C56.25 4.96148 56.9696 5.68106 57.8572 5.68106C58.7447 5.68106 59.4643 4.96148 59.4643 4.074ZM69.4285 10.8753C69.4285 8.0468 68.49 6.38827 65.7515 6.38827C65.1797 6.38831 64.6167 6.52908 64.1122 6.79813C63.6077 7.06719 63.1771 7.45627 62.8585 7.93106V6.64533H60.4285V15.6453H63V11.4411C62.9662 11.1359 62.9956 10.8271 63.0864 10.5338C63.1771 10.2404 63.3273 9.96896 63.5275 9.73619C63.7277 9.50342 63.9737 9.31434 64.2501 9.18074C64.5265 9.04713 64.8275 8.97186 65.1343 8.95959C66.6257 8.95959 66.8572 10.4253 66.8572 11.4411V15.6453H69.4285V10.8753Z"
                          fill="#0A66C2"
                        />
                        <path
                          d="M28.4143 10.7598L32.3872 15.6455H29.25L25.7143 11.1585V15.6455H23.1428V2.78845H25.7143V10.3485L28.98 6.64552H32.2585L28.4143 10.7598ZM18.1285 6.38845C17.5655 6.39688 17.0129 6.54164 16.5181 6.81033C16.0232 7.07902 15.6009 7.46364 15.2872 7.93125V6.64552H12.8572V15.6455H15.4285V11.4412C15.3948 11.1361 15.4242 10.8272 15.5149 10.5339C15.6057 10.2406 15.7558 9.96915 15.956 9.73637C16.1562 9.5036 16.4022 9.31453 16.6786 9.18093C16.955 9.04732 17.256 8.97205 17.5628 8.95978C19.0543 8.95978 19.2857 10.4255 19.2857 11.4412V15.6455H21.8572V10.8755C21.8572 8.04698 20.9185 6.38845 18.18 6.38845H18.1285ZM41.1428 11.3512C41.1526 11.5397 41.1526 11.7285 41.1428 11.917H34.3928V12.007C34.5024 12.5431 34.7994 13.0227 35.2306 13.3596C35.6618 13.6966 36.199 13.8688 36.7457 13.8455C37.1795 13.8644 37.6125 13.7955 38.019 13.6431C38.4255 13.4907 38.7971 13.2578 39.1115 12.9585L40.8215 14.2442C40.2795 14.7973 39.6276 15.2306 38.9079 15.5163C38.1881 15.8019 37.4165 15.9336 36.6428 15.9027C36.002 15.9432 35.36 15.8457 34.7602 15.6168C34.1603 15.388 33.6165 15.033 33.1656 14.576C32.7147 14.1189 32.3671 13.5704 32.1463 12.9676C31.9255 12.3647 31.8366 11.7214 31.8857 11.0813C31.8726 10.4493 31.9897 9.82139 32.2299 9.23669C32.47 8.65199 32.828 8.12302 33.2815 7.68274C33.7351 7.24247 34.2745 6.90033 34.866 6.67765C35.4576 6.45497 36.0887 6.35653 36.72 6.38845C39.1372 6.38845 41.1428 8.09845 41.1428 11.3512ZM38.7515 10.2455C38.742 9.99085 38.6808 9.74077 38.5716 9.51052C38.4623 9.28028 38.3074 9.07468 38.1161 8.90627C37.9248 8.73786 37.7013 8.61015 37.4591 8.53094C37.2168 8.45172 36.961 8.42266 36.7072 8.44552C35.5766 8.32331 34.5527 9.11967 34.3928 10.2455H38.7515ZM2.57147 2.78845H0V15.6455H7.71427V13.0743H2.57147V2.78845ZM48.8572 2.78845H51.4285V15.6455H48.9985V14.7455C48.69 15.1257 48.2967 15.4283 47.8502 15.6293C47.4037 15.8302 46.9164 15.9239 46.4272 15.9027C45.8296 15.8874 45.2414 15.75 44.6988 15.4989C44.1562 15.2479 43.6707 14.8886 43.2721 14.443C42.8735 13.9975 42.5703 13.4751 42.381 12.908C42.1917 12.341 42.1204 11.7412 42.1715 11.1455C42.1108 10.549 42.1749 9.94644 42.3598 9.37608C42.5446 8.80572 42.8462 8.2801 43.2453 7.83264C43.6444 7.38519 44.1322 7.0257 44.6778 6.77707C45.2234 6.52843 45.8148 6.39609 46.4143 6.38845C46.8608 6.36889 47.3068 6.43839 47.7262 6.59291C48.1456 6.74742 48.5301 6.98386 48.8572 7.28845V2.78845ZM49.05 11.1455C49.0904 10.8486 49.0667 10.5465 48.9805 10.2596C48.8943 9.97261 48.7475 9.70749 48.5501 9.48206C48.3527 9.25664 48.1093 9.07617 47.8362 8.95282C47.5632 8.82946 47.2668 8.76609 46.9672 8.76698C45.7372 8.85628 44.8051 9.91406 44.8715 11.1455C44.8051 12.377 45.7372 13.4349 46.9672 13.5242C47.2668 13.5251 47.5632 13.4617 47.8363 13.3383C48.1093 13.215 48.3528 13.0345 48.5502 12.8091C48.7476 12.5836 48.8943 12.3185 48.9805 12.0315C49.0668 11.7445 49.0905 11.4424 49.05 11.1455ZM10.2857 2.53125C9.87223 2.53711 9.47636 2.69965 9.17804 2.98606C8.87973 3.27247 8.70121 3.66141 8.67853 4.07433C8.67853 4.96181 9.39811 5.68139 10.2857 5.68139C11.1734 5.68139 11.8927 4.96167 11.8927 4.07433C11.8699 3.66145 11.6914 3.27258 11.3931 2.9862C11.0949 2.69982 10.6992 2.53714 10.2857 2.53125ZM9 15.6455H11.5715V6.64552H9V15.6455Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_537_18621">
                          <rect
                            width="72"
                            height="18"
                            fill="white"
                            transform="translate(0 0.216797)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="shrink-0">
                    <span
                      className="border border-new-500 text-new-500 px-3 py-2 rounded-md"
                    >
                      2017-2018</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* <!-- Skills  --> */}
          <div className="grid lg:grid-cols-2 gap-x-20 gap-y-10">
            {/* <!-- Left Col--> */}
            <div>
              <div className="border-b border-[#494C5F] pb-3">
                <h3 className="text-borderl-500 text-2xl">Skills</h3>
              </div>
              <ul className="mt-7 flex flex-wrap gap-3">
                <li>
                  <a
                    href="#/"
                    className="bg-[#16213B] block px-4 py-3 hover:bg-new-500 hover:text-interface-100 transition rounded-md text-white text-xl"
                    >Html</a>
                </li>
                <li>
                  <a
                    href="#/"
                    className="bg-[#16213B] block px-4 py-3 hover:bg-new-500 hover:text-interface-100 transition rounded-md text-white text-xl"
                    >CSS</a>
                </li>
                <li>
                  <a
                    href="#/"
                    className="bg-[#16213B] block px-4 py-3 hover:bg-new-500 hover:text-interface-100 transition rounded-md text-white text-xl"
                    >Front-end</a>
                </li>
                <li>
                  <a
                    href="#/"
                    className="bg-[#16213B] block px-4 py-3 hover:bg-new-500 hover:text-interface-100 transition rounded-md text-white text-xl"
                    >React.js</a>
                </li>
                <li>
                  <a
                    href="#/"
                    className="bg-[#16213B] block px-4 py-3 hover:bg-new-500 hover:text-interface-100 transition rounded-md text-white text-xl"
                    >Next.js</a>
                </li>
                <li>
                  <a
                    href="#/"
                    className="bg-[#16213B] block px-4 py-3 hover:bg-new-500 hover:text-interface-100 transition rounded-md text-white text-xl"
                    >Back-end</a>
                </li>
                <li>
                  <a
                    href="#/"
                    className="bg-[#16213B] block px-4 py-3 hover:bg-new-500 hover:text-interface-100 transition rounded-md text-white text-xl"
                    >Javascript</a>
                </li>
                <li>
                  <a
                    href="#/"
                    className="bg-[#16213B] block px-4 py-3 hover:bg-new-500 hover:text-interface-100 transition rounded-md text-white text-xl"
                    >Javascript</a>
                </li>
                <li>
                  <a
                    href="#/"
                    className="bg-[#16213B] block px-4 py-3 hover:bg-new-500 hover:text-interface-100 transition rounded-md text-white text-xl"
                    >Node.js</a>
                </li>
                <li>
                  <a
                    href="#/"
                    className="bg-[#16213B] block px-4 py-3 hover:bg-new-500 hover:text-interface-100 transition rounded-md text-white text-xl"
                    >Typescript</a>
                </li>
                <li>
                  <a
                    href="#/"
                    className="bg-[#16213B] block px-4 py-3 hover:bg-new-500 hover:text-interface-100 transition rounded-md text-white text-xl"
                    >Blockchain</a>
                </li>
                <li>
                  <a
                    href="#/"
                    className="bg-[#16213B] block px-4 py-3 hover:bg-new-500 hover:text-interface-100 transition rounded-md text-white text-xl"
                    >Solidity</a>
                </li>
                <li>
                  <a
                    href="#/"
                    className="bg-[#16213B] block px-4 py-3 hover:bg-new-500 hover:text-interface-100 transition rounded-md text-white text-xl"
                    >Hardhat</a>
                </li>
                <li>
                  <a
                    href="#/"
                    className="bg-[#16213B] block px-4 py-3 hover:bg-new-500 hover:text-interface-100 transition rounded-md text-white text-xl"
                    >Foundry</a>
                </li>
                <li>
                  <a
                    href="#/"
                    className="bg-[#16213B] block px-4 py-3 hover:bg-new-500 hover:text-interface-100 transition rounded-md text-white text-xl"
                    >Chainlink</a>
                </li>
                <li>
                  <a
                    href="#/"
                    className="bg-[#16213B] block px-4 py-3 hover:bg-new-500 hover:text-interface-100 transition rounded-md text-white text-xl"
                    >IPFS</a>
                </li>
                <li>
                  <a
                    href="#/"
                    className="bg-[#16213B] block px-4 py-3 hover:bg-new-500 hover:text-interface-100 transition rounded-md text-white text-xl"
                    >Socket.io</a>
                </li>
                <li>
                  <a
                    href="#/"
                    className="bg-[#16213B] block px-4 py-3 hover:bg-new-500 hover:text-interface-100 transition rounded-md text-white text-xl"
                    >Figma</a>
                </li>
              </ul>
            </div>
            {/* <!-- Right Col--> */}
            <div>
              <div className="border-b border-[#494C5F] pb-3">
                <h3 className="text-borderl-500 text-2xl">
                  Tools I use every day
                </h3>
              </div>
              <ul className="mt-7 flex flex-wrap gap-x-12 gap-y-7">
                <li>
                  <svg
                    className="fill-[#1D2A47] hover:fill-new-500 transition"
                    width="52"
                    height="53"
                    viewBox="0 0 52 53"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_537_18541)">
                      <path
                        d="M36.5732 14.7321C36.5732 17.2935 34.4895 19.3782 31.9271 19.3782H27.1318V10.0859H31.9271C34.4895 10.0859 36.5732 12.1706 36.5732 14.7321Z"
                      />
                      <path
                        d="M31.9274 21.642H31.7782C29.2158 21.642 27.1321 23.7266 27.1321 26.2881C27.1321 28.8505 29.2158 30.9342 31.7782 30.9342H31.9274C34.4898 30.9342 36.5735 28.8505 36.5735 26.2881C36.5735 23.7266 34.4898 21.642 31.9274 21.642ZM20.0726 10.0865C17.5102 10.0865 15.4265 12.1712 15.4265 14.7326C15.4265 17.2941 17.5102 19.3788 20.0726 19.3788H24.8679V10.0865H20.0726ZM20.0726 10.0865C17.5102 10.0865 15.4265 12.1712 15.4265 14.7326C15.4265 17.2941 17.5102 19.3788 20.0726 19.3788H24.8679V10.0865H20.0726ZM31.9274 21.642H31.7782C29.2158 21.642 27.1321 23.7266 27.1321 26.2881C27.1321 28.8505 29.2158 30.9342 31.7782 30.9342H31.9274C34.4898 30.9342 36.5735 28.8505 36.5735 26.2881C36.5735 23.7266 34.4898 21.642 31.9274 21.642ZM20.0726 21.642C17.5102 21.642 15.4265 23.7266 15.4265 26.2881C15.4265 28.8505 17.5102 30.9342 20.0726 30.9342H24.8679V21.642H20.0726ZM20.0726 10.0865C17.5102 10.0865 15.4265 12.1712 15.4265 14.7326C15.4265 17.2941 17.5102 19.3788 20.0726 19.3788H24.8679V10.0865H20.0726ZM20.0726 10.0865C17.5102 10.0865 15.4265 12.1712 15.4265 14.7326C15.4265 17.2941 17.5102 19.3788 20.0726 19.3788H24.8679V10.0865H20.0726ZM20.0726 21.642C17.5102 21.642 15.4265 23.7266 15.4265 26.2881C15.4265 28.8505 17.5102 30.9342 20.0726 30.9342H24.8679V21.642H20.0726ZM31.9274 21.642H31.7782C29.2158 21.642 27.1321 23.7266 27.1321 26.2881C27.1321 28.8505 29.2158 30.9342 31.7782 30.9342H31.9274C34.4898 30.9342 36.5735 28.8505 36.5735 26.2881C36.5735 23.7266 34.4898 21.642 31.9274 21.642ZM31.9274 21.642H31.7782C29.2158 21.642 27.1321 23.7266 27.1321 26.2881C27.1321 28.8505 29.2158 30.9342 31.7782 30.9342H31.9274C34.4898 30.9342 36.5735 28.8505 36.5735 26.2881C36.5735 23.7266 34.4898 21.642 31.9274 21.642ZM15.4265 37.8435C15.4265 40.405 17.5274 42.4896 20.1092 42.4896C22.7335 42.4896 24.8679 40.3715 24.8679 37.7685V33.1974H20.0726C17.5102 33.1974 15.4265 35.2821 15.4265 37.8435ZM15.4265 26.2881C15.4265 28.8505 17.5102 30.9342 20.0726 30.9342H24.8679V21.642H20.0726C17.5102 21.642 15.4265 23.7266 15.4265 26.2881ZM15.4265 14.7326C15.4265 17.2941 17.5102 19.3788 20.0726 19.3788H24.8679V10.0865H20.0726C17.5102 10.0865 15.4265 12.1712 15.4265 14.7326ZM46.381 0.288086H5.61896C2.5158 0.288086 0 2.80389 0 5.90705V46.6691C0 49.7723 2.5158 52.2881 5.61896 52.2881H46.381C49.4842 52.2881 52 49.7723 52 46.6691V5.90705C52 2.80389 49.4842 0.288086 46.381 0.288086ZM38.8367 26.2881C38.8367 30.0983 35.7376 33.1974 31.9274 33.1974H31.7782C29.9908 33.1974 28.3596 32.5147 27.1321 31.3978V37.7685C27.1321 41.6193 23.9813 44.7529 20.1092 44.7529C16.2787 44.7529 13.1633 41.6538 13.1633 37.8435C13.1633 35.4292 14.407 33.3009 16.2878 32.0663C14.407 30.8307 13.1633 28.7024 13.1633 26.2881C13.1633 23.8747 14.407 21.7465 16.2878 20.5109C14.407 19.2753 13.1633 17.147 13.1633 14.7326C13.1633 10.9224 16.2624 7.82332 20.0726 7.82332H31.9274C35.7376 7.82332 38.8367 10.9224 38.8367 14.7326C38.8367 17.147 37.593 19.2753 35.7122 20.5109C37.593 21.7465 38.8367 23.8747 38.8367 26.2881ZM31.9274 21.642H31.7782C29.2158 21.642 27.1321 23.7266 27.1321 26.2881C27.1321 28.8505 29.2158 30.9342 31.7782 30.9342H31.9274C34.4898 30.9342 36.5735 28.8505 36.5735 26.2881C36.5735 23.7266 34.4898 21.642 31.9274 21.642ZM15.4265 37.8435C15.4265 40.405 17.5274 42.4896 20.1092 42.4896C22.7335 42.4896 24.8679 40.3715 24.8679 37.7685V33.1974H20.0726C17.5102 33.1974 15.4265 35.2821 15.4265 37.8435ZM15.4265 26.2881C15.4265 28.8505 17.5102 30.9342 20.0726 30.9342H24.8679V21.642H20.0726C17.5102 21.642 15.4265 23.7266 15.4265 26.2881ZM15.4265 14.7326C15.4265 17.2941 17.5102 19.3788 20.0726 19.3788H24.8679V10.0865H20.0726C17.5102 10.0865 15.4265 12.1712 15.4265 14.7326ZM20.0726 10.0865C17.5102 10.0865 15.4265 12.1712 15.4265 14.7326C15.4265 17.2941 17.5102 19.3788 20.0726 19.3788H24.8679V10.0865H20.0726ZM20.0726 21.642C17.5102 21.642 15.4265 23.7266 15.4265 26.2881C15.4265 28.8505 17.5102 30.9342 20.0726 30.9342H24.8679V21.642H20.0726ZM20.0726 33.1974C17.5102 33.1974 15.4265 35.2821 15.4265 37.8435C15.4265 40.405 17.5274 42.4896 20.1092 42.4896C22.7335 42.4896 24.8679 40.3715 24.8679 37.7685V33.1974H20.0726ZM31.9274 21.642H31.7782C29.2158 21.642 27.1321 23.7266 27.1321 26.2881C27.1321 28.8505 29.2158 30.9342 31.7782 30.9342H31.9274C34.4898 30.9342 36.5735 28.8505 36.5735 26.2881C36.5735 23.7266 34.4898 21.642 31.9274 21.642ZM31.9274 21.642H31.7782C29.2158 21.642 27.1321 23.7266 27.1321 26.2881C27.1321 28.8505 29.2158 30.9342 31.7782 30.9342H31.9274C34.4898 30.9342 36.5735 28.8505 36.5735 26.2881C36.5735 23.7266 34.4898 21.642 31.9274 21.642ZM20.0726 21.642C17.5102 21.642 15.4265 23.7266 15.4265 26.2881C15.4265 28.8505 17.5102 30.9342 20.0726 30.9342H24.8679V21.642H20.0726ZM20.0726 10.0865C17.5102 10.0865 15.4265 12.1712 15.4265 14.7326C15.4265 17.2941 17.5102 19.3788 20.0726 19.3788H24.8679V10.0865H20.0726ZM20.0726 10.0865C17.5102 10.0865 15.4265 12.1712 15.4265 14.7326C15.4265 17.2941 17.5102 19.3788 20.0726 19.3788H24.8679V10.0865H20.0726ZM20.0726 21.642C17.5102 21.642 15.4265 23.7266 15.4265 26.2881C15.4265 28.8505 17.5102 30.9342 20.0726 30.9342H24.8679V21.642H20.0726ZM31.9274 21.642H31.7782C29.2158 21.642 27.1321 23.7266 27.1321 26.2881C27.1321 28.8505 29.2158 30.9342 31.7782 30.9342H31.9274C34.4898 30.9342 36.5735 28.8505 36.5735 26.2881C36.5735 23.7266 34.4898 21.642 31.9274 21.642ZM20.0726 10.0865C17.5102 10.0865 15.4265 12.1712 15.4265 14.7326C15.4265 17.2941 17.5102 19.3788 20.0726 19.3788H24.8679V10.0865H20.0726ZM20.0726 10.0865C17.5102 10.0865 15.4265 12.1712 15.4265 14.7326C15.4265 17.2941 17.5102 19.3788 20.0726 19.3788H24.8679V10.0865H20.0726ZM31.9274 21.642H31.7782C29.2158 21.642 27.1321 23.7266 27.1321 26.2881C27.1321 28.8505 29.2158 30.9342 31.7782 30.9342H31.9274C34.4898 30.9342 36.5735 28.8505 36.5735 26.2881C36.5735 23.7266 34.4898 21.642 31.9274 21.642Z"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_537_18541">
                        <rect
                          width="52"
                          height="52"
                          transform="translate(0 0.288086)"
                        />
                      </clipPath>
                    </defs>
      
                  </svg>
                </li>
                <li>
                  <svg
                    className="fill-[#1D2A47] hover:fill-new-500 transition"
                    width="53"
                    height="53"
                    viewBox="0 0 53 53"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_537_18545)">
                      <path
                        d="M21.3795 17.9248H21.3353L18.6166 26.9598H24.1866L21.3795 17.9248ZM21.3795 17.9248H21.3353L18.6166 26.9598H24.1866L21.3795 17.9248ZM43.3069 0.938477H9.31962C4.16592 0.938477 0 5.0548 0 10.1471V42.4298C0 47.5222 4.16592 51.6385 9.31962 51.6385H43.3069C48.4606 51.6385 52.6265 47.5222 52.6265 42.4298V10.1471C52.6265 5.0548 48.4606 0.938477 43.3069 0.938477ZM32.2337 36.7535H27.6505C27.4974 36.7748 27.3442 36.6672 27.3 36.5148L25.5023 31.3585H17.3452L15.678 36.4498C15.6348 36.6448 15.459 36.7748 15.2617 36.7535H11.1389C10.8984 36.7535 10.8326 36.6235 10.8984 36.3635L17.9588 16.2785C18.0246 16.0622 18.0904 15.8235 18.1777 15.5635C18.2661 15.1085 18.3093 14.6321 18.3093 14.1548C18.2877 14.0471 18.3751 13.9385 18.4851 13.9171H24.164C24.3398 13.9171 24.4271 13.9822 24.4497 14.0898L32.4527 36.4072C32.5185 36.6448 32.4527 36.7535 32.2337 36.7535ZM39.6888 36.4285C39.6888 36.6672 39.6014 36.7748 39.4041 36.7748H35.1066C34.8866 36.7748 34.7777 36.6448 34.7777 36.4285V19.7448C34.7777 19.5285 34.8651 19.4422 35.0624 19.4422H39.4041C39.6014 19.4422 39.6888 19.5498 39.6888 19.7448V36.4285ZM39.2283 16.8635C38.7247 17.3835 37.9785 17.6648 37.2333 17.6222C36.5096 17.6435 35.8076 17.3622 35.2813 16.8635C34.7777 16.3222 34.5146 15.6072 34.5361 14.8698C34.5146 14.1335 34.7993 13.4398 35.3255 12.9421C35.8518 12.4435 36.5538 12.1835 37.2775 12.1835C38.1326 12.1835 38.7905 12.4435 39.2725 12.9421C39.7546 13.4621 40.0177 14.1548 39.9961 14.8698C40.0177 15.6072 39.7546 16.3222 39.2283 16.8635ZM21.3353 17.9248L18.6166 26.9598H24.1866L21.3795 17.9248H21.3353Z"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_537_18545">
                        <rect
                          width="52.6265"
                          height="52"
                          transform="translate(0 0.288086)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </li>
                <li>
                  <svg
                    className="fill-[#1D2A47] hover:fill-new-500 transition"
                    width="53"
                    height="53"
                    viewBox="0 0 53 53"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_537_18551)">
                      <path
                        d="M33.2227 0.288086L3.97266 11.6631V42.5381L13.7227 39.2881V13.2881L33.2227 10.0381V45.9311L3.97266 42.5381L33.2227 52.2881L49.4727 47.4131V5.16309L33.2227 0.288086Z"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_537_18551">
                        <rect
                          width="52"
                          height="52"
                          transform="translate(0.722656 0.288086)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </li>
                <li>
                  <svg
                    className="fill-[#1D2A47] hover:fill-new-500 transition"
                    width="54"
                    height="53"
                    viewBox="0 0 54 53"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_537_18555)">
                      <path
                        d="M7.08134 45.794L27.048 52.2881L47.0146 45.794L50.2893 0.288086H3.80664L7.08134 45.794ZM42.0037 7.90527L41.5641 13.999H18.7203L19.2772 21.8193H41.0144L39.6907 40.1617L27.048 44.3361L14.4049 40.1617L13.9728 34.0068H20.14L20.2649 35.6818L27.048 37.9063L33.8322 35.6822L34.3863 27.9131H13.5107L12.0922 7.90527H42.0037Z"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_537_18555">
                        <rect
                          width="52.6265"
                          height="52"
                          transform="translate(0.722656 0.288086)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </li>
                <li>
                  <svg
                    className="fill-[#1D2A47] hover:fill-new-500 transition"
                    width="53"
                    height="53"
                    viewBox="0 0 53 53"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_537_18558)">
                      <path
                        d="M0 0.288086L4.3992 47.9545L26.3939 52.2881L48.3887 47.9545L52.7879 0.288086H0ZM24.1947 43.0139L12.5655 40.7266L11.8331 32.7881H16.2513L16.6492 37.1125L19.7953 37.7306V8.95454H24.1945V43.0139H24.1947ZM42.7529 13.2881H32.9924V24.1216H41.7538L40.2224 40.7272L28.5932 43.0145V38.5964L36.1373 37.1131L36.9363 28.4552H28.5932V8.95518H43.1522L42.7529 13.2881Z"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_537_18558">
                        <rect
                          width="52.7879"
                          height="52"
                          transform="translate(0 0.288086)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </li>
                <li>
                  <svg
                    className="fill-[#1D2A47] hover:fill-new-500 transition"
                    width="53"
                    height="53"
                    viewBox="0 0 53 53"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_537_18565)">
                      <path
                        d="M27.177 27.6484C27.177 27.6484 27.1358 27.6484 27.0945 27.6484C25.6512 31.8546 24.2079 36.0608 22.7646 40.267C25.8162 41.133 28.7853 41.0505 31.7131 40.0608C30.1873 35.8959 28.7028 31.7721 27.177 27.6484Z"
                      />
                      <path
                        d="M13.6103 20.4326C13.5691 20.4326 13.5691 20.4326 13.5279 20.4326C11.9196 24.2677 11.8371 28.144 13.4866 32.0202C14.8887 35.3192 17.2392 37.7522 20.4557 39.4017C20.4969 39.4017 20.4969 39.3605 20.5382 39.3605C18.2289 33.0099 15.9196 26.7419 13.6103 20.4326Z"
                      />
                      <path
                        d="M35.8373 22.1232C35.5074 21.5046 35.1362 20.9273 34.7651 20.3087C34.4352 19.7314 34.1878 19.1129 34.1053 18.4531C33.9403 17.0922 34.8476 15.8139 36.2084 15.5665C36.3321 15.5252 36.497 15.5252 36.7445 15.484C32.7032 12.1025 28.2084 10.9067 23.1775 12.185C19.5898 13.0922 16.8269 15.1541 14.6826 18.2881C15.4661 18.2881 16.1672 18.2881 16.8269 18.2881C17.6929 18.2469 18.5589 18.1644 19.4249 18.1232C19.8373 18.0819 20.0847 18.2881 20.1259 18.618C20.1672 18.9891 20.0022 19.2366 19.5486 19.2778C19.4249 19.319 19.3012 19.319 19.1775 19.319C18.7651 19.3603 18.394 19.4015 17.9403 19.4428C19.7135 24.7211 21.4867 29.9582 23.2187 35.1541C23.3012 35.1129 23.3424 35.0716 23.3424 35.0304C24.3733 31.9788 25.4043 28.9273 26.394 25.8345C26.4352 25.7108 26.394 25.5046 26.3527 25.3809C25.6929 23.484 24.9919 21.6283 24.2909 19.7314C24.2084 19.484 24.0847 19.4015 23.8373 19.4015C23.4249 19.4015 23.0125 19.319 22.6001 19.2778C22.2702 19.2366 22.1053 18.9891 22.1053 18.6593C22.1465 18.3294 22.3527 18.1232 22.6826 18.1232C22.8476 18.1232 22.9713 18.1644 23.1362 18.1644C24.7032 18.2056 26.3115 18.2469 27.8785 18.2881C28.7032 18.2881 29.5692 18.2056 30.394 18.1644C30.7651 18.1644 31.0125 18.3706 31.0537 18.7005C31.095 19.0304 30.8888 19.2778 30.5589 19.319C30.394 19.3603 30.2702 19.3603 30.1053 19.3603C29.6929 19.4015 29.2806 19.4428 28.8682 19.484C30.6414 24.7211 32.3733 29.8757 34.1465 35.1541C34.1878 35.0304 34.229 34.9891 34.229 34.9479C34.9713 32.5149 35.6723 30.0819 36.4146 27.6489C36.9919 25.7108 36.8269 23.8551 35.8373 22.1232Z"
                      />
                      <path
                        d="M39.837 0.308594H13.9401C6.76485 0.308594 0.90918 6.16426 0.90918 13.3395V39.2777C0.90918 46.4117 6.76485 52.2674 13.9401 52.2674H39.8783C47.0535 52.2674 52.9092 46.4117 52.9092 39.2364V13.3395C52.8679 6.16426 47.0123 0.308594 39.837 0.308594ZM42.971 27.1127C42.971 27.2364 42.971 27.3189 42.971 27.4426C42.8473 29.5869 42.3112 31.6488 41.3215 33.5457C38.7236 38.4529 34.7236 41.3395 29.1978 42.2467C28.703 42.3292 28.2081 42.3704 27.7133 42.3704H26.0638C25.9813 42.3704 25.8576 42.3704 25.7339 42.3704C23.5896 42.2467 21.569 41.7519 19.7133 40.7622C14.7648 38.1643 11.8783 34.1643 10.971 28.6385C10.8473 28.1024 10.8061 27.6488 10.8061 27.1127V25.4632C10.8061 25.3808 10.8061 25.257 10.8061 25.1333C10.9298 22.9478 11.4659 20.8859 12.4968 18.989C15.0947 14.123 19.0947 11.2777 24.538 10.3705C25.0329 10.288 25.569 10.2467 26.0638 10.2467H27.7133C27.837 10.2467 27.9195 10.2467 28.0432 10.2467C30.1463 10.3704 32.1669 10.8653 34.0638 11.855C39.0123 14.4529 41.9401 18.4529 42.8473 24.0199C42.9298 24.5148 42.971 25.0096 42.971 25.5045V27.1127Z"
                      />
                      <path
                        d="M39.7541 19.4014C39.7953 20.5148 39.7953 21.5457 39.6304 22.6179C39.4242 23.8137 39.053 24.9684 38.6407 26.123C37.1974 30.123 35.8365 34.123 34.4757 38.123C34.3932 38.3292 34.3108 38.5766 34.2695 38.7828C34.3108 38.7828 34.3108 38.824 34.352 38.824C38.2695 36.3911 40.6613 32.8859 41.3623 28.3086C41.8159 25.1746 41.2798 22.2055 39.7541 19.4014Z"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_537_18565">
                        <rect
                          width="52"
                          height="52"
                          transform="translate(0.90918 0.288086)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </li>
                <li>
                  <svg
                    className="fill-[#1D2A47] hover:fill-new-500 transition"
                    width="53"
                    height="53"
                    viewBox="0 0 53 53"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_537_18562)">
                      <path
                        d="M12.6904 30.3506C12.6904 27.2704 15.1962 24.7646 18.2764 24.7646H35.542C36.942 24.7646 38.0811 23.6256 38.0811 22.2256V7.90527C38.0811 3.70511 34.664 0.288086 30.4639 0.288086H23.3545C19.1543 0.288086 15.7373 3.70511 15.7373 7.90527V12.0693H26.9092C27.7506 12.0693 28.4326 12.7513 28.4326 13.5928C28.4326 14.4342 27.7506 15.1162 26.9092 15.1162H8.52637C4.3262 15.1162 0.90918 18.5332 0.90918 22.7334V29.8428C0.90918 34.0429 4.3262 37.46 8.52637 37.46H12.6904V30.3506ZM23.3545 8.00684C22.513 8.00684 21.8311 7.32486 21.8311 6.4834C21.8311 5.64194 22.513 4.95996 23.3545 4.95996C24.196 4.95996 24.8779 5.64194 24.8779 6.4834C24.8779 7.32486 24.196 8.00684 23.3545 8.00684Z"
                      />
                      <path
                        d="M45.292 15.1162H41.1279V22.2256C41.1279 25.3058 38.6222 27.8115 35.542 27.8115H18.2764C16.8763 27.8115 15.7373 28.9505 15.7373 30.3506V44.6709C15.7373 48.8711 19.1543 52.2881 23.3545 52.2881H30.4639C34.664 52.2881 38.0811 48.8711 38.0811 44.6709V40.5068H26.9092C26.0677 40.5068 25.3857 39.8249 25.3857 38.9834C25.3857 38.1419 26.0677 37.46 26.9092 37.46H45.292C49.4922 37.46 52.9092 34.0429 52.9092 29.8428V22.7334C52.9092 18.5332 49.4922 15.1162 45.292 15.1162ZM30.4639 44.5693C31.3053 44.5693 31.9873 45.2513 31.9873 46.0928C31.9873 46.9342 31.3053 47.6162 30.4639 47.6162C29.6224 47.6162 28.9404 46.9342 28.9404 46.0928C28.9404 45.2513 29.6224 44.5693 30.4639 44.5693Z"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_537_18562">
                        <rect
                          width="52"
                          height="52"
                          transform="translate(0.90918 0.288086)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </li>
                <li>
                  <svg
                    className="fill-[#1D2A47] hover:fill-new-500 transition"
                    width="53"
                    height="53"
                    viewBox="0 0 53 53"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_537_18581)">
                      <path
                        d="M47.2903 52.2881H6.52805C3.42489 52.2881 0.90918 49.7724 0.90918 46.6692V5.90696C0.90918 2.80379 3.42489 0.288086 6.52805 0.288086H47.2902C50.3935 0.288086 52.9091 2.80379 52.9091 5.90696V46.6691C52.9092 49.7724 50.3935 52.2881 47.2903 52.2881Z"
                      />
                      <path
                        d="M26.9625 6.36523C15.9763 6.3626 7.06797 15.2666 7.06543 26.2528C7.06289 37.239 15.9668 46.1472 26.9531 46.1499C37.9393 46.1525 46.8475 37.2485 46.8502 26.2622C46.8502 26.2606 46.8502 26.2591 46.8502 26.2575C46.8501 15.2731 37.9469 6.36777 26.9625 6.36523Z"
                        fill="#091530"
                      />
                      <path
                        d="M18.6719 17.9668H21.9873V34.5437H18.6719V17.9668Z"
                        fill="currenColor"
                      />
                      <path
                        d="M25.3027 31.2285H35.2489V34.5439H25.3027V31.2285Z"
                        fill="currenColor"
                      />
                      <path
                        d="M25.3027 24.5977H35.2489V27.913H25.3027V24.5977Z"
                        fill="currenColor"
                      />
                      <path
                        d="M25.3027 17.9668H35.2489V21.2822H25.3027V17.9668Z"
                        fill="currenColor"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_537_18581">
                        <rect
                          width="52"
                          height="52"
                          fill="white"
                          transform="translate(0.90918 0.288086)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- Clients --> */}
          <div className="pt-16">
            <div className="border-b border-[#494C5F] pb-3">
              <h3 className="text-borderl-500 font-semibold text-2xl">
                Freelance Clients
              </h3>
            </div>
            <div
              className="grid items-center grid-cols-2 gap-6 md:grid-cols-3 xl:grid-cols-6 xl:divide-x divide-white divide-opacity-20 mt-10 pb-8"
            >
              <a href="#/" className="px-7">
                <img
                  src="assets/images/clients/f-c-2.png"
                  className="opacity-30 hover:opacity-100 transition"
                  alt="Logo"
                />
              </a>
              <a href="#/" className="px-7">
                <img
                  src="assets/images/clients/f-c-2.png"
                  className="opacity-30 hover:opacity-100 transition"
                  alt=""
                />
              </a>
              <a href="#/" className="px-7">
                <img
                  src="assets/images/clients/f-c-3.png"
                  className="opacity-30 hover:opacity-100 transition"
                  alt="Logo"
                />
              </a>
              <a href="#/" className="px-7">
                <img
                  src="assets/images/clients/f-c-4.png"
                  className="opacity-30 hover:opacity-100 transition"
                  alt="Logo"
                />
              </a>
              <a href="#/" className="px-7">
                <img
                  src="assets/images/clients/f-c-5.png"
                  className="opacity-30 hover:opacity-100 transition"
                  alt="Logo"
                />
              </a>
              <a href="#/" className="px-7">
                <img
                  src="assets/images/clients/f-c-1.png"
                  className="opacity-30 hover:opacity-100 transition"
                  alt="Logo"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- Resume End -->  */}

    {/* <!-- Grid Masonry --> */}
    <section className="pb-120">
      <div className="mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="max-w-xl mx-auto mb-10 text-center">
          <h2 className="text-4xl leading-normal xl:text-5xl xl:leading-snug font-bold text-white mb-4">
            Let’s Check my
            <span className="relative z-30"
              ><span className="relative z-10"> Projects</span>
              <svg
                className="absolute right-0 bottom-1"
                width="200"
                height="10"
                viewBox="0 0 243 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 7C45.1729 3.98151 151.615 -0.244386 240 7"
                  stroke="#FFD233"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
          <p className="text-white text-xl mb-5">
          Below are some of the projects I have worked on .. 
          </p>
        </div>
      
        {/* <!-- Grid --> */}
        <div
          className="grid grid-cols-1 gap-y-5 md:grid-cols-2 lg:grid-cols-3 md:gap-5 lg:gap-7"
        >
          {/* <!-- Single Item --> */}
          <div
            className="relative group min-h-[370px] rounded-lg cursor-pointer overflow-hidden"
            style={{ background: "url('assets/images/core/whiteboard_project.svg') no-repeat center center/cover" }} 
             
          >
            <div
              className="bg-interface-100 bg-opacity-0 transition-opacity duration-500 ease-in-out absolute w-full h-full group-hover:bg-opacity-80 rounded-lg flex flex-col items-center justify-center"
            >
              <div
                className="transform transition-transform duration-700 ease-in-out translate-y-24 opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 max-w-xs flex flex-col items-center justify-center text-center"
              >
                <h3 className="text-white">
                  <a
                    href="portfolio-details.html"
                    className="text-3xl font-semibold text-white"
                    >Collaborative Whiteboard</a>
                </h3>
                <span className="flex items-center gap-2 text-white">
                  <span
                    className="w-2 h-2 rounded-full inline-block bg-new-500"
                  ></span>
                  Full Stack Web3 Project</span>
                <a
                  href="portfolio-details.html"
                  className="grid place-content-center transition mt-6 px-3 py-2 border border-new-500 text-new-500 text-sm rounded"
                  >View Project
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Single Item --> */}
          <div
            className="relative group min-h-[370px] rounded-lg cursor-pointer overflow-hidden lg:col-span-2"
            style={{
              background: "url('assets/images/portfolio/ms-2.jpg') no-repeat center center/cover"}}
          >
            <div
              className="bg-interface-100 bg-opacity-0 transition-opacity duration-500 ease-in-out absolute w-full h-full group-hover:bg-opacity-80 rounded-lg flex flex-col items-center justify-center"
            >
              <div
                className="transform transition-transform duration-700 ease-in-out translate-y-24 opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 max-w-xs flex flex-col items-center justify-center text-center"
              >
                <h3 className="text-white">
                  <a
                    href="portfolio-details.html"
                    className="text-3xl font-semibold text-white"
                    >Simple Chat</a>
                </h3>
                <span className="flex items-center gap-2 text-white">
                  <span
                    className="w-2 h-2 rounded-full inline-block bg-new-500"
                  ></span>
                  Full Stack Web3 Project</span>
                <a
                  href="portfolio-details.html"
                  className="grid place-content-center mt-6 px-3 py-2 border border-new-500 text-new-500 text-sm rounded"
                  >View Project
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Single Item --> */}
          <div
            className="relative group min-h-[370px] rounded-lg cursor-pointer overflow-hidden"
            style={{
              background: "url('assets/images/portfolio/ms-3.jpg') no-repeat center center/cover"}}
          >
            <div
              className="bg-interface-100 bg-opacity-0 transition-opacity duration-500 ease-in-out absolute w-full h-full group-hover:bg-opacity-80 rounded-lg flex flex-col items-center justify-center"
            >
              <div
                className="transform transition-transform duration-700 ease-in-out translate-y-24 opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 max-w-xs flex flex-col items-center justify-center text-center"
              >
                <h3 className="text-white">
                  <a
                    href="portfolio-details.html"
                    className="text-3xl font-semibold text-white"
                    >Coin Flip</a>
                </h3>
                <span className="flex items-center gap-2 text-white">
                  <span
                    className="w-2 h-2 rounded-full inline-block bg-new-500"
                  ></span>
                  Full Stack Web3 Project</span>
                <a
                  href="portfolio-details.html"
                  className="grid place-content-center mt-6 px-3 py-2 border border-new-500 text-new-500 text-sm rounded"
                  >View Project
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Single Item --> */}
          <div
            className="relative group min-h-[370px] rounded-lg cursor-pointer overflow-hidden"
            style={{
              background: "url('assets/images/portfolio/ms-4.jpg') no-repeat center center/cover"}}
          >
            <div
              className="bg-interface-100 bg-opacity-0 transition-opacity duration-500 ease-in-out absolute w-full h-full group-hover:bg-opacity-80 rounded-lg flex flex-col items-center justify-center"
            >
              <div
                className="transform transition-transform duration-700 ease-in-out translate-y-24 opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 max-w-xs flex flex-col items-center justify-center text-center"
              >
                <h3 className="text-white">
                  <a
                    href="portfolio-details.html"
                    className="text-3xl font-semibold text-white"
                    >Diamond Hands</a>
                </h3>
                <span className="flex items-center gap-2 text-white">
                  <span
                    className="w-2 h-2 rounded-full inline-block bg-new-500"
                  ></span>
                  Full Stack Web3 Project</span>
                <a
                  href="portfolio-details.html"
                  className="grid place-content-center mt-6 px-3 py-2 border border-new-500 text-new-500 text-sm rounded"
                  >View Project
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Single Item --> */}
          <div
            className="relative group min-h-[370px] rounded-lg cursor-pointer overflow-hidden"
            style={{
              background: "url('assets/images/portfolio/ms-5.jpg') no-repeat center center/cover"}}
          >
            <div
              className="bg-interface-100 bg-opacity-0 transition-opacity duration-500 ease-in-out absolute w-full h-full group-hover:bg-opacity-80 rounded-lg flex flex-col items-center justify-center"
            >
              <div
                className="transform transition-transform duration-700 ease-in-out translate-y-24 opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 max-w-xs flex flex-col items-center justify-center text-center"
              >
                <h3 className="text-white">
                  <a
                    href="portfolio-details.html"
                    className="text-3xl font-semibold text-white"
                    >Crypto Tracker</a>
                </h3>
                <span className="flex items-center gap-2 text-white">
                  <span
                    className="w-2 h-2 rounded-full inline-block bg-new-500"
                  ></span>
                  Full Stack Web3 Project</span>
                <a
                  href="portfolio-details.html"
                  className="grid place-content-center mt-6 px-3 py-2 border border-new-500 text-new-500 text-sm rounded"
                  >View Project
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Button --> */}
        <div className="flex justify-center mt-14">
          <a
            href="#/"
            className="text-white text-lg font-medium rounded-lg border border-white py-3 px-8 text-center"
            >See More</a>
        </div>
      </div>
    </section>
    {/* <!-- Grid Masonry End --> */}

    {/* <!-- CTA  --> */}
    <section
      className="py-20"
      style={{
        background: "url('assets/images/bg/dev-cta.jpg') no-repeat center center/cover"}}
    >
      <div className="mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div
          className="flex flex-col gap-5 xl:gap-10 lg:flex-row justify-between"
        >
          <div className="xl:w-6/12">
            <h2 className="text-4xl leading-normal lg:text-5xl lg:leading-snug font-bold text-white">
              Have a project in mind? <br />
              Let’s get to work.👋📫
            </h2>
          </div>
          <div className="xl:w-5/12">
            <div className="max-w-lg">
              <p className="text-2xl text-interface-300 mb-8">
                I am product designer, who are excited about unique ideas and
                help.
              </p>
              <a
                href="contact-us.html"
                className="bg-new-500 group inline-flex py-4 space-x-2 px-7 rounded-xl text-interface-500 text-lg"
              >
                <span>Download CV</span>
                <svg
                className="transform transition  group-hover:translate-y-2"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.0008 3.5625C11.7939 3.56255 11.5955 3.64474 11.4493 3.79101C11.303 3.93728 11.2208 4.13565 11.2208 4.3425V13.2409L8.23783 10.2579C8.16539 10.1855 8.07939 10.1281 7.98475 10.0889C7.89011 10.0497 7.78867 10.0295 7.68623 10.0295C7.47935 10.0295 7.28095 10.1117 7.13467 10.258C6.9884 10.4043 6.90623 10.6027 6.90625 10.8096C6.90627 11.0165 6.98847 11.2149 7.13477 11.3612L11.4491 15.675C11.5955 15.8212 11.7939 15.9034 12.0008 15.9034C12.2076 15.9034 12.4061 15.8212 12.5524 15.675L16.8668 11.3604C17.0131 11.2142 17.0953 11.0158 17.0953 10.8089C17.0953 10.602 17.0131 10.4036 16.8669 10.2573C16.7206 10.111 16.5222 10.0288 16.3153 10.0288C16.1084 10.0287 15.91 10.1109 15.7637 10.2572L12.7808 13.2409V4.3425C12.7807 4.13565 12.6985 3.93728 12.5523 3.79101C12.406 3.64474 12.2076 3.56255 12.0008 3.5625Z"
                    fill="#04091E"
                  />
                  <path
                    d="M4.3425 13.876C4.13563 13.876 3.93723 13.9582 3.79096 14.1044C3.64468 14.2507 3.5625 14.4491 3.5625 14.656V17.2262C3.56344 18.0776 3.90208 18.8939 4.50411 19.4959C5.10615 20.098 5.92241 20.4366 6.77381 20.4375H17.2262C18.0776 20.4366 18.8939 20.098 19.4959 19.4959C20.0979 18.8939 20.4366 18.0776 20.4375 17.2262V14.656C20.4375 14.5535 20.4173 14.4521 20.3781 14.3575C20.3389 14.2628 20.2815 14.1769 20.209 14.1044C20.1366 14.032 20.0506 13.9746 19.956 13.9354C19.8614 13.8962 19.7599 13.876 19.6575 13.876C19.5551 13.876 19.4536 13.8962 19.359 13.9354C19.2644 13.9746 19.1784 14.032 19.106 14.1044C19.0335 14.1769 18.9761 14.2628 18.9369 14.3575C18.8977 14.4521 18.8775 14.5535 18.8775 14.656V17.2262C18.877 17.664 18.7029 18.0838 18.3933 18.3933C18.0837 18.7029 17.664 18.877 17.2262 18.8775H6.77381C6.33601 18.877 5.91628 18.7029 5.60671 18.3933C5.29713 18.0838 5.123 17.664 5.1225 17.2262V14.656C5.12252 14.5535 5.10237 14.4521 5.06318 14.3575C5.02399 14.2628 4.96653 14.1768 4.8941 14.1044C4.82166 14.0319 4.73567 13.9745 4.64102 13.9353C4.54638 13.8961 4.44494 13.876 4.3425 13.876Z"
                    fill="#04091E"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

  </main>
  )
}

export default Main