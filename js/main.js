// ========== bxSlider ==========
$(function () {
    $(".bxslider").bxSlider({
        auto: true,
        pause: 2500
    });
});

// ========== ハンバーガーメニュー ==========
const hamburger = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');

// ボタンで開閉
hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('is-open');
    navList.classList.toggle('is-open');
});

// メニュー内リンクをタップしたら閉じる
navList.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
        hamburger.classList.remove('is-open');
        navList.classList.remove('is-open');
    });
});

// ★メニュー外タップで閉じる
document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navList.contains(e.target)) {
        hamburger.classList.remove('is-open');
        navList.classList.remove('is-open');
    }
});

// ========== タイピングアニメーション ==========
const targetEl = document.querySelector('.hero__catch');
targetEl.textContent = '';

// スマホ判定（768px以下）
const isSP = window.innerWidth <= 768;

// PC用とスマホ用でテキストを分ける
const typingParts = isSP
    ? ['丁寧に積み上げて、', 'テクノロジーで暮らしを豊かに。']  // スマホ：2行
    : ['丁寧に積み上げて、テクノロジーで暮らしを豊かに。'];      // PC：1行

// カーソル追加
const cursor = document.createElement('span');
cursor.classList.add('typing-cursor');
targetEl.appendChild(cursor);

let partIndex = 0;
let charIndex = 0;
const speed = 150;  // 少しゆっくり

function typeWriter() {
    const currentPart = typingParts[partIndex];

    if (charIndex < currentPart.length) {
        targetEl.insertBefore(document.createTextNode(currentPart[charIndex]), cursor);
        charIndex++;
        setTimeout(typeWriter, speed);
    } else {
        // 1行目が終わったらスマホは改行を入れる
        if (isSP && partIndex === 0) {
            const br = document.createElement('br');
            targetEl.insertBefore(br, cursor);
            partIndex++;
            charIndex = 0;
            setTimeout(typeWriter, speed);
        } else {
            // タイピング完了（カーソルはそのまま点滅し続ける）
        }
    }
}

window.addEventListener('load', typeWriter);