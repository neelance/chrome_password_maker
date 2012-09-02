# PasswordMaker - Creates and manages passwords
# Copyright (C) 2005 Eric H. Jung and LeahScape, Inc.
# Chrome Version by Richard Musiol
# http://passwordmaker.org/
# This library is free software you can redistribute it and/or modify it
# under the terms of the GNU Lesser General Public License as published by
# the Free Software Foundation either version 2.1 of the License, or (at
# your option) any later version.
# This library is distributed in the hope that it will be useful, but WITHOUT
# ANY WARRANTY without even the implied warranty of MERCHANTABILITY or
# FITNESSFOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License
# for more details.
# You should have received a copy of the GNU Lesser General Public License
# along with this library if not, write to the Free Software Foundation,
# Inc., 59 Temple Place, Suite 330, Boston, MA 02111-1307 USA

# inline images to avoid https warning
icon_e = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9kMEA8UMRggzYsAAAMbSURBVDjLbZNtTFN3FMZ/9/b2DdsKV2CzIiiUWBHUYITNucg06lzUqDMQk1WzIB+WuCWLmmUvbjrGJGzJNjOyl2xGExI/GF2UJaKJG0qYonNTjFaFBZVhow5pi720t733vy/XjBHP5/PLeZ6T55F4+tiBNMDXzfN2lkz1tExRHZw4G+NGz30OnR2SnixKT4FlwHy7fnpVzYK8nq7uOLFBg2Cxm8Urczn88z2uXktw8nJEAmy2CbAEiMadlW82bas+WjQpQ6U/RkCVGOhL0/37KME5Xvr7Nar8kuiNpDqViZcPtL4kVi4NEXuskIj/Ta5/CId8ivbe5O4rA3pXlSf7tBAG2ZOz9lz95dt9ynj4ra3lO8qLqnFEZVIij7zlITqONb6/trbvC2AMoDE/gM+ncG9EYyQpliqAAmTq1hcvKXE5PisQcXAVkFO2jI/2vLtq76fNHZY1+5a6QMBnwjNOBW+hnYSWyZEBE8hqbijtLJLjGKMPUOcv4oNd79VYsGIpTG/fEryeTMoU+ifx3Nwcsh3ybRkwWz95saEo34tLMjAVwZG2lm0tLXvPWLAJGLUbSoMVC+dg95ZSPNUkbUg8vzbULQPOxUHXl5f+GODyoKC3L8LG0O5W66oBCMD21ed1YTFlE+4siek2SAoNICkPDX+38fu2O3Se+gfDVPix/eaqcY8VgLhy8cPMszM3o93V0Pv7cOa7OBEemQVIivQ43vZgREeY4PakOXp+uOvJYwF775/f6BXzVjMWdZOK/Mbk7BRhr3vXweOjtwBFVgvg1eV5pBMGF/+KAySAzOv1lQvvD+7QK+YvQxu2oQ3cwDncyVhA5pXQuSZLYUa5Ho4vqVnnORMby8V5V2XNazPXLQpO+6m6YBSBSlovRX8UxvHwCLbCQcrmXvBZ1v7rQtP2MjHN5SaFQUB1Uq4+JIMH9YWt6JqEL36Ba5FblNf1eCyF/8u+DTA3r5hhOqIa+T4nm152oc5wYVf96Mko7eej9W98fHP/+L5MbKMEiH31s2sWzFZ/vRR+RElxDgnF11D7TscP1o7NyoQYr+BfNwQwlc1KsPsAAAAASUVORK5CYII=)"
icon_d = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9oBBhAPChwRtSQAAAMBSURBVDjLbZNPSGNXGMXPvbnJyzOJTF/k+QdCBMVO405Sl84w5S1mJ9KNS2lRhEo37aoMt3cW3XTRMtCdioiuDEFw4UB8sZhVs3EhtigEqggxxoQYXtL3z3dnM4FU5qy+xfnxfZyPA3xCnPNwb97f3/+xUCjIk5MTmcvl5Pr6uuz3kk/AVAgRbG9vz+q6/lej0YDneUgkEhgaGsLNzQ3a7TZWV1cJ5zxEnsBECCFzudxaJpN5Z9s2LMuCbdtotVpwHAeDg4OoVqsghPCVlZW39MlmeXh4KLPZ7LtEIoF4PA5d16GqKjzP+/nh4eErxhiklFAURVQqlWes/+zd3d0fRkdHQSkFYwwTExM4PT396ejo6DchxH8AYJomwuEwbNuG7/uvKOecCSGCjY2NF7FY7NdQKARFUaDrOorF4utsNvsLAJtzHt7a2vqCMQZFURCPx+H7/mcUQMA5H5ienv6TMQbXdZFMJlEsFl8ahvGec84AUCGENzU19XcQBBgYGICmaWCM/UsA4ODg4Pvx8fHfr6+vMTw8jCAIvpudnf3jIxwIIYLNzc3nc3Nz/zSbTdTrdQBAuVxWCedcMQzDdl0X9XodmqbBMAzCOacAej+ni4uL/tjYGC4vL9FqtWBZFubn5wlbWlr6ulQqIRKJAAAqlcrrHiSE8AHg7OzMT6VSsG0b3W4XjDHc3d19zjkn1PO8HcdxYNs2XNdFtVotfQzW55yHLy4u5OTkJCil6HQ6oJTC87w3y8vLlwBC5OrqSp6fn6NWq8GyLKytrREA2NnZ+XJmZqacTqdBCEGn00GtVkOz2YRpmhQAEUIEtN1uv0gmk9A0DZqmIZ/Pz5dKJZnJZMqqqiIajcJ1XTQaDTiOA9M0B4UQspcPAYC9vT2pqioeHx8Ri8UQiURAKUUqlYKUEt1uF/f39zBNMy6E6PyvTJzzEIAgnU4HUkpEo1GMjIwgEokgGo3C8zzc3t5+s7CwsNnfl6cNJACQz+dfHh8fy3w+LwuFgiwUCt/2eUI9X78+ADancwD8pkrXAAAAAElFTkSuQmCC)"

processedInputs = []

processInput = (oldInput) ->
  return if oldInput.get(0) in processedInputs
  newInput = $(document.createElement("input"))
  processedInputs.push oldInput.get(0), newInput.get(0)
  
  newId = "passwordMaker" + Math.random()
  newInput.attr "name", ""
  newInput.attr "id", newId
  newInput.attr "type", "password"
  newInput.attr "tabindex", oldInput.attr("tabindex")
  newInput.css "background-position", "right center"
  newInput.css "background-repeat", "no-repeat"

  copyAttributes = ->
    for attrName in ["size", "maxlength", "tabindex", "placeholder"]
      newInput.attr attrName, oldInput.attr(attrName)
    sourceStyle = window.getComputedStyle oldInput.get(0)
    targetStyle = newInput.get(0).style
    for i in [0...sourceStyle.length]
      name = sourceStyle.item i
      unless name in ["display", "background-position", "background-repeat", "background-image"]
        unless name[0...6] is "border" and sourceStyle.getPropertyValue("border-style") is "inset" # workaround
          targetStyle.setProperty name, sourceStyle.getPropertyValue(name)
  copyAttributes()
  
  # we have to be extremely careful here that the observer can be garbage collected
  # or else it will keep a reference to the document after the user has left the page
  (->
    observer = new WebKitMutationObserver copyAttributes
    observer.observe oldInput.get(0), attributes: true, subtree: false
    for parent in oldInput.parents()
      observer.observe parent, attributes: true, subtree: false
    $(window).on "beforeunload", ->
      observer.disconnect()
      $(window).off "beforeunload"
      null
  )()
  
  enabled = true
  setEnabled = (value) ->
    enabled = value
    newInput.css "background-image", if enabled then icon_e else icon_d
    newInput.triggerHandler "input"
  setEnabled oldInput.val() is ""

  oldInput.attr "tabIndex", null
  oldInput.css "display", "none"
  $("label[for=" + oldInput.attr("id") + "]").attr "for", newId
  newInput.insertAfter oldInput

  oldInput.on "change", ->
    if oldInput.val() isnt "" and newInput.val() is ""
      newInput.val oldInput.val()
      setEnabled false
    
  newInput.on "mousemove", (event) ->
    $(@).css "cursor", if $(@).innerWidth() - event.offsetX < 16 then "pointer" else "auto"
  
  newInput.on "mousedown", (event) ->
    if newInput.innerWidth() - event.offsetX < 16
      setEnabled not enabled
      event.preventDefault()

  newInput.on "keydown", (event) ->
    if event.ctrlKey and event.keyCode is 80
      setEnabled not enabled
      event.preventDefault()
  
  newInput.on "focus blur", (origEvent) ->
    event = document.createEvent "Event"
    event.initEvent origEvent.type, true, true
    oldInput.get(0).dispatchEvent event
  
  newInput.on "input", (event) ->
    oldInput.val if newInput.val() is ""
      ""
    else if enabled
      makePassword(
        filterUrl(window.location.href),
        newInput.val(),
        "",
        "md5",
        "off",
        "1",
        "8",
        "",
        "",
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`~!@#$%^&*()_-+={}|[]\\:\";'<>?,./",
        ""
      )
    else
      newInput.val()

for inputElement in $('input[type=password]')
  processInput $(inputElement)

processing = false
$(document).on "DOMNodeInserted", (event) ->
  if event.target.tagName is "INPUT" and event.target.type is "password" and not processing
    processing = true
    processInput $(event.target)
    processing = false
