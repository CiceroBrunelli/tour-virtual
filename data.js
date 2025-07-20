var APP_DATA = {
  "scenes": [
    {
      "id": "0-hosp",
      "name": "hosp",
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
          "yaw": -0.1624732121000143,
          "pitch": 0.10376413632452142,
          "rotation": 0,
          "target": "2-coz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-estar",
      "name": "estar",
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
          "yaw": -2.033897020203952,
          "pitch": 0.3607635183653315,
          "rotation": 0,
          "target": "2-coz"
        },
        {
          "yaw": -1.870044897984915,
          "pitch": 0.014127126612047292,
          "rotation": 0,
          "target": "5-as"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-coz",
      "name": "coz",
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
        "yaw": 2.2876244113991557,
        "pitch": -0.04511416384241329,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 1.2513236199653992,
          "pitch": 0.23110666712828554,
          "rotation": 0,
          "target": "1-estar"
        },
        {
          "yaw": 2.3488769545385937,
          "pitch": -0.005590916633703813,
          "rotation": 0,
          "target": "3-suite"
        },
        {
          "yaw": 2.4640104196444392,
          "pitch": -0.0031356077907460644,
          "rotation": 0,
          "target": "4-bh"
        },
        {
          "yaw": 2.5744736677802704,
          "pitch": -0.0009401193995977053,
          "rotation": 0,
          "target": "0-hosp"
        },
        {
          "yaw": -2.0002397391508744,
          "pitch": -0.03400457099796661,
          "rotation": 0,
          "target": "5-as"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-suite",
      "name": "suite",
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
          "yaw": 0.4567336112137639,
          "pitch": 0.18773830947050918,
          "rotation": 0,
          "target": "2-coz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bh",
      "name": "bh",
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
          "yaw": -2.8546397300390716,
          "pitch": 0.014928204698078318,
          "rotation": 0,
          "target": "2-coz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-as",
      "name": "as",
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
          "yaw": 2.857682573001589,
          "pitch": 0.019727341798404296,
          "rotation": 0,
          "target": "2-coz"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
