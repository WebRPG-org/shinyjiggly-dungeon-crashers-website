//=============================================================================
// fancycolor.js
//=============================================================================

/*:
* @plugindesc v1.5 changes the background color of the webpage based upon in-game tint
* @author skye m, lavendersiren (special thanks to gimmer)

 * @param Variable ID
 * @desc gimme a variable ID to reference for background swaps
 * @default 24

 * @help ~ Fancy Color ~
 * To use this, call updateBackgroundDivColor(r, b, g);
 * 
 * If you wanna set it to the tone target immediately, use 
 * updateBackgroundDivColor($gameScreen._toneTarget[0], $gameScreen._toneTarget[1], $gameScreen._toneTarget[2]);
 * 
 * If you wanna set it to the tone target after it's done, use 
 * updateBackgroundDivColor($gameScreen._tone[0], $gameScreen._tone[1], $gameScreen._tone[2]);
 * 
 * if you wanna change it with the tone gradually, we're still working on that.
 * in the meantime, I added BACKGROUND IMAGES!!!!
 * 
 * To use that, use updateBackgroundImage(imageValue); with the image value 
 * set to something in the cases down below. 
 * Set the variable ID that it'll use in parameters.
 *
 * Note: you need to set the image value to 0 or an invalid case to view the color!
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
    red = Math.min(Math.floor(Math.max(red, 0)), 255);
    green = Math.min(Math.floor(Math.max(green, 0)), 255);
    blue = Math.min(Math.floor(Math.max(blue, 0)), 255);

    specialcolor.style.backgroundColor = 'rgb(' + red + ', '+ green + ', ' + blue + ')';
}

function updateBackgroundImage(imageValue) {
	var parameters = PluginManager.parameters('fancycolor');
    var variID = Number(parameters['Variable ID'] || 24);
	$gameVariables.setValue(variID, imageValue); //set it from here
	var ass = $gameVariables.value(variID);

switch(ass) {
  case 0:
    specialcolor.style.backgroundImage = "none";
    break;
  case 1:
    specialcolor.style.backgroundImage = "url('../img/parallaxes/theabyss.png')";
    break;
  case 2:
    specialcolor.style.backgroundImage = "url('../img/parallaxes/ultraspaceloop.png')";
    break;
  case 3:
	specialcolor.style.backgroundImage = "url('../img/parallaxes/StarlitSky.png')";
   break;  
  case 4:
	specialcolor.style.backgroundImage = "url('../img/parallaxes/fadetowhite.gif')";
   break;
  default:
    specialcolor.style.backgroundImage = "none";
}

	
	
}