// @ts-check

// NAME: Sound Profiles
// AUTHOR: notPlancha
// DESCRIPTION: Create sound profiles

/// <reference path="../globals.d.ts" />

(function SoundProfiles(){
  if(!Spicetify.LocalStorage){
    setTimeout(SoundProfiles, 1000);
    return;
  }

  class SoundProfile{
    //something something Spicetify.Player.getVolume
    constructor(SpotifySoundValue, name){
      //TODO check what these are so i can think of a better
      this.name = name;
      this.soundValue = SpotifySoundValue;
    }
    get(name){
      //TODO get from LocalStorage
    }
  }
  Spicetify.showNotification("It's alive");
  //new Spicetify.Menu
  //TODO if no SoundProfile create default SoundProfiles and apply

  //TODO apply style to document.getElementsByClassName('extra-controls-container')[0] padding-top:30px; para ter espaco para por os controles em cima
})();
