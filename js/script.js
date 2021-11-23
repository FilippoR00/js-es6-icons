const fonts = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    }
];

let getType = document.getElementById("type");
let card = document.getElementsByClassName("card-container");
let colorIcon = document.getElementsByClassName("fas");

function setColor(value) {
    let temp = "";
    switch (value.color) {
        case "orange":
            temp = "orange";
            break;
        case "blue":
            temp = "blue";
            break;
        case "green":
            temp = "green";
            break;
    }
    return temp;
}

function showType(value, type){
    for (let i = 0; i < value.length; i++) {
        if (value[i].type == type || type == "all" || type == "random"){
            card[i].classList.remove("disabled");
            colorIcon[i].style.color = null;
            if(type == "random"){
                colorIcon[i].style.color = randomColor();
            }
        } else {
            card[i].classList.add("disabled");
            colorIcon[i].style.color = null;
        }
        
    }
}

function randomColor() {
    let temp = Math.floor(Math.random() * 16777215).toString(16);
    

    return "#" + temp;
}

for (let i = 0; i < fonts.length; i++) {
    let content = document.querySelector(".box").innerHTML += `
    <div class="card-container">
        <div class="card">
            <i class="${fonts[i].family} ${fonts[i].prefix}${fonts[i].name} ${setColor(fonts[i])}"></i>
            <p>${fonts[i].name}</p>
        </div>
    </div>
    `
}
showType(fonts, getType.value);





getType.addEventListener("change", () => {
    switch (getType.value) {
        case "all":
            showType(fonts, getType.value);
            break;
        case "animal":
            showType(fonts, getType.value);
            break;
        case "vegetable":
            showType(fonts, getType.value);
            break;
        case "user":
            showType(fonts, getType.value);
            break;
        case "random":
            showType(fonts, getType.value);
            break;
    
        
    }
});

// **** bonus ****

let color = document.getElementById("type").innerHTML += `<option value="random">random</option>`;



