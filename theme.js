/**
 * Title: theme.js
 * Author: Laurel Condon
 * Date: 27 May 2023
 * Description: Javascript file for theme
 */

// Sets the default theme to light if one has not been selected
function setDefaultTheme()
{
    const theme = localStorage.getItem("mode") || "light-theme";
    const iconMode = localStorage.getItem("iconMode") || "fa-toggle-off";
    const iconText = localStorage.getItem("iconText") || "Light Mode";

    document.body.classList.value = theme;
    document.getElementById("icon-mode").classList.add(iconMode);
    document.getElementById("icon-text").innerHTML = iconText;
}

// Sets the body to the user's theme.
function setSelectedTheme()
{
    document.body.classList.value = localStorage.getItem("mode") || "light-theme";
}

// Sets the default theme to light if one is not selected
setDefaultTheme();

// Function to switch the user's selected theme
function toggleMode(x)
{
    let colorTheme = document.body.classList; // get the body's CSS class
    let iconMode = x.classList; // get the current classes assigned to the triggered button

// If class is set to light theme, this updates the user's local storage to dark theme
    if (colorTheme.value === "light-theme")
    {
        localStorage.clear();
        localStorage.setItem("mode", "dark-theme");
        localStorage.setItem("iconMode", "fa-toggle-on");
        localStorage.setItem("iconText", "Dark Mode");
    }

// If class is set to dark theme, this updates user's local storage to light theme
    else
    {
        localStorage.clear();
        localStorage.setItem("mode", "light-theme");
        localStorage.setItem("iconMode", "fa-toggle-off");
        localStorage.setItem("iconText", "Light Mode");
    }

// Applies selection to page's HTML elements
    colorTheme.value = localStorage.getItem("mode");
    iconMode.value = `fa ${localStorage.getItem("iconMode")} pull-right`;
    document.getElementById("icon-text").innerHTML = localStorage.getItem("iconText");
}


