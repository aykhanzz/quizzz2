function makePassword() {
  var lowercase = 'abcdefghijklmnopqrstuvwxyz';
  var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numbers = '1234567890';
  var symbols = '!@#$%^&*()/:;<=>?@}{';
  
  var length = parseInt(document.getElementById("passwordLength").value);
  
  var charset = lowercase + uppercase + numbers + symbols;

  var password = "";
  for (var i = 0; i < length; i++) {
      password += charset.charAt(Math.floor(Math.random() * charset.length));
  }                                          
  document.getElementById("password").value = password;
}
