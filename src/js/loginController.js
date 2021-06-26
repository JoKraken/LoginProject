var app = angular.module('myApp', []);
app.controller('loginCtrl', function($scope) {
    $scope.data = {
        signIn: false,
        email: "",
        password: "",
        list: JSON.parse(localStorage.getItem("list"))
    }

    $scope.login = function(){
        console.log($scope.data.list);
        let foundEmail = false;
        let foundPassword = false;
        let id = 0;
        if($scope.data.list != null){
            for(let i = 0; i < $scope.data.list.length; i++){
                if($scope.data.list[i].email == $scope.data.email){
                    foundEmail = true;
                    if($scope.data.list[i].password == $scope.data.password){
                        foundPassword = true;
                        id = $scope.data.list[i].id;
                    }
                }
            }
        }
        if(!foundEmail || !foundPassword){
            document.getElementsByClassName("loginContainer__content__errorText")[0].style.display = "block";
        } else {
            localStorage.setItem("login", JSON.stringify({id: id, stay: $scope.data.signIn}));
            window.location.href = "../src/website.html";
        }
    }

    $scope.checkValidation = function(){
        if($scope.data.email != "" && $scope.data.password != "") {
            document.getElementsByClassName("loginContainer__content__button")[0].classList.add("loginContainer__content__button--active");
        } else {
            document.getElementsByClassName("loginContainer__content__button")[0].classList.remove("loginContainer__content__button--active");
        }
    }

    $scope.clickIconLogin = function(){
        document.getElementById("alert").classList.add("alert--show");
        document.getElementById("alert__login").classList.add("alert--show");
    }
});
