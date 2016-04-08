var icon_e = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9kMEA8UMRggzYsAAAMbSURBVDjLbZNtTFN3FMZ/9/b2DdsKV2CzIiiUWBHUYITNucg06lzUqDMQk1WzIB+WuCWLmmUvbjrGJGzJNjOyl2xGExI/GF2UJaKJG0qYonNTjFaFBZVhow5pi720t733vy/XjBHP5/PLeZ6T55F4+tiBNMDXzfN2lkz1tExRHZw4G+NGz30OnR2SnixKT4FlwHy7fnpVzYK8nq7uOLFBg2Cxm8Urczn88z2uXktw8nJEAmy2CbAEiMadlW82bas+WjQpQ6U/RkCVGOhL0/37KME5Xvr7Nar8kuiNpDqViZcPtL4kVi4NEXuskIj/Ta5/CId8ivbe5O4rA3pXlSf7tBAG2ZOz9lz95dt9ynj4ra3lO8qLqnFEZVIij7zlITqONb6/trbvC2AMoDE/gM+ncG9EYyQpliqAAmTq1hcvKXE5PisQcXAVkFO2jI/2vLtq76fNHZY1+5a6QMBnwjNOBW+hnYSWyZEBE8hqbijtLJLjGKMPUOcv4oNd79VYsGIpTG/fEryeTMoU+ifx3Nwcsh3ybRkwWz95saEo34tLMjAVwZG2lm0tLXvPWLAJGLUbSoMVC+dg95ZSPNUkbUg8vzbULQPOxUHXl5f+GODyoKC3L8LG0O5W66oBCMD21ed1YTFlE+4siek2SAoNICkPDX+38fu2O3Se+gfDVPix/eaqcY8VgLhy8cPMszM3o93V0Pv7cOa7OBEemQVIivQ43vZgREeY4PakOXp+uOvJYwF775/f6BXzVjMWdZOK/Mbk7BRhr3vXweOjtwBFVgvg1eV5pBMGF/+KAySAzOv1lQvvD+7QK+YvQxu2oQ3cwDncyVhA5pXQuSZLYUa5Ho4vqVnnORMby8V5V2XNazPXLQpO+6m6YBSBSlovRX8UxvHwCLbCQcrmXvBZ1v7rQtP2MjHN5SaFQUB1Uq4+JIMH9YWt6JqEL36Ba5FblNf1eCyF/8u+DTA3r5hhOqIa+T4nm152oc5wYVf96Mko7eej9W98fHP/+L5MbKMEiH31s2sWzFZ/vRR+RElxDgnF11D7TscP1o7NyoQYr+BfNwQwlc1KsPsAAAAASUVORK5CYII=)";

var icon_d = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9oBBhAPChwRtSQAAAMBSURBVDjLbZNPSGNXGMXPvbnJyzOJTF/k+QdCBMVO405Sl84w5S1mJ9KNS2lRhEo37aoMt3cW3XTRMtCdioiuDEFw4UB8sZhVs3EhtigEqggxxoQYXtL3z3dnM4FU5qy+xfnxfZyPA3xCnPNwb97f3/+xUCjIk5MTmcvl5Pr6uuz3kk/AVAgRbG9vz+q6/lej0YDneUgkEhgaGsLNzQ3a7TZWV1cJ5zxEnsBECCFzudxaJpN5Z9s2LMuCbdtotVpwHAeDg4OoVqsghPCVlZW39MlmeXh4KLPZ7LtEIoF4PA5d16GqKjzP+/nh4eErxhiklFAURVQqlWes/+zd3d0fRkdHQSkFYwwTExM4PT396ejo6DchxH8AYJomwuEwbNuG7/uvKOecCSGCjY2NF7FY7NdQKARFUaDrOorF4utsNvsLAJtzHt7a2vqCMQZFURCPx+H7/mcUQMA5H5ienv6TMQbXdZFMJlEsFl8ahvGec84AUCGENzU19XcQBBgYGICmaWCM/UsA4ODg4Pvx8fHfr6+vMTw8jCAIvpudnf3jIxwIIYLNzc3nc3Nz/zSbTdTrdQBAuVxWCedcMQzDdl0X9XodmqbBMAzCOacAej+ni4uL/tjYGC4vL9FqtWBZFubn5wlbWlr6ulQqIRKJAAAqlcrrHiSE8AHg7OzMT6VSsG0b3W4XjDHc3d19zjkn1PO8HcdxYNs2XNdFtVotfQzW55yHLy4u5OTkJCil6HQ6oJTC87w3y8vLlwBC5OrqSp6fn6NWq8GyLKytrREA2NnZ+XJmZqacTqdBCEGn00GtVkOz2YRpmhQAEUIEtN1uv0gmk9A0DZqmIZ/Pz5dKJZnJZMqqqiIajcJ1XTQaDTiOA9M0B4UQspcPAYC9vT2pqioeHx8Ri8UQiURAKUUqlYKUEt1uF/f39zBNMy6E6PyvTJzzEIAgnU4HUkpEo1GMjIwgEokgGo3C8zzc3t5+s7CwsNnfl6cNJACQz+dfHh8fy3w+LwuFgiwUCt/2eUI9X78+ADancwD8pkrXAAAAAElFTkSuQmCC)";

var processedInputs = [];

var processInput = function(oldInput) {
	if (processedInputs.includes(oldInput)) {
		return;
	}
	
	var newInput = document.createElement("input");
	processedInputs.push(oldInput, newInput);
	newInput.type = "password";
	newInput.id = "passwordMaker" + Math.random();
	newInput.tabIndex = oldInput.tabIndex;
	newInput.size = oldInput.size;
	newInput.maxLength = oldInput.maxLength;
	newInput.placeholder = oldInput.placeholder;

	var sourceStyle = window.getComputedStyle(oldInput);
	newInput.style.width = sourceStyle.width;
	newInput.style.height = sourceStyle.height;
	newInput.style.backgroundPosition = "right center";
	newInput.style.backgroundRepeat = "no-repeat";

	var copyStyle = function() {
		var sourceStyle = window.getComputedStyle(oldInput);
		var targetStyle = newInput.style;
		for (var i = 0; i < sourceStyle.length; i++) {
			var name = sourceStyle.item(i);
			if (!["opacity", "position", "width", "height"].includes(name) && name.substr(0, 11) != "background-") {
				targetStyle.setProperty(name, sourceStyle.getPropertyValue(name));
			}
		}
	};
	copyStyle();
	var observer = new MutationObserver(copyStyle);
	var e = oldInput;
	while (e !== null) {
		observer.observe(e, { attributes: true });
		e = e.parentElement;
	}
	
	var simulateEvent = function(type) {
		var event = document.createEvent("Event");
		event.initEvent(type, true, true);
		oldInput.dispatchEvent(event);
	};
	
	var generate = function() {
		if (newInput.value === "") {
			oldInput.value = "";
			return;
		}
		if (!enabled) {
			oldInput.value = newInput.value;
			return;
		}
		oldInput.value = makePassword(filterUrl(window.location.href), newInput.value, "", "md5", "off", "1", "8", "", "", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`~!@#$%^&*()_-+={}|[]\\:\";'<>?,./", "");
		simulateEvent("input");
		simulateEvent("change");
	};
	
	var enabled = true;
	var setEnabled = function(value) {
		enabled = value;
		newInput.style.backgroundImage = enabled ? icon_e : icon_d;
		generate();
	};
	setEnabled(oldInput.value === "");
		
	oldInput.tabIndex = null;
	oldInput.style.opacity = 0;
	oldInput.style.position = "absolute";
	oldInput.style.width = 0;
	oldInput.style.height = 0;
	oldInput.addEventListener("change", function() {
		if (oldInput.value !== "" && newInput.value === "") {
			newInput.value = oldInput.value;
			setEnabled(false);
		}
	});
	oldInput.addEventListener("focus", function() {
		newInput.focus();
	});

	oldInput.parentElement.insertBefore(newInput, oldInput.nextSibling); // inserting before leads to subtle layout changes

	newInput.addEventListener("input", generate);
	newInput.addEventListener("mousemove", function(event) {
		newInput.style.cursor = event.offsetX > newInput.clientWidth - 16 ? "pointer" : "auto";
	});
	newInput.addEventListener("mousedown", function(event) {
		if (event.offsetX > newInput.clientWidth - 16) {
			setEnabled(!enabled);
			newInput.focus();
			event.preventDefault();
		}
	});
	newInput.addEventListener("keydown", function(event) {
		if (event.ctrlKey && event.keyCode === 80) {
			setEnabled(!enabled);
			event.preventDefault();
		}
	});
	
	var forwardEvent = function(origEvent) {
		simulateEvent(origEvent.type);
	};
	newInput.addEventListener("focus", forwardEvent);
	newInput.addEventListener("blur", forwardEvent);
	
	var label = document.querySelector("label[for=" + oldInput.id + "]");
	if (label !== null) {
		label.htmlFor = newInput.id;
	}
};

var lookForInputs = function(element) {
	var inputs = element.querySelectorAll('input[type=password]');
	for (var i = 0; i < inputs.length; i++) {
		processInput(inputs[i]);
	}
};
lookForInputs(document);

var observer = new MutationObserver(function(mutations) {
	mutations.forEach(function(mutation) {
		for (var i = 0; i < mutation.addedNodes.length; i++) {
			var node = mutation.addedNodes[i];
			if (node instanceof Element) {
				lookForInputs(node);				
			}
		}
	});    
});
observer.observe(document, { childList: true, subtree: true });
