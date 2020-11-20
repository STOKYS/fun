const num = document.getElementById("phonenumber")
const text = document.getElementById("result")

$("button").on("click", function(){
    newNumber()
    if (this.id == "btnyes"){
        text.style.display = "inline"
    } else {
        text.style.display = "none"
    }
})

function newNumber(){
    num.innerText=""
    for(i=0; i < 3; i++){
        for(j=0; j<3; j++){
            num.innerText += Math.floor(Math.random() * 10)
        }
        num.innerHTML += "&nbsp;"
    }
}