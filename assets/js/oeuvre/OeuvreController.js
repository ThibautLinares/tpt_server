'use strict';

angular.module('mip').controller('OeuvreCtrl', ['$rootScope','$scope','OeuvreService','$state','$stateParams', 'LifiService', 'DiffuserService', '$sce',
function($rootScope,$scope,OeuvreService,$state,$stateParams, LifiService, DiffuserService, $sce){


  $scope.userIsAuthenticated(function(){

    if($scope.isAuthenticated == false) {
      $state.go('home');
    }

  });

  $scope.oeuvre = {};

  $scope.update = false;

  $scope.editLifi = false;
  $scope.addLifi = false;

  $scope.editDiffuser = false;
  $scope.addDiffuser = false;

  $scope.isUpdateImage = false;


  $scope.updateImage = function() {
    $scope.isUpdateImage = !$scope.isUpdateImage;
  }

  $scope.isUpdateVideo = false;

  $scope.updateVideo = function() {
    $scope.isUpdateVideo = !$scope.isUpdateVideo;
  }

  $scope.isUpdateAudio = false;

  $scope.updateAudio = function() {
    $scope.isUpdateAudio = !$scope.isUpdateAudio;
  }

  if($stateParams.id) {
    $scope.oeuvre.id = $stateParams.id;
    OeuvreService.getOeuvre($scope.oeuvre).then(function(response) {
      $scope.oeuvre = response;
      if($scope.oeuvre.video) {
        if($scope.oeuvre.video.url) {
          $scope.video = {};
          $scope.video.theme = "bower_components/videogular-themes-default/videogular.css";
          $scope.video.sources = 
          [
            {src: $sce.trustAsResourceUrl("/videos/uploads/"+$scope.oeuvre.video.url), type: "video/mp4"}
          ];
          $scope.type = 'video';
        }
      }

      if($scope.oeuvre.audio) {
        if($scope.oeuvre.audio.url) {
          $scope.audio = {};
          $scope.audio.theme = "bower_components/videogular-themes-default/videogular.css";
          $scope.audio.sources = 
          [
            {src: $sce.trustAsResourceUrl("/audios/uploads/"+$scope.oeuvre.audio.url), type: "audio/mpeg"}
          ];
        }
      }
    });
    $scope.update = true;
  }

  $scope.addOeuvre = function() {
    var fd = new FormData();
    fd.append('oeuvre', JSON.stringify($scope.oeuvre));
    fd.append('type', $scope.type);
    if($scope.type == 'image'){
      console.log("image");
      fd.append('images', $scope.imageModel);
      fd.append('audio', $scope.audioModel);
    }
    else if($scope.type == 'video'){
      console.log("video");
      fd.append('video', $scope.videoModel);
    }
    console.log(fd);
    OeuvreService.addOeuvre(fd).then(function(response) {
      $state.go('oeuvre');
    });
  }

  $scope.updateOeuvre = function() {
    if(!$scope.oeuvre.video) {
      $scope.isUpdateVideo = true;
    }
    if(!$scope.oeuvre.images) {
      $scope.isUpdateImage = true;
    }
    if(!$scope.oeuvre.audio) {
      $scope.isUpdateAudio = true;
    }
    var fd = new FormData();
    fd.append('oeuvre', JSON.stringify($scope.oeuvre));
    if($scope.isUpdateImage && $scope.imageModel) {
      console.log("image");
      fd.append('updateImage', true);
      fd.append('images', $scope.imageModel);
    }
    if($scope.isUpdateAudio && $scope.audioModel) {
      console.log("audio");
      fd.append('updateAudio', true);
      fd.append('audio', $scope.audioModel);
    }
    if($scope.isUpdateVideo && $scope.videoModel) {
      console.log("video");
      fd.append('updateVideo', true);
      fd.append('video', $scope.videoModel);
    }
    console.log(fd);
    OeuvreService.updateOeuvre(fd).then(function(response) {
      $state.go('oeuvre');
    });
  }

  $scope.loadLifi = function() {
    LifiService.getLifis().then(function(response) {
      $scope.lifis = response;
      for (var i = 0; i < $scope.lifis.length; i++) {
        var oeuvre = {};
        oeuvre.lifi = $scope.lifis[i].lampeid;
        $scope.findLifiUsed(oeuvre,i);
      };
    });
  }

  $scope.loadDiffuser = function() {
    DiffuserService.getDiffusers().then(function(response) {
      $scope.diffusers = response;
      for (var i = 0; i < $scope.diffusers.length; i++) {
        var oeuvre = {};
        oeuvre.diffuser = $scope.diffusers[i].url;
        $scope.findDiffuserUsed(oeuvre,i);
      };
    });
  }

  $scope.findLifiUsed = function(oeuvre, i) {
      OeuvreService.getOeuvreByLifi(oeuvre).then(function(response) {
        if(response.length > 0) {
          $scope.lifis[i].used = true;
        }
      });
  }

  $scope.findDiffuserUsed = function(oeuvre, i) {
      OeuvreService.getOeuvreByDiffuser(oeuvre).then(function(response) {
        if(response.length > 0) {
          $scope.diffusers[i].used = true;
        }
      });
  }

  $scope.addNewLifi = function() {
    LifiService.addLifi($scope.lifi).then(function(response) {
      $scope.loadLifi();
      $('#lifi').modal('hide');
      $scope.addLifi = false;
      $scope.lifiForm.$setPristine();
    });
  }

  $scope.updateLifi = function() {
    LifiService.updateLifi($scope.lifi).then(function(response) {
      $scope.editLifi = false;
      $scope.loadLifi();
    });
  }

  $scope.removeLifi = function(lifi) {
    LifiService.removeLifi(lifi).then(function(response) {
      $scope.loadLifi();
    });
  }

  $scope.lifis = [];
  $scope.loadLifi();

  $scope.goToEditLifi = function(lifi) {
    $scope.editLifi = true;
    $scope.lifi = lifi;
  }

  $scope.goToAddLifi = function() {
    $scope.addLifi = true;
    $scope.lifi = {};
  }

  $scope.goBackLifi = function() {
    $scope.editLifi = false;
    $scope.addLifi = false;
  }


  $scope.addNewDiffuser = function() {
    DiffuserService.addDiffuser($scope.diffuser).then(function(response) {
      $scope.loadDiffuser();
      $('#diffuser').modal('hide');
      $scope.addDiffuser = false;
      $scope.diffuserForm.$setPristine();
    });
  }

  $scope.updateDiffuser = function() {
    DiffuserService.updateDiffuser($scope.diffuser).then(function(response) {
      $scope.editDiffuser = false;
      $scope.loadDiffuser();
    });
  }

  $scope.removeDiffuser = function(diffuser) {
    DiffuserService.removeDiffuser(diffuser).then(function(response) {
      $scope.loadDiffuser();
    });
  }

  $scope.diffusers = [];
  $scope.loadDiffuser();

  $scope.goToEditDiffuser = function(diffuser) {
    $scope.editDiffuser = true;
    $scope.diffuser = diffuser;
  }

  $scope.goToAddDiffuser = function() {
    $scope.addDiffuser = true;
    $scope.diffuser = {};
  }

  $scope.goBackDiffuser = function() {
    $scope.editDiffuser = false;
    $scope.addDiffuser = false;
  }

}]);