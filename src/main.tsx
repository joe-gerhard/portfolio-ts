import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import { GlobalStyle } from "./styles/globalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedinIn, faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt, faBars } from "@fortawesome/free-solid-svg-icons";

library.add(faGithub, faLinkedinIn, faFacebookF, faInstagram, faTwitter, faExternalLinkAlt, faBars);

createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
