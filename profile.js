// ==============================
// AUTHENTICATION SYSTEM
// ==============================

// 🔹 Sign Up (save user details in localStorage)
function signUp() {
  const name = document.getElementById("signupName").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  if (!name || !email || !password) {
    alert("Please fill all fields");
    return;
  }

  const user = { name, email, password };
  localStorage.setItem("user", JSON.stringify(user)); // save account
  alert("✅ Account created! Please log in.");
  window.location.href = "signIn.html"; // go to login page
}
// 🔹 Login (check credentials, create a session)
function login() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const storedUser = JSON.parse(localStorage.getItem("user"));
 
  // Prevent login if account was deleted
const savedEmail = localStorage.getItem("userEmail");
const savedPassword = localStorage.getItem("userPassword");

if (!savedEmail || !savedPassword) {
  alert("No account found. Please register first.");
  window.location.href = "register.html";
  return; // stop login process
}


  if (storedUser && storedUser.email === email && storedUser.password === password) {
    sessionStorage.setItem("loggedInUser", JSON.stringify(storedUser)); // create session
    alert("✅ Login successful!");
    window.location.href = "exclusive.html"; // go to exclusive movies page
  } else {
    alert("❌ Invalid email or password");
  }
}

// 🔹 Logout (clear session)
function logout() {
  sessionStorage.removeItem("loggedInUser");
  alert("✅ Logged out successfully!");
  window.location.href = "index.html"; // back to landing page
}
// 🔹 Protect restricted pages (movies & profile)
function protectPage() {
  const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
  if (!loggedInUser) {
    alert("❌ You must log in first!");
    window.location.href = "signIn.html";
  }
}

// 🔹 Load profile info
function loadProfile() {
  const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
  if (loggedInUser) {
    document.getElementById("profileName").innerText = loggedInUser.name;
    document.getElementById("profileEmail").innerText = loggedInUser.email;
    pf_loadImage();
    pf_bindImageControls();
  }
}

// Store image per user using their email
function pf_imageKey() {
  const u = JSON.parse(sessionStorage.getItem('loggedInUser'));
  return u ? `profileImage:${u.email}` : null;
}

// Load image into <img id="pfImage">
function pf_loadImage() {
  const key = pf_imageKey();
  const img = document.getElementById('pfImage');
  if (!img || !key) return;
  const dataUrl = localStorage.getItem(key);
  img.src = dataUrl || 'https://via.placeholder.com/140?text=Profile';
}

// Wire up Upload + Remove buttons
function pf_bindImageControls() {
  const upload = document.getElementById('pfUpload');
  const removeBtn = document.getElementById('pfRemove');

  if (upload) {
    upload.addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        const key = pf_imageKey();
        if (!key) return;
        localStorage.setItem(key, ev.target.result); // latest replaces old
        pf_loadImage();
      };
      reader.readAsDataURL(file);
      // input is hidden via label; no need to reset value
    });
  }

  if (removeBtn) {
    removeBtn.addEventListener('click', () => {
      const key = pf_imageKey();
      if (!key) return;
      localStorage.removeItem(key);
      pf_loadImage();
    });
  }
}

/** 
// DELETE ACCOUNT FEATURE
const deleteBtn = document.getElementById("deleteAccountBtn");

if (deleteBtn) {
  deleteBtn.addEventListener("click", function () {
    if (confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      // Remove account info from localStorage
      localStorage.removeItem("userEmail");
      localStorage.removeItem("userPassword");
      localStorage.removeItem("username");
      localStorage.removeItem("profileImage"); 
      localStorage.removeItem("isLoggedIn");

      alert("Your account has been deleted.");

      // Send them back to register page
      window.location.href = "register.html"; // change if your register file has a different name
    }
  });
}
*/ 

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