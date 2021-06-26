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

    function getRandom(){
        let isDouble = false;
        let num = 0;
        do {
            num = Math.floor((Math.random() * 100000) + 1);
            for(let i = 0; i < $scope.data.list.length; i++){
                if($scope.data.list[i].id == num)
                    isDouble = true;
            }
        } while(isDouble);
        return num;
    }

    $scope.register = function(){
        try {
            let temp = {
                firstname: $scope.data.firstname,
                lastname: $scope.data.lastname,
                email: $scope.data.email,
                password: $scope.data.password,
                id: 0,

            }

            if($scope.data.list == null) {
                $scope.data.list = [];
                temp.id = Math.floor((Math.random() * 100000) + 1);
            } else
                temp.id = getRandom();

            if(!emailTaken()) {
                $scope.data.list.push(temp);
                localStorage.setItem("list", JSON.stringify($scope.data.list));
                localStorage.setItem("login", JSON.stringify({id: temp.id, stay: false }));
                window.location.href = "./website.html";
            } else
                document.getElementsByClassName("alert__register__errorText--email")[0].style.display = "block";
        }
        catch(err) {
            document.getElementsByClassName("alert__register__errorText")[0].style.display = "block";
        }
    }
});
