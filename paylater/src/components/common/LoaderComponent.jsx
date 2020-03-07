import React, { Fragment } from 'react';
import { connect } from "react-redux";

const LoaderComponent = props => {
    return (
        <Fragment>
            {
                props.loading &&
                <div className="tbl-loader">
                    <div className="lds-ring">
                        <div />
                        <div />
                        <div />
                        <div />
                    </div>
                </div>
            }
        </Fragment>
    );
};

export default connect(
    LoaderComponent,
    null
)(LoaderComponent);