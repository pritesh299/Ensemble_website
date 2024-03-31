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
  document.querySelector("body").classList.toggle("h-screen")
  document.querySelector("body").classList.toggle("overflow-hidden")

});

const scriptURL="https://script.google.com/macros/s/AKfycbyTkfPW0vKoE0CWdJ0nG7PETCZiX1GNYoUCN6lD_PmMOqVZ_6gfDhPX19sMv9fk-5Qpog/exec"

const form=document.getElementById("newsletter_form")
if(form===null){}
else{
form.addEventListener("submit",(e)=>{
   e.preventDefault()
   fetch(scriptURL,{method:"POST", body: new FormData(form)})
  .then(Response=>alert("YOUR EMAIL HAS BEEEN SUBMITTED SUCESSFULLY"))
  .then(()=>{window.location.reload()})
  .catch(error=>console.error("error",error.message))

})
}

const contactForm = document.getElementById("contactForm");
console.log(contactForm);
if(contactForm===null){}
else{
contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    
    fetch(scriptURL, {
        method: "POST",
        body: new FormData(contactForm)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(data => {
        console.log('Success:', data);
        alert("Your response has been submitted successfully");
        window.location.reload();
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
}



let Announcements = [
    {
        imgLink: "./img/atom.jpg",
        title: "Paper Presentation on Quantum-based applications",
        subContent: "Paper presentation done by enthusiastic 1st and 2nd year student. Topics given by the convenors.",
        readMoreLink: "./talk.html"
    },
    {
               imgLink: "./img/fluid.jpg",
        title: "Lecture series",
        subContent: "Introductory lecture series organised by senior students/convenors in various topics in Physics like Statistical Physics, CMP etc.",
        readMoreLink: "./lecture.html"
    },
    {
        imgLink: "./img/news.jpg",
        title: "Newsletters",
        subContent: "From entanglement to superposition, delve into the mysteries of the quantum realm with engaging discussions and interactive experiments. ",
        readMoreLink: "./talk.html"
    },

];

let AnnouncementsContainer = document.getElementById("News_and_Annoucements_container");
console.log(AnnouncementsContainer)

let count = 0;
Announcements.map((card) => {
    let HTMLcard = document.createElement("div");
    if(AnnouncementsContainer===null){}
else{
    HTMLcard.innerHTML = `
        <div style="  transition: transform 0.2s ease-in-out" class=" news_card max-w-sm ${count % 2 === 0 ? 'bg-white  border-white  ' : 'bg-black border-white '} border-y  shadow hover:scale-105 ">
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
}
});



class Slideshow {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.slides = this.container.querySelectorAll('.slideshow-item');
        this.prevButton = this.container.querySelector('.prev-button');
        this.nextButton = this.container.querySelector('.next-button');
        this.currentIndex = 0;

        this.showItem(this.currentIndex);
        this.prevButton.addEventListener('click', () => this.showPrev());
        this.nextButton.addEventListener('click', () => this.showNext());
        this.startAutoSlide();
    }

    showItem(index) {
        this.slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add('block');
                slide.classList.remove('hidden');
            } else {
                slide.classList.remove('block');
                slide.classList.add('hidden');
            }
        });
    }

    showNext() {
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        this.showItem(this.currentIndex);
    }

    showPrev() {
        this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        this.showItem(this.currentIndex);
    }

    startAutoSlide() {
        setInterval(() => this.showNext(), 2000);
    }
}

// Create instances of the Slideshow class for each slideshow
const slideshow1 = new Slideshow('gallery_1');
const slideshow2 = new Slideshow('gallery_2');
const slideshow3 = new Slideshow('gallery_3');
const slideshowM1 = new Slideshow('gallery_m01');
const slideshowM2 = new Slideshow('gallery_m02');
const slideshowM3 = new Slideshow('gallery_m03');


ScrollReveal().reveal('#slide_show_desktop',{ delay: 500 });