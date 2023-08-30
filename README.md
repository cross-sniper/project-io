- [1. Simple 2D Render Engine](#1-simple-2d-render-engine)
  - [1.1. Features](#11-features)
  - [1.2. Getting Started](#12-getting-started)
  - [1.3. Project Structure](#13-project-structure)
  - [1.4. Contributing](#14-contributing)
  - [1.5. License](#15-license)
- [2. NOTICE](#2-notice)
- [3. TODO](#3-todo)


# 1. Simple 2D Render Engine

This is a simple 2D render engine that allows you to create basic 2D games using HTML5 canvas. The engine provides functionalities for rendering shapes, handling player movement, and managing game loops.

## 1.1. Features

- Rendering rectangles and shapes on an HTML5 canvas.
- Basic player movement using arrow keys.
- Modular design for adding custom drawing functions.
- Integration of JavaScript code, CSS styles, and HTML templates using a build script.

## 1.2. Getting Started

1. Clone this repository to your local machine:

   ```sh
   git clone https://github.com/cross-sniper/project-io
   cd project-io
   ```

2. Customize your game logic by editing the `main.js` and `draw.js` files. Define your drawing functions, player properties, and more.

3. Run the build script to generate the HTML file:

   ```sh
   python main.py
   ```

4. Open the generated HTML file (e.g., `index.html`) in a web browser to see your game in action.

## 1.3. Project Structure

- `js/`: Directory containing your JavaScript files.
- `css/`: Directory containing your CSS files.
- `template.html`: HTML template with placeholders for JavaScript and CSS code.
- `main.py`: Python script to generate the complete HTML file.
- `README.md`: This readme file.

## 1.4. Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## 1.5. License

This project is licensed under the MIT License

# 2. NOTICE

the build script probably reads the files in alphabetical order, so make sure to have your files and functions in the right order

# 3. TODO

- [x] make git repo

- [ ] fix possible errors

- [ ] provide a simple game for testing

- [ ] make a version that works with p5.js

- [ ] support for mobile(android)