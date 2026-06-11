import { getBlogEvents } from '@/lib/cms/store';
import AdminEventsClient from '../../components/AdminEventsClient';

export default async function AdminEventsPage() {
  const events = await getBlogEvents();
  return <AdminEventsClient events={events} />;
}
