function checkPhone(phonenumber) {
    var num = /^1\d{10}$/;
    
    return(num.test(phonenumber));
}

function checkPassword(password){
    // var passw = /^(?=(?:.*?[A-Za-z]){1})(?=(?:.*?[0-9]){2})[0-9a-zA-Z@#&?*]{9,15}$/
    // var passw = /^[@#&?*]{1}[0-9]{2,}[0-9a-zA-Z@#&?*]{9,15}$/;
    var passw = /^(?=(?:.*?[@#&?*]){1})(?=(?:.*?[A-Za-z]){1})(?=(?:.*?[0-9]){2})[0-9a-zA-Z@#&?*]{9,15}$/

    return(passw.test(password));
}

function check(){
    var a = checkPhone(phonenumber.value);
    var b = checkPassword(password.value);
    if(a&&b){
        alert("修改成功");
    }
    else{
        alert("格式错误");
    }
}