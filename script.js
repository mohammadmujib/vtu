(function(){
    var script = {
 "contentOpaque": false,
 "downloadEnabled": false,
 "height": "100%",
 "id": "rootPlayer",
 "start": "this.init(); this.syncPlaylists([this.ThumbnailList_370B2708_2928_C49A_41BF_DA7AD5EA07B3_playlist,this.mainPlayList])",
 "children": [
  "this.MainViewer",
  "this.ThumbnailList_370B2708_2928_C49A_41BF_DA7AD5EA07B3"
 ],
 "layout": "absolute",
 "scrollBarWidth": 10,
 "overflow": "visible",
 "minHeight": 20,
 "paddingBottom": 0,
 "class": "Player",
 "verticalAlign": "top",
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "propagateClick": false,
 "borderSize": 0,
 "definitions": [{
 "thumbnailUrl": "media/panorama_2ACD5162_2456_8182_4198_AB6A1470EF1B_t.jpg",
 "label": "6.1.3 ecu hall",
 "id": "panorama_2ACD5162_2456_8182_4198_AB6A1470EF1B",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_2ACD5162_2456_8182_4198_AB6A1470EF1B_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ACD5162_2456_8182_4198_AB6A1470EF1B_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ACD5162_2456_8182_4198_AB6A1470EF1B_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ACD5162_2456_8182_4198_AB6A1470EF1B_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ACD5162_2456_8182_4198_AB6A1470EF1B_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ACD5162_2456_8182_4198_AB6A1470EF1B_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ACD5162_2456_8182_4198_AB6A1470EF1B_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ACD5162_2456_8182_4198_AB6A1470EF1B_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ACD5162_2456_8182_4198_AB6A1470EF1B_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ACD5162_2456_8182_4198_AB6A1470EF1B_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ACD5162_2456_8182_4198_AB6A1470EF1B_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ACD5162_2456_8182_4198_AB6A1470EF1B_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ACD5162_2456_8182_4198_AB6A1470EF1B_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ACD5162_2456_8182_4198_AB6A1470EF1B_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ACD5162_2456_8182_4198_AB6A1470EF1B_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ACD5162_2456_8182_4198_AB6A1470EF1B_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ACD5162_2456_8182_4198_AB6A1470EF1B_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ACD5162_2456_8182_4198_AB6A1470EF1B_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ACD5162_2456_8182_4198_AB6A1470EF1B_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_2AC8E784_2456_8086_41C0_8ACDDC2AE6E3",
   "class": "AdjacentPanorama",
   "backwardYaw": 10.45,
   "yaw": 65.39,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_334AEB25_2968_CC8A_41C4_6534EFD3BF3A",
  "this.overlay_30E0B04F_2969_BC97_4193_A4969348019C"
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 98.2,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_0195E273_29E9_FC8E_41BB_5E6E8E88C821"
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_2ACFCC31_2452_879E_41C1_91AB398DDB5C_t.jpg",
 "partial": false,
 "label": "registrar office ground flor lobby",
 "id": "panorama_2ACFCC31_2452_879E_41C1_91AB398DDB5C",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_2ACFCC31_2452_879E_41C1_91AB398DDB5C_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ACFCC31_2452_879E_41C1_91AB398DDB5C_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ACFCC31_2452_879E_41C1_91AB398DDB5C_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ACFCC31_2452_879E_41C1_91AB398DDB5C_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ACFCC31_2452_879E_41C1_91AB398DDB5C_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ACFCC31_2452_879E_41C1_91AB398DDB5C_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ACFCC31_2452_879E_41C1_91AB398DDB5C_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ACFCC31_2452_879E_41C1_91AB398DDB5C_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ACFCC31_2452_879E_41C1_91AB398DDB5C_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ACFCC31_2452_879E_41C1_91AB398DDB5C_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ACFCC31_2452_879E_41C1_91AB398DDB5C_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ACFCC31_2452_879E_41C1_91AB398DDB5C_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ACFCC31_2452_879E_41C1_91AB398DDB5C_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ACFCC31_2452_879E_41C1_91AB398DDB5C_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ACFCC31_2452_879E_41C1_91AB398DDB5C_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ACFCC31_2452_879E_41C1_91AB398DDB5C_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ACFCC31_2452_879E_41C1_91AB398DDB5C_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ACFCC31_2452_879E_41C1_91AB398DDB5C_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ACFCC31_2452_879E_41C1_91AB398DDB5C_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "vfov": 180,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_2AB22D62_2457_8182_41B7_882DBA258A32_camera"
},
{
 "thumbnailUrl": "media/panorama_2ABB24F3_2457_8082_41B1_4F11D5C512BF_t.jpg",
 "label": "3- statitue",
 "id": "panorama_2ABB24F3_2457_8082_41B1_4F11D5C512BF",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_2ABB24F3_2457_8082_41B1_4F11D5C512BF_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ABB24F3_2457_8082_41B1_4F11D5C512BF_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ABB24F3_2457_8082_41B1_4F11D5C512BF_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ABB24F3_2457_8082_41B1_4F11D5C512BF_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ABB24F3_2457_8082_41B1_4F11D5C512BF_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ABB24F3_2457_8082_41B1_4F11D5C512BF_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ABB24F3_2457_8082_41B1_4F11D5C512BF_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ABB24F3_2457_8082_41B1_4F11D5C512BF_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ABB24F3_2457_8082_41B1_4F11D5C512BF_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ABB24F3_2457_8082_41B1_4F11D5C512BF_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ABB24F3_2457_8082_41B1_4F11D5C512BF_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ABB24F3_2457_8082_41B1_4F11D5C512BF_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ABB24F3_2457_8082_41B1_4F11D5C512BF_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ABB24F3_2457_8082_41B1_4F11D5C512BF_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ABB24F3_2457_8082_41B1_4F11D5C512BF_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ABB24F3_2457_8082_41B1_4F11D5C512BF_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ABB24F3_2457_8082_41B1_4F11D5C512BF_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ABB24F3_2457_8082_41B1_4F11D5C512BF_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ABB24F3_2457_8082_41B1_4F11D5C512BF_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_2AB720F2_2457_8082_41B8_07FFE76564C0",
   "class": "AdjacentPanorama",
   "backwardYaw": 0.14,
   "yaw": -148.82,
   "distance": 1
  },
  {
   "panorama": "this.panorama_34D7693B_2457_8182_41A0_8428844F4F49",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_309C6F26_24F6_8182_4185_A7BACA9AD5CA",
  "this.overlay_309E7C8D_24F6_8086_41C0_1F2E60AAAD47"
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false
},
{
 "thumbnailUrl": "media/panorama_2AB5BFE3_2451_8082_41C1_B31687350954_t.jpg",
 "label": "fountain lobby",
 "id": "panorama_2AB5BFE3_2451_8082_41C1_B31687350954",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_2AB5BFE3_2451_8082_41C1_B31687350954_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB5BFE3_2451_8082_41C1_B31687350954_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB5BFE3_2451_8082_41C1_B31687350954_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB5BFE3_2451_8082_41C1_B31687350954_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB5BFE3_2451_8082_41C1_B31687350954_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB5BFE3_2451_8082_41C1_B31687350954_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB5BFE3_2451_8082_41C1_B31687350954_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB5BFE3_2451_8082_41C1_B31687350954_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB5BFE3_2451_8082_41C1_B31687350954_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB5BFE3_2451_8082_41C1_B31687350954_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB5BFE3_2451_8082_41C1_B31687350954_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB5BFE3_2451_8082_41C1_B31687350954_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB5BFE3_2451_8082_41C1_B31687350954_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB5BFE3_2451_8082_41C1_B31687350954_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB5BFE3_2451_8082_41C1_B31687350954_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB5BFE3_2451_8082_41C1_B31687350954_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB5BFE3_2451_8082_41C1_B31687350954_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB5BFE3_2451_8082_41C1_B31687350954_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB5BFE3_2451_8082_41C1_B31687350954_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_2AB3029B_2456_8082_41B7_D03E63F54DE9",
   "class": "AdjacentPanorama",
   "backwardYaw": 73.7,
   "yaw": 14.93,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_0A17B6A0_29D9_C589_4190_758CAA19F538",
  "this.overlay_0B6A3CBF_29D9_45F7_41A3_71F648DEC4FA"
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false
},
{
 "thumbnailUrl": "media/panorama_2AB52CB9_2451_808E_41B1_258017686379_t.jpg",
 "label": "centre for p.g studies",
 "id": "panorama_2AB52CB9_2451_808E_41B1_258017686379",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_2AB52CB9_2451_808E_41B1_258017686379_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB52CB9_2451_808E_41B1_258017686379_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB52CB9_2451_808E_41B1_258017686379_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB52CB9_2451_808E_41B1_258017686379_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB52CB9_2451_808E_41B1_258017686379_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB52CB9_2451_808E_41B1_258017686379_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB52CB9_2451_808E_41B1_258017686379_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB52CB9_2451_808E_41B1_258017686379_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB52CB9_2451_808E_41B1_258017686379_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB52CB9_2451_808E_41B1_258017686379_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB52CB9_2451_808E_41B1_258017686379_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB52CB9_2451_808E_41B1_258017686379_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB52CB9_2451_808E_41B1_258017686379_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB52CB9_2451_808E_41B1_258017686379_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB52CB9_2451_808E_41B1_258017686379_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB52CB9_2451_808E_41B1_258017686379_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB52CB9_2451_808E_41B1_258017686379_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB52CB9_2451_808E_41B1_258017686379_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB52CB9_2451_808E_41B1_258017686379_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_2ACDE97F_2456_8182_41A3_D70C1A6258E9",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_2AB7233C_2451_8186_41A8_0F3CDB7FFFCD",
   "class": "AdjacentPanorama",
   "backwardYaw": -91.76,
   "yaw": 123.48,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_32793CF3_2929_458E_418C_5EEC5BE9BEF7",
  "this.overlay_32865C57_2928_C4B6_41BF_CB2E16E9DB0D",
  "this.overlay_33112372_292B_BC8E_41A3_7BC45C746477"
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_2AC95771_2452_819E_419A_5723CCC08834_t.jpg",
 "partial": false,
 "label": "Registrar office",
 "id": "panorama_2AC95771_2452_819E_419A_5723CCC08834",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_2AC95771_2452_819E_419A_5723CCC08834_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AC95771_2452_819E_419A_5723CCC08834_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AC95771_2452_819E_419A_5723CCC08834_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AC95771_2452_819E_419A_5723CCC08834_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AC95771_2452_819E_419A_5723CCC08834_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AC95771_2452_819E_419A_5723CCC08834_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AC95771_2452_819E_419A_5723CCC08834_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AC95771_2452_819E_419A_5723CCC08834_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AC95771_2452_819E_419A_5723CCC08834_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AC95771_2452_819E_419A_5723CCC08834_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AC95771_2452_819E_419A_5723CCC08834_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AC95771_2452_819E_419A_5723CCC08834_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AC95771_2452_819E_419A_5723CCC08834_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AC95771_2452_819E_419A_5723CCC08834_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AC95771_2452_819E_419A_5723CCC08834_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AC95771_2452_819E_419A_5723CCC08834_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AC95771_2452_819E_419A_5723CCC08834_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AC95771_2452_819E_419A_5723CCC08834_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AC95771_2452_819E_419A_5723CCC08834_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "vfov": 180,
 "pitch": 0
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_2AB31105_2452_8181_419E_927F82941AC6_t.jpg",
 "partial": false,
 "label": "pool table",
 "id": "panorama_2AB31105_2452_8181_419E_927F82941AC6",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_2AB31105_2452_8181_419E_927F82941AC6_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB31105_2452_8181_419E_927F82941AC6_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB31105_2452_8181_419E_927F82941AC6_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB31105_2452_8181_419E_927F82941AC6_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB31105_2452_8181_419E_927F82941AC6_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB31105_2452_8181_419E_927F82941AC6_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB31105_2452_8181_419E_927F82941AC6_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB31105_2452_8181_419E_927F82941AC6_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB31105_2452_8181_419E_927F82941AC6_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB31105_2452_8181_419E_927F82941AC6_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB31105_2452_8181_419E_927F82941AC6_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB31105_2452_8181_419E_927F82941AC6_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB31105_2452_8181_419E_927F82941AC6_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB31105_2452_8181_419E_927F82941AC6_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB31105_2452_8181_419E_927F82941AC6_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB31105_2452_8181_419E_927F82941AC6_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB31105_2452_8181_419E_927F82941AC6_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB31105_2452_8181_419E_927F82941AC6_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB31105_2452_8181_419E_927F82941AC6_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "vfov": 180,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_2AB5954B_2456_8182_4177_A10959A20C64_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_2ACDE97F_2456_8182_41A3_D70C1A6258E9_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 159.17,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_0128D36E_29E9_FC96_41B3_3E869D901156"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 99.55,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_00F22584_29E9_C78A_41B2_6475B251D4C6"
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_2AB5954B_2456_8182_4177_A10959A20C64_t.jpg",
 "partial": false,
 "label": "block 3",
 "id": "panorama_2AB5954B_2456_8182_4177_A10959A20C64",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_2AB5954B_2456_8182_4177_A10959A20C64_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB5954B_2456_8182_4177_A10959A20C64_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB5954B_2456_8182_4177_A10959A20C64_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB5954B_2456_8182_4177_A10959A20C64_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB5954B_2456_8182_4177_A10959A20C64_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB5954B_2456_8182_4177_A10959A20C64_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB5954B_2456_8182_4177_A10959A20C64_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB5954B_2456_8182_4177_A10959A20C64_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB5954B_2456_8182_4177_A10959A20C64_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB5954B_2456_8182_4177_A10959A20C64_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB5954B_2456_8182_4177_A10959A20C64_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB5954B_2456_8182_4177_A10959A20C64_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB5954B_2456_8182_4177_A10959A20C64_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB5954B_2456_8182_4177_A10959A20C64_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB5954B_2456_8182_4177_A10959A20C64_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB5954B_2456_8182_4177_A10959A20C64_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB5954B_2456_8182_4177_A10959A20C64_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB5954B_2456_8182_4177_A10959A20C64_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB5954B_2456_8182_4177_A10959A20C64_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "vfov": 180,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_2AB0AD0A_2452_8182_41C1_9EBC43ACB9E3_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -169.55,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_0174E45A_29E9_C4B9_41AB_98A2DEC8D88A"
},
{
 "changing": "var event = arguments[0]; this.changePlayListWithSameSpot(event.source, event.data.nextSelectedIndex)",
 "class": "PlayList",
 "items": [
  {
   "media": "this.panorama_2E1D4324_244E_8187_41A2_E4DC8BBEDEB5",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2E1D4324_244E_8187_41A2_E4DC8BBEDEB5_camera"
  },
  {
   "media": "this.panorama_34D7693B_2457_8182_41A0_8428844F4F49",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_34D7693B_2457_8182_41A0_8428844F4F49_camera"
  },
  {
   "media": "this.panorama_2ABB24F3_2457_8082_41B1_4F11D5C512BF",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2ABB24F3_2457_8082_41B1_4F11D5C512BF_camera"
  },
  {
   "media": "this.panorama_2AB720F2_2457_8082_41B8_07FFE76564C0",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2AB720F2_2457_8082_41B8_07FFE76564C0_camera"
  },
  {
   "media": "this.panorama_2AB22D62_2457_8182_41B7_882DBA258A32",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2AB22D62_2457_8182_41B7_882DBA258A32_camera"
  },
  {
   "media": "this.panorama_2AB668B4_2457_8086_41BF_D65E43D4FAAA",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2AB668B4_2457_8086_41BF_D65E43D4FAAA_camera"
  },
  {
   "media": "this.panorama_2ABB4416_2456_8782_41B2_EF0E4A3CE6F6",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2ABB4416_2456_8782_41B2_EF0E4A3CE6F6_camera"
  },
  {
   "media": "this.panorama_2ABF2F72_2456_8182_41B9_E864BFAE9871",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2ABF2F72_2456_8182_41B9_E864BFAE9871_camera"
  },
  {
   "media": "this.panorama_2AB2FAAC_2456_8086_417D_7CD05D703895",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2AB2FAAC_2456_8086_417D_7CD05D703895_camera"
  },
  {
   "media": "this.panorama_2AB3F608_2456_838E_41C1_787A02EC5C4F",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2AB3F608_2456_838E_41C1_787A02EC5C4F_camera"
  },
  {
   "media": "this.panorama_2ACD5162_2456_8182_4198_AB6A1470EF1B",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2ACD5162_2456_8182_4198_AB6A1470EF1B_camera"
  },
  {
   "media": "this.panorama_2ACF3C63_2456_8782_41AB_CCD102EF0141",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2ACF3C63_2456_8782_41AB_CCD102EF0141_camera"
  },
  {
   "media": "this.panorama_2AC8E784_2456_8086_41C0_8ACDDC2AE6E3",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2AC8E784_2456_8086_41C0_8ACDDC2AE6E3_camera"
  },
  {
   "media": "this.panorama_2AB3029B_2456_8082_41B7_D03E63F54DE9",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2AB3029B_2456_8082_41B7_D03E63F54DE9_camera"
  },
  {
   "media": "this.panorama_2AB04DE5_2456_8081_41B5_AD28A2049736",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2AB04DE5_2456_8081_41B5_AD28A2049736_camera"
  },
  {
   "media": "this.panorama_2ACDE97F_2456_8182_41A3_D70C1A6258E9",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2ACDE97F_2456_8182_41A3_D70C1A6258E9_camera"
  },
  {
   "media": "this.panorama_2AB5954B_2456_8182_4177_A10959A20C64",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2AB5954B_2456_8182_4177_A10959A20C64_camera"
  },
  {
   "media": "this.panorama_2AB3F155_2451_8186_41A7_A037235C9F9F",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2AB3F155_2451_8186_41A7_A037235C9F9F_camera"
  },
  {
   "media": "this.panorama_2AB52CB9_2451_808E_41B1_258017686379",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2AB52CB9_2451_808E_41B1_258017686379_camera"
  },
  {
   "media": "this.panorama_2AB0F853_2451_8F81_41A3_F1CAE3F3C9AB",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2AB0F853_2451_8F81_41A3_F1CAE3F3C9AB_camera"
  },
  {
   "media": "this.panorama_2AB793EC_2451_8086_41BE_C1E805455162",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2AB793EC_2451_8086_41BE_C1E805455162_camera"
  },
  {
   "media": "this.panorama_2AB5BFE3_2451_8082_41C1_B31687350954",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2AB5BFE3_2451_8082_41C1_B31687350954_camera"
  },
  {
   "media": "this.panorama_2AB15C11_2451_879E_41AF_192A7FCFEB42",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2AB15C11_2451_879E_41AF_192A7FCFEB42_camera"
  },
  {
   "media": "this.panorama_2AB46794_2451_8086_41B1_B38D41D99DA1",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2AB46794_2451_8086_41B1_B38D41D99DA1_camera"
  },
  {
   "media": "this.panorama_2AB7233C_2451_8186_41A8_0F3CDB7FFFCD",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2AB7233C_2451_8186_41A8_0F3CDB7FFFCD_camera"
  },
  {
   "media": "this.panorama_2ABE3E78_2451_838E_4162_A0EA91D66054",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2ABE3E78_2451_838E_4162_A0EA91D66054_camera"
  },
  {
   "media": "this.panorama_2ACAFA63_2451_8382_419C_D60FCDA817D1",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2ACAFA63_2451_8382_419C_D60FCDA817D1_camera"
  },
  {
   "media": "this.panorama_2ACA75DC_2451_8087_41B9_63BCA6F17034",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2ACA75DC_2451_8087_41B9_63BCA6F17034_camera"
  },
  {
   "media": "this.panorama_2AB31105_2452_8181_419E_927F82941AC6",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2AB31105_2452_8181_419E_927F82941AC6_camera"
  },
  {
   "media": "this.panorama_2ACFCC31_2452_879E_41C1_91AB398DDB5C",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2ACFCC31_2452_879E_41C1_91AB398DDB5C_camera"
  },
  {
   "media": "this.panorama_2AC95771_2452_819E_419A_5723CCC08834",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2AC95771_2452_819E_419A_5723CCC08834_camera"
  },
  {
   "media": "this.panorama_2AB6F3C2_2452_8082_41A0_0D8B46D3933A",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2AB6F3C2_2452_8082_41A0_0D8B46D3933A_camera"
  },
  {
   "media": "this.panorama_2AB0FF4C_2452_8186_41C0_CEE78A59C3CA",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2AB0FF4C_2452_8186_41C0_CEE78A59C3CA_camera"
  },
  {
   "media": "this.panorama_2ACC8A41_2452_83FE_41BD_C1EFC450C299",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2ACC8A41_2452_83FE_41BD_C1EFC450C299_camera"
  },
  {
   "media": "this.panorama_2ABD758D_2452_8086_41C1_CB67760F27BA",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2ABD758D_2452_8086_41C1_CB67760F27BA_camera"
  },
  {
   "media": "this.panorama_2ACF2102_2452_8182_41BC_C080F9A9E2CB",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2ACF2102_2452_8182_41BC_C080F9A9E2CB_camera"
  },
  {
   "media": "this.panorama_2AB0AD0A_2452_8182_41C1_9EBC43ACB9E3",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 37)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2AB0AD0A_2452_8182_41C1_9EBC43ACB9E3_camera"
  },
  {
   "media": "this.panorama_2AB54871_2452_8F9E_41BA_35249D671A13",
   "end": "this.trigger('tourEnded')",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 37, 0)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2AB54871_2452_8F9E_41BA_35249D671A13_camera"
  }
 ],
 "id": "mainPlayList"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_2AB3029B_2456_8082_41B7_D03E63F54DE9_camera"
},
{
 "thumbnailUrl": "media/panorama_2ACF3C63_2456_8782_41AB_CCD102EF0141_t.jpg",
 "label": "6.1.3 sanete hall",
 "id": "panorama_2ACF3C63_2456_8782_41AB_CCD102EF0141",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_2ACF3C63_2456_8782_41AB_CCD102EF0141_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ACF3C63_2456_8782_41AB_CCD102EF0141_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ACF3C63_2456_8782_41AB_CCD102EF0141_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ACF3C63_2456_8782_41AB_CCD102EF0141_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ACF3C63_2456_8782_41AB_CCD102EF0141_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ACF3C63_2456_8782_41AB_CCD102EF0141_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ACF3C63_2456_8782_41AB_CCD102EF0141_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ACF3C63_2456_8782_41AB_CCD102EF0141_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ACF3C63_2456_8782_41AB_CCD102EF0141_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ACF3C63_2456_8782_41AB_CCD102EF0141_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ACF3C63_2456_8782_41AB_CCD102EF0141_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ACF3C63_2456_8782_41AB_CCD102EF0141_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ACF3C63_2456_8782_41AB_CCD102EF0141_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ACF3C63_2456_8782_41AB_CCD102EF0141_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ACF3C63_2456_8782_41AB_CCD102EF0141_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ACF3C63_2456_8782_41AB_CCD102EF0141_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ACF3C63_2456_8782_41AB_CCD102EF0141_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ACF3C63_2456_8782_41AB_CCD102EF0141_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ACF3C63_2456_8782_41AB_CCD102EF0141_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_2AC8E784_2456_8086_41C0_8ACDDC2AE6E3",
   "class": "AdjacentPanorama",
   "backwardYaw": -45.1,
   "yaw": -81.8,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_3028B0FD_2969_BD7B_41B4_DB817BAC456A",
  "this.overlay_31DBA9FA_2969_4F79_41BF_240763322B3D"
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false
},
{
 "class": "PlayList",
 "items": [
  {
   "media": "this.panorama_2E1D4324_244E_8187_41A2_E4DC8BBEDEB5",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_370B2708_2928_C49A_41BF_DA7AD5EA07B3_playlist, 0, 1)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2E1D4324_244E_8187_41A2_E4DC8BBEDEB5_camera"
  },
  {
   "media": "this.panorama_34D7693B_2457_8182_41A0_8428844F4F49",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_370B2708_2928_C49A_41BF_DA7AD5EA07B3_playlist, 1, 2)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_34D7693B_2457_8182_41A0_8428844F4F49_camera"
  },
  {
   "media": "this.panorama_2ABB24F3_2457_8082_41B1_4F11D5C512BF",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_370B2708_2928_C49A_41BF_DA7AD5EA07B3_playlist, 2, 3)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2ABB24F3_2457_8082_41B1_4F11D5C512BF_camera"
  },
  {
   "media": "this.panorama_2AB720F2_2457_8082_41B8_07FFE76564C0",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_370B2708_2928_C49A_41BF_DA7AD5EA07B3_playlist, 3, 4)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2AB720F2_2457_8082_41B8_07FFE76564C0_camera"
  },
  {
   "media": "this.panorama_2AB22D62_2457_8182_41B7_882DBA258A32",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_370B2708_2928_C49A_41BF_DA7AD5EA07B3_playlist, 4, 5)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2AB22D62_2457_8182_41B7_882DBA258A32_camera"
  },
  {
   "media": "this.panorama_2AB668B4_2457_8086_41BF_D65E43D4FAAA",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_370B2708_2928_C49A_41BF_DA7AD5EA07B3_playlist, 5, 6)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2AB668B4_2457_8086_41BF_D65E43D4FAAA_camera"
  },
  {
   "media": "this.panorama_2ABB4416_2456_8782_41B2_EF0E4A3CE6F6",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_370B2708_2928_C49A_41BF_DA7AD5EA07B3_playlist, 6, 7)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2ABB4416_2456_8782_41B2_EF0E4A3CE6F6_camera"
  },
  {
   "media": "this.panorama_2ABF2F72_2456_8182_41B9_E864BFAE9871",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_370B2708_2928_C49A_41BF_DA7AD5EA07B3_playlist, 7, 8)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2ABF2F72_2456_8182_41B9_E864BFAE9871_camera"
  },
  {
   "media": "this.panorama_2AB2FAAC_2456_8086_417D_7CD05D703895",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_370B2708_2928_C49A_41BF_DA7AD5EA07B3_playlist, 8, 9)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2AB2FAAC_2456_8086_417D_7CD05D703895_camera"
  },
  {
   "media": "this.panorama_2AB3F608_2456_838E_41C1_787A02EC5C4F",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_370B2708_2928_C49A_41BF_DA7AD5EA07B3_playlist, 9, 10)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2AB3F608_2456_838E_41C1_787A02EC5C4F_camera"
  },
  {
   "media": "this.panorama_2ACD5162_2456_8182_4198_AB6A1470EF1B",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_370B2708_2928_C49A_41BF_DA7AD5EA07B3_playlist, 10, 11)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2ACD5162_2456_8182_4198_AB6A1470EF1B_camera"
  },
  {
   "media": "this.panorama_2ACF3C63_2456_8782_41AB_CCD102EF0141",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_370B2708_2928_C49A_41BF_DA7AD5EA07B3_playlist, 11, 12)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2ACF3C63_2456_8782_41AB_CCD102EF0141_camera"
  },
  {
   "media": "this.panorama_2AC8E784_2456_8086_41C0_8ACDDC2AE6E3",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_370B2708_2928_C49A_41BF_DA7AD5EA07B3_playlist, 12, 13)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2AC8E784_2456_8086_41C0_8ACDDC2AE6E3_camera"
  },
  {
   "media": "this.panorama_2AB3029B_2456_8082_41B7_D03E63F54DE9",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_370B2708_2928_C49A_41BF_DA7AD5EA07B3_playlist, 13, 14)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2AB3029B_2456_8082_41B7_D03E63F54DE9_camera"
  },
  {
   "media": "this.panorama_2AB04DE5_2456_8081_41B5_AD28A2049736",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_370B2708_2928_C49A_41BF_DA7AD5EA07B3_playlist, 14, 15)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2AB04DE5_2456_8081_41B5_AD28A2049736_camera"
  },
  {
   "media": "this.panorama_2ACDE97F_2456_8182_41A3_D70C1A6258E9",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_370B2708_2928_C49A_41BF_DA7AD5EA07B3_playlist, 15, 16)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2ACDE97F_2456_8182_41A3_D70C1A6258E9_camera"
  },
  {
   "media": "this.panorama_2AB5954B_2456_8182_4177_A10959A20C64",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_370B2708_2928_C49A_41BF_DA7AD5EA07B3_playlist, 16, 17)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2AB5954B_2456_8182_4177_A10959A20C64_camera"
  },
  {
   "media": "this.panorama_2AB3F155_2451_8186_41A7_A037235C9F9F",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_370B2708_2928_C49A_41BF_DA7AD5EA07B3_playlist, 17, 18)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2AB3F155_2451_8186_41A7_A037235C9F9F_camera"
  },
  {
   "media": "this.panorama_2AB52CB9_2451_808E_41B1_258017686379",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_370B2708_2928_C49A_41BF_DA7AD5EA07B3_playlist, 18, 19)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2AB52CB9_2451_808E_41B1_258017686379_camera"
  },
  {
   "media": "this.panorama_2AB0F853_2451_8F81_41A3_F1CAE3F3C9AB",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_370B2708_2928_C49A_41BF_DA7AD5EA07B3_playlist, 19, 20)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2AB0F853_2451_8F81_41A3_F1CAE3F3C9AB_camera"
  },
  {
   "media": "this.panorama_2AB793EC_2451_8086_41BE_C1E805455162",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_370B2708_2928_C49A_41BF_DA7AD5EA07B3_playlist, 20, 21)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2AB793EC_2451_8086_41BE_C1E805455162_camera"
  },
  {
   "media": "this.panorama_2AB5BFE3_2451_8082_41C1_B31687350954",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_370B2708_2928_C49A_41BF_DA7AD5EA07B3_playlist, 21, 22)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2AB5BFE3_2451_8082_41C1_B31687350954_camera"
  },
  {
   "media": "this.panorama_2AB15C11_2451_879E_41AF_192A7FCFEB42",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_370B2708_2928_C49A_41BF_DA7AD5EA07B3_playlist, 22, 23)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2AB15C11_2451_879E_41AF_192A7FCFEB42_camera"
  },
  {
   "media": "this.panorama_2AB46794_2451_8086_41B1_B38D41D99DA1",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_370B2708_2928_C49A_41BF_DA7AD5EA07B3_playlist, 23, 24)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2AB46794_2451_8086_41B1_B38D41D99DA1_camera"
  },
  {
   "media": "this.panorama_2AB7233C_2451_8186_41A8_0F3CDB7FFFCD",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_370B2708_2928_C49A_41BF_DA7AD5EA07B3_playlist, 24, 25)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2AB7233C_2451_8186_41A8_0F3CDB7FFFCD_camera"
  },
  {
   "media": "this.panorama_2ABE3E78_2451_838E_4162_A0EA91D66054",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_370B2708_2928_C49A_41BF_DA7AD5EA07B3_playlist, 25, 26)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2ABE3E78_2451_838E_4162_A0EA91D66054_camera"
  },
  {
   "media": "this.panorama_2ACAFA63_2451_8382_419C_D60FCDA817D1",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_370B2708_2928_C49A_41BF_DA7AD5EA07B3_playlist, 26, 27)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2ACAFA63_2451_8382_419C_D60FCDA817D1_camera"
  },
  {
   "media": "this.panorama_2ACA75DC_2451_8087_41B9_63BCA6F17034",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_370B2708_2928_C49A_41BF_DA7AD5EA07B3_playlist, 27, 28)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2ACA75DC_2451_8087_41B9_63BCA6F17034_camera"
  },
  {
   "media": "this.panorama_2AB31105_2452_8181_419E_927F82941AC6",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_370B2708_2928_C49A_41BF_DA7AD5EA07B3_playlist, 28, 29)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2AB31105_2452_8181_419E_927F82941AC6_camera"
  },
  {
   "media": "this.panorama_2ACFCC31_2452_879E_41C1_91AB398DDB5C",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_370B2708_2928_C49A_41BF_DA7AD5EA07B3_playlist, 29, 30)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2ACFCC31_2452_879E_41C1_91AB398DDB5C_camera"
  },
  {
   "media": "this.panorama_2AC95771_2452_819E_419A_5723CCC08834",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_370B2708_2928_C49A_41BF_DA7AD5EA07B3_playlist, 30, 31)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2AC95771_2452_819E_419A_5723CCC08834_camera"
  },
  {
   "media": "this.panorama_2AB6F3C2_2452_8082_41A0_0D8B46D3933A",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_370B2708_2928_C49A_41BF_DA7AD5EA07B3_playlist, 31, 32)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2AB6F3C2_2452_8082_41A0_0D8B46D3933A_camera"
  },
  {
   "media": "this.panorama_2AB0FF4C_2452_8186_41C0_CEE78A59C3CA",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_370B2708_2928_C49A_41BF_DA7AD5EA07B3_playlist, 32, 33)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2AB0FF4C_2452_8186_41C0_CEE78A59C3CA_camera"
  },
  {
   "media": "this.panorama_2ACC8A41_2452_83FE_41BD_C1EFC450C299",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_370B2708_2928_C49A_41BF_DA7AD5EA07B3_playlist, 33, 34)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2ACC8A41_2452_83FE_41BD_C1EFC450C299_camera"
  },
  {
   "media": "this.panorama_2ABD758D_2452_8086_41C1_CB67760F27BA",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_370B2708_2928_C49A_41BF_DA7AD5EA07B3_playlist, 34, 35)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2ABD758D_2452_8086_41C1_CB67760F27BA_camera"
  },
  {
   "media": "this.panorama_2ACF2102_2452_8182_41BC_C080F9A9E2CB",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_370B2708_2928_C49A_41BF_DA7AD5EA07B3_playlist, 35, 36)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2ACF2102_2452_8182_41BC_C080F9A9E2CB_camera"
  },
  {
   "media": "this.panorama_2AB0AD0A_2452_8182_41C1_9EBC43ACB9E3",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_370B2708_2928_C49A_41BF_DA7AD5EA07B3_playlist, 36, 37)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2AB0AD0A_2452_8182_41C1_9EBC43ACB9E3_camera"
  },
  {
   "media": "this.panorama_2AB54871_2452_8F9E_41BA_35249D671A13",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_370B2708_2928_C49A_41BF_DA7AD5EA07B3_playlist, 37, 0)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2AB54871_2452_8F9E_41BA_35249D671A13_camera"
  }
 ],
 "id": "ThumbnailList_370B2708_2928_C49A_41BF_DA7AD5EA07B3_playlist"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_2AB6F3C2_2452_8082_41A0_0D8B46D3933A_camera"
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_2AB15C11_2451_879E_41AF_192A7FCFEB42_t.jpg",
 "partial": false,
 "label": "girls gym",
 "id": "panorama_2AB15C11_2451_879E_41AF_192A7FCFEB42",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_2AB15C11_2451_879E_41AF_192A7FCFEB42_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB15C11_2451_879E_41AF_192A7FCFEB42_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB15C11_2451_879E_41AF_192A7FCFEB42_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB15C11_2451_879E_41AF_192A7FCFEB42_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB15C11_2451_879E_41AF_192A7FCFEB42_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB15C11_2451_879E_41AF_192A7FCFEB42_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB15C11_2451_879E_41AF_192A7FCFEB42_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB15C11_2451_879E_41AF_192A7FCFEB42_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB15C11_2451_879E_41AF_192A7FCFEB42_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB15C11_2451_879E_41AF_192A7FCFEB42_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB15C11_2451_879E_41AF_192A7FCFEB42_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB15C11_2451_879E_41AF_192A7FCFEB42_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB15C11_2451_879E_41AF_192A7FCFEB42_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB15C11_2451_879E_41AF_192A7FCFEB42_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB15C11_2451_879E_41AF_192A7FCFEB42_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB15C11_2451_879E_41AF_192A7FCFEB42_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB15C11_2451_879E_41AF_192A7FCFEB42_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB15C11_2451_879E_41AF_192A7FCFEB42_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB15C11_2451_879E_41AF_192A7FCFEB42_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "vfov": 180,
 "pitch": 0
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_2ABD758D_2452_8086_41C1_CB67760F27BA_t.jpg",
 "partial": false,
 "label": "sports complex ground floor",
 "id": "panorama_2ABD758D_2452_8086_41C1_CB67760F27BA",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_2ABD758D_2452_8086_41C1_CB67760F27BA_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ABD758D_2452_8086_41C1_CB67760F27BA_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ABD758D_2452_8086_41C1_CB67760F27BA_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ABD758D_2452_8086_41C1_CB67760F27BA_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ABD758D_2452_8086_41C1_CB67760F27BA_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ABD758D_2452_8086_41C1_CB67760F27BA_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ABD758D_2452_8086_41C1_CB67760F27BA_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ABD758D_2452_8086_41C1_CB67760F27BA_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ABD758D_2452_8086_41C1_CB67760F27BA_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ABD758D_2452_8086_41C1_CB67760F27BA_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ABD758D_2452_8086_41C1_CB67760F27BA_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ABD758D_2452_8086_41C1_CB67760F27BA_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ABD758D_2452_8086_41C1_CB67760F27BA_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ABD758D_2452_8086_41C1_CB67760F27BA_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ABD758D_2452_8086_41C1_CB67760F27BA_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ABD758D_2452_8086_41C1_CB67760F27BA_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ABD758D_2452_8086_41C1_CB67760F27BA_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ABD758D_2452_8086_41C1_CB67760F27BA_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ABD758D_2452_8086_41C1_CB67760F27BA_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "vfov": 180,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_2ACF3C63_2456_8782_41AB_CCD102EF0141_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_2ACF2102_2452_8182_41BC_C080F9A9E2CB_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_2ABB24F3_2457_8082_41B1_4F11D5C512BF_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -179.09,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_0138939D_29E9_C3BA_41B2_CB2B1779F636"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 31.18,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_0086F479_29E9_C57B_41B8_0830E5249AE1"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -8.97,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_01B30293_29E9_FD8F_41BA_7A30F048AB7D"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_2AB2FAAC_2456_8086_417D_7CD05D703895_camera"
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_2ACAFA63_2451_8382_419C_D60FCDA817D1_t.jpg",
 "partial": false,
 "label": "meeting room registerar",
 "id": "panorama_2ACAFA63_2451_8382_419C_D60FCDA817D1",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_2ACAFA63_2451_8382_419C_D60FCDA817D1_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ACAFA63_2451_8382_419C_D60FCDA817D1_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ACAFA63_2451_8382_419C_D60FCDA817D1_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ACAFA63_2451_8382_419C_D60FCDA817D1_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ACAFA63_2451_8382_419C_D60FCDA817D1_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ACAFA63_2451_8382_419C_D60FCDA817D1_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ACAFA63_2451_8382_419C_D60FCDA817D1_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ACAFA63_2451_8382_419C_D60FCDA817D1_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ACAFA63_2451_8382_419C_D60FCDA817D1_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ACAFA63_2451_8382_419C_D60FCDA817D1_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ACAFA63_2451_8382_419C_D60FCDA817D1_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ACAFA63_2451_8382_419C_D60FCDA817D1_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ACAFA63_2451_8382_419C_D60FCDA817D1_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ACAFA63_2451_8382_419C_D60FCDA817D1_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ACAFA63_2451_8382_419C_D60FCDA817D1_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ACAFA63_2451_8382_419C_D60FCDA817D1_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ACAFA63_2451_8382_419C_D60FCDA817D1_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ACAFA63_2451_8382_419C_D60FCDA817D1_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ACAFA63_2451_8382_419C_D60FCDA817D1_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "vfov": 180,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 88.24,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_00B0E4F6_29E9_C576_419E_877DF51ECA1E"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_2AB668B4_2457_8086_41BF_D65E43D4FAAA_camera"
},
{
 "thumbnailUrl": "media/panorama_2AB668B4_2457_8086_41BF_D65E43D4FAAA_t.jpg",
 "label": "6 adminsitrative",
 "id": "panorama_2AB668B4_2457_8086_41BF_D65E43D4FAAA",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_2AB668B4_2457_8086_41BF_D65E43D4FAAA_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB668B4_2457_8086_41BF_D65E43D4FAAA_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB668B4_2457_8086_41BF_D65E43D4FAAA_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB668B4_2457_8086_41BF_D65E43D4FAAA_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB668B4_2457_8086_41BF_D65E43D4FAAA_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB668B4_2457_8086_41BF_D65E43D4FAAA_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB668B4_2457_8086_41BF_D65E43D4FAAA_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB668B4_2457_8086_41BF_D65E43D4FAAA_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB668B4_2457_8086_41BF_D65E43D4FAAA_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB668B4_2457_8086_41BF_D65E43D4FAAA_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB668B4_2457_8086_41BF_D65E43D4FAAA_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB668B4_2457_8086_41BF_D65E43D4FAAA_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB668B4_2457_8086_41BF_D65E43D4FAAA_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB668B4_2457_8086_41BF_D65E43D4FAAA_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB668B4_2457_8086_41BF_D65E43D4FAAA_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB668B4_2457_8086_41BF_D65E43D4FAAA_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB668B4_2457_8086_41BF_D65E43D4FAAA_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB668B4_2457_8086_41BF_D65E43D4FAAA_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB668B4_2457_8086_41BF_D65E43D4FAAA_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_2AB720F2_2457_8082_41B8_07FFE76564C0",
   "class": "AdjacentPanorama",
   "backwardYaw": 171.03,
   "yaw": 112.72,
   "distance": 1
  },
  {
   "panorama": "this.panorama_2ABB4416_2456_8782_41B2_EF0E4A3CE6F6",
   "class": "AdjacentPanorama",
   "backwardYaw": -57.37,
   "yaw": -27.57,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_382D7018_2939_5CBA_41BC_214DD3702544",
  "this.overlay_3B7A719A_293F_DFBE_41A8_6674BA82F9FF",
  "this.overlay_39D19CB4_2939_458A_41B9_A48EE34C0999",
  "this.overlay_384A12D4_2938_DDB4_41AE_D2C9290EA85E"
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false
},
{
 "thumbnailUrl": "media/panorama_2AB54871_2452_8F9E_41BA_35249D671A13_t.jpg",
 "label": "Vice Chanceller ground floor lobby",
 "id": "panorama_2AB54871_2452_8F9E_41BA_35249D671A13",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_2AB54871_2452_8F9E_41BA_35249D671A13_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB54871_2452_8F9E_41BA_35249D671A13_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB54871_2452_8F9E_41BA_35249D671A13_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB54871_2452_8F9E_41BA_35249D671A13_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB54871_2452_8F9E_41BA_35249D671A13_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB54871_2452_8F9E_41BA_35249D671A13_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB54871_2452_8F9E_41BA_35249D671A13_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB54871_2452_8F9E_41BA_35249D671A13_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB54871_2452_8F9E_41BA_35249D671A13_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB54871_2452_8F9E_41BA_35249D671A13_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB54871_2452_8F9E_41BA_35249D671A13_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB54871_2452_8F9E_41BA_35249D671A13_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB54871_2452_8F9E_41BA_35249D671A13_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB54871_2452_8F9E_41BA_35249D671A13_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB54871_2452_8F9E_41BA_35249D671A13_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB54871_2452_8F9E_41BA_35249D671A13_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB54871_2452_8F9E_41BA_35249D671A13_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB54871_2452_8F9E_41BA_35249D671A13_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB54871_2452_8F9E_41BA_35249D671A13_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_2ABF2F72_2456_8182_41B9_E864BFAE9871",
   "class": "AdjacentPanorama",
   "backwardYaw": -133.96,
   "yaw": -80.45,
   "distance": 1
  },
  {
   "panorama": "this.panorama_2AB0AD0A_2452_8182_41C1_9EBC43ACB9E3",
   "class": "AdjacentPanorama",
   "backwardYaw": 80.37,
   "yaw": -105.87,
   "distance": 1
  },
  {
   "panorama": "this.panorama_2ABB4416_2456_8782_41B2_EF0E4A3CE6F6",
   "class": "AdjacentPanorama",
   "backwardYaw": -149.1,
   "yaw": -18.28,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_3D9754AF_295F_4597_415B_4203BA404314",
  "this.overlay_3DEB3089_295F_7D9A_4191_95DD21490B39",
  "this.overlay_3DE5E1CC_2958_BF9A_41A7_B368D9C2425F",
  "this.overlay_3DFB47E7_2958_C396_41A5_944471805327",
  "this.overlay_3D3FC272_2968_BC8E_41C0_300EFF46A4E9",
  "this.overlay_3DC05C96_2969_45B6_41C2_75FBB7D09D46"
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_2AB52CB9_2451_808E_41B1_258017686379_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_2AB31105_2452_8181_419E_927F82941AC6_camera"
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_2ACF2102_2452_8182_41BC_C080F9A9E2CB_t.jpg",
 "partial": false,
 "label": "table tennis",
 "id": "panorama_2ACF2102_2452_8182_41BC_C080F9A9E2CB",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_2ACF2102_2452_8182_41BC_C080F9A9E2CB_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ACF2102_2452_8182_41BC_C080F9A9E2CB_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ACF2102_2452_8182_41BC_C080F9A9E2CB_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ACF2102_2452_8182_41BC_C080F9A9E2CB_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ACF2102_2452_8182_41BC_C080F9A9E2CB_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ACF2102_2452_8182_41BC_C080F9A9E2CB_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ACF2102_2452_8182_41BC_C080F9A9E2CB_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ACF2102_2452_8182_41BC_C080F9A9E2CB_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ACF2102_2452_8182_41BC_C080F9A9E2CB_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ACF2102_2452_8182_41BC_C080F9A9E2CB_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ACF2102_2452_8182_41BC_C080F9A9E2CB_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ACF2102_2452_8182_41BC_C080F9A9E2CB_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ACF2102_2452_8182_41BC_C080F9A9E2CB_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ACF2102_2452_8182_41BC_C080F9A9E2CB_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ACF2102_2452_8182_41BC_C080F9A9E2CB_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ACF2102_2452_8182_41BC_C080F9A9E2CB_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ACF2102_2452_8182_41BC_C080F9A9E2CB_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ACF2102_2452_8182_41BC_C080F9A9E2CB_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ACF2102_2452_8182_41BC_C080F9A9E2CB_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "vfov": 180,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_2AC95771_2452_819E_419A_5723CCC08834_camera"
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_2ACC8A41_2452_83FE_41BD_C1EFC450C299_t.jpg",
 "partial": false,
 "label": "sports complex front",
 "id": "panorama_2ACC8A41_2452_83FE_41BD_C1EFC450C299",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_2ACC8A41_2452_83FE_41BD_C1EFC450C299_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ACC8A41_2452_83FE_41BD_C1EFC450C299_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ACC8A41_2452_83FE_41BD_C1EFC450C299_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ACC8A41_2452_83FE_41BD_C1EFC450C299_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ACC8A41_2452_83FE_41BD_C1EFC450C299_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ACC8A41_2452_83FE_41BD_C1EFC450C299_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ACC8A41_2452_83FE_41BD_C1EFC450C299_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ACC8A41_2452_83FE_41BD_C1EFC450C299_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ACC8A41_2452_83FE_41BD_C1EFC450C299_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ACC8A41_2452_83FE_41BD_C1EFC450C299_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ACC8A41_2452_83FE_41BD_C1EFC450C299_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ACC8A41_2452_83FE_41BD_C1EFC450C299_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ACC8A41_2452_83FE_41BD_C1EFC450C299_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ACC8A41_2452_83FE_41BD_C1EFC450C299_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ACC8A41_2452_83FE_41BD_C1EFC450C299_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ACC8A41_2452_83FE_41BD_C1EFC450C299_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ACC8A41_2452_83FE_41BD_C1EFC450C299_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ACC8A41_2452_83FE_41BD_C1EFC450C299_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ACC8A41_2452_83FE_41BD_C1EFC450C299_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "vfov": 180,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_2ABD758D_2452_8086_41C1_CB67760F27BA_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_2ACC8A41_2452_83FE_41BD_C1EFC450C299_camera"
},
{
 "thumbnailUrl": "media/panorama_2AB7233C_2451_8186_41A8_0F3CDB7FFFCD_t.jpg",
 "label": "library entrance",
 "id": "panorama_2AB7233C_2451_8186_41A8_0F3CDB7FFFCD",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_2AB7233C_2451_8186_41A8_0F3CDB7FFFCD_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB7233C_2451_8186_41A8_0F3CDB7FFFCD_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB7233C_2451_8186_41A8_0F3CDB7FFFCD_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB7233C_2451_8186_41A8_0F3CDB7FFFCD_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB7233C_2451_8186_41A8_0F3CDB7FFFCD_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB7233C_2451_8186_41A8_0F3CDB7FFFCD_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB7233C_2451_8186_41A8_0F3CDB7FFFCD_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB7233C_2451_8186_41A8_0F3CDB7FFFCD_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB7233C_2451_8186_41A8_0F3CDB7FFFCD_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB7233C_2451_8186_41A8_0F3CDB7FFFCD_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB7233C_2451_8186_41A8_0F3CDB7FFFCD_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB7233C_2451_8186_41A8_0F3CDB7FFFCD_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB7233C_2451_8186_41A8_0F3CDB7FFFCD_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB7233C_2451_8186_41A8_0F3CDB7FFFCD_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB7233C_2451_8186_41A8_0F3CDB7FFFCD_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB7233C_2451_8186_41A8_0F3CDB7FFFCD_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB7233C_2451_8186_41A8_0F3CDB7FFFCD_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB7233C_2451_8186_41A8_0F3CDB7FFFCD_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB7233C_2451_8186_41A8_0F3CDB7FFFCD_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_2ABE3E78_2451_838E_4162_A0EA91D66054",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_2AB52CB9_2451_808E_41B1_258017686379",
   "class": "AdjacentPanorama",
   "backwardYaw": 123.48,
   "yaw": -91.76,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_34FF26A8_2939_4599_41C1_19E993E967D0",
  "this.overlay_343A69C1_2939_4F8A_41C3_1428C80CB318",
  "this.overlay_3419FDA1_293F_478A_41C1_2FBF29B4A28B",
  "this.overlay_34671A0B_293B_CC9E_41C3_63E0ABAD760A"
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_2AB3F155_2451_8186_41A7_A037235C9F9F_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_2ACFCC31_2452_879E_41C1_91AB398DDB5C_camera"
},
{
 "thumbnailUrl": "media/panorama_2AB04DE5_2456_8081_41B5_AD28A2049736_t.jpg",
 "label": "auditorium",
 "id": "panorama_2AB04DE5_2456_8081_41B5_AD28A2049736",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_2AB04DE5_2456_8081_41B5_AD28A2049736_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB04DE5_2456_8081_41B5_AD28A2049736_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB04DE5_2456_8081_41B5_AD28A2049736_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB04DE5_2456_8081_41B5_AD28A2049736_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB04DE5_2456_8081_41B5_AD28A2049736_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB04DE5_2456_8081_41B5_AD28A2049736_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB04DE5_2456_8081_41B5_AD28A2049736_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB04DE5_2456_8081_41B5_AD28A2049736_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB04DE5_2456_8081_41B5_AD28A2049736_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB04DE5_2456_8081_41B5_AD28A2049736_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB04DE5_2456_8081_41B5_AD28A2049736_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB04DE5_2456_8081_41B5_AD28A2049736_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB04DE5_2456_8081_41B5_AD28A2049736_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB04DE5_2456_8081_41B5_AD28A2049736_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB04DE5_2456_8081_41B5_AD28A2049736_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB04DE5_2456_8081_41B5_AD28A2049736_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB04DE5_2456_8081_41B5_AD28A2049736_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB04DE5_2456_8081_41B5_AD28A2049736_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB04DE5_2456_8081_41B5_AD28A2049736_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_2AB3029B_2456_8082_41B7_D03E63F54DE9",
   "class": "AdjacentPanorama",
   "backwardYaw": -5.97,
   "yaw": 0.91,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_0AC10A08_29DF_4C99_41A2_7708836AEC32",
  "this.overlay_0C85693E_29D9_CCF9_41AB_BD219BE8AE59"
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_2AB3F155_2451_8186_41A7_A037235C9F9F_t.jpg",
 "partial": false,
 "label": "boys gym",
 "id": "panorama_2AB3F155_2451_8186_41A7_A037235C9F9F",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_2AB3F155_2451_8186_41A7_A037235C9F9F_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB3F155_2451_8186_41A7_A037235C9F9F_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB3F155_2451_8186_41A7_A037235C9F9F_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB3F155_2451_8186_41A7_A037235C9F9F_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB3F155_2451_8186_41A7_A037235C9F9F_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB3F155_2451_8186_41A7_A037235C9F9F_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB3F155_2451_8186_41A7_A037235C9F9F_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB3F155_2451_8186_41A7_A037235C9F9F_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB3F155_2451_8186_41A7_A037235C9F9F_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB3F155_2451_8186_41A7_A037235C9F9F_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB3F155_2451_8186_41A7_A037235C9F9F_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB3F155_2451_8186_41A7_A037235C9F9F_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB3F155_2451_8186_41A7_A037235C9F9F_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB3F155_2451_8186_41A7_A037235C9F9F_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB3F155_2451_8186_41A7_A037235C9F9F_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB3F155_2451_8186_41A7_A037235C9F9F_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB3F155_2451_8186_41A7_A037235C9F9F_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB3F155_2451_8186_41A7_A037235C9F9F_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB3F155_2451_8186_41A7_A037235C9F9F_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "vfov": 180,
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_2AC8E784_2456_8086_41C0_8ACDDC2AE6E3_t.jpg",
 "label": "6.1.3rd floor lobby",
 "id": "panorama_2AC8E784_2456_8086_41C0_8ACDDC2AE6E3",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_2AC8E784_2456_8086_41C0_8ACDDC2AE6E3_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AC8E784_2456_8086_41C0_8ACDDC2AE6E3_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AC8E784_2456_8086_41C0_8ACDDC2AE6E3_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AC8E784_2456_8086_41C0_8ACDDC2AE6E3_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AC8E784_2456_8086_41C0_8ACDDC2AE6E3_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AC8E784_2456_8086_41C0_8ACDDC2AE6E3_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AC8E784_2456_8086_41C0_8ACDDC2AE6E3_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AC8E784_2456_8086_41C0_8ACDDC2AE6E3_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AC8E784_2456_8086_41C0_8ACDDC2AE6E3_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AC8E784_2456_8086_41C0_8ACDDC2AE6E3_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AC8E784_2456_8086_41C0_8ACDDC2AE6E3_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AC8E784_2456_8086_41C0_8ACDDC2AE6E3_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AC8E784_2456_8086_41C0_8ACDDC2AE6E3_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AC8E784_2456_8086_41C0_8ACDDC2AE6E3_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AC8E784_2456_8086_41C0_8ACDDC2AE6E3_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AC8E784_2456_8086_41C0_8ACDDC2AE6E3_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AC8E784_2456_8086_41C0_8ACDDC2AE6E3_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AC8E784_2456_8086_41C0_8ACDDC2AE6E3_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AC8E784_2456_8086_41C0_8ACDDC2AE6E3_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_2ACF3C63_2456_8782_41AB_CCD102EF0141",
   "class": "AdjacentPanorama",
   "backwardYaw": -81.8,
   "yaw": -45.1,
   "distance": 1
  },
  {
   "panorama": "this.panorama_2ACD5162_2456_8182_4198_AB6A1470EF1B",
   "class": "AdjacentPanorama",
   "backwardYaw": 65.39,
   "yaw": 10.45,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_31A25766_296B_C496_41B2_6E4786EE41AD",
  "this.overlay_314F6A9D_296B_4DBA_41B2_80CB291F4681",
  "this.overlay_31DB1F30_2968_C489_41B6_EBA5878FB7D1",
  "this.overlay_3E84CC60_296F_4489_41B7_F65503909C03"
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_2AB0FF4C_2452_8186_41C0_CEE78A59C3CA_t.jpg",
 "partial": false,
 "label": "Sports complex 1st floor",
 "id": "panorama_2AB0FF4C_2452_8186_41C0_CEE78A59C3CA",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_2AB0FF4C_2452_8186_41C0_CEE78A59C3CA_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB0FF4C_2452_8186_41C0_CEE78A59C3CA_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB0FF4C_2452_8186_41C0_CEE78A59C3CA_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB0FF4C_2452_8186_41C0_CEE78A59C3CA_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB0FF4C_2452_8186_41C0_CEE78A59C3CA_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB0FF4C_2452_8186_41C0_CEE78A59C3CA_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB0FF4C_2452_8186_41C0_CEE78A59C3CA_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB0FF4C_2452_8186_41C0_CEE78A59C3CA_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB0FF4C_2452_8186_41C0_CEE78A59C3CA_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB0FF4C_2452_8186_41C0_CEE78A59C3CA_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB0FF4C_2452_8186_41C0_CEE78A59C3CA_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB0FF4C_2452_8186_41C0_CEE78A59C3CA_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB0FF4C_2452_8186_41C0_CEE78A59C3CA_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB0FF4C_2452_8186_41C0_CEE78A59C3CA_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB0FF4C_2452_8186_41C0_CEE78A59C3CA_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB0FF4C_2452_8186_41C0_CEE78A59C3CA_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB0FF4C_2452_8186_41C0_CEE78A59C3CA_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB0FF4C_2452_8186_41C0_CEE78A59C3CA_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB0FF4C_2452_8186_41C0_CEE78A59C3CA_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "vfov": 180,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 84.55,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_002CA5FD_29E9_C77B_41BF_BEF253817BAB"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_2AB0FF4C_2452_8186_41C0_CEE78A59C3CA_camera"
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_2ABE3E78_2451_838E_4162_A0EA91D66054_t.jpg",
 "overlays": [
  "this.overlay_377E9C41_2939_C48B_41BB_1634FC718FF9",
  "this.overlay_3468A01E_2938_BCB9_41C0_3A7B4CB2F434"
 ],
 "partial": false,
 "label": "Library",
 "id": "panorama_2ABE3E78_2451_838E_4162_A0EA91D66054",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_2ABE3E78_2451_838E_4162_A0EA91D66054_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ABE3E78_2451_838E_4162_A0EA91D66054_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ABE3E78_2451_838E_4162_A0EA91D66054_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ABE3E78_2451_838E_4162_A0EA91D66054_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ABE3E78_2451_838E_4162_A0EA91D66054_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ABE3E78_2451_838E_4162_A0EA91D66054_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ABE3E78_2451_838E_4162_A0EA91D66054_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ABE3E78_2451_838E_4162_A0EA91D66054_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ABE3E78_2451_838E_4162_A0EA91D66054_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ABE3E78_2451_838E_4162_A0EA91D66054_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ABE3E78_2451_838E_4162_A0EA91D66054_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ABE3E78_2451_838E_4162_A0EA91D66054_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ABE3E78_2451_838E_4162_A0EA91D66054_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ABE3E78_2451_838E_4162_A0EA91D66054_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ABE3E78_2451_838E_4162_A0EA91D66054_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ABE3E78_2451_838E_4162_A0EA91D66054_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ABE3E78_2451_838E_4162_A0EA91D66054_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ABE3E78_2451_838E_4162_A0EA91D66054_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ABE3E78_2451_838E_4162_A0EA91D66054_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "vfov": 180,
 "pitch": 0
},
{
 "mouseControlMode": "drag_acceleration",
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "class": "PanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation"
},
{
 "thumbnailUrl": "media/panorama_2AB2FAAC_2456_8086_417D_7CD05D703895_t.jpg",
 "label": "6.1.1.voice chaceller conference",
 "id": "panorama_2AB2FAAC_2456_8086_417D_7CD05D703895",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_2AB2FAAC_2456_8086_417D_7CD05D703895_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB2FAAC_2456_8086_417D_7CD05D703895_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB2FAAC_2456_8086_417D_7CD05D703895_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB2FAAC_2456_8086_417D_7CD05D703895_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB2FAAC_2456_8086_417D_7CD05D703895_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB2FAAC_2456_8086_417D_7CD05D703895_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB2FAAC_2456_8086_417D_7CD05D703895_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB2FAAC_2456_8086_417D_7CD05D703895_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB2FAAC_2456_8086_417D_7CD05D703895_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB2FAAC_2456_8086_417D_7CD05D703895_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB2FAAC_2456_8086_417D_7CD05D703895_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB2FAAC_2456_8086_417D_7CD05D703895_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB2FAAC_2456_8086_417D_7CD05D703895_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB2FAAC_2456_8086_417D_7CD05D703895_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB2FAAC_2456_8086_417D_7CD05D703895_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB2FAAC_2456_8086_417D_7CD05D703895_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB2FAAC_2456_8086_417D_7CD05D703895_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB2FAAC_2456_8086_417D_7CD05D703895_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB2FAAC_2456_8086_417D_7CD05D703895_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_2AC8E784_2456_8086_41C0_8ACDDC2AE6E3",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_2AB3F608_2456_838E_41C1_787A02EC5C4F",
   "class": "AdjacentPanorama",
   "backwardYaw": -19.07,
   "yaw": -18.68,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_3E9ED41C_2978_C4B9_416B_2EEE1454B158",
  "this.overlay_3EBF2EF8_2979_C579_41BA_24C3AC1189E9",
  "this.overlay_0D0E71B1_29D9_BF8B_41BC_8C1E710B7ABF",
  "this.overlay_0A69A1FB_29D8_BF7E_41B7_7B44E1AC8DDA"
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_2AB7233C_2451_8186_41A8_0F3CDB7FFFCD_camera"
},
{
 "thumbnailUrl": "media/panorama_2AB3029B_2456_8082_41B7_D03E63F54DE9_t.jpg",
 "label": "auditorium block",
 "id": "panorama_2AB3029B_2456_8082_41B7_D03E63F54DE9",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_2AB3029B_2456_8082_41B7_D03E63F54DE9_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB3029B_2456_8082_41B7_D03E63F54DE9_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB3029B_2456_8082_41B7_D03E63F54DE9_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB3029B_2456_8082_41B7_D03E63F54DE9_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB3029B_2456_8082_41B7_D03E63F54DE9_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB3029B_2456_8082_41B7_D03E63F54DE9_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB3029B_2456_8082_41B7_D03E63F54DE9_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB3029B_2456_8082_41B7_D03E63F54DE9_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB3029B_2456_8082_41B7_D03E63F54DE9_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB3029B_2456_8082_41B7_D03E63F54DE9_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB3029B_2456_8082_41B7_D03E63F54DE9_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB3029B_2456_8082_41B7_D03E63F54DE9_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB3029B_2456_8082_41B7_D03E63F54DE9_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB3029B_2456_8082_41B7_D03E63F54DE9_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB3029B_2456_8082_41B7_D03E63F54DE9_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB3029B_2456_8082_41B7_D03E63F54DE9_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB3029B_2456_8082_41B7_D03E63F54DE9_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB3029B_2456_8082_41B7_D03E63F54DE9_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB3029B_2456_8082_41B7_D03E63F54DE9_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_2AB5BFE3_2451_8082_41C1_B31687350954",
   "class": "AdjacentPanorama",
   "backwardYaw": 14.93,
   "yaw": 73.7,
   "distance": 1
  },
  {
   "panorama": "this.panorama_2ACA75DC_2451_8087_41B9_63BCA6F17034",
   "class": "AdjacentPanorama",
   "backwardYaw": -20.83,
   "yaw": 108.41,
   "distance": 1
  },
  {
   "panorama": "this.panorama_2AB04DE5_2456_8081_41B5_AD28A2049736",
   "class": "AdjacentPanorama",
   "backwardYaw": 0.91,
   "yaw": -5.97,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_368E7439_2928_C4FA_41C0_CA6663FCE220",
  "this.overlay_365C102F_2929_7C96_417F_9D01ED1509A6",
  "this.overlay_0B1F867B_2929_C57E_419B_8C910EBE92A6",
  "this.overlay_0B872084_2928_DD8A_41BA_405F7F010752",
  "this.overlay_0AE0FF38_29D9_44F9_4177_0BB8BC14BACE",
  "this.overlay_0AF81757_29D9_44B6_41B0_F4185DC5D09A"
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 174.03,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_00D3A545_29E9_C48A_419E_20EF2471563F"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 158.49,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_009684AB_29E9_C59F_41B5_EC1C613B1D5D"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_2ACD5162_2456_8182_4198_AB6A1470EF1B_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 161.72,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_014B73BC_29E9_C3FA_418D_36D6DD27F888"
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_2AB46794_2451_8086_41B1_B38D41D99DA1_t.jpg",
 "partial": false,
 "label": "guesthouse lobby",
 "id": "panorama_2AB46794_2451_8086_41B1_B38D41D99DA1",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_2AB46794_2451_8086_41B1_B38D41D99DA1_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB46794_2451_8086_41B1_B38D41D99DA1_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB46794_2451_8086_41B1_B38D41D99DA1_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB46794_2451_8086_41B1_B38D41D99DA1_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB46794_2451_8086_41B1_B38D41D99DA1_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB46794_2451_8086_41B1_B38D41D99DA1_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB46794_2451_8086_41B1_B38D41D99DA1_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB46794_2451_8086_41B1_B38D41D99DA1_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB46794_2451_8086_41B1_B38D41D99DA1_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB46794_2451_8086_41B1_B38D41D99DA1_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB46794_2451_8086_41B1_B38D41D99DA1_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB46794_2451_8086_41B1_B38D41D99DA1_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB46794_2451_8086_41B1_B38D41D99DA1_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB46794_2451_8086_41B1_B38D41D99DA1_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB46794_2451_8086_41B1_B38D41D99DA1_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB46794_2451_8086_41B1_B38D41D99DA1_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB46794_2451_8086_41B1_B38D41D99DA1_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB46794_2451_8086_41B1_B38D41D99DA1_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB46794_2451_8086_41B1_B38D41D99DA1_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "vfov": 180,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_2AB0F853_2451_8F81_41A3_F1CAE3F3C9AB_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_34D7693B_2457_8182_41A0_8428844F4F49_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_2AB3F608_2456_838E_41C1_787A02EC5C4F_camera"
},
{
 "thumbnailUrl": "media/panorama_2AB22D62_2457_8182_41B7_882DBA258A32_t.jpg",
 "label": "5 guesthouse right",
 "id": "panorama_2AB22D62_2457_8182_41B7_882DBA258A32",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_2AB22D62_2457_8182_41B7_882DBA258A32_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB22D62_2457_8182_41B7_882DBA258A32_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB22D62_2457_8182_41B7_882DBA258A32_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB22D62_2457_8182_41B7_882DBA258A32_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB22D62_2457_8182_41B7_882DBA258A32_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB22D62_2457_8182_41B7_882DBA258A32_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB22D62_2457_8182_41B7_882DBA258A32_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB22D62_2457_8182_41B7_882DBA258A32_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB22D62_2457_8182_41B7_882DBA258A32_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB22D62_2457_8182_41B7_882DBA258A32_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB22D62_2457_8182_41B7_882DBA258A32_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB22D62_2457_8182_41B7_882DBA258A32_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB22D62_2457_8182_41B7_882DBA258A32_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB22D62_2457_8182_41B7_882DBA258A32_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB22D62_2457_8182_41B7_882DBA258A32_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB22D62_2457_8182_41B7_882DBA258A32_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB22D62_2457_8182_41B7_882DBA258A32_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB22D62_2457_8182_41B7_882DBA258A32_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB22D62_2457_8182_41B7_882DBA258A32_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_2AB46794_2451_8086_41B1_B38D41D99DA1",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_2AB720F2_2457_8082_41B8_07FFE76564C0",
   "class": "AdjacentPanorama",
   "backwardYaw": -95.45,
   "yaw": -21.51,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_247E060E_2929_4496_41C4_5BEE1AD48A6C",
  "this.overlay_24CBB2F6_292B_BD89_419F_910AA7DE43C9",
  "this.overlay_27544965_292F_4C8B_41BC_221356E69E29",
  "this.overlay_2643FA25_2928_CC8A_41A9_1B1132E62FF5"
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 2.13
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 2.13
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 2.13
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "manualZoomSpeed": 0,
 "automaticRotationSpeed": 17,
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 0,
 "id": "panorama_2E1D4324_244E_8187_41A2_E4DC8BBEDEB5_camera"
},
{
 "thumbnailUrl": "media/panorama_2ACA75DC_2451_8087_41B9_63BCA6F17034_t.jpg",
 "label": "open air theatre",
 "id": "panorama_2ACA75DC_2451_8087_41B9_63BCA6F17034",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_2ACA75DC_2451_8087_41B9_63BCA6F17034_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ACA75DC_2451_8087_41B9_63BCA6F17034_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ACA75DC_2451_8087_41B9_63BCA6F17034_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ACA75DC_2451_8087_41B9_63BCA6F17034_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ACA75DC_2451_8087_41B9_63BCA6F17034_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ACA75DC_2451_8087_41B9_63BCA6F17034_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ACA75DC_2451_8087_41B9_63BCA6F17034_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ACA75DC_2451_8087_41B9_63BCA6F17034_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ACA75DC_2451_8087_41B9_63BCA6F17034_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ACA75DC_2451_8087_41B9_63BCA6F17034_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ACA75DC_2451_8087_41B9_63BCA6F17034_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ACA75DC_2451_8087_41B9_63BCA6F17034_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ACA75DC_2451_8087_41B9_63BCA6F17034_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ACA75DC_2451_8087_41B9_63BCA6F17034_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ACA75DC_2451_8087_41B9_63BCA6F17034_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ACA75DC_2451_8087_41B9_63BCA6F17034_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ACA75DC_2451_8087_41B9_63BCA6F17034_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ACA75DC_2451_8087_41B9_63BCA6F17034_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ACA75DC_2451_8087_41B9_63BCA6F17034_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_2AB3029B_2456_8082_41B7_D03E63F54DE9",
   "class": "AdjacentPanorama",
   "backwardYaw": 108.41,
   "yaw": -20.83,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_0C6C6FC7_2929_C397_4187_E01B262A9155",
  "this.overlay_0B90F877_292B_4D77_41B6_C87CBE23DA47"
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false
},
{
 "thumbnailUrl": "media/panorama_2ACDE97F_2456_8182_41A3_D70C1A6258E9_t.jpg",
 "label": "block 2",
 "id": "panorama_2ACDE97F_2456_8182_41A3_D70C1A6258E9",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_2ACDE97F_2456_8182_41A3_D70C1A6258E9_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ACDE97F_2456_8182_41A3_D70C1A6258E9_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ACDE97F_2456_8182_41A3_D70C1A6258E9_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ACDE97F_2456_8182_41A3_D70C1A6258E9_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ACDE97F_2456_8182_41A3_D70C1A6258E9_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ACDE97F_2456_8182_41A3_D70C1A6258E9_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ACDE97F_2456_8182_41A3_D70C1A6258E9_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ACDE97F_2456_8182_41A3_D70C1A6258E9_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ACDE97F_2456_8182_41A3_D70C1A6258E9_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ACDE97F_2456_8182_41A3_D70C1A6258E9_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ACDE97F_2456_8182_41A3_D70C1A6258E9_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ACDE97F_2456_8182_41A3_D70C1A6258E9_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ACDE97F_2456_8182_41A3_D70C1A6258E9_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ACDE97F_2456_8182_41A3_D70C1A6258E9_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ACDE97F_2456_8182_41A3_D70C1A6258E9_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ACDE97F_2456_8182_41A3_D70C1A6258E9_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ACDE97F_2456_8182_41A3_D70C1A6258E9_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ACDE97F_2456_8182_41A3_D70C1A6258E9_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ACDE97F_2456_8182_41A3_D70C1A6258E9_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_2AB0F853_2451_8F81_41A3_F1CAE3F3C9AB",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_2AB7233C_2451_8186_41A8_0F3CDB7FFFCD",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_2AB3029B_2456_8082_41B7_D03E63F54DE9",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_351BEA65_2928_CC8B_41B8_BF6F904EFB37",
  "this.overlay_355C05CC_2929_C79A_41C3_54F4B3AC68CC",
  "this.overlay_32AAD5FC_292B_4779_41B4_B8AA40E9B201",
  "this.overlay_352C54ED_2929_459A_419D_E9887F6EEF66",
  "this.overlay_35426289_2927_DD9A_41B4_E7738A2BFE31",
  "this.overlay_356BF67E_2927_4576_4196_07E2014CFC30"
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false
},
{
 "thumbnailUrl": "media/panorama_2ABF2F72_2456_8182_41B9_E864BFAE9871_t.jpg",
 "label": "6.1.1.lobby",
 "id": "panorama_2ABF2F72_2456_8182_41B9_E864BFAE9871",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_2ABF2F72_2456_8182_41B9_E864BFAE9871_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ABF2F72_2456_8182_41B9_E864BFAE9871_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ABF2F72_2456_8182_41B9_E864BFAE9871_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ABF2F72_2456_8182_41B9_E864BFAE9871_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ABF2F72_2456_8182_41B9_E864BFAE9871_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ABF2F72_2456_8182_41B9_E864BFAE9871_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ABF2F72_2456_8182_41B9_E864BFAE9871_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ABF2F72_2456_8182_41B9_E864BFAE9871_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ABF2F72_2456_8182_41B9_E864BFAE9871_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ABF2F72_2456_8182_41B9_E864BFAE9871_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ABF2F72_2456_8182_41B9_E864BFAE9871_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ABF2F72_2456_8182_41B9_E864BFAE9871_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ABF2F72_2456_8182_41B9_E864BFAE9871_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ABF2F72_2456_8182_41B9_E864BFAE9871_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ABF2F72_2456_8182_41B9_E864BFAE9871_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ABF2F72_2456_8182_41B9_E864BFAE9871_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ABF2F72_2456_8182_41B9_E864BFAE9871_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ABF2F72_2456_8182_41B9_E864BFAE9871_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ABF2F72_2456_8182_41B9_E864BFAE9871_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_2AB3F608_2456_838E_41C1_787A02EC5C4F",
   "class": "AdjacentPanorama",
   "backwardYaw": 60.57,
   "yaw": -58.64,
   "distance": 1
  },
  {
   "panorama": "this.panorama_2AC8E784_2456_8086_41C0_8ACDDC2AE6E3",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_2AB54871_2452_8F9E_41BA_35249D671A13",
   "class": "AdjacentPanorama",
   "backwardYaw": -80.45,
   "yaw": -133.96,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_3BC05D56_292B_44B6_41BE_BE6BFE152E19",
  "this.overlay_3A5151BC_2929_DFFA_41B1_D3F9936287D4",
  "this.overlay_3A2609B1_2927_4F8A_41BF_452ADE49556F",
  "this.overlay_3F44A6FF_2968_C576_41B0_69C2129793C8",
  "this.overlay_3E5D2BEA_297B_439E_41AA_9C18C42E153F",
  "this.overlay_3E699650_2979_4489_41A8_CC6EB4534AE8"
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_2AB720F2_2457_8082_41B8_07FFE76564C0_camera"
},
{
 "thumbnailUrl": "media/panorama_2E1D4324_244E_8187_41A2_E4DC8BBEDEB5_t.jpg",
 "label": "1- main entrance",
 "id": "panorama_2E1D4324_244E_8187_41A2_E4DC8BBEDEB5",
 "hfovMin": "126%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_2E1D4324_244E_8187_41A2_E4DC8BBEDEB5_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E1D4324_244E_8187_41A2_E4DC8BBEDEB5_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2E1D4324_244E_8187_41A2_E4DC8BBEDEB5_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E1D4324_244E_8187_41A2_E4DC8BBEDEB5_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E1D4324_244E_8187_41A2_E4DC8BBEDEB5_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2E1D4324_244E_8187_41A2_E4DC8BBEDEB5_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E1D4324_244E_8187_41A2_E4DC8BBEDEB5_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E1D4324_244E_8187_41A2_E4DC8BBEDEB5_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2E1D4324_244E_8187_41A2_E4DC8BBEDEB5_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E1D4324_244E_8187_41A2_E4DC8BBEDEB5_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E1D4324_244E_8187_41A2_E4DC8BBEDEB5_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2E1D4324_244E_8187_41A2_E4DC8BBEDEB5_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E1D4324_244E_8187_41A2_E4DC8BBEDEB5_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E1D4324_244E_8187_41A2_E4DC8BBEDEB5_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2E1D4324_244E_8187_41A2_E4DC8BBEDEB5_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E1D4324_244E_8187_41A2_E4DC8BBEDEB5_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E1D4324_244E_8187_41A2_E4DC8BBEDEB5_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2E1D4324_244E_8187_41A2_E4DC8BBEDEB5_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E1D4324_244E_8187_41A2_E4DC8BBEDEB5_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_34D7693B_2457_8182_41A0_8428844F4F49",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_3534A0F3_24B6_8081_41AE_FF0D95BE0380"
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -106.3,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_000D25B3_29E9_C78F_4189_3C6C3F6C3CE0"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 74.13,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_00C0E516_29E9_C4B6_41B6_0F73DA6014CC"
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_2AB793EC_2451_8086_41BE_C1E805455162_t.jpg",
 "partial": false,
 "label": "cnc lab",
 "id": "panorama_2AB793EC_2451_8086_41BE_C1E805455162",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_2AB793EC_2451_8086_41BE_C1E805455162_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB793EC_2451_8086_41BE_C1E805455162_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB793EC_2451_8086_41BE_C1E805455162_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB793EC_2451_8086_41BE_C1E805455162_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB793EC_2451_8086_41BE_C1E805455162_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB793EC_2451_8086_41BE_C1E805455162_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB793EC_2451_8086_41BE_C1E805455162_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB793EC_2451_8086_41BE_C1E805455162_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB793EC_2451_8086_41BE_C1E805455162_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB793EC_2451_8086_41BE_C1E805455162_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB793EC_2451_8086_41BE_C1E805455162_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB793EC_2451_8086_41BE_C1E805455162_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB793EC_2451_8086_41BE_C1E805455162_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB793EC_2451_8086_41BE_C1E805455162_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB793EC_2451_8086_41BE_C1E805455162_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB793EC_2451_8086_41BE_C1E805455162_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB793EC_2451_8086_41BE_C1E805455162_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB793EC_2451_8086_41BE_C1E805455162_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB793EC_2451_8086_41BE_C1E805455162_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "vfov": 180,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -56.52,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_010E0330_29E9_FC89_4192_3D90D2D086E6"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -179.86,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_0164343A_29E9_C4F9_41A9_482B0B79B9D7"
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_2AB0F853_2451_8F81_41A3_F1CAE3F3C9AB_t.jpg",
 "partial": false,
 "label": "cnc block 1 block3",
 "id": "panorama_2AB0F853_2451_8F81_41A3_F1CAE3F3C9AB",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_2AB0F853_2451_8F81_41A3_F1CAE3F3C9AB_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB0F853_2451_8F81_41A3_F1CAE3F3C9AB_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB0F853_2451_8F81_41A3_F1CAE3F3C9AB_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB0F853_2451_8F81_41A3_F1CAE3F3C9AB_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB0F853_2451_8F81_41A3_F1CAE3F3C9AB_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB0F853_2451_8F81_41A3_F1CAE3F3C9AB_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB0F853_2451_8F81_41A3_F1CAE3F3C9AB_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB0F853_2451_8F81_41A3_F1CAE3F3C9AB_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB0F853_2451_8F81_41A3_F1CAE3F3C9AB_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB0F853_2451_8F81_41A3_F1CAE3F3C9AB_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB0F853_2451_8F81_41A3_F1CAE3F3C9AB_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB0F853_2451_8F81_41A3_F1CAE3F3C9AB_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB0F853_2451_8F81_41A3_F1CAE3F3C9AB_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB0F853_2451_8F81_41A3_F1CAE3F3C9AB_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB0F853_2451_8F81_41A3_F1CAE3F3C9AB_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB0F853_2451_8F81_41A3_F1CAE3F3C9AB_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB0F853_2451_8F81_41A3_F1CAE3F3C9AB_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB0F853_2451_8F81_41A3_F1CAE3F3C9AB_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB0F853_2451_8F81_41A3_F1CAE3F3C9AB_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "vfov": 180,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_2ABB4416_2456_8782_41B2_EF0E4A3CE6F6_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -67.28,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_00A144C7_29E9_C596_41C0_B8BCF1BABB5E"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 152.43,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_015AE3EC_29E9_C399_41C3_0BBC6CB7A571"
},
{
 "thumbnailUrl": "media/panorama_2AB3F608_2456_838E_41C1_787A02EC5C4F_t.jpg",
 "label": "6.1.1.voice chanceller",
 "id": "panorama_2AB3F608_2456_838E_41C1_787A02EC5C4F",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_2AB3F608_2456_838E_41C1_787A02EC5C4F_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB3F608_2456_838E_41C1_787A02EC5C4F_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB3F608_2456_838E_41C1_787A02EC5C4F_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB3F608_2456_838E_41C1_787A02EC5C4F_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB3F608_2456_838E_41C1_787A02EC5C4F_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB3F608_2456_838E_41C1_787A02EC5C4F_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB3F608_2456_838E_41C1_787A02EC5C4F_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB3F608_2456_838E_41C1_787A02EC5C4F_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB3F608_2456_838E_41C1_787A02EC5C4F_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB3F608_2456_838E_41C1_787A02EC5C4F_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB3F608_2456_838E_41C1_787A02EC5C4F_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB3F608_2456_838E_41C1_787A02EC5C4F_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB3F608_2456_838E_41C1_787A02EC5C4F_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB3F608_2456_838E_41C1_787A02EC5C4F_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB3F608_2456_838E_41C1_787A02EC5C4F_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB3F608_2456_838E_41C1_787A02EC5C4F_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB3F608_2456_838E_41C1_787A02EC5C4F_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB3F608_2456_838E_41C1_787A02EC5C4F_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB3F608_2456_838E_41C1_787A02EC5C4F_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_2ABF2F72_2456_8182_41B9_E864BFAE9871",
   "class": "AdjacentPanorama",
   "backwardYaw": -58.64,
   "yaw": 60.57,
   "distance": 1
  },
  {
   "panorama": "this.panorama_2AB2FAAC_2456_8086_417D_7CD05D703895",
   "class": "AdjacentPanorama",
   "backwardYaw": -18.68,
   "yaw": -19.07,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_3E1C252C_2979_449A_41A0_D2C62565AF3A",
  "this.overlay_3EC9D4B5_2978_C58A_41C0_CE6DEB0A5252",
  "this.overlay_3E881EF7_297F_C577_4169_624199BDF19A",
  "this.overlay_3EFFC326_297F_5C96_41B9_108ED991BC6F"
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 121.36,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_01EC42E1_29E9_FD8A_41B0_A9B248B7618D"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_2AB46794_2451_8086_41B1_B38D41D99DA1_camera"
},
{
 "thumbnailUrl": "media/panorama_34D7693B_2457_8182_41A0_8428844F4F49_t.jpg",
 "label": "2- gate",
 "id": "panorama_34D7693B_2457_8182_41A0_8428844F4F49",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_34D7693B_2457_8182_41A0_8428844F4F49_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34D7693B_2457_8182_41A0_8428844F4F49_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_34D7693B_2457_8182_41A0_8428844F4F49_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_34D7693B_2457_8182_41A0_8428844F4F49_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34D7693B_2457_8182_41A0_8428844F4F49_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_34D7693B_2457_8182_41A0_8428844F4F49_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_34D7693B_2457_8182_41A0_8428844F4F49_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34D7693B_2457_8182_41A0_8428844F4F49_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_34D7693B_2457_8182_41A0_8428844F4F49_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_34D7693B_2457_8182_41A0_8428844F4F49_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34D7693B_2457_8182_41A0_8428844F4F49_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_34D7693B_2457_8182_41A0_8428844F4F49_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_34D7693B_2457_8182_41A0_8428844F4F49_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34D7693B_2457_8182_41A0_8428844F4F49_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_34D7693B_2457_8182_41A0_8428844F4F49_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_34D7693B_2457_8182_41A0_8428844F4F49_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34D7693B_2457_8182_41A0_8428844F4F49_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_34D7693B_2457_8182_41A0_8428844F4F49_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_34D7693B_2457_8182_41A0_8428844F4F49_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_2ABB24F3_2457_8082_41B1_4F11D5C512BF",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_362779B7_24B1_8082_41A8_EE7D7E55AF53"
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -119.43,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_00E20564_29E9_C48A_4195_744C765A3E8C"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_2AB5BFE3_2451_8082_41C1_B31687350954_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_2ACA75DC_2451_8087_41B9_63BCA6F17034_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_2AC8E784_2456_8086_41C0_8ACDDC2AE6E3_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 134.9,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_001DE5D8_29E9_C7B9_41C3_5DA01526CDF8"
},
{
 "thumbnailUrl": "media/panorama_2AB720F2_2457_8082_41B8_07FFE76564C0_t.jpg",
 "label": "4 square junctiion",
 "id": "panorama_2AB720F2_2457_8082_41B8_07FFE76564C0",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_2AB720F2_2457_8082_41B8_07FFE76564C0_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB720F2_2457_8082_41B8_07FFE76564C0_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB720F2_2457_8082_41B8_07FFE76564C0_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB720F2_2457_8082_41B8_07FFE76564C0_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB720F2_2457_8082_41B8_07FFE76564C0_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB720F2_2457_8082_41B8_07FFE76564C0_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB720F2_2457_8082_41B8_07FFE76564C0_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB720F2_2457_8082_41B8_07FFE76564C0_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB720F2_2457_8082_41B8_07FFE76564C0_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB720F2_2457_8082_41B8_07FFE76564C0_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB720F2_2457_8082_41B8_07FFE76564C0_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB720F2_2457_8082_41B8_07FFE76564C0_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB720F2_2457_8082_41B8_07FFE76564C0_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB720F2_2457_8082_41B8_07FFE76564C0_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB720F2_2457_8082_41B8_07FFE76564C0_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB720F2_2457_8082_41B8_07FFE76564C0_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB720F2_2457_8082_41B8_07FFE76564C0_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB720F2_2457_8082_41B8_07FFE76564C0_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB720F2_2457_8082_41B8_07FFE76564C0_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_2ABB24F3_2457_8082_41B1_4F11D5C512BF",
   "class": "AdjacentPanorama",
   "backwardYaw": -148.82,
   "yaw": 0.14,
   "distance": 1
  },
  {
   "panorama": "this.panorama_2AB22D62_2457_8182_41B7_882DBA258A32",
   "class": "AdjacentPanorama",
   "backwardYaw": -21.51,
   "yaw": -95.45,
   "distance": 1
  },
  {
   "panorama": "this.panorama_2AB668B4_2457_8086_41BF_D65E43D4FAAA",
   "class": "AdjacentPanorama",
   "backwardYaw": 112.72,
   "yaw": 171.03,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_3124068B_24F3_8081_41C1_8FC4F1A08CD3",
  "this.overlay_396857A0_292B_438A_41C3_F61F7129F997",
  "this.overlay_390B509A_2929_5DBE_417B_080C60F0811C",
  "this.overlay_393A3ADD_2927_CDBB_41AF_293DF303A372",
  "this.overlay_26E19C98_2939_C5BA_41B0_141D9D8AFB1C",
  "this.overlay_3973FDA8_293B_4799_41B8_989CE634CF4C"
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 122.63,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_01C242B5_29E9_FD8A_41C2_7DF0808D56A4"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -99.63,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_004EE64B_29E9_C49E_41B5_63069A9AD567"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_2AB04DE5_2456_8081_41B5_AD28A2049736_camera"
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_2AB6F3C2_2452_8082_41A0_0D8B46D3933A_t.jpg",
 "partial": false,
 "label": "Sport complex badminton",
 "id": "panorama_2AB6F3C2_2452_8082_41A0_0D8B46D3933A",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_2AB6F3C2_2452_8082_41A0_0D8B46D3933A_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB6F3C2_2452_8082_41A0_0D8B46D3933A_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB6F3C2_2452_8082_41A0_0D8B46D3933A_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB6F3C2_2452_8082_41A0_0D8B46D3933A_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB6F3C2_2452_8082_41A0_0D8B46D3933A_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB6F3C2_2452_8082_41A0_0D8B46D3933A_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB6F3C2_2452_8082_41A0_0D8B46D3933A_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB6F3C2_2452_8082_41A0_0D8B46D3933A_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB6F3C2_2452_8082_41A0_0D8B46D3933A_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB6F3C2_2452_8082_41A0_0D8B46D3933A_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB6F3C2_2452_8082_41A0_0D8B46D3933A_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB6F3C2_2452_8082_41A0_0D8B46D3933A_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB6F3C2_2452_8082_41A0_0D8B46D3933A_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB6F3C2_2452_8082_41A0_0D8B46D3933A_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB6F3C2_2452_8082_41A0_0D8B46D3933A_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB6F3C2_2452_8082_41A0_0D8B46D3933A_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB6F3C2_2452_8082_41A0_0D8B46D3933A_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB6F3C2_2452_8082_41A0_0D8B46D3933A_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB6F3C2_2452_8082_41A0_0D8B46D3933A_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "vfov": 180,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -165.07,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_011E834F_29E9_FC96_4179_E61590486F6A"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_019EE254_29E9_FC8A_41BE_F98EEA806187"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 160.93,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_01D262C2_29E9_FD89_41BE_C460F3072A56"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -114.61,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_01A11283_29E9_FD8E_4180_AC1FF4411581"
},
{
 "thumbnailUrl": "media/panorama_2ABB4416_2456_8782_41B2_EF0E4A3CE6F6_t.jpg",
 "label": "6.1 squre",
 "id": "panorama_2ABB4416_2456_8782_41B2_EF0E4A3CE6F6",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_2ABB4416_2456_8782_41B2_EF0E4A3CE6F6_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ABB4416_2456_8782_41B2_EF0E4A3CE6F6_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ABB4416_2456_8782_41B2_EF0E4A3CE6F6_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ABB4416_2456_8782_41B2_EF0E4A3CE6F6_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ABB4416_2456_8782_41B2_EF0E4A3CE6F6_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ABB4416_2456_8782_41B2_EF0E4A3CE6F6_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ABB4416_2456_8782_41B2_EF0E4A3CE6F6_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ABB4416_2456_8782_41B2_EF0E4A3CE6F6_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ABB4416_2456_8782_41B2_EF0E4A3CE6F6_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ABB4416_2456_8782_41B2_EF0E4A3CE6F6_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ABB4416_2456_8782_41B2_EF0E4A3CE6F6_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ABB4416_2456_8782_41B2_EF0E4A3CE6F6_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ABB4416_2456_8782_41B2_EF0E4A3CE6F6_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ABB4416_2456_8782_41B2_EF0E4A3CE6F6_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ABB4416_2456_8782_41B2_EF0E4A3CE6F6_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ABB4416_2456_8782_41B2_EF0E4A3CE6F6_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ABB4416_2456_8782_41B2_EF0E4A3CE6F6_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2ABB4416_2456_8782_41B2_EF0E4A3CE6F6_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2ABB4416_2456_8782_41B2_EF0E4A3CE6F6_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_2AB52CB9_2451_808E_41B1_258017686379",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_2AB54871_2452_8F9E_41BA_35249D671A13",
   "class": "AdjacentPanorama",
   "backwardYaw": -18.28,
   "yaw": -149.1,
   "distance": 1
  },
  {
   "panorama": "this.panorama_2ACFCC31_2452_879E_41C1_91AB398DDB5C",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_2ACFCC31_2452_879E_41C1_91AB398DDB5C",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_2AB668B4_2457_8086_41BF_D65E43D4FAAA",
   "class": "AdjacentPanorama",
   "backwardYaw": -27.57,
   "yaw": -57.37,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_38DC8B50_2939_CC8A_41B8_A05D4F3E9FCC",
  "this.overlay_3880C47A_2938_C579_41A5_CFF22D4CB6DF",
  "this.overlay_38CC8FBA_2928_C3F9_4194_61317E8DCB7B",
  "this.overlay_3B6DF5F4_292B_C789_41B7_0BE93976B3C6",
  "this.overlay_3B2384D5_2928_C58A_41A7_B92A6A1572AD",
  "this.overlay_3BE6086D_292F_4C9B_41B8_361C797429AD",
  "this.overlay_331A4D4D_295B_449B_41B3_322B4C38BE67",
  "this.overlay_30FE78AB_295B_4D9F_4181_5BE260C514CB"
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_2ACAFA63_2451_8382_419C_D60FCDA817D1_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_2ABE3E78_2451_838E_4162_A0EA91D66054_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_2AB793EC_2451_8086_41BE_C1E805455162_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_2AB54871_2452_8F9E_41BA_35249D671A13_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -71.59,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_016AB40B_29E9_C49E_41B5_E4931D9BF21A"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 30.9,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_005EE66A_29E9_C49E_41AA_9FE2384D1D82"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_01833244_29E9_FC89_41B9_AB89ED672B6C"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_2ABF2F72_2456_8182_41B9_E864BFAE9871_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 46.04,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_003F561C_29E9_C4B9_4182_2EB64D45AB69"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_2AB15C11_2451_879E_41AF_192A7FCFEB42_camera"
},
{
 "thumbnailUrl": "media/panorama_2AB0AD0A_2452_8182_41C1_9EBC43ACB9E3_t.jpg",
 "label": "vc ground floor confrence 1",
 "id": "panorama_2AB0AD0A_2452_8182_41C1_9EBC43ACB9E3",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_2AB0AD0A_2452_8182_41C1_9EBC43ACB9E3_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB0AD0A_2452_8182_41C1_9EBC43ACB9E3_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB0AD0A_2452_8182_41C1_9EBC43ACB9E3_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB0AD0A_2452_8182_41C1_9EBC43ACB9E3_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB0AD0A_2452_8182_41C1_9EBC43ACB9E3_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB0AD0A_2452_8182_41C1_9EBC43ACB9E3_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB0AD0A_2452_8182_41C1_9EBC43ACB9E3_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB0AD0A_2452_8182_41C1_9EBC43ACB9E3_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB0AD0A_2452_8182_41C1_9EBC43ACB9E3_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB0AD0A_2452_8182_41C1_9EBC43ACB9E3_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB0AD0A_2452_8182_41C1_9EBC43ACB9E3_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB0AD0A_2452_8182_41C1_9EBC43ACB9E3_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB0AD0A_2452_8182_41C1_9EBC43ACB9E3_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB0AD0A_2452_8182_41C1_9EBC43ACB9E3_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB0AD0A_2452_8182_41C1_9EBC43ACB9E3_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB0AD0A_2452_8182_41C1_9EBC43ACB9E3_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB0AD0A_2452_8182_41C1_9EBC43ACB9E3_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2AB0AD0A_2452_8182_41C1_9EBC43ACB9E3_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AB0AD0A_2452_8182_41C1_9EBC43ACB9E3_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_2AB54871_2452_8F9E_41BA_35249D671A13",
   "class": "AdjacentPanorama",
   "backwardYaw": -105.87,
   "yaw": 80.37,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_3DBCDD24_296F_4489_41BC_2093FB6EEBEA",
  "this.overlay_3C65424B_296F_5C9F_417B_F8771B0C6668"
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 161.32,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_01FCD300_29E9_FC8A_4199_DCEFA61EC700"
},
{
 "progressBorderSize": 0,
 "id": "MainViewer",
 "toolTipPaddingRight": 6,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderSize": 1,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipPaddingLeft": 6,
 "width": "100%",
 "displayTooltipInTouchScreens": true,
 "minHeight": 50,
 "paddingBottom": 0,
 "class": "ViewerArea",
 "playbackBarLeft": 0,
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarBottom": 5,
 "borderSize": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBarBorderColor": "#000000",
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "toolTipBorderColor": "#767676",
 "minWidth": 100,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "shadow": false,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "paddingTop": 0,
 "paddingLeft": 0,
 "toolTipFontSize": "1.18vmin",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "height": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "transitionMode": "blending",
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "transitionDuration": 500,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "progressBottom": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "data": {
  "name": "Main Viewer"
 },
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7
},
{
 "itemVerticalAlign": "middle",
 "selectedItemLabelFontWeight": "bold",
 "id": "ThumbnailList_370B2708_2928_C49A_41BF_DA7AD5EA07B3",
 "left": "13.69%",
 "itemLabelFontColor": "#FFFFFF",
 "scrollBarWidth": 10,
 "itemLabelGap": 5,
 "itemBackgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingBottom": 10,
 "itemThumbnailShadowVerticalLength": 3,
 "class": "ThumbnailList",
 "verticalAlign": "top",
 "width": "70.529%",
 "borderRadius": 5,
 "itemThumbnailShadowColor": "#000000",
 "paddingRight": 20,
 "itemPaddingBottom": 3,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "itemMode": "normal",
 "itemOpacity": 1,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarColor": "#FFFFFF",
 "itemLabelHorizontalAlign": "center",
 "itemThumbnailShadowHorizontalLength": 3,
 "itemLabelFontStyle": "normal",
 "itemThumbnailWidth": 75,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "gap": 10,
 "backgroundColorRatios": [
  0
 ],
 "itemLabelFontFamily": "Arial",
 "itemBorderRadius": 0,
 "paddingTop": 10,
 "paddingLeft": 20,
 "itemThumbnailShadowOpacity": 0.8,
 "playList": "this.ThumbnailList_370B2708_2928_C49A_41BF_DA7AD5EA07B3_playlist",
 "itemPaddingLeft": 3,
 "itemLabelPosition": "bottom",
 "itemHorizontalAlign": "center",
 "itemThumbnailShadowSpread": 1,
 "itemThumbnailShadow": true,
 "layout": "horizontal",
 "itemBackgroundOpacity": 0,
 "itemThumbnailBorderRadius": 5,
 "backgroundOpacity": 0.2,
 "itemPaddingTop": 3,
 "itemThumbnailHeight": 75,
 "itemBackgroundColorRatios": [],
 "propagateClick": false,
 "itemBackgroundColor": [],
 "top": "1.65%",
 "itemThumbnailOpacity": 1,
 "itemPaddingRight": 3,
 "backgroundColorDirection": "vertical",
 "itemLabelFontWeight": "normal",
 "itemLabelTextDecoration": "none",
 "horizontalAlign": "left",
 "itemThumbnailShadowBlurRadius": 4,
 "scrollBarMargin": 2,
 "data": {
  "name": "ThumbnailList1355"
 },
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontSize": 14
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2AC8E784_2456_8086_41C0_8ACDDC2AE6E3, this.camera_0174E45A_29E9_C4B9_41AB_98A2DEC8D88A); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 65.39,
   "hfov": 7.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ACD5162_2456_8182_4198_AB6A1470EF1B_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 127,
      "height": 128
     }
    ]
   },
   "pitch": -9.25
  }
 ],
 "id": "overlay_334AEB25_2968_CC8A_41C4_6534EFD3BF3A",
 "data": {
  "label": "Exit"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 65.39,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ACD5162_2456_8182_4198_AB6A1470EF1B_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -9.25,
   "hfov": 7.44
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ACD5162_2456_8182_4198_AB6A1470EF1B_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 183,
      "height": 221
     }
    ]
   },
   "pitch": -7.78,
   "yaw": 65.96,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.74,
   "distance": 50
  }
 ],
 "id": "overlay_30E0B04F_2969_BC97_4193_A4969348019C",
 "data": {
  "label": "Exit"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 65.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ACD5162_2456_8182_4198_AB6A1470EF1B_0_HS_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 19
     }
    ]
   },
   "pitch": -7.78,
   "hfov": 10.74
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 5.43,
   "hfov": 7.6,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ABB24F3_2457_8082_41B1_4F11D5C512BF_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 128,
      "height": 127
     }
    ]
   },
   "pitch": -0.94
  }
 ],
 "id": "overlay_309C6F26_24F6_8182_4185_A7BACA9AD5CA",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 5.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ABB24F3_2457_8082_41B1_4F11D5C512BF_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -0.94,
   "hfov": 7.6
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2AB720F2_2457_8082_41B8_07FFE76564C0, this.camera_0164343A_29E9_C4F9_41A9_482B0B79B9D7); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -148.82,
   "hfov": 7.57,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ABB24F3_2457_8082_41B1_4F11D5C512BF_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 128,
      "height": 127
     }
    ]
   },
   "pitch": -5.21
  }
 ],
 "id": "overlay_309E7C8D_24F6_8086_41C0_1F2E60AAAD47",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -148.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ABB24F3_2457_8082_41B1_4F11D5C512BF_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -5.21,
   "hfov": 7.57
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2AB3029B_2456_8082_41B7_D03E63F54DE9, this.camera_000D25B3_29E9_C78F_4189_3C6C3F6C3CE0); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 14.93,
   "hfov": 6.86,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB5BFE3_2451_8082_41C1_B31687350954_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 116,
      "height": 115
     }
    ]
   },
   "pitch": -2.94
  }
 ],
 "id": "overlay_0A17B6A0_29D9_C589_4190_758CAA19F538",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 14.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB5BFE3_2451_8082_41C1_B31687350954_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -2.94,
   "hfov": 6.86
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB5BFE3_2451_8082_41C1_B31687350954_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 551,
      "height": 180
     }
    ]
   },
   "pitch": -0.57,
   "yaw": 18.47,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 32.64,
   "distance": 50
  }
 ],
 "id": "overlay_0B6A3CBF_29D9_45F7_41A3_71F648DEC4FA",
 "data": {
  "label": "Auditorium Block"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 18.47,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB5BFE3_2451_8082_41C1_B31687350954_0_HS_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 48,
      "height": 16
     }
    ]
   },
   "pitch": -0.57,
   "hfov": 32.64
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2AB7233C_2451_8186_41A8_0F3CDB7FFFCD, this.camera_00B0E4F6_29E9_C576_419E_877DF51ECA1E); this.mainPlayList.set('selectedIndex', 24)"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 123.48,
   "hfov": 7.36,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB52CB9_2451_808E_41B1_258017686379_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 127,
      "height": 128
     }
    ]
   },
   "pitch": -12.53
  }
 ],
 "id": "overlay_32793CF3_2929_458E_418C_5EEC5BE9BEF7",
 "data": {
  "label": "Arrow Transparent Right-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 123.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB52CB9_2451_808E_41B1_258017686379_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -12.53,
   "hfov": 7.36
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB52CB9_2451_808E_41B1_258017686379_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 324,
      "height": 252
     }
    ]
   },
   "pitch": -10.01,
   "yaw": 125.36,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.94,
   "distance": 50
  }
 ],
 "id": "overlay_32865C57_2928_C4B6_41BF_CB2E16E9DB0D",
 "data": {
  "label": "Library"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 125.36,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB52CB9_2451_808E_41B1_258017686379_0_HS_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 20,
      "height": 16
     }
    ]
   },
   "pitch": -10.01,
   "hfov": 18.94
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -15.64,
   "hfov": 6.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB52CB9_2451_808E_41B1_258017686379_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 116,
      "height": 115
     }
    ]
   },
   "pitch": -4.74
  }
 ],
 "id": "overlay_33112372_292B_BC8E_41A3_7BC45C746477",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -15.64,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB52CB9_2451_808E_41B1_258017686379_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -4.74,
   "hfov": 6.84
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2AC8E784_2456_8086_41C0_8ACDDC2AE6E3, this.camera_001DE5D8_29E9_C7B9_41C3_5DA01526CDF8); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -81.8,
   "hfov": 7.47,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ACF3C63_2456_8782_41AB_CCD102EF0141_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 128,
      "height": 127
     }
    ]
   },
   "pitch": -10.88
  }
 ],
 "id": "overlay_3028B0FD_2969_BD7B_41B4_DB817BAC456A",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -81.8,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ACF3C63_2456_8782_41AB_CCD102EF0141_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -10.88,
   "hfov": 7.47
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ACF3C63_2456_8782_41AB_CCD102EF0141_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 245,
      "height": 232
     }
    ]
   },
   "pitch": -7.8,
   "yaw": -80.98,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.43,
   "distance": 50
  }
 ],
 "id": "overlay_31DBA9FA_2969_4F79_41BF_240763322B3D",
 "data": {
  "label": "Exit"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -80.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ACF3C63_2456_8782_41AB_CCD102EF0141_0_HS_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -7.8,
   "hfov": 14.43
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2ABB4416_2456_8782_41B2_EF0E4A3CE6F6, this.camera_01C242B5_29E9_FD8A_41C2_7DF0808D56A4); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -27.57,
   "hfov": 7.56,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB668B4_2457_8086_41BF_D65E43D4FAAA_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 128,
      "height": 127
     }
    ]
   },
   "pitch": -5.67
  }
 ],
 "id": "overlay_382D7018_2939_5CBA_41BC_214DD3702544",
 "data": {
  "label": "Admin pole"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -27.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB668B4_2457_8086_41BF_D65E43D4FAAA_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -5.67,
   "hfov": 7.56
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB668B4_2457_8086_41BF_D65E43D4FAAA_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 340,
      "height": 244
     }
    ]
   },
   "pitch": -2.72,
   "yaw": 112.89,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.11,
   "distance": 50
  }
 ],
 "id": "overlay_3B7A719A_293F_DFBE_41A8_6674BA82F9FF",
 "data": {
  "label": "Square "
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 112.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB668B4_2457_8086_41BF_D65E43D4FAAA_0_HS_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 22,
      "height": 16
     }
    ]
   },
   "pitch": -2.72,
   "hfov": 20.11
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB668B4_2457_8086_41BF_D65E43D4FAAA_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 286,
      "height": 244
     }
    ]
   },
   "pitch": -3.82,
   "yaw": -27.57,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.92,
   "distance": 50
  }
 ],
 "id": "overlay_39D19CB4_2939_458A_41B9_A48EE34C0999",
 "data": {
  "label": "Admin "
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -27.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB668B4_2457_8086_41BF_D65E43D4FAAA_0_HS_2_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": -3.82,
   "hfov": 16.92
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2AB720F2_2457_8082_41B8_07FFE76564C0, this.camera_01B30293_29E9_FD8F_41BA_7A30F048AB7D); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 112.72,
   "hfov": 6.85,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB668B4_2457_8086_41BF_D65E43D4FAAA_0_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 116,
      "height": 116
     }
    ]
   },
   "pitch": -4.2
  }
 ],
 "id": "overlay_384A12D4_2938_DDB4_41AE_D2C9290EA85E",
 "data": {
  "label": "Square"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 112.72,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB668B4_2457_8086_41BF_D65E43D4FAAA_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -4.2,
   "hfov": 6.85
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2ABB4416_2456_8782_41B2_EF0E4A3CE6F6, this.camera_005EE66A_29E9_C49E_41AA_9FE2384D1D82); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -18.28,
   "hfov": 7.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB54871_2452_8F9E_41BA_35249D671A13_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 128,
      "height": 127
     }
    ]
   },
   "pitch": -16.5
  }
 ],
 "id": "overlay_3D9754AF_295F_4597_415B_4203BA404314",
 "data": {
  "label": "Exit"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -18.28,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB54871_2452_8F9E_41BA_35249D671A13_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -16.5,
   "hfov": 7.29
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB54871_2452_8F9E_41BA_35249D671A13_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 242,
      "height": 223
     }
    ]
   },
   "pitch": -14.29,
   "yaw": -16.92,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.9,
   "distance": 50
  }
 ],
 "id": "overlay_3DEB3089_295F_7D9A_4191_95DD21490B39",
 "data": {
  "label": "Exit"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -16.92,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB54871_2452_8F9E_41BA_35249D671A13_0_HS_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -14.29,
   "hfov": 13.9
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2AB0AD0A_2452_8182_41C1_9EBC43ACB9E3, this.camera_004EE64B_29E9_C49E_41B5_63069A9AD567); this.mainPlayList.set('selectedIndex', 36)"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -105.87,
   "hfov": 6.63,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB54871_2452_8F9E_41BA_35249D671A13_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 116,
      "height": 115
     }
    ]
   },
   "pitch": -15
  }
 ],
 "id": "overlay_3DE5E1CC_2958_BF9A_41A7_B368D9C2425F",
 "data": {
  "label": "confrerence"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -105.87,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB54871_2452_8F9E_41BA_35249D671A13_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -15,
   "hfov": 6.63
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB54871_2452_8F9E_41BA_35249D671A13_0_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 301,
      "height": 205
     }
    ]
   },
   "pitch": -9.51,
   "yaw": -79.61,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.59,
   "distance": 50
  }
 ],
 "id": "overlay_3DFB47E7_2958_C396_41A5_944471805327",
 "data": {
  "label": "1st Floor"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -79.61,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB54871_2452_8F9E_41BA_35249D671A13_0_HS_3_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 23,
      "height": 16
     }
    ]
   },
   "pitch": -9.51,
   "hfov": 17.59
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2ABF2F72_2456_8182_41B9_E864BFAE9871, this.camera_003F561C_29E9_C4B9_4182_2EB64D45AB69); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -80.45,
   "hfov": 6.74,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB54871_2452_8F9E_41BA_35249D671A13_0_HS_4_0.png",
      "class": "ImageResourceLevel",
      "width": 116,
      "height": 115
     }
    ]
   },
   "pitch": -11.28
  }
 ],
 "id": "overlay_3D3FC272_2968_BC8E_41C0_300EFF46A4E9",
 "data": {
  "label": "1st floor"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -80.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB54871_2452_8F9E_41BA_35249D671A13_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -11.28,
   "hfov": 6.74
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB54871_2452_8F9E_41BA_35249D671A13_0_HS_5_0.png",
      "class": "ImageResourceLevel",
      "width": 550,
      "height": 243
     }
    ]
   },
   "pitch": -13.02,
   "yaw": -106.55,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 31.76,
   "distance": 50
  }
 ],
 "id": "overlay_3DC05C96_2969_45B6_41C2_75FBB7D09D46",
 "data": {
  "label": "V.C Confrerence"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -106.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB54871_2452_8F9E_41BA_35249D671A13_0_HS_5_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -13.02,
   "hfov": 31.76
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2AB52CB9_2451_808E_41B1_258017686379, this.camera_010E0330_29E9_FC89_4192_3D90D2D086E6); this.mainPlayList.set('selectedIndex', 18)"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -91.76,
   "hfov": 6.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB7233C_2451_8186_41A8_0F3CDB7FFFCD_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 115,
      "height": 116
     }
    ]
   },
   "pitch": -2.96
  }
 ],
 "id": "overlay_34FF26A8_2939_4599_41C1_19E993E967D0",
 "data": {
  "label": "pg"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -91.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB7233C_2451_8186_41A8_0F3CDB7FFFCD_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -2.96,
   "hfov": 6.8
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB7233C_2451_8186_41A8_0F3CDB7FFFCD_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 339,
      "height": 207
     }
    ]
   },
   "pitch": -0.08,
   "yaw": 28.28,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.09,
   "distance": 50
  }
 ],
 "id": "overlay_343A69C1_2939_4F8A_41C3_1428C80CB318",
 "data": {
  "label": "Library"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 28.28,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB7233C_2451_8186_41A8_0F3CDB7FFFCD_0_HS_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -0.08,
   "hfov": 20.09
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 25)"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 25.92,
   "hfov": 6.87,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB7233C_2451_8186_41A8_0F3CDB7FFFCD_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 116,
      "height": 115
     }
    ]
   },
   "pitch": -1.49
  }
 ],
 "id": "overlay_3419FDA1_293F_478A_41C1_2FBF29B4A28B",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 25.92,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB7233C_2451_8186_41A8_0F3CDB7FFFCD_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -1.49,
   "hfov": 6.87
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB7233C_2451_8186_41A8_0F3CDB7FFFCD_0_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 424,
      "height": 207
     }
    ]
   },
   "pitch": -0.59,
   "yaw": -88.54,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 25.11,
   "distance": 50
  }
 ],
 "id": "overlay_34671A0B_293B_CC9E_41C3_63E0ABAD760A",
 "data": {
  "label": "P.G Studies"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -88.54,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB7233C_2451_8186_41A8_0F3CDB7FFFCD_0_HS_3_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ]
   },
   "pitch": -0.59,
   "hfov": 25.11
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2AB3029B_2456_8082_41B7_D03E63F54DE9, this.camera_00D3A545_29E9_C48A_419E_20EF2471563F); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 0.91,
   "hfov": 7.6,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB04DE5_2456_8081_41B5_AD28A2049736_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 128,
      "height": 127
     }
    ]
   },
   "pitch": 0.31
  }
 ],
 "id": "overlay_0AC10A08_29DF_4C99_41A2_7708836AEC32",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.91,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB04DE5_2456_8081_41B5_AD28A2049736_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 0.31,
   "hfov": 7.6
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB04DE5_2456_8081_41B5_AD28A2049736_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 258,
      "height": 237
     }
    ]
   },
   "pitch": 2.26,
   "yaw": 2.31,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.31,
   "distance": 50
  }
 ],
 "id": "overlay_0C85693E_29D9_CCF9_41AB_BD219BE8AE59",
 "data": {
  "label": "Exit"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.31,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB04DE5_2456_8081_41B5_AD28A2049736_0_HS_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 17,
      "height": 15
     }
    ]
   },
   "pitch": 2.26,
   "hfov": 15.31
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2ACF3C63_2456_8782_41AB_CCD102EF0141, this.camera_0195E273_29E9_FC8E_41BB_5E6E8E88C821); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -45.1,
   "hfov": 6.86,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AC8E784_2456_8086_41C0_8ACDDC2AE6E3_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 116,
      "height": 116
     }
    ]
   },
   "pitch": -2.48
  }
 ],
 "id": "overlay_31A25766_296B_C496_41B2_6E4786EE41AD",
 "data": {
  "label": "Sanity"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -45.1,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AC8E784_2456_8086_41C0_8ACDDC2AE6E3_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -2.48,
   "hfov": 6.86
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AC8E784_2456_8086_41C0_8ACDDC2AE6E3_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 327,
      "height": 224
     }
    ]
   },
   "pitch": -0.93,
   "yaw": -44.59,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 19.38,
   "distance": 50
  }
 ],
 "id": "overlay_314F6A9D_296B_4DBA_41B2_80CB291F4681",
 "data": {
  "label": "sanity hall"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -44.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AC8E784_2456_8086_41C0_8ACDDC2AE6E3_0_HS_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 23,
      "height": 16
     }
    ]
   },
   "pitch": -0.93,
   "hfov": 19.38
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2ACD5162_2456_8182_4198_AB6A1470EF1B, this.camera_01A11283_29E9_FD8E_4180_AC1FF4411581); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 10.45,
   "hfov": 6.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AC8E784_2456_8086_41C0_8ACDDC2AE6E3_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 115,
      "height": 116
     }
    ]
   },
   "pitch": -2.55
  }
 ],
 "id": "overlay_31DB1F30_2968_C489_41B6_EBA5878FB7D1",
 "data": {
  "label": "E.c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 10.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AC8E784_2456_8086_41C0_8ACDDC2AE6E3_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -2.55,
   "hfov": 6.8
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AC8E784_2456_8086_41C0_8ACDDC2AE6E3_0_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 506,
      "height": 200
     }
    ]
   },
   "pitch": -0.49,
   "yaw": 12.18,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 30.01,
   "distance": 50
  }
 ],
 "id": "overlay_3E84CC60_296F_4489_41B7_F65503909C03",
 "data": {
  "label": "E.C meeting hall"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 12.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AC8E784_2456_8086_41C0_8ACDDC2AE6E3_0_HS_3_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 40,
      "height": 16
     }
    ]
   },
   "pitch": -0.49,
   "hfov": 30.01
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 155.71,
   "hfov": 6.97,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ABE3E78_2451_838E_4162_A0EA91D66054_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 127,
      "height": 128
     }
    ]
   },
   "pitch": -22.37
  }
 ],
 "id": "overlay_377E9C41_2939_C48B_41BB_1634FC718FF9",
 "data": {
  "label": "Library Entrance"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 155.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ABE3E78_2451_838E_4162_A0EA91D66054_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -22.37,
   "hfov": 6.97
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ABE3E78_2451_838E_4162_A0EA91D66054_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 532,
      "height": 217
     }
    ]
   },
   "pitch": -20.14,
   "yaw": 156.26,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 29.6,
   "distance": 50
  }
 ],
 "id": "overlay_3468A01E_2938_BCB9_41C0_3A7B4CB2F434",
 "data": {
  "label": "Library Entrance"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 156.26,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ABE3E78_2451_838E_4162_A0EA91D66054_0_HS_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 39,
      "height": 16
     }
    ]
   },
   "pitch": -20.14,
   "hfov": 29.6
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -53.09,
   "hfov": 7.42,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB2FAAC_2456_8086_417D_7CD05D703895_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 127,
      "height": 127
     }
    ]
   },
   "pitch": -10.12
  }
 ],
 "id": "overlay_3E9ED41C_2978_C4B9_416B_2EEE1454B158",
 "data": {
  "label": "Arrow Transparent Left-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -53.09,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB2FAAC_2456_8086_417D_7CD05D703895_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -10.12,
   "hfov": 7.42
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB2FAAC_2456_8086_417D_7CD05D703895_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 495,
      "height": 232
     }
    ]
   },
   "pitch": -5.39,
   "yaw": -12.37,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 29.2,
   "distance": 50
  }
 ],
 "id": "overlay_3EBF2EF8_2979_C579_41BA_24C3AC1189E9",
 "data": {
  "label": "V.C "
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -12.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB2FAAC_2456_8086_417D_7CD05D703895_0_HS_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 34,
      "height": 16
     }
    ]
   },
   "pitch": -5.39,
   "hfov": 29.2
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2AB3F608_2456_838E_41C1_787A02EC5C4F, this.camera_01D262C2_29E9_FD89_41BE_C460F3072A56); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -18.68,
   "hfov": 7.5,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB2FAAC_2456_8086_417D_7CD05D703895_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 128,
      "height": 127
     }
    ]
   },
   "pitch": -9.48
  }
 ],
 "id": "overlay_0D0E71B1_29D9_BF8B_41BC_8C1E710B7ABF",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -18.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB2FAAC_2456_8086_417D_7CD05D703895_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -9.48,
   "hfov": 7.5
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB2FAAC_2456_8086_417D_7CD05D703895_0_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 495,
      "height": 232
     }
    ]
   },
   "pitch": -6.64,
   "yaw": -59.09,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 29.13,
   "distance": 50
  }
 ],
 "id": "overlay_0A69A1FB_29D8_BF7E_41B7_7B44E1AC8DDA",
 "data": {
  "label": "V.C Lobby"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -59.09,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB2FAAC_2456_8086_417D_7CD05D703895_0_HS_3_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 34,
      "height": 16
     }
    ]
   },
   "pitch": -6.64,
   "hfov": 29.13
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2ACA75DC_2451_8087_41B9_63BCA6F17034, this.camera_0128D36E_29E9_FC96_41B3_3E869D901156); this.mainPlayList.set('selectedIndex', 27)"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 108.41,
   "hfov": 6.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB3029B_2456_8082_41B7_D03E63F54DE9_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 115,
      "height": 116
     }
    ]
   },
   "pitch": -7.05
  }
 ],
 "id": "overlay_368E7439_2928_C4FA_41C0_CA6663FCE220",
 "data": {
  "label": "Arrow Transparent Right"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 108.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB3029B_2456_8082_41B7_D03E63F54DE9_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -7.05,
   "hfov": 6.76
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB3029B_2456_8082_41B7_D03E63F54DE9_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 513,
      "height": 183
     }
    ]
   },
   "pitch": -4.89,
   "yaw": 109.76,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 30.3,
   "distance": 50
  }
 ],
 "id": "overlay_365C102F_2929_7C96_417F_9D01ED1509A6",
 "data": {
  "label": "Open air theatre"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 109.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB3029B_2456_8082_41B7_D03E63F54DE9_0_HS_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 44,
      "height": 16
     }
    ]
   },
   "pitch": -4.89,
   "hfov": 30.3
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2AB5BFE3_2451_8082_41C1_B31687350954, this.camera_011E834F_29E9_FC96_4179_E61590486F6A); this.mainPlayList.set('selectedIndex', 21)"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 73.7,
   "hfov": 6.53,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB3029B_2456_8082_41B7_D03E63F54DE9_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 110,
      "height": 90
     }
    ]
   },
   "pitch": -5.1
  }
 ],
 "id": "overlay_0B1F867B_2929_C57E_419B_8C910EBE92A6",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 73.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB3029B_2456_8082_41B7_D03E63F54DE9_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ]
   },
   "pitch": -5.1,
   "hfov": 6.53
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB3029B_2456_8082_41B7_D03E63F54DE9_0_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 513,
      "height": 183
     }
    ]
   },
   "pitch": -3.65,
   "yaw": 75.57,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 30.32,
   "distance": 50
  }
 ],
 "id": "overlay_0B872084_2928_DD8A_41BA_405F7F010752",
 "data": {
  "label": "Fountain Lobby"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 75.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB3029B_2456_8082_41B7_D03E63F54DE9_0_HS_3_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 44,
      "height": 16
     }
    ]
   },
   "pitch": -3.65,
   "hfov": 30.32
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2AB04DE5_2456_8081_41B5_AD28A2049736, this.camera_0138939D_29E9_C3BA_41B2_CB2B1779F636); this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -5.97,
   "hfov": 6.87,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB3029B_2456_8082_41B7_D03E63F54DE9_0_HS_4_0.png",
      "class": "ImageResourceLevel",
      "width": 116,
      "height": 116
     }
    ]
   },
   "pitch": -0.14
  }
 ],
 "id": "overlay_0AE0FF38_29D9_44F9_4177_0BB8BC14BACE",
 "data": {
  "label": "Arrow Transparent Left-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -5.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB3029B_2456_8082_41B7_D03E63F54DE9_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -0.14,
   "hfov": 6.87
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB3029B_2456_8082_41B7_D03E63F54DE9_0_HS_5_0.png",
      "class": "ImageResourceLevel",
      "width": 398,
      "height": 182
     }
    ]
   },
   "pitch": 2.2,
   "yaw": -3.93,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 23.59,
   "distance": 50
  }
 ],
 "id": "overlay_0AF81757_29D9_44B6_41B0_F4185DC5D09A",
 "data": {
  "label": "Auditorium"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -3.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB3029B_2456_8082_41B7_D03E63F54DE9_0_HS_5_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 34,
      "height": 16
     }
    ]
   },
   "pitch": 2.2,
   "hfov": 23.59
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "toolTip": "GuestHouse Lobby",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 23)"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -153.63,
   "hfov": 6.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB22D62_2457_8182_41B7_882DBA258A32_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 116,
      "height": 114
     }
    ]
   },
   "pitch": -8.74
  }
 ],
 "id": "overlay_247E060E_2929_4496_41C4_5BEE1AD48A6C",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -153.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB22D62_2457_8182_41B7_882DBA258A32_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -8.74,
   "hfov": 6.79
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB22D62_2457_8182_41B7_882DBA258A32_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 244,
      "height": 146
     }
    ]
   },
   "pitch": -7.45,
   "yaw": -153.36,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.34,
   "distance": 50
  }
 ],
 "id": "overlay_24CBB2F6_292B_BD89_419F_910AA7DE43C9",
 "data": {
  "label": "Guesthouse Lobby"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -153.36,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB22D62_2457_8182_41B7_882DBA258A32_0_HS_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -7.45,
   "hfov": 14.34
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2AB720F2_2457_8082_41B8_07FFE76564C0, this.camera_002CA5FD_29E9_C77B_41BF_BEF253817BAB); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -21.51,
   "hfov": 6.87,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB22D62_2457_8182_41B7_882DBA258A32_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 116,
      "height": 116
     }
    ]
   },
   "pitch": -0.79
  }
 ],
 "id": "overlay_27544965_292F_4C8B_41BC_221356E69E29",
 "data": {
  "label": "Arrow Transparent Left"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -21.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB22D62_2457_8182_41B7_882DBA258A32_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -0.79,
   "hfov": 6.87
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB22D62_2457_8182_41B7_882DBA258A32_0_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 182,
      "height": 146
     }
    ]
   },
   "pitch": -0.03,
   "yaw": -21.46,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.8,
   "distance": 50
  }
 ],
 "id": "overlay_2643FA25_2928_CC8A_41A9_1B1132E62FF5",
 "data": {
  "label": "Exit To Square"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -21.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB22D62_2457_8182_41B7_882DBA258A32_0_HS_3_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ]
   },
   "pitch": -0.03,
   "hfov": 10.8
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2AB3029B_2456_8082_41B7_D03E63F54DE9, this.camera_016AB40B_29E9_C49E_41B5_E4931D9BF21A); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -20.83,
   "hfov": 7.5,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ACA75DC_2451_8087_41B9_63BCA6F17034_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 128,
      "height": 127
     }
    ]
   },
   "pitch": -9.26
  }
 ],
 "id": "overlay_0C6C6FC7_2929_C397_4187_E01B262A9155",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -20.83,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ACA75DC_2451_8087_41B9_63BCA6F17034_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -9.26,
   "hfov": 7.5
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ACA75DC_2451_8087_41B9_63BCA6F17034_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 522,
      "height": 243
     }
    ]
   },
   "pitch": -5.99,
   "yaw": -16.07,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 30.76,
   "distance": 50
  }
 ],
 "id": "overlay_0B90F877_292B_4D77_41B6_C87CBE23DA47",
 "data": {
  "label": "Auditorium block"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -16.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ACA75DC_2451_8087_41B9_63BCA6F17034_0_HS_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 34,
      "height": 16
     }
    ]
   },
   "pitch": -5.99,
   "hfov": 30.76
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -19.94,
   "hfov": 7.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ACDE97F_2456_8182_41A3_D70C1A6258E9_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 128,
      "height": 127
     }
    ]
   },
   "pitch": -3.45
  }
 ],
 "id": "overlay_351BEA65_2928_CC8B_41B8_BF6F904EFB37",
 "data": {
  "label": "Audittorim"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -19.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ACDE97F_2456_8182_41A3_D70C1A6258E9_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -3.45,
   "hfov": 7.59
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ACDE97F_2456_8182_41A3_D70C1A6258E9_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 487,
      "height": 200
     }
    ]
   },
   "pitch": -5.36,
   "yaw": 157.97,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 28.76,
   "distance": 50
  }
 ],
 "id": "overlay_355C05CC_2929_C79A_41C3_54F4B3AC68CC",
 "data": {
  "label": "Library Entrance"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 157.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ACDE97F_2456_8182_41A3_D70C1A6258E9_0_HS_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 38,
      "height": 16
     }
    ]
   },
   "pitch": -5.36,
   "hfov": 28.76
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 24)"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 161.39,
   "hfov": 6.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ACDE97F_2456_8182_41A3_D70C1A6258E9_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 116,
      "height": 115
     }
    ]
   },
   "pitch": -7.63
  }
 ],
 "id": "overlay_32AAD5FC_292B_4779_41B4_B8AA40E9B201",
 "data": {
  "label": "library"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 161.39,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ACDE97F_2456_8182_41A3_D70C1A6258E9_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -7.63,
   "hfov": 6.81
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ACDE97F_2456_8182_41A3_D70C1A6258E9_0_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 293,
      "height": 234
     }
    ]
   },
   "pitch": 1.46,
   "yaw": 15.54,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.37,
   "distance": 50
  }
 ],
 "id": "overlay_352C54ED_2929_459A_419D_E9887F6EEF66",
 "data": {
  "label": "Block 1"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 15.54,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ACDE97F_2456_8182_41A3_D70C1A6258E9_0_HS_3_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 20,
      "height": 16
     }
    ]
   },
   "pitch": 1.46,
   "hfov": 17.37
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 19)"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 14.12,
   "hfov": 6.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ACDE97F_2456_8182_41A3_D70C1A6258E9_0_HS_4_0.png",
      "class": "ImageResourceLevel",
      "width": 115,
      "height": 116
     }
    ]
   },
   "pitch": -0.21
  }
 ],
 "id": "overlay_35426289_2927_DD9A_41B4_E7738A2BFE31",
 "data": {
  "label": "Arrow Transparent Right"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 14.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ACDE97F_2456_8182_41A3_D70C1A6258E9_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -0.21,
   "hfov": 6.81
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ACDE97F_2456_8182_41A3_D70C1A6258E9_0_HS_5_0.png",
      "class": "ImageResourceLevel",
      "width": 448,
      "height": 234
     }
    ]
   },
   "pitch": -0.52,
   "yaw": -18.53,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 26.58,
   "distance": 50
  }
 ],
 "id": "overlay_356BF67E_2927_4576_4196_07E2014CFC30",
 "data": {
  "label": "Auditorium"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -18.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ACDE97F_2456_8182_41A3_D70C1A6258E9_0_HS_5_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -0.52,
   "hfov": 26.58
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2AB54871_2452_8F9E_41BA_35249D671A13, this.camera_00F22584_29E9_C78A_41B2_6475B251D4C6); this.mainPlayList.set('selectedIndex', 37)"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -133.96,
   "hfov": 7.31,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ABF2F72_2456_8182_41B9_E864BFAE9871_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 127,
      "height": 127
     }
    ]
   },
   "pitch": -14.1
  }
 ],
 "id": "overlay_3BC05D56_292B_44B6_41BE_BE6BFE152E19",
 "data": {
  "label": "Exit"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -133.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ABF2F72_2456_8182_41B9_E864BFAE9871_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -14.1,
   "hfov": 7.31
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ABF2F72_2456_8182_41B9_E864BFAE9871_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 567,
      "height": 229
     }
    ]
   },
   "pitch": -11.75,
   "yaw": -132.5,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 32.9,
   "distance": 50
  }
 ],
 "id": "overlay_3A5151BC_2929_DFFA_41B1_D3F9936287D4",
 "data": {
  "label": "Ground Floor"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -132.5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ABF2F72_2456_8182_41B9_E864BFAE9871_0_HS_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 39,
      "height": 16
     }
    ]
   },
   "pitch": -11.75,
   "hfov": 32.9
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2AB3F608_2456_838E_41C1_787A02EC5C4F, this.camera_00E20564_29E9_C48A_4195_744C765A3E8C); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -58.64,
   "hfov": 6.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ABF2F72_2456_8182_41B9_E864BFAE9871_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 115,
      "height": 115
     }
    ]
   },
   "pitch": -13.34
  }
 ],
 "id": "overlay_3A2609B1_2927_4F8A_41BF_452ADE49556F",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -58.64,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ABF2F72_2456_8182_41B9_E864BFAE9871_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -13.34,
   "hfov": 6.68
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ABF2F72_2456_8182_41B9_E864BFAE9871_0_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 516,
      "height": 241
     }
    ]
   },
   "pitch": -12.24,
   "yaw": -58.87,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 29.91,
   "distance": 50
  }
 ],
 "id": "overlay_3F44A6FF_2968_C576_41B0_69C2129793C8",
 "data": {
  "label": "Vice chanceller"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -58.87,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ABF2F72_2456_8182_41B9_E864BFAE9871_0_HS_3_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 34,
      "height": 16
     }
    ]
   },
   "pitch": -12.24,
   "hfov": 29.91
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -94.53,
   "hfov": 7.3,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ABF2F72_2456_8182_41B9_E864BFAE9871_0_HS_4_0.png",
      "class": "ImageResourceLevel",
      "width": 128,
      "height": 127
     }
    ]
   },
   "pitch": -16.25
  }
 ],
 "id": "overlay_3E5D2BEA_297B_439E_41AA_9C18C42E153F",
 "data": {
  "label": "lift"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -94.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ABF2F72_2456_8182_41B9_E864BFAE9871_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -16.25,
   "hfov": 7.3
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ABF2F72_2456_8182_41B9_E864BFAE9871_0_HS_5_0.png",
      "class": "ImageResourceLevel",
      "width": 420,
      "height": 233
     }
    ]
   },
   "pitch": -14.16,
   "yaw": -95.46,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 24.13,
   "distance": 50
  }
 ],
 "id": "overlay_3E699650_2979_4489_41A8_CC6EB4534AE8",
 "data": {
  "label": "Second Floor"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -95.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ABF2F72_2456_8182_41B9_E864BFAE9871_0_HS_5_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 28,
      "height": 16
     }
    ]
   },
   "pitch": -14.16,
   "hfov": 24.13
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "toolTip": "Go To gate",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.setCameraSameSpotAsMedia(this.camera_01833244_29E9_FC89_41B9_AB89ED672B6C, this.panorama_2E1D4324_244E_8187_41A2_E4DC8BBEDEB5); this.startPanoramaWithCamera(this.panorama_34D7693B_2457_8182_41A0_8428844F4F49, this.camera_01833244_29E9_FC89_41B9_AB89ED672B6C); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 2.11,
   "hfov": 7.57,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E1D4324_244E_8187_41A2_E4DC8BBEDEB5_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 128,
      "height": 102
     }
    ]
   },
   "pitch": -5.4
  }
 ],
 "id": "overlay_3534A0F3_24B6_8081_41AE_FF0D95BE0380",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.11,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E1D4324_244E_8187_41A2_E4DC8BBEDEB5_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 20,
      "height": 16
     }
    ]
   },
   "pitch": -5.4,
   "hfov": 7.57
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2AB2FAAC_2456_8086_417D_7CD05D703895, this.camera_01FCD300_29E9_FC8A_4199_DCEFA61EC700); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -19.07,
   "hfov": 7.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB3F608_2456_838E_41C1_787A02EC5C4F_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 128,
      "height": 127
     }
    ]
   },
   "pitch": -11.68
  }
 ],
 "id": "overlay_3E1C252C_2979_449A_41A0_D2C62565AF3A",
 "data": {
  "label": "V.C co"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -19.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB3F608_2456_838E_41C1_787A02EC5C4F_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -11.68,
   "hfov": 7.44
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB3F608_2456_838E_41C1_787A02EC5C4F_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 581,
      "height": 226
     }
    ]
   },
   "pitch": -10.32,
   "yaw": -14.15,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 33.89,
   "distance": 50
  }
 ],
 "id": "overlay_3EC9D4B5_2978_C58A_41C0_CE6DEB0A5252",
 "data": {
  "label": "V.C Conference"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -14.15,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB3F608_2456_838E_41C1_787A02EC5C4F_0_HS_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 41,
      "height": 16
     }
    ]
   },
   "pitch": -10.32,
   "hfov": 33.89
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2ABF2F72_2456_8182_41B9_E864BFAE9871, this.camera_01EC42E1_29E9_FD8A_41B0_A9B248B7618D); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 60.57,
   "hfov": 7.24,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB3F608_2456_838E_41C1_787A02EC5C4F_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 128,
      "height": 127
     }
    ]
   },
   "pitch": -17.74
  }
 ],
 "id": "overlay_3E881EF7_297F_C577_4169_624199BDF19A",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 60.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB3F608_2456_838E_41C1_787A02EC5C4F_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -17.74,
   "hfov": 7.24
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB3F608_2456_838E_41C1_787A02EC5C4F_0_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 382,
      "height": 232
     }
    ]
   },
   "pitch": -15.37,
   "yaw": 63.19,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.81,
   "distance": 50
  }
 ],
 "id": "overlay_3EFFC326_297F_5C96_41B9_108ED991BC6F",
 "data": {
  "label": "Lobby"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 63.19,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB3F608_2456_838E_41C1_787A02EC5C4F_0_HS_3_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -15.37,
   "hfov": 21.81
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "toolTip": "Go To Statue",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.setCameraSameSpotAsMedia(this.camera_019EE254_29E9_FC8A_41BE_F98EEA806187, this.panorama_34D7693B_2457_8182_41A0_8428844F4F49); this.startPanoramaWithCamera(this.panorama_2ABB24F3_2457_8082_41B1_4F11D5C512BF, this.camera_019EE254_29E9_FC8A_41BE_F98EEA806187); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -170.89,
   "hfov": 7.54,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34D7693B_2457_8182_41A0_8428844F4F49_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 128,
      "height": 127
     }
    ]
   },
   "pitch": -7.55
  }
 ],
 "id": "overlay_362779B7_24B1_8082_41A8_EE7D7E55AF53",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -170.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34D7693B_2457_8182_41A0_8428844F4F49_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -7.55,
   "hfov": 7.54
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2ABB24F3_2457_8082_41B1_4F11D5C512BF, this.camera_0086F479_29E9_C57B_41B8_0830E5249AE1); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 0.14,
   "hfov": 7.46,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB720F2_2457_8082_41B8_07FFE76564C0_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 128,
      "height": 127
     }
    ]
   },
   "pitch": -11.12
  }
 ],
 "id": "overlay_3124068B_24F3_8081_41C1_8FC4F1A08CD3",
 "data": {
  "label": "Statue"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB720F2_2457_8082_41B8_07FFE76564C0_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -11.12,
   "hfov": 7.46
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2AB22D62_2457_8182_41B7_882DBA258A32, this.camera_009684AB_29E9_C59F_41B5_EC1C613B1D5D); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -95.45,
   "hfov": 7.51,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB720F2_2457_8082_41B8_07FFE76564C0_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 128,
      "height": 127
     }
    ]
   },
   "pitch": -9.11
  }
 ],
 "id": "overlay_396857A0_292B_438A_41C3_F61F7129F997",
 "data": {
  "label": "GuestHouse"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -95.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB720F2_2457_8082_41B8_07FFE76564C0_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -9.11,
   "hfov": 7.51
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB720F2_2457_8082_41B8_07FFE76564C0_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 303,
      "height": 237
     }
    ]
   },
   "pitch": -15.07,
   "yaw": 170.33,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.37,
   "distance": 50
  }
 ],
 "id": "overlay_390B509A_2929_5DBE_417B_080C60F0811C",
 "data": {
  "label": "Admin "
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 170.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB720F2_2457_8082_41B8_07FFE76564C0_0_HS_2_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 20,
      "height": 15
     }
    ]
   },
   "pitch": -15.07,
   "hfov": 17.37
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB720F2_2457_8082_41B8_07FFE76564C0_0_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 531,
      "height": 238
     }
    ]
   },
   "pitch": -6.86,
   "yaw": -93.52,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 31.24,
   "distance": 50
  }
 ],
 "id": "overlay_393A3ADD_2927_CDBB_41AF_293DF303A372",
 "data": {
  "label": "Gusethouse"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -93.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB720F2_2457_8082_41B8_07FFE76564C0_0_HS_3_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 35,
      "height": 16
     }
    ]
   },
   "pitch": -6.86,
   "hfov": 31.24
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2AB668B4_2457_8086_41BF_D65E43D4FAAA, this.camera_00A144C7_29E9_C596_41C0_B8BCF1BABB5E); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 171.03,
   "hfov": 7.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB720F2_2457_8082_41B8_07FFE76564C0_0_HS_4_0.png",
      "class": "ImageResourceLevel",
      "width": 128,
      "height": 127
     }
    ]
   },
   "pitch": -17.48
  }
 ],
 "id": "overlay_26E19C98_2939_C5BA_41B0_141D9D8AFB1C",
 "data": {
  "label": "Admin"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 171.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB720F2_2457_8082_41B8_07FFE76564C0_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -17.48,
   "hfov": 7.25
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB720F2_2457_8082_41B8_07FFE76564C0_0_HS_5_0.png",
      "class": "ImageResourceLevel",
      "width": 375,
      "height": 237
     }
    ]
   },
   "pitch": -8.34,
   "yaw": 2.43,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 22.02,
   "distance": 50
  }
 ],
 "id": "overlay_3973FDA8_293B_4799_41B8_989CE634CF4C",
 "data": {
  "label": "Statue"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB720F2_2457_8082_41B8_07FFE76564C0_0_HS_5_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 25,
      "height": 15
     }
    ]
   },
   "pitch": -8.34,
   "hfov": 22.02
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2AB668B4_2457_8086_41BF_D65E43D4FAAA, this.camera_015AE3EC_29E9_C399_41C3_0BBC6CB7A571); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -57.37,
   "hfov": 7.5,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ABB4416_2456_8782_41B2_EF0E4A3CE6F6_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 128,
      "height": 127
     }
    ]
   },
   "pitch": -9.2
  }
 ],
 "id": "overlay_38DC8B50_2939_CC8A_41B8_A05D4F3E9FCC",
 "data": {
  "label": "Exit"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -57.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ABB4416_2456_8782_41B2_EF0E4A3CE6F6_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -9.2,
   "hfov": 7.5
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ABB4416_2456_8782_41B2_EF0E4A3CE6F6_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 235,
      "height": 222
     }
    ]
   },
   "pitch": -6.6,
   "yaw": -56.46,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.84,
   "distance": 50
  }
 ],
 "id": "overlay_3880C47A_2938_C579_41A5_CFF22D4CB6DF",
 "data": {
  "label": "Exit"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -56.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ABB4416_2456_8782_41B2_EF0E4A3CE6F6_0_HS_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -6.6,
   "hfov": 13.84
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2AB54871_2452_8F9E_41BA_35249D671A13, this.camera_014B73BC_29E9_C3FA_418D_36D6DD27F888); this.mainPlayList.set('selectedIndex', 37)"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -149.1,
   "hfov": 6.74,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ABB4416_2456_8782_41B2_EF0E4A3CE6F6_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 115,
      "height": 114
     }
    ]
   },
   "pitch": -11.06
  }
 ],
 "id": "overlay_38CC8FBA_2928_C3F9_4194_61317E8DCB7B",
 "data": {
  "label": "V.C.Lobby"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -149.1,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ABB4416_2456_8782_41B2_EF0E4A3CE6F6_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -11.06,
   "hfov": 6.74
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ABB4416_2456_8782_41B2_EF0E4A3CE6F6_0_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 449,
      "height": 212
     }
    ]
   },
   "pitch": -7.63,
   "yaw": -147.76,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 26.4,
   "distance": 50
  }
 ],
 "id": "overlay_3B6DF5F4_292B_C789_41B7_0BE93976B3C6",
 "data": {
  "label": "V.C Lobby"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -147.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ABB4416_2456_8782_41B2_EF0E4A3CE6F6_0_HS_3_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 33,
      "height": 16
     }
    ]
   },
   "pitch": -7.63,
   "hfov": 26.4
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 29)"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 3.18,
   "hfov": 6.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ABB4416_2456_8782_41B2_EF0E4A3CE6F6_0_HS_4_0.png",
      "class": "ImageResourceLevel",
      "width": 115,
      "height": 114
     }
    ]
   },
   "pitch": -7.3
  }
 ],
 "id": "overlay_3B2384D5_2928_C58A_41A7_B92A6A1572AD",
 "data": {
  "label": "Registrar"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 3.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ABB4416_2456_8782_41B2_EF0E4A3CE6F6_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -7.3,
   "hfov": 6.81
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ABB4416_2456_8782_41B2_EF0E4A3CE6F6_0_HS_5_0.png",
      "class": "ImageResourceLevel",
      "width": 468,
      "height": 196
     }
    ]
   },
   "pitch": -8.81,
   "yaw": 104.06,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 27.4,
   "distance": 50
  }
 ],
 "id": "overlay_3BE6086D_292F_4C9B_41B8_361C797429AD",
 "data": {
  "label": "pg and library"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 104.06,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ABB4416_2456_8782_41B2_EF0E4A3CE6F6_0_HS_5_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 38,
      "height": 15
     }
    ]
   },
   "pitch": -8.81,
   "hfov": 27.4
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 29); this.mainPlayList.set('selectedIndex', 18)"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 104.41,
   "hfov": 6.75,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ABB4416_2456_8782_41B2_EF0E4A3CE6F6_0_HS_6_0.png",
      "class": "ImageResourceLevel",
      "width": 115,
      "height": 114
     }
    ]
   },
   "pitch": -10.8
  }
 ],
 "id": "overlay_331A4D4D_295B_449B_41B3_322B4C38BE67",
 "data": {
  "label": "centre"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 104.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ABB4416_2456_8782_41B2_EF0E4A3CE6F6_0_HS_6_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -10.8,
   "hfov": 6.75
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ABB4416_2456_8782_41B2_EF0E4A3CE6F6_0_HS_7_0.png",
      "class": "ImageResourceLevel",
      "width": 468,
      "height": 196
     }
    ]
   },
   "pitch": -5.54,
   "yaw": 6.59,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 27.59,
   "distance": 50
  }
 ],
 "id": "overlay_30FE78AB_295B_4D9F_4181_5BE260C514CB",
 "data": {
  "label": "Registrar office"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 6.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2ABB4416_2456_8782_41B2_EF0E4A3CE6F6_0_HS_7_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 38,
      "height": 15
     }
    ]
   },
   "pitch": -5.54,
   "hfov": 27.59
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2AB54871_2452_8F9E_41BA_35249D671A13, this.camera_00C0E516_29E9_C4B6_41B6_0F73DA6014CC); this.mainPlayList.set('selectedIndex', 37)"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 80.37,
   "hfov": 6.74,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB0AD0A_2452_8182_41C1_9EBC43ACB9E3_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 115,
      "height": 114
     }
    ]
   },
   "pitch": -11.28
  }
 ],
 "id": "overlay_3DBCDD24_296F_4489_41BC_2093FB6EEBEA",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 80.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB0AD0A_2452_8182_41C1_9EBC43ACB9E3_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -11.28,
   "hfov": 6.74
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB0AD0A_2452_8182_41C1_9EBC43ACB9E3_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 261,
      "height": 194
     }
    ]
   },
   "pitch": -8.88,
   "yaw": 82.71,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.3,
   "distance": 50
  }
 ],
 "id": "overlay_3C65424B_296F_5C9F_417B_F8771B0C6668",
 "data": {
  "label": "Exit"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 82.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AB0AD0A_2452_8182_41C1_9EBC43ACB9E3_0_HS_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -8.88,
   "hfov": 15.3
  }
 ]
}],
 "minWidth": 20,
 "scrollBarColor": "#000000",
 "desktopMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "scrollBarVisible": "rollOver",
 "mobileMipmappingEnabled": false,
 "shadow": false,
 "gap": 10,
 "mouseWheelEnabled": false,
 "scripts": {
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "unregisterKey": function(key){  delete window[key]; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getKey": function(key){  return window[key]; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "existsKey": function(key){  return key in window; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "registerKey": function(key, value){  window[key] = value; }
 },
 "backgroundPreloadEnabled": true,
 "scrollBarMargin": 2,
 "data": {
  "name": "Player450"
 },
 "defaultVRPointer": "laser",
 "paddingTop": 0,
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "left"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
