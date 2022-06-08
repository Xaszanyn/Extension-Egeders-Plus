var head = document.querySelector("head");
var body = document.querySelector("body");

if (localStorage.getItem("help") != "true")
{
    localStorage.setItem("help", "true");

    help();
}
else if (isEnabled("night")) enable("night");

appendFont();

document.addEventListener('keydown', (event) => {
    switch(event.code)
    {
        case "KeyN":
            toggle("night")
            break;
    }
}, false);

function help()
{
    body.innerHTML += "<section id='ekinHelp' class='closed'><div id='ekinHelpBox' class='closed'><div id='ekinHelpNavigation'><img id='ekinHelpLogo' src='https://ekinaslan.com/resources/importables/egeders+/Logo.png' alt='Logo'><span id='ekinHelpTitle'>Egeders+</span><a id='ekinHelpClose' href='#'>Kapat</a></div><p id='ekinHelpText'>Gece modunu aktifleştirmek için N tuşuna basmanız yeterli.</p></div></section>";

    var help = document.querySelector('#ekinHelp');
    var box = help.querySelector('#ekinHelpBox');

    window.setTimeout(function() {
        help.classList.remove("closed");

        window.setTimeout(function() {
            box.classList.remove("closed");
        }, 250);
    }, 500); 

    help.querySelector('#ekinHelpClose').addEventListener('click', function (event) {
        event.preventDefault();

        box.classList.add("closed");

        window.setTimeout(function() {
            help.classList.add("closed");
        }, 250);
        
        window.setTimeout(function() {
          help.style.display = "none";
        }, 750);
    });
}

function appendFont()
{
    head.innerHTML += "<link rel='preconnect' href='https://fonts.googleapis.com'><link rel='preconnect' href='https://fonts.gstatic.com' crossorigin><link href='https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500&display=swap' rel='stylesheet'>";

    document.querySelectorAll('*').forEach(function(element) {
        if (element.tagName != "I") element.style.fontFamily += "Kanit";
    });
}

function isEnabled(mode)
{
    return localStorage.getItem(mode) == "true";
}

function enable(mode)
{
    localStorage.setItem(mode, "true");

    head.innerHTML += "<link id='ekin" + capitalize(mode) + "' rel='stylesheet' href='https://ekinaslan.com/resources/importables/egeders+/" + mode + ".css'>";
}

function disable(mode)
{
    localStorage.setItem(mode, "false");
    
    document.querySelector("#ekin" + capitalize(mode)).remove();
}

function capitalize(name)
{
    return name.charAt(0).toUpperCase() + name.slice(1);
}

function toggle(mode)
{
    if (isEnabled(mode)) disable(mode);
            else enable(mode);
}