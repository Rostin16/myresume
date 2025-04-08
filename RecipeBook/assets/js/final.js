var recipe = [
  {
    title: "Paneer Angara",
    ingrediants: "Paneer, Onion & Tomato, Fresh Cream, Indian Spices and so on..",
    instruction: "Paneer Angara is a restauarant style smoky curry made using cottage cheese. Paneer is cooked in a flavorful onion tomato cashew curry base, spiced with whole spices and spice powders. There are many different paneer curries and gravy recipes, I find this recipe interesting as it is a cross between a smoky paneer tikka and a creamy paneer butter masala. It is super simple to make without having to spend a lot of effort cooking the ingredients. It has a great smoky flavor, without having to grill the paneer or veggies. It tastes brilliant with any Indian flat bread and stores well too!",
    cuisine: "Indian",
  },
  {
    title: "Pasta",
    ingrediants: "spaghetti, Capcisum and so on..",
    instruction: "Get a taste of the Mediterranean with these comforting Italian-inspired pasta dishes. Serve up a bowl of spaghetti carbonara, cacio e pepe, lasagne and more",
    cuisine: "Italian",
  },
];

var addBtn = document.querySelector("#add-btn");
var form = document.querySelector("#form1");
var cancelBtn = document.querySelector("#cancel");

addBtn.onclick = function () {
  form.classList.add("active");
};

cancelBtn.onclick = function (e) {
  e.preventDefault();
  form.classList.remove("active");
  form.reset();
};

let idx = -1;
class Recipe {
  constructor() {
    this.loadFromLocalStorage();
  }
  Add() {
    idx = -1;
    document.getElementById('title').value = "";
    document.getElementById('ing').value = "";
    document.getElementById('inst').value = "";
    document.getElementById('cuisine').value = "";
  }

  Edit(index) {
    idx = index;
    document.getElementById('title').value = user[index].title;
    document.getElementById('ing').value = user[index].ingrediants;
    document.getElementById('inst').value = user[index].instruction;
    document.getElementById('cuisine').value = user[index].cuisine;

    form.classList.add("active");
  }

  AddUpdate() {
    if (validateForm()) {
      let index = idx;
      if (index > -1) {
      
        user[index].title = document.getElementById("title").value;
        user[index].ingrediants = document.getElementById("ing").value;
        user[index].instruction = document.getElementById("inst").value;
        user[index].cuisine = document.getElementById("cuisine").value;
      } else {
       
        var newRecipe = {
          title: document.getElementById("title").value,
          ingrediants: document.getElementById("ing").value,
          instruction: document.getElementById("inst").value,
          cuisine: document.getElementById("cuisine").value,
        };
        recipe.push(newRecipe);
      }

  
      this.saveToLocalStorage();

      this.list();

      form.reset();
      form.classList.remove("active");
    }
  }

  saveToLocalStorage() {
    localStorage.setItem("recipes", JSON.stringify(recipe));
  }

  loadFromLocalStorage() {
    const savedRecipes = localStorage.getItem("recipes");
    if (savedRecipes) {
      recipe = JSON.parse(savedRecipes);
    }
  }

  Delete(index) {
    recipe.splice(index, 1);
    this.list();
  }
  list() {
    var html = "";
    var i = 0;
    recipe.forEach((recipes) => {
      var tr = `
      <tr>
      <td>${recipes.title}</td>
      <td>${recipes.ingrediants}</td>
      <td>${recipes.instruction}</td>
      <td>${recipes.cuisine}</td>
      <td style="border-right: 0;">
       
          <button class = "delete-btn" style="background-color: rgb(255, 0, 0);" onclick="new Recipe().Delete(${i});"><i class="ri-delete-bin-6-line"></i></button>
      </td>
      </tr>
      `;
      html = html + tr;
      i++
    });
    document.getElementById('table-data').innerHTML = html;
  }
}
var recipe1 = new Recipe();
recipe1.list();

function validateForm() {
  let x = document.forms["form1"]["name"].value;
  if (x === "") {
    alert("All fields are compulsory");
    return false;
  }
  return true;
}
