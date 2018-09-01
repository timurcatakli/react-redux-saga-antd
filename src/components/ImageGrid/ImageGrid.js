import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadImages } from '../../actions';
import css from './styles.css';
// import LazyLoad from './LazyLoad';
const loadLazyLoadComponent = () => import('./LazyLoad');
class ImageGrid extends Component {
  componentDidMount() {
    this.props.loadImages();
  }

  render() {
    const { images, error } = this.props;
    return (
      <div className="content">
        <section className="grid">
          {images.map(image => (
            <img
              src={image.urls.small}
              alt={image.user.username}
              key={image.id}
              className="thumbnail"
            />
          ))}
        </section>
        {/* <LazyLoad /> */}
        <button onClick={this.props.loadImages}>Load More Images</button>
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
