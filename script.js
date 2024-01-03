function signUp(){
    let username = usernameSignup.value;
    let number = numberSignup.value;
    let upEmail = emailSignup.value;
    let upPassword = passwordSignup.value;
         
   
  
    if (username === ""|| number ==="" || upEmail=== ""|| upPassword === "") {
        alert("FILL UP THE REQUIRED SPACE");
    } else {
        alert("REGISTERED SUCCESSFUL");
        window.location.href = 'home.html';
      
        
    }
    localStorage.setItem('username', username);
    localStorage.setItem('number',number);
    localStorage.setItem('upEmail', upEmail);
    localStorage.setItem('upPassword', upPassword);
     

     var collect = localStorage.getItem('username');
    
    //  document.getElementById('useded').innerHTML = collect;
    
   console.log(collect);
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
        let accountName = document.getElementById('accountName').value;
    let accountNumber = document.getElementById('accountNumber').value;
    let amount = parseFloat(document.getElementById('amount').value);
    let   balance = (document.getElementById ('accountBalance') .value);  
    let  newBalance = (parseFloat(document.getElementById('amount').value))-(parseFloat (document.getElementById ('accountBalance') .value))
    // let userObject= { accountName, accountNumber, amount,balance};
    localStorage.setItem('accountName');
    localStorage.setItem('accountNumber');
    localStorage.setItem('amount');
    localStorage.setItem('balance');
    if(amount > balance){
// display.innerHTML=("INSUFFICIENT FUND");
alert("INSUFFICIENT FUND");
    }else{
        // display.innerHTML = ('YOU SUCCESFULLY TRANSFER ' + amount + ' TO  ' +  user + '' +  '' + formattedDateTime)
        alert('YOU SUCCESFULLY TRANSFER ' +amount + ' TO  ' + accountName+  accountNumber + '' + '' + formattedDateTime)
}
}
function history(){
    let bed = localStorage.getItem('accountName');
    let be = localStorage.getItem('amount')
    let ret = formattedDateTime;
    transaction.innerHTML = ('YOU SEND '+  be+ ""     + 'TO '+bed + " "+ ret);
    console.log(bed)
}
function add(){
    let adds = save.value;
    accountBalance.innerHTML = adds
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
function time() {
    let tims =document.getElementById('tim')
    tims.style.display='none';
    let sated = document.getElementById('air').value;
    let airt = document.getElementById('airtim').value;
    let card  = Math.floor(100000000000 + Math.random()*900000000000);
    alert('YOU SUCCESFULLY BUY '+ airt + '   ' + sated +  ' card number: '  +  ' ' +   card); 
    
}
function borrow(){
    alert('NOT AVAILABLE')
}
function digit(){
    var random = Math.floor(Math.random()*1000000000);
    var padded = random.toString().padStart(10,'0');
    var acc =   padded;
    return acc;
    
}
window.onload = function(){
    var acc = digit();
    document.getElementById('digit').innerText = 'ACCOUNT NUMBER : '+ acc
}
function hi (){
return localStorage.getItem('username');

}function dispalyUsername(){
    var hello = hi()
    if (hello) {
        document.getElementById('useded').innerText =  ' HI '+hello;
    } else {
        document.getElementById('useded').innerText = " " ;
    }
}
document.addEventListener("DOMContentLoaded", function(){
    dispalyUsername();
})