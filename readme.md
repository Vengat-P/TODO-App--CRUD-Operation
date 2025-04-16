# My Wallet tracker (CRUD - Operation) Using Javascript

## Overview
Create a simple TODO APP to track your income and expense details **HTML**,**TailwindCss** And **javascript**. 

## Tech Stack
- **HTML** for structure 
- **TailwindCss** for styling
- **VSCode** for development
- **fontAwesome** for icons
- **Google-fonts** for fonts
- **JavaScript** for applying logics

## Logics  

- **step 1 -** get all input elements from id selector

- **step 2 -** apply formvalidation input fields cannot be empty and get data from there to acces further. 

- **step 3 -** Apply submit logic to click submit button using add event listener function.  this function will include preventDefault for avoiding forms unessecery re-rendering.Inside of this function call fromvalidation function to get data's and stored.

- **step 4 -** After getting data's from input fields store that data in array of object .loclastorage will used to stored this data. use arrayname.push method to push data to array of objaect .

- **step 5 -** make function (createList) for dynamic display for stored data after we clicked add this function will work. inside of this function one more function is there (updateincome) income,expense and net balance calcultion function this will show cumulative values of income's and expense's and display the final value in dashboard.

- **step 6 -** make a function(reset form) for clear input fields. and call this function inside of createList function because after creating one entry input fields also back to old position .

- **step 7 -** create one IFEE function for clearing empty objects from the localstorage otherwise first index value will be undefined and that will also display

- **step 8 -** add function to edit already stored and displayed data. it should be pass parameter of function call this keyword because then only particular data we can edit . inside of this function we need to call delet function as well because previous data will delete and updated data will show otherwise previous data will also show in different place .

- **step 9 -** add function to delete displayed data from parent element we need to remove. so use splice to  remove index and this function also function parameter will pass this keyword because which one we click that one will need to delete .

- **step 10 -** make a function for fillter and display only needed data using radion buttons. For this use addeventlistener function for all three button (all,income,expense). inside of this clear previous dynamic display value and show data onle needed occording to passing the conditions . 

## How to Use  

- **step-1 -** Fill the input fields discribe your details and select income or expense and click add icon . suppose if you need to clear input fields click clear (input fields cannot be empty)

- **step-2 -** once you add entries one by one automatically your entries will show and cumulative calculation of purse value will show on top of the Dash board.

- **step-3 -** If you need to edit any of the entry click edit icon and fill the details and click add icon.

- **step 4 -** If you want to delete Any of entry click delete icon of that particular entry


## Features

- Responsive Design
- Clean and Minimalistic Layout

## Demo
- https://my-wallet-tracker.netlify.app/

## Authors

- [@ Vengat p](https://github.com/Vengat-P)



