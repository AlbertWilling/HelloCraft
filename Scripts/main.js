function validateForm(e){
  e.preventDefault();

  let name = document.querySelector('#name').value;
  let email = document.querySelector('#email').value;
  let msg = document.querySelector('#form-msg');

  if(name == '' || name == null || email == '' || email == null){
    msg.className = 'msg-red';
    msg.innerHTML = 'Please fill all fields';
  }

  else if (!/^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ\x20]+$/.test(name)){
    msg.className = 'msg-red';
    msg.innerHTML = 'Name can have only letters and spaces';
  }
    
  else if (!/^[A-ZĄĆĘŁŃÓŚŹŻ]/.test(name)){
    msg.className = 'msg-red';
    msg.innerHTML = 'Name should start with a capital letter';
  }

  else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
    msg.className = 'msg-red';
    msg.innerHTML = "Pleae enter valid email address"
  }
  
  else{
  msg.className = 'msg-green';
  msg.innerHTML = 'Sent successfully.' + '<br>' + name + ' has registered ' + email + ' address.';
  document.querySelector('#form').reset();
  }  
}











document.querySelector('form').addEventListener('submit', validateForm, false);