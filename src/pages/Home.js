import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { setColorArray } from '../../redux/actions';

import SideColumn from '../component/SideColumn';
import MixColorBox from '../component/MixColorBox';

const colorArray = ['#FF0000', '#FFFF00', '#00FF00', '#0000FF', '#FF9900'];

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    componentDidMount() {
        const { handleSetColorArray } = this.props;

        handleSetColorArray([]);
    }

    render() {
        const { mixColor, colorList } = this.props;
        return (
            <HomeContainer>
                <H1 color={mixColor}>{`拖拖拉拉調色盤 ${mixColor}`}</H1>
                <Tip>使用滑鼠把左邊的顏色拖拉至右邊的調色區然後放入</Tip>
                <ToningContainer>
                    <div>
                        <p>我的調色盤</p>
                        <div>
                            <p>固定色區</p>
                            <SideColumn colorList={colorArray} />
                        </div>
                        <div>
                            <p>新增色區</p>
                            <SideColumn colorList={colorList} />
                        </div>
                    </div>
                    <ToningArea>
                        <p>我的調色區</p>
                        <MixColorBox />
                    </ToningArea>
                </ToningContainer>
            </HomeContainer>
        );
    }
}

const mapStateToProps = (state) => ({
    mixColor: state.setMixColor,
    colorList: state.colorList,
});

const mapDispatchToProps = (dispatch) => ({
    handleSetColorArray: (e) => { dispatch(setColorArray(e)); },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home);

const Tip = styled.p`
    text-align: center;
`;

const ToningArea = styled.div`
    margin-left: 100px;
`;

const ToningContainer = styled.div`
    display: flex;
    text-align: center;
`;

const H1 = styled.h1`
    color: ${(props) => props.color};
    text-align: center;
`;

const HomeContainer = styled.div``;
