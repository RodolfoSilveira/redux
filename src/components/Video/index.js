import React, { Component } from 'react';
import {connect} from 'react-redux'

class Video extends Component {

  render() {
    const {activeModule, activeLesson} = this.props
    return (
      <div>
        <strong>Módulo {activeModule.title}</strong>
        <span>Aula {activeLesson.title}</span>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  activeModule: state.activeModule,
  activeLesson: state.activeLesson
});

export default connect(mapStateToProps)(Video);
