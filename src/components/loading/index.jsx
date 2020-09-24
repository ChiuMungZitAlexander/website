import React from 'react'

import './styles.scss'

const Loading = ({ loading = false, percentage }) =>
  loading ? (
    <div className="loading-container">
      <div className="ellipsis">
        <div />
        <div />
        <div />
        <div />
      </div>
      {percentage >= 0 && <p>{percentage}%</p>}
    </div>
  ) : null

export default Loading
