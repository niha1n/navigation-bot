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
        "yaw": -1.4385869561956142,
        "pitch": 0.03879487773307844,
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.15944314689759942,
        "pitch": -0.05263529647390186,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": 0.3624411011166373,
          "pitch": 0.29618619718436356,
          "rotation": 0,
          "target": "2-vice-principal"
        },
        {
          "yaw": 1.7575298077066028,
          "pitch": 0.09451872636381253,
          "rotation": 4.71238898038469,
          "target": "0-reception"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.7631802089825452,
          "pitch": -0.04054166488469768,
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
        "yaw": -1.5835863491334123,
        "pitch": -0.040123918435760686,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": -1.339954443494328,
          "pitch": 0.42338578891617473,
          "rotation": 0.7853981633974483,
          "target": "3-hodsh"
        },
        {
          "yaw": 1.7065846418147235,
          "pitch": 0.3010899994437821,
          "rotation": 5.497787143782138,
          "target": "1-bursar"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.822201550556775,
          "pitch": -0.0000503676244747453,
          "title": "Go Back",
          "text": "Text"
        }
      ]
    },
    {
      "id": "3-hodsh",
      "name": "hodSH",
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
        "yaw": 2.08165663303585,
        "pitch": 0.07225253077352889,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": -2.4773560924820615,
          "pitch": 0.47783299909388255,
          "rotation": 0,
          "target": "2-vice-principal"
        }
      ],
      "infoHotspots": []
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
