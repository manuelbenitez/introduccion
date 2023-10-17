function printName(name) {
  console.log(name);
}

function fetchUserInfo() {
  fetch(PROCESS.env.URL_BD, { apiKey: PROCESS.env.API_KEY });
}
