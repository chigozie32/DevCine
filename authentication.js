
// AUTHENTICATION SYSTEM
//  Sign Up (save user details in localStorage)
function signUp() {
  const name = document.getElementById("signupName").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  if (!name || !email || !password) {
    alert("Please fill all fields!");
    return;
  }

  const user = { name, email, password };
  localStorage.setItem("user", JSON.stringify(user)); // save account
  alert("✔️ Account created! Please log in.");
  window.location.href = "signIn.html"; // go to login page
}

//  Login (check credentials, create a session)
function login() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (storedUser && storedUser.email === email && storedUser.password === password) {
    sessionStorage.setItem("loggedInUser", JSON.stringify(storedUser)); // create session
    alert("✔️ Login successful!");
    window.location.href = "index.html"; // go to exclusive movies page
    return;
  } else {
    alert("❌ Invalid email or password");
  }
}

// Logout (clear session)
function logout() {
  sessionStorage.removeItem("loggedInUser");
  alert("✔️ Logged out successfully!");
  window.location.href = "index.html"; // back to landing page
}

// Protect restricted pages (movies & profile)
function protectPage() {
  const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
  if (!loggedInUser) {
    alert("❌ You must log in first!");
    window.location.href = "signIn.html";
  }
}

//Load profile info
function loadProfile() {
  const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
  if (loggedInUser) {
    document.getElementById("profileName").innerText = loggedInUser.name;
    document.getElementById("profileEmail").innerText = loggedInUser.email;
  }
}