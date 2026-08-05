# 🖼️ Mini Short 이미지 연동 가이드

## 📁 폴더 구조 설정

```
project-folder/
├── index.html (또는 minishort_landing.html)
├── assets/
│   ├── logo.svg
│   ├── drama1.svg
│   ├── drama2.svg
│   ├── drama3.svg
│   └── install_icons.svg
└── styles.css (선택)
```

---

## 🚀 Step 1: SVG 파일 저장

1. **assets 폴더 생성**
   - 프로젝트 폴더에서 마우스 우클릭 → "New Folder" → `assets` 입력

2. **SVG 파일 저장**
   - 각 SVG 파일을 `assets` 폴더에 저장

---

## 📝 Step 2: HTML 코드 수정

### 로고 변경

**현재 코드:**
```html
<div class="logo">M</div>
```

**변경할 코드:**
```html
<img src="assets/logo.svg" alt="Mini Short Logo" class="logo-img">
```

**CSS 추가 (styles.css 또는 <style>에):**
```css
.logo-img {
  width: 40px;
  height: 40px;
  border-radius: 8px;
}
```

---

### 드라마 카드 이미지 추가

**현재 코드:**
```html
<div class="drama-card scroll-animation">
  <div class="drama-image">🎬</div>
  <div class="drama-content">
    <div class="drama-title">Double Life of a Cell Block King</div>
    <div class="drama-desc">A prisoner's double life revealed...</div>
  </div>
</div>
```

**변경할 코드 (드라마 1):**
```html
<div class="drama-card scroll-animation">
  <img src="assets/drama1.svg" alt="Drama 1" class="drama-image-real">
  <div class="drama-content">
    <div class="drama-title">Double Life of a Cell Block King</div>
    <div class="drama-desc">A prisoner's double life revealed...</div>
  </div>
</div>
```

**변경할 코드 (드라마 2):**
```html
<div class="drama-card scroll-animation">
  <img src="assets/drama2.svg" alt="Drama 2" class="drama-image-real">
  <div class="drama-content">
    <div class="drama-title">Breaking My Bodyguard</div>
    <div class="drama-desc">Love beyond duty...</div>
  </div>
</div>
```

**변경할 코드 (드라마 3):**
```html
<div class="drama-card scroll-animation">
  <img src="assets/drama3.svg" alt="Drama 3" class="drama-image-real">
  <div class="drama-content">
    <div class="drama-title">The Hockey Captain That Hates Me</div>
    <div class="drama-desc">Rivals to lovers on ice...</div>
  </div>
</div>
```

**CSS 추가:**
```css
.drama-image-real {
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;
}
```

---

### 설치 단계 아이콘 추가

**현재 코드:**
```html
<div class="step-card scroll-animation">
  <div class="step-number">1</div>
  <div class="step-icon">📥</div>
  <div class="step-title">Click 'Download Anyway'</div>
  ...
</div>
```

**변경할 코드:**
```html
<!-- Step 1 -->
<div class="step-card scroll-animation">
  <div class="step-number">1</div>
  <svg class="step-icon" width="60" height="60" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="45" fill="url(#grad1)" opacity="0.15"/>
    <path d="M 30 40 L 50 65 L 70 40" stroke="#667eea" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <line x1="50" y1="25" x2="50" y2="55" stroke="#667eea" stroke-width="4" stroke-linecap="round"/>
    <rect x="25" y="75" width="50" height="6" rx="3" fill="#e9ecef"/>
    <rect x="25" y="75" width="35" height="6" rx="3" fill="#667eea"/>
  </svg>
  <div class="step-title">Click 'Download Anyway'</div>
  <div class="step-desc">Android displays a standard alert for apps downloaded outside Google Play. Click "Download anyway" when prompted.</div>
</div>

<!-- Step 2 -->
<div class="step-card scroll-animation">
  <div class="step-number">2</div>
  <svg class="step-icon" width="60" height="60" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#4dabf7;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#1971c2;stop-opacity:1" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="45" fill="url(#grad2)" opacity="0.15"/>
    <path d="M 20 35 L 45 35 L 50 28 L 80 28 L 80 72 Q 80 80 72 80 L 28 80 Q 20 80 20 72 Z" fill="none" stroke="#4dabf7" stroke-width="3"/>
    <rect x="30" y="50" width="25" height="18" rx="2" fill="#4dabf7" opacity="0.3"/>
    <line x1="33" y1="57" x2="52" y2="57" stroke="#4dabf7" stroke-width="1.5"/>
    <line x1="33" y1="62" x2="52" y2="62" stroke="#4dabf7" stroke-width="1.5"/>
  </svg>
  <div class="step-title">Open the APK File</div>
  <div class="step-desc">Once the download is complete, tap the notification or go to your device's "Downloads" folder.</div>
</div>

<!-- Step 3 -->
<div class="step-card scroll-animation">
  <div class="step-number">3</div>
  <svg class="step-icon" width="60" height="60" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#ffa94d;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#fd7e14;stop-opacity:1" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="45" fill="url(#grad3)" opacity="0.15"/>
    <circle cx="50" cy="50" r="18" fill="none" stroke="#ffa94d" stroke-width="3"/>
    <g stroke="#ffa94d" stroke-width="2.5" fill="none">
      <rect x="47" y="20" width="6" height="12" rx="1"/>
      <rect x="68" y="47" width="12" height="6" rx="1"/>
      <rect x="47" y="68" width="6" height="12" rx="1"/>
      <rect x="20" y="47" width="12" height="6" rx="1"/>
    </g>
    <circle cx="50" cy="50" r="8" fill="#ffa94d" opacity="0.5"/>
  </svg>
  <div class="step-title">Enable Installation</div>
  <div class="step-desc">If your browser asks for permission, tap Settings and toggle on "Allow from this source".</div>
</div>

<!-- Step 4 -->
<div class="step-card scroll-animation">
  <div class="step-number">4</div>
  <svg class="step-icon" width="60" height="60" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#51cf66;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#37b24d;stop-opacity:1" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="45" fill="url(#grad4)" opacity="0.15"/>
    <rect x="25" y="25" width="50" height="50" rx="8" fill="none" stroke="#51cf66" stroke-width="3"/>
    <path d="M 35 50 L 45 60 L 65 35" stroke="#51cf66" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="70" cy="30" r="4" fill="#51cf66" opacity="0.7"/>
  </svg>
  <div class="step-title">Install & Claim ₹3,000!</div>
  <div class="step-desc">Tap "Install", sign up, and start watching to claim your cash reward instantly.</div>
</div>
```

---

## 🎨 CSS 추가 (SVG 스타일)

```css
.step-icon {
  margin-bottom: 12px;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
  transition: all 0.3s ease;
}

.step-card:hover .step-icon {
  transform: scale(1.1);
}

.drama-image-real {
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

---

## ✅ 확인 체크리스트

- [ ] `assets` 폴더 생성됨
- [ ] SVG 파일들이 `assets` 폴더에 있음
- [ ] HTML에서 이미지 경로 수정됨 (`assets/logo.svg` 등)
- [ ] 브라우저에서 이미지가 보임
- [ ] 모바일에서도 표시됨

---

## 🐛 문제 해결

### 이미지가 안 보일 때

**원인 1: 경로 오류**
```
❌ <img src="logo.svg"> (X)
✅ <img src="assets/logo.svg"> (O)
```

**원인 2: 파일명 오타**
```
❌ drama1.svg vs Drama1.svg (대소문자 구분!)
✅ 정확히 맞춰서 입력
```

**원인 3: 브라우저 캐시**
```
Ctrl+Shift+Delete → 캐시 삭제 → 새로고침
```

### SVG가 크기가 안 맞을 때
```css
/* SVG 크기 고정 -->
img[src$=".svg"] {
  width: 100%;
  height: auto;
  max-width: 400px;
}
```

---

## 📱 완성된 폴더 구조

```
project-folder/
│
├── index.html
├── styles.css (선택)
│
├── assets/
│   ├── logo.svg          ✅
│   ├── drama1.svg        ✅
│   ├── drama2.svg        ✅
│   ├── drama3.svg        ✅
│   └── install_icons.svg ✅
```

**이제 Live Server를 다시 실행하면 모든 이미지가 보일 겁니다!** 🎉

---

## 🎨 이미지 커스터마이징 팁

### 색상 변경 (SVG 파일 수정)

**drama1.svg 파일을 열어서:**
```xml
<!-- 변경 전 -->
<stop offset="0%" style="stop-color:#ff6b6b;stop-opacity:1" />

<!-- 변경 후 (예: 파란색) -->
<stop offset="0%" style="stop-color:#4dabf7;stop-opacity:1" />
```

### 이미지 추가

**투명 배경 PNG 사용:**
```html
<img src="assets/custom-image.png" class="drama-image-real" alt="Custom Drama">
```

**온라인 이미지 사용:**
```html
<img src="https://example.com/image.jpg" class="drama-image-real" alt="Drama">
```

---

**준비 완료! VSCode에서 Live Server 실행하면 이미지가 모두 보일 겁니다!** ✨
