import { random } from "./utill";

const rOne = random(10);
const rTwo = random(20);

console.log(`${rOne} ${rTwo}`);


function hello(){
    console.log('hello');
}

console.log(hello());


// TODO :: 클릭 이벤트
const navOpen = document.getElementsByClassName('btn-nav');
const navClose = document.getElementsByClassName('nav');

function nav_open(){
    alert('nav open!');

    // if (navClose.style.display == 'none'){
    //     navClose.style.display == 'block';
    // } else {
    //     navClose.style.display == 'none';
    // }
}

// navOpen.addEventListener('click', nav_open);

nav_open();
