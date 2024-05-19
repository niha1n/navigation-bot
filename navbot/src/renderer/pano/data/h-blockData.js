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
        "yaw": 1.7345418015347835,
        "pitch": 0.030419304933896996,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": 2.4988590762191762,
          "pitch": 0.36037401147122416,
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
        "yaw": -1.216160276655625,
        "pitch": -0.10493326765354993,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": -1.3571029460110395,
          "pitch": 0.3550587931234368,
          "rotation": 0,
          "target": "2-reception-right2"
        },
        {
          "yaw": 1.5881635650783705,
          "pitch": 0.4365170414735946,
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
        "yaw": -0.6647105023552857,
        "pitch": -0.12796739957749992,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": -0.8562230265358917,
          "pitch": 0.5294480834058284,
          "rotation": 0,
          "target": "3-library-entrance"
        },
        {
          "yaw": 2.2233973567090857,
          "pitch": 0.36502657168758645,
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
        "yaw": -0.18103149156323894,
        "pitch": -0.17147631543384279,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": -0.007449739747483974,
          "pitch": 0.1921946897804041,
          "rotation": 0,
          "target": "4-backgate"
        },
        {
          "yaw": 1.4878916052685618,
          "pitch": 0.15226478381969244,
          "rotation": 0,
          "target": "2-reception-right2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-backgate",
      "name": "backgate",
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
        "yaw": -0.8325433557990554,
        "pitch": -0.02765186988405688,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": -0.8242326534349118,
          "pitch": 0.36662602903989594,
          "rotation": 0,
          "target": "5-backgate-left"
        },
        {
          "yaw": -2.6212968854484835,
          "pitch": 0.517192751537447,
          "rotation": 0,
          "target": "3-library-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-backgate-left",
      "name": "backgate left",
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
        "yaw": 1.992540021425743,
        "pitch": -0.09469587568734994,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": 2.2252821765381086,
          "pitch": 0.3060030640049032,
          "rotation": 0,
          "target": "6-coe-office"
        },
        {
          "yaw": -0.7436112949620544,
          "pitch": 0.3543521441858388,
          "rotation": 0.7853981633974483,
          "target": "4-backgate"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-coe-office",
      "name": "COE office",
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
        "yaw": -2.5464066115403767,
        "pitch": 0.07709495482437667,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": 1.8704343147929734,
          "pitch": 0.44849930109950265,
          "rotation": 0,
          "target": "5-backgate-left"
        },
        {
          "yaw": -2.6194031100963358,
          "pitch": 0.3948014497610419,
          "rotation": 0,
          "target": "7-mech-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-mech-entrance",
      "name": "Mech entrance",
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
        "yaw": -0.14853865974419378,
        "pitch": -0.06388618265152601,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": 2.3739109778691994,
          "pitch": 0.4062704512600561,
          "rotation": 0,
          "target": "6-coe-office"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "H",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
