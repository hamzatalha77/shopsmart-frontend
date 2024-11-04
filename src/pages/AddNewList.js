import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const AddNewList = () => {
  const [hasData, setHasData] = useState(false)
  return (
    <section className="addcourses">
      <div>
        <h1 className="title2">Create a New List</h1>
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
                className="field"
                value=""
                size="8"
                placeholder="value"
                tabindex="1"
              />
            </div>
          </div>
        </form>
        <div className="bbtn2">
          <div className="button2">
            <Link to={'/addcourses'} className="button-66">
              Create Product
            </Link>
          </div>
        </div>
        {hasData && (
          <table>
            <tr>
              <th>Name</th>
              <th>Quantité</th>
              <th>Note</th>
              <th>Status</th>
            </tr>
            <tr>
              <td>Peter</td>
              <td>Griffin</td>
              <td>Peter</td>
              <td>Griffin</td>
            </tr>
            <tr>
              <td>Lois</td>
              <td>Griffin</td>
              <td>Lois</td>
              <td>Griffin</td>
            </tr>
          </table>
        )}
        <div className="bbtn">
          <div className="button2">
            <Link to={'/addcourses'} className="button-66">
              Save
            </Link>
          </div>
        </div>

        <button onClick={() => setHasData(!hasData)}>Toggle Data</button>
      </div>
    </section>
  )
}

export default AddNewList
