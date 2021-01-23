0. Forms are used everywhere in web applications to get imformation from the user. 
We can then process the information from forms in order to dynamically determine how the webpage will respond.

1. 
```html
  <form>
    <label for="firstName">First Name</label>
    <input type="text" placeholder="First Name" name="firstName"/>
    <label for="lastName">Last Name</label>
    <input type="text" placeholder="Last Name" name="lastName"/>
    <label for="birthYear">Birth Year</label>
    <input type="number" name="birthYear"/>
    <label for="password">Password</label>
    <input id="password" type="password" name="password"/>
    <label for="passwordConfirm">Confirm Password</label>
    <input id="confirm" type="password" name="passwordConfirm"/>
    <textarea placeholder="Tell us about yourself..."></textarea>
    <input type="submit" name="submitButton" value="Sign up!"/>
  </form>
```

2. Verify that the first and last names only have alphabet letters and dashes. Verify the password is a certain length. Verify that confirmation password is the same as the password. 

3. 
```js
let passwordEl = document.querySelector("#password");
let confirmEl = document.querySelector("#confirm");

passwordEl.addEventListener("blur", (e) => {
  if (e.target.value.length < 10) {
    alert("Password must be at least 10 characters long")
  }
})

confirmEl.addEventListener("blur", (e) => {
  let passwordString = passwordEl.value;
  if (e.target.value !== passwordString) {
    alert("Password confirmation must match password")
  }
})
```

4.
```js
let p = document.querySelector('p')

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  let num1 = Number(e.target[0].value);
  let num2 = Number(e.target[2].value);
  let op = e.target[1].value;

  switch(op){
    case "+": 
      p.innerText = num1 + num2;
      break;
    case "-": 
      p.innerText = num1 - num2;
      break;
    case "*": 
      p.innerText = num1 * num2;
      break;
    case "/": 
      p.innerText = num1 / num2;
      break;
    case "^": 
      p.innerText = num1 ** num2;
      break;
    default: 
      p.innerText = "Error, enture valid operator"
  }
})
```
