"use client";

import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

export default function ActiveOrders() {
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch("/api/booking", { cache: "no-store" });
        const data = await res.json();
        
     
        const list = Array.isArray(data) ? data : data.bookings || data.booking || [];
        setBookings(list);
      } catch (err) {
        console.error("Error fetching bookings:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
    const interval = setInterval(fetchOrders, 5000);
    return () => clearInterval(interval);
  }, []);


  const pendingOrders = bookings.filter((item) => item.status === "pending" || !item.status);

  if (loading) {
    return <div className="mt-5 text-sm text-gray-500">
      <Spinner />
    </div>;
  }

  if (pendingOrders.length === 0) {
    return <div className="mt-5 text-sm text-gray-700">No active bookings found.</div>;
  }

  return (
    <div className="flex items-center gap-4 overflow-x-auto mt-5 p-2">
      {pendingOrders.map((item) => (
        <div className="w-[25rem] relative p-5 border rounded-xl bg-white shadow-sm shrink-0" key={item._id}>
          <Button
            onClick={async () => {
              await fetch("/api/booking", {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id: item._id }),
              });

              setBookings((prev) =>
                prev.map((o) =>
                  o._id === item._id ? { ...o, status: "delivered" } : o
                )
              );
            }}
            className="h-10 w-10 absolute top-3 right-3 rounded-full bg-green-700 hover:bg-green-800 text-white flex items-center justify-center cursor-pointer"
          >
            <Check size={18} />
          </Button>

          <div className="flex justify-between mt-5 gap-4">
            <div className="flex flex-col gap-1 font-semibold text-gray-500 text-sm">
              <span>Order ID:</span>
              <span>Name:</span>
              <span>Email:</span>
              <span>Phone:</span>
              <span>Country:</span>
              <span>Course:</span>
              <span>Type:</span>
            </div>

            <div className="flex flex-col gap-1 text-right text-gray-900 text-sm font-medium overflow-hidden">
              <span className="truncate max-w-[150px]" title={item._id}>{item._id}</span>
              <span>{item.name || "N/A"}</span>
              <span className="truncate max-w-[150px]" title={item.email}>{item.email || "N/A"}</span>
              <span>{item.number || item.phone || "N/A"}</span>
              <span>{item.country || "N/A"}</span>
              <span className="truncate max-w-[150px]" title={item.course}>{item.course || "N/A"}</span>
              <span className="capitalize">{item.type || "N/A"}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}