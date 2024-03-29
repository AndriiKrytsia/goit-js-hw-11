export function selectMarkup(pictures, gallery) {
  console.log(pictures);
  const markup = pictures.map(({ largeImageURL, webformatURL, tags, likes, views, comments, downloads }) => `<div class="photo-card">
    <a href="${largeImageURL}">
    <img src="${webformatURL}" alt="${tags}" loading="lazy" />
    <div class="info">
      <p class="info-item">
        <b>Likes</b>
        ${likes}
      </p>
      <p class="info-item">
        <b>Views</b>
        ${views}
      </p>
      <p class="info-item">
        <b>Comments</b>
        ${comments}
      </p>
      <p class="info-item">
        <b>Downloads</b>
        ${downloads}
      </p>
    </div>
    </a>
  </div>`).join('');
  gallery.insertAdjacentHTML('beforeend',markup);
}
