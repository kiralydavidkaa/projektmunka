// Felhasználók kezelése egyszerűen localStorage-ban
function getUsers() {
  const usersJSON = localStorage.getItem('users');
  return usersJSON ? JSON.parse(usersJSON) : {};
}
function saveUsers(users) {
  localStorage.setItem('users', JSON.stringify(users));
}

// Regisztráció
document.getElementById('registerSubmit').onclick = () => {
  const username = document.getElementById('regUser').value.trim();
  const password = document.getElementById('regPass').value;

  if (!username || !password) {
    alert('Kérlek, töltsd ki mindkét mezőt!');
    return;
  }

  let users = getUsers();
  if (users[username]) {
    alert('Ez a felhasználónév már foglalt.');
    return;
  }

  users[username] = password;
  saveUsers(users);
  alert('Sikeres regisztráció! Most bejelentkezhetsz.');
  // Átváltás bejelentkező modalra
  registerModal.classList.remove('active');
  loginModal.classList.add('active');
  // Kitörlés mezőkből
  document.getElementById('regUser').value = '';
  document.getElementById('regPass').value = '';
};

// Bejelentkezés
document.getElementById('loginSubmit').onclick = () => {
  const username = document.getElementById('loginUser').value.trim();
  const password = document.getElementById('loginPass').value;

  if (!username || !password) {
    alert('Kérlek, töltsd ki mindkét mezőt!');
    return;
  }

  let users = getUsers();
  if (users[username] && users[username] === password) {
    alert(`Üdvözlünk, ${username}! Sikeresen bejelentkeztél.`);
    closeModals();
    // Itt lehetne további UI változtatás, pl. auth box módosítása stb.
  } else {
    alert('Hibás felhasználónév vagy jelszó.');
  }
};
