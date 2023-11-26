# Stars Background

This project is a simple webpage with a stars background. The background is implemented using HTML and SCSS.

## Installation

To install this project, you will need to have Node.js and npm installed on your machine. Once you have these, you can clone the repository and install the dependencies.

```bash
git clone https://github.com/yourusername/stars-background.git
cd stars-background
npm install
```

## Usage

To view the webpage, you can open the `src/index.html` file in your web browser.

To modify the styles, you can edit the `src/scss/main.scss` file. After making changes, you can compile the SCSS to CSS using the following command:

```bash
npm run compile-scss
```

This will update the `src/css/main.css` file, which is linked in the `src/index.html` file.

The stars background is applied using a div with a class of 'stars'. The styles for this class are defined in the `src/scss/main.scss` file. You can change the background image and size by modifying the `background-image` and `background-size` properties respectively.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)