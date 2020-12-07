import React from 'react';
import PropTypes from 'prop-types'

const MyCom =({ name, children, favoritNum }) => {
    return (
    <div> 
        안녕, 내 이름은 {name}입니다. 
        <br/> 
        children 값은 {children}입니다.
    </div>
    );
};

MyCom.defaultProps={
    name:'기본이름', 
};

MyCom.propTypes={
    name: PropTypes.string,
}

export default MyCom;