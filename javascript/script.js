// змінна themeSwitchers отримує всі елементи з класом ".neon-button"
const themeSwitchers = document.querySelectorAll(".neon-button");

// Додаємо для кожного switcher обробник подій
themeSwitchers.forEach(switcher =>
    {
        // при натисканні викликається функція, яка повинна отримати назву теми
        switcher.addEventListener(
            "click",
            function()
            {
                // alert(this.dataset.theme);  - перевірка, яка зараз тема
                applyTheme(this.dataset.theme);
                localStorage.setItem("name", this.dataset.theme);
            });
    });

    // Функція буде створювати шлях до файлу теми і вставляти його в Head
    function applyTheme(themeName)
    {
        let themeUrl = `styles/${themeName}-mode.css`;
        // alert(themeUrl);  - перевірка, який зараз URL-адрес теми123
        document.querySelector('[title="name"]').setAttribute("href", themeUrl);    // шукаємо елемент '', з [title="name"], і вставляємо в themeUrl
    }

    // зберігаємо вибрану тему у браузері
    let activeTheme = localStorage.getItem("name");

    if(activeTheme === null || activeTheme === "light")
    {
        applyTheme("light");
    }
    else
    {
        applyTheme("dark");
    }