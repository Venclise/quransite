import { currentUser } from "@clerk/nextjs/server";
import { SignIn } from "@clerk/nextjs";
export const dynamic = "force-dynamic";
import Link from "next/link";




const ALLOWED_ADMIN_EMAILS = [
  "zunnurainzahoor955@gmail.com",
  "saroshislamicinstitute@gmail.com"
];

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
    
  const user = await currentUser();
  const userEmail = user?.emailAddresses?.[0]?.emailAddress;

  if (!user )

  {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-900">
        <SignIn routing="hash" />
      </div>
    )
  }
  if(!userEmail || !ALLOWED_ADMIN_EMAILS.includes(userEmail)) {
    return (

        <div className="w-full h-full bg-white flex items-center justify-center">
    <p>Access denied go back to 
        <Link href="/">
        home page
        </Link>
         </p>

    </div>
    )

  }

  return (
    <div className="admin-dashboard-wrapper">
      
      {children}
     
    </div>
  );
}