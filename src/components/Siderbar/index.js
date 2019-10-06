import React, { Component } from 'react';
import { connect } from 'react-redux';

// import { Container } from './styles';

class Siderbar extends Component {

  toggleLesson = (module, lesson) => {
    return {
      type: 'TOGGLE_LESSON',
      module,
      lesson,
    }
  }

  render() {
    const { modules, dispatch } = this.props

    return (
      <aside>
        { modules.map(module => (
          <div key={module.id}>
            <strong>{module.title}</strong>
            <ul>
              { module.lessons.map(lesson => (
                <li key={lesson.id}>
                  {lesson.title}
                  <button onClick={() => dispatch(this.toggleLesson(module, lesson))}>Selecionar</button>
                </li>
              ))}
            </ul>
          </div>
        )) }
      </aside>
    );
  }
}

const mapStateToProps = state => ({
  modules: state.modules
});

export default connect(mapStateToProps)(Siderbar);
