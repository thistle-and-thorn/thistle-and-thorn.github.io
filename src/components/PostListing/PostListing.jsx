import React from "react";
import { Link } from "gatsby";
import './PostListing.css';

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }
  render() {
    const postList = this.getPostList();
    
    return (
      <div>
        <ul>
          {postList.map((post) => {
            const dateString = (new Date(post.date)).toLocaleDateString();

            return (
              <li className="post-listing__list-header">
                <Link to={post.path} key={post.title}>
                  {dateString} ~ {post.title}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default PostListing;
