"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "sonner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { EllipsisVertical, Trash, SquarePen, ExternalLink } from "lucide-react";

export default function ProductActions({
  id,
  isBlog,
}: {
  id: string;
  isBlog: any;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `/api/${isBlog ? `/blogs/${id}` : `course/${id}`}`,
        {
          method: "DELETE",
        },
      );

      if (!res.ok) throw new Error("Failed to delete product");
      toast.success(`${isBlog ? "Blog" : "Product"} deleted`);
      router.refresh();
    } catch (err) {
      console.error(err);
      toast.error(`Failed to delete the ${isBlog ? "Blog" : "Product"}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="absolute right-2  top-2 cursor-pointer">
        <EllipsisVertical />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="z-50">
        <DropdownMenuItem
          onClick={(e) => {
            e.stopPropagation();
            router.push(`/tours/item/${id}`);
          }}
        >
          <ExternalLink className="mr-2 h-4 w-4" /> View
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={(e) => {
            e.stopPropagation();
            router.push(`/dashboard/${id}`);
          }}
        >
          <SquarePen className="mr-2 h-4 w-4" /> Edit
        </DropdownMenuItem>

        <AlertDialog>
          <AlertDialogTrigger className="w-full bg-red-100 text-red-500 flex items-center  text-sm py-1.5 px-2 rounded-sm">
            <Trash className="mr-2 h-4 w-4" /> Delete
          </AlertDialogTrigger>

          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete the
                course.
              </AlertDialogDescription>
            </AlertDialogHeader>

            <AlertDialogFooter className="flex gap-2">
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction className="bg-red-500" onClick={handleDelete}>
                {loading ? "Deleting..." : "Delete"}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
