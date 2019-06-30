import React from 'react';
import Layout from '../../layout';
import PostTags from './PostTags';

class AllPostTags extends React.Component {
  render() {
    const tags = this.props.postEdges
      .reduce((p, postEdge) => p.concat(postEdge.node.frontmatter.tags), []);

    return (
      <Layout>
        <h3>All Post Tags</h3>
        <PostTags tags={tags} />
      </Layout>
    );
  }
}

export default AllPostTags;
