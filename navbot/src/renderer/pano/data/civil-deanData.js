var APP_DATA = {
  "scenes": [
    {
      "id": "0-panorama-reception",
      "name": "panorama reception",
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
        "yaw": 1.749242865120225,
        "pitch": 0,
        "fov": 1.2988261968502064
      },
      "linkHotspots": [
        {
          "yaw": 1.7312411104238494,
          "pitch": 0.2495038901702351,
          "rotation": 1.5707963267948966,
          "target": "1-reception-right"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-reception-right",
      "name": "reception right",
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
        "yaw": -1.1614351976659982,
        "pitch": -0.01472592059920963,
        "fov": 1.2988261968502064
      },
      "linkHotspots": [
        {
          "yaw": -1.4292355421678202,
          "pitch": 0.24539067765145361,
          "rotation": 0,
          "target": "2-reception-right-towards-lib"
        },
        {
          "yaw": 1.8167320941205212,
          "pitch": 0.31701695642648,
          "rotation": 0,
          "target": "0-panorama-reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-reception-right-towards-lib",
      "name": "reception right towards lib",
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
        "yaw": -0.9501659500441928,
        "pitch": 0.10206825327520264,
        "fov": 1.2988261968502064
      },
      "linkHotspots": [
        {
          "yaw": -0.9208321866418103,
          "pitch": 0.2458521478039728,
          "rotation": 10.995574287564278,
          "target": "3-library-entrance"
        },
        {
          "yaw": 2.2084037591659067,
          "pitch": 0.4163568974623928,
          "rotation": 0,
          "target": "1-reception-right"
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
        "yaw": 3.0626229735240447,
        "pitch": 0.09145693336600758,
        "fov": 1.2988261968502064
      },
      "linkHotspots": [
        {
          "yaw": 2.812318662327307,
          "pitch": 0.3011964889671628,
          "rotation": 0,
          "target": "4-eee-entrance"
        },
        {
          "yaw": 1.3303772807445782,
          "pitch": 0.28765741379865517,
          "rotation": 0,
          "target": "2-reception-right-towards-lib"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.8943996340927818,
          "pitch": 0.050071691878544655,
          "title": "Library",
          "text": "Text"
        }
      ]
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
        "yaw": -1.6720961477532388,
        "pitch": 0.04712294591745447,
        "fov": 1.2988261968502064
      },
      "linkHotspots": [
        {
          "yaw": -1.2583145075265438,
          "pitch": 0.3702416752789315,
          "rotation": 0.7853981633974483,
          "target": "5-img_6353"
        },
        {
          "yaw": 1.2077851201146377,
          "pitch": 0.1314690751489298,
          "rotation": 0,
          "target": "3-library-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-img_6353",
      "name": "IMG_6353",
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
        "yaw": 0.6627201673991525,
        "pitch": -0.03771155523459768,
        "fov": 1.2988261968502064
      },
      "linkHotspots": [
        {
          "yaw": 0.6456850856001353,
          "pitch": 0.25332421498078617,
          "rotation": 0,
          "target": "6-img_6352"
        },
        {
          "yaw": -2.688019974775406,
          "pitch": 0.33674392591577984,
          "rotation": 5.497787143782138,
          "target": "4-eee-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-img_6352",
      "name": "IMG_6352",
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
        "yaw": 1.0742622990406456,
        "pitch": -0.05895106668858574,
        "fov": 1.2988261968502064
      },
      "linkHotspots": [
        {
          "yaw": 1.1266980177043209,
          "pitch": 0.24140005555562105,
          "rotation": 0,
          "target": "7-civil-entrance"
        },
        {
          "yaw": -1.9058741154583956,
          "pitch": 0.356789880670231,
          "rotation": 0,
          "target": "5-img_6353"
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
        "yaw": -0.41251286498732753,
        "pitch": 0.047570099550220846,
        "fov": 1.2988261968502064
      },
      "linkHotspots": [
        {
          "yaw": -1.7353493844169918,
          "pitch": 0.3112613985236141,
          "rotation": 0,
          "target": "6-img_6352"
        },
        {
          "yaw": -0.06632570513049352,
          "pitch": 0.31778414731182636,
          "rotation": 0,
          "target": "8-img_6350"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-img_6350",
      "name": "IMG_6350",
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
        "yaw": -1.7651686761081855,
        "pitch": -0.0543774200457392,
        "fov": 1.2988261968502064
      },
      "linkHotspots": [
        {
          "yaw": -0.28119652826534036,
          "pitch": 0.31225447287431507,
          "rotation": 0,
          "target": "7-civil-entrance"
        },
        {
          "yaw": -1.8125759584846932,
          "pitch": 0.4456397303130526,
          "rotation": 6.283185307179586,
          "target": "9-img_6349"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-img_6349",
      "name": "IMG_6349",
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
        "yaw": 0.5306155769899128,
        "pitch": 0.029451970798415772,
        "fov": 1.2988261968502064
      },
      "linkHotspots": [
        {
          "yaw": -2.555220904449097,
          "pitch": 0.5149011278359019,
          "rotation": 0,
          "target": "8-img_6350"
        },
        {
          "yaw": 0.3684301803191605,
          "pitch": 0.3230884798603668,
          "rotation": 0,
          "target": "10-img_6347"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.3802025494502388,
          "pitch": 0.015889871715531356,
          "title": "VISWESWARAYA HALL",
          "text": "Text"
        }
      ]
    },
    {
      "id": "10-img_6347",
      "name": "IMG_6347",
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
        "yaw": -0.8836121518283182,
        "pitch": -0.04890184819677934,
        "fov": 1.2988261968502064
      },
      "linkHotspots": [
        {
          "yaw": 2.3736476343531336,
          "pitch": 0.3007874937971309,
          "rotation": 0,
          "target": "9-img_6349"
        },
        {
          "yaw": -0.8772761383486536,
          "pitch": 0.34258880924243407,
          "rotation": 0,
          "target": "11-img_6343"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.5017384581369644,
          "pitch": -0.09987908273867596,
          "title": "Civil Drawing hall",
          "text": "Text"
        }
      ]
    },
    {
      "id": "11-img_6343",
      "name": "IMG_6343",
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
        "yaw": -2.314413735953975,
        "pitch": -0.009635040136622308,
        "fov": 1.2988261968502064
      },
      "linkHotspots": [
        {
          "yaw": -2.461159776394968,
          "pitch": 0.2631808352882352,
          "rotation": 0,
          "target": "12-img_6345"
        },
        {
          "yaw": 0.8191467399659356,
          "pitch": 0.2712661677259618,
          "rotation": 0,
          "target": "10-img_6347"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-img_6345",
      "name": "IMG_6345",
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
        "yaw": -0.843171485039111,
        "pitch": -0.08246585492291736,
        "fov": 1.2988261968502064
      },
      "linkHotspots": [
        {
          "yaw": -0.8413353675850281,
          "pitch": 0.26178045702517494,
          "rotation": 0,
          "target": "13-img_6346"
        },
        {
          "yaw": 0.8090443626045598,
          "pitch": 0.3163342387714039,
          "rotation": 0,
          "target": "11-img_6343"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-img_6346",
      "name": "IMG_6346",
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
        "yaw": 2.8739609563186317,
        "pitch": -0.03350709785448913,
        "fov": 1.2988261968502064
      },
      "linkHotspots": [
        {
          "yaw": -0.86746611262169,
          "pitch": 0.2250627824880027,
          "rotation": 0,
          "target": "12-img_6345"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.894322028492187,
          "pitch": -0.08354740679992645,
          "title": "Dean room",
          "text": "Text"
        }
      ]
    }
  ],
  "name": "CIVIL Dean",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
