# 🎞️ Slideshow

A responsive image slideshow built with HTML, CSS, and JavaScript. Features smooth transitions, navigation controls, and automatic slideshow progression.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## ✨ Features

- 🎯 **Smooth Transitions** - CSS-powered smooth slide animations
- 🖱️ **Interactive Navigation** - Click-friendly arrow buttons for manual control
- ⏰ **Auto-Play** - Automatic slideshow progression every 10 seconds
- 🚫 **No Dependencies** - Pure vanilla JavaScript, no external libraries

## 📁 Project Structure

```
Slideshow/
├── 📄 index.html          # Main HTML structure
├── 🎨 style.css           # Styling and animations
├── ⚡ script.js           # JavaScript functionality
├── 📂 images/             # Image assets
│   ├── 1.jpg
│   ├── 2.jpg
│   └── 3.jpg
├── 📜 README.md           # Project documentation
└── 📋 LICENSE             # License information
```

## 🛠️ Customization

### Adding More Images

1. Add your images to the `images/` folder
2. Update the HTML in `index.html`:

```html
<div class="slider--width">
  <div class="slider--item" style="background-image: url('images/your-image.jpg');"></div>
  <!-- Add more slider items here -->
</div>
```

### Changing Auto-Play Timing

Modify the interval in `script.js`:

```javascript
// Change from 10000ms (10 seconds) to your preferred timing
setInterval(goNext, 5000); // 5 seconds
```

## 🔧 Technical Details

- **CSS Flexbox** for responsive layout
- **CSS Transforms** for smooth animations
- **Vanilla JavaScript** for lightweight functionality
- **CSS Custom Properties** for easy theming

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

⭐ **Star this repository if you found it helpful!** ⭐