import React from "react";
import { Link } from "gatsby";

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
        <ol>
          {postList.map((post) => {
            return (
              <h2>
                <li>
                  <Link to={post.path} key={post.title}>
                    {post.title}
                  </Link>
                </li>
              </h2>
            )
          })}
        </ol>
      </div>
    );
  }
}

export default PostListing;