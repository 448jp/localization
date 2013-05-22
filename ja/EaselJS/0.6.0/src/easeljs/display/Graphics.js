/*
* Graphics
* Visit http://createjs.com/ for documentation, updates and examples.
*
* Copyright (c) 2010 gskinner.com, inc.
* 
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use,
* copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following
* conditions:
* 
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
* OTHER DEALINGS IN THE SOFTWARE.
*/

// ���O���:
this.createjs = this.createjs||{};

(function() {

/**
* Graphics�N���X�Ŏg�p���������N���X�ł��BGraphics���̖��߃��X�g���쐬���邽�߂Ɏg�p����܂��B
* @class Command
* @protected
* @constructor
**/
function Command(f, params, path) {
	this.f = f;
	this.params = params;
	this.path = path==null ? true : path;
}

/**
* @method exec
* @protected
* @param {Object} scope
**/
Command.prototype.exec = function(scope) { this.f.apply(scope, this.params); }

/**
 * Graphics�N���X�́A�x�N�^�[�`�施�߂𐶐����Ďw�肵���R���e�N�X�g�ɕ`�悷�邽�߂́A�e�ՂɎg�p�ł���API��񋟂��܂��B
 * ���ӓ_�Ƃ��āAGraphics��{{#crossLink "DisplayObject/draw"}}{{/crossLink}}�𒼐ڌĂяo�����Ƃɂ��AEasel�t���[�����[�N�Ɉˑ������g�p���邱�Ƃ��ł��܂����A
 * {{#crossLink "Shape"}}{{/crossLink}}�I�u�W�F�N�g���g�p����Easel�̕\���I�u�W�F�N�g�̃R���e�N�X�g���Ńx�N�^�[�O���t�B�b�N�X��`�悷�邱�Ƃ��\�ł��B
 *
 * <h4>Example</h4>
 *      var g = new Graphics();
 *	    g.setStrokeStyle(1);
 *	    g.beginStroke(Graphics.getRGB(0,0,0));
 *	    g.beginFill(Graphics.getRGB(255,0,0));
 *	    g.drawCircle(0,0,3);
 *
 *	    var s = new Shape(g);
 *	    	s.x = 100;
 *	    	s.y = 100;
 *
 *	    stage.addChild(s);
 *	    stage.update();
 *
 * ���ӓ_�Ƃ��āAGraphics�̑S�Ă̕`�惁�\�b�h��Graphics�C���X�^���X��Ԃ��̂ŁA���݂��ɘA�������邱�Ƃ��ł��܂��B
 * �Ⴆ�Ή��̃R�[�h�͐Ԃ����A�̓h��Ԃ��̋�`��`�悷�閽�߂𐶐�������A�w�肵��context2D�ɕ\�����Ă��܂�:
 *
 *      myGraphics.beginStroke("#F00").beginFill("#00F").drawRect(20, 20, 100, 50).draw(myContext2D);
 *
 * <h4>�Z�k�� API</h4>
 * Graphics�N���X�͂܂�"�Z�k�� API"���܂�ł���A�����Graphics�̑S�Ẵ��\�b�h�ւ̃V���[�g�J�b�g�ł���1�܂���2�����̃��\�b�h�Q�ł��B
 * �����̃��\�b�h�̓R���p�N�g�Ȗ��߂��쐬���邽�߂ɏd�v�ŁAToolkit for CreateJS�ŉǐ��̂���R�[�h�𐶐����邽�߂Ɏg�p����܂��B
 * �S�Ă̒Z�k�Ń��\�b�h��protected�Ƃ��ċL�q����Ă��邽�߁A�h�L�������g���ł�protected�ɂ��Ă̐�����L���ɂ��邱�Ƃŉ{�����邱�Ƃ��ł��܂��B
 *
 * <table>
 *     <tr><td><b>Tiny</b></td><td><b>���\�b�h</b></td><td><b>�Z�k��</b></td><td><b>Method</b></td></tr>
 *     <tr><td>mt</td><td>{{#crossLink "Graphics/moveTo"}}{{/crossLink}} </td>
 *     <td>lt</td> <td>{{#crossLink "Graphics/lineTo"}}{{/crossLink}}</td></tr>
 *     <tr><td>at</td><td>{{#crossLink "Graphics/arcTo"}}{{/crossLink}} </td>
 *     <td>bt</td><td>{{#crossLink "Graphics/bezierCurveTo"}}{{/crossLink}} </td></tr>
 *     <tr><td>qt</td><td>{{#crossLink "Graphics/quadraticCurveTo"}}{{/crossLink}} (also curveTo)</td>
 *     <td>r</td><td>{{#crossLink "Graphics/rect"}}{{/crossLink}} </td></tr>
 *     <tr><td>cp</td><td>{{#crossLink "Graphics/closePath"}}{{/crossLink}} </td>
 *     <td>c</td><td>{{#crossLink "Graphics/clear"}}{{/crossLink}} </td></tr>
 *     <tr><td>f</td><td>{{#crossLink "Graphics/beginFill"}}{{/crossLink}} </td>
 *     <td>lf</td><td>{{#crossLink "Graphics/beginLinearGradientFill"}}{{/crossLink}} </td></tr>
 *     <tr><td>rf</td><td>{{#crossLink "Graphics/beginRadialGradientFill"}}{{/crossLink}} </td>
 *     <td>bf</td><td>{{#crossLink "Graphics/beginBitmapFill"}}{{/crossLink}} </td></tr>
 *     <tr><td>ef</td><td>{{#crossLink "Graphics/endFill"}}{{/crossLink}} </td>
 *     <td>ss</td><td>{{#crossLink "Graphics/setStrokeStyle"}}{{/crossLink}} </td></tr>
 *     <tr><td>s</td><td>{{#crossLink "Graphics/beginStroke"}}{{/crossLink}} </td>
 *     <td>ls</td><td>{{#crossLink "Graphics/beginLinearGradientStroke"}}{{/crossLink}} </td></tr>
 *     <tr><td>rs</td><td>{{#crossLink "Graphics/beginRadialGradientStroke"}}{{/crossLink}} </td>
 *     <td>bs</td><td>{{#crossLink "Graphics/beginBitmapStroke"}}{{/crossLink}} </td></tr>
 *     <tr><td>es</td><td>{{#crossLink "Graphics/endStroke"}}{{/crossLink}} </td>
 *     <td>dr</td><td>{{#crossLink "Graphics/drawRect"}}{{/crossLink}} </td></tr>
 *     <tr><td>rr</td><td>{{#crossLink "Graphics/drawRoundRect"}}{{/crossLink}} </td>
 *     <td>rc</td><td>{{#crossLink "Graphics/drawRoundRectComplex"}}{{/crossLink}} </td></tr>
 *     <tr><td>dc</td><td>{{#crossLink "Graphics/drawCircle"}}{{/crossLink}} </td>
 *     <td>de</td><td>{{#crossLink "Graphics/drawEllipse"}}{{/crossLink}} </td></tr>
 *     <tr><td>dp</td><td>{{#crossLink "Graphics/drawPolyStar"}}{{/crossLink}} </td>
 *     <td>p</td><td>{{#crossLink "Graphics/decodePath"}}{{/crossLink}} </td></tr>
 * </table>
 *
 * �����ł͏�L�̎���Ƃ���, �Z�k��API���p���Ă��܂��B
 *
 *      myGraphics.s("#F00").f("#00F").r(20, 20, 100, 50).draw(myContext2D);
 *
 * @class Graphics
 * @constructor
 * @for Graphics
 **/
var Graphics = function() {
	this.initialize();
};
var p = Graphics.prototype;

// �ÓI�p�u���b�N���\�b�h:
	
	
	/**
	 * �w�肳�ꂽRGB�J���[���l�Ɋ�Â��āA"rgba(255,255,255,1.0)"�`���A
	 * �܂��͓����x��null�̏ꍇ��"rgb(255,255,255)"�̌`���ŁACSS�ƌ݊����̂���F�̕������Ԃ��܂��B�Ⴆ�΁A
	 *
	 *      Graphics.getRGB(50, 100, 150, 0.5);
	 *
	 * ��"rgba(50,100,150,0.5)"��Ԃ��܂��B�܂��A�ŏ��̃p�����[�^�Ƃ��ĒP�̂�16�i���J���[�l�A
	 * 2�Ԗڂ̃p�����[�^�Ƃ��ē����x(�I�v�V����)�̎󂯓n�����T�|�[�g���܂��B�Ⴆ�΁A
	 *
	 *      Graphics.getRGB(0xFF00FF, 0.2);
	 *
	 * ��"rgba(255,0,255,0.2)"��Ԃ��܂��B
	 * @method getRGB
	 * @static
	 * @param {Number} r 0����0xFF(255)�̊Ԃ́A�F�̐Ԑ����B
	 * @param {Number} g 0����0xFF(255)�̊Ԃ́A�F�̗ΐ����B
	 * @param {Number} b 0����0xFF(255)�̊Ԃ́A�F�̐����B
	 * @param {Number} �i�I�v�V�����j 0�����S�ɓ�������A1�����S�ɕs�����̊Ԃ́A�F�̓����x�B
	 * @return {String} �w�肳�ꂽRGB�J���[���l�Ɋ�Â����A"rgba(255,255,255,1.0)"�`���A
	 * �܂��͓����x��null�̏ꍇ��"rgb(255,255,255)"�̌`���ŁACSS�ƌ݊����̂���F�̕�����
	 **/
	Graphics.getRGB = function(r, g, b, alpha) {
		if (r != null && b == null) {
			alpha = g;
			b = r&0xFF;
			g = r>>8&0xFF;
			r = r>>16&0xFF;
		}
		if (alpha == null) {
			return "rgb("+r+","+g+","+b+")";
		} else {
			return "rgba("+r+","+g+","+b+","+alpha+")";
		}
	};
	
	/**
	 * �w�肳�ꂽHSL�J���[���l�Ɋ�Â��āA"hsla(360,100,100,1.0)"�`���A
	 * �܂��͓����x��null�̏ꍇ��"hsl(360,100,100)"�̌`���ŁACSS�ƌ݊����̂���F�̕������Ԃ��܂��B
	 * �Ⴆ�΁A�ȉ��̏ꍇ��"hsl(150,100,70)"��Ԃ��܂��B
	 *
	 *      Graphics.getHSL(150, 100, 70);
	 *
	 * @method getHSL
	 * @static
	 * @param {Number} hue 0����360�܂ł́A�F�̐F���B
	 * @param {Number} saturation 0����100�܂ł́A�F�̍ʓx�B
	 * @param {Number} lightness 0����100�܂ł́A�F�̖��x�B
	 * @param {Number} alpha (�I�v�V����) 0�����S�ɓ�������A1�����S�ɕs�����̊Ԃ́A�F�̓����x�B
	 * @return {String} �w�肳�ꂽHSL�J���[���l�Ɋ�Â����A"hsla(360,100,100,1.0)"�`���A
	 * �܂��͓����x��null�̏ꍇ��"hsl(360,100,100)"�̌`���ŁACSS�ƌ݊����̂���F�̕�����B
	 **/
	Graphics.getHSL = function(hue, saturation, lightness, alpha) {
		if (alpha == null) {
			return "hsl("+(hue%360)+","+saturation+"%,"+lightness+"%)";
		} else {
			return "hsla("+(hue%360)+","+saturation+"%,"+lightness+"%,"+alpha+")";
		}
	};
	
	/**
	 * �l��Base64������ɕϊ����܂��B{{#crossLink "Graphics/decodePath"}}{{/crossLink}}�Ŏg�p����܂��B
	 * @property BASE_64
	 * @static
	 * @final
	 * @type {Object}
	 **/
	Graphics.BASE_64 = {"A":0,"B":1,"C":2,"D":3,"E":4,"F":5,"G":6,"H":7,"I":8,"J":9,"K":10,"L":11,"M":12,"N":13,"O":14,"P":15,"Q":16,"R":17,"S":18,"T":19,"U":20,"V":21,"W":22,"X":23,"Y":24,"Z":25,"a":26,"b":27,"c":28,"d":29,"e":30,"f":31,"g":32,"h":33,"i":34,"j":35,"k":36,"l":37,"m":38,"n":39,"o":40,"p":41,"q":42,"r":43,"s":44,"t":45,"u":46,"v":47,"w":48,"x":49,"y":50,"z":51,"0":52,"1":53,"2":54,"3":55,"4":56,"5":57,"6":58,"7":59,"8":60,"9":61,"+":62,"/":63};
		
	
	/**
	 * {{#crossLink "Graphics/setStrokeStyle"}}{{/crossLink}}�̐��[�p�����[�^��\�����l���A
	 * �Ή����镶����l�ɕϊ����܂��B����͎�ɒZ�k��API�p�ł��B�ϊ��͈ȉ��̂悤�ɂȂ�܂�:
	 * 0 �� "�Ȃ�", 1 �� "�ی^", and 2 �� "�p�^"�B
	 * ��́A���[��"�p�^"�ɐݒ肷��ꍇ�ł��F
	 *
	 *      myGraphics.ss(16, 2);
	 *
	 * @property STROKE_CAPS_MAP
	 * @static
	 * @final
	 * @type {Array}
	 **/
	Graphics.STROKE_CAPS_MAP = ["butt", "round", "square"];
	
	/**
	 * {{#crossLink "Graphics/setStrokeStyle"}}{{/crossLink}}�̌����X�^�C���l��\�����l���A
	 * �Ή����镶����l�ɕϊ����܂��B����͎�ɒZ�k��API�p�ł��B�ϊ��͈ȉ��̂悤�ɂȂ�܂�:
	 * 0 �� "�}�C�^�["�A1 �� "���E���h"�A2 �� "�x�x��"�B
	 * ��́A�����X�^�C����"�x�x��"�ɐݒ肷��ꍇ�ł��F
	 *      myGraphics.ss(16, 0, 2);
	 *
	 * @property STROKE_JOINTS_MAP
	 * @static
	 * @final
	 * @type {Array}
	 **/
	Graphics.STROKE_JOINTS_MAP = ["miter", "round", "bevel"];
	
	/**
	 * @property _ctx
	 * @static
	 * @protected
	 * @type {CanvasRenderingContext2D}
	 **/
	Graphics._ctx = (createjs.createCanvas?createjs.createCanvas():document.createElement("canvas")).getContext("2d");
	
	/**
	 * @property beginCmd
	 * @static
	 * @protected
	 * @type {Command}
	 **/
	Graphics.beginCmd = new Command(Graphics._ctx.beginPath, [], false);
	
	/**
	 * @property fillCmd
	 * @static
	 * @protected
	 * @type {Command}
	 **/
	Graphics.fillCmd = new Command(Graphics._ctx.fill, [], false);
	
	/**
	 * @property strokeCmd
	 * @static
	 * @protected
	 * @type {Command}
	 **/
	Graphics.strokeCmd = new Command(Graphics._ctx.stroke, [], false);
	
// �p�u���b�N�v���p�e�B

// �v���C�x�[�g�v���p�e�B
	/**
	 * @property _strokeInstructions
	 * @protected
	 * @type {Array}
	 **/
	p._strokeInstructions = null;

	/**
	 * @property _strokeStyleInstructions
	 * @protected
	 * @type {Array}
	 **/
	p._strokeStyleInstructions = null;
	
	/**
	 * @property _ignoreScaleStroke
	 * @protected
	 * @type Boolean
	 **/
	p._ignoreScaleStroke = false;
	
	/**
	 * @property _fillInstructions
	 * @protected
	 * @type {Array}
	 **/
	p._fillInstructions = null;
	
	/**
	 * @property _instructions
	 * @protected
	 * @type {Array}
	 **/
	p._instructions = null;
	
	/**
	 * @property _oldInstructions
	 * @protected
	 * @type {Array}
	 **/
	p._oldInstructions = null;
	
	/**
	 * @property _activeInstructions
	 * @protected
	 * @type {Array}
	 **/
	p._activeInstructions = null;
	
	/**
	 * @property _active
	 * @protected
	 * @type {Boolean}
	 * @default false
	 **/
	p._active = false;
	
	/**
	 * @property _dirty
	 * @protected
	 * @type {Boolean}
	 * @default false
	 **/
	p._dirty = false;
	
	/** 
	 * ���������\�b�h
	 * @method initialize
	 * @protected
	 **/
	p.initialize = function() {
		this.clear();
		this._ctx = Graphics._ctx;
	};
	
	/**
	 * Graphics�C���X�^���X���`�施�߂������Ă��Ȃ��ꍇ�Atrue��Ԃ��܂��B
	 * @method isEmpty
	 * @return {Boolean} Graphics�C���X�^���X���`�施�߂������Ă��Ȃ��ꍇ�Atrue��Ԃ��܂��B
	 **/
	p.isEmpty = function() {
		return !(this._instructions.length || this._oldInstructions.length || this._activeInstructions.length);
	};
	
	/**
	 * �w�肳�ꂽ�R���e�L�X�g�ɁA���ꎩ�g�̕\���E��\���A�����x�A�e�A�ό`�͖������āA�\���I�u�W�F�N�g��`�悵�܂��B
	 * �`�悪�������ꂽ�ꍇtrue��Ԃ��܂� (�@�\���I�[�o�[���C�h����̂ɗL�p)�B
	 *
	 * ���ӁF���̃��\�b�h�͎�ɓ����I�ȗp�r�̂��߂̂��̂ł����A���x�ȗ��p���@�ɂ��L�p��������܂���B
	 * @method draw
	 * @param {CanvasRenderingContext2D} ctx �`�悷��Ώۂ́Acanvas2D�R���e�N�X�g�I�u�W�F�N�g�B
	 **/
	p.draw = function(ctx) {
		if (this._dirty) { this._updateInstructions(); }
		var instr = this._instructions;
		for (var i=0, l=instr.length; i<l; i++) {
			instr[i].exec(ctx);
		}
	};
	
	/**
	 * Graphics�C���X�^���X�ɑ΂��Đ��̕`��݂̂��s���A�h���X�g���[�N���܂ސ��ȊO�̖��߂��X�L�b�v���܂��B
	 * �Ⴆ�΁ADisplayObject.clippingPath�ɂ����āA�N���b�s���O�p�X��`�悷�邽�߂Ɏg�p����܂��B
	 * @method drawAsPath
	 * @param {CanvasRenderingContext2D} ctx �`�悷��Ώۂ́Acanvas2D�R���e�N�X�g�I�u�W�F�N�g�B
	 **/
	p.drawAsPath = function(ctx) {
		if (this._dirty) { this._updateInstructions(); }
		var instr, instrs = this._instructions;
		for (var i=0, l=instrs.length; i<l; i++) {
			// the first command is always a beginPath command.
			if ((instr = instrs[i]).path || i==0) { instr.exec(ctx); }
		}
	};
	
// context2D���߂ɒ��ڑΉ�����p�u���b�N���\�b�h:
	/**
	 * �w�肵�����W�ɕ`��_���ړ����܂��B
	 * @method moveTo
	 * @param {Number} x �`��_�̈ړ����x���W�B
	 * @param {Number} y �`��_�̈ړ����y���W�B
	 * @return {Graphics} ���\�b�h���Ăяo���ꂽGraphics�C���X�^���X�i�A�������Ăяo���ɗL�p�j�B
	 **/
	p.moveTo = function(x, y) {
		this._activeInstructions.push(new Command(this._ctx.moveTo, [x, y]));
		return this;
	};
	
	/**
	 * ���݂̕`��ʒu����w�肵�����W�ɑ΂��Đ���`�悵�܂��B�w�肵�����W�́A�V�������݂̕`��ʒu�ɂȂ�܂��B
	 *
	 * ���ڂ�������
	 * <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas-element.html#complex-shapes-(paths)">
	 * whatwg spec</a>
	 * ���Q�Ƃ��Ă��������B
	 * @method lineTo
	 * @param {Number} x ����`�悷���ƂȂ�`��_��x���W�B
	 * @param {Number} y ����`�悷���ƂȂ�`��_��y���W�B
	 * @return {Graphics} ���\�b�h���Ăяo���ꂽGraphics�C���X�^���X�i�A�������Ăяo���ɗL�p�j�B
	 **/
	p.lineTo = function(x, y) {
		this._dirty = this._active = true;
		this._activeInstructions.push(new Command(this._ctx.lineTo, [x, y]));
		return this;
	};
	
	/**
	 * �w�肵������_�Ɣ��a�ŉ~�ʂ�`�悵�܂��B�ڍׂȏ��́A
	 * <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas-element.html#dom-context-2d-arcto">
	 * ���Q�Ƃ��Ă��������B
	 * whatwg spec</a>.
	 * @method arcTo
	 * @param {Number} x1
	 * @param {Number} y1
	 * @param {Number} x2
	 * @param {Number} y2
	 * @param {Number} radius
	 * @return {Graphics} ���\�b�h���Ăяo���ꂽGraphics�C���X�^���X�i�A�������Ăяo���ɗL�p�j�B
	 **/
	p.arcTo = function(x1, y1, x2, y2, radius) {
		this._dirty = this._active = true;
		this._activeInstructions.push(new Command(this._ctx.arcTo, [x1, y1, x2, y2, radius]));
		return this;
	};
	
	/**
	 * ���a�A�n�_�̊p�x�A�I�_�̊p�x�A���S�X�̍��W(x, y)�����`�����~�ʂ�`�悵�܂��B
	 * �ȉ��̗�ł́A���a20�Œ��S�_��(100, 100)�̊��S�ȉ~��`�悵�܂�:
	 *
	 *      arc(100, 100, 20, 0, Math.PI*2);
	 *
	 * �ڍׂȏ��́A
	 * <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas-element.html#dom-context-2d-arc">whatwg spec</a>.
	 * ���Q�Ƃ��Ă��������B
	 * @method arc
	 * @param {Number} x
	 * @param {Number} y
	 * @param {Number} radius
	 * @param {Number} ���W�A���P�ʂɂ��n�_�̊p�x�B
	 * @param {Number} ���W�A���P�ʂɂ��I�_�̊p�x�B
	 * @param {Boolean} anticlockwise
	 * @return {Graphics} ���\�b�h���Ăяo���ꂽGraphics�C���X�^���X�i�A�������Ăяo���ɗL�p�j�B
	 **/
	p.arc = function(x, y, radius, startAngle, endAngle, anticlockwise) {
		this._dirty = this._active = true;
		if (anticlockwise == null) { anticlockwise = false; }
		this._activeInstructions.push(new Command(this._ctx.arc, [x, y, radius, startAngle, endAngle, anticlockwise]));
		return this;
	};
	
	/**
	 * ����_(cpx, cpy)���g�p���āA���݂̕`��ʒu����񎟋Ȑ�(x, y)��`�悵�܂��B
	 * �ڍׂȏ��́A
	 * <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas-element.html#dom-context-2d-quadraticcurveto">
	 * whatwg spec</a>
	 * ���Q�Ƃ��Ă��������B
	 * @method quadraticCurveTo
	 * @param {Number} cpx
	 * @param {Number} cpy
	 * @param {Number} x
	 * @param {Number} y
	 * @return {Graphics} ���\�b�h���Ăяo���ꂽGraphics�C���X�^���X�i�A�������Ăяo���ɗL�p�j�B
	 **/
	p.quadraticCurveTo = function(cpx, cpy, x, y) {
		this._dirty = this._active = true;
		this._activeInstructions.push(new Command(this._ctx.quadraticCurveTo, [cpx, cpy, x, y]));
		return this;
	};
	
	/**
	 * ����_�icp1x�Acp1y�j�Ɓicp2x�Acp2y�j���g�p���āA���݂̕`��ʒu����ix�Ay�j�Ƀx�W�G�Ȑ���`�悵�܂��B
	 * �ڍׂȏ��́A
	 * <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas-element.html#dom-context-2d-beziercurveto">
	 * whatwg spec</a>
	 * ���Q�Ƃ��Ă��������B
	 * @method bezierCurveTo
	 * @param {Number} cp1x
	 * @param {Number} cp1y
	 * @param {Number} cp2x
	 * @param {Number} cp2y
	 * @param {Number} x
	 * @param {Number} y
	 * @return {Graphics} ���\�b�h���Ăяo���ꂽGraphics�C���X�^���X�i�A�������Ăяo���ɗL�p�j�B
	 **/
	p.bezierCurveTo = function(cp1x, cp1y, cp2x, cp2y, x, y) {
		this._dirty = this._active = true;
		this._activeInstructions.push(new Command(this._ctx.bezierCurveTo, [cp1x, cp1y, cp2x, cp2y, x, y]));
		return this;
	};
	
	/**
	 * ���݂̓h��ƃX�g���[�N���g�p���āA�w�肳�ꂽ���ƍ����Łix�Ay�j�̈ʒu�Ɏl�p�`��`�悵�܂��B
	 * �ڍׂȏ��́A
	 * <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas-element.html#dom-context-2d-rect">
	 * whatwg spec</a>
	 * ���Q�Ƃ��Ă��������B
	 * @method rect
	 * @param {Number} x
	 * @param {Number} y
	 * @param {Number} w �l�p�`�̕�
	 * @param {Number} h �l�p�`�̍���
	 * @return {Graphics} ���\�b�h���Ăяo���ꂽGraphics�C���X�^���X�i�A�������Ăяo���ɗL�p�j�B
	 **/
	p.rect = function(x, y, w, h) {
		this._dirty = this._active = true;
		this._activeInstructions.push(new Command(this._ctx.rect, [x, y, w, h]));
		return this;
	};
	
	/**
	 * �Ō�ɐݒ肳�ꂽ�h��܂��̓X�g���[�N���g�p���āA
	 * ���݂̕`��|�C���g����ŏ��̕`��|�C���g�ɗL���Ȑ��������A���݂̃p�X����܂��B
	 * @method closePath
	 * @return {Graphics} ���\�b�h���Ăяo���ꂽGraphics�C���X�^���X�i�A�������Ăяo���ɗL�p�j�B
	 **/
	p.closePath = function() {
		if (this._active) {
			this._dirty = true;
			this._activeInstructions.push(new Command(this._ctx.closePath, []));
		}
		return this;
	};
	
	
//  Flash graphics API�ɑ�܂��ɑΉ�����p�u���b�N���\�b�h:
	/**
	 * ���ׂĂ̕`�施�߂��������āAGraphics�C���X�^���X�����ʓI�Ƀ��Z�b�g���܂��B
	 * @method clear
	 * @return {Graphics} ���\�b�h���Ăяo���ꂽGraphics�C���X�^���X�i�A�������Ăяo���ɗL�p�j�B
	 **/
	p.clear = function() {
		this._instructions = [];
		this._oldInstructions = [];
		this._activeInstructions = [];
		this._strokeStyleInstructions = this._strokeInstructions = this._fillInstructions = null;
		this._active = this._dirty = false;
		return this;
	};
	
	/**
	 * �w�肵���F�œh��Ԃ����J�n���܂��B���̃��\�b�h�͌��݂̃T�u�p�X���I�����܂��B
	 * @method beginFill
	 * @param {String} color CSS�݊����̂���F�̒l�i��F"red"�A "��FF0000"�A�܂��� "RGBA(255,0,0,0.5)"�j�B
	 * null�ɐݒ肷��ƁA�h��Ȃ��ɂȂ�܂��B
	 * @return {Graphics} ���\�b�h���Ăяo���ꂽGraphics�C���X�^���X�i�A�������Ăяo���ɗL�p�j�B
	 **/
	p.beginFill = function(color) {
		if (this._active) { this._newPath(); }
		this._fillInstructions = color ? [new Command(this._setProp, ["fillStyle", color], false), Graphics.fillCmd] : null;
		return this;
	};
	
	/**
	 * (x0, y0)����(x1, y1)�̐��Œ�`���ꂽ�A���`�O���f�[�V�����̓h����J�n���܂��B���̃��\�b�h�͌��݂̃T�u�p�X���I�����܂��B
	 * �Ⴆ�Ύ��̃R�[�h�ł́A20px����120�s�N�Z���܂ł͈̔͂ō����甒�ցA���������̃O���f�[�V�������`���āA�����K�p�����l�p�`��`�悵�܂�:
	 *
	 *      myGraphics.beginLinearGradientFill(["#000","#FFF"], [0, 1], 0, 20, 0, 120).drawRect(20, 20, 120, 120);
	 *
	 * @method beginLinearGradientFill
	 * @param {Array} colors CSS�݊����̂���J���[�l�̔z��B�Ⴆ��["#F00", "#00F"]�́A�Ԃ���ւ̃O���f�[�V�����`����`���܂��B
	 * @param {Array} ratios �F�ɑΉ�����O���f�[�V�����|�C���g�̔z��B�Ⴆ�΁A[0.1, 0.9]�͍ŏ��̐F��10%�A2�Ԗڂ̐F��90%�ɂȂ�悤�⊮���܂��B
	 * @param {Number} x0 �O���f�[�V���������Ƒ傫�����`������́A�ŏ��̓_�̈ʒu�B
	 * @param {Number} y0 �O���f�[�V���������Ƒ傫�����`������́A�ŏ��̓_�̈ʒu�B
	 * @param {Number} x1 �O���f�[�V���������Ƒ傫�����`������́A��Ԗڂ̓_�̈ʒu�B
	 * @param {Number} y1 �O���f�[�V���������Ƒ傫�����`������́A��Ԗڂ̓_�̈ʒu�B
	 * @return {Graphics} ���\�b�h���Ăяo���ꂽGraphics�C���X�^���X�i�A�������Ăяo���ɗL�p�j�B
	 **/
	p.beginLinearGradientFill = function(colors, ratios, x0, y0, x1, y1) {
		if (this._active) { this._newPath(); }
		var o = this._ctx.createLinearGradient(x0, y0, x1, y1);
		for (var i=0, l=colors.length; i<l; i++) {
			o.addColorStop(ratios[i], colors[i]);
		}
		this._fillInstructions = [new Command(this._setProp, ["fillStyle", o], false), Graphics.fillCmd];
		return this;
	};
	
	/**
	 * ���ˏ�O���f�[�V�����̓h����J�n���܂��B���̃��\�b�h�́A���݂̃T�u�p�X���I�����܂��B
	 * �Ⴆ�Ύ��̃R�[�h�́A50�̔��a�ƁA���S�_��(100, 100)�ŐԂ���ւ̕��ˏ�O���f�[�V�������`���A�����K�p�����~��`�悵�܂�:
	 *
	 *      myGraphics.beginRadialGradientFill(["#F00","#00F"], [0, 1], 100, 100, 0, 100, 100, 50).drawCircle(100, 100, 50);
	 *
	 * @method beginRadialGradientFill
	 * @param {Array} colors CSS�݊����̂���J���[�l�̔z��B�Ⴆ��["#F00", "#00F"]�́A�Ԃ���ւ̃O���f�[�V�����`����`���܂��B
	 * @param {Array} ratios �F�ɑΉ�����O���f�[�V�����|�C���g�̔z��B�Ⴆ�΁A[0.1, 0.9]�͍ŏ��̐F��10%�A2�Ԗڂ̐F��90%�ɂȂ�悤�⊮���܂��B
	 * @param {Number} x0 �O���f�[�V�������`��������̉~�̒��S�_�B
	 * @param {Number} y0 �O���f�[�V�������`��������̉~�̒��S�_�B
	 * @param {Number} r0 �O���f�[�V�������`��������̉~�̔��a�B
	 * @param {Number} x1 �O���f�[�V�������`����O���̉~�̒��S�_�B
	 * @param {Number} y1 �O���f�[�V�������`����O���̉~�̒��S�_�B
	 * @param {Number} r1 �O���f�[�V�������`����O���̉~�̔��a�B
	 * @return {Graphics} ���\�b�h���Ăяo���ꂽGraphics�C���X�^���X�i�A�������Ăяo���ɗL�p�j�B
	 **/
	p.beginRadialGradientFill = function(colors, ratios, x0, y0, r0, x1, y1, r1) {
		if (this._active) { this._newPath(); }
		var o = this._ctx.createRadialGradient(x0, y0, r0, x1, y1, r1);
		for (var i=0, l=colors.length; i<l; i++) {
			o.addColorStop(ratios[i], colors[i]);
		}
		this._fillInstructions = [new Command(this._setProp, ["fillStyle", o], false), Graphics.fillCmd];
		return this;
	};
	
	/**
�@	 * �w�肳�ꂽ�摜���g�p�����A�p�^�[���̓h��Ԃ����J�n���܂��B���̃��\�b�h�́A���݂̃T�u�p�X���I�����܂��B
	 * @method beginBitmapFill
	 * @param {HTMLImageElement | HTMLCanvasElement | HTMLVideoElement} image �p�^�[���Ɏg�p����AImage�ACanvas�A�܂���Video�I�u�W�F�N�g�B
	 * @param {String} repetition (�I�v�V����) �h��Ԃ��̈���ŁA�摜���J��Ԃ����ǂ����������܂��B"repeat"�A"repeat-x"�A"repeat-y"�A
	 * �܂���"no-repeat"�̂�����ł��B�f�t�H���g�l��"repeat"�ł��B
	 * @param {Matrix2D} matrix (�I�v�V����) �r�b�g�}�b�v�̓h��̂��߂̕ϊ��s����w�肵�܂��B���̕ϊ��́A�e�̕ϊ��ɑ΂��đ��ΓI�ɓK�p����܂��B
	 * @return {Graphics} ���\�b�h���Ăяo���ꂽGraphics�C���X�^���X�i�A�������Ăяo���ɗL�p�j�B
	 **/
	p.beginBitmapFill = function(image, repetition, matrix) {
		if (this._active) { this._newPath(); }
		repetition = repetition || "";
		var o = this._ctx.createPattern(image, repetition);
		var cmd = new Command(this._setProp, ["fillStyle", o], false);
		var arr;
		if (matrix) {
			arr = [
				cmd,
				new Command(this._ctx.save, [], false),
				new Command(this._ctx.transform, [matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty], false),
				Graphics.fillCmd,
				new Command(this._ctx.restore, [], false)
			];
		} else {
			arr = [cmd, Graphics.fillCmd];
		}
		this._fillInstructions = arr;
		return this;
	};
	
	/**
	 * ���݂̃T�u�p�X���I�����A�h��Ȃ��ŐV�K�ɊJ�n���܂��B�@�\�I��<code>beginFill(null)</code>�Ɠ����ł��B
	 * @method endFill
	 * @return {Graphics} ���\�b�h���Ăяo���ꂽGraphics�C���X�^���X�i�A�������Ăяo���ɗL�p�j�B
	 **/
	p.endFill = function() {
		return this.beginFill();
	};
	
	/**
	 * ���݂̃T�u�p�X�̃X�g���[�N�X�^�C����ݒ肵�܂��B���ׂĂ̕`�惁�\�b�h�Ɠ��l�ɁA���̃��\�b�h�͘A�����邱�Ƃ��ł���̂ŁA
	 * �ȉ��̂悤�Ɉ�s�̃R�[�h�ŃX�g���[�N�X�^�C���ƐF���`���邱�Ƃ��ł��܂��B
	 *
	 *      myGraphics.setStrokeStyle(8,"round").beginStroke("#F00");
	 *
	 * @method setStrokeStyle
	 * @param {Number} thickness �X�g���[�N�̕�
	 * @param {String | Number} [caps=0] ���[�̎�ނ������܂��B"butt"(�Ȃ�)�A"round"(�ی^)�A"square"(�p�^)�̂�����ł��B�f�t�H���g�l��"butt"�ł��B
	 * �Z�k��API�ł�0(�Ȃ�)�A1(�ی^)�A2(�p�^)�̐��l�ł��w��ł��܂��B
	 * @param {String | Number} [joints=0] 2�{�̐������������ꍇ�Ɏg�p�����A�����^�C�v���w�肵�܂��B
	 * "bevel"(�x�x��)�A"round"(���E���h)�A"miter"(�}�C�^�[)�̂�����ł��B�f�t�H���g�l��"�}�C�^�["�ł��B
	 * �Z�k��API�ł�0(�}�C�^�[)�A1(���E���h)�A2(�x�x��)�̐��l�ł��w��ł��܂��B
	 * @param {Number} [miterLimit=10] �����^�C�v��"miter"�ɐݒ肳��Ă���ꍇ�A�}�C�^�[�̂������l���w�肵�āA
	 * �ǂ̈ʒu�Ń}�C�^�[�̌����������N���b�v����邩�𐧌䂷�邱�Ƃ��ł��܂��B
	 * @param {Boolean} [ignoreScale=false] true�̏ꍇ�A���ݗL���ȕϊ��Ɋ֌W�Ȃ��A�w�肵�������ŃX�g���[�N���`�悳��܂��B
	 * @return {Graphics} ���\�b�h���Ăяo���ꂽGraphics�C���X�^���X�i�A�������Ăяo���ɗL�p�j�B
	 **/
	p.setStrokeStyle = function(thickness, caps, joints, miterLimit, ignoreScale) {
		if (this._active) { this._newPath(); }
		this._strokeStyleInstructions = [
			new Command(this._setProp, ["lineWidth", (thickness == null ? "1" : thickness)], false),
			new Command(this._setProp, ["lineCap", (caps == null ? "butt" : (isNaN(caps) ? caps : Graphics.STROKE_CAPS_MAP[caps]))], false),
			new Command(this._setProp, ["lineJoin", (joints == null ? "miter" : (isNaN(joints) ? joints : Graphics.STROKE_JOINTS_MAP[joints]))], false),
			new Command(this._setProp, ["miterLimit", (miterLimit == null ? "10" : miterLimit)], false)
			];
		this._ignoreScaleStroke = ignoreScale;
		return this;
	};
	
	/**
	 * �w�肵���F�ŃX�g���[�N���J�n���܂��B���̃��\�b�h�́A���݂̃T�u�p�X���I�����܂��B
	 * @method beginStroke
	 * @param {String} color CSS�݊����̂���F�̒l�i��F"��FF0000"�A"red"�A �܂��� "RGBA(255,0,0,0.5)"�j�B
	 * null�ɐݒ肷��ƁA�X�g���[�N�Ȃ��ɂȂ�܂��B
	 * @return {Graphics} ���\�b�h���Ăяo���ꂽGraphics�C���X�^���X�i�A�������Ăяo���ɗL�p�j�B
	 **/
	p.beginStroke = function(color) {
		if (this._active) { this._newPath(); }
		this._strokeInstructions = color ? [new Command(this._setProp, ["strokeStyle", color], false)] : null;
		return this;
	};
	
	/**
	 * (x0, y0)����(x1, y1)�̐��Œ�`���ꂽ�A���`�O���f�[�V�����̃X�g���[�N���J�n���܂��B���̃��\�b�h�͌��݂̃T�u�p�X���I�����܂��B
	 * �Ⴆ�Ύ��̃R�[�h�ł́A20px����120�s�N�Z���܂ł͈̔͂ō����甒�ցA���������̃O���f�[�V�������`���āA�����K�p�����l�p�`��`�悵�܂�:
	 *
	 *      myGraphics.setStrokeStyle(10).beginLinearGradientStroke(["#000","#FFF"], [0, 1], 0, 20, 0, 120).drawRect(20, 20, 120, 120);
	 *
	 * @method beginLinearGradientStroke
	 * @param {Array} colors CSS�݊����̂���J���[�l�̔z��B�Ⴆ��["#F00", "#00F"]�́A�Ԃ���ւ̃O���f�[�V�����`����`���܂��B
	 * @param {Array} ratios �F�ɑΉ�����O���f�[�V�����|�C���g�̔z��B�Ⴆ�΁A[0.1, 0.9]�͍ŏ��̐F��10%�A2�Ԗڂ̐F��90%�ɂȂ�悤�⊮���܂��B
	 * @param {Number} x0 �O���f�[�V���������Ƒ傫�����`������́A�ŏ��̓_�̈ʒu�B
	 * @param {Number} y0 �O���f�[�V���������Ƒ傫�����`������́A�ŏ��̓_�̈ʒu�B
	 * @param {Number} x1 �O���f�[�V���������Ƒ傫�����`������́A��Ԗڂ̓_�̈ʒu�B
	 * @param {Number} y1 �O���f�[�V���������Ƒ傫�����`������́A��Ԗڂ̓_�̈ʒu�B
	 * @return {Graphics} ���\�b�h���Ăяo���ꂽGraphics�C���X�^���X�i�A�������Ăяo���ɗL�p�j�B
	 **/
	p.beginLinearGradientStroke = function(colors, ratios, x0, y0, x1, y1) {
		if (this._active) { this._newPath(); }
		var o = this._ctx.createLinearGradient(x0, y0, x1, y1);
		for (var i=0, l=colors.length; i<l; i++) {
			o.addColorStop(ratios[i], colors[i]);
		}
		this._strokeInstructions = [new Command(this._setProp, ["strokeStyle", o], false)];
		return this;
	};

	
	/**
	 * ���ˏ�O���f�[�V�����̃X�g���[�N���J�n���܂��B���̃��\�b�h�́A���݂̃T�u�p�X���I�����܂��B
	 * �Ⴆ�Ύ��̃R�[�h�́A50�̔��a�ƁA���S�_��(100, 100)�ŐԂ���ւ̕��ˏ�O���f�[�V�������`���A�����K�p�����~��`�悵�܂�:
	 *
	 *      myGraphics.setStrokeStyle(10)
	 *          .beginRadialGradientStroke(["#F00","#00F"], [0, 1], 100, 100, 0, 100, 100, 50)
	 *          .drawRect(50, 90, 150, 110);
	 *
	 * @method beginRadialGradientStroke
	 * @param {Array} colors CSS�݊����̂���J���[�l�̔z��B�Ⴆ��["#F00", "#00F"]�́A�Ԃ���ւ̃O���f�[�V�����`����`���܂��B
	 * @param {Array} ratios �F�ɑΉ�����O���f�[�V�����|�C���g�̔z��B�Ⴆ�΁A[0.1, 0.9]�͍ŏ��̐F��10%�A2�Ԗڂ̐F��90%�ɂȂ�悤�⊮���܂��B
	 * @param {Number} x0 �O���f�[�V�������`��������̉~�̒��S�_�B
	 * @param {Number} y0 �O���f�[�V�������`��������̉~�̒��S�_�B
	 * @param {Number} r0 �O���f�[�V�������`��������̉~�̔��a�B
	 * @param {Number} x1 �O���f�[�V�������`����O���̉~�̒��S�_�B
	 * @param {Number} y1 �O���f�[�V�������`����O���̉~�̒��S�_�B
	 * @param {Number} r1 �O���f�[�V�������`����O���̉~�̔��a�B
	 * @return {Graphics} ���\�b�h���Ăяo���ꂽGraphics�C���X�^���X�i�A�������Ăяo���ɗL�p�j�B
	 **/
	p.beginRadialGradientStroke = function(colors, ratios, x0, y0, r0, x1, y1, r1) {
		if (this._active) { this._newPath(); }
		var o = this._ctx.createRadialGradient(x0, y0, r0, x1, y1, r1);
		for (var i=0, l=colors.length; i<l; i++) {
			o.addColorStop(ratios[i], colors[i]);
		}
		this._strokeInstructions = [new Command(this._setProp, ["strokeStyle", o], false)];
		return this;
	};
	
	/**
	 * �w�肵���摜���g�p�����A�p�^�[���̃X�g���[�N���J�n���܂��B���̃��\�b�h�͌��݂̃T�u�p�X���I�����܂��B�r�b�g�}�b�v�̓h��ƈႢ�A���݂̃L�����o�XAPI�̐����̂��߁A
	 * �X�g���[�N��matrix�p�����[�^���T�|�[�g���Ă��Ȃ����Ƃɒ��ӂ��Ă��������B
	 * @method beginBitmapStroke
	 * @param {HTMLImageElement | HTMLCanvasElement | HTMLVideoElement} image �p�^�[���Ɏg�p����AImage�ACanvas�A�܂���Video�I�u�W�F�N�g�B
	 * @param {String} [repetition=repeat] (�I�v�V����) �h��Ԃ��̈���ŁA�摜���J��Ԃ����ǂ����������܂��B"repeat"�A"repeat-x"�A"repeat-y"�A
	 * �܂���"no-repeat"�̂�����ł��B�f�t�H���g�l��"repeat"�ł��B
	 * @return {Graphics} ���\�b�h���Ăяo���ꂽGraphics�C���X�^���X�i�A�������Ăяo���ɗL�p�j�B
	 **/
	p.beginBitmapStroke = function(image, repetition) {
		if (this._active) { this._newPath(); }
		repetition = repetition || "";
		var o = this._ctx.createPattern(image, repetition);
		this._strokeInstructions = [new Command(this._setProp, ["strokeStyle", o], false)];
		return this;
	};

	/**
	 * ���݂̃T�u�p�X���I�����A�X�g���[�N�Ȃ��ŐV�K�ɊJ�n���܂��B�@�\�I��<code>beginStroke(null)</code>�Ɠ����ł��B
	 * @method endStroke
	 * @return {Graphics} ���\�b�h���Ăяo���ꂽGraphics�C���X�^���X�i�A�������Ăяo���ɗL�p�j�B
	 **/
	p.endStroke = function() {
		this.beginStroke();
		return this;
	};
	
	/**
	 * ����e����ActionScript��<code>curveTo()</code>���\�b�h�ɑΉ����܂��B�@�\�I�ɂ�{{#crossLink "Graphics/quadraticCurveTo"}}{{/crossLink}}�Ɠ����ł��B
	 * method.
	 * @method curveTo
	 * @type {Function}
	 **/
	p.curveTo = p.quadraticCurveTo;
	
	/**
	 * ����e����ActionScript��<code>drawRect()</code>���\�b�h�ɑΉ����܂��B�@�\�I�ɂ�{{#crossLink "Graphics/rect"}}{{/crossLink}}�Ɠ����ł��B
	 * method.
	 * @method drawRect
	 * @type {Function}
	 **/
	p.drawRect = p.rect;
	
	/**
	 * �S�Ă̊p���w�肳�ꂽ���a�Ŋۂ߂��A�p�ۂ̎l�p�`��`�悵�܂��B
	 * @method drawRoundRect
	 * @param {Number} x
	 * @param {Number} y
	 * @param {Number} w
	 * @param {Number} h
	 * @param {Number} radius �p�ۂ̔��a�B
	 * @return {Graphics} ���\�b�h���Ăяo���ꂽGraphics�C���X�^���X�i�A�������Ăяo���ɗL�p�j�B
	 **/
	p.drawRoundRect = function(x, y, w, h, radius) {
		this.drawRoundRectComplex(x, y, w, h, radius, radius, radius, radius);
		return this;
	};
	
	/**
	 * ���ꂼ��̊p���ʂ̔��a�Ŋۂ߂��A�p�ۂ̎l�p�`��`�悵�܂��B�p�ۂ̔��a�͐����̒l�ɑΉ����܂��B
	 * @method drawRoundRectComplex
	 * @param {Number} x
	 * @param {Number} y
	 * @param {Number} w
	 * @param {Number} h
	 * @param {Number} radiusTL ����̊p�ۂ̔��a�B
	 * @param {Number} radiusTR �E��̊p�ۂ̔��a�B
	 * @param {Number} radiusBR �E���̊p�ۂ̔��a�B
	 * @param {Number} radiusBL �����̊p�ۂ̔��a�B
	 * @return {Graphics} ���\�b�h���Ăяo���ꂽGraphics�C���X�^���X�i�A�������Ăяo���ɗL�p�j�B
	 **/
	p.drawRoundRectComplex = function(x, y, w, h, radiusTL, radiusTR, radiusBR, radiusBL) {
		var max = (w<h?w:h)/2;
		var mTL=0, mTR=0, mBR=0, mBL=0;
		if (radiusTL < 0) { radiusTL *= (mTL=-1); }
		if (radiusTL > max) { radiusTL = max; }
		if (radiusTR < 0) { radiusTR *= (mTR=-1); }
		if (radiusTR > max) { radiusTR = max; }
		if (radiusBR < 0) { radiusBR *= (mBR=-1); }
		if (radiusBR > max) { radiusBR = max; }
		if (radiusBL < 0) { radiusBL *= (mBL=-1); }
		if (radiusBL > max) { radiusBL = max; }
		
		this._dirty = this._active = true;
		var arcTo=this._ctx.arcTo, lineTo=this._ctx.lineTo;
		this._activeInstructions.push(
			new Command(this._ctx.moveTo, [x+w-radiusTR, y]),
			new Command(arcTo, [x+w+radiusTR*mTR, y-radiusTR*mTR, x+w, y+radiusTR, radiusTR]),
			new Command(lineTo, [x+w, y+h-radiusBR]),
			new Command(arcTo, [x+w+radiusBR*mBR, y+h+radiusBR*mBR, x+w-radiusBR, y+h, radiusBR]),
			new Command(lineTo, [x+radiusBL, y+h]),
			new Command(arcTo, [x-radiusBL*mBL, y+h+radiusBL*mBL, x, y+h-radiusBL, radiusBL]),
			new Command(lineTo, [x, y+radiusTL]),
			new Command(arcTo, [x-radiusTL*mTL, y-radiusTL*mTL, x+radiusTL, y, radiusTL]),
			new Command(this._ctx.closePath)
		);
		return this;
	};
	
	/**
	 * �w�肳�ꂽ���a�Ɓix�Ay�j�ɂ��~��`�悵�܂��B
	 *
	 *      var g = new Graphics();
	 *	    g.setStrokeStyle(1);
	 *	    g.beginStroke(Graphics.getRGB(0,0,0));
	 *	    g.beginFill(Graphics.getRGB(255,0,0));
	 *	    g.drawCircle(0,0,3);
	 *
	 *	    var s = new Shape(g);
	 *		s.x = 100;
	 *		s.y = 100;
	 *
	 *	    stage.addChild(s);
	 *	    stage.update();
	 *
	 * @method drawCircle
	 * @param {Number} x �~�̒��S�_��x���W
	 * @param {Number} y �~�̒��S�_��y���W
	 * @param {Number} �~�̔��a
	 * @return {Graphics} ���\�b�h���Ăяo���ꂽGraphics�C���X�^���X�i�A�������Ăяo���ɗL�p�j�B
	 **/
	p.drawCircle = function(x, y, radius) {
		this.arc(x, y, radius, 0, Math.PI*2);
		return this;
	};
	
	/**
	 * �w�肳�ꂽ��(w)�ƍ���(h)�őȉ~�i�I�[�o���j�`�悵�܂��B
	 * ���ƍ������قȂ�l�ɂł��邱�Ƃ������A{{#crossLink "Graphics/drawCircle"}}{{/crossLink}}�Ɠ����ł��B
	 * @method drawEllipse
	 * @param {Number} x �ȉ~�̒��S�_��x���W
	 * @param {Number} y �ȉ~�̒��S�_��y���W
	 * @param {Number} w �ȉ~�̕��i���������̒��a�j�B���������̔��a�́A���̐��l�̔����ɂȂ�܂��B
	 * @param {Number} h �ȉ~�̍����i���������̒��a�j�B���������̔��a�́A���̐��l�̔����ɂȂ�܂��B
	 * @return {Graphics} ���\�b�h���Ăяo���ꂽGraphics�C���X�^���X�i�A�������Ăяo���ɗL�p�j�B
	 **/
	p.drawEllipse = function(x, y, w, h) {
		this._dirty = this._active = true;
		var k = 0.5522848;
		var ox = (w / 2) * k;
		var oy = (h / 2) * k;
		var xe = x + w;
		var ye = y + h;
		var xm = x + w / 2;
		var ym = y + h / 2;
			
		this._activeInstructions.push(
			new Command(this._ctx.moveTo, [x, ym]),
			new Command(this._ctx.bezierCurveTo, [x, ym-oy, xm-ox, y, xm, y]),
			new Command(this._ctx.bezierCurveTo, [xm+ox, y, xe, ym-oy, xe, ym]),
			new Command(this._ctx.bezierCurveTo, [xe, ym+oy, xm+ox, ye, xm, ye]),
			new Command(this._ctx.bezierCurveTo, [xm-ox, ye, x, ym+oy, x, ym])
		);
		return this;
	};
	
	/**
	 * �|�C���g�T�C�Y��0���傫���ꍇ�͐��^�A�܂��̓|�C���g�T�C�Y��0�ł���ꍇ�͎w�肵�����_���̐����p�`��`�悵�܂��B
	 * �Ⴆ�΁A���̃R�[�h�ł͒��S��100�A100�A���a��50�́A����e���񂾌�䊐��̃V�F�C�v��`�悵�܂��F
	 *      myGraphics.beginFill("#FF0").drawPolyStar(100, 100, 50, 5, 0.6, -90);
	 *      // ����: -90�ł͍ŏ��̓_�������ɂȂ�܂�
	 *
	 * @method drawPolyStar
	 * @param {Number} �V�F�C�v�̒��S��x���W�B
	 * @param {Number} �V�F�C�v�̒��S��y���W�B
	 * @param {Number} radius �V�F�C�v�̊O���a�B
	 * @param {Number} sides ���A�܂��͑��p�`�̑��ʂɂ���_�̐��B
	 * @param {Number} pointSize ���̊e�_�̐���i�J�j�̐[���BpointSize��0�̏ꍇ�A�����p�`���`�悳��܂�(�J���Ȃ�), pointSize��1�̏ꍇ�A�����ɐ���Ă��邱�ƂɂȂ邽�߁A�Ȃɂ��`�悳��܂���B
	 * @param {Number} angle �ŏ��̓_/�R�[�i�[�̊p�x�B �Ⴆ��0�̏ꍇ�́A�����̉E���ɂ���ŏ��̓_�����ڕ`�悳��܂��B
	 * @return {Graphics} ���\�b�h���Ăяo���ꂽGraphic�C���X�^���X (�A�������Ăяo���ɗL�p)�B
	 **/
	p.drawPolyStar = function(x, y, radius, sides, pointSize, angle) {
		this._dirty = this._active = true;
		if (pointSize == null) { pointSize = 0; }
		pointSize = 1-pointSize;
		if (angle == null) { angle = 0; }
		else { angle /= 180/Math.PI; }
		var a = Math.PI/sides;
		
		this._activeInstructions.push(new Command(this._ctx.moveTo, [x+Math.cos(angle)*radius, y+Math.sin(angle)*radius]));
		for (var i=0; i<sides; i++) {
			angle += a;
			if (pointSize != 1) {
				this._activeInstructions.push(new Command(this._ctx.lineTo, [x+Math.cos(angle)*radius*pointSize, y+Math.sin(angle)*radius*pointSize]));
			}
			angle += a;
			this._activeInstructions.push(new Command(this._ctx.lineTo, [x+Math.cos(angle)*radius, y+Math.sin(angle)*radius]));
		}
		return this;
	};
	
	/**
	 * ���k���ꂽ�G���R�[�h�p�X�̕�������A�A�������`�施�߂Ƀf�R�[�h���܂��B
	 * ���̃t�H�[�}�b�g�͐l�Ԃ��ǂݎ�邱�Ƃ��Ӑ}���Ă��炸�A�I�[�T�����O�c�[���Ŏg�p����܂��B
	 * ���̃t�H�[�}�b�g�ł�base64�����Z�b�g���g�p���Ă��܂��B�e�����͘A������`�施�߂��`���邽�߂�6�r�b�g�����ɕϊ�����܂��B
	 *
	 * �e�R�}���h�́A�P���"�w�b�_�["�����ƁA����ɑ���x�����y���W�̒l�����݂Ɍq�����ϐ�����\�����ꂽ������Ɉ��k����܂��B
	 * �w�b�_�[�r�b�g�͍�����E�֓ǂ݂܂�(�قƂ�ǂ̏ꍇ�͉E�[�r�b�g�܂�):1�`3�r�b�g�́A����̎�ނ��w�肵�܂��B
	 * (0-moveTo, 1-lineTo, 2-quadraticCurveTo, 3-bezierCurveTo, 4-closePath, 5-7 ���g�p)
	 * �r�b�g4�͍��W�̒l��12�r�b�g�i2�����j�܂���18�r�b�g(3����)�̂ǂ�����g�p���邩�������܂��B5��6�̃r�b�g�͌��ݖ��g�p�ł��B
	 *
	 * �w�b�_�ɑ����̂́A0�iclosePath�j�A2�imoveTo, LINETO�j�A4�iquadraticCurveTo�j�A�܂���6�ibezierCurveTo�j�̃p�����[�^�ł��B
	 * �����̃p�����[�^�́A2�܂���3�����ɂ���ĕ\�����i�R�}���h�����̃r�b�g4�Ŏ�����܂��j�Ax/y���W�����݂ɕ��ׂ����̂ł��B
	 * �����̕����́A1�r�b�g�̕����i1�͕��A0�����j�ƁA����ɑ���11�i2�����j�܂���17�i3�����j�r�b�g�̐����l����\������Ă��܂��B
	 * �S�Ă̍��W�l�́A1�s�N�Z����1/10�̒P�ʂł��B
	 * ��Βl�ɂ��ړ�����̏ꍇ�������A���̒l�́A�ȑO��x�܂���y�ʒu����̑��Βl�ł��i�K�؂Ȃ��̂��I������܂��j�B
	 *
	 * �Ⴆ�΁A"A3cAAMAu4AAA"�̕�����́A-150,0����n�܂�150,0�ŏI��钼����\���܂��B
	 * <br />A - bits 000000. �ŏ���3�r�b�g(000)��moveTo���߂������܂��B�r�b�g4(0)�̓p�����[�^���Ƃ�2�����ł��邱�Ƃ������܂��B
	 * <br />3c - 110111011100. x�̐�Βl��-150.0px�ł��B�ŏ��̃r�b�g�͕��̒l�ł��邱�Ƃ������A�c��̃r�b�g���1�s�N�Z����1/10�̒P�ʂ�1500�ł��邱�Ƃ������܂��B
	 * <br />AA - 000000000000. y�̐�΍��W��0�ł��B
	 * <br />I - 001100. �ŏ���3�r�b�g(001)��lineTo���߂������܂��B�r�b�g4(1)�̓p�����[�^���Ƃ�3�����ł��邱�Ƃ������܂��B
	 * <br />Au4 - 000000101110111000. x�̑��Βl��300.0px�ł��B����͑O��x���W�ł���-150.0px�ɉ��Z����A��΍��W�ł�+150.0px�ɂȂ�܂��B
	 * <br />AAA - 000000000000000000. y�̑��Βl��0�ł��B
	 * 
	 * @method decodePath
	 * @param {String} str �f�R�[�h����p�X������B
	 * @return {Graphics} ���\�b�h���Ăяo���ꂽGraphic�C���X�^���X (�A�������Ăяo���ɗL�p)�B
	 **/
	p.decodePath = function(str) {
		var instructions = [this.moveTo, this.lineTo, this.quadraticCurveTo, this.bezierCurveTo, this.closePath];
		var paramCount = [2, 2, 4, 6, 0];
		var i=0, l=str.length;
		var params = [];
		var x=0, y=0;
		var base64 = Graphics.BASE_64;
		
		while (i<l) {
			var c = str.charAt(i);
			var n = base64[c];
			var fi = n>>3; // �ŏ�ʃr�b�g����̂���1-3�R�[�h
			var f = instructions[fi];
			// �L���Ȗ��߂ł��邱�Ɓ����g�p�r�b�g����ł��邱�Ƃ��`�F�b�N���܂�:
			if (!f || (n&3)) { throw("bad path data (@"+i+"): "+c); }
			var pl = paramCount[fi];
			if (!fi) { x=y=0; } // �ʒu�����Z�b�g����ړ�����
			params.length = 0;
			i++;
			var charCount = (n>>2&1)+2;  // 4�Ԗڂ̃w�b�_�[�r�b�g�́A���̖��߂̃T�C�Y���������l
			for (var p=0; p<pl; p++) {
				var num = base64[str.charAt(i)];
				var sign = (num>>5) ? -1 : 1;
				num = ((num&31)<<6)|(base64[str.charAt(i+1)]);
				if (charCount == 3) { num = (num<<6)|(base64[str.charAt(i+2)]); }
				num = sign*num/10;
				if (p%2) { x = (num += x); }
				else { y = (num += y); }
				params[p] = num;
				i += charCount;
			}
			f.apply(this,params);
		}
		return this;
	};
	
	/**
	 * Graphics�C���X�^���X�̕�����Ԃ��܂��B
	 * @method clone
	 * @return {Graphics} ���݂�Graphics�C���X�^���X�̕����B
	 **/
	p.clone = function() {
		var o = new Graphics();
		o._instructions = this._instructions.slice();
		o._activeInstructions = this._activeInstructions.slice();
		o._oldInstructions = this._oldInstructions.slice();
		if (this._fillInstructions) { o._fillInstructions = this._fillInstructions.slice(); }
		if (this._strokeInstructions) { o._strokeInstructions = this._strokeInstructions.slice(); }
		if (this._strokeStyleInstructions) { o._strokeStyleInstructions = this._strokeStyleInstructions.slice(); }
		o._active = this._active;
		o._dirty = this._dirty;
		return o;
	};
		
	/**
	 * ���̃I�u�W�F�N�g�̕�����\����Ԃ��܂��B
	 * @method toString
	 * @return {String} ���̃C���X�^���X�̕�����\���B
	 **/
	p.toString = function() {
		return "[Graphics]";
	};
	
	
// ������API:
	/** moveTo�ւ̃V���[�g�J�b�g�B
	 * @method mt
	 * @protected
	 * @type {Function}
	 **/
	p.mt = p.moveTo;
	
	/** lineTo�ւ̃V���[�g�J�b�g�B
	 * @method lt
	 * @protected
	 * @type {Function}
	 **/
	p.lt = p.lineTo;
	
	/** arcTo�ւ̃V���[�g�J�b�g�B
	 * @method at
	 * @protected
	 * @type {Function}
	 **/
	p.at = p.arcTo;
	
	/** bezierCurveTo�ւ̃V���[�g�J�b�g�B
	 * @method bt
	 * @protected
	 * @type {Function}
	 **/
	p.bt = p.bezierCurveTo;
	
	/** quadraticCurveTo / curveTo�ւ̃V���[�g�J�b�g�B
	 * @method qt
	 * @protected
	 * @type {Function}
	 **/
	p.qt = p.quadraticCurveTo;
	
	/** arc�ւ̃V���[�g�J�b�g�B
	 * @method a
	 * @protected
	 * @type {Function}
	 **/
	p.a = p.arc;
	
	/** rect�ւ̃V���[�g�J�b�g�B
	 * @method r
	 * @protected
	 * @type {Function}
	 **/
	p.r = p.rect;
	
	/** closePath�ւ̃V���[�g�J�b�g�B
	 * @method cp
	 * @protected
	 * @type {Function}
	 **/
	p.cp = p.closePath;
	
	/** clear�ւ̃V���[�g�J�b�g�B
	 * @method c
	 * @protected
	 * @type {Function}
	 **/
	p.c = p.clear;
	
	/** beginFill�ւ̃V���[�g�J�b�g�B
	 * @method f
	 * @protected
	 * @type {Function}
	 **/
	p.f = p.beginFill;
	
	/** beginLinearGradientFill�ւ̃V���[�g�J�b�g�B
	 * @method lf
	 * @protected
	 * @type {Function}
	 **/
	p.lf = p.beginLinearGradientFill;
	
	/** beginRadialGradientFill�ւ̃V���[�g�J�b�g�B
	 * @method rf
	 * @protected
	 * @type {Function}
	 **/
	p.rf = p.beginRadialGradientFill;
	
	/** beginBitmapFill�ւ̃V���[�g�J�b�g�B
	 * @method bf
	 * @protected
	 * @type {Function}
	 **/
	p.bf = p.beginBitmapFill;
	
	/** endFill�ւ̃V���[�g�J�b�g�B
	 * @method ef
	 * @protected
	 * @type {Function}
	 **/
	p.ef = p.endFill;
	
	/** setStrokeStyle�ւ̃V���[�g�J�b�g�B
	 * @method ss
	 * @protected
	 * @type {Function}
	 **/
	p.ss = p.setStrokeStyle;
	
	/** beginStroke�ւ̃V���[�g�J�b�g�B
	 * @method s
	 * @protected
	 * @type {Function}
	 **/
	p.s = p.beginStroke;
	
	/** beginLinearGradientStroke�ւ̃V���[�g�J�b�g�B
	 * @method ls
	 * @protected
	 * @type {Function}
	 **/
	p.ls = p.beginLinearGradientStroke;
	
	/** beginRadialGradientStroke�ւ̃V���[�g�J�b�g�B
	 * @method rs
	 * @protected
	 * @type {Function}
	 **/
	p.rs = p.beginRadialGradientStroke;
	
	/** beginBitmapStroke�ւ̃V���[�g�J�b�g�B
	 * @method bs
	 * @protected
	 * @type {Function}
	 **/
	p.bs = p.beginBitmapStroke;
	
	/** endStroke�ւ̃V���[�g�J�b�g�B
	 * @method es
	 * @protected
	 * @type {Function}
	 **/
	p.es = p.endStroke;
	
	/** drawRect�ւ̃V���[�g�J�b�g�B
	 * @method dr
	 * @protected
	 * @type {Function}
	 **/
	p.dr = p.drawRect;
	
	/** drawRoundRect�ւ̃V���[�g�J�b�g�B
	 * @method rr
	 * @protected
	 * @type {Function}
	 **/
	p.rr = p.drawRoundRect;
	
	/** drawRoundRectComplex�ւ̃V���[�g�J�b�g�B
	 * @method rc
	 * @protected
	 * @type {Function}
	 **/
	p.rc = p.drawRoundRectComplex;
	
	/** drawCircle�ւ̃V���[�g�J�b�g�B
	 * @method dc
	 * @protected
	 * @type {Function}
	 **/
	p.dc = p.drawCircle;
	
	/** drawEllipse�ւ̃V���[�g�J�b�g�B
	 * @method de
	 * @protected
	 * @type {Function}
	 **/
	p.de = p.drawEllipse;
	
	/** drawPolyStar�ւ̃V���[�g�J�b�g�B
	 * @method dp
	 * @protected
	 * @type {Function}
	 **/
	p.dp = p.drawPolyStar;
	
	/** decodePath�ւ̃V���[�g�J�b�g�B
	 * @method p
	 * @protected
	 * t@ype Function
	 **/
	p.p = p.decodePath;
	
	
// �v���C�x�[�g���\�b�h:
	/**
	 * @method _updateInstructions
	 * @protected
	 **/
	p._updateInstructions = function() {
		this._instructions = this._oldInstructions.slice();
		this._instructions.push(Graphics.beginCmd);
		
		this._instructions.push.apply(this._instructions, this._activeInstructions);
		
		if (this._fillInstructions) { this._instructions.push.apply(this._instructions, this._fillInstructions); }
		if (this._strokeInstructions) {
			if (this._strokeStyleInstructions) {
				this._instructions.push.apply(this._instructions, this._strokeStyleInstructions);
			}
			this._instructions.push.apply(this._instructions, this._strokeInstructions);
			if (this._ignoreScaleStroke) {
				this._instructions.push(
					new Command(this._ctx.save, [], false),
					new Command(this._ctx.setTransform, [1,0,0,1,0,0], false),
					Graphics.strokeCmd,
					new Command(this._ctx.restore, [], false)
				);
			} else {
				this._instructions.push(Graphics.strokeCmd);
			}
		}
	};
	
	/**
	 * @method _newPath
	 * @protected
	 **/
	p._newPath = function() {
		if (this._dirty) { this._updateInstructions(); }
		this._oldInstructions = this._instructions;
		this._activeInstructions = [];
		this._active = this._dirty = false;
	};
	
	// �v���p�e�B��ݒ肷��R�}���h�̍쐬�Ɏg�p���܂�:
	/**
	 * �v���p�e�B��ݒ肷��R�}���h�̍쐬�Ɏg�p���܂�
	 * @method _setProp
	 * @param {String} name
	 * @param {String} value
	 * @protected
	 **/
	p._setProp = function(name, value) {
		this[name] = value;
	};

createjs.Graphics = Graphics;
}());
