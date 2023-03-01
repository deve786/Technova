import React from 'react'
import { l3task2data } from './data/l3task2data'

const LevelThree2 = () => {
    return (
        <>
            <div className="level">
                <div className="level-head">
                    <h1>Level Three</h1>
                    <h3>Task 2</h3>
                </div>
                <div className="level-body">
                    <form>
                        <ul className="level-data">
                            {l3task2data.map((val, key) => {
                                return <li key={key} className="level-val">
                                    <div className="level-qstn">
                                        <label className="form-check-label" for="inlineRadio1">{val.qstn}</label>
                                    </div>
                                    <div>
                                        <input type="file" className="form-control upload" id="form4Example3" rows="4"/>
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

export default LevelThree2