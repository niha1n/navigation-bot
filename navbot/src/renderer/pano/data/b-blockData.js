var APP_DATA = {
  "scenes": [
    {
      "id": "0-reception",
      "name": "reception",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 2.2982899901168157,
        "pitch": -0.05142209045186519,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": 2.4764182325402118,
          "pitch": 0.3921776273302786,
          "rotation": 0,
          "target": "1-reception-right1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-reception-right1",
      "name": "reception right1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.3297585925736364,
        "pitch": -0.06444903578721295,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": -1.3327598601149084,
          "pitch": 0.31008478457159505,
          "rotation": 0,
          "target": "2-b-block"
        },
        {
          "yaw": 1.5855116498457544,
          "pitch": 0.47353953182157227,
          "rotation": 0,
          "target": "0-reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-b-block",
      "name": "B Block",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -2.2834443057039895,
        "pitch": -0.0018613439938519605,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": 1.4111454862272392,
          "pitch": 0.24613099391729065,
          "rotation": 1.5707963267948966,
          "target": "1-reception-right1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.550799898506172,
          "pitch": -0.6011304757176976,
          "title": "B Block",
          "text": "Text"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
