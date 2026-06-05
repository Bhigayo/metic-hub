const themeSelect =
document.getElementById(
    "themeSelect"
);

const savedTheme =
localStorage.getItem(
    "theme"
);

if(savedTheme){

    document.body.classList.add(
        savedTheme
    );

    themeSelect.value =
    savedTheme;

}

themeSelect.addEventListener(
    "change",
    () => {

        document.body.classList.remove(
            "light",
            "dark"
        );

        document.body.classList.add(
            themeSelect.value
        );

        localStorage.setItem(
            "theme",
            themeSelect.value
        );

    }
);