
const VISITOR_API = "https://api.lior-cv.tal-handassa.com/visitors";

const DEDUP_WINDOW_MS = 24 * 60 * 60 * 1000; // 24 h
const STORAGE_KEY = "resumeLastCounted";     



/**
 * Decide whether this browser should increment the counter.
 * Returns true if the last POST was more than DEDUP_WINDOW_MS ago.
 */
function shouldCountVisit() {
  const last = localStorage.getItem(STORAGE_KEY);
  const now  = Date.now();

  if (!last || now - parseInt(last, 10) > DEDUP_WINDOW_MS) {
    localStorage.setItem(STORAGE_KEY, now.toString());
    return true;              
  }
  return false;               
}


/**
 * Fetch the visitor count (POST to increment once per 24 h, GET otherwise).
 */
async function updateVisitorCount() {
  try {
    const method = shouldCountVisit() ? "POST" : "GET";
    const res    = await fetch(VISITOR_API, { method });
    const data   = await res.json();
    document.getElementById("visitor-count").textContent = data.visitors;
  } catch (err) {
    console.error("Visitor counter error:", err);
    document.getElementById("visitor-count").textContent = "—";
  }
}


/**
 * Footer year helper.
 */
function setCurrentYear() {
  const span = document.getElementById("year");
  if (span) span.textContent = new Date().getFullYear();
}


/**
 * Run once the DOM is ready.
 */
document.addEventListener("DOMContentLoaded", () => {
  setCurrentYear();
  updateVisitorCount();
});
















console.log(
  '%c Lior Tal CV 🚀 ',
  'font-family: monospace; ' +
  'font-size: 24px; ' +
  'color: #fff; ' +
  'background: linear-gradient(45deg, #ff6b6b, #f7d794, #63cdda); ' +
  'padding: 8px 16px; ' +
  'border: 3px dashed #334756; ' +
  'border-radius: 12px; ' +
  'text-shadow: 2px 2px 4px rgba(0,0,0,0.5);'
);


;(function(){
  // 1) Konami code listener
  const konami = [38,38,40,40,37,39,37,39,66,65];
  let pos = 0;

  document.addEventListener('keydown', e => {
    if (e.keyCode === konami[pos]) {
      pos++;
      if (pos === konami.length) { 
        showEgg();
        pos = 0;
      }
    } else {
      pos = 0;
    }
  });

  // 2) The Easter egg
  function showEgg() {
    console.clear();

    // Big header
    console.log(
      '%c🐰 Secret Bunny Unleashed! 🐰',
      'font-size:24px; font-weight:bold; color:#fff; background:linear-gradient(90deg, #f72585, #7209b7); padding:8px 16px; border-radius:8px; text-shadow:2px 2px 4px rgba(0,0,0,0.5);'
    );

    // ASCII art
    const art = [
      '        (\\_/)',
      '        ( •_•)',
      '       / >🥕'
    ];
    const palette = ['#ff006e','#fb5607','#ffbe0b','#8338ec','#3a86ff'];
    art.forEach((line,i) => {
      console.log(
        `%c${line}`,
        `color: ${palette[i % palette.length]}; font-size:16px;`
      );
    });

    // Footer message
    console.log(
      '%c🥳 You cracked it! LIOR TAL EASTER EGG! 🥳',
      'font-size:16px; font-style:italic; color:#06d6a0;'
    );
  }

  // 3) Hint for curious devs
  console.log(
    '%c👀 Psst… try typing the Konami code (↑↑↓↓←→←→BA) on your keyboard!',
    'color:#ffd166; font-size:13px;'
  );
  
})();

;(function(){
  const secret = ['s','h','i','m','i'];
  let buffer = [];

  document.addEventListener('keydown', e => {
    buffer.push(e.key.toLowerCase());
    if (buffer.slice(-secret.length).join('') === secret.join('')) {
      showShimi();
      buffer = [];
    }
    // keep buffer reasonably small
    if (buffer.length > 20) buffer.shift();
  });

  function showShimi() {
    console.clear();

    // Header
    console.log(
      '%c🐶 Meet Shimi the DevOps Chihuahua 🐶',
      'font-size:24px; font-weight:bold; color:#fff; ' +
      'background:linear-gradient(90deg, #ff9a9e, #fad0c4); ' +
      'padding:8px 16px; border-radius:8px;'
    );

    // ASCII art
    const art = [
      '      /^ ^\\',
      "     / 0 0 \\",
      '     V\\ Y /V',
      '      / - \\',
      '      |    \\',
      '      || (__V'
    ];
    const colors = ['#ff6f61','#ffcc5c','#88d8b0','#96ceb4','#ffeead'];
    art.forEach((line, i) => {
      console.log(
        `%c${line}`,
        `color: ${colors[i % colors.length]}; font-family:monospace; font-size:14px;`
      );
    });

    // Footer
    console.log(
      '%c🐾 Shimi says: “WOOF! I love Arad shawarma! and some Jenkins beef” 🐾',
      'font-size:16px; font-style:italic; color:#6a4c93;'
    );
  }

  // Hint
  console.log(
    '%c🔍 Tip: type “SHIMI” to see a surprise!(NOT in the console)',
    'color:#2a9d8f; font-size:13px;'
  );
})();