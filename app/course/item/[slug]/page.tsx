import SingleCourse from '@/components/course/SingleCourse';
import { notFound } from 'next/navigation';

export const dynamic = "force-dynamic";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>; 
}) {
  const { slug } = await params;

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  

  const res = await fetch(`${baseUrl}/api/course/${slug}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    notFound();
  }
  
  const data = await res.json();

  return (
    <div>
      <SingleCourse product={data} />
    </div>
  );
}