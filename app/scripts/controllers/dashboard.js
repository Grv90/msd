'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('yapp')
  .controller('DashboardCtrl', function($scope, $state) {

    $scope.$state = $state;

    $scope.icons = [{
      "name": "item1",
      "class": "carrerIcon",
      "url": "../images/asset-circle-employees.png",
      "label": "Employees"
    }, {
      "name": "item2",
      "class": "moneyIcon",
      "url": "../images/asset-circle-car.png",
      "label": "Car"
    }, {
      "name": "item3",
      "class": "healthIcon",
      "url": "../images/asset-circle-hospital.png",
      "label": "Hospital"
    }, {
      "name": "item4",
      "class": "carrerIcon",
      "url": "../images/asset-circle-leadership.png",
      "label": "Leadership"
    }, {
      "name": "item5",
      "class": "moneyIcon",
      "url": "../images/asset-circle-money.png",
      "label": "Money"
    }, {
      "name": "item6",
      "class": "workIcon",
      "url": "../images/asset-circle-motherhood.png",
      "label": "Motherhood"
    }, {
      "name": "item7",
      "class": "carrerIcon",
      "url": "../images/asset-circle-openbook.png",
      "label": "Openbook"
    }, {
      "name": "item8",
      "class": "moneyIcon",
      "url": "../images/asset-circle-poor.png",
      "label": "Poor"
    }, {
      "name": "item9",
      "class": "healthIcon",
      "url": "../images/asset-circle-report.png",
      "label": "Report"
    }, {
      "name": "item10",
      "class": "healthIcon",
      "url": "../images/asset-circle-stethoscope.png",
      "label": "Stethoscope"
    }, {
      "name": "item11",
      "class": "workIcon",
      "url": "../images/asset-circle-sunbed.png",
      "label": "Sunbed"
    }, {
      "name": "item11",
      "class": "workIcon",
      "url": "../images/asset-circle-jugglinghouseandfamily.png",
      "label": "Juggling House"
    }]

    shuffle($scope.icons);
$scope.count=1;


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


    $(document).ready(function() {
      $('#icons img').draggable({
        revert: "invalid",
        stack: ".draggable"
      });
      $('#money').droppable({
        tolerance: 'pointer',
        accept: '#icons .moneyIcon',
        activeClass: "ui-state-active",
        hoverClass: "ui-state-hover",
        drop: function(event, ui) {
          var itemEl = $(ui.draggable);
          if (itemEl.length > 0) {
            console.log('appended item');

            $('#message').show();
            $('#message').text('Your Drop is Correct');
            setTimeout(function() {
              $('#message').hide();

            }, 3000);
console.log($scope.count);
            if($scope.count==12){
               $state.go('end');
            }else {
              $scope.count=$scope.count+1;
            }

            itemEl.css({
              top: 0,
              left: 0,
               padding: 5
            }).appendTo('#money ul');
          }
        },
        stop: function( event, ui ) {
              $('#message').show();
            $('#message').text('Wrong Drop, Try Again');
            setTimeout(function() {
              $('#message').hide();
            },3000)

        }
      });
      $('#career').droppable({
        tolerance: 'pointer',
        accept: '#icons .carrerIcon',
        activeClass: "ui-state-active",
        hoverClass: "ui-state-hover",
        drop: function(event, ui) {
          var itemEl = $(ui.draggable);
          if (itemEl.length > 0) {
            console.log('appended item');
            $('#message').show();
            $('#message').text('Your Drop is Correct');
            setTimeout(function() {
              $('#message').hide();
            }, 3000);
            console.log($scope.count);
            if($scope.count==12){
            $state.go('end');
            }else {
              $scope.count=$scope.count+1;
            }

            itemEl.css({
              top: 0,
              left: 0,
              padding: 5
            }).appendTo('#career ul');
          }
        }
      });
      $('#health').droppable({
        tolerance: 'pointer',
        accept: '#icons .healthIcon',
        activeClass: "ui-state-active",
        hoverClass: "ui-state-hover",
        drop: function(event, ui) {
          var itemEl = $(ui.draggable);
          if (itemEl.length > 0) {
            console.log('appended item');
              $('#message').show();
            $('#message').text('Your Drop is Correct');
            setTimeout(function() {
              $('#message').hide();
            }, 3000);
              console.log($scope.count);
            if($scope.count==12){
              $state.go('end');
            }else {
              $scope.count=$scope.count+1;
            }
            itemEl.css({
              top: 0,
              left: 0,
               padding: 5
            }).appendTo('#health ul');
          }
        }
      });
    ;
      $('#worklife').droppable({
        tolerance: 'pointer',
        accept: '#icons .workIcon',
        activeClass: "ui-state-active",
        hoverClass: "ui-state-hover",
        drop: function(event, ui) {
          var itemEl = $(ui.draggable);
          if (itemEl.length > 0) {
            console.log('appended item');
            $('#message').show();
            $('#message').text('Your Drop is Correct');
            setTimeout(function() {
              $('#message').hide();
            }, 3000);
            console.log($scope.count);
            if($scope.count==12){
            $state.go('end');
            }else {
              $scope.count=$scope.count+1;
            }
            itemEl.css({
              top: 0,
              left: 0,
               padding: 5
            }).appendTo('#worklife ul');
          }
        }
      });

    });

  });
