import React from 'react'
import { l5task2data } from './data/l5task2data'

const LevelFive2 = () => {
    return (
        <>
            <div className="level">
                <div className="level-head">
                    <h1>Round Five</h1>
                    <h3>Riddle</h3>
                </div>
                <div className="level-body">
                    <form>
                        <ul className="level-data">
                            {l5task2data.map((val, key) => {
                                return <li key={key} className="level-val">
                                    <div className="level-qstn">
                                        <label className="form-check-label" for="formGroupExampleInput">{val.qstn}</label>
                                    </div><br/>
                                    
                                    <div>
                                        <input type="text" className="form-control" placeholder='1st Question' id="formGroupExampleInput" rows="4"/>
                                    </div><br/>
                                    <div>
                                        <input type="text" className="form-control" placeholder='2nd Question' id="formGroupExampleInput" rows="4"/>
                                    </div><br/>
                                    <div>
                                        <input type="text" className="form-control" placeholder='3rd Question' id="formGroupExampleInput" rows="4"/>
                                    </div>

                                </li>
                            })}
                        </ul>
                        <div className="submit">
                            <button type="button" className="btn btn-success">Submit</button>
                        </div>
                    </form>

                </div>

            </div>
        </>
    )
}

export default LevelFive2