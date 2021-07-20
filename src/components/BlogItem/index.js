import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogData} = props
  const {id, avatarUrl, imageUrl, author, title, topic} = blogData

  return (
    <Link to={`/blogs/${id}`}>
      <div className="blog-container">
        <img className="blog-image" alt="blog-img" src={imageUrl} />
        <div className="content-container">
          <p>{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="avatar-container">
            <img className="avatar-image" alt="avatar-img" src={avatarUrl} />
            <p>{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
