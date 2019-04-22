 /*customizable AR navigation experience , classification and display of regulatory and warning signs etc 
 
 Mapbox live location platform : different data sources empower the map.
 map data from sensors , collected imagery requires a lot of processing before a map can be created or updated 
 Vison SDK : process live data with distributed sensors. 
 
 AR navigation with live traffic support is supported in 50 countries .
 
 
 classfication :
 presence of a feature in an image */
 
import MapboxVision
import MapboxVisionAR
import MapboxVisionSafety
 
 
let videoSource = CameraVideoSource()
let visionManager = 
    VisionManager.create(videoSource: videoSource)
let visionARMAnager = 
    VisionARManager.create(visionManager: visionManager, delegate: self)
let visionSafetyManager = 
    VisionSafetyManager.create(visionManager: visionManager, delegate: self)
videoSource.start()
// `self` should implement `VisionManagerDelegate` protocol
visionManager.start(delegate: self)
visionManager.stop()

videoSource.stop()
visionManager.stop()

// AR and/or Safety should be destroyed first
visionARManager.destroy()
visionSafetyManager.destroy()

// Finally destroy instance of `VisionManager`
visionManager.destroy()
