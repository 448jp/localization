/*
* UID
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
 * �A���������j�[�N��(�d�����Ȃ�)ID�ԍ��𐶐����邽�߂̃O���[�o�����[�e�B���e�B�ł��BUID�N���X�͐ÓI�C���^�[�t�F�[�X���g�p��(ex. <code>UID.get()</code>)�A�C���X�^���X�����ׂ��ł͂���܂���B
 * @class UID
 * @static
 **/
var UID = function() {
	throw "UID cannot be instantiated";
}

	/**
	 * @property _nextID
	 * @type Number
	 * @protected
	 **/
	UID._nextID = 0;

	/**
	 * ���̃��j�[�NID��ԋp���܂��B
	 * @method get
	 * @return {Number} ���̃��j�[�NID
	 * @static
	 **/
	UID.get = function() {
		return UID._nextID++;
	}

createjs.UID = UID;
}());
