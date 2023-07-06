import clsx from "clsx"
import useBaseUrl from "@docusaurus/useBaseUrl"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import React from "react"
import useMetadataContext from "@theme/useMetadataContext"
import SvgImage from "../../components/SvgImage"
import GithubLogo from "../../assets/icons/circle-so-invert.svg"

import sectionCss from "../../css/section.module.css"
import footerStyles from "./styles.module.css"

type Props = Readonly<{
  href?: string
  label: string
  to?: string
  when?: string
  release?: string
}>

const FooterLink = ({ to, href, label, when, release, ...props }: Props) => {
  const linkHref = useBaseUrl(href ?? "", { forcePrependBaseUrl: undefined })
  const linkTo = useBaseUrl(to ?? "")

  return (
    <a
      className={footerStyles.footer__link}
      {...(href != null
        ? when != "abc"
          ? {
              href: linkHref,
              rel: "noopener noreferrer",
              target: "_blank",
            }
          : {
              href: `https://clientapi.agnost.com/v${release?.toString()}/modules.html`,
            }
        : { href: linkTo })}
      {...props}
    >
      {label}
    </a>
  )
}

const Footer = () => {
  const { siteConfig } = useDocusaurusContext()
  const metadataContext = useMetadataContext()
  const {
    themeConfig: {
      footer: { links },
    },
  } = siteConfig

  return (
    <footer
      className={clsx(footerStyles.footer, sectionCss.section, {
        [footerStyles["footer--alt"]]: metadataContext.altFooter,
      })}
    >
      <div
        className={clsx(
          footerStyles.footer__inner,
          sectionCss["section--inner"],
        )}
      >
        <div
          className={clsx(
            footerStyles.footer__column,
            footerStyles["footer__column--left"],
          )}
        >
          <img
            alt="Agnost Footer logo"
            className={footerStyles.footer__logo}
            height={30}
            width={120}
            src="/img/logo_dark.svg"
            title="Agnost | Open-source Kubernetes Development Platform"
          />
          <p className={footerStyles.footer__tagline}>
            Agnost is an <strong>open-source kubernetes </strong>
            development platform for building backend applications easily and at
            scale.
          </p>
          <div className="widget">
            <h5 className={footerStyles.footer__socialsheader}>Connect</h5>
            <ul className={footerStyles.footer__socials}>
              <li>
                <a
                  href="https://github.com/orgs/cloud-agnost/discussions"
                  target="_blank"
                  rel="noreferrer"
                >
                  <SvgImage image={<GithubLogo />} title="Github" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className={clsx(
            footerStyles.footer__column,
            footerStyles["footer__column--right"],
          )}
        >
          {links.map((linkItem, i) => (
            <div key={i} className={footerStyles.footer__links}>
              <ul className={footerStyles.footer__items}>
                {linkItem.title != null && (
                  <li className={footerStyles.footer__title}>
                    {linkItem.title}
                  </li>
                )}

                {linkItem.items?.map((item) => (
                  <li
                    className={footerStyles.footer__item}
                    key={item.href ?? item.to}
                  >
                    <FooterLink {...item} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className={footerStyles.footer__bottom}>
        <p className={footerStyles.footer__copyright}>
          Copyright © {new Date().getFullYear()} Agnost, Inc. | All rights
          reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer
