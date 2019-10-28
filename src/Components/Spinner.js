import React from 'react'

const Spinner = () => {
    return (
        <div style={{
            minHeight: "100vh",
            width: "100%",
            backgroundColor: "rgba(0, 115, 209, 0.829)",
            position: "fixed",
            left: 0,

            bottom: 0,
            right: 0,
            zIndex: 10000,
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <div className="loader">

            </div>
        </div>
    )
}

export default Spinner
