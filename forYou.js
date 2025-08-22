document.addEventListener('DOMContentLoaded', () => {

  // --- High-Quality Movie Data Sample ---
  // Each movie now has a 'trailerId' (from YouTube) and a 'watchLink'
  const movieSamples = {
    Action: [
      {
        title: "Extraction (2020)",
        imageUrl: "https://i.ytimg.com/vi/L6P3nI6VnlY/hqdefault.jpg",
        rating: 8.0,
        trailerId: "L6P3nI6VnlY"
      },
      {
        title: "Extraction 2 (2023)",
        imageUrl: "https://i.ytimg.com/vi/Y274jZs5s7s/hqdefault.jpg",
        rating: 8.2,
        trailerId: "Y274jZs5s7s"
      },
      {
        title: "John Wick: Chapter 4 (2023)",
        imageUrl: "https://i.ytimg.com/vi/qEVUtrk8_B4/hqdefault.jpg",
        rating: 9.1,
        trailerId: "qEVUtrk8_B4"
      },
      {
        title: "F9: Fast & Furious 9 (2021)",
        imageUrl: "https://i.ytimg.com/vi/FUK2kdPsBws/hqdefault.jpg",
        rating: 7.4,
        trailerId: "FUK2kdPsBws"
      },
      {
        title: "The Woman King (Nigerian/African, 2022)",
        imageUrl: "https://i.ytimg.com/vi/3RDaPV_rJ1Y/hqdefault.jpg",
        rating: 8.7,
        trailerId: "3RDaPV_rJ1Y"
      },
      {
        title: "Black Panther: Wakanda Forever (2022)",
        imageUrl: "https://i.ytimg.com/vi/_Z3QKkl1WyM/hqdefault.jpg",
        rating: 9.0,
        trailerId: "_Z3QKkl1WyM"
      },
      {
        title: "Avengers: Endgame (2019)",
        imageUrl: "https://i.ytimg.com/vi/TcMBFSGVi1c/hqdefault.jpg",
        rating: 9.5,
        trailerId: "TcMBFSGVi1c"
      },
      {
        title: "The Old Guard (Charlize Theron, 2020)",
        imageUrl: "https://i.ytimg.com/vi/aK-X2d0lJ_s/hqdefault.jpg",
        rating: 7.8,
        trailerId: "aK-X2d0lJ_s"
      },
      {
        title: "The Harder They Fall (2021, Western Action)",
        imageUrl: "https://i.ytimg.com/vi/Poc55U2RPMw/hqdefault.jpg",
        rating: 7.9,
        trailerId: "Poc55U2RPMw"
      },
      {
        title: "Mission: Impossible – Dead Reckoning Part One (2023)",
        imageUrl: "https://i.ytimg.com/vi/avz06PDqDbM/hqdefault.jpg",
        rating: 9.2,
        trailerId: "avz06PDqDbM"
      },
      {
        title: "The Matrix Resurrections (2021)",
        imageUrl: "https://i.ytimg.com/vi/9ix7TUGVYIo/hqdefault.jpg",
        rating: 7.3,
        trailerId: "9ix7TUGVYIo"
      },
      {
        title: "Bad Boys for Life (2020)",
        imageUrl: "https://i.ytimg.com/vi/jKCj3XuPG8M/hqdefault.jpg",
        rating: 8.1,
        trailerId: "jKCj3XuPG8M"
      },
      {
        title: "6 Underground (2019, Netflix Action)",
        imageUrl: "https://i.ytimg.com/vi/YLE85olJjp8/hqdefault.jpg",
        rating: 7.5,
        trailerId: "YLE85olJjp8"
      },
      {
        title: "Army of the Dead (2021)",
        imageUrl: "https://i.ytimg.com/vi/tI1JGPhYBS8/hqdefault.jpg",
        rating: 7.7,
        trailerId: "tI1JGPhYBS8"
      },
      {
        title: "Wrath of Man (Jason Statham, 2021)",
        imageUrl: "https://i.ytimg.com/vi/EFYEni2gsK0/hqdefault.jpg",
        rating: 8.3,
        trailerId: "EFYEni2gsK0"
      },
      {
        title: "Mad Max: Fury Road (2015)",
        imageUrl: "https://i.ytimg.com/vi/hEJnMQG9ev8/hqdefault.jpg",
        rating: 9.1,
        trailerId: "hEJnMQG9ev8"
      }
    ],
    Drama: [
      // ----- Foreign Dramas -----
      {
        title: "The Shawshank Redemption (1994)",
        imageUrl: "https://i.ytimg.com/vi/6hB3S9bIaco/hqdefault.jpg",
        rating: 9.3,
        trailerId: "6hB3S9bIaco"
      },
      {
        title: "Forrest Gump (1994)",
        imageUrl: "https://i.ytimg.com/vi/bLvqoHBptjg/hqdefault.jpg",
        rating: 8.8,
        trailerId: "bLvqoHBptjg"
      },
      {
        title: "The Pursuit of Happyness (2006)",
        imageUrl: "https://i.ytimg.com/vi/DMOBlEcRuw8/hqdefault.jpg",
        rating: 8.0,
        trailerId: "DMOBlEcRuw8"
      },
      {
        title: "Gladiator (2000)",
        imageUrl: "https://i.ytimg.com/vi/owK1qxDselE/hqdefault.jpg",
        rating: 8.5,
        trailerId: "owK1qxDselE"
      },
      {
        title: "The Green Mile (1999)",
        imageUrl: "https://i.ytimg.com/vi/Ki4haFrqSrw/hqdefault.jpg",
        rating: 8.6,
        trailerId: "Ki4haFrqSrw"
      },
      {
        title: "12 Years a Slave (2013)",
        imageUrl: "https://i.ytimg.com/vi/z02Ie8wKKRg/hqdefault.jpg",
        rating: 8.1,
        trailerId: "z02Ie8wKKRg"
      },
      {
        title: "Slumdog Millionaire (2008)",
        imageUrl: "https://i.ytimg.com/vi/AIzbwV7on6Q/hqdefault.jpg",
        rating: 8.0,
        trailerId: "AIzbwV7on6Q"
      },
      {
        title: "The Revenant (2015)",
        imageUrl: "https://i.ytimg.com/vi/LoebZZ8K5N0/hqdefault.jpg",
        rating: 8.0,
        trailerId: "LoebZZ8K5N0"
      },
      {
        title: "Titanic (1997)",
        imageUrl: "https://i.ytimg.com/vi/kVrqfYjkTdQ/hqdefault.jpg",
        rating: 7.9,
        trailerId: "kVrqfYjkTdQ"
      },
      {
        title: "A Beautiful Mind (2001)",
        imageUrl: "https://i.ytimg.com/vi/WFJgUm7iOKw/hqdefault.jpg",
        rating: 8.2,
        trailerId: "WFJgUm7iOKw"
      },
      {
        title: "The Godfather (1972)",
        imageUrl: "https://i.ytimg.com/vi/sY1S34973zA/hqdefault.jpg",
        rating: 9.2,
        trailerId: "sY1S34973zA"
      },
      {
        title: "The Godfather Part II (1974)",
        imageUrl: "https://i.ytimg.com/vi/9O1Iy9od7-A/hqdefault.jpg",
        rating: 9.0,
        trailerId: "9O1Iy9od7-A"
      },
      {
        title: "Schindler’s List (1993)",
        imageUrl: "https://i.ytimg.com/vi/gG22XNhtnoY/hqdefault.jpg",
        rating: 9.0,
        trailerId: "gG22XNhtnoY"
      },
      {
        title: "The Dark Knight (2008)",
        imageUrl: "https://i.ytimg.com/vi/EXeTwQWrcwY/hqdefault.jpg",
        rating: 9.0,
        trailerId: "EXeTwQWrcwY"
      },
      {
        title: "Fight Club (1999)",
        imageUrl: "https://i.ytimg.com/vi/SUXWAEX2jlg/hqdefault.jpg",
        rating: 8.8,
        trailerId: "SUXWAEX2jlg"
      },
      {
        title: "Inception (2010)",
        imageUrl: "https://i.ytimg.com/vi/YoHD9XEInc0/hqdefault.jpg",
        rating: 8.8,
        trailerId: "YoHD9XEInc0"
      },
      {
        title: "The Imitation Game (2014)",
        imageUrl: "https://i.ytimg.com/vi/nuPZUUED5uk/hqdefault.jpg",
        rating: 8.0,
        trailerId: "nuPZUUED5uk"
      },
      {
        title: "Dead Poets Society (1989)",
        imageUrl: "https://i.ytimg.com/vi/ye4KFyWu2do/hqdefault.jpg",
        rating: 8.1,
        trailerId: "ye4KFyWu2do"
      },
      {
        title: "La La Land (2016)",
        imageUrl: "https://i.ytimg.com/vi/0pdqf4P9MB8/hqdefault.jpg",
        rating: 8.0,
        trailerId: "0pdqf4P9MB8"
      },
      {
        title: "The Pianist (2002)",
        imageUrl: "https://i.ytimg.com/vi/u_jE7-6Uv7E/hqdefault.jpg",
        rating: 8.5,
        trailerId: "u_jE7-6Uv7E"
      },
      {
        title: "Requiem for a Dream (2000)",
        imageUrl: "https://i.ytimg.com/vi/0nU7dC9bIDg/hqdefault.jpg",
        rating: 8.3,
        trailerId: "0nU7dC9bIDg"
      },
      {
        title: "Manchester by the Sea (2016)",
        imageUrl: "https://i.ytimg.com/vi/gsVoD0pTge0/hqdefault.jpg",
        rating: 7.9,
        trailerId: "gsVoD0pTge0"
      },
      {
        title: "Moonlight (2016)",
        imageUrl: "https://i.ytimg.com/vi/9NJj12tJzqc/hqdefault.jpg",
        rating: 7.4,
        trailerId: "9NJj12tJzqc"
      },
      {
        title: "Marriage Story (2019)",
        imageUrl: "https://i.ytimg.com/vi/BHi-a1n8t7M/hqdefault.jpg",
        rating: 8.0,
        trailerId: "BHi-a1n8t7M"
      },
      {
        title: "Spotlight (2015)",
        imageUrl: "https://i.ytimg.com/vi/EwdCIpbTN5g/hqdefault.jpg",
        rating: 8.2,
        trailerId: "EwdCIpbTN5g"
      }
    ],
    Comedy: [

      {
        title: "Anger Management — Brain Jotter x Lasisi Elenu x Dr Craze (Therapy Session EP 25)",
        imageUrl: "https://i.ytimg.com/vi/jdnmFC4QaXQ/hqdefault.jpg",
        rating: 8.1,
        trailerId: "jdnmFC4QaXQ"
      },
      {
        title: "MAD LOVE // TAAOOMA Latest Nigeria Comedy 2024",
        imageUrl: "https://i.ytimg.com/vi/2RXLYyo9-Fw/hqdefault.jpg",
        rating: 7.9,
        trailerId: "2RXLYyo9-Fw"
      },
      {
        title: "UNEXPECTED GUEST — TAAOOMA Funny video",
        imageUrl: "https://i.ytimg.com/vi/ZiCCA1RtA88/hqdefault.jpg",
        rating: 8.0,
        trailerId: "ZiCCA1RtA88"
      },
      {
        title: "OFFICIAL TRAILER FOR AREA COMMAND – Nigerian Comedy Series 2025",
        imageUrl: "https://i.ytimg.com/vi/F7kMWMdZ7QQ/hqdefault.jpg",
        rating: 7.8,
        trailerId: "F7kMWMdZ7QQ"
      },
      {
        title: "daredevil born again trailer | Nigerian Comedy | Funny Videos",
        imageUrl: "https://i.ytimg.com/vi/3A7_bro28ms/hqdefault.jpg",
        rating: 7.7,
        trailerId: "3A7_bro28ms"
      },
      {
        title: "Nigerians Need To Behave!! Can you imagine 2024 comedy",
        imageUrl: "https://i.ytimg.com/vi/s1xLwI8sDuo/hqdefault.jpg",
        rating: 7.6,
        trailerId: "s1xLwI8sDuo"
      },
      {
        title: "LOL: Last One Laughing Naija – Official Trailer 2 | Prime Video Naija",
        imageUrl: "https://i.ytimg.com/vi/ase7KiGvYhg/hqdefault.jpg",
        rating: 8.3,
        trailerId: "ase7KiGvYhg"
      },
      {
        title: "THE WAITER – OFFICIAL TRAILER (AY Comedian)",
        imageUrl: "https://i.ytimg.com/vi/b1gV38rpd4w/hqdefault.jpg",
        rating: 8.2,
        trailerId: "b1gV38rpd4w"
      },
      {
        title: "Living With Dad | Mark Angel Comedy",
        imageUrl: "https://i.ytimg.com/vi/PrKqiKbxGjc/hqdefault.jpg",
        rating: 7.9,
        trailerId: "PrKqiKbxGjc"
      },
      {
        title: "The Nigerian Dream – Official Trailer (Phage)",
        imageUrl: "https://i.ytimg.com/vi/5rFoVRtbuH0/hqdefault.jpg",
        rating: 7.8,
        trailerId: "5rFoVRtbuH0"
      },
      {
        title: "TAAOOMA – THE CAR HIJACK!",
        imageUrl: "https://i.ytimg.com/vi/We5KcKGNH6g/hqdefault.jpg",
        rating: 8.0,
        trailerId: "We5KcKGNH6g"
      },
      {
        title: "BABY TENI and LOST MONEY | TAAOOMA",
        imageUrl: "https://i.ytimg.com/vi/EN2-pyAA1GY/hqdefault.jpg",
        rating: 7.9,
        trailerId: "EN2-pyAA1GY"
      },
      {
        title: "THE GYM INSTRUCTOR // TAAOOMA",
        imageUrl: "https://i.ytimg.com/vi/FKAu53r1NOk/hqdefault.jpg",
        rating: 7.7,
        trailerId: "FKAu53r1NOk"
      },
      {
        title: "CANADIAN VISITOR // TAAOOMA",
        imageUrl: "https://i.ytimg.com/vi/S3syWQbZo3o/hqdefault.jpg",
        rating: 7.6,
        trailerId: "S3syWQbZo3o"
      },
      {
        title: "A Billion Laughs – The Nigerian Dream Trailer",
        imageUrl: "https://i.ytimg.com/vi/5rFoVRtbuH0/hqdefault.jpg",
        rating: 8.0,
        trailerId: "5rFoVRtbuH0"
      },
      {
        title: "Gina Yashere – Nigerian Mother (Stand-up Clip)",
        imageUrl: "https://i.ytimg.com/vi/QCqSJkaUpuc/hqdefault.jpg",
        rating: 7.5,
        trailerId: "QCqSJkaUpuc"
      },
      {
        title: "Having Nigerian parents be like…",
        imageUrl: "https://i.ytimg.com/vi/XYNck7nw-TI/hqdefault.jpg",
        rating: 7.4,
        trailerId: "XYNck7nw-TI"
      },
      {
        title: "HAPPY NEW YEAR! (Nigerian Comedy Skit)",
        imageUrl: "https://i.ytimg.com/vi/bwo2yhNxSHY/hqdefault.jpg",
        rating: 7.3,
        trailerId: "bwo2yhNxSHY"
      },
      {
        title: "Best Nigerian Comedy (Playlist snippet – Mark Angel, AY, etc.)",
        imageUrl: "https://i.ytimg.com/vi/PrKqiKbxGjc/hqdefault.jpg",
        rating: 7.8,
        trailerId: "PrKqiKbxGjc"
      }
    ],
    Romance: [
      {
        title: "Namaste Wahala (2020, Nigeria/India)",
        imageUrl: "https://i.ytimg.com/vi/vG7SYQjODTs/hqdefault.jpg",
        rating: 6.8,
        trailerId: "vG7SYQjODTs"
      },
      {
        title: "The Notebook (2004, USA)",
        imageUrl: "https://i.ytimg.com/vi/FC6biTjEyZw/hqdefault.jpg",
        rating: 8.0,
        trailerId: "FC6biTjEyZw"
      },
      {
        title: "Titanic (1997, USA)",
        imageUrl: "https://i.ytimg.com/vi/kVrqfYjkTdQ/hqdefault.jpg",
        rating: 9.0,
        trailerId: "kVrqfYjkTdQ"
      },
      {
        title: "Me Before You (2016, UK/USA)",
        imageUrl: "https://i.ytimg.com/vi/Eh993__rOxA/hqdefault.jpg",
        rating: 7.6,
        trailerId: "Eh993__rOxA"
      },
      {
        title: "The Fault in Our Stars (2014, USA)",
        imageUrl: "https://i.ytimg.com/vi/9ItBvH5J6ss/hqdefault.jpg",
        rating: 7.8,
        trailerId: "9ItBvH5J6ss"
      },
      {
        title: "A Star is Born (2018, USA)",
        imageUrl: "https://i.ytimg.com/vi/nSbzyEJ8X9E/hqdefault.jpg",
        rating: 8.2,
        trailerId: "nSbzyEJ8X9E"
      },
      {
        title: "To All the Boys I’ve Loved Before (2018, USA)",
        imageUrl: "https://i.ytimg.com/vi/555oiY9RWM4/hqdefault.jpg",
        rating: 7.3,
        trailerId: "555oiY9RWM4"
      },
      {
        title: "Purple Hearts (2022, USA)",
        imageUrl: "https://i.ytimg.com/vi/WTLgg8oRSBE/hqdefault.jpg",
        rating: 6.9,
        trailerId: "WTLgg8oRSBE"
      },
      {
        title: "Always Be My Maybe (2019, USA)",
        imageUrl: "https://i.ytimg.com/vi/iHBcWHY9lN4/hqdefault.jpg",
        rating: 7.0,
        trailerId: "iHBcWHY9lN4"
      },
      {
        title: "Happiest Season (2020, USA)",
        imageUrl: "https://i.ytimg.com/vi/h58HkQV1gHY/hqdefault.jpg",
        rating: 7.1,
        trailerId: "h58HkQV1gHY"
      },
      {
        title: "Last Christmas (2019, UK/USA)",
        imageUrl: "https://i.ytimg.com/vi/z9CEIcmWmtA/hqdefault.jpg",
        rating: 7.0,
        trailerId: "z9CEIcmWmtA"
      }
    ],
  };

  // --- Function to Generate a Large Database from Samples ---
  function generateFullDatabase(samples, targetCount) {
    const fullDb = [];
    const genres = Object.keys(samples);

    genres.forEach(genre => {
      const genreSamples = samples[genre];
      // for (let i = 0; i < targetCount; i++) {
      for (let i = 0; i < genreSamples.length; i++) {
        const movie = genreSamples[i % genreSamples.length];
        fullDb.push({ ...movie, genre });
      }
    });
    return fullDb;
  }

  const fullMovieDatabase = generateFullDatabase(movieSamples, 10);

  // --- DOM Elements ---
  const movieGrid = document.getElementById('movie-grid');
  const recommendationHeading = document.getElementById('recommendation-heading');
  const modal = document.getElementById('preview-modal');
  const videoPlayer = document.getElementById('video-player');
  const closeButton = document.querySelector('.close-button');

  // --- Main Function to Filter and Render Movies ---
  function displayRecommendedMovies() {
    const screenWidth = window.innerWidth;
    let recommendedGenres = [];
    let recommendationType = '';

    if (screenWidth >= 200 && screenWidth <= 500) {
      recommendationType = 'Comedy';
      recommendedGenres = ['Comedy'];
    } else if (screenWidth > 500 && screenWidth <= 800) {
      recommendationType = 'Romance';
      recommendedGenres = ['Romance'];
    } else {
      recommendationType = 'Action & Drama';
      recommendedGenres = ['Action', 'Drama'];
    }

    const recommendedMovies = fullMovieDatabase.filter(movie => recommendedGenres.includes(movie.genre));

    movieGrid.innerHTML = '';
    recommendationHeading.textContent = `Top ${recommendationType} For Your Device`;

    recommendedMovies.forEach(movie => {
      const movieCard = document.createElement('div');
      movieCard.className = 'movie-card';

      const watchLink = `https://www.youtube.com/results?search_query=watch+${encodeURIComponent(movie.title)}+full+movie`;

      movieCard.innerHTML = `
                <div class="card-image-container">
                    <img src="${movie.imageUrl}" alt="${movie.title} Poster">
                </div>
                <div class="movie-info">
                    <h3 class="movie-title">${movie.title}</h3>
                    <div class="movie-meta">
                        <span class="movie-rating">⭐ ${movie.rating}</span>
                        <span class="movie-genre">${movie.genre}</span>
                    </div>
                    <div class="card-buttons">
                        <button class="card-btn preview-btn" data-trailerid="${movie.trailerId}">Preview</button>
                        <a href="${watchLink}" target="_blank" class="card-btn watch-btn">Watch Now</a>
                    </div>
                </div>
            `;
      movieGrid.appendChild(movieCard);
    });
  }

  // --- Modal Functionality ---
  function openModal(trailerId) {
    videoPlayer.src = `https://www.youtube.com/embed/${trailerId}?autoplay=1`;
    modal.style.display = 'block';
  }

  function closeModal() {
    modal.style.display = 'none';
    videoPlayer.src = ''; // Stop the video
  }

  // Event listener for preview buttons
  movieGrid.addEventListener('click', (event) => {
    if (event.target.classList.contains('preview-btn')) {
      const trailerId = event.target.dataset.trailerid;
      if (trailerId) {
        openModal(trailerId);
      }
    }
  });

  closeButton.addEventListener('click', closeModal);
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  // --- Initial Load and Resize Listener ---
  displayRecommendedMovies();
  window.addEventListener('resize', displayRecommendedMovies);
});



// Select elements
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.close-btn');
const overlay = document.querySelector('.overlay');

// Open menu
hamburger.addEventListener('click', () => {
  mobileMenu.classList.add('active');
  overlay.classList.add('active');
});

// Close menu
closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  overlay.classList.remove('active');
});

// Close when clicking overlay
overlay.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  overlay.classList.remove('active');
});

