function addToWatchlist(title, image, rating) {
  let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
  let movie = { title, image, rating };

  // Avoid duplicates
  if (!watchlist.some(item => item.title === title)) {
    watchlist.push(movie);
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
    alert(`${title} added to your Watchlist!`);
  } else {
    alert(`${title} is already in your Watchlist.`);
  }
}