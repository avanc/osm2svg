var Projection = function(bbox, size) {
  this.projection = proj4("WGS84", "EPSG:3857");
  this.bbox=bbox;
  this.size=size;
  this.merc_bbox=[this.projection.forward(wgs_bbox[0]), this.projection.forward(wgs_bbox[1])];

  var scalefactor1=(this.merc_bbox[1][0]-this.merc_bbox[0][0])/this.size[1];
  var scalefactor2=(this.merc_bbox[1][1]-this.merc_bbox[0][1])/this.size[0];
  this.scale = (scalefactor1 > scalefactor2) ? scalefactor1 : scalefactor2;
}

Projection.prototype.convert = function(latlon) {
  var xy=this.projection.forward(latlon);
  var dxy=[(xy[0]-this.merc_bbox[0][0])/this.scale, (xy[1]-this.merc_bbox[0][1])/this.scale];
  dxy=[dxy[1], this.size[1]-dxy[0]]
  return dxy;
}
