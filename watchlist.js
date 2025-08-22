
// Check if user is logged in
if (!localStorage.getItem("user")) {
  window.location.href = "signIn.html"; // redirect if not logged in
}

const watchlistContainer = document.getElementById("watchlistContainer");
const logoutBtn = document.getElementById("logoutBtn");

// Load watchlist from localStorage
function loadWatchlist() {
  let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
  watchlistContainer.innerHTML = "";

  if (watchlist.length === 0) {
    watchlistContainer.innerHTML = "<p>No movies in your watchlist yet.</p>";
    return;
  }

  watchlist.forEach((movie, index) => {
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");

    movieCard.innerHTML = `
      <img src="${movie.image}" alt="${movie.title}">
      <div class="movie-info">
        <h3>${movie.title}</h3>
        <p>⭐ ${movie.rating}</p>
        <button class="remove-btn" onclick="removeFromWatchlist(${index})">Remove</button>
      </div>
    `;

    watchlistContainer.appendChild(movieCard);
  });
}

// Remove movie from watchlist
function removeFromWatchlist(index) {
  let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
  watchlist.splice(index, 1);
  localStorage.setItem("watchlist", JSON.stringify(watchlist));
  loadWatchlist();
}

// Logout
logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("loggedInUser");
  window.location.href = "signIn.html";
});

// Load watchlist on page load
loadWatchlist();
