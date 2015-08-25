angular.module('app').controller('mvNavBarLoginCtrl', function($scope, $http, mvIdentity, mvNotifier, mvAuth, $location){
    $scope.identity = mvIdentity;
    $scope.signin = function(username, password){
        mvAuth.authenticateUser(username, password).then(function(success){
            if(success){
                mvNotifier.notify("Signed in successfully!");
            }
            else{
                mvNotifier.notify("Incorrect Username/Password.");
            }
        });
    }

    $scope.signout = function(){
        mvAuth.logoutUser().then(function(){
            $scope.username = "";
            $scope.password = "";
            mvNotifier.notify("Signed out!");
            $location.path('/');
        });
    }
});

