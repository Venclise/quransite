"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { CountryDropdown } from "../ui/country-dropdown";
import { useState } from "react";
import { toast } from "sonner";

export interface Country {
  alpha2: string;
  alpha3: string;
  countryCallingCodes: string[];
  currencies: string[];
  emoji?: string;
  ioc: string;
  languages: string[];
  name: string;
  status: string;
}

export default function BookingForm({
  title,
  price,
  days,
  time,
}: {
  title: string;
  price: string;
  days: string | any;
  time: string;
}) {
  const [selectedCountry, setSelectedCountry] = useState<Country | undefined>(
    undefined
  );

  const [loading, setLoading] = useState<boolean>(false);
  const [free, setFree] = useState<boolean>(false);

  const [info, setInfo] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
  });

  const handleSubmit = async () => {
    setLoading(true);

    const bookingType = free ? "Free Trial" : `Paid ${price} days:${days} week `;
    const payload = {
      name: info.name,
      email: info.email,
      phone: info.phone,
      country: info.country,
      courseName: title,
      type: bookingType,
    };

    if (!info.name || !info.email || !info.phone || !info.country) {
      toast.error("Please fill in all the required fields.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        cache: "no-store",
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        toast.success(`Successfully booked ${bookingType}!`);
        setInfo({
          name: "",
          email: "",
          phone: "",
          country: "",
        });
        setSelectedCountry(undefined);
      } else {
        toast.error("Failed to book. Please try again later");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger className="p-5 lg:p-0 gap-4 bg-white flex lg:items-center lg:static fixed bottom-0 left-0 w-full z-50 shadow-[0_-4px_10px_rgba(0,0,0,0.05)] lg:shadow-none">
          <Button
            onClick={() => setFree(false)}
            className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white py-6 lg:rounded-full text-sm font-semibold"
          >
            Enroll now
          </Button>
          <Button
            onClick={() => setFree(true)}
            className="flex-1 bg-gray-200 hover:bg-gray-300 text-neutral-800 py-6 lg:rounded-full text-sm font-semibold"
          >
            Book a free trial
          </Button>
        </DialogTrigger>

        <DialogContent className="md:p-16 p-6">
          <DialogHeader>
            <DialogTitle className="flex flex-col gap-4 text-left">
              <span className="text-cyan-500 text-xs font-bold uppercase tracking-widest">
                {free ? "Free Trial Booking" : "Course Enrollment"}
              </span>
              <h2 className="text-2xl font-bold text-gray-900 leading-tight">
                {title}
              </h2>
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                {free ? (
                  <span className="text-gray-700 font-medium">
                    ⏱ {time} mins free session
                  </span>
                ) : (
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black text-cyan-500">
                      {price}
                    </span>
                    <span className="text-gray-500 text-sm font-medium">
                      / {days} days a week
                    </span>
                  </div>
                )}
              </div>
            </DialogTitle>

            <DialogDescription className="w-full flex flex-col gap-6 mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="flex flex-col gap-2 text-left">
                  <span className="text-gray-700 text-sm font-bold ml-1">
                    Full Name
                  </span>
                  <Input
                    value={info.name}
                    placeholder="John Doe"
                    onChange={(e) => setInfo({ ...info, name: e.target.value })}
                    className="rounded-lg border-gray-300 focus:ring-cyan-500"
                    required
                  />
                </label>
                <label className="flex flex-col gap-2 text-left">
                  <span className="text-gray-700 text-sm font-bold ml-1">
                    Email Address
                  </span>
                  <Input
                    type="email"
                    value={info.email}
                    placeholder="john@example.com"
                    onChange={(e) =>
                      setInfo({ ...info, email: e.target.value })
                    }
                    className="rounded-lg border-gray-300 focus:ring-cyan-500"
                    required
                  />
                </label>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="flex flex-col gap-2 text-left">
                  <span className="text-gray-700 text-sm font-bold ml-1">
                    Phone Number
                  </span>
                  <PhoneInput
                    value={info.phone}
                    className="flex h-10 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus-within:ring-2 focus-within:ring-blue-600 transition-all"
                    placeholder="Enter phone number"
                    defaultCountry="US"
                    onChange={(value) =>
                      setInfo({ ...info, phone: value ?? "" })
                    }
                    required
                  />
                </label>
                <div className="flex flex-col gap-2 text-left">
                  <span className="text-gray-700 text-sm font-bold ml-1">
                    Country
                  </span>
                  <CountryDropdown
                    selectedCountry={selectedCountry}
                    setSelectedCountry={setSelectedCountry}
                    setInfo={setInfo}
                  />
                </div>
              </div>

              <Button
                disabled={loading}
                className="w-full py-5 rounded-xl text-md bg-cyan-500 hover:bg-cyan-600 shadow-lg shadow-blue-200 transition-all active:scale-[0.98]"
                onClick={handleSubmit}
              >
                {loading
                  ? "Processing..."
                  : free
                    ? "Confirm Free Trial"
                    : "Confirm Enrollment"}
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}