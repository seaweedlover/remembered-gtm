async function insertTableRow(emailAddress) {
  if (!emailAddress) {
    return;
  }

  /* Table Being used is on page: https://coda.io/d/_dIn5QMLAoCF/Landing-Page-Sign-Ups_suucR */
  const endpoint = new URL(
    `https://coda.io/apis/v1/docs/In5QMLAoCF/tables/grid-EWkwkvROeO/rows`
  );
}

function getOS() {
  var userAgent = window.navigator.userAgent,
    platform = window.navigator.platform,
    macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K', 'Darwin'],
    windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
    iosPlatforms = ['iPhone', 'iPad', 'iPod'],
    os = null;

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = 'MacOS';
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = 'iOS';
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = 'Windows';
  } else if (/Android/.test(userAgent)) {
    os = 'Android';
  } else if (!os && /Linux/.test(platform)) {
    os = 'Linux';
  }

  return os;
}

function downloadURI(uri, name) {
  var link = document.createElement('a');
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  delete link;
}

function downloadApp() {
  const detectedOS = getOS();

  if (
    (detectedOS === null) |
    (detectedOS === 'Linux') |
    (detectedOS === 'iOS') |
    (detectedOS === 'Android')
  ) {
    scrollTo('sign-up-anchor');
  } else if (detectedOS === 'MacOS') {
    toggleDropdown();
  } else if (detectedOS === 'Windows') {
    downloadURI(
      'assets/apps/Remembered-0.1.0-x64.dmg',
      'Remembered-0.1.0-x64.dmg'
    );
  }

  console.log('detectedOS:', detectedOS);
}

function scrollTo(hash) {
  location.hash = '#' + hash;
}

function toggleDropdown() {
  document.getElementById('dropdown-menu').classList.toggle('show');
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
  if (!e.target.matches('dropdown-button')) {
    var myDropdown = document.getElementById('dropdown-menu');
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
};
