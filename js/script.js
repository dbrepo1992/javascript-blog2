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




const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list';


  function generateTitleLinks(customSelector = ''){

  /* remove contents of titleList */

  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';
  console.log(titleList);

  /* find all the articles and save them to variable: articles */

  let articles = document.querySelectorAll(optArticleSelector + customSelector);

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

  const links = document.querySelectorAll('.titles a');
  console.log('links', links);
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }
}

generateTitleLinks();

function generateTags(){
  /* find all articles */

  let articles = document.querySelectorAll(optArticleSelector);

  /* START LOOP: for every article: */

  for(let article of articles){

    /* find tags wrapper */

    const tagsWrapper = article.querySelectorAll(optArticleTagsSelector);
    console.log('tagswrapper', tagsWrapper);

    /* make html variable with empty string */

    let html = '';

    /* get tags from data-tags attribute */

    const articleTags = article.getAttribute('data-tags');
    console.log('articleTags', articleTags);

    /* split tags into array */

    const articleTagsArray = articleTags.split(' ');
    console.log(articleTagsArray);

    /* START LOOP: for each tag */

    for(let tag of articleTagsArray){
      console.log(tag);

      /* generate HTML of the link */

      const linkHTML = '<li><a href="#tag-' + tag +'">' + tag + '</a></li>';
      console.log(linkHTML);

      /* add generated code to html variable */

      html = html + linkHTML;

    /* END LOOP: for each tag */
    }
    /* insert HTML of all the links into the tags wrapper */

    tagsWrapper.innerHTML = html;
    console.log('tagsWrapper', tagsWrapper);

  /* END LOOP: for every article: */
  }
}
generateTags();


function tagClickHandler(event){
  /* prevent default action for this event */

  event.preventDefault();

  /* make new constant named "clickedElement" and give it the value of "this" */

  const clickedElement = this;

  /* make a new constant "href" and read the attribute "href" of the clicked element */

  const href = clickedElement.querySelector('href');


  /* make a new constant "tag" and extract tag from the "href" constant */

  const tag = href.replace('#tag-', '');


  /* find all tag links with class active */

  const activeTagLinks = document.querySelectorAll('a[href="' + href + '"]');

  /* START LOOP: for each active tag link */

  for(let activeTagLink of activeTagLinks){

    /* remove class active */

    activeTagLink.classList.remove('active');

  /* END LOOP: for each active tag link */
  }
  /* find all tag links with "href" attribute equal to the "href" constant */

  const tagLinks = document.querySelectorAll('a[href="' + href + '"]');

  /* START LOOP: for each found tag link */

    /* add class active */

  /* END LOOP: for each found tag link */

  /* execute function "generateTitleLinks" with article selector as argument */

  generateTitleLinks('[data-tags~="' + tag + '"]');
}



function addClickListenersToTags(){
  /* find all links to tags */

  /* START LOOP: for each link */

    /* add tagClickHandler as event listener for that link */

  /* END LOOP: for each link */
}

addClickListenersToTags();
