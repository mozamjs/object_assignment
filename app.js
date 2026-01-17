

// 🧠 JavaScript Objects

// 🔁 Logic-Based (Objects + Arrays + Loops)

// 1. Display Student Info
// Given an array of student objects, display each student’s name and marks in a table
// using DOM.

// const students = [
//   { name: "Ali", marks: 85 },
//   { name: "Ahmed", marks: 90 },
//   { name: "Sara", marks: 78 },
//   { name: "Mozam", marks: 88 }
// ];

// const tablebody = document.querySelector("#studentTable tbody")

// for(let i = 0; i < students.length; i++)
// {
//     const row = document.createElement("tr");

//     const namecell = document.createElement("td");
//     namecell.innerHTML = students[i].name;

//     const markscell = document.createElement("td");
//     markscell.innerHTML = students[i].marks;

//     row.appendChild(namecell);
//     row.appendChild(markscell);

//     tablebody.appendChild(row);
// }

// 2nd method 

// students.forEach(student =>{

//   tablebody.innerHTML += `
//   <tr>
//       <td>${student.name}</td>
//       <td>${student.marks}</td>
//   </tr>
//   `;

// });




// 2. Find Top Scorer
// From a list of student objects with names and scores, find and display the top scorer.


// const students = [
//   { name: "Ali", score: 85 },
//   { name: "Sara", score: 92 },
//   { name: "Ahmed", score: 88 },
//   { name: "Zara", score: 95 }
// ];

// let topscorer = students[0];

// students.forEach(student => {
//   if(student.score > topscorer.score)
//   {
//     topscorer = student;
//   }
// });
// console.log("top scorer:");
// console.log("Name",topscorer.name);
// console.log("score",topscorer.score);



// 3. Filter Products by Price Range
// Create a function that takes a min and max price and filters an array of product objects
// accordingly.


// const products = [
//   { name: "Laptop", price: 120000 },
//   { name: "Mobile", price: 60000 },
//   { name: "Headphones", price: 8000 },
//   { name: "Keyboard", price: 4500 },
//   { name: "Monitor", price: 30000 }
// ];


// function filterByPrice(minPrice, maxPrice) {
//   let filteredProduct = [];

// products.forEach(product =>{
//     if(product.price >= minPrice && product.price <= maxPrice){

//         filteredProduct.push(product);
//     }
// });
// return filteredProduct;

// }
// console.log(filterByPrice(5000, 60000))


// solution 2 

// function filterByPrice(minPrice, maxPrice)
// {
//   return products.filter(product =>
//     product.price >= minPrice && product.price <= maxPrice
//   );
// }


// 4. Count Word Frequencies
// Given a paragraph from a textarea, count the frequency of each word and display it as a
// list.


// function countWords(){
//   const text = document.getElementById("text").value;

//   const output= document.getElementById("output");

//   // step 1: clean text 
//   const words = text
//   .toLowerCase()
//   .trim()
//   .split(/\s+/)

//   let frequency = {};

// // step 2: count words 
// words.forEach(word =>{
//   if(word !== "")
//   {
//     frequency[word]=(frequency[word]||0)+1;
//   }
// });

// //step 3: display result

// output.innerHTML = "";

// for(let word in frequency)
// {
//   output.innerHTML += `<li>${word} : ${frequency[word]}</li>`;
// }

// }    




// 5. Group Users by Role
// Given an array of user objects ({name, role}), group and display users under role
// // headings.

// const users = [
//   { name:"ali", role:"admin"},
//   { name: "Sara", role: "editor" },
//   { name: "Ahmed", role: "admin" },
//   { name: "Zara", role: "user" },
//   { name: "Bilal", role: "editor"}
// ]

// let groupedUsers = {};

// users.forEach(user =>{
//   if(!groupedUsers[user.role]){
//     groupedUsers[user.role]= [];
//   }
//   groupedUsers[user.role].push(user.name);
// });

// console.log(groupedUsers);



// 6. Sort Products by Price
// Display a list of products sorted by price (ascending/descending toggle via button).


// const products = [
//   { name: "Laptop", price: 120000 },
//   { name: "Mobile", price: 60000 },
//   { name: "Headphones", price: 8000 },
//   { name: "Keyboard", price: 4500 },
//   { name: "Monitor", price: 30000 }
// ];

// let isAscending = true;

// function sortProducts()
// {
//   if(isAscending){
//     products.sort((a,b) => a.price - b.price);
//   }else{
//     products.sort((a,b) => b.price - a.price);
//   }
//   isAscending = !isAscending;
//   displayproducts();
// }

// function displayproducts()
// {
//   const list = document.getElementById("list")
//   list.innerHTML = "";

//   products.forEach(product =>{
//     list.innerHTML += `<li>Name: ${product.name} - Rs ${product.price}</li>`;
//   });

// }



// 7. Dynamic Form Inputs to Object
// Create a form with name, email, and age. On submit, convert the input into an object
// and show the result.

// const form = document.getElementById("userForm");
// const output = document.getElementById("output");

// form.addEventListener("submit",function(event){

//   event.preventDefault();

//   const user = {
//     Name: document.getElementById("name").value,
//     Email: document.getElementById("email").value,
//     age: Number(document.getElementById("age").value)
//   };

//   // output.textContent = JSON.stringify(user,Null,2);
//   output.innerHTML =
//   "Name: " + user.Name + "<br>" +
//   "Email: " + user.Email + "<br>" +
//   "Age: " + user.age;
// });



// 8. Render Nested Object Data
// Given a nested object like a user with address, display all info in a structured format in
// the DOM.

// const user = {
//   name: "Mozam",
//   email: "mozam@example.com",
//   age: 20,
//   address: {
//     city: "Quetta",
//     street: "Jinnah Road",
//     zip: "87300"
//   }
// };

// const output = document.getElementById("output");

// output.innerHTML = `
//   <h2>User Information</h2>
//   <p><strong>Name:</strong>${user.name}</p>
//   <p><strong>Email:</strong>${user.emil}</p>
//   <p><strong>Name:</strong>${user.age}</p>

//   <h3>Address</h3>
//   <p><strong>City:</strong> ${user.address.city}</p>
//   <p><strong>Street:</strong> ${user.address.street}</p>
//   <p><strong>Zip:</strong> ${user.address.zip}</p>
// `



// 9. Calculate Cart Total
// Given an array of cart items ({name, price, quantity}), display a full cart with
// totals using DOM.

// const cart = [
//   { name: "Laptop", price: 120000, quantity: 1 },
//   { name: "Mouse", price: 1500, quantity: 2 },
//   { name: "Keyboard", price: 4500, quantity: 1 }
// ];

// const cartBody = document.getElementById("cartBody");
// const grandTotalEl = document.getElementById("grandTotal");

// let grandTotal = 0;

// cart.forEach(item => {
//   const itemTotal = item.price * item.quantity;
//   grandTotal += itemTotal;

//   cartBody.innerHTML += `
//   <tr>
//       <td>${item.name}</td>
//       <td>Rs ${item.price}</td>
//       <td>${item.quantity}</td>
//       <td>Rs ${itemTotal}</td>
//   </tr>
//   `;

// });
// grandTotalEl.innerHTML = `Grand Total: Rs ${grandTotal}`;


// 10. Checkbox Filter
// Display a list of items. Use checkboxes to filter them (e.g., categories like "Fruits",
// "Vegetables").

// const items = [
//   { name: "Apple", category: "Fruits" },
//   { name: "Banana", category: "Fruits" },
//   { name: "Carrot", category: "vegetables" },
//   { name: "Potato", category: "vegetables" }
// ];

// const list = document.getElementById("itemList");
// const checkboxes = document.querySelectorAll('input[type="checkbox"]');
// console.log(checkboxes.length)

// function renderItems()
// {
//   list.innerHTML="";


// //get checked categories
// let selectedCategories = [];

// checkboxes.forEach(cb => {
//   if(cb.checked){
//     selectedCategories.push(cb.value);
//   }
// });

// // filter and display

// items.forEach(item =>{
//   if(selectedCategories.includes(item.category)){
//     list.innerHTML += `<li>${item.name} (${item.category})</li>`
//   }
// });
// }

// checkboxes.forEach(cb=>{
//   cb.addEventListener("change",renderItems)
// })

// renderItems();


// ️ DOM Interaction + Objects + Events
// 11. Live Search List
// From an array of names or products, filter the list as the user types into an input field.




// 12. To-Do App with Object Tasks
// Each to-do item is an object ({title, completed}). Render list, allow marking as
// complete, and remove on click.



// 13. Form to Object Array
// Let users submit a form multiple times. Store each entry as an object in an array and
// display all entries in real time.



// 14. Edit Object in List
// Display a list of users with "Edit" buttons. On click, allow editing and update the object
// and UI.



// 15. Dynamic Table Generator
// Given an array of objects, generate a table with headers based on object keys and rows
// based on values.



// 🧩 Problem Solving / Deeper Logic
// 16. Frequency of Characters
// Take an input string, count character frequencies using an object, and display results.



// 17. Nested Category Display
// Render categories and subcategories from a nested object structure using recursion
// (tree view style).



// 18. Sort by Multiple Properties
// Sort an array of student objects first by grade, then by name if grades are equal.



// 19. Search and Highlight
// Search through an array of paragraph texts, highlight matches using DOM manipulation.



// 20. Custom Dropdown from Object Data
// Use a country object ({code: "IN", name: "India"}) to populate a dropdown. On
// select, show selected country's details.




























