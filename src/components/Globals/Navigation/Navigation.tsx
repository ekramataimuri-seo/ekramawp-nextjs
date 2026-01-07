import Link from "next/link";
import { print } from "graphql/language/printer";

import styles from "./Navigation.module.css";

import { MenuItem, RootQueryToMenuItemConnection } from "@/gql/graphql";
import { fetchGraphQL } from "@/utils/fetchGraphQL";
import gql from "graphql-tag";

async function getData() {
  // FIX 1: Removed "where: { location: PRIMARY_MENU }" to stop the crash
  const menuQuery = gql`
    query MenuQuery {
      menuItems(first: 10) {
        nodes {
          uri
          target
          label
        }
      }
    }
  `;

  // FIX 2: Added try/catch block to prevent build failures
  try {
    const data = await fetchGraphQL<{
      menuItems: RootQueryToMenuItemConnection;
    }>(print(menuQuery));

    if (!data || !data.menuItems) {
      return { nodes: [] };
    }

    return data.menuItems;
  } catch (error) {
    console.warn("Menu fetch failed, using empty menu:", error);
    return { nodes: [] }; // Return empty menu instead of crashing
  }
}

export default async function Navigation() {
  const menuItems = await getData();

  // FIX 3: Safety check to ensure nodes exists
  const items = menuItems?.nodes || [];

  return (
    <nav
      className={styles.navigation}
      role="navigation"
      itemScope
      itemType="http://schema.org/SiteNavigationElement"
    >
      {items.map((item: MenuItem, index: number) => {
        // Safety check for uri
        if (!item?.uri) return null;

        return (
          <Link
            itemProp="url"
            href={item.uri}
            key={index}
            target={item.target || "_self"}
          >
            <span itemProp="name">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
