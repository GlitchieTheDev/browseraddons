document.addEventListener("load", () => {
    const html = document.getElementsByTagName("html");
    html.innerHTML.replace("{{{user.themes}}}", "dark");
});