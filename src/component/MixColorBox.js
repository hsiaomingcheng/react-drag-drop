import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { setMixColor, setColorArray } from '../../redux/actions';

class MixColorBox extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            firstColor: '',
            secondColor: '',
        };

        this.handleDrop = this.handleDrop.bind(this);
        this.handleDragOver = this.handleDragOver.bind(this);
        this.handleMixColor = this.handleMixColor.bind(this);
        this.handleClearColor = this.handleClearColor.bind(this);
        this.handleUpdateColorArray = this.handleUpdateColorArray.bind(this);
    }

    handleDrop(e) {
        // 放入顏色
        const { color, handleSetMixColor } = this.props;
        const { firstColor } = this.state;

        e.preventDefault();

        if (!firstColor) {
            this.setState({
                firstColor: color,
            }, () => {
                handleSetMixColor(color);
            });
        } else {
            this.setState({
                secondColor: color,
            }, () => {
                this.handleMixColor();
            });
        }
    }

    handleDragOver(e) {
        this.preventDefault = e.preventDefault();
    }

    handleMixColor() {
        // 混合顏色
        const { handleSetMixColor } = this.props;
        const { firstColor, secondColor } = this.state;
        let mixColorString = '#';

        for (let i = 0; i < 3; i++) {
            const sub1 = firstColor.substring(1 + 2 * i, 3 + 2 * i);
            const sub2 = secondColor.substring(1 + 2 * i, 3 + 2 * i);
            const v1 = parseInt(sub1, 16);
            const v2 = parseInt(sub2, 16);
            const v = Math.floor((v1 + v2) / 2);
            const sub = v.toString(16).toUpperCase();
            const padsub = (`0${sub}`).slice(-2);
            mixColorString += padsub;
        }

        this.setState({
            firstColor: mixColorString,
            secondColor: '',
        });

        handleSetMixColor(mixColorString);
    }

    handleClearColor() {
        // 清空調色區
        this.setState({ firstColor: '' });
    }

    handleUpdateColorArray() {
        // 加入調色盤
        // 在把顏色加入調色盤之前，必須把firstColor跑一次find
        // 確認都不重複之後才發action更新colorArray
        const { colorList, handleSetColorArray } = this.props;
        const { firstColor } = this.state;

        const isColorExist = colorList.find((e) => e === firstColor);

        if (!isColorExist) {
            handleSetColorArray([...colorList, firstColor]);
        }
    }

    render() {
        const { firstColor } = this.state;
        return (
            <div>
                <MixColorBoxContainer
                    onDrop={(e) => this.handleDrop(e)}
                    onDragOver={(e) => this.handleDragOver(e)}
                    bgColor={firstColor}
                />

                <ButtonStyle
                    onClick={(e) => this.handleUpdateColorArray(e)}
                >
                    加到我的調色盤

                </ButtonStyle>

                <ButtonStyle
                    onClick={(e) => this.handleClearColor(e)}
                >
                    清空我的調色區

                </ButtonStyle>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    color: state.setColor,
    colorList: state.colorList,
});

const mapDispatchToProps = (dispatch) => ({
    handleSetMixColor: (e) => { dispatch(setMixColor(e)); },
    handleSetColorArray: (e) => { dispatch(setColorArray(e)); },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MixColorBox);

const ButtonStyle = styled.div`
    margin-bottom: 10px;
    border: solid 1px #000;
    border-radius: 5px;
    padding: 15px;
    cursor: pointer;
`;

const MixColorBoxContainer = styled.div`
    margin-bottom: 15px;
    border: solid 1px #000;
    border-radius: 50%;
    background: ${(props) => props.bgColor};
    width: 200px;
    height: 200px;
    box-sizing: border-box;
`;
