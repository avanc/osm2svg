var overpass = {};

overpass.base_url = "https://overpass-api.de/api/interpreter?data=";
overpass.query_prefix = '[out:json][timeout:25];(';
overpass.query_suffix =  ');out;>;out skel qt;';  
overpass.area = "52.40021943419403, 10.158920288085938, 52.423726814004645, 10.202608108520508";

var ObjectCompare = function(object, path, data) {
  var pathparts=path.split(".");
  var current=object
  for (var i=0; i< pathparts.length; i++) {
    if (! current.hasOwnProperty(pathparts[i])) {
      return false;
    }
    current=current[pathparts[i]];
  }
  
  if (data !== undefined) {
    if (current!=data) {
      return false;
    }
  }
  
  return true;
}


overpass.query_streets = function(callback) {
  var query = overpass.base_url + overpass.query_prefix;
  query = query + 'way["highway"](' + overpass.area + ');'
  //query = query + 'node(r);'
  query = query + overpass.query_suffix
  
  if (typeof testdata=="undefined")
  {
    $.getJSON(query, function(json_data) {
      callback(json_data)
    });
  }
  else
  {
    callback(testdata)
  }
}
