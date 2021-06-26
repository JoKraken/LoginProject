app.controller('registerCtrl', function($scope) {
    $scope.data = {
        agree: false,
        email: "",
        password: "",
        firstname: "",
        lastname: "",
        list: JSON.parse(localStorage.getItem("list")),
        emailError: false
    }
    console.log($scope.data);

    $scope.checkValidation = function(){
        if($scope.data.firstname != "" && $scope.data.lastname != "" && $scope.data.email != "" && $scope.data.password != "" && $scope.data.agree) {
            document.getElementsByClassName("alert__register__button")[0].classList.add("loginContainer__content__button--active");
        } else {
            document.getElementsByClassName("alert__register__button")[0].classList.remove("loginContainer__content__button--active");
        }
    }

    function deleteData() {
        $scope.data.firstname = "";
        $scope.data.lastname = "";
        $scope.data.email = "";
        $scope.data.password = "";
        $scope.data.agree = false;
    }

    $scope.cancel = function(){
        document.getElementById('alert').classList.remove('alert--show');
        document.getElementById('alert__register').classList.remove('alert--show');
        deleteData();
    }

    function emailTaken(){
        for(let i = 0; i < $scope.data.list.length; i++){
            if($scope.data.list[i].email == $scope.data.email) {
                $scope.data.emailError = true;
                return true;
            }
        }
        return false;
    }

    $scope.register = function(){
        try {
            let temp = {
                firstname: $scope.data.firstname,
                lastname: $scope.data.lastname,
                email: $scope.data.email,
                password: $scope.data.password,

            }

            if($scope.data.list == null) {
                $scope.data.list = [];
            }
            if(!emailTaken()) {
                $scope.data.list.push(temp);
                localStorage.setItem("list", JSON.stringify($scope.data.list));
            } else
                document.getElementsByClassName("alert__register__errorText--email")[0].style.display = "block";
        }
        catch(err) {
            document.getElementsByClassName("alert__register__errorText")[0].style.display = "block";
        }
    }
});
