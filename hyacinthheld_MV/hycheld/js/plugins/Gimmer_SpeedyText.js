var Gimmer_Core = Gimmer_Core || {};
Gimmer_Core.st = {'loaded':true};

//=============================================================================
// Like the little mouse that goes everywhere all zippity zip
//=============================================================================

/*:
 * @target MV
 * @plugindesc v1.0 - Makes text faster with a button press
 * @author Gimmer_
 *
 * @help Gimmer_SpeedyText.js
 *
 * Makes text go faster when you press ok instead of going instant.
 *
 * ====================
 * Version History
 * ====================
 * - 0.1: Beta test
 * - 1.0: MV Release
 *
 * @param Number of extra Characters Per Frame
 * @type number
 * @desc Set to the number of extra characters you want per frame?
 * Default: 3
 * @default 3
 *
 * @param Fast Forward Delay
 * @type number
 * @desc Number of frames to wait to start accepting fast forward input on a new page?
 * Default: 15
 * @default 15
 *
 */

Gimmer_Core.st.rawParameters = PluginManager.parameters('Gimmer_SpeedyText');
Gimmer_Core.st.NUMBER_OF_EXTRA = Number(Gimmer_Core.st.rawParameters['Number of extra Characters Per Frame'] || 3);
Gimmer_Core.st.NUMBER_OF_WAIT_FRAMES = Number(Gimmer_Core.st.rawParameters['Fast Forward Delay'] || 15);

Gimmer_Core.st.Window_Message_prototype_initMembers = Window_Message.prototype.initMembers
Window_Message.prototype.initMembers = function(){
    Gimmer_Core.st.Window_Message_prototype_initMembers.call(this);
    this._showFastWait = 0;
}

Window_Message.prototype.updateShowFast = function() {
    if(this._showFastWait > 0){
        this._showFast = false;
        this._showFastWait--;
    }
    else{
        if (Input.isPressed("ok") ||
            Input.isPressed("cancel") ||
            TouchInput.isPressed()) {
            this._showFast = true;
			se = { name: "bip", pan: 0, pitch: Math.randomInt(50)+100, volume: 90 };
			AudioManager.playStaticSe(se); //EDIT: play a funny sound effect
        }
        else{
            this._showFast = false;
        }
    }
};

Window_Message.prototype.processCharacter  = function(textState){
    for(let i = 0; i < Gimmer_Core.st.NUMBER_OF_EXTRA; i++){
        if(this._showFast && !this.isEndOfText(textState)) {
            Window_Base.prototype.processCharacter.call(this, textState);
            this.updateShowFast();
        }
    }

    if(!this.isEndOfText(textState)){
        Window_Base.prototype.processCharacter.call(this, textState);
    }
    this._showFast = false;
}

Window_Message.prototype.updateInput = function() {
    if (this.isAnySubWindowActive()) {
        return true;
    }
    if (this.pause) {
        if (this.isTriggered()) {
            Input.update();
            this.pause = false;
            if (!this._textState) {
                this.terminateMessage();
                this._showFast = false;
                this._showFastWait = Gimmer_Core.st.NUMBER_OF_WAIT_FRAMES;
            }
        }
        return true;
    }
    return false;
};