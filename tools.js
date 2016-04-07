window.filterUrl = function(str) {
	var hasSLD, parts, uri, _ref;
	var uri = parseUri(str);
	var parts = uri.host.split(".");
	if (parts.length > 2 && SLDs.includes("." + parts.slice(parts.length - 2).join("."))) {
		return parts.slice(parts.length - 3).join(".");
	}
	return parts.slice(parts.length - 2).join(".");
};
