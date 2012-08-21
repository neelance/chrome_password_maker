profile =
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

generatePassword = ->
  $("#passwdGenerated").val(makePassword($("#passwdUrl").val(), $("#passwdMaster").val(),
    profile.username, profile.hashAlgorithm, profile.whereToUseL33t, profile.l33tLevel,
    profile.passwordLength, profile.passwordPrefix, profile.passwordSuffix,
    profile.charset, profile.counterOffset))

populateURL = ->
  $("#passwdUrl").val filterUrl($("#preUrl").val())
  generatePassword()

$("#preUrl").bind "input", populateURL
$("#passwdMaster").bind "input", generatePassword
$("#passwdUrl").bind "input", generatePassword

chrome.tabs.getSelected null, (tab) ->
  $("#preUrl").val tab.url
  populateURL()

$(window).bind "focus", ->
  $("#passwdMaster").focus()
