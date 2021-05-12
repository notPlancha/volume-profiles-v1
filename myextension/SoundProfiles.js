// @ts-check

// NAME: Sound Profiles
// AUTHOR: notPlancha
// DESCRIPTION: Create sound profiles that can adapt to the windows system sound (optional?)

/// <reference path="../globals.d.ts" />

(function SoundProfiles(){
  if(!Spicetify.LocalStorage){
    setTimeout(SoundProfiles, 1000);
    return;
  }
  class SoundProfile{
    constructor(SpotifySoundValue, WindowsSoundValue, name){
      //TODO check what these are so i can think of a better
      this.name = name;
    }
    get(name){
      //TODO get from LocalStorage
    }
  }
  //TODO if no SoundProfile create default SoundProfiles and apply
})();
