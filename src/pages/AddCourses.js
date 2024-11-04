import React from 'react'
import { Link } from 'react-router-dom'

const AddCourses = () => {
  return (
    <section className="addcourses">
      <div>
        <h1 className="title1">New Product</h1>
        <form action="#">
          <div>
            <label class="desc" id="title1" for="Field1">
              Name
            </label>
            <div>
              <input
                id="Field1"
                name="Field1"
                type="text"
                class="field text fn"
                value=""
                size="8"
                tabindex="1"
              />
            </div>
          </div>
          <div>
            <label class="desc" id="title1" for="Field1">
              Quantité
            </label>
            <div>
              <input
                id="Field1"
                name="Field1"
                type="text"
                class="field text fn"
                value=""
                size="8"
                tabindex="1"
              />
            </div>
          </div>

          <div>
            <label class="desc" id="title3" for="Field3">
              Note
            </label>
            <div>
              <input
                id="Field3"
                name="Field3"
                type="email"
                spellcheck="false"
                value=""
                maxlength="255"
                tabindex="3"
              />
            </div>
          </div>

          <div>
            <fieldset>
              <legend id="title5" class="desc">
                Is bought
              </legend>

              <div>
                <input
                  id="radioDefault_5"
                  name="Field5"
                  type="hidden"
                  value=""
                />
                <div>
                  <input
                    id="Field5_0"
                    name="Field5"
                    type="radio"
                    value="First Choice"
                    tabindex="5"
                  />
                  <label class="choice" for="Field5_0"></label>
                </div>
              </div>
            </fieldset>
          </div>

          <div>
            <label class="desc" id="title106" for="Field106">
              Shopping list
            </label>
            <div>
              <select
                id="dropdown"
                name="Field106"
                type="select"
                class="field select medium"
                tabindex="11"
              >
                <option value="First Choice">Select</option>
                <option value="Second Choice">Second Choice</option>
                <option value="Third Choice">Third Choice</option>
              </select>
            </div>
          </div>
        </form>
        <div className="bbtn">
          <div className="button2">
            <Link to={'/addnewlist'} className="button-66">
              Create Product
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AddCourses
