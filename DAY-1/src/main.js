
import gsap from "gsap";
import './style.css';



gsap.fromTo('.box',{
  
  x:0
 
},{
  delay:0.6,
  x:500,
  y:600,
  duration:2
})