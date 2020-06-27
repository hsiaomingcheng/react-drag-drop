import React from 'react';
import styled from 'styled-components';

class ColorBox extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        const { color, handleDragStart } = this.props;
        return (
            <ColorBoxContainer
                draggable
                onDragStart={() => handleDragStart(color)}
                color={color}
            />
        );
    }
}

export default ColorBox;

ColorBox.defaultProps = {
    color: '#FF0000',
    handleDrop: () => { },
};

const ColorBoxContainer = styled.div`
    margin: 0 auto 20px;
    background: ${(props) => props.color};
    width: 100px;
    height: 100px;
`;
