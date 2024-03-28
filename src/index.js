import './style.css';

const navIcon = document.getElementById('nav-icon');
const mobileNav = document.querySelector('.mobile_nav');
const activitiesNav=document.getElementById("activities_nav")
const activitiesShow=document.getElementById("activities_show")

activitiesNav.addEventListener("mouseleave",()=>{
    activitiesShow.style.display='none'
})
activitiesNav.addEventListener("mouseenter",()=>{
    activitiesShow.style.display='flex'
})
console.log(activitiesNav,activitiesShow.classList)

navIcon.addEventListener('click', () => {
  mobileNav.classList.toggle('hidden');
});

/* const scriptURL="https://script.google.com/macros/s/AKfycbyTkfPW0vKoE0CWdJ0nG7PETCZiX1GNYoUCN6lD_PmMOqVZ_6gfDhPX19sMv9fk-5Qpog/exec"

const form=document.getElementById("newsletter_form")
  console.log(form)
form.addEventListener("submit",(e)=>{
   e.preventDefault()
   fetch(scriptURL,{method:"POST", body: new FormData(form)})
  .then(Response=>alert("YOUR EMAIL HAS BEEEN SUBMITTED SUCESSFULLY"))
  .then(()=>{window.location.reload()})
  .catch(error=>console.error("error",error.message))

})
 */

function setCurrentDateTime() {
    var now = new Date();
    var dateTimeString = now.toISOString(); 
    document.getElementById("datetime").value = dateTimeString;
  }
console.log("lol")

let Announcements = [
    {
        imgLink: "./img/atom.jpg",
        title: "Paper Presentation on Quantum-based applications",
        subContent: "Paper presentation done by enthusiastic 1st and 2nd year student. Topics given by the convenors.",
        readMoreLink: "#"
    },
    {
               imgLink: "./img/stock.jpg",
        title: "Lecture series",
        subContent: "Introductory lecture series organised by senior students/convenors in various topics in Physics like Statistical Physics, CMP etc.",
        readMoreLink: "#"
    },
    {
        imgLink: "./img/news.jpg",
        title: "Newsletters",
        subContent: "From entanglement to superposition, delve into the mysteries of the quantum realm with engaging discussions and interactive experiments. ",
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
            <div href="#" style="background-image: url(${card.imgLink});" class="h-[400px] bg-cover  ">
            </div >
            <div class="p-5 news_content flex flex-col justify-around border-y ${count % 2 === 0 ? ' border-black ' : ' border-white '}">
            <div class="py-4 "> 
                <a href="#">
                    <h6 class="mb-2 text-xl font-bold tracking-tight  ${count % 2 === 0 ? 'text-gray-900  ' : ' text-white'}">${card.title}</h6>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${card.subContent}</p>
                </div>
                <a href="${card.readMoreLink}" class="News_content_button inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                 
                </a>
            </div>
        </div>
    `;
    AnnouncementsContainer.appendChild(HTMLcard);

    count++;
});

/* document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelectorAll('[data-carousel="slide"]');
    const items = carousel.querySelectorAllAll('[data-carousel-item]');
    const prevButton = carousel.querySelectorAll('[data-carousel-prev]');
    const nextButton = carousel.querySelectorAll('[data-carousel-next]');
    let currentIndex = 0;

    // Function to show the current slide
    const showSlide = (index) => {
        items.forEach((item, i) => {
            if (i === index) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    };

    // Function to move to the next slide
    const nextSlide = () => {
        currentIndex = (currentIndex + 1) % items.length;
        showSlide(currentIndex);
    };

    // Function to move to the previous slide
    const prevSlide = () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        showSlide(currentIndex);
    };

    // Event listeners for next and previous buttons
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

 
    // Show the initial slide
    showSlide(currentIndex);
}); */


