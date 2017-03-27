"use strict"

function Devices(name, state, number) {
   this._name = name;
   this._state = state;
   this._number = number;
}
Devices.prototype.getName = function() {
   return this._name;
}
Devices.prototype.setName = function(name) {
   this._name = name;
}
Devices.prototype.getState = function() {
   return this._state;
}
Devices.prototype.setState = function(state) {
   this._state = state;
}
Devices.prototype.getNumber = function() {
   return this._number;
}
Devices.prototype.setNumber = function(number) {
   this._number = number;
}
Devices.prototype.info1 = function(name, number) {
   return "Девайс " + this._name + " № " + this._number;
}
Devices.prototype.info2 = function(state) {
   return "Текущее состояние " + this._state;
}
Devices.prototype.on = function() {
   this._state = true;
}
Devices.prototype.off = function() {
   this._state = false;
}


//Record players
function PlayerDev(name, state, number, track) {
   Devices.call(this, name, state, number);
   this._track = track;
}
PlayerDev.prototype.getTrack = function() {
   return this._track;
}
PlayerDev.prototype.setTrack = function(track) {
   this._track = track;
}
PlayerDev.prototype = Object.create(Devices.prototype); 
PlayerDev.prototype.constructor = PlayerDev;
PlayerDev.prototype.info3 = function(track) {
   return "Сейчас играет трек № " + this._track;
}
PlayerDev.prototype.pause = function() {
   return "Pause";
}
PlayerDev.prototype.next = function(track) {
   return this._track + 1;
}
PlayerDev.prototype.previous = function(track) {
   return this._track - 1;
}
PlayerDev.prototype.record = function() {
   this._state = "Идет запись";
}

//tv
function Tv(name, state, number, track) {
   PlayerDev.call(this, name, state, number, track);
}
Tv.prototype = Object.create(PlayerDev.prototype); 
Tv.prototype.constructor = Tv;

//mp3
function Mp3(name, state, number, track) {
   PlayerDev.call(this, name, state, number, track);
}
Mp3.prototype = Object.create(PlayerDev.prototype); 
Mp3.prototype.constructor = Tv;

//Choice of species
function Selector(name, state, number) {
   Devices.call(this. name, state, number);
}
Selector.prototype = Object.create(Devices.prototype); 
Selector.prototype.constructor = Selector;
Selector.prototype.selectView1 = function() {
   return "Выбран 1 вариант";
}
Selector.prototype.selectView2 = function() {
   return "Выбран 2 вариант";
}
Selector.prototype.selectView3 = function() {
   return "Выбран 3 вариант";
}

//Lamp
function Lamp(name, state, number, brightless) {
   Selector.call(this, name, state, number);
   this._brightless = brightless;
}
Lamp.prototype.getBrightless = function() {
   return this._brightless;
}
Lamp.prototype.setBrightless = function(brightless) {
   this._brightless = _brightless;
}
Lamp.prototype = Object.create(Selector.prototype); 
Lamp.prototype.constructor = Lamp;
Lamp.prototype.bright1 = function() {
   this._brightless = Selector.prototype.selectView1.call(this) + ": не ярко";
}
Lamp.prototype.bright2 = function() {
   this._brightless = Selector.prototype.selectView2.call(this) + ": средне ярко";
}
Lamp.prototype.bright3 = function() {
   this._brightless = Selector.prototype.selectView3.call(this) + ": очень ярко";
}



//Cat
function Cat(name, state, number, cat, breed) {
   Selector.call(this, name, state, number);
   this._breed = breed;
}
Cat.prototype.getBreed = function() {
   return this._breed;
}
Cat.prototype.setBreed = function(breed) {
   this._breed = _breed;
}
Cat.prototype = Object.create(Selector.prototype); 
Cat.prototype.constructor = Cat;
Cat.prototype.cat1 = function() {
   this._breed = Selector.prototype.selectView1.call(this) + ": полосатый.";
}
Cat.prototype.cat2 = function() {
   this._breed = Selector.prototype.selectView2.call(this) + ": разноцветный.";
}
Cat.prototype.cat3 = function() {
   this._breed = Selector.prototype.selectView3.call(this) + ": белый.";
}
Cat.prototype.fed = function() {
   return "Я сыт";
}
Cat.prototype.hungry = function() {
   setTimeout("Я голоден", 10000);
}

//Bowl of cat
function Bowl(name, state, number) {
   Devices.call(this, name, state, number);
}
Bowl.prototype = Object.create(Devices.prototype); 
Bowl.prototype.constructor = Bowl;
Bowl.prototype.selectCat = function() {
   return this._name + " " + this._number + " накормлен.";
}
Bowl.prototype.feedCat = function() {
   var catNum = Cat.number;
   var fc = new Cat.fed(catNum);
   fc.start();
}

