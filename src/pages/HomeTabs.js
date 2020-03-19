import React from 'react';

function HomeTabs () {
    let style = {
        root: {
            position: 'fixed',
            top: '0px',
            left: '0px',
            width: '100%',
            paddingTop: '22px',
            background: '#f3f3f3',
            zIndex: 20,
        },
        tab: {
            first: {
                marginLeft: '22px',
            }
        },
        label: {
            marginRight: '22px',
        },
        add_button: {
            fontSize: '22px',
            paddingLeft: '22px',
            paddingRight: '22px',
        }
    };

    return (
        <div style={style.root}>

          <div className="tabs is-boxed">
            <ul>
              <li className="is-active" style={style.tab.first}>
                <a>
                  <span style={style.label}>Pictures</span>
                  <i className="fas fa-times-circle"></i>
                </a>
              </li>

              <li>
                <a>
                  <span style={style.label}>File 1</span>
                  <i className="fas fa-times-circle"></i>
                </a>
              </li>

              <li>
                <a>
                  <span style={style.label}>File 2</span>
                  <i className="fas fa-times-circle"></i>
                </a>
              </li>

              <li>
                <a>
                  <span style={style.label}>File 3</span>
                  <i className="fas fa-times-circle"></i>
                </a>
              </li>

              <li>
                <p style={style.add_button}>
                  <i className="fas fa-plus-square"></i>
                </p>
              </li>
            </ul>
          </div>

        </div>
    );
}

export default HomeTabs;
