const rateEl = document.getElementById("rating__el");
const btn = document.getElementById("submit-btn");
const rateBtn = document.querySelectorAll("[data-btn]");
const rate =document.querySelector(".rating__component");
const rateSubmit =document.querySelector(".rating__component-submit");

        


rateBtn.forEach(button =>{

    button.addEventListener("click", ()=>{
       
        rateEl.textContent =" " + button.innerHTML + " ";
    
    })
});


btn.addEventListener("click", ()=>{

    rate.style.display = "none";
    rateSubmit.style.display = "block"
})
