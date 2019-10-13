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
    $counter.innerHTML = incrementCounter(parseInt($counter.innerHTML));
  }

  if (event.target.closest('.btn--subtract')) {
    event.preventDefault();
    $counter.innerHTML = decrementCounter($counter.innerHTML);
  }

  return false;
}, false)

const incrementCounter = currentVal => {
  return ++currentVal;
}

const decrementCounter = currentVal => {
  if (currentVal > 0) {
    return --currentVal;
  }

  return 0;
}