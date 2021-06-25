var app = angular.module('myApp', []);
app.controller('loginCtrl', function($scope) {
    $scope.data = {
        signIn: false,
        email: "",
        password: "",
        list: localStorage.getItem("list"),
    }

    $scope.login = function(){
        let foundEmail = false;
        let foundPassword = false;
        if($scope.data.list !== undefined){
            for(let i = 0; i < $scope.data.list.length; i++){
                if($scope.data.list[i].email == $scope.data.email){
                    foundEmail = true;
                    if($scope.data.list[i].password == $scope.data.password){
                        foundPassword = true;
                    }
                }
            }
        }
        if(!foundEmail || !foundPassword){
            document.getElementById("loginContainer__content__errorText").style.display = "block";
        }
    }

    $scope.checkValidation = function(){
        if($scope.data.email != "" && $scope.data.password != "" && $scope.data.signIn) {
            document.getElementsByClassName("loginContainer__content__button")[0].classList.add("loginContainer__content__button--active");
        } else {
            document.getElementsByClassName("loginContainer__content__button")[0].classList.remove("loginContainer__content__button--active");
        }
    }

    $scope.clickIconLogin = function(){
        document.getElementById("alert").style.display = "block";
        document.getElementById("alert__login").style.display = "block";
    }
});
