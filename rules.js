var cycles = ["areas", "streets_bg", "streets_fg"];


var features = [
  {
    "name": "street",
    "filter": function(way){
      return (ObjectCompare(way, "type", "way") && ObjectCompare(way, "tags.highway"));  
    }
  },
  {
    "name": "tertiary",
    "filter": function(way){
      return (ObjectCompare(way, "type", "way") && ObjectCompare(way, "tags.highway", "secondary"));  
    }
  },
  {
    "name": "tertiary",
    "filter": function(way){
      return (ObjectCompare(way, "type", "way") && ObjectCompare(way, "tags.highway", "tertiary"));  
    }
  },
  {
    "name": "residential",
    "filter": function(way){
      return (ObjectCompare(way, "type", "way") && ObjectCompare(way, "tags.highway", "residential"));  
    }
  },
  {
    "name": "livingstreet",
    "filter": function(way){
      return (ObjectCompare(way, "type", "way") && ObjectCompare(way, "tags.highway", "living_street"));  
    }
  },
  {
    "name": "track",
    "filter": function(way){
      return (ObjectCompare(way, "type", "way") && ObjectCompare(way, "tags.highway", "cycleway"));  
    }
  },
  {
    "name": "track",
    "filter": function(way){
      return (ObjectCompare(way, "type", "way") && ObjectCompare(way, "tags.highway", "track"));  
    }
  },
  {
    "name": "track_bridge",
    "filter": function(way){
      return (ObjectCompare(way, "type", "way") && ObjectCompare(way, "tags.highway", "track") && ObjectCompare(way, "tags.bridge"));  
    }
  },
  {
    "name": "lake",
    "filter": function(way){
      return (ObjectCompare(way, "type", "way") && ObjectCompare(way, "tags.natural", "water"));  
    }
  },
  {
    "name": "river",
    "filter": function(way){
      return (ObjectCompare(way, "type", "way") && ObjectCompare(way, "tags.waterway", "river"));  
    }
  },

];

var rules = {
  "lake" : {
    "areas": {
      fill: "#0000ff",
      stroke: "none",
    }
  },
  "river" : {
    "streets_bg": {
      fill: "none",
      stroke: "#0000ff",
      "stroke-width": 5,
    }  
  },
  "track" : {
    "streets_bg": {
      fill: "none",
      stroke: "#ffffff",
      "stroke-width": 3,
      "stroke-linecap": "round",
      opacity: 0.3
    },
    "streets_fg": {
      fill: "none",
      stroke: "#F68474",
      "stroke-width": 2,
      "stroke-linecap": "round",
      "stroke-dasharray":"5,5"
    }
  },
  "track_bridge" : {
    "streets_bg": {
      fill: "none",
      stroke: "#000000",
      "stroke-width": 3,
      "stroke-linecap": "round",
      opacity: 1
    },
    "streets_fg": {
      fill: "none",
      stroke: "#F68474",
      "stroke-width": 2,
      "stroke-linecap": "round",
      "stroke-dasharray":"5,5"
    }
  },
  "livingstreet" : {
    "streets_bg": {
      fill: "none",
      stroke: "#aaaaaa",
      "stroke-linecap": "round",
      "stroke-width": 5
    },
    "streets_fg": {
      fill: "none",
      stroke: "#dddddd",
      "stroke-linecap": "round",
      "stroke-width": 3
    }
  },
  "residential" : {
    "streets_bg": {
      fill: "none",
      stroke: "#aaaaaa",
      "stroke-linecap": "round",
      "stroke-width": 5
    },
    "streets_fg": {
      fill: "none",
      stroke: "#ffffff",
      "stroke-linecap": "round",
      "stroke-width": 3
    }
  },
  "tertiary" : {
    "streets_bg": {
      fill: "none",
      stroke: "#cbcb8e",
      "stroke-linecap": "round",
      "stroke-width": 7
    },
    "streets_fg": {
      fill: "none",
      stroke: "#FEFEB2",
      "stroke-linecap": "round",
      "stroke-width": 5
    }
  },
  "street" : {
    "streets_fg": {
      fill: "none",
      stroke: "#000000",
      "stroke-linecap": "round",
      "stroke-width": 2
    }
  },
};
