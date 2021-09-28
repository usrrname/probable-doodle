/** @jsx jsx */
import { jsx, Link } from "theme-ui"
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata"

export const Footer = () => {
  const { siteTitle, author } = useSiteMetadata()

  return (
    <footer
      sx={{
        boxSizing: `border-box`,
        display: `flex`,
        justifyContent: `space-between`,
        mt: [6],
        color: `secondary`,
        a: {
          variant: `links.secondary`,
        },
        flexDirection: [`column`, `column`, `row`],
        variant: `dividers.top`,
      }}
    >
      <div>
        {new Date().getFullYear()} by  <Link
          aria-label="the author's twitter"
          href="https://twitter.com/jenninat0r"
        >{author}</Link>
      </div>
      <div>
        {siteTitle} is a project commissioned by&nbsp;
        <Link
          aria-label="Link to the KW Berlins' Open Secret Festival website"
          href="https://www.kw-berlin.de/en/open-secret/"
        >
          Open Secret Festival and KW Berlin
        </Link>&nbsp;
        <img src="kw_grau.png" width="30" />
      </div>
    </footer>
  )
}

export default Footer