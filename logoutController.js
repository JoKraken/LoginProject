var app = angular.module('myApp', []);
app.controller('logoutCtrl', function($scope) {
    $scope.data = {}
    let id = localStorage.getItem("login");
    let list = JSON.parse(localStorage.getItem("list"));
    for(let i = 0; i < list.length; i++){
        if(list[i].id == id) {
            $scope.data = list[i];
        }
    }

    $scope.logout = function(){
        localStorage.setItem("login", JSON.stringify(""));
        window.location.href = "./index.html";
    }
});
