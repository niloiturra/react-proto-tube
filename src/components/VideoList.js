import React from 'react';
import { List, Image, Dimmer, Loader } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reproduceVideo } from '../redux/modules/reproduce-video';

const VideoList = (props) => {
  const renderVideo = (video) => {
    return (
      <List animated verticalAlign="middle" key={video.etag}>
        <List.Item onClick={() => props.reproduceVideo(video)}>
          <Image src={video.snippet.thumbnails.default.url}></Image>
          <List.Content>
            <List.Header>{video.snippet.title}</List.Header>
          </List.Content>
        </List.Item>
      </List>
    );
  };

  return (
    <div className="video-list">
      {props.loading && (
        <Dimmer>
          <Loader size="medium">Carregando...</Loader>
        </Dimmer>
      )}
      {props.videos &&
        props.videos.map((video) => {
          return renderVideo(video);
        })}
    </div>
  );
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ reproduceVideo }, dispatch);

const mapStateToProps = (state) => {
  return {
    videos: state.searchVideo.videos,
    loading: state.searchVideo.loading,
    error: state.searchVideo.error,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);
