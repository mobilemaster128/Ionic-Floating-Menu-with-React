angular.module('starter.controllers', ['ion-floating-menu'])

.controller('MainCtrl', function($scope) {
    $scope.myEvent = function() {
        alert("event1");
    }
    $scope.$on('floating-menu:open', function() {
        //alert('open');
    });
    $scope.$on('floating-menu:close', function() {
        //alert('close');
    });
})

.controller('DashCtrl', function($scope) {})

.controller('InfoCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.chats = Chats.all();
    $scope.remove = function(chat) {
        Chats.remove(chat);
    };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
    $scope.settings = {
        enableFriends: true
    };
});