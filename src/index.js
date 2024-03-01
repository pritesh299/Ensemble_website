import './style.css';

let Announcements = [
    {
        imgLink: "./img/atom.jpg",
        title: "Paper presentation with Co -ordinators",
        subContent: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
        readMoreLink: "#"
    },
    {
        imgLink: "./img/atom.jpg",
        title: "Paper presentation with Co -ordinators",
        subContent: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
        readMoreLink: "#"
    },
    {
        imgLink: "./img/atom.jpg",
        title: "Paper presentation with Co -ordinators",
        subContent: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
        readMoreLink: "#"
    },
    {
        imgLink: "./img/atom.jpg",
        title: "Paper presentation with Co -ordinators",
        subContent: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
        readMoreLink: "#"
    },
    {
        imgLink: "./img/atom.jpg",
        title: "Paper presentation with Co -ordinators",
        subContent: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
        readMoreLink: "#"
    },  {
        imgLink: "./img/atom.jpg",
        title: "Paper presentation with Co -ordinators",
        subContent: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
        readMoreLink: "#"
    },
];

let AnnouncementsContainer = document.getElementById("News_&_Annoucements_container");
console.log(AnnouncementsContainer)

let count = 0;
Announcements.map((card) => {
    let HTMLcard = document.createElement("div");

    HTMLcard.innerHTML = `
        <div class="max-w-sm ${count % 2 === 0 ? 'bg-white  border-white   ' : 'dark:bg-gray-800  dark:border-gray-700 '} border  shadow hover:scale-105 ">
            <a href="#">
                <img class="" src="${card.imgLink}" alt="" />
            </a>
            <div class="p-5">
                <a href="#">
                    <h6 class="mb-2 text-xl font-bold tracking-tight  ${count % 2 === 0 ? 'text-gray-900  ' : ' text-white'}">${card.title}</h6>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${card.subContent}</p>
                <a href="${card.readMoreLink}" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>
    `;
  console.log(count%2,HTMLcard)
    AnnouncementsContainer.appendChild(HTMLcard);

    count++;
});

/* <!DOCTYPE html>
<html class="scroll-smooth">
<head>
    <meta charset="utf-8" />
    <title>Ensemble</title>
    <link href="./output.css" rel="stylesheet">
    
</head>
<body>
<header class="bg-black text-blue-400 text-sm h-14 absolute w-full flex flex-row items-center justify-center border-b border-white ">
    <nav class="flex flex-row gap-12 p-5">
        <a href="./home.html" class="hover:text-white hover:scale-110 ease-in-out font-semibold">HOME</a>
        <a href="./gallery.html" class="hover:text-white hover:scale-110 ease-in-out font-semibold">GALLERY</a>
        <a href="#" class="hover:text-white hover:scale-110 ease-in-out font-semibold">TEAM</a>
        <a href="#" class="hover:text-white hover:scale-110 ease-in-out font-semibold">ACTIVITIES</a>
        <a href="#" class="hover:text-white hover:scale-110 ease-in-out font-semibold">CONTACT</a>
    </nav>
</header>

<section id="main" style="background-image: url(./img/bg.jpg);" class="bg-cover bg-fixed">
    <section id="" class="h-screen border-b border-white flex flex-col justify-center items-center animate-fadeIn">
        <!--   <img src="" alt="logo"> -->
        <p class="text-9xl text-white tracking-widest">ENSEMBLE</p>
        <p class="text-white font-sans text-xl">THE UNDERGRADUATE PHYSICS CLUB OF IISc</p>

    </section>

    <section id="About_us_container" class="bg-black h-full px-5 py-16 border-b border-white flex flex-col justify-center items-center ">

        <section id="About_us" class="bg-black text-white px-8 py-16 gap-14 flex flex-row justify-around items-center w-4/5">
            <div id="About_us_image_container" class="bg-white w-96">
                <div class="bg-white w-full h-full"></div>
                <img src="./img/atom.jpg" alt="" class="w-96 translate-x-6 translate-y-6 border border-white">

            </div>
            <div id="About_us_content_container" class="flex flex-col justify-center max-w-xl">
                <P class="text-4xl font-bold mb-4 text-white font-sans text-center">ABOUT US</P>
                <div id="About_us_content" class="text-xl text-gray-400">
                    What is an Ensemble? In Physics, an Ensemble represents a snapshot taken of several copies of the same system, all of which are in different possible states. At the Indian Institute of Science, Ensemble is the Physics Club of enthusiastic undergraduate students at IISc with different aims and interests but with the common goal of culturing new ideas in Physics and making them available to everyone. The club is a platform for all Physics enthusiasts at IISc to come, contribute, and carry this endeavor forward!
                </div>
            </div>
        </section>
    </section>




    <section class="h-[50vh] flex flex-col justify-center items-center text-white gap-10 n">
        <p class="text-5xl mb-4 w-[75vw] text-center">Join our mailing list for updates on events and for receiving our newsletter!</p>
        <div class="flex items-center justify-between">
            <input type="email" placeholder="Enter your email" class="px-4 py-2 w-[60vw] border text-black border-white focus:outline-2 focus:outline-blue-600">
            <button class="px-4 py-2 w-[15vw] text-white border border-white hover:bg-blue-800 focus:outline-none">JOIN US</button>
        </div>
    </section>
</section>
<footer class="h-[50vh] border-t border-white bg-black ">
    <div class="flex flex-row justify-around items-center text-white h-full">
        <img src="./img/logo.jpg" alt="" class="h-72">
        <div id="footer_links" class="text-center">
            <p id="footer_Institute" class="p-3 border-b border-white text-2xl">INDIAN INSTITUTE OF SCIENCE - BANGALORE</p>
            <p id="Conatact_mail" class="text-xl p-3 mb-10">ensemble@iisc.ac.in</p>
            <div id="Social_media_links_container">
                <div class="grid grid-cols-2 gap-10">
                    <a href="#" class="flex items-center justify-between w-[18vw]">

                        <img src="./img/facebook_logo.png" class="w-12 h-12">
                        <span class=" flex flex-row gap-2 items-center"> 
                          <span class="bg-white h-2 w-2 rounded-full"></span>
                          <p>ensemble.facebook</p>
                       </span> 

                    </a>
                    <a href="#" class="flex items-center justify-between w-[18vw]">
                        <img src="./img/instagram_logo.png" class="w-12 h-12">
                       <span class=" flex flex-row gap-2 items-center"> 
                           <span class="bg-white h-2 w-2 rounded-full"></span>
                           <p>ensemble.instagram</p>
                       </span> 
                    </a>
                    <a href="#" class="flex items-center justify-between w-[18vw]">
                        <img src="./img/linkedIn_logo.png" class="w-12 h-12">
                        <span class=" flex flex-row gap-2 items-center"> 
                        <span class="bg-white h-2 w-2 rounded-full"></span>
                        <p>ensemble.LinkedIn</p>
                       </span> 

                    </a>
                    <a href="#" class="flex items-center justify-between w-[18vw]">
                        <img src="./img/youtube_logo.png" class="w-12 h-12">
                        <span class=" flex flex-row gap-2 items-center"> 
                        <span class="bg-white h-2 w-2 rounded-full"></span>
                        <p>ensemble.youtube</p>
                       </span> 

                    </a>
                </div>
            </div>
        </div>
    </div>
</footer>


<script src="main.js"></script>
</body>
</html> */
