import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import 'tailwindcss'

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn");
  let count = 0;

  if (btn) {
    btn.addEventListener("click", () => {
      count++;
      btn.innerText = `count is ${count}`;
    });
  }
})