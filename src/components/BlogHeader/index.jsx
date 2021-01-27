import React from 'react'

import Tag from '@assets/icons/tag.svg'

import './styles.scss'

const BlogHeader = ({ title, tag, type, date }) => (
  <div className="blog-header">
    <p className="title">{title}</p>
    <p>
      <img alt="tag" src={Tag} className="tag-icon" />
      {tag.split(',').map(tag => (
        <span className="tag" key={tag}>
          {tag}
        </span>
      ))}
    </p>
    <p className="date">
      <span className="type">{type}</span>
      <span>{date}</span>
    </p>
  </div>
)

export default BlogHeader
