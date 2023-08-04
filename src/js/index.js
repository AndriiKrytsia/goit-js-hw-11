
import {Notify} from 'notiflix';
import { getPictures } from './pixabay';
import { selectMarkup } from './markup'


const refs = {
  searchForm: document.querySelector('.search-form'),
  loadMore: document.querySelector('.load-more'),
  gallery: document.querySelector('.gallery')
}
let input;

refs.searchForm.addEventListener('submit', onSubmitForm);
refs.loadMore.addEventListener('click', onClickButton);

 async function onSubmitForm(e) {
  e.preventDefault();

   const dataText = refs.searchForm.elements.searchQuery.value;
   input = dataText;

     e.target.reset();
  refs.gallery.innerHTML = '';

   if (dataText.trim() === '') {
     return Notify.warning("Sorry, there are no images matching your search query. Please try again.")
   }
   const dataInput = await getPictures(input);
   selectMarkup(dataInput.hits, refs.gallery)
} 

async function onClickButton() {
    const dataInput = await getPictures(input);
   selectMarkup(dataInput.hits, refs.gallery)
} 


const loadMoreBtn = new LoadMoreBtn({
  selector: '.load-more',
  hidden: true,
});
