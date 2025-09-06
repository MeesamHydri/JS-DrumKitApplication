# 🥁 Drum Kit

A fun **Drum Kit Web App** built with **HTML, CSS, and JavaScript**.  
Play drum sounds either by clicking buttons on the screen or by pressing keys on your keyboard.

---

## 📌 How It Works
- Each button (`w, a, s, d, j, k, l`) corresponds to a different drum sound.
- Users can:
  1. **Click a button** → plays the sound & animates the button.
  2. **Press the matching keyboard key** → plays the sound & animates the button.
- Buttons get a quick "pressed" animation to simulate real drumming feedback.

---

## 🚀 Features
- 🎵 **7 Drum Sounds**: toms, snare, kick, and crash cymbal.
- ⌨️ **Keyboard Support**: use your keyboard to play.
- 🖱️ **Click Support**: use your mouse to play.
- ✨ **Button Animation**: buttons highlight when activated.

---

## 🛠️ Technologies Used
- HTML
- CSS
- JavaScript (Vanilla)

---

## 📂 Project Structure
/sounds/
tom-1.mp3
tom-2.mp3
tom-3.mp3
tom-4.mp3
snare.mp3
kick-bass.mp3
crash.mp3
index.html
style.css
script.js


---

## 🎯 Main Logic
1. **Add Event Listeners**
   - Loop through all `<button>` elements and attach `click` events.
   - Listen for `keydown` events on the whole document.

2. **Play Sound**
   - `makeSound(key)` checks which key was pressed.
   - Plays the corresponding `.mp3` file.

3. **Button Animation**
   - `buttonAnimation(key)` adds a `.pressed` CSS class.
   - Removes it after 100ms for a quick visual feedback.

---

## ▶️ How to Play
1. Open `index.html` in a browser.
2. Use your mouse to click the buttons.
3. Or press the keys on your keyboard:
   - `w, a, s, d, j, k, l`
4. Enjoy making beats 🥁🎶

---

## 📸 Example Gameplay
- Press **`w`** → plays **Tom-1**
- Press **`a`** → plays **Tom-2**
- Press **`s`** → plays **Tom-3**
- Press **`d`** → plays **Tom-4**
- Press **`j`** → plays **Snare**
- Press **`k`** → plays **Kick**
- Press **`l`** → plays **Crash**

---

## 📜 License
This project is for learning and practice purposes. Feel free to modify and expand.

