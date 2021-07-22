const burger = document.getElementById('burger');
console.log(burger);
burger.addEventListener('click', function() {
    burger.classList.add('open');
    const menu = document.getElementById('menu');
    if (menu.classList.contains('open')) {
        menu.classList.remove('open');
        burger.classList.remove('open');
    } else {
        menu.classList.add('open');
        burger.classList.add('open');
    }
});


const projectsCounter = document.getElementById("projectsCounter");
const clientsCounter = document.getElementById("clientsCounter");
const coffeesCounter = document.getElementById("coffeesCounter");

let isAnimationLaunched = false;

document.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= projectsCounter.offsetTop) {
        console.log("high", projectsCounter.offsetTop);

        function launchCounter(element, finalAmount) {
            let counter = 0;
            const duration = 2000;
            const eachMs = duration / finalAmount;
            const timer = setInterval(function() {
                counter = counter + 1;
                console.log(counter);
                element.innerHTML = counter;
                if (counter === finalAmount) {
                    clearInterval(timer);
                }
            }, eachMs);

        }

        if (!isAnimationLaunched) {
            launchCounter(projectsCounter, 260);
            launchCounter(clientsCounter, 120);
            launchCounter(coffeesCounter, 200);
            isAnimationLaunched = true;
        }
    }
}

// const projectsCounter = document.getElementById("projectsCounter");
// const clientsCounter = document.getElementById("clientsCounter");
// const coffeesCounter = document.getElementById("coffeesCounter");

// function launchCounter(element, finalAmount) {
//     let counter = 0;
//     const duration = 2000;
//     const eachMs = duration / finalAmount;
//     const timer = setInterval(function() {
//         counter = counter + 1;
//         console.log(counter);
//         element.innerHTML = counter;
//         if (counter === finalAmount) {
//             clearInterval(timer);
//         }
//     }, eachMs);
// }

// launchCounter(projectsCounter, 260);
// launchCounter(clientsCounter, 120);
// launchCounter(coffeesCounter, 200);

// https://learn.javascript.ru/js-animation