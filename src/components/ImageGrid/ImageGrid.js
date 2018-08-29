import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadImages } from '../../actions';

class ImageGrid extends Component {
  componentDidMount() {
    this.props.loadImages();
  }

  render() {
    const { images, error } = this.props;
    return (
      <div>
        <section>
          {images.map(image => (
            <img
              src={image.urls.small}
              alt={image.user.username}
              key={image.id}
              style={{ height: '200px', float: 'left', margin: 20 }}
            />
          ))}
        </section>
        <button onClick={this.props.loadImages}>Load Images</button>
        {error && <div>{JSON.stringify(error)}</div>}
      </div>
    );
  }
}

const mapStateToProps = ({ isLoading, images, error }) => ({
  isLoading,
  images,
  error,
});

const mapDispatchToProps = dispatch => ({
  loadImages: () => dispatch(loadImages()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ImageGrid);
