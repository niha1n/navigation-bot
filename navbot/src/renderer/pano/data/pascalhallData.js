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
        },
        {
          "yaw": -2.2923898948672434,
          "pitch": 0.3308646164851208,
          "rotation": 0,
          "target": "3-b1"
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
    },
    {
      "id": "3-b1",
      "name": "b1",
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
        "yaw": 1.2756933056606439,
        "pitch": -0.014542424005940191,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": 1.0297496325215114,
          "pitch": 0.46347152469426156,
          "rotation": 0,
          "target": "4-b2"
        },
        {
          "yaw": -1.6910104249251,
          "pitch": 0.33789153602473476,
          "rotation": 0,
          "target": "2-b-block"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-b2",
      "name": "b2",
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
        "yaw": -1.2068947330282018,
        "pitch": 0.12540805158595525,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": -1.133894746725403,
          "pitch": 0.41715629863511694,
          "rotation": 0,
          "target": "5-b3"
        },
        {
          "yaw": -2.696213236111639,
          "pitch": 0.33090257075242135,
          "rotation": 0,
          "target": "3-b1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.4051610103635515,
          "pitch": 0.28459303592162755,
          "title": "Go Back",
          "text": "Text"
        }
      ]
    },
    {
      "id": "5-b3",
      "name": "b3",
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
        "yaw": -2.3946795065806157,
        "pitch": -0.04327624785712203,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": -2.367529323486732,
          "pitch": 0.3652381637651221,
          "rotation": 0,
          "target": "6-hod-room-ece"
        },
        {
          "yaw": 0.8481458954836398,
          "pitch": 0.39813851617908114,
          "rotation": 0,
          "target": "4-b2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-hod-room-ece",
      "name": "HoD room ECE",
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
        "yaw": -1.8155475275097572,
        "pitch": 0.04281091185865371,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": -1.4528204653707828,
          "pitch": 0.43837647381653255,
          "rotation": 0,
          "target": "7-hodcse"
        },
        {
          "yaw": -0.26290618219715967,
          "pitch": 0.44838299524179703,
          "rotation": 0,
          "target": "5-b3"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.061566454303950024,
          "pitch": 0.5013042579900251,
          "title": "Go Back",
          "text": "Text"
        }
      ]
    },
    {
      "id": "7-hodcse",
      "name": "hodcse",
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
        "yaw": -1.4804478076229781,
        "pitch": 0.0005406510547967258,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": -2.7496885948495393,
          "pitch": 0.4741526342690925,
          "rotation": 18.84955592153877,
          "target": "6-hod-room-ece"
        },
        {
          "yaw": -1.9712886037526935,
          "pitch": 0.23386719916700827,
          "rotation": 18.06415775814132,
          "target": "8-pg"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.8866259120743436,
          "pitch": 0.12694688449271574,
          "title": "HoD CSE",
          "text": "Text"
        },
        {
          "yaw": -2.847525793767682,
          "pitch": 0.520444234004863,
          "title": "Go Back",
          "text": "Text"
        }
      ]
    },
    {
      "id": "8-pg",
      "name": "pg",
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
        "yaw": -0.9108010134809632,
        "pitch": -0.14714928609407352,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": -0.32618304680839394,
          "pitch": 0.47859169317314354,
          "rotation": 0.7853981633974483,
          "target": "7-hodcse"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.1560646343028793,
          "pitch": 0.07527176722340556,
          "title": "Pascal Hall",
          "text": "Text"
        }
      ]
    }
  ],
  "name": "faraday",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
