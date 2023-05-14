const btnUpdateTheme = document.getElementById("btn-update-theme");
const body = document.querySelector("body");
const uploadBtnUpdateTheme = document.querySelector(".img-btn");

    btnUpdateTheme.addEventListener("click", () => {
        const darkmodeOn = body.classList.contains("darkmode");

        body.classList.toggle("darkmode");

            if (darkmodeOn) {
        uploadBtnUpdateTheme.setAttribute("src", "./src/imagens/sun.png");
    }
            else {
        uploadBtnUpdateTheme.setAttribute("src", "./src/imagens/moon.png");
    }
});

