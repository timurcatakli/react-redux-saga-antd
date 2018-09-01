import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { loadImagesAction } from '../../actions';
import './style.css';

class ImageGrid extends Component {
  componentDidMount() {
    const { loadImages } = this.props;
    loadImages();
  }

  render() {
    const { images, error, loadImages, isLoading } = this.props;
    return (
      <div>
        <Button onClick={loadImages} loading={isLoading} disabled={isLoading} primary>
          Load More Images
        </Button>
        <div className="image-gallery">
          <section className="image-grid">
            {images.reverse().map(image => (
              <div key={image.id}>
                <img src={image.urls.small} alt={image.user.username} />
              </div>
            ))}
          </section>
        </div>
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
  loadImages: () => dispatch(loadImagesAction()),
});

ImageGrid.propTypes = {
  loadImages: PropTypes.func.isRequired,
  images: PropTypes.array,
  error: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
};

ImageGrid.defaultProps = {
  images: [],
  error: '',
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ImageGrid);
