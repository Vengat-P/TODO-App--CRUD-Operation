//! Get all input elements by id

const form = document.getElementById("form");
const discrptionInput = document.getElementById("discrptionInput");
const amountInput = document.getElementById("amountInput");
const sourceInput = document.getElementById("sourceInput");
const income = document.getElementById("income");
const expense = document.getElementById("expense");
const add = document.getElementById("add");
const msg = document.getElementById("msg");
const allFilter = document.getElementById("allFilter");
const incomeFilter = document.getElementById("incomeFilter");
const expenseFilter = document.getElementById("expenseFilter");
const trackList = document.getElementById("trackList");
const totalIncome = document.getElementById("totalIncome");
const totalExpense = document.getElementById("totalExpense");
const netBalance = document.getElementById("netBalance");

//! formvalidation

const formvalidation = () => {
  if (discrptionInput.value === "" || amountInput.value === "") {
    msg.innerHTML = "Kindly Enter All the Details 😥";
  } else {
    msg.innerHTML = "";
    //get data form here
    getData();
  }
};

//!submit logic

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formvalidation();
});

//! getting datas from input feild and stored it in array of object

let data = [{}];
const getData = () => {
  data.push({
    discrption: discrptionInput.value,
    amount: amountInput.value,
    source: sourceInput.value,
  });

  //to save this data in localstorage

  localStorage.setItem("data", JSON.stringify(data));
  createList();
};

//! create function for getting data from local storage

const createList = () => {
  allFilter.checked = true;
  trackList.innerHTML = "";
  data.map((ele, i) => {
    return (trackList.innerHTML += `
            <div id=${i} class=" w-64 lg:w-80 mt-2 mb-2 flex justify-between bg-white/70 border-3 border-sky-900 rounded-lg">
            <span class="font-bold text-start capitalize text-sky-900">${ele.discrption}</span>
            <span class="font-bold text-start ">${ele.amount}</span>
            <p class="font-bold text-start capitalize text-sky-900">${ele.source}</p>
            <span class="option flex flex-col gap-2 py-2 mt-2 mx-2">
            <i onclick="editTask(this);" class="fa-regular fa-pen-to-square"></i>
            <i onclick="deleteTask(this); createList(); " class="fa-solid fa-trash"></i>
            </span>
            </div>
            `);
  });
  //! update totals
  const updateincome = () => {
    // total income
    totalIncome.innerHTML = "";
    const incomearr = data.filter((ele) => {
      if (`${ele.source}` === income.value) {
        return true;
      }
    });
    const currenttotal = incomearr.reduce((sum, ele) => {
      return sum + parseInt(`${ele.amount}`);
    }, 0);
    totalIncome.innerHTML = `${currenttotal}`;
    // console.log(currenttotal);
    // total expense
    totalExpense.innerHTML = "";
    const expensearr = data.filter((ele) => {
      if (`${ele.source}` === expense.value) {
        return true;
      }
    });
    const expensetotal = expensearr.reduce((sum, ele) => {
      return sum + parseInt(`${ele.amount}`);
    }, 0);
    totalExpense.innerHTML = `${expensetotal}`;

    // console.log(expensetotal);
    //net balance
    netBalance.innerHTML = "";

    const netbalance = currenttotal - expensetotal;
    netBalance.innerHTML = `${netbalance}`;
  };
  updateincome();
  resetForm();
};

//! reset form after creating one entry

const resetForm = () => {
  discrptionInput.value = "";
  amountInput.value = "";
  sourceInput.value = income.value;
};

//! clearing empty object from localstorage

(() => {
  data = JSON.parse(localStorage.getItem("data")) || [];
  createList();
})();

//! edit task function for created list

const editTask = (e) => {
  let result = e.parentElement.parentElement;
  discrptionInput.value = result.children[0].innerHTML;
  amountInput.value = result.children[1].innerHTML;
  sourceInput.value = result.children[2].innerHTML;
  deleteTask(e);
};

//! delete task for created list

const deleteTask = (e) => {
  e.parentElement.parentElement.remove();
  data.splice(e.parentElement.parentElement.id, 1);
  localStorage.setItem("data", JSON.stringify(data));
};
//!show all datas
allFilter.addEventListener("click", () => {
  trackList.innerHTML = "";
  data.map((ele, i) => {
    return (trackList.innerHTML += `
             <div id=${i} class=" w-64 lg:w-80 mt-2 mb-2 flex justify-between bg-white/70 border-3 border-sky-900 rounded-lg">
             <span class="font-bold text-start capitalize text-sky-900">${ele.discrption}</span>
             <span class="font-bold text-start ">${ele.amount}</span>
             <p class="font-bold text-start capitalize text-sky-900">${ele.source}</p>
             <span class="option flex flex-col gap-2 py-2 mt-2 mx-2">
             <i onclick="editTask(this)" class="fa-regular fa-pen-to-square"></i>
             <i onclick="deleteTask(this); createList();" class="fa-solid fa-trash"></i>
             </span>
             </div>
             `);
  });
});

//! showincome only
incomeFilter.addEventListener("click", () => {
  trackList.innerHTML = "";
  data.map((ele, i) => {
    if (`${ele.source}` === income.value)
      return (trackList.innerHTML += `
            <div id=${i} class="w-64 lg:w-80 mt-2 mb-2 flex justify-between bg-white/70 border-3 border-sky-900 rounded-lg">
            <span class="font-bold text-start capitalize text-sky-900">${ele.discrption}</span>
            <span class="font-bold text-start ">${ele.amount}</span>
            <p class="font-bold text-start capitalize text-sky-900">${ele.source}</p>
            <span class="option flex flex-col gap-2 py-2 mt-2 mx-2">
            <i onclick="editTask(this)" class="fa-regular fa-pen-to-square"></i>
            <i onclick="deleteTask(this); createList();" class="fa-solid fa-trash"></i>
            </span>
            </div>
            `);
  });
});
//! showincome expense only
expenseFilter.addEventListener("click", () => {
  trackList.innerHTML = "";
  data.map((ele, i) => {
    if (`${ele.source}` === expense.value)
      return (trackList.innerHTML += `
            <div id=${i} class="w-64 lg:w-80 mt-2 mb-2 flex justify-between bg-white/70 border-3 border-sky-900 rounded-lg">
            <span class="font-bold text-start capitalize text-sky-900">${ele.discrption}</span>
            <span class="font-bold text-start ">${ele.amount}</span>
            <p class="font-bold text-start capitalize text-sky-900">${ele.source}</p>
            <span class="option flex flex-col gap-2 py-2 mt-2 mx-2">
            <i onclick="editTask(this)" class="fa-regular fa-pen-to-square"></i>
            <i onclick="deleteTask(this); createList();" class="fa-solid fa-trash"></i>
            </span>
            </div>
            `);
  });
});
