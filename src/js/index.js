
import {Notify} from 'notiflix';
import { getPictures, userParams } from './pixabay';
import { selectMarkup } from './markup'
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const refs = {
  searchForm: document.querySelector('.search-form'),
  loadMore: document.querySelector('.load-more'),
  gallery: document.querySelector('.gallery')
}
let input;
let lightbox;

refs.searchForm.addEventListener('submit', onSubmitForm);
refs.loadMore.addEventListener('click', onClickButton);

 async function onSubmitForm(e) {
  e.preventDefault();

   const dataText = refs.searchForm.elements.searchQuery.value;
   input = dataText;

   console.log(input);
     e.target.reset();
  refs.gallery.innerHTML = '';

   if (dataText.trim() === '') {
     return Notify.warning("Sorry, there are no images matching your search query. Please try again.")
   }
   userParams.q = input;
   userParams.page = 1;
   const dataInput = await getPictures();
   if (!dataInput.hits.length) {
     refs.loadMore.classList.add('is-hidden')
     return Notify.warning("Sorry, there are no images matching your search query. Please try again.")
   } 
   selectMarkup(dataInput.hits, refs.gallery)
   refs.loadMore.classList.remove('is-hidden')
 
   if (dataInput.totalHits < userParams.per_page) {
  refs.loadMore.classList.add('is-hidden')
   }
   
   lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt' })
   
} 

async function onClickButton() {
  userParams.page += 1;
  
  const dataInput = await getPictures();
  selectMarkup(dataInput.hits, refs.gallery)
  lightbox.refresh();
  if (dataInput.totalHits <= userParams.per_page * userParams.page) {
    refs.loadMore.classList.add('is-hidden')
    return Notify.warning("We're sorry, but you've reached the end of search results.")
  }
} 




