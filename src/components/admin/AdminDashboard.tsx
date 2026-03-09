"use client";

import { Profile } from "@/lib/supabase/types";
import { UsersTable } from "./UsersTable";
import { StatsCard } from "./StatsCard";

interface Stats {
  totalUsers: number;
  totalTournaments: number;
  totalRounds: number;
  totalFlows: number;
  totalCells: number;
}

interface AdminDashboardProps {
  users: Profile[];
  stats: Stats;
}

export function AdminDashboard({ users, stats }: AdminDashboardProps) {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="mb-4 text-lg font-medium">Platform Usage</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          <StatsCard label="Total Users" value={stats.totalUsers} />
          <StatsCard label="Tournaments" value={stats.totalTournaments} />
          <StatsCard label="Rounds" value={stats.totalRounds} />
          <StatsCard label="Flows" value={stats.totalFlows} />
          <StatsCard label="Flow Cells" value={stats.totalCells} />
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-medium">All Users</h2>
        <UsersTable users={users} />
      </section>
    </div>
  );
}
