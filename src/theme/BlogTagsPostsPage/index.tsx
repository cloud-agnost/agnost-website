/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react"
import clsx from "clsx"
import Translate, { translate } from "@docusaurus/Translate"
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
  usePluralForm,
} from "@docusaurus/theme-common"
import Link from "@docusaurus/Link"
import seCss from "../../css/section.module.css"
import styles from "./styles.module.css"
import BlogListPaginator from "@theme/BlogListPaginator"
import SearchMetadata from "@theme/SearchMetadata"
import type { Props } from "@theme/BlogTagsPostsPage"
import { ListItem } from "../BlogListPage/ListItem"
import Layout from "@theme/Layout"

// Very simple pluralization: probably good enough for now
function useBlogPostsPlural() {
  const { selectMessage } = usePluralForm()
  return (count: number) =>
    selectMessage(
      count,
      translate(
        {
          id: "theme.blog.post.plurals",
          description:
            'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
          message: "One post|{count} posts",
        },
        { count },
      ),
    )
}

export default function BlogTagsPostsPage({
  tag,
  items,
  listMetadata,
}: Props): JSX.Element {
  const blogPostsPlural = useBlogPostsPlural()
  const title = translate(
    {
      id: "theme.blog.tagTitle",
      description: "The title of the page for a blog tag",
      message: "{nPosts} tagged with",
    },
    { nPosts: blogPostsPlural(tag.count) },
  )

  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogTagPostListPage,
      )}
    >
      <PageMetadata title={title}>
        <meta name="robots" content="noindex, nofollow" />
      </PageMetadata>
      <SearchMetadata tag="blog_tags_posts" />
      <Layout
        title={title}
        wrapperClassName={ThemeClassNames.wrapper.blogPages}
        pageClassName={ThemeClassNames.page.blogTagPostListPage}
        searchMetadatas={{
          // assign unique search tag to exclude this page from search results!
          tag: "blog_posts_list",
        }}
      >
        <header className="margin-bottom--xl">
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
                {title}{" "}
                <em className={seCss.section__title__em}>"{tag.label}"</em>
              </h1>
              <br />
              <div
                className={clsx(
                  seCss.section__subtitle,
                  seCss["section__title--accent"],
                  "text--center",
                )}
              >
                <Link href="/blog">
                  <Translate
                    id="theme.tags.tagsPageLink"
                    description="The label of the link targeting the tag list page"
                  >
                    Back to All Posts
                  </Translate>
                </Link>
              </div>
            </div>
          </section>
        </header>

        <main className={styles.root}>
          <div className={styles.posts}>
            {items.map(({ content }) => (
              <ListItem key={content.metadata.permalink} content={content} />
            ))}
          </div>

          <BlogListPaginator metadata={listMetadata} />
        </main>
      </Layout>
    </HtmlClassNameProvider>
  )
}
