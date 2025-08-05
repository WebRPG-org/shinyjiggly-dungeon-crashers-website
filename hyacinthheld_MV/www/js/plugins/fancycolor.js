//=============================================================================
// fancycolors.js
//=============================================================================

/*:
* @plugindesc v1.0 changes the background color of the webpage based upon in-game tint
* @author skye m, lavendersiren (special thanks to gimmer)

 * @help ~ Fancy Colors ~
 * To use this, call updateBackgroundDivColor(r, b, g);
 * 
 * If you wanna set it to the tone target immediately, use 
 * updateBackgroundDivColor($gameScreen._toneTarget[0], $gameScreen._toneTarget[1], $gameScreen._toneTarget[2]);
 * 
 * If you wanna set it to the tone target after it's done, use 
 * updateBackgroundDivColor($gameScreen._tone[0], $gameScreen._tone[1], $gameScreen._tone[2]);
 * 
 * if you wanna change it with the tone gradually, we're still working on that.
*/
//Create div element
var specialcolor = document.createElement('div');
specialcolor.setAttribute('id', 'specialcolor');

specialcolor.style.height = '100vh'; //Give a height to div
specialcolor.style.position = 'absolute';
specialcolor.style.margin = 'auto';
specialcolor.style.top = '0px';
specialcolor.style.left = '0px';
specialcolor.style.right = '0px';
specialcolor.style.bottom = '0px';
document.body.appendChild(specialcolor); //Append div to document
specialcolor.style.backgroundColor = 'rgb(0,0,0)';

function updateBackgroundDivColor(red, green, blue) {
    // Update the parameters in place...
    red = Math.max(red, 0);
    green = Math.max(green, 0);
    blue = Math.max(blue, 0);

    specialcolor.style.backgroundColor = 'rgb(' + red + ', '+ green + ', ' + blue + ')';
}