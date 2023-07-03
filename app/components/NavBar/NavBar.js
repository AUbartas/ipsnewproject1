"use client";

import React, { useState } from 'react';
import { Menu } from 'antd';
import { useRouter } from 'next/navigation';
import { localeData } from '../../uitility-helper/utility';
import Link from 'next/link';
import styles from './NavBar.module.css'



const NavBar = () => {
  const [selectedKeys] = useState([]);
  const router = useRouter();
  const { locale } = useRouter();
  let t = localeData(locale);

  const menuList = [
    {
      label: "Desk",
      url: "/servicedesk",
      key: 'Servicedesk',
    },
    {
      label: "Statistics",
      url: '/statistics',
      key: 'Statistics',
    },
    {
      label: "Customers",
      url: '/customers',
      key: 'customers',
    },
    {
      label: "Accounts",
      url: '/accounts',
      key: 'accounts',
    },
    {
      label: "Remotecontrol",
      url: '/remotecontrol',
      key: 'remotecontrol',
    },
    {
      label: "BSS",
      url: '/bss',
      key: 'bss',
    },
    {
      label: "Devices",
      url: '/devices',
      key: 'devices',
    },
    {
      label: "Partners",
      url: '/partners',
      key: 'partners',
    },
    {
      label: "Tools",
      url: '/tools',
      key: 'tools',
    },
    {
      label: "Settings",
      url: '/settings',
      key: 'settings',
    },
  ];

  const items = menuList.map((item) => ({
    label: item.disableLink ? (
      item.label
    ) : (
      <Link legacyBehavior href={item.url} passHref>
        <a href={item.url}>{item.label}</a>
      </Link>
    ),
    key: item.key,
    onClick: () => (item.disableLink ? null : router.push(item.url)),
    children: item.children?.map((group) => ({
      type: 'group',
      children: group?.map((subItem) => ({
        label: (
          <Link legacyBehavior href={subItem.url} passHref>
            <a
 href={subItem.url}>{subItem.label}</a>
          </Link>
        ),
        key: subItem.url,
        onClick: () => router.push(subItem.url),
      })),
    })),
  }));


  return (
    <Menu
      className={styles.navBarContainer}
      items={items}
      mode="horizontal"
      selectedKeys={selectedKeys} />
  );
}
  
  export default NavBar;
  