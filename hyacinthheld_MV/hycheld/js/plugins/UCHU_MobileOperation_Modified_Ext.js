//=============================================================================
// UCHU_MobileOperation_Modified_Ext.js
// Version: 1.2
//----------------------------------------------------------------------------
// Copyright (c) 2015-2017 uchuzine, NAK
// Released under the MIT license
// http://opensource.org/licenses/mit-license.php
//=============================================================================

/*:
@plugindesc
(Modified) Plug-in for smartphone operation. The virtual buttons that support landscape/portrait
holding and touch operation methods have been added and expanded to make smartphone play more comfortable.
@author uchuzine (modified by NAK and Eliaquim)
@help
UCHU_MobileOperation_Modified_Ext (Version: 1.2)

============================================================================
NEW HELP FILE BY ELIAQUIM
============================================================================

You can find the original Help File opening this file and check the
japanese version(jp).
The plugin parameters are translated to english by RyamBram. Please give
credits to him.
Original Plugin by NAK >
https://github.com/DICE2000/RPGMVplugins/blob/master/UCHU_MobileOperation_Modified.js
Translated plugin(English) by RyamBram >
https://github.com/RyanBram/ryanbram.github.io/blob/166de4f01f4a09c6e86891a820a5c4c39718b427/srpg_online/js/plugins/MVP_Gamepad.js

============================================================================
Introduction
============================================================================

This plugin adds onscreen buttons for mobile devices. The buttons are
adjustable according to portrait or landscape mode, and you can render
them off-screen on the black bars.

============================================================================
Features
============================================================================

-----Default by Uchuzine and Nak-----
• Shows a DPAD and Action and Cancel Button on the screen.
• Buttons can be placed outside the game screen on the black bars.
• Hide or show buttons through a switch.
• Set button size in plugin parameters(it resizes the image if necessary).
• You can configure actions for when you press or hold your fingers on the
black bar.
• You can swipe left or right on the screen and operate the functions of the
PageUp or PageDown buttons.
• Hide the buttons when the message box is open.

-----Added by Eliaquim-----
• You can add PageUp, PageDown, Shift, Menu buttons on the screen.
• Buttons can blink when you pressed them(change the opacity).
• You can choose if the cancel button will work to call the menu too or
only to cancel.

============================================================================
How to use
============================================================================

-----Default by Uchuzine and Nak-----
Button Images
•Button images should be in the /img/system folder.
•And they should be done in a 1: 1 ratio.
•For directionals, make sure the center of the directional pad is in the
center of the image.

Button position paramters
•For each button you can choose a preset start position:
•left-top, right-top, left-bottom, right-bottom.
•To change them from these initial positions you can set the margin in the
plugin parameters.

• Button visible parameter
•Set whether you want the button to appear or not. If you disable it in the
parameters, you will not be able to enable them within the game.

• DPad Opelation Range
•Specifies the size of the button's tap area.
•When 1: The touch area is the image area.
•When 2: The touch area is twice as large vertically and horizontally
(spreading 50% out of the image).

• DPad Diagonal Range
•Determines the direction of the character. Increasing this number will cause
the character to change direction and assume a diagonal, such as up + right.
•When “0”: Only 4 directions (up / down / left / right) can be input.
•When “0.5”: Eight directions can be input evenly.
•When “1”: Four-way input of “upper right”, “lower right”, “upper left”,
and “lower left”.
•The higher the number, the more mistakes occur, such as "I was going to
push up but it was in the upper right".
•If there is no problem in 4 directions, specifying “0” will minimize the
operation error.

AnalogMove
•Set this to true for compatibility with Analog Move.

-----Added by Eliaquim-----
You can choose if you want to the buttons blink when you pressed them.
Set the parameter opacity for each button to 0.5 for example. Then you
can set the blink parameter to a higher or lower opacity.
You also can use this plugin commands to hide all buttons or hide specific
ones.

• show X
• hide X

Where X can be:
• dirpad / ok / cancel / menu / shift / pagedown / pageup / extra / all

NOTE: In fact, only the opacity of them will be set to 0. If you press in
the place they are, they will work(but not blink, in case the blink parameter
is true).

NOTE 2: In my experience, I have to test it a lot. To find the right size for
my buttons on mobile. Since it not shows in the same proportion as in desktop.

NOTE 3: You can use CommunityBasic.js to see better the positions on the
desktop, if you want it to show in the black bars.
Change the parameters "screenWidth / screenHeight" to the size that you want
for the screen of your game.
And change the parameters "changeWindowHeightTo / changeWindowWidthTo" to a
size that you want, like 1280x720 or 1920x1080(16:9 - that is the majority
in mobile).

============================================================================
Terms of Use
============================================================================

Copyright (c) 2015-2017 uchuzine, NAK
Released under the MIT license
http://opensource.org/licenses/mit-license.php

You can optionally credit me as Eliaquim or Rakuen Zero.
But you must credit Uchuzine and Nak.

============================================================================
Contact
============================================================================

Contact me(Eliaquim):
RM Web - https://forums.rpgmakerweb.com/index.php?members/eliaquim.123037/
Centro Rpg Maker - https://centrorpg.com/index.php?action=profile
Instagram - https://www.instagram.com/rakuen.zero
Twitter - https://twitter.com/rakuenzero
Facebook - https://www.facebook.com/rakuenzero

@param ---PC Option---
@param ---FilePath---
@param ---Button Settings---
@param ---Directional Button---
@param ---Ok Button---
@param ---Cancel Button---
@param ---Menu Button---
@param ---Shift Button---
@param ---PageUp Button---
@param ---PageDown Button---
@param ---Extra Button---
@param ---TouchInput Extend---
@param ---Need Analog Move.js---

@param PC BtnDisplay
@desc Show virtual buttons when running on PC. Yes: true / Not:false
Default:false
@default false
@type boolean
@parent ---PC Option---

@param PC TouchExtend
@desc Enable touch operation extension when running on PC. Yes: true / Not:false
Default:true
@default true
@type boolean
@parent ---PC Option---

@param DPad Image
@desc The file path of the D-Pad image
@default DirPad
@require 1
@dir img/system/
@type file
@parent ---FilePath---

@param ActionBtn Image
@desc The file path of the Action button image
@default ActionButton
@require 1
@dir img/system/
@type file
@parent ---FilePath---

@param CancelBtn Image
@desc File path of Cancel button image
@default CancelButton
@require 1
@dir img/system/
@type file
@parent ---FilePath---

@param MenuBtn Image
@desc File path of Menu button image
@default MenuButton
@require 1
@dir img/system/
@type file
@parent ---FilePath---

@param ShiftBtn Image
@desc File path of Shift button image
@default ShiftButton
@require 1
@dir img/system/
@type file
@parent ---FilePath---

@param PageUpBtn Image
@desc File path of PageUp button image
@default PageUpButton
@require 1
@dir img/system/
@type file
@parent ---FilePath---

@param PageDownBtn Image
@desc File path of PageDown button image
@default PageDownButton
@require 1
@dir img/system/
@type file
@parent ---FilePath---

@param ExtraBtn Image
@desc File path of Extra button image
@default ExtraButton
@require 1
@dir img/system/
@type file
@parent ---FilePath---

@param Blink Button Press
@desc Blink the button when it's pressed.
@default false
@type boolean
@parent ---Button Settings---

@param Blink Button Opacity
@desc Choose the opacity for when the button is pressed. From 0 to 1.
@default 1
@type number
@parent ---Button Settings---

@param Button Opacity
@desc Button opacity (0 to 1) Default: 0.7
@default 0.700
@type number
@max 1.000
@min 0.000
@decimals 3
@parent ---Button Settings---

@param Vertical BtnZoom
@desc Magnification of all buttons when displayed in portrait 初期値:1.700
@default 0.900
@type number
@decimals 3
@parent ---Button Settings---

@param Tablet BtnZoom
@desc Magnification of all buttons when displayed in landscape in Tablet 初期値:0.800
@default 0.800
@type number
@decimals 3
@parent ---Button Settings---

@param TabVertical BtnZoom
@desc Magnification of all buttons when displayed in portrait in Tablet 初期値:1.100
@default 0.900
@type number
@decimals 3
@parent ---Button Settings---

@param HideButton OnMessage
@desc When the message is displayed at the bottom of the screen, lower the display order of the virtual button to the bottom of the game screen. 初期値:false
@default false
@type boolean
@parent ---Button Settings---

@param HideButton Switch
@desc Control the display of virtual buttons with this numbered switch. Disabled at 0.
@default 0
@type number
@parent ---Button Settings---

@param HideButton Switch Value
@desc When controlling a virtual button with a switch, set whether to display ON (true) or OFF (false).
@default false
@type boolean
@parent ---Button Settings---

@param DPad Visible
@desc Show direction pad. Yes:true / Not:false. Default:true
@default true
@type boolean
@parent ---Directional Button---

@param DPad Size
@desc Direction pad size (px). Initial value: 200
@default 128
@type number
@parent ---Directional Button---

@param DPad Margin
@desc The position of the direction pad image. The size of the gap from the edge of the screen. (width from left; width from bottom) Initial value: 10; 10
@default 20; 20
@parent ---Directional Button---

@param DPad Orientation
@desc You want to change the reference position of the direction pad to something other than the lower left. left か right; top か bottom で指定。 初期値:left; bottom
@default left; bottom
@type select
@option left; top
@option left; bottom
@option right; top
@option right; bottom
@parent ---Directional Button---

@param DPad OpelationRange
@desc For the direction pad image, the operating range of the touch (magnification, 1~ ) to widen the touch determination to the outside of the image, to prevent operation error. Initial value: 1.3
@default 1.000
@type number
@decimals 3
@parent ---Directional Button---

@param DPad DiagonalRange
@desc The size of the determination of the direction pad oblique direction (0-1). The easier it is to enter diagonally, the easier it is to shake the operation. 0 if it is good in four directions. Initial value: 0.3;
@default 0.300
@type number
@max 1.000
@min 0.000
@decimals 3
@parent ---Directional Button---

@param ActionBtn Visible
@desc Show Action button: true Not:false Initial value: true
@default true
@type boolean
@parent ---Ok Button---

@param ActionBtn Size
@desc The size of the decision button (px). Initial value: 55
@default 55
@type number
@parent ---Ok Button---

@param ActionBtn Margin
@desc The position of the decision button. The size of the gap from the edge of the screen. (width from right; width from bottom) Initial value: 70; 20
@default 70; 20
@parent ---Ok Button---

@param ActionBtn Orientation
@desc You want to change the reference position of the decision button to something other than the lower right. left か right; top か bottom で指定。 初期値:right; bottom
@default right; bottom
@type select
@option left; top
@option left; bottom
@option right; top
@option right; bottom
@parent ---Ok Button---

@param CancelBtn Visible
@desc Show cancel button: true No: false 初期値:true
@default true
@type boolean
@parent ---Cancel Button---

@param CancelBtn Size
@desc The size of the cancel button (px). Initial value: 55
@default 55
@type number
@parent ---Cancel Button---

@param CancelBtn Margin
@desc The position of the cancel button. Specify the size of the gap from the screen edge. (Width from right; width from bottom) Initial value: 110; 10
@default 5; 40
@parent ---Cancel Button---

@param CancelBtn Orientation
@desc You want to change the reference position of the cancel button to something other than the lower right.left or right; top or bottom Specified by default value:right; bottom
@default right; bottom
@type select
@option left; top
@option left; bottom
@option right; top
@option right; bottom
@parent ---Cancel Button---

@param CancelBtn call menu?
@desc Cancel Button work to call the menu to?
@default false
@type boolean
@parent ---Cancel Button---

@param MenuBtn Visible
@desc Show cancel (menu) button: true No: false default value:true
@default true
@type boolean
@parent ---Menu Button---

@param MenuBtn Size
@desc The size of the menu button (px). Initial value: 55
@default 55
@type number
@parent ---Menu Button---

@param MenuBtn Margin
@desc The position of the menu button. Specify the size of the gap from the screen edge.(Width from right; width from bottom) Initial value: 110; 10
@default 0; 0
@parent ---Menu Button---

@param MenuBtn Orientation
@desc You want to change the reference position of the cancel button to something other than the lower right. left or right; specified by top or bottom. Initial value: right; bottom
@default right; top
@type select
@option left; top
@option left; bottom
@option right; top
@option right; bottom
@parent ---Menu Button---

@param ShiftBtn Visible
@desc Show cancel (menu) button: true No: false 初期値:true
@default true
@type boolean
@parent ---Shift Button---

@param ShiftBtn Size
@desc The size of the cancel button (px). Initial value: 55
@default 55
@type number
@parent ---Shift Button---

@param ShiftBtn Margin
@desc The position of the cancel button. Specify the size of the gap from the screen edge. (Width from right; width from bottom) Initial value: 10; 150
@default 10; 150
@parent ---Shift Button---

@param ShiftBtn Orientation
@desc You want to change the reference position of the cancel button to something other than the lower right. left or right; specified by top or bottom. Initial value: right; bottom
@default left; bottom
@type select
@option left; top
@option left; bottom
@option right; top
@option right; bottom
@parent ---Shift Button---

@param PageUpBtn Visible
@desc Show cancel (menu) button: true No: false Initial value: true
@default true
@type boolean
@parent ---PageUp Button---

@param PageUpBtn Size
@desc The size of the cancel button (px). Initial value: 55
@default 55
@type number
@parent ---PageUp Button---

@param PageUpBtn Margin
@desc The position of the cancel button. Specify the size of the gap from the screen edge. (Width from right; width from bottom) Initial value: 70; 90
@default 70; 90
@parent ---PageUp Button---

@param PageUpBtn Orientation
@desc You want to change the reference position of the cancel button to something other than the lower right. left or right; specified by top or bottom. Initial value: right; bottom
@default right; bottom
@type select
@option left; top
@option left; bottom
@option right; top
@option right; bottom
@parent ---PageUp Button---

@param PageDownBtn Visible
@desc Show cancel (menu) button: true No: false Initial value: true
@default true
@type boolean
@parent ---PageDown Button---

@param PageDownBtn Size
@desc The size of the cancel button (px). Initial value: 55
@default 55
@type number
@parent ---PageDown Button---

@param PageDownBtn Margin
@desc The position of the cancel button. Specify the size of the gap from the screen edge. (Width from right; width from bottom) Initial value: 5; 110
@default 5; 110
@parent ---PageDown Button---

@param PageDownBtn Orientation
@desc You want to change the reference position of the cancel button to something other than the lower right.left or right; specified by top or bottom. Initial value: right; bottom
@default right; bottom
@type select
@option left; top
@option left; bottom
@option right; top
@option right; bottom
@parent ---PageDown Button---

@param ExtraBtn Visible
@desc Show cancel (menu) button: true No: false
Initial value: true
@default true
@type boolean
@parent ---Extra Button---

@param ExtraBtn Size
@desc The size of the cancel button (px). Initial value: 55
@default 55
@type number
@parent ---Extra Button---

@param ExtraBtn Margin
@desc The position of the cancel button. Specify the size of the gap from the screen edge. (Width from right; width from bottom) Initial value: 0; 0
@default 0; 0
@parent ---Extra Button---

@param ExtraBtn Orientation
@desc You want to change the reference position of the cancel button to something other than the lower right. left or right; specified by top or bottom. Initial value: right; bottom
@default left; top
@type select
@option left; top
@option left; bottom
@option right; top
@option right; bottom
@parent ---Extra Button---

@param Flick PageUp-PageDown
@desc Flick left or right on the screen to get the PageUp/PageDown operation.When you want to switch characters on the status screen. Initial value: true
@default true
@type boolean
@parent ---TouchInput Extend---

@param HoldCanvas ActionBtn
@desc Press and hold the screen to press the decision button.default value:true
@default true
@type boolean
@parent ---TouchInput Extend---

@param OutCanvas CancelBtn
@desc The entire black belt outside the game screen is treated like a cancel button.default value:false
@default false
@type boolean
@parent ---TouchInput Extend---

@param OutCanvas ActionBtn
@desc The entire black belt part outside the game screen becomes the decision button treatment.default value:false
@default false
@type boolean
@parent ---TouchInput Extend---

@param Analog Move
@desc [* Please read AnalogMove.js first]Enable analog movement with directional pads. Initial value: false
@default false
@type boolean
@parent ---Need Analog Move.js---

@param Analog Sensitivity
@desc Input sensitivity for analog movement. Increasing the value moves the character greatly with fine finger movements. Initial value: 1.800
@default 1.800
@type number
@decimals 3
@parent ---Need Analog Move.js---

*/

/*:pt
============================================================================
NOVO ARQUIVO DE AJUDA POR ELIAQUIM
============================================================================

Você pode encontrar o arquivo de ajuda original este arquivo e verificando
a parte correspondente ao idioma japonês(jp).

============================================================================
Introdução
============================================================================

Esse plugin adiciona botões na tela para dispositivos móveis. Os botões são
ajustáveis de acordo com o modo retrato ou paisagem, além de poder
renderizá-los fora da tela do jogo, nas barras pretas.

============================================================================
Funcionalidades
============================================================================

-----Padrões por Uchuzine e Nak-----
• Mostra os botões de direcional, Ok e cancela/menu na tela.
• Botões podem ser colocados fora da tela do jogo, nas barras pretas.
• Esconder ou mostrar os botões através de uma switch.
• Configurar o tamanho do botão nos parâmetros de plugin(redimensiona a imagem
se necessário).
• Pode configurar ações para quando apertar ou deixar pressionado os dedos
na barra preta.
• Pode deslizar o dedo na tela, para esquerda ou direita e operar as funções
dos botões PageUp ou PageDown.
• Esconder os botões quando a caixa de mensagem está aberta.

-----Added by Eliaquim-----
•Você pode escolher adicionar também os botões pageup / pagedown / menu /
shift e um extra
• Botões "piscam" quando você aperta eles(muda a opacidade).
• Você pode escolher se o botão de cancelar também vai chamar o menu,
ou se ele somente será usado para cancelar.

============================================================================
Como usar
============================================================================

-----Padrões por Uchuzine e Nak-----
Imagem dos botões
• Devem ser colocadas na pasta /img/system.
• Devem ser com o tamanho 1:1.
• Para o gráfico do direcional, tenha certeza de que o centro do gráfico
esteja no centro da imagem.

Parâmetros de posição dos botões
• Para cada botão você pode escolher uma posição inicial pré definida:
esquerda-topo, direta-topo, esquerda-fundo, direita-fundo.
• Para mudá-los dessas posições você pode configurar a margem nos
parâmetros de plugin.

Parâmetro de visibilidade do botão
• Configure se você deseja que o botão apareça ou não. Se desativá-lo nos
parâmetros, não poderá ativá-los dentro do jogo.

DPad Opelation Range
• Especifica o tamanho da área de toque do botão.
• Quando 1: A área do toque é a área da imagem.
• Quando 2: A área do toque é duas vezes maior verticalmente e
horizontalmente(se espalhando 50% para fora da imagem).

DPad Diagonal Range
• Determina a direção do personagem. Aumentar esse número fará com que o
personagem mude de direção e assuma uma diagonal, como cima+direita.
• Quando "0": Somente 4 direções (para cima / baixo / esquerda / direita)
podem ser inseridas.
• Quando "0.5": Oito direções podem ser inseridas uniformemente.
• Quando "1": entrada de quatro direções de "canto superior direito",
"canto inferior direito", "canto superior esquerdo" e "canto inferior
esquerdo".
• Quanto maior esse número, maior a chance de acontecer erros como:
"Mas eu coloquei pra diagonal cima+direita e ele foi só pra cima" etc.
• Se não estiver usando diagonais, sugiro deixar este valor 0.

AnalogMove
• Coloque esse parâmetro para verdadeiro se estiver usando o plugin
analog move.

-----Adicionado por Eliaquim-----
Você pode escolher se quer que os botões pisquem quando apertá-los.
Defina o parâmetro de opacidade para cada botão, por exemplo 0.5, e
escolha a opacidade do parâmetro blink. Assim, ele pode "piscar"
claro ou escuro.
Também pode esconder todos os botões ou somente um em específico usando
os comandos de plugin:

show X
hide X

Onde X pode ser:
dirpad / ok / cancel / menu / shift / pagedown / pageup / extra / all

NOTE: Na verdade, somente a opacidade deles será mudada para 0. Se apertar
no lugar onde ele está, o botão funcionará(Mas não piscará, caso o parâmetro
blink for verdadeiro).

NOTE 2: Na minha experiência tive de testar bastante para encontrar o tamanho
certo para os meus boyões no android. Uma vez que a proporção no desktop não
é a mesma no android.

NOTE 3: Você pode usar o CommunityBasic.js para ver melhor as posições no
desktop, se quiser mostrar os botões nas barras pretas.
Mude os parâmetros "screenWidth / screenHeight" para o tamanho da resolução
do seu jogo.
E mude os parâmetros "changeWindowHeightTo / changeWindowWidthTo" para o
tamanho da tela que você acha que seu jogo irá rodar.
Por exemplo 1280x720 ou 1920x1080(16:9, que é a maioria das resoluções de
mobile).

============================================================================
Termos de uso
============================================================================

-----Originais-----
Copyright (c) 2015-2017 uchuzine e NAK
Released under the MIT license
http://opensource.org/licenses/mit-license.php

----Eliaquim----
Você pode opcionalmente me creditar como Eliaquim ou Rakuen Zero.
Mas você DEVE dar os créditos para Uchuzine e Nak.

============================================================================
Contato
============================================================================

Eliaquim:
RM Web - https://forums.rpgmakerweb.com/index.php?members/eliaquim.123037/
Centro Rpg Maker - https://centrorpg.com/index.php?action=profile
Instagram - https://www.instagram.com/rakuen.zero
Twitter - https://twitter.com/rakuenzero
Facebook - https://www.facebook.com/rakuenzero


@param ---PC Option---
@param ---FilePath---
@param ---Button Settings---
@param ---Directional Button---
@param ---Ok Button---
@param ---Cancel Button---
@param ---Menu Button---
@param ---Shift Button---
@param ---PageUp Button---
@param ---PageDown Button---
@param ---Extra Button---
@param ---TouchInput Extend---
@param ---Need Analog Move.js---

@param PC BtnDisplay
@desc Mostra os botões no Desktop. Yes: true / Not:false
Default:false
@default false
@type boolean
@parent ---PC Option---

@param PC TouchExtend
@desc Ativa a operação de toque no desktop. Yes: true / Not:false
Default:true
@default true
@type boolean
@parent ---PC Option---

@param DPad Image
@desc A pasta onde fica a imagem deste botão.
@default DirPad
@require 1
@dir img/system/
@type file
@parent ---FilePath---

@param ActionBtn Image
@desc A pasta onde fica a imagem deste botão.
@default ActionButton
@require 1
@dir img/system/
@type file
@parent ---FilePath---

@param CancelBtn Image
@desc A pasta onde fica a imagem deste botão.
@default CancelButton
@require 1
@dir img/system/
@type file
@parent ---FilePath---

@param MenuBtn Image
@desc A pasta onde fica a imagem deste botão.
@default MenuButton
@require 1
@dir img/system/
@type file
@parent ---FilePath---

@param ShiftBtn Image
@desc A pasta onde fica a imagem deste botão.
@default ShiftButton
@require 1
@dir img/system/
@type file
@parent ---FilePath---

@param PageUpBtn Image
@desc A pasta onde fica a imagem deste botão.
@default PageUpButton
@require 1
@dir img/system/
@type file
@parent ---FilePath---

@param PageDownBtn Image
@desc A pasta onde fica a imagem deste botão.
@default PageDownButton
@require 1
@dir img/system/
@type file
@parent ---FilePath---

@param ExtraBtn Image
@desc A pasta onde fica a imagem deste botão.
@default ExtraButton
@require 1
@dir img/system/
@type file
@parent ---FilePath---

@param Blink Button Press
@desc Pisca o botão quando ele é apertado.
@default false
@type boolean
@parent ---Button Settings---

@param Blink Button Opacity
@desc Escolha a opacidade dos botões quando forem apertados. De 0 a 1.
@default 1
@type number
@parent ---Button Settings---

@param Button Opacity
@desc Opacidade dos botões (0 a 1) Default: 0.7
@default 0.700
@type number
@max 1.000
@min 0.000
@decimals 3
@parent ---Button Settings---

@param Vertical BtnZoom
@desc Zoom de todos os botões quando em modo retrato. Padrão:1.700
@default 0.900
@type number
@decimals 3
@parent ---Button Settings---

@param Tablet BtnZoom
@desc Zoom de todos os botões quando em modo paisagem em Tablets. Padrão:0.800
@default 0.800
@type number
@decimals 3
@parent ---Button Settings---

@param TabVertical BtnZoom
@desc Zoom de todos os botões quando em modo retrato no Tablet. Padrão:1.100
@default 0.900
@type number
@decimals 3
@parent ---Button Settings---

@param HideButton OnMessage
@desc Esconde os botões quando a caixa de mensagem está aberta. Padrão:false
@default false
@type boolean
@parent ---Button Settings---

@param HideButton Switch
@desc Escolhe uma switch para mostrar/esconder todos os botões. Deixe 0 para desativar.
@default 0
@type number
@parent ---Button Settings---

@param HideButton Switch Value
@desc Escolha a switch.
@default false
@type boolean
@parent ---Button Settings---

@param DPad Visible
@desc Usar esse botão?
@default true
@type boolean
@parent ---Directional Button---

@param DPad Size
@desc Tamanho deste botão. Padrão 110.
@default 110
@type number
@parent ---Directional Button---

@param DPad Margin
@desc Muda a posição do botão a partir da posição pré definida. Padrão: 10; 20
@default 10; 20
@parent ---Directional Button---

@param DPad Orientation
@desc Escolha uma das opções pré definidas. Padrão left,bottom.
@default left; bottom
@type select
@option left; top
@option left; bottom
@option right; top
@option right; bottom
@parent ---Directional Button---

@param DPad OpelationRange
@desc Veja o arquivo de ajuda para mais detalhes. Initial value: 1.3
@default 1.000
@type number
@decimals 3
@parent ---Directional Button---

@param DPad DiagonalRange
@desc Veja o arquivo de ajuda para mais detalhes. Initial value: 0.3;
@default 0.300
@type number
@max 1.000
@min 0.000
@decimals 3
@parent ---Directional Button---

@param ActionBtn Visible
@desc Usar esse botão?
@default true
@type boolean
@parent ---Ok Button---

@param ActionBtn Size
@desc Tamanho deste botão. Padrão 55.
@default 55
@type number
@parent ---Ok Button---

@param ActionBtn Margin
@desc Muda a posição do botão a partir da posição pré definida. Padrão 70;20.
@default 70; 20
@parent ---Ok Button---

@param ActionBtn Orientation
@desc Escolha uma das opções pré definidas. Padrão right,bottom.
@default right; bottom
@type select
@option left; top
@option left; bottom
@option right; top
@option right; bottom
@parent ---Ok Button---

@param CancelBtn Visible
@desc Usar esse botão?
@default true
@type boolean
@parent ---Cancel Button---

@param CancelBtn call menu?
@desc O botão de cancelar também vai chamar o menu?
@default false
@type boolean
@parent ---Cancel Button---

@param CancelBtn Size
@desc Tamanho deste botão. Padrão 55.
@default 55
@type number
@parent ---Cancel Button---

@param CancelBtn Margin
@desc Muda a posição do botão a partir da posição pré definida. Padrão 5;40.
@default 5; 40
@parent ---Cancel Button---

@param CancelBtn Orientation
@desc Escolha uma das opções pré definidas. Padrão:right; bottom
@default right; bottom
@type select
@option left; top
@option left; bottom
@option right; top
@option right; bottom
@parent ---Cancel Button---

@param MenuBtn Visible
@desc Usar esse botão?
@default true
@type boolean
@parent ---Menu Button---

@param MenuBtn Size
@desc Tamanho deste botão. Padrão 55.
@default 55
@type number
@parent ---Menu Button---

@param MenuBtn Margin
@desc Muda a posição do botão a partir da posição pré definida. Padrão 0;0.
@default 0; 0
@parent ---Menu Button---

@param MenuBtn Orientation
@desc Escolha uma das opções pré definidas. Padrão: right; bottom
@default right; top
@type select
@option left; top
@option left; bottom
@option right; top
@option right; bottom
@parent ---Menu Button---

@param ShiftBtn Visible
@desc Usar esse botão?
@default true
@type boolean
@parent ---Shift Button---

@param ShiftBtn Size
@desc Tamanho deste botão. Padrão 55.
@default 55
@type number
@parent ---Shift Button---

@param ShiftBtn Margin
@desc Muda a posição do botão a partir da posição pré definida. Padrão 10;150.
@default 10; 150
@parent ---Shift Button---

@param ShiftBtn Orientation
@desc Escolha uma das opções pré definidas. Padrão: right; bottom
@default left; bottom
@type select
@option left; top
@option left; bottom
@option right; top
@option right; bottom
@parent ---Shift Button---

@param PageUpBtn Visible
@desc Usar esse botão?
@default true
@type boolean
@parent ---PageUp Button---

@param PageUpBtn Size
@desc Tamanho deste botão. Padrão 55.
@default 55
@type number
@parent ---PageUp Button---

@param PageUpBtn Margin
@desc Muda a posição do botão a partir da posição pré definida. Padrão 70;90.
@default 70; 90
@parent ---PageUp Button---

@param PageUpBtn Orientation
@desc Escolha uma das opções pré definidas. Padrão: right; bottom
@default right; bottom
@type select
@option left; top
@option left; bottom
@option right; top
@option right; bottom
@parent ---PageUp Button---

@param PageDownBtn Visible
@desc Usar esse botão?
@default true
@type boolean
@parent ---PageDown Button---

@param PageDownBtn Size
@desc Tamanho deste botão. Padrão 55.
@default 55
@type number
@parent ---PageDown Button---

@param PageDownBtn Margin
@desc Muda a posição do botão a partir da posição pré definida. Padrão 5;110.
@default 5; 110
@parent ---PageDown Button---

@param PageDownBtn Orientation
@desc Escolha uma das opções pré definidas. Padrão: right; bottom
@default right; bottom
@type select
@option left; top
@option left; bottom
@option right; top
@option right; bottom
@parent ---PageDown Button---

@param ExtraBtn Visible
@desc Usar esse botão?
@default true
@type boolean
@parent ---Extra Button---

@param ExtraBtn Size
@desc Tamanho deste botão. Padrão 55.
@default 55
@type number
@parent ---Extra Button---

@param ExtraBtn Margin
@desc Muda a posição do botão a partir da posição pré definida. Padrão 0;0.
@default 0; 0
@parent ---Extra Button---

@param ExtraBtn Orientation
@desc Escolha uma das opções pré definidas. Padrão: right; bottom
@default left; top
@type select
@option left; top
@option left; bottom
@option right; top
@option right; bottom
@parent ---Extra Button---

@param Flick PageUp-PageDown
@desc Deslize o dedo para esquerda(pgup) ou direita(pgdown) na tela para simular os efeitos de pagedown and pageUp. Padrão: true
@default true
@type boolean
@parent ---TouchInput Extend---

@param HoldCanvas ActionBtn
@desc Aperte e segure o dedo na dela para fazer oe feito do botão 'ok' Padrão:true
@default true
@type boolean
@parent ---TouchInput Extend---

@param OutCanvas CancelBtn
@desc A barra preta inteira funcionará como o botão 'cancelar'. Padrão:false
@default false
@type boolean
@parent ---TouchInput Extend---

@param OutCanvas ActionBtn
@desc A barra preta inteira funcionará como o botão 'ok' Padrão:false
@default false
@type boolean
@parent ---TouchInput Extend---

@param Analog Move
@desc Para habilitar compatibilidade com o plugin Analog Move. Padrão: false
@default false
@type boolean
@parent ---Need Analog Move.js---

@param Analog Sensitivity
@desc Sensibilidade do movimento analógico. Aumentar este valor deixa mais sensível ao toque. Padrão: 1.800
@default 1.800
@type number
@decimals 3
@parent ---Need Analog Move.js---

*/



/*:jp
@plugindesc
(Modified) Plug-in for smartphone operation. The virtual buttons that support landscape/portrait
holding and touch operation methods have been added and expanded to make smartphone play more comfortable.
@author
uchuzine (modified by NAK and Eliaquim)
@help
UCHU_MobileOperation_Modified_Ext (Version: 1.2)
This is the original help file. Please, if you want to read the new help,
open this file and check it out in the global section.
------------------------------------------------------------------------------
■Changelog
------------------------------------------------------------------------------

↓------この更新履歴はUCHU_MobileOperation_Modified_Ext.jsのものです------↓

1.2 2018/1/26

・HideButton Switchオプションが有効である時に非表示にすると、
　透過度を0にして完全に見えなくするようにしました。

1.1 2018/1/5

・HideButton OnMessageが有効であっても、コモンイベントの「文章の表示」に反応しない問題の修正。

1.0 2018/1/4

改変の度合いが大きいのでバージョンを見直しました。
UCHU_MobileOperation_Modified_Ext.jsにリネームしました。

・MVコアスクリプト1.5.0のプラグインパラメータを設定して
　多少使いやすくしました。
　小数点以下3桁までを有効にしてあります。
　仮想パッドの画像ファイルはimg/systemフォルダに入れて下さい。
　拡張子がすべて小文字でないとエラーが出ます。

・Chromeのバージョンによってはフリック操作でコンソールにエラーが出るので
　下記Qiita記事を参考に抑制しました。
　https://qiita.com/ru_shalm/items/4d79e94b5d9c7c88607d

・HideButton OnMessageのメモリリーク問題に対応しました。
　参考）
　https://qiita.com/EudyptesCapital/items/d4a76d665b038e027638
　https://tm.lucky-duet.com/viewtopic.php?t=371

・HideButton Switchオプションを追加しました。
　マップ画面(Scene_Map)／バトル画面(Scene_Battle)において、
　指定した番号のスイッチによって、仮想パッドの表示を切り替えます。
　この表示状態は他の画面(Scene)でも持ち越されます。
（マップ画面で非表示にしたままバトル画面(Scene_Battle)に移行すると、
　バトルでも表示されない）
　この機能を有効にすると、HideButton OnMessageは機能しません。
（HideButton OnMessageをtrueにしても、スイッチがOFFだと隠れない）

・HideButton Switch Valueオプションの追加。
　ここで設定した値の時、仮想パッドが表示されます。
　HideButtonSwitchが10の時、
　このオプションをtrueに設定する：
　10番のスイッチがオンの時に表示、オフの時に非表示
　このオプションをfalseに設定する：
　10番のスイッチがオフの時に表示、オンの時に非表示

↓------この更新履歴はUCHU_MobileOperation_Modified_Ext.jsのものです------↓

1.1.4 2015/12/04  画面下部メッセージ表示後に下記の問題が再発する不具合を修正
1.1.3 2015/11/29  画面左上にボタンを設置した際にボタンが押せない不具合を修正
1.1.2 2015/11/24  パラメータを変更できない不具合を修正
1.1.1 2015/11/23  PC上での仮想ボタン操作時の不具合を修正
1.1.0 2015/11/17  「AnalogMove.js」使用時のアナログ移動に対応。下記説明を参照
1.0.0 2015/11/15 プラグイン公開

↓------以下の説明はUCHU_MobileOperation_Modified_Ext.jsのものです------↓

------------------------------------------------------------------------------
■特徴
------------------------------------------------------------------------------
プラグイン作成にあたり、por Masked氏のMBS_MobileDirPad.jsを参考にしています。

○本プラグインの特徴
・ゲーム画面外(黒帯部分)にボタンを設置するため、プレイ画面に干渉しにくい
・パッドやボタンは個別に表示／非表示の切り替えが可能
・ボタンの基準点を画面四隅のいずれかに指定でき、縦持ち操作に対応可能
・方向パッドの操作性を重視し、タッチ判定領域、斜め方向の感度など調整可能
　（詳細は下記の説明を参照）
・方向パッドによる移動と、デフォルトの目的地タッチによる移動を併用可能
・特定のタッチ操作、ジェスチャーによるボタン操作の拡張

これらを利用し、

・仮想十字キーは使わずに、MENUボタンと決定ボタンのみ使用
・ボタンは全て使用せず、画面長押しでオート連打、画面外タッチでメニュー呼出

といった使い方もできます。

------------------------------------------------------------------------------
■一部のパラメータの説明
------------------------------------------------------------------------------
▼ DPad OpelationRange（方向パッド作動領域）‥‥
方向パッド画像の表示サイズに対する、タッチ判定領域の大きさを倍率で指定します。
数値を上げても見た目は変わりませんが、画像の中心から外側に判定が広がります。
例）
「1」のとき‥‥画像のサイズがタッチ判定の大きさになる（画像の内接円の中のみ）
「2」のとき‥‥タッチ判定の大きさが縦横２倍になる（画像の外側に50%ずつ広がる）

数値を上げることで操作ミスを防ぎ、操作性を上げることができますが
上げ過ぎて他のボタン等に重なってしまわないように注意してください。

▼ DPad DiagonalRange（方向パッドの斜め方向範囲）‥‥
方向の判定は、パッド画像の対角線を境界線にして上下左右に分けていますが、
この数値を上げると、対角線上をタッチしたときにその両側の方向がオンになり
（「右」＋「上」など）、８方向判定ができるようになります。
８方向移動のプラグインを使用している時などは、この数値を設定してください。

数値の大きさが斜め判定角度の広さとなり、「0～1」の範囲で指定します
例)
「0」のとき‥‥上下左右の４方向のみ入力可能。
「0.5」のとき‥均等８分割の８方向入力が可能。
「1」のとき‥‥「右上」「右下」「左上」「左下」の４方向入力。

数値を上げるほど、「上を押すつもりが右上になっていた」等のミスが起こるため
４方向で問題ない場合は、「0」を指定すると操作ミスが最小限になります。


（var1.1.0より追加）
▼ AnalogMove（アナログ移動）‥‥
サンシロ様のプラグイン「AnalogMove.js」使用時に、アナログ移動を可能にします。
方向パッドの中心からタッチ位置の距離と角度で、ドット単位の移動ができます。
使用の際はプラグインマネージャーで、先に「AnalogMove.js」を読み込み
こちらのパラメータ「AnalogMove」をtrueに変えてください。
※アナログ移動使用中は、「DPad DiagonalRange」の数値は無視されます。

▼ AnalogSensitivity（入力感度）‥‥
「AnalogSensitivity」は入力感度で、数値を上げるほど
最大値（最大スピード）まで入力するのに必要な指の動きが小さくなります。
例)
「1」のとき‥‥入力判定の外端で最大値に。大きな指の移動が必要。
「DPad OpelationRange」と同じとき‥‥方向パッド画像の外端で最大値に。

DPad OpelationRangeよりも大きめの数値を指定すると、入力が楽になります。
（DPad OpelationRangeの初期値1.3に対し、AnalogSensitivityの初期値は1.8です)

------------------------------------------------------------------------------
■パッド、ボタン画像について
------------------------------------------------------------------------------
・（追加）パッド・ボタン画像はシステムフォルダ（img/system）に入れ、
　拡張子(.png)はすべて小文字にしてください。

・画像ファイルは任意のサイズで作成可能ですが、縦横比1:1で作成してください。
　表示の際は、「DPad Size」で指定したpixel数にリサイズされます。
　ボタン画像も同様です。
・方向パッドのグラフィックの中心が画像の中心になるようにしてください。

@param ---PC Option---
@param ---FilePath---
@param ---Button Settings---
@param ---Directional Button---
@param ---Ok Button---
@param ---Cancel Button---
@param ---Menu Button---
@param ---Shift Button---
@param ---PageUp Button---
@param ---PageDown Button---
@param ---Extra Button---
@param ---TouchInput Extend---
@param ---Need Analog Move.js---

@param PC BtnDisplay
@desc Show virtual buttons when running on PC. Yes: true / Not:false
Default:false
@default false
@type boolean
@parent ---PC Option---

@param PC TouchExtend
@desc Enable touch operation extension when running on PC. Yes: true / Not:false
Default:true
@default true
@type boolean
@parent ---PC Option---

@param DPad Image
@desc The file path of the D-Pad image
@default DirPad
@require 1
@dir img/system/
@type file
@parent ---FilePath---

@param ActionBtn Image
@desc The file path of the Action button image
@default ActionButton
@require 1
@dir img/system/
@type file
@parent ---FilePath---

@param CancelBtn Image
@desc File path of Cancel button image
@default CancelButton
@require 1
@dir img/system/
@type file
@parent ---FilePath---

@param MenuBtn Image
@desc File path of Menu button image
@default MenuButton
@require 1
@dir img/system/
@type file
@parent ---FilePath---

@param ShiftBtn Image
@desc File path of Shift button image
@default ShiftButton
@require 1
@dir img/system/
@type file
@parent ---FilePath---

@param PageUpBtn Image
@desc File path of PageUp button image
@default PageUpButton
@require 1
@dir img/system/
@type file
@parent ---FilePath---

@param PageDownBtn Image
@desc File path of PageDown button image
@default PageDownButton
@require 1
@dir img/system/
@type file
@parent ---FilePath---

@param ExtraBtn Image
@desc File path of Extra button image
@default ExtraButton
@require 1
@dir img/system/
@type file
@parent ---FilePath---

@param Blink Button Press
@desc Blink the button when it's pressed.
@default false
@type boolean
@parent ---Button Settings---

@param Blink Button Opacity
@desc Choose the opacity for when the button is pressed. From 0 to 1.
@default 1
@type number
@parent ---Button Settings---

@param Button Opacity
@desc Button opacity (0 to 1) Default: 0.7
@default 0.700
@type number
@max 1.000
@min 0.000
@decimals 3
@parent ---Button Settings---

@param Vertical BtnZoom
@desc Magnification of all buttons when displayed in portrait
初期値:1.700
@default 0.900
@type number
@decimals 3
@parent ---Button Settings---

@param Tablet BtnZoom
@desc Magnification of all buttons when displayed in landscape in Tablet
初期値:0.800
@default 0.800
@type number
@decimals 3
@parent ---Button Settings---

@param TabVertical BtnZoom
@desc Magnification of all buttons when displayed in portrait in Tablet
初期値:1.100
@default 0.900
@type number
@decimals 3
@parent ---Button Settings---

@param HideButton OnMessage
@desc When the message is displayed at the bottom of the screen, lower the display order of the virtual button to the bottom of the game screen.
初期値:false
@default false
@type boolean
@parent ---Button Settings---

@param HideButton Switch
@desc Control the display of virtual buttons with this numbered switch. Disabled at 0.
@default 0
@type number
@parent ---Button Settings---

@param HideButton Switch Value
@desc When controlling a virtual button with a switch, set whether to display ON (true) or OFF (false).
@default false
@type boolean
@parent ---Button Settings---

@param DPad Visible
@desc Show direction pad. Yes:true / Not:false. Default:true
@default true
@type boolean
@parent ---Directional Button---

@param DPad Size
@desc Direction pad size (px). Initial value: 200
@default 128
@type number
@parent ---Directional Button---

@param DPad Margin
@desc The position of the direction pad image. The size of the gap from the edge of the screen.
(width from left; width from bottom) Initial value: 10; 20
@default 10; 20
@parent ---Directional Button---

@param DPad Orientation
@desc You want to change the reference position of the direction pad to something other than the lower left.
left か right; top か bottom で指定。 初期値:left; bottom
@default left; bottom
@type select
@option left; top
@option left; bottom
@option right; top
@option right; bottom
@parent ---Directional Button---

@param DPad OpelationRange
@desc For the direction pad image, the operating range of the touch (magnification, 1~ )
to widen the touch determination to the outside of the image, to prevent operation error. Initial value: 1.3
@default 1.000
@type number
@decimals 3
@parent ---Directional Button---

@param DPad DiagonalRange
@desc The size of the determination of the direction pad oblique direction (0-1). The easier it is to enter diagonally, the easier it is to shake the operation. 0 if it is good in four directions. Initial value: 0.3;
@default 0.300
@type number
@max 1.000
@min 0.000
@decimals 3
@parent ---Directional Button---

@param ActionBtn Visible
@desc Show Action button: true Not:false Initial value: true
@default true
@type boolean
@parent ---Ok Button---

@param ActionBtn Size
@desc The size of the decision button (px). Initial value: 55
@default 55
@type number
@parent ---Ok Button---

@param ActionBtn Margin
@desc The position of the decision button. The size of the gap from the edge of the screen.
 (width from right; width from bottom) Initial value: 70; 20
@default 70; 20
@parent ---Ok Button---

@param ActionBtn Orientation
@desc You want to change the reference position of the decision button to something other than the lower right.
left か right; top か bottom で指定。 初期値:right; bottom
@default right; bottom
@type select
@option left; top
@option left; bottom
@option right; top
@option right; bottom
@parent ---Ok Button---

@param CancelBtn Visible
@desc キャンセル（メニュー）ボタンを表示する:true しない:false
初期値:true
@default true
@type boolean
@parent ---Cancel Button---

@param CancelBtn call menu?
@desc Cancel Button work to call the menu to?
@default false
@type boolean
@parent ---Cancel Button---

@param CancelBtn Size
@desc キャンセルボタンの大きさ(px）。 初期値:55
@default 55
@type number
@parent ---Cancel Button---

@param CancelBtn Margin
@desc キャンセルボタンの位置。画面端からの隙間の大きさで指定。
 (右からの幅; 下からの幅) 初期値:5; 40
@default 5; 40
@parent ---Cancel Button---

@param CancelBtn Orientation
@desc キャンセルボタンの基準位置を、右下以外に変えたい場合。
left か right; top か bottomで指定。 初期値:right; bottom
@default right; bottom
@type select
@option left; top
@option left; bottom
@option right; top
@option right; bottom
@parent ---Cancel Button---

@param MenuBtn Visible
@desc キャンセル（メニュー）ボタンを表示する:true しない:false
初期値:true
@default true
@type boolean
@parent ---Menu Button---

@param MenuBtn Size
@desc キャンセルボタンの大きさ(px）。 初期値:55
@default 55
@type number
@parent ---Menu Button---

@param MenuBtn Margin
@desc キャンセルボタンの位置。画面端からの隙間の大きさで指定。
 (右からの幅; 下からの幅) 初期値:0; 0
@default 0; 0
@parent ---Menu Button---

@param MenuBtn Orientation
@desc キャンセルボタンの基準位置を、右下以外に変えたい場合。
left か right; top か bottomで指定。 初期値:right; bottom
@default right; top
@type select
@option left; top
@option left; bottom
@option right; top
@option right; bottom
@parent ---Menu Button---

@param ShiftBtn Visible
@desc キャンセル（メニュー）ボタンを表示する:true しない:false
初期値:true
@default true
@type boolean
@parent ---Shift Button---

@param ShiftBtn Size
@desc キャンセルボタンの大きさ(px）。 初期値:55
@default 55
@type number
@parent ---Shift Button---

@param ShiftBtn Margin
@desc キャンセルボタンの位置。画面端からの隙間の大きさで指定。
 (右からの幅; 下からの幅) 初期値:10; 150
@default 10; 150
@parent ---Shift Button---

@param ShiftBtn Orientation
@desc キャンセルボタンの基準位置を、右下以外に変えたい場合。
left か right; top か bottomで指定。 初期値:right; bottom
@default right; bottom
@type select
@option left; top
@option left; bottom
@option right; top
@option right; bottom
@parent ---Shift Button---

@param PageUpBtn Visible
@desc キャンセル（メニュー）ボタンを表示する:true しない:false
初期値:true
@default true
@type boolean
@parent ---PageUp Button---

@param PageUpBtn Size
@desc キャンセルボタンの大きさ(px）。 初期値:55
@default 55
@type number
@parent ---PageUp Button---

@param PageUpBtn Margin
@desc キャンセルボタンの位置。画面端からの隙間の大きさで指定。
 (右からの幅; 下からの幅) 初期値:70; 90
@default 70; 90
@parent ---PageUp Button---

@param PageUpBtn Orientation
@desc キャンセルボタンの基準位置を、右下以外に変えたい場合。
left か right; top か bottomで指定。 初期値:right; bottom
@default right; bottom
@type select
@option left; top
@option left; bottom
@option right; top
@option right; bottom
@parent ---PageUp Button---

@param PageDownBtn Visible
@desc キャンセル（メニュー）ボタンを表示する:true しない:false
初期値:true
@default true
@type boolean
@parent ---PageDown Button---

@param PageDownBtn Size
@desc キャンセルボタンの大きさ(px）。 初期値:55
@default 55
@type number
@parent ---PageDown Button---

@param PageDownBtn Margin
@desc キャンセルボタンの位置。画面端からの隙間の大きさで指定。
 (右からの幅; 下からの幅) 初期値:5; 110
@default 5; 110
@parent ---PageDown Button---

@param PageDownBtn Orientation
@desc キャンセルボタンの基準位置を、右下以外に変えたい場合。
left か right; top か bottomで指定。 初期値:right; bottom
@default right; bottom
@type select
@option left; top
@option left; bottom
@option right; top
@option right; bottom
@parent ---PageDown Button---

@param ExtraBtn Visible
@desc キャンセル（メニュー）ボタンを表示する:true しない:false
初期値:true
@default true
@type boolean
@parent ---Extra Button---

@param ExtraBtn Size
@desc キャンセルボタンの大きさ(px）。 初期値:55
@default 55
@type number
@parent ---Extra Button---

@param ExtraBtn Margin
@desc キャンセルボタンの位置。画面端からの隙間の大きさで指定。
 (右からの幅; 下からの幅) 初期値:0; 0
@default 0; 0
@parent ---Extra Button---

@param ExtraBtn Orientation
@desc キャンセルボタンの基準位置を、右下以外に変えたい場合。
left か right; top か bottomで指定。 初期値:right; bottom
@default left; top
@type select
@option left; top
@option left; bottom
@option right; top
@option right; bottom
@parent ---Extra Button---

@param Flick PageUp-PageDown
@desc Flick left or right on the screen to get the PageUp/PageDown operation.
ステータス画面でキャラを切り替えたい時などに。初期値:true
@default true
@type boolean
@parent ---TouchInput Extend---

@param HoldCanvas ActionBtn
@desc Press and hold the screen to press the decision button.
初期値:true
@default true
@type boolean
@parent ---TouchInput Extend---

@param OutCanvas CancelBtn
@desc The entire black belt outside the game screen is treated like a cancel button.
初期値:false
@default false
@type boolean
@parent ---TouchInput Extend---

@param OutCanvas ActionBtn
@desc The entire black belt part outside the game screen becomes the decision button treatment.
初期値:false
@default false
@type boolean
@parent ---TouchInput Extend---

@param Analog Move
@desc [※AnalogMove.jsを先に読み込んでください]
方向パッドでアナログ移動ができるようにする。初期値:false
@default false
@type boolean
@parent ---Need Analog Move.js---

@param Analog Sensitivity
@desc アナログ移動の入力感度。数値を上げると、細かい指の動きでキャラが大きく動く。
初期値:1.800
@default 1.800
@type number
@decimals 3
@parent ---Need Analog Move.js---

*/

var Imported = Imported || {};
Imported.UCHU_MobileOperation_Modified_Ext = "1.2";

var UCHU_MobileOperation_Modified_Ext = {};

var EliUCHU = EliUCHU || {};

(function() {
    "use strict";
    
    //-----------------------------------------------------------------------------
    // Setup
    
var Parameters = PluginManager.parameters('UCHU_MobileOperation_Modified_Ext');
var PRM = PRM || {};

PRM.url=[];
PRM.visible=[];
PRM.size=[];
PRM.pos=[];
PRM.spot=[];

PRM.pcBtn = Boolean(Parameters["PC BtnDisplay"] === 'true' || false);
PRM.pcExt = Boolean(Parameters["PC TouchExtend"] === 'true' || false);
PRM.url[0] = "./img/system/" + String(Parameters["DPad Image"]) + ".png";
PRM.url[1] = "./img/system/" + String(Parameters["ActionBtn Image"])+ ".png";
PRM.url[2] = "./img/system/" + String(Parameters["CancelBtn Image"])+ ".png"; // Eliaquim
PRM.url[3] = "./img/system/" + String(Parameters["MenuBtn Image"])+ ".png"; // Eliaquim
PRM.url[4] = "./img/system/" + String(Parameters["ShiftBtn Image"])+ ".png"; // Eliaquim
PRM.url[5] = "./img/system/" + String(Parameters["PageUpBtn Image"])+ ".png"; // Eliaquim
PRM.url[6] = "./img/system/" + String(Parameters["PageDownBtn Image"])+ ".png"; // Eliaquim
PRM.url[7] = "./img/system/" + String(Parameters["ExtraBtn Image"])+ ".png"; // Eliaquim
PRM.blinkButton = Boolean(Parameters["Blink Button Press"] === 'true' || false); // Eliaquim
PRM.blinkButtonOpacity = Number(Parameters["Blink Button Opacity"]);
PRM.opacity = Number(Parameters["Button Opacity"]);
PRM.vZoom = Number(Parameters["Vertical BtnZoom"]);
PRM.tabZoom = Number(Parameters["Tablet BtnZoom"]);
PRM.tabvZoom = Number(Parameters["TabVertical BtnZoom"]);
PRM.hideBtn = Boolean(Parameters["HideButton OnMessage"] === 'true' || false);
PRM.visible[0] = Boolean(Parameters["DPad Visible"] === 'true' || false);
PRM.size[0] = Number(Parameters["DPad Size"]);
PRM.pos[0] =Parameters["DPad Margin"].split(";");
PRM.spot[0] = Parameters["DPad Orientation"].split(";");
PRM.pad_scale = Number(Parameters["DPad OpelationRange"]);
PRM.pad_dia = Math.max(0,Math.min(1,(1-Number(Parameters["DPad DiagonalRange"]))));
PRM.visible[1] = Boolean(Parameters["ActionBtn Visible"] === 'true' || false);
PRM.size[1] = Number(Parameters["ActionBtn Size"]);
PRM.pos[1] = Parameters["ActionBtn Margin"].split(";");
PRM.spot[1] = Parameters["ActionBtn Orientation"].split(";");
PRM.visible[2] = Boolean(Parameters["CancelBtn Visible"] === 'true' || false);
PRM.cancelasMenu =  Boolean(Parameters["CancelBtn call menu?"] === 'true' || false);
PRM.size[2] = Number(Parameters["CancelBtn Size"]);
PRM.pos[2] = Parameters["CancelBtn Margin"].split(";");
PRM.spot[2] = Parameters["CancelBtn Orientation"].split(";");
PRM.visible[3] = Boolean(Parameters["MenuBtn Visible"] === 'true' || false); // Eliaquim
PRM.size[3] = Number(Parameters["MenuBtn Size"]); // Eliaquim
PRM.pos[3] = Parameters["MenuBtn Margin"].split(";"); // Eliaquim
PRM.spot[3] = Parameters["MenuBtn Orientation"].split(";"); // Eliaquim
PRM.visible[4] = Boolean(Parameters["ShiftBtn Visible"] === 'true' || false); // Eliaquim
PRM.size[4] = Number(Parameters["ShiftBtn Size"]); // Eliaquim
PRM.pos[4] = Parameters["ShiftBtn Margin"].split(";"); // Eliaquim
PRM.spot[4] = Parameters["ShiftBtn Orientation"].split(";"); // Eliaquim
PRM.visible[5] = Boolean(Parameters["PageUpBtn Visible"] === 'true' || false); // Eliaquim
PRM.size[5] = Number(Parameters["PageUpBtn Size"]); // Eliaquim
PRM.pos[5] = Parameters["PageUpBtn Margin"].split(";"); // Eliaquim
PRM.spot[5] = Parameters["PageUpBtn Orientation"].split(";"); // Eliaquim
PRM.visible[6] = Boolean(Parameters["PageDownBtn Visible"] === 'true' || false); // Eliaquim
PRM.size[6] = Number(Parameters["PageDownBtn Size"]); // Eliaquim
PRM.pos[6] = Parameters["PageDownBtn Margin"].split(";"); // Eliaquim
PRM.spot[6] = Parameters["PageDownBtn Orientation"].split(";"); // Eliaquim
PRM.visible[7] = Boolean(Parameters["ExtraBtn Visible"] === 'true' || false); // Eliaquim
PRM.size[7] = Number(Parameters["ExtraBtn Size"]); // Eliaquim
PRM.pos[7] = Parameters["ExtraBtn Margin"].split(";"); // Eliaquim
PRM.spot[7] = Parameters["ExtraBtn Orientation"].split(";"); // Eliaquim
PRM.flickpage = Boolean(Parameters["Flick PageUp-PageDown"] === 'true' || false);
PRM.holdaction = Boolean(Parameters["HoldCanvas ActionBtn"] === 'true' || false);
PRM.outcansel = Boolean(Parameters["OutCanvas CancelBtn"] === 'true' || false);
PRM.outaction = Boolean(Parameters["OutCanvas ActionBtn"] === 'true' || false);
PRM.sensitivity = Number(Parameters["Analog Sensitivity"]);
//改変者による機能追加
PRM.hideBtnSwitch = Number(Parameters["HideButton Switch"]);
PRM.hideBtnSwitchValue = Boolean(Parameters["HideButton Switch Value"] === 'true' || false);

if(PRM.cancelasMenu) {
var cancelmode = "escape";
var cancelmode2 = "escapeBtn"
}else{
var cancelmode = "cancel";
var cancelmode2 = "cancelBtn"
};
var btn_id=["DirPad","ok",cancelmode,"menu","shift","pageup","pagedown","extra"];
var current_zoom=1;   
var st_x = 0;
var st_y = 0;
var pad_range=PRM.size[0]*PRM.pad_scale;
var pad_size=pad_range*current_zoom/2;
var Btn_ready=false;
var Btn_hide=false;
var PressBtn=false;
var dirx=0;
var diry=0;
var touchx=0;
var touchy=0;
var autofire=false;
var hvzoom=[1, PRM.vZoom];
var DirPadOp=false; // Eliaquim
var okOp=false; // Eliaquim
var cancelOp=false; // Eliaquim
var menuOp=false; // Eliaquim
var shiftOp=false; // Eliaquim
var pageupOP=false; // Eliaquim
var pagedownOP=false; // Eliaquim
var extraOp=false; // Eliaquim
var ua = (function(u){
    return {
    Tablet:(u.indexOf("windows") != -1 && u.indexOf("touch") != -1) || u.indexOf("ipad") != -1 || (u.indexOf("android") != -1 && u.indexOf("mobile") == -1) || (u.indexOf("firefox") != -1 && u.indexOf("tablet") != -1) || u.indexOf("kindle") != -1 || u.indexOf("silk") != -1 || u.indexOf("playbook") != -1
    };
})(window.navigator.userAgent.toLowerCase());

if(ua.Tablet){
    hvzoom=[PRM.tabZoom, PRM.tabvZoom];
}
if (!Utils.isMobileDevice() && !PRM.pcBtn) {PRM.visible[0]=PRM.visible[1]=PRM.visible[2]=PRM.visible[3]=PRM.visible[4]=PRM.visible[5]=PRM.visible[6]=PRM.visible[7]=false;} //add

//-----------------------------------------------------------------------------
// Locate_DirPad

function Locate_DirPad() {
    this.initialize.apply(this, arguments);
}


Locate_DirPad.prototype.initialize = function() {
    var img = new Image();
    var url = PRM.url[0];
    img.onerror = function() {Graphics.printError('DirPad Image was Not Found:',url);};
    img.src = url;
    img = null;
    this.Div = document.createElement("div");
    this.Div.id = 'Dirpad';
    this.Div.style.position = 'fixed';
    this.Div.style[PRM.spot[0][0].replace(/\s+/g, "")] = String(PRM.pos[0][0]-(pad_range-PRM.size[0])/2)+'px';
    this.Div.style[PRM.spot[0][1].replace(/\s+/g, "")] = String(PRM.pos[0][1]-(pad_range-PRM.size[0])/2)+'px';
    this.Div.style.width = pad_range+'px';
    this.Div.style.height = pad_range+'px';
    this.Div.style.opacity = PRM.opacity;
    this.Div.style.zIndex = '11';
    this.Div.style.userSelect="none";
    this.Div.style["-webkit-tap-highlight-color"]="rgba(0,0,0,0)";
    this.Div.style.background = 'url('+PRM.url[0]+') 50% 50% / '+String(Math.round(PRM.size[0]/pad_range*100))+'% no-repeat';
    
    if(!Utils.isMobileDevice() && PRM.pcBtn){
        this.Div.addEventListener('mousedown', function(e) {
            if (!SceneManager.isSceneChanging()){dirope(e.layerX,e.layerY,true);PressBtn=true;}
        }, false);
        this.Div.addEventListener('mousemove', function(e) {
            if(PressBtn && !SceneManager.isSceneChanging()){dirope(e.layerX,e.layerY,false);}
        }, false);
        this.Div.addEventListener('mouseup', function() {
            disope();PressBtn=false;
        }, false);
        this.Div.addEventListener('mouseout', function() {
            disope();PressBtn=false;
        }, false);
    }
    this.Div.addEventListener('touchstart', function(e) {
        PressBtn=true;
        if (!SceneManager.isSceneChanging()){
            dirope(e.touches[0].clientX-dirx, e.touches[0].clientY-diry,true)};
    }, false);
    this.Div.addEventListener('touchmove', function(e) {
        if (!SceneManager.isSceneChanging()){
            dirope(e.touches[0].clientX-dirx, e.touches[0].clientY-diry,false)};
        PressBtn=true;
    }, false);
    this.Div.addEventListener('touchend', function() {
        disope();PressBtn=false;
    }, false);
        document.body.appendChild(this.Div);
};

function dirope(xx,yy,st) {
    touchx=(xx-pad_size)/pad_size;
    touchy=(yy-pad_size)/pad_size;
    if(st && Math.sqrt(touchx*touchx+touchy*touchy)>1){
        disope();
    }else{
        //Blink the button!
        if(PRM.blinkButton && Btn_hide === false && DirPadOp === false) {
            document.getElementById("Dirpad").style.opacity = PRM.blinkButtonOpacity;
        }
        if(touchx>Math.abs(touchy)*PRM.pad_dia){
            Input._currentState['right']=true;
            Input._currentState['left']=false;
        } else if(touchx<-Math.abs(touchy)*PRM.pad_dia){
            Input._currentState['left']=true;
            Input._currentState['right']=false;
        } else {
            Input._currentState['left']=false;
            Input._currentState['right']=false;
        }
        if(touchy>Math.abs(touchx)*PRM.pad_dia){
            Input._currentState['down']=true;
            Input._currentState['up']=false;}
        else if(touchy<-Math.abs(touchx)*PRM.pad_dia){
            Input._currentState['up']=true;
            Input._currentState['down']=false;
            } else {
            Input._currentState['up']=false;
            Input._currentState['down']=false;
            }
    }
};

function disope() {
    touchx=0; touchy=0;
    Input._currentState['up']=false;
    Input._currentState['down']=false;
    Input._currentState['left']=false;
    Input._currentState['right']=false;
    //blink dpad
    if(PRM.blinkButton && Btn_hide === false && DirPadOp === false) {
        document.getElementById("Dirpad").style.opacity = PRM.opacity;
    }
};

EliUCHU.Scene_Base_update = Scene_Base.prototype.update;
    Scene_Base.prototype.update = function() {
        EliUCHU.Scene_Base_update.call(this);
    if(PRM.blinkButton && Btn_hide === false) {
        // OK BUTTON
        if(PRM.visible[1] && !okOp) {
            if(Input._currentState['ok'] == true) {
                document.getElementById("okBtn").style.opacity = PRM.blinkButtonOpacity;
            }else{
                document.getElementById("okBtn").style.opacity = PRM.opacity;
            }
        }
            // CANCEL BUTTON
        if(PRM.visible[2] && !cancelOp) {
            if(Input._currentState[cancelmode] == true) {
                document.getElementById(cancelmode2).style.opacity = PRM.blinkButtonOpacity;
            }else{
                document.getElementById(cancelmode2).style.opacity = PRM.opacity;
            }
        }
            // MENU BUTTON
        if(PRM.visible[3] && !menuOp) {
            if(Input._currentState['menu'] == true) {
                document.getElementById("menuBtn").style.opacity = PRM.blinkButtonOpacity;
            }else{
                document.getElementById("menuBtn").style.opacity = PRM.opacity;
            }
        }
            // SHIFT BUTTON
        if(PRM.visible[4] && !shiftOp) {
            if(Input._currentState['shift'] == true ) {
                document.getElementById("shiftBtn").style.opacity = PRM.blinkButtonOpacity;
            }else{
                document.getElementById("shiftBtn").style.opacity = PRM.opacity;
            }
        }
            // PAGE UP BUTTON
        if(PRM.visible[5] && !pageupOP) {
            if(Input._currentState['pageup'] == true) {
                document.getElementById("pageupBtn").style.opacity = PRM.blinkButtonOpacity;
            }else{
                document.getElementById("pageupBtn").style.opacity = PRM.opacity;
            }
        }
            // PAGEDOWN BUTTON
        if(PRM.visible[6] && !pagedownOP) {
            if(Input._currentState['pagedown'] == true) {
                document.getElementById("pagedownBtn").style.opacity = PRM.blinkButtonOpacity;
            }else{
                document.getElementById("pagedownBtn").style.opacity = PRM.opacity;
            }
        }
            // Extra Button
        if(PRM.visible[7] && !extraOp) {
            if(Input._currentState['extra'] == true) {
                document.getElementById("extraBtn").style.opacity = PRM.blinkButtonOpacity;
            }else{
                document.getElementById("extraBtn").style.opacity = PRM.opacity;
            }
        }
    }
};

//-----------------------------------------------------------------------------
// Locate_Button

function Locate_Button() {
    this.initialize.apply(this, arguments);
}
Locate_Button.prototype.initialize = function(type) {
    var img = new Image();
    var url = PRM.url[type];
    img.onerror = function() {Graphics.printError('Button Image was Not Found:',url);};
    img.src = url;
    img = null;
    this.Div = document.createElement("div");
    this.Div.id = btn_id[type]+'Btn';
    this.Div.style.position = 'fixed';
    this.Div.style[PRM.spot[type][0].replace(/\s+/g, "")] = PRM.pos[type][0]+'px';
    this.Div.style[PRM.spot[type][1].replace(/\s+/g, "")] = PRM.pos[type][1]+'px';
    this.Div.style.width = PRM.size[type]+'px';
    this.Div.style.height = PRM.size[type]+'px';
    this.Div.style.opacity = PRM.opacity;
    this.Div.style.zIndex = '11';
    this.Div.style.userSelect="none";
    this.Div.style.background = 'url('+PRM.url[type]+') 0 0 / cover no-repeat';
    
    if(!Utils.isMobileDevice() && PRM.pcBtn){
        this.Div.addEventListener('mousedown', function() {
            Input._currentState[btn_id[type]] = true;
            PressBtn=true;
        }, false);
        this.Div.addEventListener('mouseover', function() {
            if(TouchInput.isPressed()){
                Input._currentState[btn_id[type]] = true;
                PressBtn=true;
                return false;}
        }, false);
        this.Div.addEventListener('mouseup', function() {
            Input._currentState[btn_id[type]] = false;
            PressBtn=false;
        }, false);
        this.Div.addEventListener('mouseout', function() {
            Input._currentState[btn_id[type]] = false;
            PressBtn=false;
        }, false);
    }
    
    this.Div.addEventListener('touchstart', function() {
        if (!SceneManager.isSceneChanging()){
            Input._currentState[btn_id[type]] = true;
            PressBtn=true;
        }
    }, false);
    this.Div.addEventListener('touchend', function() {
        Input._currentState[btn_id[type]] = false;
        PressBtn=false;
    }, false);
    
    document.body.appendChild(this.Div);
};

//-----------------------------------------------------------------------------
// Replace function
        
var Scene_Base_start = Scene_Base.prototype.start;
Scene_Base.prototype.start = function() {
        Scene_Base_start.call(this);
    if (Utils.isMobileDevice() || PRM.pcBtn) {
        if(!Btn_ready){
            Btn_ready=true;
            if(PRM.visible[0]){this.DirPad = new Locate_DirPad();}
            if(PRM.visible[1]){this.okButton = new Locate_Button(1);}
            if(PRM.visible[2]){this.canselButton = new Locate_Button(2);}
            if(PRM.visible[3]){this.mennuButton = new Locate_Button(3);} // Eliaquim
            if(PRM.visible[4]){this.shiftiButton = new Locate_Button(4);} // Eliaquim
            if(PRM.visible[5]){this.pgupButton = new Locate_Button(5);} // Eliaquim
            if(PRM.visible[6]){this.pgdwiButton = new Locate_Button(6);} // Eliaquim
            if(PRM.visible[7]){this.extriButton = new Locate_Button(7);} // Eliaquim
            Graphics._updateRealScale();
            document.documentElement.style["-webkit-user-select"]="none";
            document.addEventListener("touchmove", function(evt) {evt.preventDefault();}, {passive: false});
        }
    }
};
    // Added other buttons (Eliaquim)
    if(PRM.visible[0] || PRM.visible[1] || PRM.visible[2] || PRM.visible[3] || PRM.visible[4] || PRM.visible[5] || PRM.visible[6] || PRM.visible[7]){
        var Game_Temp_setDestination = Game_Temp.prototype.setDestination;
        Game_Temp.prototype.setDestination = function(x, y) {
            Game_Temp_setDestination.apply(this, arguments);
            if(PressBtn){
                this._destinationX = null;
                this._destinationY = null;
            }
        };
        
        var Graphics_updateRealScale = Graphics._updateRealScale;
        Graphics._updateRealScale = function() {
            Graphics_updateRealScale.call(this);
            if (this._stretchEnabled) {
                if(document.getElementById("Dirpad")){
                if(window.innerWidth<window.innerHeight){current_zoom=hvzoom[1];}else{current_zoom=hvzoom[0];}
                pad_size=pad_range*current_zoom/2;
                if(PRM.visible[0]){
                        document.getElementById("Dirpad").style.zoom=current_zoom;
                        dirx=document.getElementById("Dirpad").offsetLeft*current_zoom;
                        diry=document.getElementById("Dirpad").offsetTop*current_zoom;
                }// Added other buttons (Eliaquim)
                if(PRM.visible[1]){document.getElementById("okBtn").style.zoom=current_zoom;}
                if(PRM.visible[2]){document.getElementById(cancelmode2).style.zoom=current_zoom;}
                if(PRM.visible[3]){document.getElementById("menuBtn").style.zoom=current_zoom;} // Eliaquim
                if(PRM.visible[4]){document.getElementById("shiftBtn").style.zoom=current_zoom;} // Eliaquim
                if(PRM.visible[5]){document.getElementById("pageupBtn").style.zoom=current_zoom;} // Eliaquim
                if(PRM.visible[6]){document.getElementById("pagedownBtn").style.zoom=current_zoom;} // Eliaquim
                if(PRM.visible[7]){document.getElementById("extraBtn").style.zoom=current_zoom;} // Eliaquim
                }
            }
        };
}

//-----------------------------------------------------------------------------
// Option
    // UCHU_MobileOperation_Modified_Extからの改変が多い箇所
    
    //UCHU_MobileOperation_Modified_Extの同名メソッドとほぼ同じ
    Scene_Base.prototype.hideUserInterface = function() {
        if (Utils.isMobileDevice() || PRM.pcBtn) {
            Btn_hide = true;
            //元々のUCHU_MobileOperation_Modified_Extの処理 - // Added other buttons (Eliaquim)
            if(PRM.visible[0]){document.getElementById("Dirpad").style.zIndex = '0';}
            if(PRM.visible[1]){document.getElementById("okBtn").style.zIndex = '0';}
            if(PRM.visible[2]){document.getElementById(cancelmode2).style.zIndex = '0';}
            if(PRM.visible[3]){document.getElementById("menuBtn").style.zIndex = '0';} // Eliaquim
            if(PRM.visible[4]){document.getElementById("shiftBtn").style.zIndex = '0';} // Eliaquim
            if(PRM.visible[5]){document.getElementById("pageupBtn").style.zIndex = '0';} // Eliaquim
            if(PRM.visible[6]){document.getElementById("pagedownBtn").style.zIndex = '0';} // Eliaquim
            if(PRM.visible[7]){document.getElementById("extraBtn").style.zIndex = '0';} // Eliaquim
            if(PRM.hideBtnSwitch != 0){
                //透明度をゼロにする処理 - // Added other buttons (Eliaquim)
                if(PRM.visible[0]){document.getElementById("Dirpad").style.opacity = '0';}
                if(PRM.visible[1]){document.getElementById("okBtn").style.opacity = '0';}
                if(PRM.visible[2]){document.getElementById(cancelmode2).style.opacity = '0';}
                if(PRM.visible[3]){document.getElementById("menuBtn").style.opacity = '0';} // Eliaquim
                if(PRM.visible[4]){document.getElementById("shiftBtn").style.opacity = '0';} // Eliaquim
                if(PRM.visible[5]){document.getElementById("pageupBtn").style.opacity = '0';} // Eliaquim
                if(PRM.visible[6]){document.getElementById("pagedownBtn").style.opacity = '0';} // Eliaquim
                if(PRM.visible[7]){document.getElementById("extraBtn").style.opacity = '0';} // Eliaquim
            }
        }
    };
    
    //UCHU_MobileOperation_Modified_Extの同名メソッドとほぼ同じ
    Scene_Base.prototype.showUserInterface = function() {
        if (Utils.isMobileDevice() || PRM.pcBtn) {
            Btn_hide = false;
            //元々のUCHU_MobileOperation_Modified_Extの処理 - // Added other buttons (Eliaquim)
            if(PRM.visible[0]){document.getElementById("Dirpad").style.zIndex = '11';}
            if(PRM.visible[1]){document.getElementById("okBtn").style.zIndex = '11';}
            if(PRM.visible[2]){document.getElementById(cancelmode2).style.zIndex = '11';}
            if(PRM.visible[3]){document.getElementById("menuBtn").style.zIndex = '11';} // Eliaquim
            if(PRM.visible[4]){document.getElementById("shiftBtn").style.zIndex = '11';} // Eliaquim
            if(PRM.visible[5]){document.getElementById("pageupBtn").style.zIndex = '11';} // Eliaquim
            if(PRM.visible[6]){document.getElementById("pagedownBtn").style.zIndex = '11';} // Eliaquim
            if(PRM.visible[7]){document.getElementById("extraBtn").style.zIndex = '11';} // Eliaquim
            if(PRM.hideBtnSwitch != 0){
                //透明度を設定値にする処理 - // Added other buttons (Eliaquim)
                if(PRM.visible[0]){document.getElementById("Dirpad").style.opacity = PRM.opacity;}
                if(PRM.visible[1]){document.getElementById("okBtn").style.opacity = PRM.opacity;}
                if(PRM.visible[2]){document.getElementById(cancelmode2).style.opacity = PRM.opacity;}
                if(PRM.visible[3]){document.getElementById("menuBtn").style.opacity = PRM.opacity;} // Eliaquim
                if(PRM.visible[4]){document.getElementById("shiftBtn").style.opacity = PRM.opacity;} // Eliaquim
                if(PRM.visible[5]){document.getElementById("pageupBtn").style.opacity = PRM.opacity;} // Eliaquim
                if(PRM.visible[6]){document.getElementById("pagedownBtn").style.opacity = PRM.opacity;} // Eliaquim
                if(PRM.visible[7]){document.getElementById("extraBtn").style.opacity = PRM.opacity;} // Eliaquim               
            }
        }
    };

    //updateMainで表示状態をチェックする
    var dice2000_Scene_Map_updatemain = Scene_Map.prototype.updateMain;
    Scene_Map.prototype.updateMain = function() {
        dice2000_Scene_Map_updatemain.apply(this, arguments);
        if(PRM.hideBtnSwitch != 0){
            if($gameSwitches.value(PRM.hideBtnSwitch) != PRM.hideBtnSwitchValue){
                if(!Btn_hide) this.hideUserInterface();
            }else{
                if(Btn_hide) this.showUserInterface();
            }
        }else if(PRM.hideBtn){
            if($gameMessage.hasText() && !$gameMessage.scrollMode() && $gameMessage.positionType() == 2){
                if(!Btn_hide) this.hideUserInterface();
            }else{
                if(Btn_hide) this.showUserInterface();
            }
        }
            
    };

    var dice2000_Scene_Battle_update = Scene_Battle.prototype.update;
    Scene_Battle.prototype.update = function() {
        dice2000_Scene_Battle_update.apply(this, arguments);
        if(PRM.hideBtnSwitch != 0){
            if($gameSwitches.value(PRM.hideBtnSwitch) != PRM.hideBtnSwitchValue){
                if(!Btn_hide) this.hideUserInterface();
            }else{
                if(Btn_hide) this.showUserInterface();
            }
        }else if(PRM.hideBtn){
            if($gameMessage.hasText() && !$gameMessage.scrollMode() && $gameMessage.positionType() == 2){
                if(!Btn_hide) this.hideUserInterface();
            }else{
                if(Btn_hide) this.showUserInterface();
            }
        }
    };

if(Utils.isMobileDevice() || PRM.pcExt){
    if(PRM.holdaction){
        var TouchInput_update = TouchInput.update;
        TouchInput.update = function() {
            TouchInput_update.call(this);
            if (!PressBtn && TouchInput.isLongPressed()) {
                Input._currentState['ok']=true;autofire=true;
            }
            if(!TouchInput.isPressed() && autofire){
                Input._currentState['ok']=false;autofire=false;
            }
        };
    }
    
    if(PRM.flickpage || PRM.outcansel || PRM.outaction){
        TouchInput._endRequest= function(type) {
            Input._currentState[type]=false;
        }
        if(Utils.isMobileDevice()){
            var TouchInput_onTouchStart = TouchInput._onTouchStart;
            TouchInput._onTouchStart = function(event) {
                TouchInput_onTouchStart.apply(this, arguments);
                var touch = event.changedTouches[0];
                if(!PressBtn){
                    st_x = Graphics.pageToCanvasX(touch.pageX);
                    st_y = Graphics.pageToCanvasY(touch.pageY);
                    if(st_x<0 || st_y<0 || st_x>Graphics.boxWidth || st_y>Graphics.boxHeight){
                        // if(PRM.cancelasMenu){
                        //     if(PRM.outcansel){Input._currentState['escape']=true;setTimeout("TouchInput._endRequest('escape');", 100);}
                        // }else {
                            if(PRM.outcansel){Input._currentState[cancelmode]=true;setTimeout("TouchInput._endRequest(cancelmode);", 100);}
                        // }
                        if(PRM.outaction){Input._currentState['ok']=true;setTimeout("TouchInput._endRequest('ok');", 100);}
                    }
                }
            };
        }else{
            var TouchInput_onLeftButtonDown = TouchInput._onLeftButtonDown;
            TouchInput._onLeftButtonDown = function(event) {
                TouchInput_onLeftButtonDown.apply(this, arguments);
                if(!PressBtn){
                    st_x = Graphics.pageToCanvasX(event.pageX);
                    st_y = Graphics.pageToCanvasY(event.pageY);
                    if(st_x<0 || st_y<0 || st_x>Graphics.boxWidth || st_y>Graphics.boxHeight){
                        // if(PRM.cancelasMenu){
                        // if(PRM.outcansel){Input._currentState['escape']=true;setTimeout("TouchInput._endRequest('escape');", 100);}
                        // }else {
                        if(PRM.outcansel){Input._currentState[cancelmode]=true;setTimeout("TouchInput._endRequest(cancelmode);", 100);}
                        // }
                        if(PRM.outaction){Input._currentState['ok']=true;setTimeout("TouchInput._endRequest('ok');", 100);}
                    }
                }
            };
        }
    }
        
    if(PRM.flickpage){
        var TouchInput_onMove = TouchInput._onMove;
        TouchInput._onMove = function(x, y) {
            TouchInput_onMove.apply(this, arguments);
            if(!PressBtn){
                if((st_x-x)<-50 && Math.abs(st_y-y)<100){st_y=9999;Input._currentState['pageup']=true;setTimeout("TouchInput._endRequest('pageup');", 100);}
                if((st_x-x)>50 && Math.abs(st_y-y)<100){st_y=9999;Input._currentState['pagedown']=true;setTimeout("TouchInput._endRequest('pagedown');", 100);}
            }
        }
    }
}

//AnalogMove.js
if(PRM.analogmove && Utils.isMobileDevice() || PRM.analogmove && PRM.pcBtn){
    Input.leftStick = function() {
        var threshold = 0.1;
        var x = touchx;
        var y = touchy;
        var tilt = Math.min(1,Math.sqrt(touchx*touchx+touchy*touchy)*PRM.sensitivity);
        var direction = 0.0;
        if (x === 0.0) {
            direction = (-y > 0 ? Math.PI * 0.0 : Math.PI * 1.0);
        } else if (y === 0.0) {
            direction = (-x > 0 ? Math.PI * 0.5 : Math.PI * 1.5);
        } else {
            direction = Math.atan2(-x, -y);
        }
        return {tilt: tilt, direction: direction};
    };
}
// New Function by Eliaquim
EliUCHU.hideall = function () {
    // Btn_hide = true;
    DirPadOp=true;
    okOp=true;
    cancelOp=true;
    menuOp=true;
    shiftOp=true;
    pageupOP=true;
    pagedownOP=true;
    extraOp=true;
    if(PRM.visible[0]){document.getElementById("Dirpad").style.opacity = '0';}
    if(PRM.visible[1]){document.getElementById("okBtn").style.opacity = '0';}
    if(PRM.visible[2]){document.getElementById(cancelmode2).style.opacity = '0';}
    if(PRM.visible[3]){document.getElementById("menuBtn").style.opacity = '0';} // add
    if(PRM.visible[4]){document.getElementById("shiftBtn").style.opacity = '0';} // add
    if(PRM.visible[5]){document.getElementById("pageupBtn").style.opacity = '0';} // add
    if(PRM.visible[6]){document.getElementById("pagedownBtn").style.opacity = '0';} // add
    if(PRM.visible[7]){document.getElementById("extraBtn").style.opacity = '0';} // add
};
// New Function by Eliaquim
EliUCHU.showall = function () {
    // Btn_hide = false;
    DirPadOp=false;
    okOp=false;
    cancelOp=false;
    menuOp=false;
    shiftOp=false;
    pageupOP=false;
    pagedownOP=false;
    extraOp=false;
    if(PRM.visible[0]){document.getElementById("Dirpad").style.opacity = PRM.opacity;}
    if(PRM.visible[1]){document.getElementById("okBtn").style.opacity = PRM.opacity;}
    if(PRM.visible[2]){document.getElementById(cancelmode2).style.opacity = PRM.opacity;}
    if(PRM.visible[3]){document.getElementById("menuBtn").style.opacity = PRM.opacity;}    // add
    if(PRM.visible[4]){document.getElementById("shiftBtn").style.opacity = PRM.opacity;}    // add
    if(PRM.visible[5]){document.getElementById("pageupBtn").style.opacity = PRM.opacity;}    // add   
    if(PRM.visible[6]){document.getElementById("pagedownBtn").style.opacity = PRM.opacity;}    // add
    if(PRM.visible[7]){document.getElementById("extraBtn").style.opacity = PRM.opacity;}    // add
};

// New Function by Eliaquim - Added plugin commands.
EliUCHU.Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function (command, args) {
    EliUCHU.Game_Interpreter_pluginCommand.call(this, command, args);
    switch(command.toLowerCase()) {
        case "hide":
            switch(args[0].toLowerCase()) {
                case "dirpad":
                    DirPadOp = true;
                    document.getElementById("Dirpad").style.opacity = '0';
                break;
                case "ok":
                    okOp = true;
                    document.getElementById("okBtn").style.opacity = '0';
                break;
                case "cancel":
                    cancelOp = true;
                    document.getElementById(cancelmode2).style.opacity = '0';
                break;
                case "menu":
                    menuOp = true;
                    document.getElementById("menuBtn").style.opacity = '0';
                break;
                case "shift":
                    shiftOp = true;
                    document.getElementById("shiftBtn").style.opacity = '0';
                break;   
                case "pageup":
                    pageupOP = true;
                    document.getElementById("pageupBtn").style.opacity = '0';
                break;
                case "pagedown":
                    pagedownOP = true;
                    document.getElementById("pagedownBtn").style.opacity = '0';
                break;
                case "extra":
                    extraOp = true;
                    document.getElementById("extraBtn").style.opacity = '0';
                break;
                case "all":
                    EliUCHU.hideall();
                break;
            }
        break;
        case "show":
                switch(args[0].toLowerCase()) {
                    case "dirpad":
                        DirPadOp = false;
                        document.getElementById("Dirpad").style.opacity = PRM.opacity;
                    break;
                    case "ok":
                        okOp = false;
                        document.getElementById("okBtn").style.opacity = PRM.opacity;
                    break;
                    case "cancel":
                        cancelOp = false;
                        document.getElementById(cancelmode2).style.opacity = PRM.opacity;
                    break;
                    case "menu":
                        menuOp = false;
                        document.getElementById("menuBtn").style.opacity = PRM.opacity;
                    break;
                    case "shift":
                        shiftOp = false;
                        document.getElementById("shiftBtn").style.opacity = PRM.opacity;
                    break;   
                    case "pageup":
                        pageupOP = false;
                        document.getElementById("pageupBtn").style.opacity = PRM.opacity;
                    break;
                    case "pagedown":
                        pagedownOP = false;
                        document.getElementById("pagedownBtn").style.opacity = PRM.opacity;
                    break;
                    case "extra":
                        extraOp = false;
                        document.getElementById("extraBtn").style.opacity = PRM.opacity;
                    break;
                    case "all":
                        EliUCHU.showall();
                }
        break;
    }
};
})(UCHU_MobileOperation_Modified_Ext);

