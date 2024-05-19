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
        "yaw": -1.389173967383062,
        "pitch": -0.06859677785111096,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": -1.3954171507525608,
          "pitch": 0.3363085539748596,
          "rotation": 0,
          "target": "1-bursar"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-bursar",
      "name": "bursar",
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
        "yaw": -0.9663256274287964,
        "pitch": 0.014697312109952065,
        "fov": 1.4300641596566168
      },
      "linkHotspots": [
        {
          "yaw": 1.455588420017718,
          "pitch": 0.3292574568460225,
          "rotation": 0.7853981633974483,
          "target": "0-reception"
        },
        {
          "yaw": 2.940373596344572,
          "pitch": 0.1474586488388745,
          "rotation": 18.06415775814132,
          "target": "2-vice-principal"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.3141911081550361,
          "pitch": 0.02029978727024684,
          "title": "Go Back",
          "text": "Text"
        }
      ]
    },
    {
      "id": "2-vice-principal",
      "name": "vice principal",
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
        "yaw": -2.521717856213126,
        "pitch": 0.003551327961901052,
        "fov": 1.4300641596566168
      },
      "linkHotspots": [
        {
          "yaw": 1.7134670271205383,
          "pitch": 0.1124789778996842,
          "rotation": 4.71238898038469,
          "target": "1-bursar"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.7100868365895057,
          "pitch": -0.14615669558221,
          "title": "Go Back",
          "text": "Text"
        }
      ]
    }
  ],
  "name": "vice",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
