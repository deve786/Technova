import React from "react";
import { l2task4data } from "./data/l2task4data";

const LevelTwo4 = () => {
  return (
    <>
      <div className="level">
        <div className="level-head">
          <h1>Round Two</h1>
          <h3>Task 4</h3>
        </div>
        <div className="level-body">
          <form>
            <ul className="level-data">
              {l2task4data.map((val, key) => {
                return (
                  <li key={key} className="level-val">
                    <div className="level-qstn">
                      <label
                        className="form-check-label"
                        htmlFor="formGroupExampleInput"
                      >
                        {val.qstn}
                      </label>
                    </div>
                    <div className="level-audio">
                      <audio controls>
                        <source src={val.audio} type="audio/mpeg" />
                        Your browser does not support the audio element.
                      </audio>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput"
                        rows="4"
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="submit">
              <button type="button" className="btn btn-success">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LevelTwo4;
