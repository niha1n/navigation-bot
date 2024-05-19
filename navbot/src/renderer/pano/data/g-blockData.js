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
        "yaw": 2.2552558864132557,
        "pitch": -0.025302875489863652,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": 2.459386092403051,
          "pitch": 0.31343433466268955,
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
        "yaw": -1.1493178797707344,
        "pitch": -0.0818991357296035,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": -1.291391262171496,
          "pitch": 0.3081794064890211,
          "rotation": 0,
          "target": "2-reception-right2"
        },
        {
          "yaw": 1.448563311554289,
          "pitch": 0.4489864541694413,
          "rotation": 0,
          "target": "0-reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-reception-right2",
      "name": "reception right2",
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
        "yaw": -0.7970429429693731,
        "pitch": -0.049654099696176957,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": -0.8150657911130725,
          "pitch": 0.3920512985198066,
          "rotation": 0,
          "target": "3-library-entrance"
        },
        {
          "yaw": 2.2029334578125352,
          "pitch": 0.38936430787844145,
          "rotation": 0,
          "target": "1-reception-right1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-library-entrance",
      "name": "library entrance",
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
        "yaw": 2.9911972605987955,
        "pitch": 0.0793397877380464,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": 3.0089546342012037,
          "pitch": 0.5296398967543965,
          "rotation": 0,
          "target": "4-eee-entrance"
        },
        {
          "yaw": 1.4184624840545919,
          "pitch": 0.3316272786300747,
          "rotation": 0,
          "target": "2-reception-right2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-eee-entrance",
      "name": "EEE entrance",
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
        "yaw": -1.108469748341081,
        "pitch": -0.00512581619092245,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": -1.1544055186488134,
          "pitch": 0.38490073429780836,
          "rotation": 0,
          "target": "5-eee-lab-1"
        },
        {
          "yaw": 1.1805226463011866,
          "pitch": 0.2425389039701038,
          "rotation": 0,
          "target": "3-library-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-eee-lab-1",
      "name": "eee lab 1",
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
        "yaw": 0.8021087626186763,
        "pitch": -0.13052674756904992,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": 0.676841446440962,
          "pitch": 0.28116671674683147,
          "rotation": 0,
          "target": "6-eee-lab-2"
        },
        {
          "yaw": -2.5549499014599153,
          "pitch": 0.39366184280059,
          "rotation": 5.497787143782138,
          "target": "4-eee-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-eee-lab-2",
      "name": "eee lab 2",
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
        "yaw": 1.2421545421108586,
        "pitch": -0.10237391966199283,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": 1.1198704745649888,
          "pitch": 0.31923877523407107,
          "rotation": 0,
          "target": "7-civil-entrance"
        },
        {
          "yaw": -1.9006933240933215,
          "pitch": 0.39123178830356053,
          "rotation": 0,
          "target": "5-eee-lab-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-civil-entrance",
      "name": "civil entrance",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.734104196208106,
          "pitch": 0.35992588237575873,
          "rotation": 0,
          "target": "6-eee-lab-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.01959736778081833,
          "pitch": -0.22970631701945798,
          "title": "G-Block",
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
