import React from 'react';
import classNames from 'classnames';
import MiniWidgetWrapper from './miniwidget.style';

const MiniWidget = (
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
                        <div className={`fs-20 col-9 ptb-15`}>
                            <div>
                                {headline}
                            </div>
                            <div className="fs-20 subheader pt-15">
                                {subheader}
                            </div>
                        </div>
                        <div className="col-3 ptb-15 text-right">
                            <i className={iconName}></i>    
                        </div>
                    </div>
                </div>

                :

                <div className={classNames('mini-widget-card', className)}>
                    <div className="row ma-0">
                        <div className="col-3 ptb-12">
                            <i className={iconName}></i>    
                        </div>
                        <div className="fs-18 col-9 ptb-12">
                            <div>
                                {headline}
                            </div>
                            <div className="fs-17 subheader pt-2">
                                {subheader}
                            </div>
                        </div>
                    </div>
                </div>
           }
        </MiniWidgetWrapper>
    )
}

export default MiniWidget;