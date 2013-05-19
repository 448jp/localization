/*
* SpriteSheetUtils
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
// �R���X�g���N�^:
/**
 * SpriteSheetUtils�N���X�́A{{#crossLink "SpriteSheet"}}{{/crossLink}}�Ƌ������ē��삷��ÓI���\�b�h�̏W���ł��B
 * �X�v���C�g�V�[�g�͘A�����������̉摜(�ʏ�̓A�j���[�V�����t���[���j���i�q��Ɉꖇ�̉摜�ɂ܂Ƃ߂�ꂽ���̂ł��B
 * �Ⴆ�΁A8����100x100 �̉摜�ɂ���č\�������A�j���[�V�����́A400x200�̃X�v���C�g�V�[�g�ɂ܂Ƃ߂邱�Ƃ��ł��܂��i4�t���[�����Ƃ�2��j�B
 * SpriteSheetUtils �N���X�͐ÓI�ȃC���^�[�t�F�[�X��񋟂��Ă���A�C���X�^���X�����ׂ��ł͂���܂���B
 * @class SpriteSheetUtils
 * @static
 **/
var SpriteSheetUtils = function() {
	throw "SpriteSheetUtils cannot be instantiated";
}

	/**
	 * @property _workingCanvas
	 * @static
	 * @type HTMLCanvasElement | Object
	 * @protected
	*/
	SpriteSheetUtils._workingCanvas = createjs.createCanvas?createjs.createCanvas():document.createElement("canvas");

	/**
	 * @property _workingContext
	 * @static
	 * @type CanvasRenderingContext2D
	 * @protected
	*/
	SpriteSheetUtils._workingContext = SpriteSheetUtils._workingCanvas.getContext("2d");

// public static methods:
	/**
	 * <b>����͎����I�ȃ��\�b�h�ł���A�����炭�o�O������܂��B��肪����Ε񍐂��Ă��������B</b><br/><br/>
	 * �����̃X�v���C�g�V�[�g�ɑ΂��āA���̃t���[���𐅕������A���������A�܂��͗����ɔ��]����`�Ŋg�����܂��B
	 * �܂��A�K�؂ȃA�j���[�V�����ƃt���[���̃f�[�^��ǉ����܂��B���]���ꂽ�A�j���[�V�����͌��X�̂��̂ɐړ������ǉ����ꂽ���O�������܂��i_h, _v, _hv ����K�؂Ȃ��́j�B
	 * �X�v���C�g�V�[�g�̉摜�́A���̃��\�b�h���g�p����O�Ɋ��S�Ƀ��[�h�����悤�C��t���Ă��������B
	 * <br/><br/>
	 * ��:<br/>
	 * SpriteSheetUtils.addFlippedFrames(mySpriteSheet, true, true);
	 * ��̗�ł́A���������ɔ��]���ꂽ�t���[���ƁA���������ɔ��]���ꂽ�t���[����ǉ����܂��B
	 * <br/><br/>
	 * ���L�Ƃ��āA�S�Ă̕\���I�u�W�F�N�g�́AscaleX�܂���scaleY�v���p�e�B���}�C�i�X�ɐݒ肷�邱�Ƃł��A���]�����邱�Ƃ��ł��܂��B
	 * ���̕��@�ł́A�������̃u���E�U�i���ɁA�n�[�h�E�F�A�A�N�Z�����[�g���ꂽCanvas�������Ȃ����́j�ł͎኱�p�t�H�[�}���X�Ɉ��e��������܂��B
	 * ���̂��Ƃ��AaddFlippedFrames���g�p�ł���悤�ɂ��Ă��闝�R�ł��B
	 * @method addFlippedFrames
	 * @static
	 * @param {SpriteSheet} spriteSheet 
	 * @param {Boolean} horizontal true�̏ꍇ�A�����ɔ��]���ꂽ�t���[�����ǉ�����܂��B
	 * @param {Boolean} vertical true�̏ꍇ�A�����ɔ��]���ꂽ�t���[�����ǉ�����܂��B
	 * @param {Boolean} both true�̏ꍇ�A��������ѐ����ɔ��]���ꂽ�t���[�����ǉ�����܂��B
	 **/
	SpriteSheetUtils.addFlippedFrames = function(spriteSheet, horizontal, vertical, both) {
		if (!horizontal && !vertical && !both) { return; }
		
		var count = 0;
		if (horizontal) { SpriteSheetUtils._flip(spriteSheet,++count,true,false); }
		if (vertical) { SpriteSheetUtils._flip(spriteSheet,++count,false,true); }
		if (both) { SpriteSheetUtils._flip(spriteSheet,++count,true,true); }
	}

	/**
	 * ����̃X�v���C�g�V�[�g����A1�t���[����V����PNG�摜�Ƃ��ĕԂ��܂��B
	 * ���ӓ_�Ƃ��ẮA�قƂ�ǑS�Ă̏ꍇ�ɂ����āA���̕��@�ɂ��t���[���𕪊����ABitmap�C���X�^���X�Ƃ��ĕ\����������A
	 * �ꎞ��~����BitmapAnimation�C���X�^���X��p�����ق������ǂ����ʂɂȂ�܂��B
	 * @method extractFrame
	 * @static
	 * @param {Image} spriteSheet �t���[���𒊏o���錳�ƂȂ�SpriteSheet�C���X�^���X
	 * @param {Number} frame ���o�������t���[���ԍ��܂��̓A�j���[�V�������B
	 * �A�j���[�V���������w�肳�ꂽ�ꍇ�A�A�j���[�V�������̍ŏ��̃t���[���݂̂����o����܂��B
	 * @return {Image} ����̃X�v���C�g�V�[�g����1�t���[�����o���ꂽ�V����PNG�摜
	*/
	SpriteSheetUtils.extractFrame = function(spriteSheet, frame) {
		if (isNaN(frame)) {
			frame = spriteSheet.getAnimation(frame).frames[0];
		}
		var data = spriteSheet.getFrame(frame);
		if (!data) { return null; }
		var r = data.rect;
		var canvas = SpriteSheetUtils._workingCanvas;
		canvas.width = r.width;
		canvas.height = r.height;
		SpriteSheetUtils._workingContext.drawImage(data.image, r.x, r.y, r.width, r.height, 0, 0, r.width, r.height);
		var img = new Image();
		img.src = canvas.toDataURL("image/png");
		return img;
	}

	/**
	 * 1�摜��RGB�`�����l���ƁA�ʂ̉摜�̃A���t�@�`�����l�����������܂��B
	 * ���̃��\�b�h�ł͐F�̃f�[�^���܂ވ��k���ꂽJPEG�摜�ƃA���t�@�`�����l�����܂ރ��m�N����PNG32�摜���g�p���邱�Ƃ��\�ł��B
	 * ����̎�ނ̉摜�iJPEG���k�Ƃ��ă����_�����O�����悤�ȏڍׂ������j���g�p���邱�Ƃ́A�P�̂�RGBA��PNG32�`���摜�ɂ���ׂāA����ȃt�@�C���T�C�Y�̐ߖ�ɂȂ�܂��B
	 * ���̃��\�b�h�͂ƂĂ������ł��i�ʏ�A���s�̓x��1�`2ms���x�j�B
	 * @method mergeAlpha
	 * @static
	 * @param {Image} rbgImage RGB�`�����l�������摜�i�܂���Canvas�j�B
	 * @param {Image} alphaImage �A���t�@�`�����l�������摜�i�܂���Canvas�j�B
	 * @param {Canvas} canvas (�I�v�V����). �w�肵���ꍇ�A����Canvas���g�p����A�߂�l�Ƃ��ĕԂ���܂��B����ȊO�̏ꍇ�A�V����Canvas����������܂��B
	 * @return {Canvas} �摜�f�[�^�ƌ������ꂽCanvas�B�����Bitmap��SpriteSheet�̃\�[�X�Ƃ��Ďg�p���邱�Ƃ��ł��܂��B
	*/
	SpriteSheetUtils.mergeAlpha = function(rgbImage, alphaImage, canvas) {
		if (!canvas) { canvas = createjs.createCanvas?createjs.createCanvas():document.createElement("canvas"); }
		canvas.width = Math.max(alphaImage.width, rgbImage.width);
		canvas.height = Math.max(alphaImage.height, rgbImage.height);
		var ctx = canvas.getContext("2d");
		ctx.save();
		ctx.drawImage(rgbImage,0,0);
		ctx.globalCompositeOperation = "destination-in";
		ctx.drawImage(alphaImage,0,0);
		ctx.restore();
		return canvas;
	}

	
// private static methods:
	SpriteSheetUtils._flip = function(spriteSheet, count, h, v) {
		var imgs = spriteSheet._images;
		var canvas = SpriteSheetUtils._workingCanvas;
		var ctx = SpriteSheetUtils._workingContext;
		var il = imgs.length/count;
		for (var i=0;i<il;i++) {
			var src = imgs[i];
			src.__tmp = i; // a bit hacky, but faster than doing indexOf below.
			canvas.width = 0; // make sure it clears.
			canvas.width = src.width;
			canvas.height = src.height;
			ctx.setTransform(h?-1:1, 0, 0, v?-1:1, h?src.width:0, v?src.height:0);
			ctx.drawImage(src,0,0);
			var img = new Image();
			img.src = canvas.toDataURL("image/png");
			// work around a strange bug in Safari:
			img.width = src.width;
			img.height = src.height;
			imgs.push(img);
		}
		
		var frames = spriteSheet._frames;
		var fl = frames.length/count;
		for (i=0;i<fl;i++) {
			src = frames[i];
			var rect = src.rect.clone();
			img = imgs[src.image.__tmp+il*count];
			
			var frame = {image:img,rect:rect,regX:src.regX,regY:src.regY};
			if (h) {
				rect.x = img.width-rect.x-rect.width; // update rect
				frame.regX = rect.width-src.regX; // update registration point
			}
			if (v) {
				rect.y = img.height-rect.y-rect.height;  // update rect
				frame.regY = rect.height-src.regY; // update registration point
			}
			frames.push(frame);
		}
		
		var sfx = "_"+(h?"h":"")+(v?"v":"");
		var names = spriteSheet._animations;
		var data = spriteSheet._data;
		var al = names.length/count;
		for (i=0;i<al;i++) {
			var name = names[i];
			src = data[name];
			var anim = {name:name+sfx,frequency:src.frequency,next:src.next,frames:[]};
			if (src.next) { anim.next += sfx; }
			frames = src.frames;
			for (var j=0,l=frames.length;j<l;j++) {
				anim.frames.push(frames[j]+fl*count);
			}
			data[anim.name] = anim;
			names.push(anim.name);
		}
	}
	

createjs.SpriteSheetUtils = SpriteSheetUtils;
}());