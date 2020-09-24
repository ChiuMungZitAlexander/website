import React from 'react'

import './styles.scss'

const Loading = ({ loading = false }) =>
  loading ? <div className="loading-container">Loading...</div> : null

export default Loading
