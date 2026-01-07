"use client";
import {
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  ShoppingBag,
  BookOpen,
  DollarSign,
  GitCompare,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const menuItems = [
  {
    href: "/dashboard",
    icon: LayoutDashboard,
    label: "Dashboard",
  },
  {
    href: "/afiliados",
    icon: ShoppingBag,
    label: "Marketing de Afiliados",
  },
  {
    href: "/tutoriais",
    icon: BookOpen,
    label: "Tutoriais",
  },
  {
    href: "/investimentos",
    icon: DollarSign,
    label: "Investimentos",
  },
  {
    href: "/comparador",
    icon: GitCompare,
    label: "Comparador de Produtos",
  },
];

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <SidebarContent className="p-4">
      <SidebarMenu>
        {menuItems.map((item) => (
          <SidebarMenuItem key={item.href}>
            <Link href={item.href} passHref>
              <SidebarMenuButton
                isActive={pathname === item.href}
                tooltip={item.label}
              >
                <item.icon />
                <span>{item.label}</span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarContent>
  );
}
