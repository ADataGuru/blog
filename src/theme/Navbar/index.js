/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, {useCallback, useState, useEffect} from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import SearchBar from '@theme/SearchBar';
import ColorModeToggle from '@theme/ColorModeToggle';
import {
    useThemeConfig,
    useMobileSecondaryMenuRenderer,
    usePrevious,
    useHistoryPopHandler,
    useHideableNavbar,
    useLockBodyScroll,
    useWindowSize,
    useColorMode,
} from '@docusaurus/theme-common';
import {useActivePlugin} from '@docusaurus/plugin-content-docs/client';
import NavbarItem from '@theme/NavbarItem';
import Logo from '@theme/Logo';
import IconMenu from '@theme/IconMenu';
import IconClose from '@theme/IconClose';
import styles from './styles.module.css';
import Link from "@docusaurus/core/lib/client/exports/Link";
import classnames from "classnames";
import RendezVous from "../../pages/rendezVous"; // retrocompatible with v1

const DefaultNavItemPosition = 'right';

function useNavbarItems() {
    // TODO temporary casting until ThemeConfig type is improved
    return useThemeConfig().navbar.items;
} // If split links by left/right
// if position is unspecified, fallback to right (as v1)

function splitNavItemsByPosition(items) {
    const leftItems = items.filter(
        (item) => (item.position ?? DefaultNavItemPosition) === 'left',
    );
    const rightItems = items.filter(
        (item) => (item.position ?? DefaultNavItemPosition) === 'right',
    );
    return {
        leftItems,
        rightItems,
    };
}

function useMobileSidebar() {
    const windowSize = useWindowSize(); // Mobile sidebar not visible on hydration: can avoid SSR rendering

    const shouldRender = windowSize === 'mobile'; // || windowSize === 'ssr';

    const [shown, setShown] = useState(false); // Close mobile sidebar on navigation pop
    // Most likely firing when using the Android back button (but not only)

    useHistoryPopHandler(() => {
        if (shown) {
            setShown(false); // Should we prevent the navigation here?
            // See https://github.com/facebook/docusaurus/pull/5462#issuecomment-911699846

            return false; // prevent pop navigation
        }

        return undefined;
    });
    const toggle = useCallback(() => {
        setShown((s) => !s);
    }, []);
    useEffect(() => {
        if (windowSize === 'desktop') {
            setShown(false);
        }
    }, [windowSize]);
    return {
        shouldRender,
        toggle,
        shown,
    };
}

function useColorModeToggle() {
    const {
        colorMode: {disableSwitch},
    } = useThemeConfig();
    const {isDarkTheme, setLightTheme, setDarkTheme} = useColorMode();
    const toggle = useCallback(
        (e) => (e.target.checked ? setDarkTheme() : setLightTheme()),
        [setLightTheme, setDarkTheme],
    );
    return {
        isDarkTheme,
        toggle,
        disabled: disableSwitch,
    };
}

function useSecondaryMenu({sidebarShown, toggleSidebar}) {
    const content = useMobileSecondaryMenuRenderer()?.({
        toggleSidebar,
    });
    const previousContent = usePrevious(content);
    const [shown, setShown] = useState(
        () =>
            // /!\ content is set with useEffect,
            // so it's not available on mount anyway
            // "return !!content" => always returns false
            false,
    ); // When content is become available for the first time (set in useEffect)
    // we set this content to be shown!

    useEffect(() => {
        const contentBecameAvailable = content && !previousContent;

        if (contentBecameAvailable) {
            setShown(true);
        }
    }, [content, previousContent]);
    const hasContent = !!content; // On sidebar close, secondary menu is set to be shown on next re-opening
    // (if any secondary menu content available)

    useEffect(() => {
        if (!hasContent) {
            setShown(false);
            return;
        }

        if (!sidebarShown) {
            setShown(true);
        }
    }, [sidebarShown, hasContent]);
    const hide = useCallback(() => {
        setShown(false);
    }, []);
    return {
        shown,
        hide,
        content,
    };
}

function NavbarMobileSidebar({sidebarShown, toggleSidebar}) {
    useLockBodyScroll(sidebarShown);
    const items = useNavbarItems();
    const colorModeToggle = useColorModeToggle();
    const secondaryMenu = useSecondaryMenu({
        sidebarShown,
        toggleSidebar,
    });
    return (
        <div className={classnames("navbar-sidebar")}>
            <div className="navbar-sidebar__brand">

                {!colorModeToggle.disabled && (
                    <ColorModeToggle
                        className={styles.navbarSidebarToggle}
                        checked={colorModeToggle.isDarkTheme}
                        onChange={colorModeToggle.toggle}
                    />
                )}
                <Logo
                    className={classnames(styles.leftNavBarLogo)}
                />
                <button
                    type="button"
                    className="clean-btn navbar-sidebar__close"
                    onClick={toggleSidebar}>
                    <IconClose
                        color="var(--ifm-color-emphasis-600)"
                    />
                </button>
            </div>

            <div
                className={clsx('navbar-sidebar__items', {
                    'navbar-sidebar__items--show-secondary': secondaryMenu.shown,
                })}>
                <div className="navbar-sidebar__item menu">
                    <ul className="menu__list">
                        {items.map((item, i) => (
                            <NavbarItem mobile {...item} onClick={toggleSidebar} key={i}/>
                        ))}
                    </ul>
                    <Link to="/RendezVous/">
                        <button
                            className={classnames("button button--outline button--warning", styles.leftNavbarItem)}>Prendre
                            rendez-vous
                        </button>
                    </Link>
                </div>

                <div className="navbar-sidebar__item menu">
                    {items.length > 0 && (
                        <button
                            type="button"
                            className="clean-btn navbar-sidebar__back"
                            onClick={secondaryMenu.hide}>
                            <Translate
                                id="theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel"
                                description="The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)">
                                ← Back to main menu
                            </Translate>
                        </button>
                    )}
                    {secondaryMenu.content}
                </div>

            </div>
        </div>
    );
}

export default function Navbar() {
    const {
        navbar: {hideOnScroll, style},
    } = useThemeConfig();
    const mobileSidebar = useMobileSidebar();
    const colorModeToggle = useColorModeToggle();
    const activeDocPlugin = useActivePlugin();
    const {navbarRef, isNavbarVisible} = useHideableNavbar(hideOnScroll);
    const items = useNavbarItems();
    const hasSearchNavbarItem = items.some((item) => item.type === 'search');
    const {leftItems, rightItems} = splitNavItemsByPosition(items);
    const isBlog = (typeof window !== "undefined") ? window.location.href.toString().includes("/blog") : false
    return (
        <nav
            ref={navbarRef}

            style={{borderBottom: isBlog ? "1px solid var(--ifm-toc-border-color)" : "" }}

            className={clsx('navbar', 'navbar--fixed-top', {
                'navbar--dark': style === 'dark',
                'navbar--primary': style === 'primary',
                'navbar-sidebar--show': mobileSidebar.shown,
                [styles.navBarFont]: true,
                [styles.navbarHideable]: hideOnScroll,
                [styles.navbarHidden]: hideOnScroll && !isNavbarVisible,

            })}>
            <div className={clsx("container", styles.navContainer)}>
                <div className="navbar__items">
                    {(items?.length > 0 || activeDocPlugin) && (
                        <button
                            aria-label="Navigation bar toggle"
                            className="navbar__toggle clean-btn"
                            type="button"
                            tabIndex={0}
                            onClick={mobileSidebar.toggle}
                            onKeyDown={mobileSidebar.toggle}>
                            <div className={classnames(styles.buttonMenu)}>
                                <div id="title" className={classnames(styles.buttonTitle)}><strong>MENU</strong></div>
                                <div id="icon"><IconMenu/></div>
                            </div>
                        </button>
                    )}
                    <Logo className={classnames(styles.navBarLogo)}/>
                    {leftItems.map((item, i) => (
                        <NavbarItem className={classnames(styles.navbarItem)} {...item} key={i}/>
                    ))}
                </div>
                <div className="navbar__items navbar__items--right">
                    {false && !hasSearchNavbarItem && isBlog && !mobileSidebar.shouldRender && <SearchBar/>}
                    {rightItems.map((item, i) => (
                        <NavbarItem {...item} key={i}/>
                    ))}
                    {!colorModeToggle.disabled && (
                        <ColorModeToggle
                            className={styles.toggle}
                            checked={colorModeToggle.isDarkTheme}
                            onChange={colorModeToggle.toggle}
                        />
                    )}
                    <Link to="/RendezVous/">
                        <button
                            className={classnames("button button--outline button--warning", styles.navbarItem)}>Prendre
                            rendez-vous
                        </button>
                    </Link>

                </div>
            </div>


            <div
                role="presentation"
                className="navbar-sidebar__backdrop"
                onClick={mobileSidebar.toggle}
            />

            {mobileSidebar.shouldRender && (
                <NavbarMobileSidebar
                    sidebarShown={mobileSidebar.shown}
                    toggleSidebar={mobileSidebar.toggle}
                />
            )}
        </nav>
    );
}
