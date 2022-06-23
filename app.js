const characters =
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$";


function Generate(){
    let passwordLength = 15;
    let passOne = "";
    let passTwo = "";
    for(let i = 0; i < passwordLength; ++i){
        let numOne = Math.floor(Math.random() * (characters.length));
        passOne += characters.substring(numOne, numOne +1);
        //Right Input Text  
        let numTwo = Math.floor(Math.random() * (characters.length));
        passTwo += characters.substring(numTwo, numTwo +1);
    }
    document.getElementById("pass-one").value = passOne
    document.getElementById("pass-two").value = passTwo
 
}


function passOneCopy() {
    var copyOne = document.getElementById("pass-one");
    copyOne.select();
    copyOne.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyOne.value);
  
    swal({
      icon: 'success',
      title: 'Password Copied!',
      timer: 3000,
      didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
}


function passTwoCopy() {
    
    var copyTwo = document.getElementById("pass-two");
    copyTwo.select();
    copyTwo.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyTwo.value);
  
    /* Alert the copied text */
    swal({
      icon: 'success',
      title: 'Password Copied!',
      timer: 3000,
      didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
}
