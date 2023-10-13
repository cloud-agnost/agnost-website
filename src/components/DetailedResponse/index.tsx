import React from "react"

const DetailedResponse = ({ children, title = "Toggle me!" }) => {
  return (
    <details className="detail-response">
      <summary>
        <h5>{title}</h5>
      </summary>
      {children}
    </details>
  )
}

export default DetailedResponse
