let cookieCounter = document.querySelector('.cookie-counter');
let cookieCount = parseInt(cookieCounter.textContent);
let cookieEarned = cookieCount;

function updateCookieCounter() {
  cookieCounter.textContent = cookieCount.toLocaleString();
}

function earnCookie() {
  cookieCount += cookieEarned;
  updateCookieCounter();
}

document.querySelector('.click-button').addEventListener('click', earnCookie);

document.querySelectorAll('.upgrade-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    // Implement upgrade logic here
    console.log('Upgrade purchased!');
    // Update cookie earned amount
    cookieEarned++;
    earnCookie();
    updateCookieCounter();
    // Update upgrade button text
    btn.textContent = `+${cookieEarned} cookies per click`;
    // Add more upgrade logic as needed
});
