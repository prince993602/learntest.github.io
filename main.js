function logout(){
    var conf = confirm("are You Sure to Log out ?");
    if(conf == true){
        window.close()
    }

}
function show(){
    document.getElementsByClassName("form-box")[0].style.width="280px";
    document.getElementsByClassName("form-box")[0].style.height="330px";
    
}
function cls(){
    document.getElementsByClassName("form-box")[0].style.width="0px";
    document.getElementsByClassName("form-box")[0].style.height="0px";
}





