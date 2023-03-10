import React from 'react'
import { l3task1data } from './data/l3task1data'

const LevelThree1 = () => {
    return (
        <>
            <div className="level">
                <div className="level-head">
                    <h1>Round Three</h1>
                    <h3>Puzzle Code</h3>
                </div>
                <div className="level-body">
                    <form>
                        <ul className="level-data">
                            {l3task1data.map((val, key) => {
                                return <li key={key} className="level-val">
                                    <div className="level-qstn">
                                        <label className="form-check-label" for="formGroupExampleInput">{val.qstn}</label>
                                    </div>
                                    <div className="level-image"><img src={val.image} height="300" width="300"/></div>
                                    <div>
                                        <input type="file" className="form-control upload" id="formGroupExampleInput" rows="4"/>
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

export default LevelThree1