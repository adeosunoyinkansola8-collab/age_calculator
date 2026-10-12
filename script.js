// let userAge=prompt("How old are you?");
// userAge=Number(userAge);
// console.log(typeof userAge);

// const currentYear=new Date().getFullYear();
// const yearOfBirth=currentYear-userAge;
// console.log("You were born in the year",yearOfBirth);








function calculateYear() {
    let name = document.getElementById("your-name").value;
    let age = document.getElementById("your-age").value;
    let result = document.getElementById("result");

    if (name.trim() === "" || age === "") {
        alert("Please enter your name and age!");
        return;
    }

    if (!Number.isInteger(Number(age)) ||
        Number(age) < 0 || Number(age) > 125) {
        alert("Please enter a valid age!");
        return;
    }

    let currentYear = new Date().getFullYear();

    let birthYear = currentYear - Number(age);

    let message = "Hello " + name +
        "! You were born in the year," + birthYear;

    alert(message);

    result.textContent = message;
}