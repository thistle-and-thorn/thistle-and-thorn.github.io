import { Link } from 'gatsby';
import React from 'react';
import config from "../../../data/SiteConfig";

export default () => {
  return <h3><Link to="/" className="post__root-link">{config.siteTitle}</Link></h3>;
}
