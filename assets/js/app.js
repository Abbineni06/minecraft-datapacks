/**
 * Minecraft Datapack Studio — Storefront & Commissioning Engine
 */

const DATAPACKS = [
  {
    id: "jumploot-op",
    title: "JumpLoot OP — MAX LEVEL",
    icon: "🦘",
    category: "op",
    badge: "Extreme OP",
    badgeClass: "badge-op",
    version: "26.2 & 1.21+",
    fileSize: "26 KB",
    downloads: 1420,
    price: "Free / $4.99 Support",
    fileUrl: "./downloads/JumpLoot_OP_MAX.zip",
    shortDesc: "Award over-enchanted god items on genuine jumps (Sharpness 255, Protection 255, Titan Mace, Voidbreaker Sword).",
    features: [
      "Genuine jump detection algorithm (no continuous airborne trigger)",
      "Mode A (Survival Max) & Mode B (Beyond-Survival 255 Enchants)",
      "Custom named gear: Voidbreaker Sword, Solar Pickaxe, Titan Mace, Dragonheart Armor",
      "Actionbar HUD notification, sounds, and particle bursts on jump",
      "Configurable jump cooldown & safe mode protection"
    ],
    commands: [
      "/function jumploot:load — Re-initialize pack",
      "/function jumploot:admin/give_titan_mace — Give Titan Mace",
      "/function jumploot:admin/give_voidbreaker — Give Voidbreaker Sword"
    ]
  },
  {
    id: "autosort-pro",
    title: "AutoSort Pro",
    icon: "⚡",
    category: "utility",
    badge: "One-Click Utility",
    badgeClass: "badge-utility",
    version: "26.2 & 1.21+",
    fileSize: "187 KB",
    downloads: 980,
    price: "Free / $4.99 Support",
    fileUrl: "./downloads/AutoSort_Pro.zip",
    shortDesc: "One-click instant inventory organizer with 4 custom presets, Pocket Sorter right-click button, and lossless atomic swapping.",
    features: [
      "4 Custom Presets: 🗡️ Combat Ready, ⛏️ Mining Expedition, 🪵 Master Builder, 🧹 Clean & Organize",
      "⚡ Handheld Pocket Auto-Sort Button: Right-click anytime in survival to sort on the go",
      "Interactive tellraw chat GUI: /trigger as_trig_menu",
      "Auto-equips Shield/Totem to offhand & best armor to empty armor slots",
      "100% Lossless Atomic Swap: Shulker boxes, bundles & enchants fully preserved"
    ],
    commands: [
      "/trigger as_trig_sort — Instantly sort inventory",
      "/trigger as_trig_menu — Open preset control panel",
      "/trigger as_trig_btn — Claim Pocket Auto-Sort Button item"
    ]
  },
  {
    id: "evolution-sword",
    title: "Evolution Sword",
    icon: "⚔️",
    category: "combat",
    badge: "Living Weapon",
    badgeClass: "badge-combat",
    version: "26.2 & 1.21+",
    fileSize: "15 KB",
    downloads: 850,
    price: "Free / $4.99 Support",
    fileUrl: "./downloads/Evolution_Sword.zip",
    shortDesc: "A sentient blade that feeds on mob souls, evolving through 10 powerful tiers with scaling enchants and unique visuals.",
    features: [
      "10 distinct evolutionary stages (Stage I Awakening to Stage X Apex Blade)",
      "Live Actionbar HUD tracking kills required for next evolution threshold",
      "Progression enchants: Sharpness XXV, Looting X, Fire Aspect X, Unbreaking CCLV",
      "Custom particle aura and sound fanfare on each evolution rank-up",
      "Survival-friendly player claim trigger: /trigger evo_give"
    ],
    commands: [
      "/trigger evo_give — Claim/equip your Evolution Sword",
      "/trigger evo_menu — Display sword evolution stats",
      "/function evo_sword:admin/set_stage_10 — Admin max level"
    ]
  },
  {
    id: "four-elements",
    title: "Four Elements",
    icon: "🔮",
    category: "magic",
    badge: "Active Relics",
    badgeClass: "badge-magic",
    version: "26.2 & 1.21+",
    fileSize: "10 KB",
    downloads: 720,
    price: "Free / $4.99 Support",
    fileUrl: "./downloads/Four_Elements.zip",
    shortDesc: "Wield 4 legendary elemental relics (Fire, Ice, Lightning, Earth) with active right-click spellcasting and cooldown timers.",
    features: [
      "🔥 Inferno Catalyst: 7-block flame blast immolating nearby enemies",
      "❄️ Glacial Scepter: Freezes foes and grants Ice Shield (Resistance II)",
      "⚡ Thunderstrike Rod: Strikes up to 3 nearby hostiles with chain lightning",
      "🌍 Terra Core: Detonates ground shockwave knocking up enemies + Absorption II",
      "Right-click activation system with independent cooldown trackers"
    ],
    commands: [
      "/trigger fe_menu — Open Elemental Relic selector",
      "/function four_elements:admin/give_fire — Give Inferno Catalyst",
      "/function four_elements:admin/give_ice — Give Glacial Scepter"
    ]
  },
  {
    id: "cursed-blocks",
    title: "Cursed Blocks",
    icon: "⛏️",
    category: "survival",
    badge: "High-Stakes",
    badgeClass: "badge-combat",
    version: "26.2 & 1.21+",
    fileSize: "9 KB",
    downloads: 640,
    price: "Free / $4.99 Support",
    fileUrl: "./downloads/Cursed_Blocks.zip",
    shortDesc: "Mining key ores triggers unpredictable events: treasure rewards, hazardous traps, mob swarms, and the Crypt Guardian boss.",
    features: [
      "20% event trigger chance when mining Stone, Deepslate, Coal, Iron, Gold, Diamond, Debris",
      "🎁 Rewards (40%): Ancient Debris, Totems of Undying, Diamonds, XP Bottles",
      "⚠️ Hazards (30%): Cave-ins, silverfish swarms, TNT ignition, blindness",
      "👹 Mini-Boss (10%): Summons the 100 HP Crypt Guardian with elite rewards",
      "Configurable safe-mode toggle to protect player builds"
    ],
    commands: [
      "/trigger cb_menu — Open Cursed Blocks settings",
      "/function cursed_blocks:admin/toggle_safe_mode — Toggle safe mode",
      "/function cursed_blocks:admin/set_chance_50 — Set 50% chance"
    ]
  },
  {
    id: "reality-gauntlet",
    title: "Reality Gauntlet",
    icon: "🌌",
    category: "magic",
    badge: "Cosmic Ultimate",
    badgeClass: "badge-magic",
    version: "26.2 & 1.21+",
    fileSize: "13 KB",
    downloads: 910,
    price: "Free / $4.99 Support",
    fileUrl: "./downloads/Reality_Gauntlet.zip",
    shortDesc: "Hunt 6 cosmic gems to unlock reality-warping abilities. Gather all six to perform the universe-shattering Cosmic Snap.",
    features: [
      "6 Cosmic Gems: Space (Blink), Time (6s Stasis), Reality (Projectile Transmute), Power (Kinetic Beam), Mind (Confusion Wave), Soul (Life Drain)",
      "The Reality Gauntlet: Active socketing and weapon integration",
      "⚡ The Cosmic Snap: Instantly disintegrates 50% of hostiles in a 64-block radius",
      "Grand particle vortex and apocalyptic sound design",
      "Non-OP inspection trigger: /trigger rg_menu"
    ],
    commands: [
      "/trigger rg_menu — Inspect gathered gems",
      "/function reality_gauntlet:admin/give_all_gems — Give all 6 gems",
      "/function reality_gauntlet:admin/give_gauntlet — Give Gauntlet"
    ]
  },
  {
    id: "mystery-roulette",
    title: "Mystery Roulette",
    icon: "🎲",
    category: "utility",
    badge: "Timed Chaos",
    badgeClass: "badge-utility",
    version: "26.2 & 1.21+",
    fileSize: "19 KB",
    downloads: 810,
    price: "Free / $4.99 Support",
    fileUrl: "./downloads/Mystery_Roulette.zip",
    shortDesc: "Automated timed fortune wheel (every 60s) granting 6 tiers of loot, from survival basics to mythic active relics.",
    features: [
      "Automated countdown timer with real-time actionbar display and audio pling countdown",
      "6 Tiers: Common (40%), Uncommon (25%), Rare (18%), Epic (10%), Legendary (5%), Mythic (2%)",
      "⚡ Orb of Thunder & Destruction: Calls down lightning barrage with Resistance IV + Strength IV",
      "🎰 Golden Jackpot Token: Instant bonus roll guaranteed Rare tier or higher",
      "5 speed presets (15s, 30s, 60s default, 120s, 300s) via /trigger mr_menu"
    ],
    commands: [
      "/trigger mr_menu — Open timer configuration",
      "/trigger mr_spin — Request instant personal spin",
      "/function mystery_roulette:admin/spin_now — Force server-wide spin"
    ]
  },
  {
    id: "master-studio",
    title: "Datapack Studio Bundle",
    icon: "👑",
    category: "bundle",
    badge: "Master Suite",
    badgeClass: "badge-bundle",
    version: "26.2 & 1.21+",
    fileSize: "195 KB",
    downloads: 1250,
    price: "$14.99 / Free Community",
    fileUrl: "./downloads/Minecraft_Datapack_Studio.zip",
    shortDesc: "The complete 5-datapack studio collection with full editable source code, test reports, and documentation.",
    features: [
      "Includes Evolution Sword, Four Elements, Cursed Blocks, Reality Gauntlet, and Mystery Roulette",
      "Master compatibility across Minecraft 1.21.1 through 26.3",
      "Zero namespace or scoreboard collisions (60 isolated objectives)",
      "Complete technical documentation, testing logs, and packaging scripts",
      "TLauncher macOS and Windows step-by-step setup guides"
    ],
    commands: [
      "/datapack list enabled — View all active packs",
      "/reload — Reload and verify all studio systems"
    ]
  }
];

// State
let activeCategory = "all";
let searchQuery = "";

// DOM Elements
document.addEventListener("DOMContentLoaded", () => {
  renderCards();
  setupFilterPills();
  setupSearch();
  setupCommissionForm();
  setupModals();
});

function renderCards() {
  const grid = document.getElementById("datapackGrid");
  if (!grid) return;

  const filtered = DATAPACKS.filter(pack => {
    const matchesCat = (activeCategory === "all") || (pack.category === activeCategory);
    const matchesSearch = pack.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          pack.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          pack.badge.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
        <p style="font-size: 1.2rem; margin-bottom: 0.5rem;">🔍 No datapacks found matching your search.</p>
        <button class="btn btn-secondary btn-sm" onclick="resetFilters()">Reset Filters</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(pack => `
    <div class="card" data-id="${pack.id}">
      <div>
        <div class="card-header">
          <div class="card-title">
            <span>${pack.icon}</span>
            <span>${pack.title}</span>
          </div>
          <span class="badge ${pack.badgeClass}">${pack.badge}</span>
        </div>
        <p class="card-desc">${pack.shortDesc}</p>
      </div>

      <div>
        <div class="card-meta">
          <span>📦 ${pack.fileSize}</span>
          <span>🎮 ${pack.version}</span>
          <span>⬇️ ${pack.downloads.toLocaleString()}</span>
        </div>

        <div class="card-actions">
          <a href="${pack.fileUrl}" class="btn btn-primary btn-sm" download onclick="trackDownload('${pack.title}')">
            ⬇️ Download
          </a>
          <button class="btn btn-secondary btn-sm" onclick="openDetailsModal('${pack.id}')">
            ℹ️ Details
          </button>
          <button class="btn btn-gold btn-sm" onclick="openBuyModal('${pack.id}')">
            💎 License
          </button>
        </div>
      </div>
    </div>
  `).join("");
}

function setupFilterPills() {
  const pills = document.querySelectorAll(".pill");
  pills.forEach(pill => {
    pill.addEventListener("click", () => {
      pills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      activeCategory = pill.getAttribute("data-category");
      renderCards();
    });
  });
}

function setupSearch() {
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim();
      renderCards();
    });
  }
}

function resetFilters() {
  activeCategory = "all";
  searchQuery = "";
  const searchInput = document.getElementById("searchInput");
  if (searchInput) searchInput.value = "";
  const pills = document.querySelectorAll(".pill");
  pills.forEach(p => p.classList.remove("active"));
  const allPill = document.querySelector('.pill[data-category="all"]');
  if (allPill) allPill.classList.add("active");
  renderCards();
}

function trackDownload(name) {
  showToast(`Starting download for ${name}...`);
}

// Modals
function setupModals() {
  const overlay = document.getElementById("modalOverlay");
  if (overlay) {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        closeModal();
      }
    });
  }
}

function closeModal() {
  const overlay = document.getElementById("modalOverlay");
  if (overlay) overlay.classList.remove("active");
}

function openDetailsModal(id) {
  const pack = DATAPACKS.find(p => p.id === id);
  if (!pack) return;

  const content = document.getElementById("modalContent");
  content.innerHTML = `
    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
      <h3 style="font-size: 1.5rem; display: flex; align-items: center; gap: 0.5rem;">
        <span>${pack.icon}</span> <span>${pack.title}</span>
      </h3>
      <span class="badge ${pack.badgeClass}">${pack.badge}</span>
    </div>
    
    <p style="color: var(--text-muted); margin-bottom: 1.25rem;">${pack.shortDesc}</p>
    
    <h4 style="font-size: 1rem; color: #fff; margin-bottom: 0.5rem;">Key Mechanics & Features:</h4>
    <ul style="margin-left: 1.25rem; color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1.25rem; display: flex; flex-direction: column; gap: 0.35rem;">
      ${pack.features.map(f => `<li>${f}</li>`).join("")}
    </ul>

    <h4 style="font-size: 1rem; color: #fff; margin-bottom: 0.5rem;">Command & Trigger Reference:</h4>
    <div class="code-box">
      ${pack.commands.join("<br>")}
    </div>

    <div style="display: flex; gap: 0.75rem; margin-top: 1.5rem;">
      <a href="${pack.fileUrl}" class="btn btn-primary" download onclick="trackDownload('${pack.title}')">
        ⬇️ Download .ZIP (${pack.fileSize})
      </a>
      <button class="btn btn-gold" onclick="openBuyModal('${pack.id}')">
        💎 Commercial License (${pack.price})
      </button>
    </div>
  `;

  document.getElementById("modalOverlay").classList.add("active");
}

function openBuyModal(id) {
  const pack = DATAPACKS.find(p => p.id === id);
  const packTitle = pack ? pack.title : "Custom Datapack";

  const content = document.getElementById("modalContent");
  content.innerHTML = `
    <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem;">💎 Commercial License & Supporter Access</h3>
    <p style="color: var(--text-muted); margin-bottom: 1.25rem;">
      Purchasing a license grants you rights to use <strong>${packTitle}</strong> on public SMP servers, monetized networks, and video content.
    </p>

    <div style="background: rgba(255,255,255,0.04); border: 1px solid var(--border-color); border-radius: 10px; padding: 1.25rem; margin-bottom: 1.5rem;">
      <div style="font-size: 1.1rem; font-weight: 700; color: #fff; margin-bottom: 0.25rem;">Server / Commercial License</div>
      <div style="font-size: 1.8rem; font-weight: 900; color: #f59e0b; margin-bottom: 0.75rem;">$14.99 <span style="font-size: 0.85rem; color: var(--text-dim); font-weight: 500;">One-time payment</span></div>
      <ul style="color: var(--text-muted); font-size: 0.88rem; display: flex; flex-direction: column; gap: 0.3rem;">
        <li>✓ Lifetime rights for unlimited player count</li>
        <li>✓ Full editable source code access</li>
        <li>✓ Priority developer discord support & bugfixes</li>
      </ul>
    </div>

    <h4 style="font-size: 0.95rem; margin-bottom: 0.75rem;">Choose Payment Method:</h4>
    <div style="display: flex; flex-direction: column; gap: 0.75rem;">
      <a href="https://paypal.me/SaikiranDatapacks/14.99" target="_blank" class="btn btn-primary" style="justify-content: center;">
        💳 Pay with PayPal ($14.99)
      </a>
      <a href="https://ko-fi.com/saikiran" target="_blank" class="btn btn-secondary" style="justify-content: center;">
        ☕ Buy via Ko-fi / Credit Card
      </a>
      <button class="btn btn-secondary" onclick="copyPaymentContact('${packTitle}')" style="justify-content: center;">
        📋 Contact for Custom Invoicing / Crypto
      </button>
    </div>
  `;

  document.getElementById("modalOverlay").classList.add("active");
}

function copyPaymentContact(packTitle) {
  const text = `Hi Saikiran, I want to purchase a commercial license for ${packTitle}. Please send payment invoice.`;
  navigator.clipboard.writeText(text);
  showToast("Inquiry copied to clipboard! Send to abbinenisaikiran75@gmail.com or Discord.");
}

// Commission Form
function setupCommissionForm() {
  const form = document.getElementById("commissionForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const clientName = document.getElementById("commName").value.trim();
    const contact = document.getElementById("commContact").value.trim();
    const packName = document.getElementById("commPackName").value.trim();
    const version = document.getElementById("commVersion").value;
    const budget = document.getElementById("commBudget").value;
    const description = document.getElementById("commDesc").value.trim();

    const orderText = `
=== 🚀 CUSTOM DATAPACK COMMISSION ORDER ===
Client: ${clientName}
Contact: ${contact}
Datapack Name: ${packName}
Target Minecraft Version: ${version}
Budget Range: ${budget}
Mechanics & Requirements:
${description}
==========================================
    `.trim();

    // Store in localStorage
    const saved = JSON.parse(localStorage.getItem("datapack_orders") || "[]");
    saved.push({ clientName, contact, packName, version, budget, description, date: new Date().toISOString() });
    localStorage.setItem("datapack_orders", JSON.stringify(saved));

    // Open mailto link
    const mailtoUrl = `mailto:abbinenisaikiran75@gmail.com?subject=${encodeURIComponent("Custom Datapack Request: " + packName)}&body=${encodeURIComponent(orderText)}`;
    window.location.href = mailtoUrl;

    // Copy to clipboard for Discord
    navigator.clipboard.writeText(orderText);
    showToast("Request generated! Pre-filled email opened & order copied to clipboard for Discord.");
  });
}

function copyDiscordOrder() {
  const clientName = document.getElementById("commName").value.trim() || "[Your Name]";
  const contact = document.getElementById("commContact").value.trim() || "[Your Discord]";
  const packName = document.getElementById("commPackName").value.trim() || "[Datapack Idea]";
  const version = document.getElementById("commVersion").value;
  const budget = document.getElementById("commBudget").value;
  const description = document.getElementById("commDesc").value.trim() || "[Detailed Requirements]";

  const discordFormatted = `
**📋 NEW DATAPACK COMMISSION INQUIRY**
> **Client:** ${clientName} (${contact})
> **Project:** ${packName}
> **Target Version:** ${version}
> **Budget:** ${budget}
> **Specifications:**
\`\`\`
${description}
\`\`\`
  `.trim();

  navigator.clipboard.writeText(discordFormatted);
  showToast("Formatted Discord order copied to clipboard!");
}

// Toast Notification
function showToast(msg) {
  let toast = document.getElementById("appToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "appToast";
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span>✨</span><span>${msg}</span>`;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 4000);
}
