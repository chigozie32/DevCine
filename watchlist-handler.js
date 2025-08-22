function addToWatchlist(movie) {
  if (!localStorage.getItem("user")) {
    alert("Please login to add movies to your watchlist.");
    window.location.href = "signIn.html";
    return;
  }

  let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];

  // Prevent duplicates
  if (watchlist.some(m => m.title === movie.title)) {
    alert("This movie is already in your watchlist.");
    return;
  }

  watchlist.push(movie);
  localStorage.setItem("watchlist", JSON.stringify(watchlist));
  alert("Movie added to your watchlist!");
}