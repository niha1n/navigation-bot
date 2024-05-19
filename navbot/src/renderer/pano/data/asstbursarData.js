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
        "yaw": -1.349199664478073,
        "pitch": -0.08071086701924202,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": -1.8069973459305562,
          "pitch": 0.2985741925318184,
          "rotation": 0,
          "target": "2-principal1"
        },
        {
          "yaw": 1.585616797225697,
          "pitch": 0.47331994443617376,
          "rotation": 0.7853981633974483,
          "target": "0-reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-principal1",
      "name": "principal1",
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
        "yaw": -0.5607334405343583,
        "pitch": 0.019890610336741332,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": -0.7847723955339472,
          "pitch": 0.29788372043023514,
          "rotation": 0,
          "target": "3-asst-bursar"
        },
        {
          "yaw": 2.244465826512932,
          "pitch": 0.3848207641905361,
          "rotation": 0.7853981633974483,
          "target": "1-bursar"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-asst-bursar",
      "name": "asst bursar",
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
        "yaw": -1.352554187272304,
        "pitch": -0.05519375728348841,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": 1.6064407156664338,
          "pitch": 0.3507954154646171,
          "rotation": 0,
          "target": "2-principal1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "asstbursar",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
