import React from "react";

function TimeoIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2815 988">
      <defs>
        <filter id="shadow">
          <feOffset dx="5" dy="5" />
          <feGaussianBlur stdDeviation="2" />  {/* Optional blur for softer shadow */}
          <feFlood flood-color="#000" />
          <feComposite in2="SourceAlpha" operator="in" />
          <feMerge>
            <feMergeNode in="SourceGraphic" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path
        fill="#17404C"
        d="M775.411 242.913c1.988-.029 3.976-.05 5.964-.072 2.362-.026 4.725-.063 7.087-.114 8.47-.071 14.156 1.349 20.538 7.273a116.789 116.789 0 015.313 6.562l1.54 2.056c7.194 9.879 13.146 20.584 19.268 31.144 8.512 14.667 17.494 28.966 26.828 43.123 2.077 3.154 4.145 6.313 6.211 9.474 4.448 6.806 8.908 13.605 13.37 20.402l4.683 7.137c13.894 21.175 27.88 42.281 42.082 63.252 10.687 15.786 21.208 31.678 31.639 47.635 5.546 8.47 11.173 16.861 17.011 25.133 6.759 9.576 13.228 19.326 19.644 29.133a7320.939 7320.939 0 0011.425 17.392 1276.77 1276.77 0 0014.1 20.97 3938.246 3938.246 0 0151.77 77.292c5.378 8.236 10.798 16.446 16.212 24.659 10.01 15.185 20.001 30.38 29.904 45.636l1.414 2.175c13.334 20.519 26.461 41.172 39.586 61.825 5.374-4.737 8.93-10.657 12.813-16.625 4.584-7.011 9.257-13.901 14.22-20.65 3.34-4.626 6.455-9.398 9.592-14.163 4.82-7.28 9.696-14.504 14.75-21.625 7.908-11.18 15.441-22.61 23.02-34.014 9.807-14.756 19.71-29.448 29.646-44.119 5.66-8.365 11.266-16.759 16.731-25.253 5.53-8.591 11.163-17.115 16.789-25.644 1.872-2.837 3.742-5.676 5.613-8.514a5075.15 5075.15 0 0116.869-25.456c6.04-9.045 12.022-18.129 18-27.216 10.492-15.946 21.015-31.87 31.64-47.727a1480.06 1480.06 0 0013.892-21.159c5.64-8.736 11.37-17.413 17.096-26.092l5.679-8.614a4539.677 4539.677 0 0115.713-23.719c3.796-5.68 7.557-11.383 11.308-17.094 14.701-22.378 29.533-44.66 44.555-66.824a9227.37 9227.37 0 0014.127-20.912l6.974-10.343 1.604-2.38 1.386-2.056c6.953-10.297 13.966-20.546 20.983-30.801h120v670h-71V378h-3l-.788 2.17c-1.273 2.973-2.795 5.422-4.607 8.1l-2.114 3.144-1.134 1.673c-2.035 3.003-4.054 6.017-6.076 9.03l-1.294 1.927c-4.987 7.43-9.895 14.91-14.8 22.393l-1.354 2.066a7339.361 7339.361 0 00-20.35 31.212c-1.53 2.356-3.062 4.71-4.596 7.062a4121.292 4121.292 0 00-20.085 31.155A3047.147 3047.147 0 011481.5 515.5c-6.517 10.048-12.96 20.143-19.41 30.233l-6.18 9.654c-8.085 12.624-16.15 25.26-24.192 37.911A567467.695 567467.695 0 001419.5 612.5l-8.75 13.75-3.496 5.493c-2.94 4.622-5.882 9.243-8.824 13.862A7085.716 7085.716 0 001382 671.5a7716.681 7716.681 0 01-18.218 28.702c-2.929 4.598-5.855 9.198-8.782 13.798a567607.2 567607.2 0 01-3.5 5.5l-1.75 2.75-19.25 30.25a424950946.087 424950946.087 0 00-5.254 8.257c-2.893 4.545-5.785 9.09-8.676 13.638-11.062 17.398-22.134 34.792-33.357 52.088-4.016 6.196-7.989 12.42-11.963 18.642-7.052 11.035-14.185 22.016-21.356 32.975-1.979 3.03-3.95 6.064-5.921 9.1l-2.016 3.1a5001.744 5001.744 0 00-3.772 5.814l-1.747 2.687-1.504 2.317L1233 904l-1.296 2.423c-4.11 6.999-4.11 6.999-8.3 8.52-3.187.367-6.247.42-9.455.367l-3.629.058c-3.27.04-6.536.036-9.806.008a700.73 700.73 0 00-8.207.012c-6.459.035-12.916.02-19.374-.03-6.648-.049-13.292-.023-19.94.043-5.722.054-11.443.065-17.165.04-3.411-.014-6.82-.013-10.232.028-3.808.032-7.609-.005-11.416-.062l-3.393.073c-4.824-.137-7.653-.37-11.187-3.828-2.065-2.805-3.852-5.642-5.6-8.652a653.575 653.575 0 00-3.691-5.531 2665.325 2665.325 0 01-3.871-5.969 14301.028 14301.028 0 00-5.654-8.691c-4.614-7.094-9.267-14.161-13.918-21.23-12.59-19.137-25.126-38.308-37.555-57.55a13504.814 13504.814 0 00-8.198-12.673 9398.752 9398.752 0 00-6.687-10.325c-7.494-11.557-14.918-23.159-22.337-34.764a16453.07 16453.07 0 00-6.179-9.654c-8.085-12.624-16.15-25.26-24.192-37.911A567223.727 567223.727 0 01949.5 679.5l-1.75-2.75-5.25-8.25-1.75-2.75-3.496-5.493c-2.94-4.622-5.882-9.243-8.824-13.862a7590.665 7590.665 0 01-17.891-28.212c-3.831-6.07-7.682-12.129-11.539-18.183a5407.02 5407.02 0 01-13-20.5 7702.538 7702.538 0 00-18.218-28.702C864.853 546.2 861.927 541.6 859 537l-3.5-5.5-8.75-13.75-3.504-5.507c-2.893-4.545-5.785-9.09-8.676-13.638-11.064-17.4-22.136-34.797-33.361-52.095a2582.704 2582.704 0 01-9.81-15.276 3215.529 3215.529 0 00-21.64-33.468l-2.017-3.079-1.91-2.917a606.137 606.137 0 00-6.796-10.028C758 380 758 380 758 378h-3l.001 3.7c.011 30.72-.02 61.44-.086 92.16l-.036 17.823a502608.033 502608.033 0 01-.131 62.779l-.004 2.035a6760751.066 6760751.066 0 00-.171 82.268l-.146 69.858-.004 2.185a20962077.854 20962077.854 0 00-.141 68.033L754 914H598l-.026-101.974v-2.603c-.007-28.908-.012-57.815-.016-86.722v-2.857a2789926.309 2789926.309 0 01-.013-91.617v-3.03c-.005-32.44-.012-64.881-.021-97.322a450733.706 450733.706 0 01-.019-114.07V411c-.001-14.926-.006-29.851-.012-44.777-.006-14.986-.008-29.972-.007-44.958.001-8.916 0-17.832-.007-26.748-.004-5.944-.004-11.888 0-17.832 0-3.395 0-6.789-.004-10.183-.004-3.644-.002-7.288.002-10.932l-.008-3.244.007-2.913v-2.53C598 245 598 245 599 244c2.126-.11 4.257-.147 6.386-.158l2.046-.015c2.28-.016 4.562-.024 6.843-.032l4.888-.03c4.448-.027 8.896-.048 13.344-.068 4.674-.022 9.348-.05 14.023-.076 7.88-.045 15.76-.085 23.64-.124 11.014-.053 22.028-.113 33.043-.174 8.633-.048 17.267-.094 25.9-.14l2.753-.014 8.068-.042 2.626-.014a6535.29 6535.29 0 0117.372-.07l2.326-.007c4.385-.017 8.769-.058 13.153-.123z"
        filter="url(#shadow)"></path>
      <path
        fill="#386D7C"
        d="M2405 241l3.054.375c36.71 4.678 71.781 15.23 104.946 31.625l2.52 1.233c18.285 9.02 35.652 19.906 51.48 32.767l2.512 1.969c2.52 1.98 5.007 4 7.488 6.031l2.887 2.32c8.261 6.775 15.86 14.212 23.425 21.743l1.551 1.534c6.852 6.798 13.12 13.841 19.137 21.403.875 1.04 1.755 2.075 2.645 3.102C2678.599 425.574 2699.623 503.74 2702 582a358323971.103 358323971.103 0 01-11.113 4.36l-3.886 1.525c-8.552 3.356-17.094 6.735-25.606 10.19C2659 599 2659 599 2658 599l-.044-3.212C2656.774 515.903 2640.92 433.894 2584 374a503.69 503.69 0 01-3.625-4.188c-6.807-7.788-14.282-14.383-22.375-20.812a5218.66 5218.66 0 01-3.29-2.664C2497.66 300.403 2427.299 285.859 2356 280l2.337 2.334c1.764 1.766 3.523 3.538 5.276 5.314 4.67 4.717 9.38 9.293 14.422 13.614 5.813 5.143 11.131 10.777 16.172 16.672a161.731 161.731 0 003.805 4.226c32.26 34.692 54.891 81.113 56.988 128.84l.195 3.586c.236 7.857-.52 14.917-2.195 22.601-3.389 14.753-3.389 14.753.621 28.872 9.842 13.856 22.079 25.78 34.129 37.691 14.24 14.076 14.24 14.076 20.25 21.25l2.477 2.836c8.199 9.69 14.043 19.51 13.402 32.644-.98 5.866-3.532 10.474-7.879 14.52-10.902 7.769-25.262 9.388-38.074 12.059l-2.424.515c-1.486.314-2.974.617-4.465.907-4.543.948-8.308 2.48-12.38 4.712C2457 634 2457 634 2455 634c2.207 7.507 5.252 13.247 10.098 19.395 3.158 4.326 5.33 8.174 5.34 13.605l.058 2.438c-1.401 7.238-7.716 11.673-13.07 16.15-3.39 2.959-3.39 2.959-5.047 7.03.796 3.052 2.006 4.304 4.308 6.444l2.215 2.09a97.625 97.625 0 004.848 3.973c3.735 3.112 5.956 5.741 6.637 10.684.356 9.83-2.701 14.398-9.075 21.441l-2.386 2.516c-2.115 2.167-2.115 2.167-2.926 5.234.914 2.324.914 2.324 2.312 4.75 5.194 9.465 6.34 19.795 4 30.352-4.57 13.52-13.646 23.929-26.312 30.336l-1.976 1c-19.914 9.476-41.918 3.558-62.414-.703-16.853-3.432-33.23-6.674-48.829 2.581-8.62 5.903-11.377 13.008-13.285 23.086-1.143 8.291-.598 16.336.504 24.598 14.509 2.965 28.962 4.806 43.75 5.625l2.179.122C2426.741 870.156 2495.753 847.05 2551 803l3.047-2.398c10.56-8.454 20.25-17.818 29.828-27.352l2.125-2.111c4.028-4.04 7.83-8.18 11.461-12.581C2599 757 2599 757 2602 756a109.651 109.651 0 017.95 3.402l2.34 1.08a1449.06 1449.06 0 017.397 3.456l5.018 2.326c4.103 1.902 8.2 3.816 12.295 5.736-1.18 3.17-2.416 5.853-4.434 8.566l-1.45 1.954-1.554 2.043-1.61 2.132c-4.223 5.517-8.734 10.652-13.499 15.703a179.724 179.724 0 00-6.016 6.727c-6.565 7.555-13.815 14.405-21.437 20.875l-2.754 2.418C2550.513 861.835 2510.247 882.816 2468 897l-2.583.875c-23.095 7.706-47.22 11.874-71.417 14.125l-2.224.214C2307.717 919.947 2218.944 892.836 2154 839l-2.941-2.414C2133.082 821.702 2116.44 805.358 2102 787l-3.203-3.977c-57.674-72.172-77.8-165.215-67.797-256.023 7.629-63.26 35.987-124.624 79.516-171.305 1.946-2.112 3.83-4.25 5.703-6.425 4.152-4.761 8.563-9.244 13.031-13.707l2.542-2.543c5.098-5.05 10.238-9.799 15.903-14.207 2.213-1.74 4.248-3.58 6.305-5.5 66.883-59.956 163.16-83.265 251-72.313zm-70.828 227.625c-4.482 5.047-6.717 9.546-7.172 16.375.809 6.636 3.518 11.447 8.188 16.25 4.501 2.8 8.86 4.13 14.183 3.445 5.89-1.609 9.313-4.64 12.629-9.695 2.69-4.88 3.496-9.584 2.313-15.063-1.738-5.989-4.999-10.63-10.313-13.937-7.054-2.791-13.965-2.586-19.828 2.625z"
      ></path>
      <path
        fill="#072B36"
        d="M46.145 103.875h2.904l3.342-.006 3.726.008 3.933-.004c3.635-.003 7.27 0 10.906.005 3.942.003 7.884 0 11.827 0 6.92-.003 13.84-.001 20.76.003 10.29.006 20.581.006 30.872.005 17.307-.001 34.614.002 51.921.008 17.145.006 34.29.01 51.435.011h3.226l16.22.001c38.327.002 76.655.01 114.983.019 37.244.009 74.487.016 111.73.02h3.477a5387219.178 5387219.178 0 00104.98.013h3.27c72.114.01 144.229.025 216.343.042.025 7.815.043 15.629.055 23.444.005 2.66.012 5.321.02 7.982.013 3.815.018 7.63.023 11.445l.015 3.63v3.337l.007 2.954C812 159 812 159 811 160c-2.315.099-4.6.132-6.917.123l-2.229.004c-2.496.002-4.992-.002-7.489-.007l-5.385.003c-4.957.002-9.915-.002-14.872-.007-5.337-.004-10.674-.003-16.01-.002-9.255 0-18.51-.003-27.764-.008-13.38-.008-26.761-.011-40.142-.012-21.706-.002-43.413-.01-65.12-.019-21.091-.009-42.183-.016-63.275-.02h-3.936l-19.55-.005c-54.104-.01-108.208-.028-162.311-.05v1.986c.017 71.303.033 142.606.042 213.91v3.225a3553508.703 3553508.703 0 01.013 106.814c.005 36.612.012 73.224.021 109.836a574098.983 574098.983 0 01.019 128.737v3.164c.001 16.845.006 33.69.012 50.534.006 16.913.008 33.826.007 50.739-.001 10.062 0 20.124.007 30.186.004 6.709.004 13.417 0 20.126 0 3.83 0 7.661.004 11.492.005 4.112.002 8.225-.002 12.337l.008 3.662-.007 3.287v2.854C376 915 376 915 375 916c-2.556.095-5.085.126-7.64.114h-2.425c-2.657 0-5.313-.009-7.97-.016l-5.511-.005c-4.845-.003-9.69-.013-14.535-.024-4.94-.01-9.88-.015-14.82-.02-9.7-.01-19.4-.028-29.099-.049a652361.215 652361.215 0 01-.055-175.64v-3.755c-.005-19.868-.013-39.736-.022-59.604-.01-20.498-.015-40.996-.017-61.493a62776.17 62776.17 0 00-.012-34.4c-.028-44.665.048-89.32.711-133.98.438-29.545.529-59.081.496-88.63-.006-6.252-.006-12.504-.007-18.757a60508.58 60508.58 0 00-.019-36.925c-.009-11.89-.016-23.78-.02-35.67v-2.257l-.005-11.214c-.01-30.558-.027-61.117-.05-91.675l-10.34-.48-2.912-.137c-10.314-.474-20.629-.747-30.951-.946-1.082-.02-2.163-.042-3.278-.064-38.405-.72-76.826-.444-115.236-.378-14.088.024-28.176.047-42.264.058-5.627.005-11.254.015-16.881.029-3.458.007-6.916.01-10.374.013-1.606.002-3.212.005-4.817.01-2.18.008-4.36.009-6.54.009l-3.699.006C44 160 44 160 43 159a87.526 87.526 0 01-.13-5.055l-.009-3.266.006-3.554-.003-3.62c0-2.533.001-5.065.006-7.597.005-3.891 0-7.782-.007-11.674 0-2.453.002-4.906.004-7.359l-.006-3.554.01-3.266.002-2.891c.171-2.914.358-3.12 3.272-3.289z"
      ></path>
      <path
        fill="#2B5C6A"
        d="M1704 243h296v59l-19.362-.496c-21.366-.507-42.716-.625-64.088-.572-4.78.01-9.56.013-14.34.017-12.05.01-24.098.03-36.148.051-13.078.022-26.157.043-39.235.053-4.714.005-9.427.01-14.14.022-21.256.052-42.45-.122-63.687-1.075-.859 27.883-1.14 55.739-1.101 83.634.006 5.386.006 10.773.008 16.159.003 10.127.01 20.255.021 30.383.011 11.56.017 23.12.022 34.681.01 23.715.028 47.429.05 71.143 14.168.78 28.29 1.162 42.478 1.205l6.157.03c5.498.027 10.997.048 16.496.068 5.773.022 11.546.05 17.32.076 10.9.05 21.8.095 32.701.138 12.423.05 24.847.105 37.27.16 25.526.113 51.052.22 76.578.323v58h-228c-.835 32.697-.835 32.697-1.205 65.39l-.03 6.374c-.027 5.602-.048 11.205-.068 16.808-.023 5.916-.05 11.832-.076 17.748-.05 11.13-.095 22.26-.138 33.39-.05 12.702-.105 25.404-.16 38.106-.113 26.061-.22 52.123-.323 78.184 28.423.92 56.831 1.2 85.268 1.303 5.924.023 11.848.05 17.772.076 11.152.05 22.303.095 33.454.138 12.724.05 25.447.105 38.171.16 26.112.113 52.223.22 78.335.323v59a256480.7 256480.7 0 01-106.006.055h-2.262c-12 .005-23.998.013-35.997.022-12.365.01-24.73.015-37.094.017-6.923.001-13.846.004-20.769.012-49.908.052-49.908.052-73.25-.55l-2.392-.059c-2.169-.055-4.337-.118-6.505-.184l-3.606-.11C1709 912 1709 912 1704 911V243z"
      ></path>
      <path
        fill="#092D38"
        d="M458 383h60v531h-61c-.017-50.514-.033-101.029-.042-151.543v-2.264a1750822.944 1750822.944 0 01-.013-72.578v-2.4c-.005-25.7-.012-51.399-.021-77.098a282852.49 282852.49 0 01-.019-90.366v-2.22c-.001-11.824-.006-23.648-.012-35.472-.006-11.872-.008-23.744-.007-35.615.001-6.439 0-12.877-.005-19.316-.005-5.884-.005-11.767-.002-17.651 0-2.139 0-4.277-.004-6.416-.004-2.887-.002-5.774.002-8.66l-.008-2.57c.017-5.717.017-5.717 1.131-6.831z"
      ></path>
      <path
        fill="#2D5F6D"
        d="M1883.107 34.519l2.456.027h2.79l3.002.063 3.082.018c3.25.022 6.5.072 9.75.123 2.203.02 4.405.038 6.608.055 5.402.044 10.803.11 16.205.195l-1 5h-2l-.328 1.73c-.767 2.592-1.89 4.36-3.422 6.583l-1.633 2.386a459.14 459.14 0 01-4.242 5.926c-1.934 2.68-3.597 5.445-5.2 8.34-2.101 3.638-4.412 7.147-6.687 10.68-1.48 2.255-1.48 2.255-2.488 4.355h-2l-.746 2.082c-1.466 3.411-3.337 6.478-5.316 9.606-2.604 4.078-2.604 4.078-4.938 8.312h-2v3h-2l-1 4h-2l-.687 2.063c-1.399 3.129-3.124 5.576-5.192 8.289-1.312 1.769-1.312 1.769-2.121 4.648h-2l-.875 2.25c-2.533 6.192-2.533 6.192-4.977 8.496-2.44 2.561-3.945 5.157-5.648 8.254-2.17 3.947-4.278 6.875-7.5 10a76.504 76.504 0 00-2.625 4.188c-2.158 3.703-2.158 3.703-4.375 4.812-1.092 1.933-1.092 1.933-2 4l-1 2h-31v-3l2-1c.768-1.845.768-1.845 1.375-4.062 1.44-4.607 3.376-8.672 5.625-12.938h2l.371-1.703c.681-2.487 1.623-4.702 2.692-7.047l1.097-2.422.84-1.828h2l.277-2.043c.907-3.708 2.536-6.905 4.286-10.27l.998-1.955c.807-1.58 1.622-3.156 2.439-4.732h2l.75-2.5c1.44-4.032 3.288-7.703 5.25-11.5a1810.63 1810.63 0 002.25-4.5L1848 91h2l.445-1.617c1.615-5.365 3.832-9.816 6.797-14.555 2.1-3.38 4.093-6.813 6.07-10.265l1.06-1.83c1.468-2.561 2.691-4.922 3.628-7.733h2l1-5h2l2-7h2l.313-1.75c1.02-3.341 2.215-5.914 5.794-6.731z"
      ></path>
      <path
        fill="#3F7786"
        d="M2717.438 590.563c9.924 1.218 17.827 9.5 23.797 16.985 6.398 8.324 11.898 17.15 16.765 26.452l1.056 2.012c14.372 27.826 15.43 58.514 6.006 88.176-6.767 20.108-19.548 49.126-39.062 59.812-3.473 1.158-6.36 1.069-10 1-1.595-5.654-.673-9.902 2-15 2.778-3.547 5.89-6.746 9-10 18.069-19.714 26.414-45.108 26.375-71.563l-.003-1.997c-.137-31.326-13.844-53.734-32.173-78.163l-1.635-2.187a596.301 596.301 0 00-3.097-4.102c-3.481-4.667-3.481-4.667-3.342-7.863 1.24-3.011 1.24-3.011 4.313-3.563z"
      ></path>
      <path fill="#092D38" d="M457 247h61v52h-61v-52z"></path>
      <path
        fill="#3F7786"
        d="M2680 607c21.674 13.86 33.006 33.285 39 58l.746 2.965c4.367 20.993 1.325 44.698-7.746 64.035l-1.122 2.396c-13.555 28.5-13.555 28.5-27.878 33.604-3.438.188-3.438.188-6 0 .402-12.065 6.562-20.607 13.5-30 12.379-16.762 18.771-34.743 16.004-55.77-3.643-22.464-14.603-41.125-26.43-60.175-2.23-3.612-4.28-7.209-6.074-11.055l6-4z"
      ></path>
      <path
        fill="#3E7685"
        d="M2638 623c7.367.377 11.186 4.853 16 10 15.979 18.676 22.463 41.678 21 66-2.297 17.886-10.777 37.065-25.004 48.629-4.607 3.164-8.442 4.073-13.996 4.371-1.68-5.04-1.456-8.756.375-13.75 2.609-4.834 6.487-8.54 10.219-12.52 9.788-11.106 12.217-25.202 11.563-39.584-1.363-18.615-11.943-36.782-21.69-52.275-1.08-1.789-1.08-1.789-2.467-4.871.8-2.859 1.897-3.897 4-6z"
      ></path>
      <path
        fill="#3D7584"
        d="M2597 640c7.188.369 12.384 4.22 17.18 9.316 11.265 14.263 13.042 32.093 11.82 49.684-1.599 12.405-6.009 23.548-15.914 31.594-4.472 3.014-8.64 4.406-14.086 4.406.46-9.502 4.142-16.02 9.063-24 5.476-9.1 8.546-17.2 6.937-28-2.232-8.032-5.944-14.599-10.625-21.438-1.16-1.726-2.32-3.454-3.477-5.183l-1.541-2.264c-3.43-5.345-3.43-5.345-3.17-8.115.947-2.329 2.222-4.064 3.813-6z"
      ></path>
      <path
        fill="#3D7484"
        d="M2555 660c6.208-.505 11.536-.934 16.5 3.242 8.009 9.385 8.328 21.042 7.5 32.758-1.183 7.128-3.958 14.851-9.82 19.418-5.016 2.882-8.606 2.853-14.18 1.582l-1-1c.122-5.857 2.17-9.082 5.5-13.805 3.525-5.159 5.317-9.86 4.5-16.195-1.475-4.413-3.239-8.695-5-13a549.696 549.696 0 01-2.313-6.188l-.988-2.667C2555 662 2555 662 2555 660z"
      ></path>
    </svg>
  );
}

export default TimeoIcon;