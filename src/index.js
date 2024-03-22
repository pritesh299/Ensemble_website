import './style.css';

let Announcements = [
    {
        imgLink: "./img/stock.jpg",
        title: "Paper Presentation on Quantum-based applications",
        subContent: "Paper presentation done by enthusiastic 1st and 2nd year student. Topics given by the convenors.",
        readMoreLink: "#"
    },
    {
               imgLink: "./img/stock.jpg",
        title: "Paper Presentation on Quantum-based applications",
        subContent: "Paper presentation done by enthusiastic 1st and 2nd year student. Topics given by the convenors.",
        readMoreLink: "#"
    },
    {
               imgLink: "./img/stock.jpg",
        title: "Paper Presentation on Quantum-based applications",
        subContent: "Paper presentation done by enthusiastic 1st and 2nd year student. Topics given by the convenors.",
        readMoreLink: "#"
    },
    {
               imgLink: "./img/stock.jpg",
        title: "Paper Presentation on Quantum-based applications",
        subContent: "Paper presentation done by enthusiastic 1st and 2nd year student. Topics given by the convenors.",
        readMoreLink: "#"
    },
    {
               imgLink: "./img/stock.jpg",
        title: "Paper Presentation on Quantum-based applications",
        subContent: "Paper presentation done by enthusiastic 1st and 2nd year student. Topics given by the convenors.",
        readMoreLink: "#"
    },  {
               imgLink: "./img/stock.jpg",
        title: "Paper Presentation on Quantum-based applications",
        subContent: "Paper presentation done by enthusiastic 1st and 2nd year student. Topics given by the convenors.",
        readMoreLink: "#"
    },
];

let AnnouncementsContainer = document.getElementById("News_and_Annoucements_container");
console.log(AnnouncementsContainer)

let count = 0;
Announcements.map((card) => {
    let HTMLcard = document.createElement("div");

    HTMLcard.innerHTML = `
        <div style="transition: transform 0.2s ease-in-out" class="max-w-sm ${count % 2 === 0 ? 'bg-white  border-white  ' : 'bg-black border-white '} border-y  shadow hover:scale-105 ">
            <a href="#">
                <img class="" src="${card.imgLink}" alt="" />
            </a>
            <div class="p-5 border-y ${count % 2 === 0 ? ' border-black ' : ' border-white '}">
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
    AnnouncementsContainer.appendChild(HTMLcard);

    count++;
});







