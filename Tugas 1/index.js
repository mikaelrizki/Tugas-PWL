// 1. import data pet list
import petList from './pet.js'

// 2. buat selector untuk element dropdown 
const dropdownElement = document.querySelector(".dropdownMenu");

// 3. buat selector untuk element form 
const formElement = document.querySelector(".searchForm");

// 4. buat selector untuk element search 
const searchInputElement = document.querySelector(".searchInput");

// 5. buat fungsi yang berisi komponen beserta data dengan template sebagai berikut
const petComponent = (pet) => {
  return `
    <div class="card my-3 mx-2" style="width: 20%">
      <img height="300" style="object-fit: cover" class="card-img-top" src=${pet.photo.full} alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title d-inline">${pet.name}</h5>
        <span class="badge badge-pill badge-info">${pet.type}</span>
        <p class="card-text">${pet.description}</p>
        <p><small>Published at: ${new Date(pet.published_at)}</small></p>
        <button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#confirmationModal">Adopt Me</button>
      </div>
    </div>`;
};

// 6. fungsi render komponen pet dengan map 
const renderComponent = (data) => {
  const container = document.querySelector(".petInfo");
  if (data.length) {
    container.innerHTML = data.map(pet => petComponent(pet)).join('');
  } else {
    container.innerHTML = '<div class="d-flex align-items-center w-100 justify-content-center"><img src="./no-data-found.jpg" style="width: 300px" /></div>';
  }
};

// 7. renderComponent dipanggil dengan parameter petList untuk menampilkan data (sebagai inisialisasi sebelum data difilter)
renderComponent(petList);

// 8. Lengkapi fungsi sortPetById 
const sortPetById = (key) => {
  let sortedPets = [...petList];
  if (key === "oldest") {
    return sortedPets.sort((a, b) => new Date(a.published_at) - new Date(b.published_at));
  }
  if (key === "newest") {
    return sortedPets.sort((a, b) => new Date(b.published_at) - new Date(a.published_at));
  }
  if (key === "name") {
    return sortedPets.sort((a, b) => a.name.localeCompare(b.name));
  }
  return sortedPets;
};

// 9. Lengkapi fungsi untuk search pet berdasarkan key
const searchPetByKey = (key) => {
  return petList.filter(pet => pet.name.toLowerCase().includes(key.toLowerCase()));
};

// 10. Buat event listener "change" untuk dropdown element
dropdownElement.addEventListener("change", (event) => {
  if (event.target.value !== '--Sort By--') {
    const sortedPets = sortPetById(event.target.value);
    renderComponent(sortedPets);
  } else {
    renderComponent(petList);  // reset to initial list if '--Sort By--' is selected
  }
});

// 11. Sama seperti point 9, buat event listener "submit" 
formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  // 11a. gunakan value dari event untuk melakukan search dari fungsi 9
  const searchKey = searchInputElement.value;
  
  // 11b. panggil fungsi untuk menampilkan komponen dari hasil fungsi sort yang dipanggil pada poin 11a.
  const searchedPets = searchPetByKey(searchKey);
  renderComponent(searchedPets);
});