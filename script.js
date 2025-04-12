//! Get all input elements by id 


const form = document.getElementById("form")
const discrptionInput = document.getElementById("discrptionInput")
const amountInput = document.getElementById("amountInput")
const sourceInput = document.getElementById("sourceInput")
const income = document.getElementById("income")
const expense = document.getElementById("expense")
const add = document.getElementById("add")
const msg = document.getElementById("msg")
const allFilter = document.getElementById("allFilter")
const incomeFilter = document.getElementById("incomeFilter")
const expenseFilter = document.getElementById("expenseFilter")

//! formvalidation 

const formvalidation = ()=>{
    if(
        discrptionInput.value === "" ||
        amountInput.value === ""
    ) {
        msg.innerHTML ="Input Fields cannot be empty 😥";
    }
    else {
        msg.innerHTML = ""
        //get data form here
        getData();
    }
};

//!submit logic

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    formvalidation();
})


//! getting datas from input feild and stored it in array of object

let data = [{}]

const getData = () =>{
    data.push({
        discrption: discrptionInput.value,
        amount: amountInput.value,
        source: sourceInput.value
    });

    //to save this data in localstorage

    localStorage.setItem("data", JSON.stringify(data))
}
