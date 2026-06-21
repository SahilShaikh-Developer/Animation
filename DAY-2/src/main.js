import gsap from 'gsap';
import './style.css';



gsap.set('.box',{
    x:-300,

})

gsap.to('.box',{

    duration:1,
    x:1500,

    ease: "power2.inOut",
    delay:1,
    
    repeat: 1,
    // yoyo:true,

    onstart:()=>{
        console.log("animation started");
        
    }

})