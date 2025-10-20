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


const articles = [
  {
    title: "Áramszünet a 3. sugárúton",
    text: "Este 8-kor sötétségbe borult egy teljes blokk. Javítás 3 órán belül történt.",
    link: "cikk1.html"
  },
  {
    title: "Híd alól került elő egy tárca",
    text: "Benne 320 dollár és egy buszbérlet. Tulajdonosát keresik.",
    link: "cikk2.html"
  },
  {
    title: "Rágcsálóinvázió a 138. utcán",
    text: "Hét patkányt láttak napfényben. Lakók aláírásgyűjtésbe kezdtek.",
    link: "cikk3.html"
  },
  {
    title: "UFO-jelentés Bronx felett",
    text: "Ismét fényeket láttak a stadion fölött. Katonaság hallgat.",
    link: "ufo.html" // Például egy UFO-cikk külön oldalon
  },
  // stb.
];


const articles = [
  {
    title: "Áramszünet a 3. sugárúton",
    text: "Este 8-kor sötétségbe borult egy teljes blokk. Javítás 3 órán belül történt.",
    link: "cikk-aramszunet.html"
  },
  {
    title: "Híd alól került elő egy tárca",
    text: "Benne 320 dollár és egy buszbérlet. Tulajdonosát keresik.",
    link: "cikk-tarca.html"
  },
  {
    title: "Rágcsálóinvázió a 138. utcán",
    text: "Hét patkányt láttak napfényben. Lakók aláírásgyűjtésbe kezdtek.",
    link: "cikk-patkany.html"
  },
  {
    title: "UFO Bronx felett",
    text: "Ismét fényeket láttak az egyik utca fölött. Katonaság hallgat.",
    link: "cikk-ufo.html"
  },
  {
    title: "Új könyvtár nyílt a Mott Havenben",
    text: "Retro olvasószoba, kazettás szekcióval. Hétfőtől nyitva.",
    link: "cikk-konyvtar.html"
  },
  {
    title: "Faxóra díjat nyert",
    text: "A helyi diák szerkezete továbbjutott állami versenyen.",
    link: "cikk-faxora.html"
  },
  // ... stb. (folytasd a többit is ugyanígy)
];
