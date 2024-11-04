import React from 'react'
import { Link } from 'react-router-dom'

const ListCourses = () => {
  return (
    <section className="section2">
      <div className="courses">
        <div className="buttons">
          <div className="button1">
            <button className="button-65">List of Courses</button>
          </div>
          <div className="button2">
            <button className="button-66">Read</button>
            <button className="button-66">Update</button>
            <button className="button-66">Delete</button>
          </div>
        </div>

        <div class="container">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Date of Creation</th>
                <th>Number of Article</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>DOE</td>
                <td>Joe</td>
                <td>21</td>
              </tr>
              <tr>
                <td>DOE</td>
                <td>Joe</td>
                <td>21</td>
              </tr>
              <tr>
                <td>DOE</td>
                <td>Joe</td>
                <td>21</td>
              </tr>
              <tr>
                <td>DOE</td>
                <td>Joe</td>
                <td>21</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <div className="button2">
            <Link to={'/addcourses'} className="button-66">
              Create List
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ListCourses
