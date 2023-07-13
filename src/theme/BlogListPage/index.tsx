import React from "react"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import Layout from "@theme/Layout"
import BlogListPaginator from "@theme/BlogListPaginator"
import type { FrontMatter as OriginalFrontMatter } from "@theme/BlogPostPage"
import type { Props } from "@theme/BlogListPage"
import type { Tag } from "@theme/BlogTagsListPage"
import { ThemeClassNames } from "@docusaurus/theme-common"

import { ListItem } from "./ListItem"
/* import { Chips } from "./Chips" */
import styles from "./styles.module.css"
import clsx from "clsx"
import seCss from "../../css/section.module.css"

export type FrontMatter = OriginalFrontMatter & { permalink?: string }

function BlogListPage(props: Props): JSX.Element {
  const { metadata, items } = props

  const {
    siteConfig: { title: siteTitle },
  } = useDocusaurusContext()

  const { blogDescription } = metadata
  const { blogTitle } = metadata
  const { permalink } = metadata

  const isBlogOnlyMode = permalink === "/"
  const isTagsPage =
    typeof ((metadata as unknown) as Tag).allTagsPath !== "undefined"

  const title = isBlogOnlyMode ? siteTitle : blogTitle

  const posts = [...items]

  return (
    <>
      <Layout
        title={title}
        description={blogDescription}
        wrapperClassName={ThemeClassNames.wrapper.blogPages}
        pageClassName={ThemeClassNames.page.blogListPage}
        searchMetadatas={{
          // assign unique search tag to exclude this page from search results!
          tag: "blog_posts_list",
        }}
      >
        <section className={clsx(seCss["section--blog"])}>
          <div className={seCss.jumbotron}>
            <h1
              className={clsx(
                seCss.section__title,
                seCss["section__title--jumbotron"],
                seCss["section__title--accent"],
                "text--center",
              )}
            >
              Blogs and community resources
              <br />
            </h1>

            <br />
            <p
              className={clsx(
                seCss.section__subtitle,
                seCss["section__subtitle--jumbotron"],

                "text--center",
              )}
            >
              Content from the Agnost team and community contributors for
              learning and sharing knowledge about Agnost and application
              development.
            </p>
          </div>
        </section>

        <main className={styles.root}>
          <div className={styles.posts}>
            {posts.map(({ content }) => (
              <ListItem
                key={content.metadata.permalink}
                content={content}
                forcedTag={
                  isTagsPage
                    ? {
                        label: ((metadata as unknown) as Tag).name,
                        permalink: metadata.permalink,
                      }
                    : undefined
                }
              />
            ))}
          </div>

          <BlogListPaginator metadata={metadata} />
        </main>
      </Layout>
    </>
  )
}

export default BlogListPage
