function valid(form) {
    var fail = false;
    var name = form.name.value;
    var email = form.email.value;
    var password = form.Password.value;
    var password_check = form.Password_check.value;
    var state = form.state.value;

    var email_pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    if(name== ""|| name == " "){
        fail = "Input yor name"
    }
    else if(email_pattern.test(email) == false){
         fail = "Input correct Email"
    }
    else if(password =="" || password == " "){
         fail = "Input password"
    }
     else if(password_check =="" || password_check == " "){
         fail = "Repeat your password"
    }
     else if (password != password_check){
        fail = "Password does not match"
    }
    else if (state == ""){
        fail = "Check your sex"
    }

    if(fail){
        alert(fail);
        return false;
    } else{
         window.location = "https://translate.google.com.ua/"
    }
    }