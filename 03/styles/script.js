var btn = document.getElementById("switchMode");
var link = document.getElementById("main-theme");

btn.addEventListener("click",function () { changeTheme(); });

function changeTheme()
{
    let lightTheme = "03/styles/main.css";
    let darkTheme = "03/styles/dark-mode.css";

    var currTheme = link.getAttribute("href");
    var theme = "";

    if(currTheme == lightTheme)
    {
        currTheme = darkTheme;
   	    theme = "dark-mode";
    }
    else
    {    
   	    currTheme = lightTheme;
   	    theme = "main";
    }

    link.setAttribute("href", currTheme);
}