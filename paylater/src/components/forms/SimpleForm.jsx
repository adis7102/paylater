import React from "react";

const SimpleForm = () => {

    const buttonBack = {
        backgroundColor: '#563c91',
        color: 'white'
    };

    return (
        <div>
            <form>
                <div className="form-group pt-15">
                    {/* <label>NOMINAL</label> */}
                    <input
                        type="number"
                        className="font-weight-bold large-text form-control-lg  react-form-input col-12"
                        aria-describedby="emailHelp"
                        placeholder="NOMINAL"
                    />
                </div>

                <div className="form-group ptb-15">
                    {/* <label>PAYMENT METHOD</label> */}
                    <select
                        // onChange={event => setFilter(event.target.value)}
                        style={{ width: "100%" }}
                        className="font-weight-bold large-text form-control-lg react-form-input col-12"
                        >
                        <option value="" disabled selected hidden>PAYMENT METHOD</option>
                        <option value="all">Show All</option>
                        <option value="true">Can Drink</option>
                        <option value="false">Can't Drink</option>
                    </select>
                </div>

                <div className="form-check pb-16">
                    <input type="checkbox" className="font-weight-bold form-check-input" />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                        GENERATE INVOICE
                    </label>
                </div>

                <button
                    style={buttonBack}
                    type="submit"
                    className="btn font-weight-bold col-3 align-center pa-8"
                >
                    KIRIM
                </button>
            </form>
        </div>
    );
};

export default SimpleForm;
