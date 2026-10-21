import type { ReactNode } from 'react';
import './globals.css';
export const metadata = { title: 'Liubai · 独立模板', description: 'Liubai 中英文响应式演示官网' };
export default function Layout({ children }: {
    children: ReactNode;
}) { return <html lang="zh-CN"><body>{children}</body></html>; }
