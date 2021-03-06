import CONFIG from '../../../globals/config';

const restaurantItemContent = (restaurants) => `
  <div class="column-4">
  <div class="card bottom-2 shadow" tabindex="0">
    <a href="${`/#/detail/${restaurants.id}`}">
      <img class="round-top lazyload" 
        src="/images/heros/lowres.png"
        data-src="${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}" 
        alt="gambar-katalog-restoran" tabindex="0">
      <div class="card-content">
        <span class="card-title" tabindex="0">
          <h3 class="color-red">${restaurants.name} - ${restaurants.city}</h3>
        </span>
        <span class="card-rating" tabindex="0">
          <p class=" mb-1"><span class="iconify yellow" 
            data-icon="ph:star-fill" data-inline="false"></span>
            <strong><span>${restaurants.rating}</span></strong></p>
        </span>
        <p class="card-description" tabindex="0">${restaurants.description}</p>
      </div>
    </a>
  </div>
  </div>
`;

const restaurantDetailContent = (restaurant) => `
  <div class="column-12 bottom-2">
    <h2 class="section-heading text-capitalize text-center" tabindex="0">
      ${restaurant.restaurant.name}
    </h2>
  </div>

  <div class="column-6">
    <img tabindex="0"
      src="${CONFIG.BASE_IMAGE_URL + restaurant.restaurant.pictureId}" 
      alt="${restaurant.restaurant.name}" />
  </div>

  <div class="column-6">
  <h3 tabindex="0">Detail Restoran</h3>
    <h4 tabindex="0">Rating</h4>
    <p tabindex="0"><span class="iconify yellow" 
    data-icon="ph:star-fill" data-inline="false"></span>
    &nbsp;
    ${restaurant.restaurant.rating}</p>
    <h4 tabindex="0">Kota</h4>
      <p tabindex="0">
        ${restaurant.restaurant.city}
      </p>
    <h4 tabindex="0">Alamat Lengkap</h4>
      <p tabindex="0">
        ${restaurant.restaurant.address}
      </p>
    <h4 tabindex="0">Kategori Menu</h4>
      <p tabindex="0">
      ${restaurant.restaurant.categories.map(
      (categories) =>`
        ${categories.name} 
      `).
      join('')}
      </p>
  </div>

  <div class="column-12 top-2">
    <h2 tabindex="0">Deskripsi Restoran</h2>
      <p tabindex="0">
        ${restaurant.restaurant.description}
      </p>
  </div>

  <div class="column-12 top-2">
    <h2 class="section-heading text-capitalize" tabindex="0">
      Menu
    </h2>
  </div>
  <div class="column-6">
    <h4 tabindex="0">Minuman</h4>
    <ul>
      ${restaurant.restaurant.menus.drinks.map(
      (drinks) =>`
      <li tabindex="0">${drinks.name}</li>
      `).
      join('')}
    </ul>
  </div>
  <div class="column-6">
    <h4 tabindex="0">Makanan</h4>
    <ul>
      ${restaurant.restaurant.menus.foods.map(
      (foods) =>`
      <li tabindex="0">${foods.name}</li>
      `).
      join('')}
    </ul>
  </div>

  <div class="column-12 top-2">
  <h2 class="section-heading text-capitalize" tabindex="0">
    Review Restoran
  </h2>
  </div>
`;

const restaurantReviewContent = (restaurant) => `
  <div class="column-12">
  ${restaurant.restaurant.customerReviews.map((customerReviews) =>`
  <div class="review">
    <p class="top-1" tabindex="0">${customerReviews.date}</p>
    <h4 class="no-top color-red" tabindex="0"><span 
      class="iconify color-black" 
      data-icon="ph:user-circle-fill" 
      data-inline="false" style="font-size:1.3em;"></span>
      &nbsp;
      ${customerReviews.name}
    </h4>
    <div class="text-review" tabindex="0">
    Review : ${customerReviews.review}
    </div>
    <div class="border-bottom"></div>
  </div>
  `)
      .join('')}
  </div>
`;

const likeButtonContent = () => `
  <button aria-label="Tambahkan Favorit" id="likeButton" class="like">
  <span class="iconify" data-icon="ph:heart" data-inline="false"></span>
  </button>
`;

const likedButtonContent = () => `
  <button aria-label="Hapus Favorit" id="likeButton" class="like">
  <span class="iconify" data-icon="ph:heart-fill" data-inline="false"></span>
  </button>
`;

export {
  restaurantItemContent,
  restaurantDetailContent,
  restaurantReviewContent,
  likeButtonContent,
  likedButtonContent,
};
