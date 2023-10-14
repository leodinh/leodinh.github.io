import React, { Fragment } from 'react';
const NavigationItems = [
    { name: 'About Me', id: 't1' },
    { name: 'My Skills', id: 't2' },
    { name: 'My Background', id: 't3' }
];
function Tab({ selectedSection, onChangeSection }) {
    return (
        <div className="tab">
            {NavigationItems.map((item) => (
                <Fragment key={item.id}>
                    <label htmlFor={item.id}>{item.name}</label>
                    <input
                        id={item.id}
                        value={item.id}
                        type="radio"
                        name="leo"
                        onChange={onChangeSection}
                        className="tab_input"
                        checked={selectedSection === item.id}
                    />
                </Fragment>
            ))}
            <div className="tab_blob"></div>
        </div>
    );
}

export default Tab;
