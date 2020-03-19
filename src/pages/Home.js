import React from 'react';
import { connect } from 'react-redux';

import HomeTabs from './HomeTabs';
import HomeGraph from './HomeGraph';

import { openModalUploadJsonFile } from '../actions/modals';

function Home (props) {
    let style = {
        root: {
            position: 'fixed',
            top: '0px',
            left: '0px',
            width: '100vw',
            height: '100vh',
            background: '#d57c6b',
        },
    };

    let callback = (action) => {
        if ('add-json-file'===action) {
            props.openModalUploadJsonFile();
            return;
        }
    };

    return (
        <div style={style.root}>
          <HomeTabs files={props.files}
                    callback={callback}/>
          <HomeGraph />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        files: state.files,
    };
};

const mapDispatchToProps = (dispatch) => ({
    openModalUploadJsonFile: () => {
        dispatch(openModalUploadJsonFile());
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home);
