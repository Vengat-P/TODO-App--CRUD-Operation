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
const trackList = document.getElementById("trackList")

//! formvalidation 

const formvalidation = ()=>{
    if(
        discrptionInput.value === "" ||
        amountInput.value === ""
    ) {
        msg.innerHTML ="Kindly Enter All the Details 😥";
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
    createList();
}

//! create function for getting data from local storage 

const createList = ()=>{
    trackList.innerHTML = "";
    data.map((ele,i)=>{
        return(
            trackList.innerHTML += `
            <div id=${i} class="w-64 lg:w-80 mt-2 mb-2 flex justify-between bg-white/70 border-3 border-sky-900 rounded-lg">
            <div class="py-2 mt-2 mx-2">
            <span class="font-bold text-start capitalize text-sky-900">${ele.discrption} :</span>
            <span class="font-bold text-start ">${ele.amount}</span>
            <p class="font-bold text-start capitalize text-sky-900">${ele.source}</p>
            </div>
            <span class="option flex flex-col gap-2 py-2 mt-2 mx-2">
            <i onclick="editTask(this)" class="fa-regular fa-pen-to-square"></i>
            <i onclick="deleteTask(this)" class="fa-solid fa-trash"></i>
            </span>
            </div>
            `
        )
    });
    resetForm();
}

//! reset form after creating one entry
 
const resetForm = ()=>{
    discrptionInput.value= "";
    amountInput.value= "";
}

//! clearing empty object from localstorage

(()=>{
    data = JSON.parse(localStorage.getItem("data")) || []
    createList();
})
();

//! edit task function for created list

const editTask = (e)=>{
    let result = e.parentElement.parentElement;
    discrptionInput.value = result.children[0].innerHTML;
    amountInput.value = result.children[1].innerHTML;
    sourceInput.value = result.children[2].innerHTML;
    deleteTask(e)
}

//! delete task for created list

const deleteTask = (e)=>{
    e.parentElement.parentElement.remove();
    data.splice(e.parentElement.parentElement.id,1)
    localStorage.setItem("data",JSON.stringify(data))
}
