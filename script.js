function getRandomColor()
{
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++)
    {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function newCircle()
{
    var circle = document.createElement("div");
    circle.className = 'circle';
    circle.style.backgroundColor = getRandomColor();

    circle.onclick = function () {
        circle.style.display = "none";
    };

    document.body.appendChild(circle);
    console.log(circle);
}

function init()
{
    for (var i = 0; i < 5; i++)
    {
        newCircle();
    }

    var resetButton = document.createElement("button");
    resetButton.textContent = "Reset";
    resetButton.style.padding = "50px 100px";
    resetButton.style.position = "absolute";
    resetButton.style.bottom = "0px";
    resetButton.style.left = "0px";

    resetButton.onclick = function ()
    {
        var circles = document.getElementsByClassName("circle");
        for (var i = 0; i < circles.length; i++)
        {
            circles[i].style.display = "none";
        }
    }
    document.body.appendChild(resetButton);

    var addButton = document.createElement("button");
    addButton.textContent = "Add";    
    addButton.style.padding = "50px 100px";
    addButton.style.position = "absolute";
    addButton.style.bottom = "0px";
    addButton.style.left = "300px";
    addButton.onclick = function ()
    {
        newCircle();
    }
    document.body.appendChild(addButton);
    console.log(addButton);
}

window.onload = init;
