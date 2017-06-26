import React, { Component } from 'react';

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.showItem = this.showItem.bind(this);
  }

  showItem(item) {
      let { id, volumeInfo : {title, imageLinks, infoLink}} = item;

      const alternate = 'http://georgetownradio.com/wp/wp-content/themes/Ciola/library/images/thumbnail-600x350.png'
      return (
        <a key={id} className="book"
          href={infoLink}
          target="_blank"
        >

          <img
            src={ (imageLinks !== undefined) ? imageLinks.thumbnail : alternate }
            alt="book image"
            className="book-img"
          />

          <div className="book-text">
            {title}
          </div>

        </a>
      )
  }

  render() {
    return (
        <div>
          {
            this.props.items.map(this.showItem)
          }
        </div>
    );
  }
}

export default Gallery;
