import { getBlogPosts } from '@/lib/cms/store';
import AdminBlogsClient from '../../components/AdminBlogsClient';

export default async function AdminBlogsPage() {
  const posts = await getBlogPosts();
  return <AdminBlogsClient posts={posts} />;
}
