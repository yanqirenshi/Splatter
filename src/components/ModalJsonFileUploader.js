import React, { useState } from 'react';
import { connect } from 'react-redux';

// 参照: https://qiita.com/zaru/items/8c0ab5c70775644d4d41

import { closeModalUploadJsonFile } from '../actions/modals';
import { addJson } from '../actions/jsons';

function ModalJsonFileUploader (props) {
    const [json, setJson] = useState({
        file: null,
        contents: null,
    });

    let style = {
        root: {
        },
        input: {
            width: '100%',
            paddingLeft: '22px',
            paddingRight: '22px',
            marginTop: '11px',
            marginBottom: '11px',
        },
        contents_area: {
            width: '100%',
            maxHeight: '555px',
            overflow: 'auto',
        },
        contents: {
            textAlign: 'left',
        },
        controller: {
            display: 'flex',
            justifyContent: 'space-between',
        },
    };

    let changeFile = function (e) {
        let file = e.target.files[0];

        var reader = new FileReader();

        reader.onload = function() {
            let contents =  JSON.parse(reader.result);

            setJson({
                file: file,
                contents: contents,
            });
        };

        reader.readAsText(file);
    };

    let isActive = () => {
        return props.modals.json.file.upload ? 'is-active' : '';
    };

    let clickClose = () => {
        props.closeModalUploadJsonFile();
    };

    let clickOpen = () => {
        props.addJson(json);
        clickClose();
    };

    return (
        <div className={`modal ${isActive()}`}>
          <div className="modal-background"></div>

          <div className="modal-card">

            <header className="modal-card-head">
              <p className="modal-card-title">Uplad JSON file</p>
              <button className="delete"
                      aria-label="close"
                      onClick={clickClose}></button>
            </header>

            <section className="modal-card-body">
              <div style={style.contents_area}>
                {
                    json.file &&
                        <pre style={style.contents}>{ JSON.stringify(json.contents, null, 4)}</pre>
                }
              </div>

              <input type="file" name="file" id="file" style={style.input} onChange={changeFile} />
            </section>

            <footer className="modal-card-foot" style={style.controller}>
              <button className="button"
                      onClick={clickClose}>
                Cancel
              </button>

              <button className="button is-success" onClick={clickOpen}>
                Open
              </button>
            </footer>

          </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        modals: state.modals,
    };
};

const mapDispatchToProps = (dispatch) => ({
    closeModalUploadJsonFile: () => {
        dispatch(closeModalUploadJsonFile());
    },
    addJson: (json) => {
        dispatch(addJson(json));
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ModalJsonFileUploader);
