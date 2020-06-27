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
                        <ColorBox
                            key={color}
                            color={color}
                            handleDragStart={(e) => this.handleDragStart(e)}
                        />
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

const SideColumnContainer = styled.div`
    display: flex;
    border: solid 1px #000;
    padding: 10px;
    width: 262px;
    min-height: 262px;
    max-height: 502px;
    flex-wrap: wrap;
    flex-direction: column;
    box-sizing: border-box;
`;
