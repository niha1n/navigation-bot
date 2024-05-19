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
        "yaw": -1.4463187719534716,
        "pitch": -0.08874202131298858,
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
          "yaw": 1.585616797225697,
          "pitch": 0.47331994443617376,
          "rotation": 0.7853981633974483,
          "target": "0-reception"
        },
        {
          "yaw": -2.4549344988202506,
          "pitch": 0.2560952268508139,
          "rotation": 4.71238898038469,
          "target": "0-reception"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.3873400218912284,
          "pitch": 0.08779146198386023,
          "title": "Go Back",
          "text": "Text"
        }
      ]
    }
  ],
  "name": "office",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
