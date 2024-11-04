import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <section className="sidebar">
      <div class="logo">
        <span className="logos">ShopSmart</span>
      </div>
      <div class="menus">
        <div class="top_menu">
          <ul class="menu">
            <li>
              <Link to={'/'} title="Dashboard">
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to={'/'} title="Products">
                <span>Products</span>
              </Link>
            </li>
          </ul>
        </div>
        <div class="bottom_menu">
          <ul class="menu">
            <li>
              <Link to={'/'} title="Logout">
                <span>Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Sidebar
