'use strict';

const titleClickHandler = function(event){
  event.preventDefault();
  const clickedElement = this;
  console.log('Link was clicked!', event);

  /* [DONE] remove class 'active' from all article links  */

  const activeLinks = document.querySelectorAll('.titles a.active');

  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }


  /* [DONE] add class 'active' to the clicked link */

  clickedElement.classList.add('active');
  console.log('clickedElement:', clickedElement);


  /* [DONE] remove class 'active' from all articles */

  const activeArticles = document.querySelectorAll('.posts article.active');

  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
  }

  /* [DONE] get 'href' attribute from the clicked link */

  const articleSelector = clickedElement.getAttribute('href');
  console.log(articleSelector);

  /* [DONE] find the correct article using the selector (value of 'href' attribute) */

  const targetArticle = document.querySelector(articleSelector);
  console.log(targetArticle);

  /* add class 'active' to the correct article */
  targetArticle.classList.add('active');
  console.log('targetArticle:', targetArticle);
};

const links = document.querySelectorAll('.titles a');
console.log('links', links);
for(let link of links){
  link.addEventListener('click', titleClickHandler);
}


const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';


function generateTitleLinks(){

  /* remove contents of titleList */

  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';
  console.log(titleList);

  /* find all the articles and save them to variable: articles */

  let articles = document.querySelectorAll(optArticleSelector);

  /* for each article */

  let html = '';

  for(let article of articles){


    /* get the article id */

    const articleId = article.getAttribute('id');
    console.log('id', articleId);


    /* find the title element and get the title from the title element */

    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    console.log('article title', articleTitle);


    /* create HTML of the link */

    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log(linkHTML);

    /* insert link into titleList */
    html = html + linkHTML;
    console.log('titlelist', html);

  }
  titleList.innerHTML = html;
}

generateTitleLinks();

