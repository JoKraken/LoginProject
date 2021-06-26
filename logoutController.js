var app = angular.module('myApp', []);
app.controller('logoutCtrl', function($scope) {
    if(!JSON.parse(localStorage.getItem("login")).stay)
        window.location.href = "./index.html";
    $scope.data = {}
    let id = JSON.parse(localStorage.getItem("login")).id;
    let list = JSON.parse(localStorage.getItem("list"));
    for(let i = 0; i < list.length; i++){
        if(list[i].id == id) {
            $scope.data = list[i];
        }
    }

    $scope.logout = function(){
        localStorage.setItem("login", JSON.stringify({id: 0, stay: false}));
        window.location.href = "./index.html";
    }
});
