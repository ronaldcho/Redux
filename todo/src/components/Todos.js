import React from 'react';
import { connect } from 'react-redux';

import  Text from './Todo';

const Texts = (props) => {
    const texts = props.texts.map((text, i) => <Text text={text} key={i} index={i} />);
    return (
      <ul>
        { texts }
      </ul>
    );
} 

const mapStateToProps = (state) => {
  return{
      texts: state.texts
  };
};

export default connect(mapStateToProps)(Texts);