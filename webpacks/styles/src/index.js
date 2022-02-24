import "./css-styles.css";
import "./scss-styles.scss";

const headerTitle = "Webpack header";

const headers = document.querySelectorAll("h1");

headers.forEach(function (header) {
  header.innerText = headerTitle;
});
