import React from 'react';

export default class ComponentControllerUnit extends React.Component {
    /*
     * imgFigure 的点击处理函数
     */
    handleClick(e) {

        if (this.props.arrange.isCenter) {
            this.props.inverse();
        } else {
            this.props.center();
        }

        e.stopPropagation();
        e.preventDefault();
    }

    render() {
        let controlelrUnitClassName = 'controller-unit';

        // 如果对应的是居中的图片，显示控制按钮的居中态
        if (this.props.arrange.isCenter) {
            controlelrUnitClassName += ' is-center';

            // 如果同时对应的是翻转图片， 显示控制按钮的翻转态
            if (this.props.arrange.isInverse) {
                controlelrUnitClassName += ' is-inverse';
            }
        }
        return (
            <span className={controlelrUnitClassName} onClick={this.handleClick.bind(this)}>

            </span>
        )
    }
}
