//Create Class
class formValidation{

    //Create properties for object
    formValues = {
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
    }

    errorValues = {
        userNameErr: "",
        emailErr: "",
        passwordErr: "",
        confirmPasswordErr: "",
    }

    //Create Function or Method
    showErrMsg(index,msg){
        //Get by Class name                                        //Index[0]
        let formGroup = document.getElementsByClassName("form-group")[index]
        //Pass CSS class to show Error Msg
        formGroup.classList.add('error')
        //Pass HTML tag to show Text msg
        formGroup.getElementsByTagName('p')[0].textContent = msg

    }
    showSuccessMsg(index){
        let formGroup = document.getElementsByClassName('form-group')[index]
        //Remove Error class first after add Success Class
        formGroup.classList.remove('error')
        //Add Success Class
        formGroup.classList.add('success')
    }
    getInputValues(){
        this.formValues.userName = document.getElementById("userName").value
        this.formValues.email = document.getElementById("email").value
        this.formValues.password = document.getElementById("password").value
        this.formValues.confirmPassword = document.getElementById("confirmPassword").value
    }
    validateUserName(){
        if(this.formValues.userName == ""){
            this.errorValues.userNameErr = "* Please Enter Your Username"
            this.showErrMsg(0,this.errorValues.userNameErr)
        }else if(this.formValues.userName.length <= 2){
            this.errorValues.userNameErr = "* Atleast Enter Above 2 Character"
            this.showErrMsg(0,this.errorValues.userNameErr)
        }else{
            this.errorValues.userNameErr = ""
            this.showSuccessMsg(0)
        }
    }
    validateEmail(){
        //name@domain.com
        let regExp = /^([a-zA-Z0-9-_\.]+)@([a-zA-Z0-9\.]+).([a-zA-Z0-9\.])$/
        if(this.formValues.email == ""){
            this.errorValues.emailErr = "* Please Enter Your Email"
            this.showErrMsg(1,this.errorValues.emailErr)
        }else if(!(regExp.test(this.formValues.email))){
            this.errorValues.emailErr="* Please Enter Valid Email"
            this.showErrMsg(1,this.errorValues.emailErr)
        }else{
            this.errorValues.emailErr=""
            this.showSuccessMsg(1)
        }
    }
    validatePassword(){
        if(this.formValues.password == ""){
            this.errorValues.passwordErr = "* Please Enter Password"
            this.showErrMsg(2,this.errorValues.passwordErr)
        }else if(this.formValues.password.length<= 3 || this.formValues.password.length>=15){
            this.errorValues.passwordErr ="* Enter above 3 char & below 15 char"
            this.showErrMsg(2,this.errorValues.passwordErr)
        }else{
            this.errorValues.passwordErr=""
            this.showSuccessMsg(2)
        }
    }
    validateConfirmPassword(){
        if(this.formValues.confirmPassword == ""){
            this.errorValues.confirmPasswordErr = "* Please Enter Confirm Password"
            this.showErrMsg(3,this.errorValues.confirmPasswordErr)
        }else if(this.formValues.password !== this.formValues.confirmPassword){
            this.errorValues.confirmPasswordErr = "* Mismatch Password"
            this.showErrMsg(3,this.errorValues.confirmPasswordErr)
        }else{
            this.errorValues.confirmPasswordErr = ""
            this.showSuccessMsg(3)
        }

    }
    //Remove Inputs after sumbitting the form
    removeInputs(){
 
    }

}

//Create new Object for class
let validateUserInputs = new formValidation()

//Get by className                    //First index                //disable auto refresh
document.getElementsByClassName("form")[0].addEventListener('submit',event => {
    //This used to disable Refresh page
    event.preventDefault()
    validateUserInputs.getInputValues()
    validateUserInputs.validateUserName()
    validateUserInputs.validateEmail()
    validateUserInputs.validatePassword()
    validateUserInputs.validateConfirmPassword()
})