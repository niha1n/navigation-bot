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
        "yaw": 1.1418987851835212,
        "pitch": 0.22778197124794985,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": 1.0278606930759686,
          "pitch": 0.4703462804902969,
          "rotation": 0,
          "target": "1-reception-left"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-reception-left",
      "name": "reception left",
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
        "yaw": -1.6171000322314182,
        "pitch": -0.059073811267682075,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": -1.5306955450672,
          "pitch": 0.3412420495399573,
          "rotation": 0,
          "target": "2-1"
        },
        {
          "yaw": 1.5491715646641415,
          "pitch": 0.40712893799919314,
          "rotation": 0,
          "target": "0-reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-1",
      "name": "1",
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
        "yaw": -1.7563917243147742,
        "pitch": -0.16396553544997872,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": -1.7961115488247579,
          "pitch": 0.3028524038734872,
          "rotation": 0,
          "target": "3-2"
        },
        {
          "yaw": 0.9346989670497159,
          "pitch": 0.483763095969417,
          "rotation": 5.497787143782138,
          "target": "1-reception-left"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-2",
      "name": "2",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6493946793387098,
          "pitch": 0.5341161552981273,
          "rotation": 0,
          "target": "4-3"
        },
        {
          "yaw": -1.6600829196568636,
          "pitch": 0.4543951778041624,
          "rotation": 0,
          "target": "2-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-3",
      "name": "3",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4580171743221673,
          "pitch": 0.4137757916737037,
          "rotation": 0,
          "target": "5-4"
        },
        {
          "yaw": 3.0641010392546875,
          "pitch": 0.42225238788690334,
          "rotation": 0,
          "target": "3-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-4",
      "name": "4",
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
        "yaw": -1.1256554720054535,
        "pitch": 0.0956987113067278,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": -2.3234063902834894,
          "pitch": 0.5257735568891526,
          "rotation": 0,
          "target": "4-3"
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
    "viewControlButtons": false
  }
};
