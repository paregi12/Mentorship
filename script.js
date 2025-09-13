// Get forms
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

// Show/Hide toggle for forms
document.getElementById('showSignup').addEventListener('click', () => {
  loginForm.classList.add('hidden');
  signupForm.classList.remove('hidden');
});

document.getElementById('showLogin').addEventListener('click', () => {
  signupForm.classList.add('hidden');
  loginForm.classList.remove('hidden');
});

// Demo user list (in memory for demo only)
let users = [
  { email: "student@example.com", password: "123456", name: "Demo Student" }
];

// ---------------- LOGIN ----------------
loginForm.addEventListener('submit', (e) => {
  e.preventDefault(); // prevent form submission
  const email = loginForm.querySelector('input[type="email"]').value;
  const password = loginForm.querySelector('input[type="password"]').value;

  // Check if user exists
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    alert(`Login successful! Welcome, ${user.name}`);
    window.location.href = "dashboard.html"; // redirect to dashboard
  } else {
    alert("Invalid email or password!");
  }
});

// ---------------- SIGNUP ----------------
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = signupForm.querySelector('input[type="text"]').value;
  const email = signupForm.querySelector('input[type="email"]').value;
  const password = signupForm.querySelector('input[type="password"]').value;

  // Check if user already exists
  const userExists = users.find(u => u.email === email);

  if (userExists) {
    alert("User already exists! Please login.");
    signupForm.reset();
  } else {
    users.push({ email, password, name });
    alert("Signup successful! You can now login.");
    signupForm.reset();
    signupForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
  }
});
