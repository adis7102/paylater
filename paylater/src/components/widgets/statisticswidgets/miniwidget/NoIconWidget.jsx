import React from 'react';
import classNames from 'classnames';
import MiniWidgetWrapper from './miniwidget.style';

const NoIconWidget = (
    {iconName, iconColor, background = '#ffffff', headline='', subheader='', rightIcon = false, className , dark= false}
    ) =>{
    return (
        <MiniWidgetWrapper 
            iconColor={iconColor}
            background={background}
            dark={dark}
        >
           {
                rightIcon ?

                <div className={classNames('mini-widget-card', className)}>
                    <div className="row ma-0">
                        <div className="col-12 ptb-15 fs-15">
                            <div id="no-icon-widget-headline">
                                {headline}
                            </div>
                            <div className="subheader mt-20 fs-25 c-text-alternate" id="no-icon-widget-subheader">
                                {subheader}
                            </div>
                        </div>
                    </div>
                </div>

                :

                <div className={classNames('mini-widget-card', className)}>
                    <div className="row ma-0 text-center">
                        <div className="col-12 ptb-15 fs-15">
                            <div id="no-icon-widget-headline">
                                {headline}
                            </div>
                            <div className="subheader mt-20 fs-25 c-text-alternate" id="no-icon-widget-subheader">
                                {subheader}
                            </div>
                        </div>
                    </div>
                </div>
           }
        </MiniWidgetWrapper>
    )
}

export default NoIconWidget;