function signUp(){
    let username = usernameSignup.value;
    let number = numberSignup.value;
    let upEmail = emailSignup.value;
    let upPassword = passwordSignup.value;
    if (username === ""|| number ==="" || upEmail=== ""|| upPassword === "") {
        alert("FILL UP THE REQUIRED SPACE");
    } else {
        alert("REGISTERED SUCCESSFUL");
        window.location.href = 'home.html'
        
    }
    localStorage.setItem('username', username);
    localStorage.setItem('number',number);
    localStorage.setItem('upEmail', upEmail);
    localStorage.setItem('upPassword', upPassword);
    
}
function login() {
    let storedEmail = localStorage.getItem('upEmail');
    let storedPassword = localStorage.getItem('upPassword');
    let email = emailSignin.value;
    let password = passwordSignin.value;
    if (email===""|| password==="") {
        alert("FILL UP THE REQUIRED SPACE");

    } else if  ( storedEmail=== email && storedPassword===password){
      
       alert("LOGIN SUCCESSFUL"); 
       window.location.href= 'home.html'
    } else {
        alert("ERROR!!!   INCORRECT EMAIL OR PASSWORD " );
       
    }
}
function toggler (){
    // let button = toggleButton.value;
    // button.classList.toggle("active");
    let nav = document.getElementById('navbarSupportedContent')
           nav.style.display = 'block';
// let list = document.getElementById('listed');
// list.style.display = 'block';
}

      // Create a new Date object
      const currentDate = new Date();
      // Get individual components of the date and time
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth() + 1; // Months are zero-based
      const day = currentDate.getDate();
      const hours = currentDate.getHours();
      const minutes = currentDate.getMinutes();
      const seconds = currentDate.getSeconds();

      // Format the date and time
      const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
      // Display the result
      console.log("Current Date and Time:", formattedDateTime);
     
      function transfer(){
  
    let hide = document.getElementById('hidden');
    hide.style.display= 'block';
   
      }
      function sending() {
        let hide = document.getElementById('hidden');
        hide.style.display= 'none';
       
        let dis = document.getElementById('display');
        dis.style.display= 'block';
        let user = document.getElementById('accountName').value;
    let account = document.getElementById('accountNumber').value;
    let amount = parseFloat(document.getElementById('amount').value);
    let   balance =parseFloat (document.getElementById ('accountBalance') .value);  
    let userObject= { user, account, amount,balance};
    localStorage.setItem('userObject',JSON.stringify(userObject));

    if(amount > balance){
// display.innerHTML=("INSUFFICIENT FUND");
alert("INSUFFICIENT FUND");
    }else{
        // display.innerHTML = ('YOU SUCCESFULLY TRANSFER ' + amount + ' TO  ' +  user + '' +  '' + formattedDateTime)
        alert('YOU SUCCESFULLY TRANSFER ' +amount + ' TO  ' + user+  account + '' + '' + formattedDateTime)
}
}
function history(){
    let storedUser = localStorage.getItem('userObject');
    transaction.innerHTML = storedUser
}function add(){
    let adds = save.value;
    accountBalance.value = ( + adds)
    alert(adds)
    let close = document.getElementById('saved')
    close.style.display='none';
} function addMoney() {
    let open = document.getElementById('saved')
    open.style.display='block';
} function buyData(){
    let buy =document.getElementById('dat')
    buy.style.display='block';
}
function data() {
    let buys =document.getElementById('dat')
    buys.style.display='none';
    let sate = document.getElementById('sat').value;
    let mb  = dated.value;
    alert('YOU SUBSCRIBE '+ mb + ' TO ' + sate);
    
}
function airtime(){
    let tim =document.getElementById('tim')
    tim.style.display='block';
}
function data() {
    let buys =document.getElementById('dat')
    buys.style.display='none';
    let sate = document.getElementById('sat').value;
    let mb  = dated.value;
    alert('YOU SUBSCRIBE '+ mb + ' TO ' + sate);
    
}