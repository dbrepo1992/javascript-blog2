'use strict';

const titleClickHandler = function(){
    console.log('Link was clicked!');
  }

  const links = document.querySelectorAll('.titles a');

  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }
