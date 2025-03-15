
//sticky navs
// const myNavBar = document.querySelector('#myNavBar'); //find the element (use either getElementbyID '' or querySelector '#')

// const navOffset = myNavBar.offsetTop; //find how far from the top this is
// console.log(myNavBar); // Should log the <ul> element

// //everytime the user scrolls check the offsetTop position
// window.addEventListener('scroll', () => {
//     if (window.pageYOffset >= navOffset) {
//         myNavBar.classList.add('sticky');
//     }
//     else {
//         myNavBar.classList.remove('sticky');
//     }
// })

//scroll to top button
const scrollBtn = document.querySelector(".scrollToTop")
console.log(scrollBtn);

scrollBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

