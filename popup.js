// Generated by CoffeeScript 1.3.3
(function() {
  var generatePassword, populateURL, profile;

  profile = {
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

  generatePassword = function() {
    return $("#passwdGenerated").val(makePassword($("#passwdUrl").val(), $("#passwdMaster").val(), profile.username, profile.hashAlgorithm, profile.whereToUseL33t, profile.l33tLevel, profile.passwordLength, profile.passwordPrefix, profile.passwordSuffix, profile.charset, profile.counterOffset));
  };

  populateURL = function() {
    $("#passwdUrl").val(filterUrl($("#preUrl").val()));
    return generatePassword();
  };

  $("#preUrl").bind("input", populateURL);

  $("#passwdMaster").bind("input", generatePassword);

  $("#passwdUrl").bind("input", generatePassword);

  chrome.tabs.getSelected(null, function(tab) {
    $("#preUrl").val(tab.url);
    return populateURL();
  });

  $(window).bind("focus", function() {
    return $("#passwdMaster").focus();
  });

}).call(this);
