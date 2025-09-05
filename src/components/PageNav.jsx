import React from 'react'
import { Link } from 'react-router-dom'

const PageNav = () => {
  return (
    <div>
      <nav>
        <ul>
            <li>
                <Link to="/product">Product</Link>
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default PageNav
