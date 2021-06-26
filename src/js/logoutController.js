var app = angular.module('myApp', []);
app.controller('logoutCtrl', function($scope) {
    let login = JSON.parse(localStorage.getItem("login"));
    if(login == undefined) {
        window.location.href = "../src/index.html";
    } else if(login.stay){
        if(login.num == undefined) {
            login.num = 1;
            localStorage.setItem("login", JSON.stringify(login));
        } else if(login.num < 5) {
            login.num++;
            localStorage.setItem("login", JSON.stringify(login));
        } else {
            login.stay = false;
            login.num = undefined;
            localStorage.setItem("login", JSON.stringify(login));
            window.location.href = "../src/index.html";
        }
    } else if(!login.stay && login.num != undefined)
        window.location.href = "../src/index.html";
    else {
        login.num = 1;
        localStorage.setItem("login", JSON.stringify(login));
    }
    $scope.data = {}
    let id = login.id;
    let list = JSON.parse(localStorage.getItem("list"));
    for(let i = 0; i < list.length; i++){
        if(list[i].id == id) {
            $scope.data = list[i];
        }
    }

    $scope.logout = function(){
        localStorage.setItem("login", JSON.stringify({id: 0, stay: false}));
        window.location.href = "../src/index.html";
    }
});
