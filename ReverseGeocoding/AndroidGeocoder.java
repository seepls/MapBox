@Override
protected void onCreate ( Bundle savedInstanceState ){
    super.onCreate(savedInstanceState);
    setContentView (R.layout.main);
    
    textlong= (TextView) findViewById(R.id.textLong);
    textlat = (TextView) findViewById(R.id.textLat);
    
    LocationManager manager = (LocationManager) getSystemService(Context.LOCATION_SERVICE);
    LocationListener listener = new MyLocationListener();
    manager.requestLocationUpdates(LocationManager.GPS_PROVIDER , 0 , 0 , listener );
}

public class myLocationListener implements LocationListener {
    Geocoder mGeocoder;

    // default constructor
    myLocationListener() {
        // instantiate geocoder object:
        mGeocoder = new Geocoder(this, Locale.getDefault());
    }
    @Override 
    public void onLocationChange(Location location ){
          if(location!= NULL){
              
                double gettextLong  = location.getLongitude();
                double gettextLat = location.getLatitude();
                
                textLat.setText(Double.toString(gettextLat));
                textLong.setText(Double.toString(gettextLong));
                
                List<Address> addresses = mGeocoder.getFromLocation(gettextLat, getTextLong, 1);
           }
           
           
  
