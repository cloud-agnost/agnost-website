import React, {type ReactNode} from 'react';
import {useThemeConfig, ErrorCauseBoundary} from '@docusaurus/theme-common';
import {
  splitNavbarItems,
  useNavbarMobileSidebar,
} from '@docusaurus/theme-common/internal';
import NavbarItem, {type Props as NavbarItemConfig} from '@theme/NavbarItem';
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import SearchBar from '@theme/SearchBar';
import NavbarMobileSidebarToggle from '@theme/Navbar/MobileSidebar/Toggle';
import NavbarLogo from '@theme/Navbar/Logo';
import NavbarSearch from '@theme/Navbar/Search';

import styles from './styles.module.css';
import clsx from 'clsx';
import { useLocation } from '@docusaurus/router';

type LocationState = {
  from: {
    pathname: string
  }
}

function useNavbarItems() {
  // TODO temporary casting until ThemeConfig type is improved
  return useThemeConfig().navbar.items as NavbarItemConfig[];
}

function NavbarItems({items}: {items: NavbarItemConfig[]}): JSX.Element {
  return (
    <>
      {items.map((item, i) => (
        <ErrorCauseBoundary
          key={i}
          onError={(error) =>
            new Error(
              `A theme navbar item failed to render.
Please double-check the following navbar item (themeConfig.navbar.items) of your Docusaurus config:
${JSON.stringify(item, null, 2)}`,
              {cause: error},
            )
          }
        >
          <NavbarItem {...item} />
        </ErrorCauseBoundary>
      ))}
    </>
  );
}

function NavbarContentLayout({

  left,
  right,
}: {
  left: ReactNode;
  right: ReactNode;
  }) {

     const location = useLocation<LocationState>()
  const { pathname } = location.state?.from ?? location
  // eslint-disable-next-line no-console

  /*   let naviagete: JSX.Element[]
  if (pathname.startsWith("/client") || pathname.startsWith("/docs")) {
    naviagete = clientItems.map((item, i) => <NavbarItem {...item} key={i} />)
  } else if (pathname === "/") {
    naviagete = leftItems.map((item, i) => <NavbarItem {...item} key={i} />)
  } */

    let isDocumentation: boolean
  if (
    pathname.startsWith("/client") ||
    pathname.startsWith("/docs") ||
    pathname.startsWith("/blog") ||
    pathname.startsWith("/server")
  ) {
    isDocumentation = true
    // eslint-disable-next-line no-console
  } else {
    isDocumentation = false
    // eslint-disable-next-line no-console
  }

  return (
    <div className={clsx("navbar__inner",
          isDocumentation ? styles.inner : styles.innerCentered)}>
      <div className='navbar__items'>{left}</div>
      <div className='navbar__items navbar__items--right'>{right}</div>
    </div>
  );
}

export default function NavbarContent(): JSX.Element {
  const mobileSidebar = useNavbarMobileSidebar();

  const items = useNavbarItems();
  const [leftItems, rightItems] = splitNavbarItems(items);

  const searchBarItem = items.find((item) => item.type === 'search');



  return (
    <NavbarContentLayout
      left={
        // TODO stop hardcoding items?
        <>
          {!mobileSidebar.disabled && <NavbarMobileSidebarToggle />}
          <NavbarLogo />
          <NavbarItems items={leftItems} />
        </>
      }
      right={
        // TODO stop hardcoding items?
        // Ask the user to add the respective navbar items => more flexible
        <>
          <NavbarItems items={rightItems} />
          <NavbarColorModeToggle className={styles.colorModeToggle} />
          {!searchBarItem  && (
            <NavbarSearch>
              <SearchBar />
            </NavbarSearch>
          )}
        </>
      }
    />
  );
}
