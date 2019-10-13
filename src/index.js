import { library, dom, counter } from "@fortawesome/fontawesome-svg-core";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { faMinus } from "@fortawesome/free-solid-svg-icons/faMinus";
import 'normalize.css';
import './style.css';

library.add(faPlus, faMinus);
dom.watch();

let $counter = document.getElementById("counter");

$counter.innerHTML = 0;

document.addEventListener('click', (event) => {
  
  if (event.target.closest('.btn--add')) {
    event.preventDefault();
    $counter.innerHTML = changeCounter("increment", parseInt($counter.innerHTML));
  }

  if (event.target.closest('.btn--subtract')) {
    event.preventDefault();
    $counter.innerHTML = changeCounter("decrement", parseInt($counter.innerHTML));
  }

  return false;
}, false)

const changeCounter = (job, currentVal) => {
  if (job === "increment") {
    return ++currentVal;
  }

  if (job === "decrement" && currentVal > 0) {
    return --currentVal;
  }

  return 0;
}