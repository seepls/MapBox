class Map extends React.Component {
  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9'
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    const style {
      position: 'absolute',
      top: 0,
      bottom: 0,
      width: '100%'
    };

    return <div style={style} ref={el => this.mapContainer = el} />;
  }
}

ReactDOM.render(<Map />, document.getElementById('app')); 

//JSX creates div container and map is continously updated through lifecycle methods 
//map : initilized with componentDidMount
//container: this .mapContainer 
//which is the react 's way of providing access to DOM node 
