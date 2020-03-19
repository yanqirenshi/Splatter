import React from 'react';

function HomeTabs (props) {
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
            paddingBottom: '2px',
        }
    };

    let clickAddFile = () => {
        props.callback('add-json-file');
    };

    let i = 0;
    return (
        <div style={style.root}>

          <div className="tabs is-boxed">
            <ul>
              {
                  props.files.map((data) => {
                      console.log(data);
                      return <li key={i++}
                                 className="is-active"
                                 style={i===1 ? style.tab.first : null}>
                               <a>
                                 <span style={style.label}>
                                   {data.file.name}
                                 </span>
                                 <i className="fas fa-times-circle"></i>
                               </a>
                             </li>;

                  })
              }

              <li>
                <p style={style.add_button} onClick={clickAddFile}>
                  <i className="fas fa-plus-square"></i>
                </p>
              </li>
            </ul>
          </div>

        </div>
    );
}

export default HomeTabs;
