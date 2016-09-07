/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/static/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.demo = demo;
	function demo() {
	    var arr = ["img/wo.png", "img/ppto.png", "img/exo.png", "img/htmlo.png", "img/pdfo.png", "img/imgo.png", "img/wo2.png", "img/txto.png", "img/ppto2.png", "img/htmlo2.png", "img/rxto.png", "img/xmlo.png", "img/yaoshio.png", "img/suoo.png", "img/hebingo.png", "img/fengeo.png", "img/huoquo.png", "img/shibieo.png"];
	    var arr2 = ["img/world.png", "img/ppt.png", "img/exl.png", "img/html.png", "img/txt.png", "img/img.png", "img/world2.png", "img/txt2.png", "img/ppt2.png", "img/html2.png", "img/rxt.png", "img/xml.png", "img/yaoshi.png", "img/suo.png", "img/hebing.png", "img/fenge.png", "img/huoqu.png", "img/shibie.png"];
	    $(".body div").on("click", function () {
	        $(this).addClass("blue").siblings().removeClass("blue");
	    });
	    var img = $(".line div img");

	    img.on("click", function () {
	        for (var z = 0; z < img.length; z++) {
	            img[z].value = z;
	            img[z].src = arr2[z];
	        }
	        var num = this.value;
	        this.src = arr[num];
	    });
	    var li = $(".ul li");
	    var b = $(".ul b");
	    $(".ul li").on("click", function () {
	        var num = $(this).index() - 1;
	        var num2 = $(this).index() + 1;

	        for (var i = 0; i <= num; i++) {
	            li[i].className = "change2";
	        }
	        for (var j = num2; j < li.length; j++) {
	            li[j].className = "";
	        }

	        this.className = "change";
	    });
	    $(".botton .a1").on("click", function () {
	        $(".file").css("display", "none");
	        $(".file2").css("display", "block");
	    });
	    $(".botton .a2").on("click", function () {
	        $(".file4").css("display", "block");
	    });
	}

/***/ }
/******/ ]);