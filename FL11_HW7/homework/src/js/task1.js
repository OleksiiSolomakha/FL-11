let long = 6;
let user = 'user@gmail.com';
let admin = 'admin@gmail.com';
let upass = 'UserPass';
let apass = 'AdminPass';
let mail = prompt('Please, write your e-mail');
if (mail === '' || mail === null) {
    alert('Canceled');
} else if (mail.length < long) {
    alert('I don’t know any emails having name length less than 6 symbols');
} else if (mail === user || mail === admin) {
  let pass = prompt('Please, write your password');
  if (pass === '' || pass === null) {
    alert('Canceled');
  } else if (mail === user && pass === upass || mail === admin && pass === apass) {
    let change = confirm('Do you want to change your password?');
    if (change === false) {
      alert('You have failed the change.');
    } else if (change === true) {
      let oldpass = prompt('Please, write your old password');
      if (oldpass === pass) {
        let newpass = prompt('Please, write new password');
        let newpass2 = '';
        if (newpass.length < long-1) {
          alert('It’s too short password. Sorry.');
        } else {
          newpass2 = prompt('Please, repeat new password');
        }
        if (newpass2 === newpass){
          alert('You have successfully changed your password');
        } else {
          alert('You wrote the wrong password.');
        }
      } else {
        alert('You have failed the change.');
      }
    }
  } else {
    alert('Wrong password');
  }
} else {
  alert('I don’t know you');
}