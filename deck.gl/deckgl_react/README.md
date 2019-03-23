deck.gl layers fit naturally into React's component render flow and flux/redux based appications

use JSX syntax to create deck.gl views as React children of the DeckGL

To achive the overlay effect, the DeckGL component creates a transparent canvas DOM element, into which the deck.gl layers passed in the layers prop will render (using WebGL). Since this canvas is transparent, any other component you have underneath (typically a map) will visible behind the layers.
