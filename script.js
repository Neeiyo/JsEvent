//Fonctionalité 1
var footer = document.getElementsByTagName("footer");
var clicks = 0;
for (i = 0; i < footer.length; i++) {
    footer[i].addEventListener("click", function footerClicker() {
        console.log(`clique numero ${clicks++}`);
    });
}

//Fonctionalité 2
var navbarHeader = document.getElementById("navbarHeader");
var navbarToggler = document.getElementsByClassName("navbar-toggler");

navbarToggler[0].addEventListener("click", function menuToggle() {
    navbarHeader.classList.toggle("collapse");
});


//Fonctionalité 3
var btnFirst = document.getElementsByClassName("btn-outline-secondary");

btnFirst[0].addEventListener("click", function redText() {
    document.getElementsByClassName("card-text")[0].style.color = "red";
})


//Fonctionalité 4
var btnSecond = document.getElementsByClassName("btn-outline-secondary");
var secondCard = document.getElementsByClassName("card-text")[1]

btnSecond[1].addEventListener("click", function redText() {

    if (secondCard.style.color === 'green') {
        secondCard.style.color = 'black';
    } else {
        secondCard.style.color = 'green';
    }

})


//Fonctionalité 5
var navbar = document.getElementsByClassName("navbar");
var body = document.getElementsByClassName("col-sm-8");

navbar[0].addEventListener("dblclick", function menuToggle() {
    document.styleSheets[0].disabled = true | false;
});

body[0].addEventListener("dblclick", function menuToggle() {
    window.location.reload();
});



//Fonctionalité 6
var btnView = document.getElementsByClassName("btn-success");

for (let l = 0; l < btnView.length; l++) {
    btnView[l].addEventListener("mouseover", function MouseBtnView() {

        if (document.getElementsByClassName("card-text")[l].classList.toggle("collapse") === false) {
            document.getElementsByClassName("card-img-top")[l].style.width = "100%";

        } else {
            document.getElementsByClassName("card-img-top")[l].style.width = "20%";
        }
    });
}

//Fonctionalité 7
var btnSecond = document.getElementsByClassName("btn-secondary");

btnSecond[0].addEventListener("click", function btnSecondClick() {
    document.getElementsByClassName("row")[1].prepend(document.getElementsByClassName("col-md-4")[5]);
});