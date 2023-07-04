import clsx from "clsx"
import useBaseUrl from "@docusaurus/useBaseUrl"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import React from "react"
import customFields from "../../../config/customFields"
import useMetadataContext from "@theme/useMetadataContext"
import sectionCss from "../../css/section.module.css"
import footerStyles from "./styles.module.css"

type Props = Readonly<{
  href?: string
  label: string
  to?: string
}>

const FooterLink = ({ to, href, label, ...props }: Props) => {
  const linkHref = useBaseUrl(href ?? "", { forcePrependBaseUrl: undefined })
  const linkTo = useBaseUrl(to ?? "")

  return (
    <a
      className={footerStyles.footer__link}
      {...(href != null
        ? {
            href: linkHref,
            rel: "noopener noreferrer",
            target: "_blank",
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
            loading="lazy"
            alt="Agnost logo"
            className={footerStyles.footer__logo}
            height={30}
            src="/blog/img/logo_dark.svg"
            title="Agnost | Build backend apps faster"
          />
          <p className={footerStyles.footer__tagline}>
            Agnost is a powerful <strong>backend as a service platform</strong>,
            helping developers and businesses to design, deploy and manage
            scalable backend apps.
          </p>
          <div className="widget">
            <h3 className={footerStyles.footer__socialsheader}>Connect</h3>
            <ul className={footerStyles.footer__socials}>
              {/* <li>
                <a
                  href="https://www.instagram.com/agnost"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faInstagram} fixedWidth />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/agnost"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faTwitter} fixedWidth />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/agnost"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faFacebook} fixedWidth />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/agnost"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} fixedWidth />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCreaheCqlIjgrpiK5llp_6g"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faYoutube} fixedWidth />
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/ERK2ssumh8"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faDiscord} fixedWidth />
                </a>
              </li> */}
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
          {customFields.copyright}
        </p>
      </div>
    </footer>
  )
}

export default Footer
