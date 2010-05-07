// scripts/passwordmaker.js

var passwdMaster, passwdUrl, passwdGenerated, passwdLength, protocolCB, domainCB, subdomainCB, pathCB, leetLevelLB, ifSaveMasterPassword, saveMasterBtn, hashAlgorithmLB, whereLeetLB, usernameTB, counter, passwordPrefix, passwordSuffix, charMinWarning, tipsWnd, userCharsetValue, ifHidePasswd, ifSavePreferences, preUrl;

var base93 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`~!@#$%^&*()_-+={}|[]\\:\";\'<>?,./";
var base16 = "0123456789abcdef";

function init() {
	if (typeof otherOnLoadHandler == "function")
		otherOnLoadHandler();
	passwdMaster = document.getElementById("passwdMaster");
	saveMasterBtn = document.getElementById("saveMasterBtn");
	passwdUrl = document.getElementById("passwdUrl");
	passwdGenerated = document.getElementById("passwdGenerated");
	ifHidePasswd = document.getElementById("ifHidePasswd");
	ifSavePreferences = document.getElementById("ifSavePreferences");
	preUrl = document.getElementById("preURL");

	populateURL(); // in case passwdUrl.value is using document.location
	// instead of cookie value, this calculates the correct URL
	passwdMaster.focus();
}

function getIndexOfValue(lb, value) {
	// Find the index of the option to select
	for ( var i = 0; i < lb.options.length; i++) {
		if (lb[i].value == value)
			return i;
	}
	return 0; // can't find it!
}

var profile = {
		urlIncludeProtocol: false,
		urlIncludeSubdomain: false,
		urlIncludeDomain: true,
		urlIncludePath: false,
		username: "",
		hashAlgorithm: "md5",
		whereToUseL33t: "off",
		l33tLevel: "1",
		passwordLength: "8",
		passwordPrefix: "",
		passwordSuffix: "",
		charset: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`~!@#$%^&*()_-+={}|[]\\:\";'<>?,./",
		counterOffset: ""
}

function preGeneratePassword() {
	passwdGenerated.value = makePassword(passwdUrl.value, passwdMaster.value,
			profile.username, profile.hashAlgorithm, profile.whereToUseL33t, profile.l33tLevel,
			profile.passwordLength, profile.passwordPrefix, profile.passwordSuffix,
			profile.charset, profile.counterOffset);
}

function populateURL() {
	passwdUrl.value = filterUrl(preUrl.value, profile.urlIncludeProtocol,
			profile.urlIncludeSubdomain, profile.urlIncludeDomain, profile.urlIncludePath);
	preGeneratePassword();
}

// Make a pseudo-random encryption key... emphasis on *pseudo*
var hex = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'a', 'b',
		'c', 'd', 'e', 'f' ];
var keySz = keySizeInBits / 4; // keySizeInBits defined in aes.js
function makeKey() {
	var ret = "";
	while (ret.length < keySz)
		ret += hex[Math.floor(Math.random() * 15)];
	return ret;
}

function onClickTips() {
	if (tipsWnd != null && !tipsWnd.closed)
		tipsWnd.focus();
	else
		tipsWnd = window.open("tips.html");
}

function addEvent(obj, evType, fn) {
	if (obj.addEventListener) {
		obj.addEventListener(evType, fn, true);
		return true;
	} else if (obj.attachEvent) {
		var r = obj.attachEvent("on" + evType, fn);
		return r;
	} else {
		return false;
	}
}

// simple array search function.
// If returnIndex==true, returns the index of the found item or false if the
// item is not found
// else, returns true/false.
function in_array(needle, haystack, returnIndex) {
	var n = haystack.length;
	for ( var i = 0; i < n; i++) {
		if (haystack[i] == needle) {
			if (returnIndex == true)
				return i;
			else
				return true;
		}
	}
	return false;
}

if (addEventListener) {
	addEventListener('load', init, false);
} else if (attachEvent) {
	attachEvent('onload', init);
} else {
	var otherOnLoadHandler = window.onload;
	onload = init;
}

// scripts/select.js

// Editable Select Boxes 0.5.2
//
// Copyright 2005 Sandy McArthur: http://Sandy.McArthur.org/
//
// You are free to use this code however you please as long as the
// above copyright is preserved. It would be nice if you sent me
// any bug fixes or improvements you make.
//
// TODO: Support optgroup - this will be hard, at least in IE.

var EditableSelect = {
	/** The value used to indicate an option is the "edit" value. */
	"editValue" : "!!!edit!!!",

	/** The text used when creating an edit option for a select box. */
	"editText" : "(Other...)",
	// "editText": "(Other\u2026)", // Doesn't work in IE's select box
	// "editText": "(Other" + unescape("%85") + ")", // Doesn't work in Safari

	/** The text used when creating an edit option for a select box. */
	"editClass" : "activateEdit",

	/**
	 * Finds all select elements and if they have the "editable" CSS class then
	 * it makes that select be editable.
	 */
	"activateAll" : function() {
		var selects = document.getElementsByTagName("select");
		for ( var i = 0; i < selects.length; i++) {
			var select = selects[i];
			if (EditableSelect.hasClass(select, "editable")) {
				EditableSelect.activate(select);
			}
		}
	},

	/** Makes the select element editable. */
	"activate" : function(select) {
		if (!EditableSelect.selectHasEditOption(select)) {
			// TODO: Uncomment
			// EditableSelect.selectAddEditOption(select);
		}
		select.oldSelection = select.options.selectedIndex;
		EditableSelect.addEvent(select, "change", EditableSelect.selectOnChage);
		EditableSelect.addClass(select, "editable");
	},

	/** Does the select box have an edit option. */
	"selectHasEditOption" : function(select) {
		var options = select.options;
		for ( var i = 0; i < options.length; i++) {
			if (options.item(i).value == EditableSelect.editValue) {
				return true;
			}
		}
		return false;
	},

	/** Add an edit option to the select box. */
	"selectAddEditOption" : function(select) {
		var option = document.createElement("option");
		option.value = EditableSelect.editValue;
		option.text = EditableSelect.editText;
		option.className = EditableSelect.editClass;
		EditableSelect.selectAddOption(select, option, 0);
	},

	/**
	 * Add an option to the select box at specified postion. "index" is
	 * optionial, if left undefined then the end is assumed.
	 */
	"selectAddOption" : function(select, option, index) {
		if (select.options.add) {
			if (typeof index == "undefined") {
				select.options.add(option);
			} else {
				select.options.add(option, index);
			}
		} else {
			if (typeof index == "undefined") {
				select.insertBefore(option);
			} else {
				var before = select.options.item(index);
				select.insertBefore(option, before);
			}
		}
	},

	/**
	 * Event handler for select box. If the edit option is selected it switches
	 * to the edit input field.
	 */
	"selectOnChage" : function(evt) {
		var select = this;
		if (evt.srcElement)
			select = evt.srcElement; // For IE
		if (select.value == EditableSelect.editValue) {
			var input = document.createElement("input");
			input.type = "text";
			input.value = select.options.item(select.oldSelection).value;
			input.className = select.className;
			input.name = select.name;
			// CASPIAN: Store the id of the old selct menu so that the new
			// select
			// menu will be able to have the same id as the old one...
			input.oldId = select.id;
			input.selectOnChange = select.onchange;
			EditableSelect.addEvent(input, "blur", EditableSelect.inputOnBlur);
			EditableSelect.addEvent(input, "keypress",
					EditableSelect.inputOnKeyPress);

			var oldOptions = [];
			for ( var i = 0; i < select.options.length; i++) {
				var o = select.options.item(i);
				var sn = o;
				var oo = EditableSelect.serializeOption(o);
				oldOptions[oldOptions.length] = oo;
			}

			select.parentNode.replaceChild(input, select);
			input.focus();
			input.select();
			input.oldOptions = oldOptions;

		} else {
			select.oldSelection = select.options.selectedIndex;
		}
	},

	/**
	 * Event handler for the input field when the field has lost focus. This
	 * rebuilds the select box possibly adding a new option for what the user
	 * typed.
	 */
	"inputOnBlur" : function(evt) {
		var input = this;
		if (evt.srcElement)
			input = evt.srcElement; // For IE
		var keepSorted = EditableSelect.hasClass(input, "keepSorted");
		var value = input.value;
		var select = document.createElement("select");
		select.className = input.className;
		select.name = input.name;
		// CASPIAN: Give the new select box the same id as the old one;
		// this way, it can still be referenced via document.getElementById
		select.id = input.oldId;
		select.onchange = input.selectOnChange;

		var selectedIndex = -1;
		var optionIndex = 0;
		var oldOptions = input.oldOptions;
		var newOption = {
			"text" : value,
			"value" : value
		};
		for ( var i = 0; i < oldOptions.length; i++) {
			var n = oldOptions[i];

			if (newOption != null
					&& EditableSelect.inputCompare(n, newOption) == 0) {
				newOption = null;
			} else if (keepSorted && newOption != null
					&& EditableSelect.inputCompare(n, newOption) > 0) {
				EditableSelect.selectAddOption(select, EditableSelect
						.deserializeOption(newOption));

				selectedIndex = optionIndex;
				optionIndex++;
				newOption = null;
			}

			if (selectedIndex == -1 && n.value == value) {
				selectedIndex = optionIndex;
			}

			var opt = EditableSelect.deserializeOption(n);
			EditableSelect.selectAddOption(select, opt);
			optionIndex++;
			input.oldOptions[i] = null;
		}
		if (newOption != null) {
			var opt = EditableSelect.deserializeOption(newOption);
			EditableSelect.selectAddOption(select, opt);

			select.options.selectedIndex = optionIndex;
			select.oldSelection = select.options.selectedIndex;
		} else {
			select.options.selectedIndex = selectedIndex;
			select.oldSelection = select.options.selectedIndex;
		}

		EditableSelect.activate(select);
		input.parentNode.replaceChild(select, input);
		select.blur();
		if (select.onchange)
			select.onchange();
	},

	// CASPIAN
	// Sets the current value of the select menu.
	// Arguments:
	// select => The HTML id of the selct menu
	// value => The desired value of the select menu. If this value is currently
	// an option, hilight it. If not, add it to the menu.
	"setValue" : function(select, value) {
		var newOption = document.createElement("option");
		newOption.text = value;
		newOption.value = value;
		var inOptions = false;

		for ( var i = 0; i < select.options.length; i++) {
			if (EditableSelect.inputCompare(select.options[i], newOption) == 0) {
				select.selectedIndex = i;
				inOptions = true;
			}
		}

		if (inOptions == false) {
			EditableSelect.selectAddOption(select, newOption);
			select.selectedIndex = (select.options.length - 1);
		}
	},

	"inputCompare" : function(x, y) {
		if (x.value == EditableSelect.editValue
				&& y.value == EditableSelect.editValue) {
			return 0;
		}
		if (x.value == EditableSelect.editValue) {
			return -1;
		}
		if (y.value == EditableSelect.editValue) {
			return 1;
		}
		var xText = x.text ? x.text.toUpperCase() : "";
		var yText = y.text ? y.text.toUpperCase() : "";
		if (xText < yText) {
			return -1;
		} else if (xText == yText) {
			return 0;
		} else {
			return 1;
		}
	},

	/**
	 * Intercept enter key presses to prevent form submit but still update the
	 * field.
	 */
	"inputOnKeyPress" : function(evt) {
		var e;
		if (evt) {
			e = evt;
		} else if (window.event) {
			e = window.event;
		} else {
			throw "EditableSelect.inputOnKeyPress: Unable to find the event.";
		}
		if (e.keyCode == 13) {
			if (e.currentTarget) {
				e.currentTarget.blur();
				return false; // Prevent form submit
} else if (e.srcElement) {
	e.srcElement.blur();
	return false; // Prevent form submit
} else {
	throw "EditableSelect.inputOnKeyPress: Unknown event type.";
}
}
return true;
},

/**
 * Convert an option element to a form that can be attached to the input
 * element.
 */
"serializeOption" : function(option) {
var ser = {};
if (option.text)
ser.text = option.text;
if (option.value)
ser.value = option.value; // CASPIAN: Fixed bug. was: if (option.value)
// ser.value = option.text;
// this caused some problems because sometimes no option with value
// !!!edit!!!... so extra (Option...) entries would be created.
if (option.disabled)
	ser.disabled = option.disabled;
if (option.label)
	ser.label = option.label;
if (option.className)
	ser.className = option.className;
if (option.title)
	ser.title = option.title;
if (option.id)
	ser.id = option.id;
return ser;
},

/** Reverse the serializeOption function into an option element. */
"deserializeOption" : function(ser) {
var option = document.createElement("option");
if (ser.text)
	option.text = ser.text;
if (ser.value) {
	option.value = ser.value;
} else if (ser.text) {
	option.value = ser.text;
}
if (ser.disabled)
	option.disabled = ser.disabled;
if (ser.label)
	option.label = ser.label;
if (ser.className)
	option.className = ser.className;
if (ser.title)
	option.title = ser.value;
if (ser.id)
	option.id = ser.id;
return option;
},

/** Does this element have the CSS class? */
"hasClass" : function(element, clazz) {
var regex = new RegExp('\\b' + clazz + '\\b');
return regex.test(element.className);
},

/** Append the CSS class to the element if it doesn't exist. */
"addClass" : function(element, clazz) {
if (!EditableSelect.hasClass(element, clazz)) {
	element.className = element.className + " " + clazz;
}
},

/** Remove the CSS class from the element if it exist. */
"removeClass" : function(element, clazz) {
if (EditableSelect.hasClass(element, clazz)) {
	element.className = element.className.replace(clazz, "");
}
},

// From: http://www.scottandrew.com/weblog/articles/cbs-events
	/** Add an event in a cross browser way. */
	"addEvent" : function(obj, evType, fn, useCapture) {
		if (obj.addEventListener) {
			obj.addEventListener(evType, fn, useCapture);
			return true;
		} else if (obj.attachEvent) {
			var r = obj.attachEvent("on" + evType, fn);
			return r;
		} else {
			alert("Handler could not be attached");
		}
	},

	/** Remove an event in a cross browser way. */
	"removeEvent" : function(obj, evType, fn, useCapture) {
		if (obj.removeEventListener) {
			obj.removeEventListener(evType, fn, useCapture);
			return true;
		} else if (obj.detachEvent) {
			var r = obj.detachEvent("on" + evType, fn);
			return r;
		} else {
			alert("Handler could not be removed");
		}
	}
}

EditableSelect.addEvent(window, 'load', EditableSelect.activateAll);