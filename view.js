"use strict"

function MenuDevices (model) {
	this._model = model;
	this.viewInfo1 = document.getElementById("info1");
	this.viewInfo2 = document.getElementById("info2");
	this.btnOn = document.getElementById("on");
	this.btnOff = document.getElementById("off");
	this.btnRemove = document.getElementById("remove");
	this.btnAdd = document.getElementById("add");	
	this.form = document.getElementById("dev");
}
MenuDevices.prototype.getModel = function() {
   return this._model;
}
MenuDevices.prototype.setModel = function(model) {
   this._model = model;
}
MenuDevices.prototype.start = function() {
   this.viewInfo1.innerHTML = this._model.info1();
   this.viewInfo2.innerHTML = this._model.info2();
   var self = this;
	this.btnOn.onclick = function () {
		self._model.on();
		self.viewInfo2.innerHTML = self._model.info2();
   };
   this.btnOff.onclick = function () {
		self._model.off();
		self.viewInfo2.innerHTML = self._model.info2();
   };
   this.btnRemove.onclick = function () {
		self.form.remove();
	}
	this.btnAdd.onclick = function () {
		var el = new Tv();
		self.elem = document.createElement("div");
		self.elem.innerHTML = el();
		//self.formAdd = self.form.cloneNode(true);
    	//self.form.parentNode.insertBefore(self.formAdd, self.form);
	}
	
}

