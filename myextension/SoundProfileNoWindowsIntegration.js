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

  var Controls = document.getElementsByClassName('ExtraControls');

  

  //TODO
  //new Spicetify.Menu

  //TODO apply style to document.getElementsByClassName('extra-controls-container')[0] padding-top:30px; para ter espaco para por os controles em cima
})();
