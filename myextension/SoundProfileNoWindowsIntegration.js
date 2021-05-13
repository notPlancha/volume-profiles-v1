// @ts-check

// NAME: Sound Profiles
// AUTHOR: notPlancha
// DESCRIPTION: Create sound profiles

/// <reference path="../globals.d.ts" />



(function SoundProfiles(){
  if(!Spicetify.LocalStorage || !Spicetify.Menu || !Spicetify.Player){
    setTimeout(SoundProfiles, 1000);
    return;
  }
  Spicetify.showNotification("It's alive");
  //TODO FOR debug let these menu buttons stay, remove them before releasing
  var SoundProfile1 = Spicetify.LocalStorage.get("SoundProfile1");
  if(SoundProfile1 === null) {
    Spicetify.LocalStorage.set("SoundProfile1", "0.5");
    SoundProfile1 = "0.5";
  }
  new Spicetify.Menu.Item("debugSoundProfile2", false, function(){
    Spicetify.Player.setVolume(parseFloat(SoundProfile1));
  }).register();

  var SoundProfile2 = Spicetify.LocalStorage.get("SoundProfile2");
  if(SoundProfile2 === null) {
    Spicetify.LocalStorage.set("SoundProfile2", "0.2");
    SoundProfile2 = "0.2";
  }
  new Spicetify.Menu.Item("debugSoundProfile2", false, function(){
    Spicetify.Player.setVolume(parseFloat(SoundProfile2));
  }).register();

  var SoundProfile3 = Spicetify.LocalStorage.get("SoundProfile3");
  if(SoundProfile3 === null) {
    Spicetify.LocalStorage.set("SoundProfile3", "0.8");
    SoundProfile3 = "0.8";
  }
  new Spicetify.Menu.Item("debugSoundProfile3", false, function(){
    Spicetify.Player.setVolume(parseFloat(SoundProfile3));
  }).register();

  var controls = document.getElementsByClassName('ExtraControls')[0];


  var SoundProfiles = [];

  for (var i = 3; i > 0; i--) {
    var volume = Spicetify.LocalStorage.get("SoundProfile" + i);
    if(volume === null){
      switch(i){
        case 1:
          volume = "0.5";
          break;
        case 2:
          volume = "0.3";
          break;
        case 3:
          volume = "0.8";
          break;
      }
      Spicetify.LocalStorage.set("SoundProfile" + i, volume);
    }
    var path;
    switch(i){
      //TODO do path for svg
      case 1:
        path = "";
        break;
      case 2:
        path = "";
        break;
      case 3:
        path = "";
        break;
    }
    var newDiv = document.createElement('div');
    newDiv.id = "SoundProfile" + i;
    newDiv.innerHTML = `
      <button class="control-button" aria-label="Sound Profile $(i)" title="Sound Profile $(i)">
        <svg role="img" height="16" width="16" viewBox="0 0 16 16" style="fill:currentcolor">
          <path d="M6.064 10.229l-2.418 2.418L2 11v4h4l-1.647-1.646 2.418-2.418-.707-.707zM11 2l1.647 1.647-2.418 2.418.707.707 2.418-2.418L15 6V2h-4z">
            <!--TODO change svg image-->
          </path>
        </svg>
      </button>`;
    newDiv.addEventListener("click", function(){
      Spicetify.Player.setVolume(parseFloat(volume));
    });

    newDiv.addEventListener("contextmenu", function(){//check if working
      if(confirm("Save current volume to SoundProfile1?")){
        var sound = Spicetify.Player.getVolume();
        Spicetify.LocalStorage.set("SoundProfile1", volume);
      }
    })
    controls.insertBefore(newDiv, controls.firstElementChild);
  }



  //TODO
  //new Spicetify.Menu

  //TODO apply style to document.getElementsByClassName('extra-controls-container')[0] padding-top:30px; para ter espaco para por os controles em cima
})();
