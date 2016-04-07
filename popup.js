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
};

var generatePassword = function() {
	document.getElementById("passwdGenerated").value = makePassword(
		document.getElementById("passwdUrl").value,
		document.getElementById("passwdMaster").value,
		profile.username,
		profile.hashAlgorithm,
		profile.whereToUseL33t,
		profile.l33tLevel,
		profile.passwordLength,
		profile.passwordPrefix,
		profile.passwordSuffix,
		profile.charset,
		profile.counterOffset
	);
};

var populateURL = function() {
	document.getElementById("passwdUrl").value = filterUrl(document.getElementById("preUrl").value);
	generatePassword();
};

document.getElementById("preUrl").addEventListener("input", populateURL);
document.getElementById("passwdMaster").addEventListener("input", generatePassword);
document.getElementById("passwdUrl").addEventListener("input", generatePassword);

chrome.tabs.getSelected(null, function(tab) {
	document.getElementById("preUrl").value = tab.url;
	populateURL();
});

window.addEventListener("focus", function() {
	document.getElementById("passwdMaster").focus();
});
document.getElementById("passwdMaster").focus();
