import React from 'react'

const Application_Progress = () => {
  return (
    <>
        <div className="widget">
            <div className="row mx-1">
                <div className="col-sm-12">
                    <h5 className="">Application Progress: <>Almost There!</></h5>
                </div>
            </div>

            <div className="row mx-1 mt-3">
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
                    <div className="card stacked my-2" style={{borderRadius:15}}>
                        <div className="card-header text-center bg-white" style={{borderRadius:15}}>
                            <svg className="mb-2" width="25" height="25" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="PersonIcon"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></svg>
                            <h5 className="card-title mb-0">Profile</h5>
                        </div>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
                    <div className="card stacked my-2" style={{borderRadius:15}}>
                        <div className="card-header text-center bg-white" style={{borderRadius:15}}>
                            <svg className="mb-2" width="25" height="25" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="WorkHistoryIcon"><path d="M18 11c1.49 0 2.87.47 4 1.26V8c0-1.11-.89-2-2-2h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h7.68c-.43-.91-.68-1.92-.68-3 0-3.87 3.13-7 7-7zm-8-7h4v2h-4V4z"></path><path d="M18 13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm1.65 7.35L17.5 18.2V15h1v2.79l1.85 1.85-.7.71z"></path></svg>
                            <h5 className="card-title mb-0">Work History</h5>
                        </div>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
                    <div className="card stacked my-2" style={{borderRadius:15}}>
                        <div className="card-header text-center bg-white" style={{borderRadius:15}}>
                            <svg className="mb-2" width="25" height="25" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="SchoolIcon"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3 1 9l11 6 9-4.91V17h2V9L12 3z"></path></svg>
                            <h5 className="card-title mb-0">Education</h5>
                        </div>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
                    <div className="card stacked my-2" style={{borderRadius:15}}>
                        <div className="card-header text-center bg-white" style={{borderRadius:15}}>
                            <svg className="mb-2" width="25" height="25" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="InfoIcon"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path></svg>
                            <h5 className="card-title mb-0">Professional Info</h5>
                        </div>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
                    <div className="card stacked my-2" style={{borderRadius:15}}>
                        <div className="card-header text-center bg-white" style={{borderRadius:15}}>
                            <svg className="mb-2" width="25" height="25" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="RoomPreferencesIcon"><path d="M14 11.26V6h3v4h2V4h-5V3H5v16H3v2h9.26c-.79-1.13-1.26-2.51-1.26-4 0-2.38 1.19-4.47 3-5.74zM10 11h2v2h-2v-2zm11.69 5.37 1.14-1-1-1.73-1.45.49c-.32-.27-.68-.48-1.08-.63L19 12h-2l-.3 1.49c-.4.15-.76.36-1.08.63l-1.45-.49-1 1.73 1.14 1c-.08.5-.08.76 0 1.26l-1.14 1 1 1.73 1.45-.49c.32.27.68.48 1.08.63L17 22h2l.3-1.49c.4-.15.76-.36 1.08-.63l1.45.49 1-1.73-1.14-1c.08-.51.08-.77 0-1.27zM18 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></svg>
                            <h5 className="card-title mb-0">References</h5>
                        </div>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
                    <div className="card stacked my-2" style={{borderRadius:15}}>
                        <div className="card-header text-center bg-white" style={{borderRadius:15}}>
                            <svg className="mb-2" width="25" height="25" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ListAltIcon"><path d="M19 5v14H5V5h14m1.1-2H3.9c-.5 0-.9.4-.9.9v16.2c0 .4.4.9.9.9h16.2c.4 0 .9-.5.9-.9V3.9c0-.5-.5-.9-.9-.9zM11 7h6v2h-6V7zm0 4h6v2h-6v-2zm0 4h6v2h-6zM7 7h2v2H7zm0 4h2v2H7zm0 4h2v2H7z"></path></svg>
                            <h5 className="card-title mb-0">Checklists</h5>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="row mx-1 mt-2">
                <div className="col-xl-9 col-lg-9 col-md-8 col-sm-12 mt-3">
                    <span className="font-weight-bold">
                        Your personal information is needed for many reasons — from facilities contacting you for interviews to fun things like gifts from Aya!
                        Plus, we use your job preferences to find positions with shifts and locations that fit your lifestyle.
                    </span>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 mt-3 text-center">
                    <button className="btn btn-rounded font-weight-bold px-4" style={{background:'#47d0e6',fontSize:20}}>Resume&nbsp;Application</button>
                </div>
            </div>
        </div>
    </>
  )
}
export default Application_Progress