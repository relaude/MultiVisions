angular.module('app').controller('mvMainCtrl',function($scope){
    $scope.courses = [
        {name: "Course1", featured:true, published: new Date('1/1/2015')},
        {name: "Course2", featured:false, published: new Date('2/1/2015')},
        {name: "Cours3", featured:true, published: new Date('3/1/2015')},
        {name: "Course4", featured:false, published: new Date('4/1/2015')}
    ];
});