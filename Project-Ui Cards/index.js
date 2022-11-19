let selectedValue = document.getElementById("list").value;
function getSelectedValue() {
  selectedValue = document.getElementById("list").value;
}

const employeeArr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

// employeeArr.forEach(myFun);
// document.getElementById("item").innerHTML = text;
// function myFun(user) {
//   text +=
//     user.id +
//     "." +
//     user.name +
//     ":" +
//     user.age +
//     ":" +
//     user.profession +
//     ":" +
//     "<br>";
// }

filterEmployee = () => {
  var filteredArray = employeeArr.filter(filteredEmployee);
  var text = "";
  filteredArray.forEach(myFun);

  function myFun(user) {
    text +=
      user.id +
      "." +
      user.name +
      ":" +
      user.age +
      ":" +
      user.profession +
      ":" +
      "<br>";
  }
  document.getElementById("item").innerHTML = text;
};

filteredEmployee = (employee) => {
  if (selectedValue == "profession") {
    return true;
  }
  return employee.profession == selectedValue;
};
filterEmployee();