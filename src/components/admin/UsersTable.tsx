"use client";

import { Profile } from "@/lib/supabase/types";
import { format } from "date-fns";

interface UsersTableProps {
  users: Profile[];
}

export function UsersTable({ users }: UsersTableProps) {
  return (
    <div className="overflow-x-auto rounded-lg border border-foreground/10">
      <table className="w-full text-left text-sm">
        <thead className="border-b border-foreground/10 bg-foreground/[0.02]">
          <tr>
            <th className="px-4 py-3 font-medium text-foreground/60">Email</th>
            <th className="px-4 py-3 font-medium text-foreground/60">Role</th>
            <th className="px-4 py-3 font-medium text-foreground/60">
              Created
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-foreground/10">
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-foreground/[0.02]">
              <td className="px-4 py-3">{user.email}</td>
              <td className="px-4 py-3">
                <span
                  className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${
                    user.role === "Admin"
                      ? "bg-amber-100 text-amber-800"
                      : "bg-foreground/10 text-foreground/70"
                  }`}
                >
                  {user.role}
                </span>
              </td>
              <td className="px-4 py-3 text-foreground/60">
                {format(new Date(user.created_at), "MMM d, yyyy")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {users.length === 0 && (
        <div className="px-4 py-8 text-center text-foreground/60">
          No users found
        </div>
      )}
    </div>
  );
}
