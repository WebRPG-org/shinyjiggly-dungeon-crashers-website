/*:
* @plugindesc fixes weird window back stretching..
* @author MechPen
* @help
*
* Fix Window Back Stretch
* Version 1.00
* MechPen
*
* This should fix the issue where window backs don't exactly meet the frame.
*
* overrides Window method(s).
*/

(function() {
  
Window.prototype._refreshBack = function() {
    var m = this._margin;
    var w = this._width - m * 2;
    var h = this._height - m * 2;
    var bitmap = new Bitmap(w, h);

    this._windowBackSprite.bitmap = bitmap;
    this._windowBackSprite.setFrame(0, 0, w, h);
    this._windowBackSprite.move(m, m);

    if (w > 0 && h > 0 && this._windowskin) {
        var p = 96;
        //center
        bitmap.blt(this._windowskin, 0, 0, p-1, p-1, 0, 0, w, h);
        //corners
        bitmap.blt(this._windowskin, 1, 0, 1, p, 0, 0, 1, h);
        bitmap.blt(this._windowskin, p-1, 0, 1, p, w-1, 0, 1, h);
        bitmap.blt(this._windowskin, 0, 1, p, 1, 0, 0, w, 1);
        bitmap.blt(this._windowskin, 0, p-1, p, 1, 0, h-1, w, 1);
        for (var y = 0; y < h; y += p) {
            for (var x = 0; x < w; x += p) {
                bitmap.blt(this._windowskin, 0, p, p, p, x, y, p, p);
            }
        }
        var tone = this._colorTone;
        bitmap.adjustTone(tone[0], tone[1], tone[2]);
    }
};

})();