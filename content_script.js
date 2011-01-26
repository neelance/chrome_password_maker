/*
PasswordMaker - Creates and manages passwords
Copyright (C) 2005 Eric H. Jung and LeahScape, Inc.
Chrome Version by Richard Musiol
http://passwordmaker.org/
This library is free software; you can redistribute it and/or modify it
under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation; either version 2.1 of the License, or (at
your option) any later version.
This library is distributed in the hope that it will be useful, but WITHOUT
ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
FITNESSFOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License
for more details.
You should have received a copy of the GNU Lesser General Public License
along with this library; if not, write to the Free Software Foundation,
Inc., 59 Temple Place, Suite 330, Boston, MA 02111-1307 USA
 */
var loaded;
if (!loaded) {
    loaded = true;
 
    // inline images to avoid https warning
    var icon_e = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9kMEA8UMRggzYsAAAMbSURBVDjLbZNtTFN3FMZ/9/b2DdsKV2CzIiiUWBHUYITNucg06lzUqDMQk1WzIB+WuCWLmmUvbjrGJGzJNjOyl2xGExI/GF2UJaKJG0qYonNTjFaFBZVhow5pi720t733vy/XjBHP5/PLeZ6T55F4+tiBNMDXzfN2lkz1tExRHZw4G+NGz30OnR2SnixKT4FlwHy7fnpVzYK8nq7uOLFBg2Cxm8Urczn88z2uXktw8nJEAmy2CbAEiMadlW82bas+WjQpQ6U/RkCVGOhL0/37KME5Xvr7Nar8kuiNpDqViZcPtL4kVi4NEXuskIj/Ta5/CId8ivbe5O4rA3pXlSf7tBAG2ZOz9lz95dt9ynj4ra3lO8qLqnFEZVIij7zlITqONb6/trbvC2AMoDE/gM+ncG9EYyQpliqAAmTq1hcvKXE5PisQcXAVkFO2jI/2vLtq76fNHZY1+5a6QMBnwjNOBW+hnYSWyZEBE8hqbijtLJLjGKMPUOcv4oNd79VYsGIpTG/fEryeTMoU+ifx3Nwcsh3ybRkwWz95saEo34tLMjAVwZG2lm0tLXvPWLAJGLUbSoMVC+dg95ZSPNUkbUg8vzbULQPOxUHXl5f+GODyoKC3L8LG0O5W66oBCMD21ed1YTFlE+4siek2SAoNICkPDX+38fu2O3Se+gfDVPix/eaqcY8VgLhy8cPMszM3o93V0Pv7cOa7OBEemQVIivQ43vZgREeY4PakOXp+uOvJYwF775/f6BXzVjMWdZOK/Mbk7BRhr3vXweOjtwBFVgvg1eV5pBMGF/+KAySAzOv1lQvvD+7QK+YvQxu2oQ3cwDncyVhA5pXQuSZLYUa5Ho4vqVnnORMby8V5V2XNazPXLQpO+6m6YBSBSlovRX8UxvHwCLbCQcrmXvBZ1v7rQtP2MjHN5SaFQUB1Uq4+JIMH9YWt6JqEL36Ba5FblNf1eCyF/8u+DTA3r5hhOqIa+T4nm152oc5wYVf96Mko7eej9W98fHP/+L5MbKMEiH31s2sWzFZ/vRR+RElxDgnF11D7TscP1o7NyoQYr+BfNwQwlc1KsPsAAAAASUVORK5CYII=)";
    var icon_d = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9oBBhAPChwRtSQAAAMBSURBVDjLbZNPSGNXGMXPvbnJyzOJTF/k+QdCBMVO405Sl84w5S1mJ9KNS2lRhEo37aoMt3cW3XTRMtCdioiuDEFw4UB8sZhVs3EhtigEqggxxoQYXtL3z3dnM4FU5qy+xfnxfZyPA3xCnPNwb97f3/+xUCjIk5MTmcvl5Pr6uuz3kk/AVAgRbG9vz+q6/lej0YDneUgkEhgaGsLNzQ3a7TZWV1cJ5zxEnsBECCFzudxaJpN5Z9s2LMuCbdtotVpwHAeDg4OoVqsghPCVlZW39MlmeXh4KLPZ7LtEIoF4PA5d16GqKjzP+/nh4eErxhiklFAURVQqlWes/+zd3d0fRkdHQSkFYwwTExM4PT396ejo6DchxH8AYJomwuEwbNuG7/uvKOecCSGCjY2NF7FY7NdQKARFUaDrOorF4utsNvsLAJtzHt7a2vqCMQZFURCPx+H7/mcUQMA5H5ienv6TMQbXdZFMJlEsFl8ahvGec84AUCGENzU19XcQBBgYGICmaWCM/UsA4ODg4Pvx8fHfr6+vMTw8jCAIvpudnf3jIxwIIYLNzc3nc3Nz/zSbTdTrdQBAuVxWCedcMQzDdl0X9XodmqbBMAzCOacAej+ni4uL/tjYGC4vL9FqtWBZFubn5wlbWlr6ulQqIRKJAAAqlcrrHiSE8AHg7OzMT6VSsG0b3W4XjDHc3d19zjkn1PO8HcdxYNs2XNdFtVotfQzW55yHLy4u5OTkJCil6HQ6oJTC87w3y8vLlwBC5OrqSp6fn6NWq8GyLKytrREA2NnZ+XJmZqacTqdBCEGn00GtVkOz2YRpmhQAEUIEtN1uv0gmk9A0DZqmIZ/Pz5dKJZnJZMqqqiIajcJ1XTQaDTiOA9M0B4UQspcPAYC9vT2pqioeHx8Ri8UQiURAKUUqlYKUEt1uF/f39zBNMy6E6PyvTJzzEIAgnU4HUkpEo1GMjIwgEokgGo3C8zzc3t5+s7CwsNnfl6cNJACQz+dfHh8fy3w+LwuFgiwUCt/2eUI9X78+ADancwD8pkrXAAAAAElFTkSuQmCC)";

    var processing = false;

    function passwordMakerProcessInputs(all) {
        if(processing) return;
        processing = true;
        
        $('input[type=password]' + (all ? '' : ':visible')).each(function(i, oldInput) {
            oldInput = $(oldInput);
            if(!oldInput.data("passwordMakerProcessed")) {
                oldInput.data("passwordMakerProcessed", true);

                var newInput = oldInput.clone(false);
                var newId = "passwordMaker" + Math.random();
                newInput.attr("name", "");
                newInput.attr("id", newId);
                newInput.data("passwordMakerProcessed", true);
                newInput.data("passwordMakerOldInput", oldInput);
                newInput.data("passwordMakerEnabled", oldInput.val() == "");
                newInput.css("background-image", newInput.data("passwordMakerEnabled") ? icon_e : icon_d);
                newInput.css("background-position", "right center");
                newInput.css("background-repeat", "no-repeat");
                newInput.insertAfter(oldInput);

                oldInput.css("display", "none");
                oldInput.data("passwordMakerNewInput", newInput);
                $("label[for=" + oldInput.attr("id") + "]").attr("for", newId);

                oldInput.change(function() {
                    oldInput = $(this);
                    newInput = oldInput.data("passwordMakerNewInput");
                    if(oldInput.val() != "" && newInput.val() == "") {
                        newInput.data("passwordMakerEnabled", false);
                        newInput.css("background-image", icon_d);
                        newInput.val(oldInput.val());
                    }
                });

                oldInput.bind("DOMSubtreeModified", function() { // DOMAttrModified is not available in Chrome
                    oldInput = $(this);
                    newInput = oldInput.data("passwordMakerNewInput");
                    newInput.attr("class", oldInput.attr("class"));
                });

                newInput.mousemove(function(event) {
                    $(this).css("cursor", ($(this).innerWidth() - event.offsetX < 16) ? "pointer" : "auto");
                });

                var toggle = function(event) {
                    newInput = $(this);
                    if ((event.type == "mousedown" && newInput.innerWidth() - event.offsetX < 16)
                        || (event.type == "keydown" && event.ctrlKey && event.keyCode == 80)) {
                        newInput.data("passwordMakerEnabled", !newInput.data("passwordMakerEnabled"));
                        newInput.css("background-image", newInput.data("passwordMakerEnabled") ? icon_e : icon_d);
                        newInput.change();
                        event.preventDefault();
                    }
                }
                newInput.mousedown(toggle);
                newInput.keydown(toggle);

                wrapEvent = function(name) {
                    newInput[name](function() {
                        oldInput = $(this).data("passwordMakerOldInput");
                        oldId = oldInput.attr("id");
                        oldInput.attr("id", "passwordMakerTempId");
                        evalInPageContext("\
                            element = document.getElementById('passwordMakerTempId');\n\
                            element.id = '" + oldId + "';\n\
                            var event = document.createEvent('Event');\n\
                            event.initEvent('" + name + "', true, true);\n\
                            element.dispatchEvent(event);\n\
                        ");
                    });
                };
                wrapEvent("focus");
                wrapEvent("blur");

                var changed = function(event) {
                    newInput = $(this);
                    oldInput = newInput.data("passwordMakerOldInput");
                    if(newInput.val() == "") {
                        oldInput.val("");
                    } else if (newInput.data("passwordMakerEnabled")) {
                        oldInput.val(makePassword(
                        filterUrl(window.location.href, false, false, true, false),
                        newInput.val(),
                        "",
                        "md5",
                        "off",
                        "1",
                        "8",
                        "",
                        "",
                        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`~!@#$%^&*()_-+={}|[]\\:\";'<>?,./",
                        ""));
                    } else {
                        oldInput.val(newInput.val());
                    }
                }

                newInput.keydown(changed);
                newInput.keyup(changed);
                newInput.change(changed);

                newInput.keydown(function() {
                    if(event.keyCode == 13 && !$(this).attr("form")) { // sometimes Chrome places the <input> outside of <form> to fix the layout
                        $(this).data("passwordMakerOldInput").attr("form").submit();
                        event.preventDefault();
                    }
                });
            }
        });

        processing = false;
    }

    function evalInPageContext(code) {
        processingBefore = processing
        processing = true
        script = $('<script type="text/javascript"></script>');
        script.html("(function () {" + code + "})();");
        script.appendTo('head');
        processing = processingBefore
    }

    $(document).bind("DOMNodeInserted", function() {passwordMakerProcessInputs(true);});
    $(":not(:visible):has(input[type=password])").bind("DOMSubtreeModified", function() {passwordMakerProcessInputs(false);});
    passwordMakerProcessInputs(false);
}
