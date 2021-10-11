/** @jsx jsx */
import { jsx } from "theme-ui"
import BlogListItem from "@lekoarts/gatsby-theme-minimal-blog/src/components/blog-list-item"

type ListingProps = {
  posts: {
    slug: string
    title: string
    date: string
    excerpt: string
    description: string
    timeToRead?: number
    tags?: {
      name: string
      slug: string
    }[]
  }[]
  className?: string
  showTags?: boolean
}

const Listing = ({ posts, className = ``, showTags = true }: ListingProps) => {

  const sortedPosts = posts.slice(0).reverse().map(post => post);
  console.log(sortedPosts)
  return (
    <section sx={{ mb: [5, 6, 7] }} className={className}>
      {
        sortedPosts.map((post) =>
          <BlogListItem key={post.slug} post={post} showTags={showTags} />
        )}
    </section>
  )
}
export default Listing
