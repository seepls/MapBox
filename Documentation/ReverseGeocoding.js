describe('reverseGeocode', () => {
  test('with minimal config', () => {
    geocoding.reverseGeocode({
      query: [15, 14]
    });
    expect(tu.requestConfig(geocoding)).toEqual({
      method: 'GET',
      path: '/geocoding/v5/:mode/:query.json',
      params: {
        query: [15, 14],
        mode: 'mapbox.places'
      },
      query: {}
    });
  });

  test('with all config options', () => {
    geocoding.reverseGeocode({
      query: [15, 14],
      mode: 'mapbox.places-permanent',
      countries: ['AO', 'AR'],
      types: ['country', 'region'],
      bbox: [1, 2, 3, 4],
      limit: 3,
      language: ['de', 'bs'],
      reverseMode: 'distance'
    });
    expect(tu.requestConfig(geocoding)).toEqual({
      method: 'GET',
      path: '/geocoding/v5/:mode/:query.json',
      params: {
        query: [15, 14],
        mode: 'mapbox.places-permanent'
      },
      query: {
        country: ['AO', 'AR'],
        types: ['country', 'region'],
        bbox: [1, 2, 3, 4],
        limit: 3,
        language: ['de', 'bs'],
        reverseMode: 'distance'
      }
    });
  });
});


---
geocodingClient.reverseGeocode({
  query: [-95.4431142, 33.6875431],
  limit: 2
})
  .send()
  .then(response => {
    // GeoJSON document with geocoding matches
    const match = response.body;
  });

"""
config Object setting various parameters such as config.mode  |config.query etc 
