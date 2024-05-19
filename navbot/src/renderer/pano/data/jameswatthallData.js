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
          "yaw": 2.0718149678154516,
          "pitch": 0.29195193332322233,
          "rotation": 0,
          "target": "6-mech-entrance"
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
      "id": "6-mech-entrance",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.27052773294321675,
          "pitch": 0.2751087404213042,
          "rotation": 0,
          "target": "7-mech1"
        },
        {
          "yaw": 2.8966880414580958,
          "pitch": 0.3733196142291533,
          "rotation": 0,
          "target": "5-backgate-left"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-mech1",
      "name": "mech1",
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
        "yaw": 0.5623821054836462,
        "pitch": -0.018866281789652106,
        "fov": 1.4300641596566168
      },
      "linkHotspots": [
        {
          "yaw": 0.3886268606603096,
          "pitch": 0.24792876177879108,
          "rotation": 0,
          "target": "8-mech3"
        },
        {
          "yaw": 1.9991577037060955,
          "pitch": 0.29932187473432137,
          "rotation": 0,
          "target": "6-mech-entrance"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.007796079965681,
          "pitch": 0.41262491738195806,
          "title": "Go Back",
          "text": "Text"
        }
      ]
    },
    {
      "id": "8-mech3",
      "name": "mech3",
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
        "yaw": 1.2941064486715739,
        "pitch": -0.009833133704798769,
        "fov": 1.4300641596566168
      },
      "linkHotspots": [
        {
          "yaw": 1.2167759970284049,
          "pitch": 0.4090014041720025,
          "rotation": 0,
          "target": "9-hodme"
        },
        {
          "yaw": -0.1741798296574224,
          "pitch": 0.23807165016754972,
          "rotation": 0,
          "target": "7-mech1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.0010488585326537958,
          "pitch": 0.1801679974966035,
          "title": "Go Back",
          "text": "Text"
        }
      ]
    },
    {
      "id": "9-hodme",
      "name": "hodme",
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
        "yaw": 2.0991963554782878,
        "pitch": -0.06786058723833577,
        "fov": 1.4162490637232499
      },
      "linkHotspots": [
        {
          "yaw": 2.2345434795886074,
          "pitch": 0.024264090997160537,
          "rotation": 1.5707963267948966,
          "target": "8-mech3"
        },
        {
          "yaw": 2.036829438467403,
          "pitch": 0.2475688898899442,
          "rotation": 0,
          "target": "10-me-upstairs"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.2897801087589116,
          "pitch": -0.013268715793364194,
          "title": "HoD ME",
          "text": "Text"
        },
        {
          "yaw": 2.2362457293719498,
          "pitch": -0.07250416583420716,
          "title": "Go Back",
          "text": "Text"
        },
        {
          "yaw": 1.7298610662338483,
          "pitch": -0.3083126040793438,
          "title": "James Watt Hall is Upstairs",
          "text": "Text"
        }
      ]
    },
    {
      "id": "10-me-upstairs",
      "name": "ME upstairs",
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
        "yaw": -2.016824913415661,
        "pitch": -0.23205388825655504,
        "fov": 1.4300641596566168
      },
      "linkHotspots": [
        {
          "yaw": -1.9836632322877534,
          "pitch": 0.41561149219286797,
          "rotation": 0,
          "target": "11-me-upstairs-balcony"
        },
        {
          "yaw": -2.9443339896033542,
          "pitch": 0.4184882480576988,
          "rotation": 0,
          "target": "9-hodme"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -3.0697452232315623,
          "pitch": 0.23045944704880128,
          "title": "Go Back",
          "text": "Text"
        }
      ]
    },
    {
      "id": "11-me-upstairs-balcony",
      "name": "ME upstairs balcony",
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
        "yaw": 0.243792022500795,
        "pitch": 0.016979653610698975,
        "fov": 1.4300641596566168
      },
      "linkHotspots": [
        {
          "yaw": 2.0168479339487675,
          "pitch": 0.5898899559960338,
          "rotation": 0,
          "target": "10-me-upstairs"
        },
        {
          "yaw": 0.15759542645348823,
          "pitch": 0.34783064365348615,
          "rotation": 0,
          "target": "12-james-watt-hall"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.149049840474774,
          "pitch": 0.2414925919468125,
          "title": "Go Back",
          "text": "Text"
        }
      ]
    },
    {
      "id": "12-james-watt-hall",
      "name": "James Watt Hall",
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
        "yaw": -1.3513722976811344,
        "pitch": -0.10659022546843033,
        "fov": 1.4300641596566168
      },
      "linkHotspots": [
        {
          "yaw": 0.8488559499268451,
          "pitch": 0.3948984915206566,
          "rotation": 0,
          "target": "11-me-upstairs-balcony"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "k",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
