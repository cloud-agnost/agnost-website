import React, {type ComponentProps} from 'react';
import clsx from 'clsx';
import {useThemeConfig} from '@docusaurus/theme-common';
import {
  useHideableNavbar,
  useNavbarMobileSidebar,
} from '@docusaurus/theme-common/internal';
import sectionCss from "../../../css/section.module.css"
import {translate} from '@docusaurus/Translate';
import NavbarMobileSidebar from '@theme/Navbar/MobileSidebar';
import type {Props} from '@theme/Navbar/Layout';

import styles from './styles.module.css';
import { useLocation } from '@docusaurus/router';




function NavbarBackdrop(props: ComponentProps<'div'>) {
  return (
    <div
      role='presentation'
      {...props}
      className={clsx('navbar-sidebar__backdrop', props.className)}
    />
  );
}

export default function NavbarLayout({children}: Props): JSX.Element {
  const {
    navbar: {hideOnScroll, style},
  } = useThemeConfig();
  const mobileSidebar = useNavbarMobileSidebar();
  const { navbarRef, isNavbarVisible } = useHideableNavbar(hideOnScroll);





  return (
    <nav
      ref={navbarRef}
      aria-label={translate({
        id: 'theme.NavBar.navAriaLabel',
        message: 'Main',
        description: 'The ARIA label for the main navigation',
      })}
      className={clsx(
        styles.navbarStyle,
        'navbar',
        'navbar--fixed-top',
        hideOnScroll && [
          styles.navbarHideable,
          !isNavbarVisible && styles.navbarHidden,
        ],

        {
          'navbar--dark': style === 'dark',
          'navbar--primary': style === 'primary',
          'navbar-sidebar--show': mobileSidebar.shown,
        },
      )}
    >

      {children}

      <NavbarBackdrop onClick={mobileSidebar.toggle} />
        <NavbarMobileSidebar />
    </nav>
  );
}
