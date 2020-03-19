import React from 'react';

import ModalJsonFileUploader from './ModalJsonFileUploader';

function ModalPool () {
    let style = {
        root: {
        },
    };

    return (
        <div style={style.root}>
          <ModalJsonFileUploader />
        </div>
    );
}

export default ModalPool;
