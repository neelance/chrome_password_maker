window.filterUrl = (str) ->
  uri = parseUri str
  parts = uri.host.split "."
  hasSLD = [""].concat(parts.slice(Math.max(parts.length - 2, 0))).join(".") in SLDs
  parts.slice(parts.length - (if hasSLD then 3 else 2)).join(".")
