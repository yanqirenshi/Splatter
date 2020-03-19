import React, { useState } from 'react';

// 参照: https://qiita.com/zaru/items/8c0ab5c70775644d4d41

function ModalJsonFileUploader () {
    const [json, setJson] = useState({
        file: null,
        contents: '',
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
            setJson({
                file: file,
                contents: reader.result,
            });
        };

        reader.readAsText(file);
    };

    return (
        <div className="modal is-active">
          <div className="modal-background"></div>

          <div className="modal-card">

            <header className="modal-card-head">
              <p className="modal-card-title">Uplad JSON file</p>
              <button className="delete" aria-label="close"></button>
            </header>

            <section className="modal-card-body">
              <div style={style.contents_area}>
                {json.file && <p><pre style={style.contents}>{json.contents}</pre></p>}
              </div>

              <input type="file" name="file" id="file" style={style.input} onChange={changeFile} />
            </section>

            <footer className="modal-card-foot" style={style.controller}>
              <button className="button">Cancel</button>
              <button className="button is-success">Upload</button>
            </footer>

          </div>
        </div>
    );
}

export default ModalJsonFileUploader;
