//=============================================================================
// main.js
//=============================================================================

PluginManager.setup($plugins);

DataManager.isThisGameFile = function(savefileId) 
{
	var globalInfo = this.loadGlobalInfo();
	if (globalInfo && globalInfo[savefileId]) 
	{
	return true;
	} 
	else 
	{
	return false;
	}
};

window.onload = function() {
    SceneManager.run(Scene_Boot);
};
