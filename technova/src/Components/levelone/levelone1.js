import React from 'react'
import { l1task1data } from './data/l1task1data'

const LevelOne1 = () => {
  return (
    <>
      <div className="level">
        <div className="level-head">
          <h1>Round One</h1>
          <h3>Task 1</h3>
        </div>
        <div className="level-body">
          <form>
            <ol className="level-data">
            { l1task1data.map((val, key) => {
                const radioGroupName = `inlineRadioOptions${key}`; // create unique radio group name
                return (
                  <li key={key} className="level-val">
                    <div>
                      <label className="form-check-label" htmlFor={radioGroupName}>{val.qstn}</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name={radioGroupName} id={`${radioGroupName}1`} value="option1" />
                      <label className="form-check-label" htmlFor={`${radioGroupName}1`}>{val.option1}</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name={radioGroupName} id={`${radioGroupName}2`} value="option2" />
                      <label className="form-check-label" htmlFor={`${radioGroupName}2`}>{val.option2}</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name={radioGroupName} id={`${radioGroupName}3`} value="option3" />
                      <label className="form-check-label" htmlFor={`${radioGroupName}3`}>{val.option3}</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name={radioGroupName} id={`${radioGroupName}4`} value="option4" />
                      <label className="form-check-label" htmlFor={`${radioGroupName}4`}>{val.option4}</label>
                    </div>
                  </li>
                );
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


export default LevelOne1