"use client"

import React from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import { Button, Dropdown, Menu, Select, Space } from 'antd';


function Header() {
    return (
        <div className={styles.headerContainer}>
      <div className={styles.left}>
        <Link href="/">
          <img src="images/logo.png" alt="Logo" href="/"/>
        </Link>
        </div>
        <div className={styles.right}>
        <div>
          <p className={styles.text}>Inovatyvių procesų sprendimai | Administrator menu</p>
        </div>
          <Button
              shape="round">
          Logout
          </Button>
        </div>
      </div>
    )
}



export default Header