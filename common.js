const $ = (s) => document.querySelector(s);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
const initials = (n) => n.split(/\s+/).map((w) => w[0]).join("").slice(0, 2).toUpperCase();
const bauble = (s) => `<div class="bauble">${s.logo ? `<img class="${s.logoFit === "contain" ? "fit" : ""}" src="${esc(s.logo)}" alt="${esc(s.name)} logo">` : `<span class="initials" aria-hidden="true">${esc(initials(s.name))}</span>`}</div>`;
const COLORS = ["#b8283c", "#e6b450", "#3fb8af", "#f07a24", "#8a4fd1", "#ff6fa5", "#4fb38a"];
const pick = (i) => COLORS[i % COLORS.length];

// string lights across the top of the page
const garland = () => `<div class="garland" aria-hidden="true"><div class="lights">${"<span></span>".repeat(Math.ceil(innerWidth / 70))}</div></div>`;

