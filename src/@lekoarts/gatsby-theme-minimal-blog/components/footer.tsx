/** @jsx jsx */
import { jsx, Link } from "theme-ui"

export const Footer = () => {

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
        <Link
          aria-label="github repository"
          href="https://github.com/usrrname/understanding-nfts"
        ><img src="octocat.png" width="25" alt="github repository for Understanding NFTs" /></Link>
      </div>
      <div>
        Commissioned by&nbsp;
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