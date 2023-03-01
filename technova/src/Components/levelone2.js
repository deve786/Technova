import React from 'react'
import { l1task2data } from './l1task2data'

const LevelOne2 = () => {
    return (
        <>
            <div className="level">
                <div className="level-head">
                    <h1>Level One</h1>
                    <h3>Task 2</h3>
                </div>
                <div className="level-body">
                    <form>
                        <ol className="level-data">
                            {l1task2data.map((val, key) => {
                                return <li key={key} className="level-val">
                                    <div className="level-qstn">
                                        <label className="form-check-label" for="inlineRadio1">{val.qstn}</label>
                                    </div>
                                    <div className="form-outline mb-4">
                                        <textarea className="form-control" id="form4Example3" rows="4"></textarea>
                                    </div>

                                </li>
                            })}
                        </ol>
                        <div className="submit">
                            <button type="button" className="btn btn-success">Submit</button>
                        </div>
                    </form>

                </div>

            </div>
        </>
    )
}


export default LevelOne2