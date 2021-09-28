/** @jsx jsx */
import { jsx, Link } from "theme-ui"
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata"

export const Footer = () => {
  const { siteTitle } = useSiteMetadata()

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
        {new Date().getFullYear()} by {siteTitle}. All rights reserved.
      </div>
      <div>
        A Project Commissioned
        by
        <Link
          aria-label="Link to the KW Berlins' Open Secret Festival website"
          href="https://www.kw-berlin.de/en/open-secret/"
        >
          Open Secret Festival and KW Berlin
        </Link>
      </div>
    </footer>
  )
}

export default Footer