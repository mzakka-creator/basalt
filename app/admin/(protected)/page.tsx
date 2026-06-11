import { getBlogEvents, getBlogPosts } from '@/lib/cms/store';
import AdminDashboardClient from '../components/AdminDashboardClient';

export default async function AdminDashboardPage() {
  const [posts, events] = await Promise.all([getBlogPosts(), getBlogEvents()]);
  return <AdminDashboardClient postCount={posts.length} eventCount={events.length} />;
}
