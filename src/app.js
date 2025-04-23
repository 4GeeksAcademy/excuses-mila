
window.onload = function () {
  function excuse(array) {
    let random = Math.floor(Math.random() * array.length);
    return random;
  };
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  let random1 = who[excuse(who)];
  let random2 = action[excuse(action)];
  let random3 = what[excuse(what)];
  let random4 = when[excuse(when)];

  let excusa = random1 + " " + random2 + " " + random3 + " " + random4;

  document.getElementById("excuse").innerHTML = excusa;
};
