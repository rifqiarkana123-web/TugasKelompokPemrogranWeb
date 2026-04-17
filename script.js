console.log("JS KELOAD");

document.addEventListener("DOMContentLoaded", () => {
  const $ = (id) => document.getElementById(id);
  const body = document.body;
  const params = new URLSearchParams(window.location.search);
  const selectedLevel = params.get("level");

  const startScreen = $("startScreen");
  const loadingScreen = $("loadingScreen");
  const appScreen = $("appScreen");
  const startBtn = $("startBtn");
  const previewVoiceBtn = $("previewVoiceBtn");
  const restartAppBtn = $("restartAppBtn");
  const loadingBar = $("loadingBar");
  const loadingText = $("loadingText");
  const confettiCanvas = $("confettiCanvas");
  const appTitle = $("appTitle");
  const appSubtitle = $("appSubtitle");
  const levelBadge = $("levelBadge");
  const gamePanel = $("gamePanel");

  const tabs = document.querySelectorAll(".tab-btn");
  const tabPanels = document.querySelectorAll(".tab-panel");

  const roundNow = $("roundNow");
  const roundTotal = $("roundTotal");
  const scoreValue = $("scoreValue");
  const questionEmoji = $("questionEmoji");
  const questionHint = $("questionHint");
  const choicesContainer = $("choicesContainer");
  const gameFeedback = $("gameFeedback");
  const nextQuestionBtn = $("nextQuestionBtn");
  const repeatQuestionBtn = $("repeatQuestionBtn");
  const starsRow = $("starsRow");

  const cluePanel = $("cluePanel");
  const clueTitle = $("clueTitle");
  const clueText = $("clueText");
  const speakClueBtn = $("speakClueBtn");

  const alphaDetailPanel = $("alphaDetailPanel");
  const alphabetPanelTitle = $("alphabetPanelTitle");
  const alphabetPanelDesc = $("alphabetPanelDesc");
  const assistantVoiceBtn = $("assistantVoiceBtn");

  const numberDetailPanel = $("numberDetailPanel");
  const numberPanelTitle = $("numberPanelTitle");
  const numberPanelDesc = $("numberPanelDesc");
  const numberObjects = $("numberObjects");

  const alphabetVoiceBtn = $("alphabetVoiceBtn");
  const speakAlphabetBtn = $("speakAlphabetBtn");
  const numberVoiceBtn = $("numberVoiceBtn");

  const alphabetGrid = $("alphabetGrid");
  const numberGrid = $("numberGrid");

  const alphabetData = [
    { letter: "A", word: "Apel", emoji: "🍎" },
    { letter: "B", word: "Bola", emoji: "⚽" },
    { letter: "C", word: "Cicak", emoji: "🦎" },
    { letter: "D", word: "Domba", emoji: "🐑" },
    { letter: "E", word: "Es krim", emoji: "🍦" },
    { letter: "F", word: "Foto", emoji: "📷" },
    { letter: "G", word: "Gajah", emoji: "🐘" },
    { letter: "H", word: "Helikopter", emoji: "🚁" },
    { letter: "I", word: "Ikan", emoji: "🐟" },
    { letter: "J", word: "Jeruk", emoji: "🍊" },
    { letter: "K", word: "Kelinci", emoji: "🐰" },
    { letter: "L", word: "Lilin", emoji: "🕯️" },
    { letter: "M", word: "Mangga", emoji: "🥭" },
    { letter: "N", word: "Nanas", emoji: "🍍" },
    { letter: "O", word: "Obor", emoji: "🔥" },
    { letter: "P", word: "Pesawat", emoji: "✈️" },
    { letter: "Q", word: "Qari", emoji: "📖" },
    { letter: "R", word: "Roti", emoji: "🍞" },
    { letter: "S", word: "Singa", emoji: "🦁" },
    { letter: "T", word: "Topi", emoji: "🎩" },
    { letter: "U", word: "Ulat", emoji: "🐛" },
    { letter: "V", word: "Van", emoji: "🚐" },
    { letter: "W", word: "Wortel", emoji: "🥕" },
    { letter: "X", word: "Xilofon", emoji: "🎼" },
    { letter: "Y", word: "Yo-yo", emoji: "🪀" },
    { letter: "Z", word: "Zebra", emoji: "🦓" },
  ];

  const numberData = [
    { number: 1, object: "⭐", name: "bintang" },
    { number: 2, object: "🍎", name: "apel" },
    { number: 3, object: "🎈", name: "balon" },
    { number: 4, object: "🐥", name: "anak ayam" },
    { number: 5, object: "🌼", name: "bunga" },
    { number: 6, object: "🍪", name: "kue" },
    { number: 7, object: "🚗", name: "mobil" },
    { number: 8, object: "⚽", name: "bola" },
    { number: 9, object: "🧁", name: "cupcake" },
    { number: 10, object: "🐠", name: "ikan" },
  ];

  const levelThemes = {
    hutan: {
      label: "Level 1 • Hutan Huruf",
      title: "Belajar Ceria - Hutan Huruf",
      subtitle: "Daun, hewan lucu, dan soal gampang buat mulai petualangan.",
      bodyClass: "theme-hutan",
      panelClass: "panel-hutan",
      musicMood: "forest",
      introVoice: "Selamat datang di Hutan Huruf. Yuk mulai petualangan hijau.",
      finishVoice: "Hutan Huruf selesai. Keren sekali.",
      unlocks: 2,
      data: [
        { emoji: "🍃🍎", answer: "A", choices: ["A", "H", "M"], phrase: "A untuk Apel", desc: "Di hutan ada apel merah. Huruf depannya A." },
        { emoji: "🐻", answer: "B", choices: ["B", "D", "R"], phrase: "B untuk Beruang", desc: "Beruang tinggal di hutan. Huruf depannya B." },
        { emoji: "🦌", answer: "R", choices: ["R", "K", "T"], phrase: "R untuk Rusa", desc: "Rusa lari di antara pohon. Huruf depannya R." },
        { emoji: "🌳🌳", answer: "2", choices: ["2", "3", "4"], phrase: "Ini angka dua", desc: "Ada dua pohon tinggi di jalan setapak." },
        { emoji: "🍄🍄🍄🍄", answer: "4", choices: ["4", "5", "6"], phrase: "Ini angka empat", desc: "Ada empat jamur dekat batu besar." },
        { emoji: "🦋🦋🦋🦋🦋", answer: "5", choices: ["5", "4", "7"], phrase: "Ini angka lima", desc: "Ada lima kupu-kupu terbang di hutan." },
      ],
    },
    sekolah: {
      label: "Level 2 • Sekolah Seru",
      title: "Belajar Ceria - Sekolah Seru",
      subtitle: "Masuk kelas, lihat benda sekitar, terus jawab dengan fokus.",
      bodyClass: "theme-sekolah",
      panelClass: "panel-sekolah",
      musicMood: "school",
      introVoice: "Masuk ke Sekolah Seru. Sekarang tantangannya naik ya.",
      finishVoice: "Sekolah Seru selesai. Hebat banget.",
      unlocks: 3,
      data: [
        { emoji: "📚", answer: "B", choices: ["B", "D", "P"], phrase: "B untuk Buku", desc: "Buku ada di meja kelas. Huruf depannya B." },
        { emoji: "✏️", answer: "P", choices: ["P", "T", "K"], phrase: "P untuk Pensil", desc: "Pensil dipakai buat menulis. Huruf depannya P." },
        { emoji: "🪑", answer: "K", choices: ["K", "M", "S"], phrase: "K untuk Kursi", desc: "Kursi ada di ruang belajar. Huruf depannya K." },
        { emoji: "🔔", answer: "L", choices: ["L", "B", "R"], phrase: "L untuk Lonceng", desc: "Lonceng sekolah bunyi saat istirahat. Huruf depannya L." },
        { emoji: "🚌🚌🚌🚌🚌🚌", answer: "6", choices: ["6", "5", "7"], phrase: "Ini angka enam", desc: "Ada enam bus kecil di halaman sekolah." },
        { emoji: "⚽⚽⚽⚽⚽⚽⚽⚽", answer: "8", choices: ["8", "6", "9"], phrase: "Ini angka delapan", desc: "Ada delapan bola di lapangan sekolah." },
      ],
    },
    angkasa: {
      label: "Level 3 • Luar Angkasa",
      title: "Belajar Ceria - Luar Angkasa",
      subtitle: "Planet, roket, dan bintang bikin level terakhir makin seru.",
      bodyClass: "theme-angkasa",
      panelClass: "panel-angkasa",
      musicMood: "space",
      introVoice: "Selamat datang di Luar Angkasa. Ini level terakhir.",
      finishVoice: "Luar Angkasa selesai. Kamu juara hari ini.",
      unlocks: 3,
      data: [
        { emoji: "🪐", answer: "P", choices: ["P", "S", "B"], phrase: "P untuk Planet", desc: "Planet berputar di angkasa. Huruf depannya P." },
        { emoji: "🚀", answer: "R", choices: ["R", "K", "T"], phrase: "R untuk Roket", desc: "Roket meluncur ke langit. Huruf depannya R." },
        { emoji: "🌟", answer: "B", choices: ["B", "G", "L"], phrase: "B untuk Bintang", desc: "Bintang bersinar terang di langit malam. Huruf depannya B." },
        { emoji: "🌕", answer: "B", choices: ["B", "L", "M"], phrase: "B untuk Bulan", desc: "Bulan terlihat bulat dan terang. Huruf depannya B." },
        { emoji: "🛰️ 🛰️ 🛰️ 🛰️ 🛰️", answer: "5", choices: ["5", "4", "6"], phrase: "Ini angka lima", desc: "Ada lima satelit mengelilingi bumi." },
        { emoji: "⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐", answer: "7", choices: ["7", "6", "8"], phrase: "Ini angka tujuh", desc: "Ada tujuh bintang di dekat roket." },
      ],
    },
  };

  const activeTheme = levelThemes[selectedLevel] || null;
  const gameData = activeTheme ? activeTheme.data : [];

  let currentIndex = 0;
  let score = 0;
  let locked = false;
  let selectedAlphabet = alphabetData[0];
  let selectedNumber = numberData[0];
  let speechReady = false;
  let audioCtx = null;
  let confettiPieces = [];
  let confettiFrame = null;
  let confettiCooldown = false;
  let cachedVoice = null;
  let speakTimer = null;
  let bgMusicNodes = [];
  let musicStarted = false;

  function initAudio() {
    if (!audioCtx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (AC) audioCtx = new AC();
    }
    if (audioCtx && audioCtx.state === "suspended") audioCtx.resume();
  }

  function playTone(type = "success") {
    initAudio();
    if (!audioCtx) return;
    const now = audioCtx.currentTime;
    const master = audioCtx.createGain();
    master.gain.value = 0.15;
    master.connect(audioCtx.destination);
    const tones = type === "success" ? [523.25, 659.25, 783.99] : [320, 260, 220];
    tones.forEach((freq, i) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = type === "success" ? "triangle" : "sine";
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.0001, now + i * 0.08);
      gain.gain.exponentialRampToValueAtTime(type === "success" ? 0.16 : 0.12, now + i * 0.08 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.08 + 0.18);
      osc.connect(gain);
      gain.connect(master);
      osc.start(now + i * 0.08);
      osc.stop(now + i * 0.08 + 0.2);
    });
  }

  function stopBackgroundMusic() {
    bgMusicNodes.forEach((node) => {
      try {
        if (node.stop) node.stop();
      } catch (e) {}
      try {
        node.disconnect?.();
      } catch (e) {}
    });
    bgMusicNodes = [];
  }

  function startBackgroundMusic(mood = "forest") {
    initAudio();
    if (!audioCtx) return;
    if (audioCtx.state === "suspended") {
      audioCtx.resume().catch(() => {});
    }
    stopBackgroundMusic();
    musicStarted = true;

    const now = audioCtx.currentTime;
    const master = audioCtx.createGain();
    master.gain.value = 0.6;
    master.connect(audioCtx.destination);
    bgMusicNodes.push(master);

    const moods = {
      forest: { freqs: [392, 440, 523.25, 587.33], wave: "triangle", bass: 196, pace: 0.9 },
      school: { freqs: [523.25, 587.33, 659.25, 783.99], wave: "square", bass: 261.63, pace: 0.72 },
      space: { freqs: [293.66, 369.99, 440, 554.37], wave: "sine", bass: 146.83, pace: 1.05 },
    };

    const config = moods[mood] || moods.forest;
    const loopLength = config.freqs.length * config.pace;

    const bassOsc = audioCtx.createOscillator();
    const bassGain = audioCtx.createGain();
    bassOsc.type = "sine";
    bassOsc.frequency.value = config.bass;
    bassGain.gain.value = mood === "space" ? 0.03 : 0.022;
    bassOsc.connect(bassGain);
    bassGain.connect(master);
    bassOsc.start(now);
    bgMusicNodes.push(bassOsc, bassGain);

    for (let cycle = 0; cycle < 24; cycle++) {
      config.freqs.forEach((freq, index) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        const startAt = now + cycle * loopLength + index * config.pace;
        const duration = config.pace * 0.78;
        osc.type = config.wave;
        osc.frequency.setValueAtTime(freq, startAt);
        gain.gain.setValueAtTime(0.0001, startAt);
        gain.gain.exponentialRampToValueAtTime(mood === "space" ? 0.12 : 0.1, startAt + 0.06);
        gain.gain.exponentialRampToValueAtTime(0.0001, startAt + duration);
        osc.connect(gain);
        gain.connect(master);
        osc.start(startAt);
        osc.stop(startAt + duration + 0.05);
        bgMusicNodes.push(osc, gain);
      });
    }
  }

  function ensureMusicStarts() {
    if (activeTheme && !musicStarted) startBackgroundMusic(activeTheme.musicMood);
  }


  function unlockSpeech() {
    if (!("speechSynthesis" in window) || speechReady) return;
    try {
      const warmup = new SpeechSynthesisUtterance("");
      warmup.volume = 0;
      window.speechSynthesis.speak(warmup);
      window.speechSynthesis.cancel();
      speechReady = true;
    } catch (e) {
      console.warn("Speech warmup gagal:", e);
    }
  }

  function findIndonesianVoice() {
    if (cachedVoice) return cachedVoice;
    const voices = window.speechSynthesis.getVoices();
    if (!voices.length) return null;
    cachedVoice =
      voices.find((v) => /id-ID/i.test(v.lang) && /Google|Microsoft|Siti|Female/i.test(v.name)) ||
      voices.find((v) => /id-ID/i.test(v.lang)) ||
      voices.find((v) => /id\b/i.test(v.lang)) ||
      voices.find((v) => /Indonesia/i.test(v.name)) ||
      voices[0] ||
      null;
    return cachedVoice;
  }

  function speakText(text) {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    if (speakTimer) clearTimeout(speakTimer);
    speakTimer = setTimeout(() => {
      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = "id-ID";
      utter.pitch = 1.2;
      utter.rate = 1.12;
      utter.volume = 1;
      const voice = findIndonesianVoice();
      if (voice) utter.voice = voice;
      window.speechSynthesis.speak(utter);
    }, 60);
  }

  if ("speechSynthesis" in window) {
    window.speechSynthesis.onvoiceschanged = () => {
      cachedVoice = null;
      findIndonesianVoice();
    };
    findIndonesianVoice();
  }

  function resizeConfettiCanvas() {
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
  }

  function burstConfetti() {
    if (confettiCooldown) return;
    confettiCooldown = true;
    setTimeout(() => {
      confettiCooldown = false;
    }, 600);
    resizeConfettiCanvas();
    const colors = ["#4fa7ff", "#ff73b6", "#37c98d", "#ffcf4d", "#8b5cf6"];
    const newPieces = Array.from({ length: 100 }, () => ({
      x: confettiCanvas.width / 2,
      y: confettiCanvas.height * 0.22,
      vx: (Math.random() - 0.5) * 10,
      vy: Math.random() * -8 - 4,
      size: Math.random() * 7 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * Math.PI,
      vr: (Math.random() - 0.5) * 0.25,
      gravity: Math.random() * 0.18 + 0.12,
      alpha: 1,
    }));
    confettiPieces = confettiPieces.concat(newPieces);
    animateConfetti();
  }

  function animateConfetti() {
    const ctx = confettiCanvas.getContext("2d");
    cancelAnimationFrame(confettiFrame);
    const draw = () => {
      ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
      for (let i = confettiPieces.length - 1; i >= 0; i--) {
        const p = confettiPieces[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity;
        p.rotation += p.vr;
        p.alpha -= 0.009;
        if (p.alpha <= 0 || p.y > confettiCanvas.height + 40) {
          confettiPieces.splice(i, 1);
          continue;
        }
        ctx.save();
        ctx.globalAlpha = Math.max(p.alpha, 0);
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        ctx.restore();
      }
      if (confettiPieces.length > 0) {
        confettiFrame = requestAnimationFrame(draw);
      } else {
        ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
        confettiFrame = null;
      }
    };
    draw();
  }

  function showScreen(screen) {
    [startScreen, loadingScreen, appScreen].forEach((s) => {
      s.classList.add("hidden");
      s.classList.remove("flex");
    });
    screen.classList.remove("hidden");
    if (screen === startScreen || screen === loadingScreen) screen.classList.add("flex");
  }

  function switchTab(targetId) {
    tabs.forEach((btn) => btn.classList.remove("active-tab"));
    const activeBtn = document.querySelector('[data-tab="' + targetId + '"]');
    if (activeBtn) activeBtn.classList.add("active-tab");

    tabPanels.forEach((panel) => panel.classList.add("hidden"));
    const activePanel = $(targetId);
    if (activePanel) activePanel.classList.remove("hidden");

    cluePanel.classList.add("hidden");
    alphaDetailPanel.classList.add("hidden");
    numberDetailPanel.classList.add("hidden");

    if (targetId === "gameTab") cluePanel.classList.remove("hidden");
    if (targetId === "hurufTab") alphaDetailPanel.classList.remove("hidden");
    if (targetId === "angkaTab") numberDetailPanel.classList.remove("hidden");
  }

  function applyTheme(theme) {
    if (!theme) return;
    body.classList.add(theme.bodyClass);
    gamePanel.classList.add(theme.panelClass);
    appTitle.textContent = theme.title;
    appSubtitle.textContent = theme.subtitle;
    levelBadge.textContent = theme.label;
    levelBadge.classList.remove("hidden");
    roundTotal.textContent = gameData.length;
  }

  function startExperience() {
    unlockSpeech();
    initAudio();
    showScreen(loadingScreen);
    const steps = [
      { progress: 30, text: "Menyiapkan level..." },
      { progress: 60, text: "Merapikan tema permainan..." },
      { progress: 100, text: "Permainan siap!" },
    ];
    loadingBar.style.width = "0%";
    loadingText.textContent = "Permainan akan dimulai.";
    steps.forEach((step, i) => {
      setTimeout(() => {
        loadingBar.style.width = step.progress + "%";
        loadingText.textContent = step.text;
      }, 450 * (i + 1));
    });
    setTimeout(() => {
      showScreen(appScreen);
      switchTab("gameTab");
      renderGame();
      if (activeTheme) {
        ensureMusicStarts();
        speakText(activeTheme.introVoice);
      }
    }, 1700);
  }

  function renderGame() {
    const item = gameData[currentIndex];
    if (!item) return;
    locked = false;
    roundNow.textContent = currentIndex + 1;
    scoreValue.textContent = score;
    questionEmoji.textContent = item.emoji;
    questionHint.textContent = "Pilih jawaban yang benar";
    clueTitle.textContent = item.phrase;
    clueText.textContent = item.desc;
    gameFeedback.textContent = "Yuk pilih jawaban yang benar ✨";
    nextQuestionBtn.classList.add("hidden");
    choicesContainer.innerHTML = "";

    const shuffledChoices = [...item.choices].sort(() => Math.random() - 0.5);
    shuffledChoices.forEach((choice) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "choice-btn text-2xl sm:text-3xl font-black min-h-[84px]";
      btn.textContent = choice;
      btn.addEventListener("click", () => handleAnswer(btn, choice));
      choicesContainer.appendChild(btn);
    });
  }

  function handleAnswer(button, choice) {
    if (locked) return;
    locked = true;
    const item = gameData[currentIndex];
    const allButtons = choicesContainer.querySelectorAll(".choice-btn");

    if (choice === item.answer) {
      score += 20;
      scoreValue.textContent = score;
      button.classList.add("correct");
      gameFeedback.textContent = "Benar! Hebat! 🎉";
      starsRow.innerHTML += "<span>⭐</span>";
      playTone("success");
      burstConfetti();
      speakText("Benar. " + item.phrase + ". " + item.desc);
    } else {
      button.classList.add("wrong");
      gameFeedback.textContent = "Coba lagi ya 💛";
      playTone("wrong");
      allButtons.forEach((btn) => {
        if (btn.textContent === item.answer) btn.classList.add("correct");
      });
      speakText("Coba lagi ya. Jawaban yang benar adalah " + item.phrase);
    }

    allButtons.forEach((btn) => {
      btn.disabled = true;
      btn.style.pointerEvents = "none";
    });
    nextQuestionBtn.classList.remove("hidden");
  }

  function nextQuestion() {
    if (currentIndex < gameData.length - 1) {
      currentIndex += 1;
      renderGame();
    } else {
      showFinalResult();
    }
  }

  function showFinalResult() {
    const isGreat = score >= 80;
    questionEmoji.textContent = isGreat ? "🏆" : "🎊";
    questionHint.textContent = "Selesai";
    choicesContainer.innerHTML = "";
    gameFeedback.innerHTML = 'Skor kamu <span class="text-sky-600">' + score + "</span>";
    clueTitle.textContent = "Level selesai";
    clueText.textContent = "Balik ke peta buat pilih level lain.";
    nextQuestionBtn.classList.add("hidden");
    burstConfetti();
    if (activeTheme) {
      const unlockedLevel = Number(localStorage.getItem("belajarCeriaUnlockedLevel") || 1);
      const nextUnlock = Math.max(unlockedLevel, activeTheme.unlocks);
      localStorage.setItem("belajarCeriaUnlockedLevel", String(nextUnlock));
      speakText(activeTheme.finishVoice + " Skor kamu " + score + ".");
    }
  }

  function createAlphabetCards() {
    alphabetGrid.innerHTML = "";
    alphabetData.forEach((item) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "alpha-card text-left";
      btn.innerHTML =
        '<div class="text-4xl font-black text-slate-800">' + item.letter + "</div>" +
        '<div class="mt-2 font-bold">' + item.word + "</div>" +
        '<div class="text-3xl mt-1">' + item.emoji + "</div>";
      btn.addEventListener("click", () => {
        alphabetGrid.querySelectorAll(".alpha-card").forEach((c) => c.classList.remove("active"));
        btn.classList.add("active");
        selectedAlphabet = item;
        alphabetPanelTitle.textContent = item.letter + " untuk " + item.word + " " + item.emoji;
        alphabetPanelDesc.textContent = "Huruf " + item.letter + ". Contohnya " + item.word + ".";
        speakText(item.letter + " untuk " + item.word);
      });
      alphabetGrid.appendChild(btn);
    });
    if (alphabetGrid.firstElementChild) alphabetGrid.firstElementChild.classList.add("active");
    alphabetPanelTitle.textContent = selectedAlphabet.letter + " untuk " + selectedAlphabet.word + " " + selectedAlphabet.emoji;
    alphabetPanelDesc.textContent = "Huruf " + selectedAlphabet.letter + ". Contohnya " + selectedAlphabet.word + ".";
  }

  function createNumberCards() {
    numberGrid.innerHTML = "";
    numberData.forEach((item) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "number-card text-left";
      btn.innerHTML =
        '<div class="text-4xl font-black text-slate-800">' + item.number + "</div>" +
        '<div class="mt-2 text-slate-500 font-semibold">Klik</div>';
      btn.addEventListener("click", () => {
        numberGrid.querySelectorAll(".number-card").forEach((c) => c.classList.remove("active"));
        btn.classList.add("active");
        selectedNumber = item;
        numberPanelTitle.textContent = "Ini angka " + item.number + " " + item.object;
        numberObjects.textContent = item.object.repeat(item.number);
        numberPanelDesc.textContent = "Ada " + item.number + " " + item.name + ".";
        speakText("Ini angka " + item.number + ". Ada " + item.number + " " + item.name + ".");
      });
      numberGrid.appendChild(btn);
    });
    if (numberGrid.firstElementChild) numberGrid.firstElementChild.classList.add("active");
    numberPanelTitle.textContent = "Ini angka " + selectedNumber.number + " " + selectedNumber.object;
    numberObjects.textContent = selectedNumber.object.repeat(selectedNumber.number);
    numberPanelDesc.textContent = "Ada " + selectedNumber.number + " " + selectedNumber.name + ".";
  }

  startBtn?.addEventListener("click", () => {
    window.location.href = "map.html";
  });

  previewVoiceBtn?.addEventListener("click", () => speakText("Halo adik-adik. Yuk belajar bersama!"));
  assistantVoiceBtn?.addEventListener("click", () => speakText("Halo adik-adik! Semangat belajar ya!"));

  speakClueBtn?.addEventListener("click", () => {
    const item = gameData[currentIndex];
    if (item) speakText(item.phrase + ". " + item.desc);
  });

  repeatQuestionBtn?.addEventListener("click", () => {
    const item = gameData[currentIndex];
    if (item) speakText(item.phrase + ". " + item.desc);
  });

  nextQuestionBtn?.addEventListener("click", nextQuestion);

  restartAppBtn?.addEventListener("click", () => {
    window.speechSynthesis.cancel();
    if (speakTimer) clearTimeout(speakTimer);
    stopBackgroundMusic();
    window.location.href = "map.html";
  });

  alphabetVoiceBtn?.addEventListener("click", () => {
    speakText(selectedAlphabet.letter + " untuk " + selectedAlphabet.word);
  });

  speakAlphabetBtn?.addEventListener("click", () => {
    speakText("A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z");
  });

  numberVoiceBtn?.addEventListener("click", () => {
    speakText("Ini angka " + selectedNumber.number + ". Ada " + selectedNumber.number + " " + selectedNumber.name + ".");
  });

  tabs.forEach((btn) => btn.addEventListener("click", () => switchTab(btn.dataset.tab)));
  window.addEventListener("resize", resizeConfettiCanvas);
  window.addEventListener("beforeunload", stopBackgroundMusic);
  ["pointerdown", "keydown", "touchstart"].forEach((eventName) => {
    window.addEventListener(eventName, ensureMusicStarts, { once: true });
  });

  resizeConfettiCanvas();
  createAlphabetCards();
  createNumberCards();
  switchTab("gameTab");

  if (activeTheme) {
    applyTheme(activeTheme);
    showScreen(loadingScreen);
    startExperience();
  } else {
    showScreen(startScreen);
  }
});
