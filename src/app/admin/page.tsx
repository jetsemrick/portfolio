import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { AdminDashboard } from "@/components/admin/AdminDashboard";

export const dynamic = "force-dynamic";

async function getAdminData() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();

  if (!profile || profile.role !== "Admin") {
    redirect("/");
  }

  const { data: users } = await supabase
    .from("profiles")
    .select("*")
    .order("created_at", { ascending: true });

  const { count: totalTournaments } = await supabase
    .from("tournaments")
    .select("*", { count: "exact", head: true });

  const { count: totalRounds } = await supabase
    .from("rounds")
    .select("*", { count: "exact", head: true });

  const { count: totalFlows } = await supabase
    .from("flow_tabs")
    .select("*", { count: "exact", head: true });

  const { count: totalCells } = await supabase
    .from("flow_cells")
    .select("*", { count: "exact", head: true });

  return {
    users: users || [],
    stats: {
      totalUsers: users?.length || 0,
      totalTournaments: totalTournaments || 0,
      totalRounds: totalRounds || 0,
      totalFlows: totalFlows || 0,
      totalCells: totalCells || 0,
    },
  };
}

export default async function AdminPage() {
  const { users, stats } = await getAdminData();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
        <p className="mt-1 text-sm text-foreground/60">
          Manage users and view platform usage data
        </p>
      </div>

      <AdminDashboard users={users} stats={stats} />
    </div>
  );
}
