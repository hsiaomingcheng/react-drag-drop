import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { setColor } from '../../redux/actions';

import ColorBox from './ColorBox';

class SideColumn extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;

        this.handleDragStart = this.handleDragStart.bind(this);
    }

    handleDragStart(e) {
        const { handleSetColor } = this.props;

        handleSetColor(e);
    }

    render() {
        const { colorList } = this.props;
        return (
            <SideColumnContainer>
                {
                    colorList.map((color) => (
                        <ColorArea key={color}>
                            <ColorBox
                                color={color}
                                handleDragStart={(e) => this.handleDragStart(e)}
                            />
                            <span>{color}</span>
                        </ColorArea>
                    ))
                }
            </SideColumnContainer>
        );
    }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
    handleSetColor: (e) => { dispatch(setColor(e)); },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SideColumn);

const ColorArea = styled.div`
    margin-bottom: 10px;
`;

const SideColumnContainer = styled.div`
    display: flex;
    border: solid 1px #000;
    padding: 10px;
    max-width: 622px;
    min-height: 122px;
    flex-wrap: wrap;
    box-sizing: border-box;
`;
