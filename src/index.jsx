import "./style.css";
import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector("#root"));

const toto = "there";

root.render(
  <>
    <h1 style={{ color: "coral", backgroundColor: "floralwhite" }}>
      Hello {toto}
    </h1>
    <p className="paragraph">
      Lorem <strong>ipsum</strong> Lorem ipsum dolor sit, amet consectetur
      adipisicing elit. <br />
      Facilis, et! Eligendi perspiciatis porro accusantium nisi et. Iure dolore,
      labore officiis pariatur a et distinctio quisquam voluptates, cumque
      accusantium, accusamus officia.
    </p>
  </>
);
