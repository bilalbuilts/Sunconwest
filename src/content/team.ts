export type Member = {
  id: string;
  name: string;
  role: string;
  /** id of the person this member reports to. Leave undefined for the top of the chart. */
  reportsTo?: string;
  /** Optional photo, e.g. "/team/john-smith.jpg" (put the file in public/team/). Initials are shown without one. */
  photo?: string;
  /** Optional short line shown on the "Meet the team" cards. */
  bio?: string;
};

/**
 * HOW TO EDIT THE TEAM
 * - Add a person: copy a line below, give it a unique `id`, set `name` and `role`.
 * - `reportsTo` is optional (only used if an org chart is shown again).
 * - Remove a person: delete their line (and re-point anyone who reported to them).
 * The team cards on /team update automatically.
 * Names below are placeholders: replace them with your real employees.
 */
export const team: Member[] = [
  { id: "md", name: "Employee Name", role: "Managing Director", bio: "Leads the company and oversees every project." },

  { id: "ops", name: "Employee Name", role: "Operations Manager", reportsTo: "md" },
  { id: "pm", name: "Employee Name", role: "Project Manager", reportsTo: "md" },
  { id: "admin", name: "Employee Name", role: "Office & Accounts Manager", reportsTo: "md" },

  { id: "roof", name: "Employee Name", role: "Roofing Supervisor", reportsTo: "ops" },
  { id: "tile", name: "Employee Name", role: "Tiling Supervisor", reportsTo: "ops" },
  { id: "plumb", name: "Employee Name", role: "Plumbing Supervisor", reportsTo: "ops" },
  { id: "paint", name: "Employee Name", role: "Painting Supervisor", reportsTo: "ops" },
  { id: "carp", name: "Employee Name", role: "Carpentry Supervisor", reportsTo: "ops" },

  { id: "est", name: "Employee Name", role: "Estimator", reportsTo: "pm" },
  { id: "site", name: "Employee Name", role: "Site Coordinator", reportsTo: "pm" },

  { id: "recept", name: "Employee Name", role: "Customer Service Officer", reportsTo: "admin" },
  { id: "hr", name: "Employee Name", role: "HR & Recruitment", reportsTo: "admin" },
];

export type TreeNode = Member & { children: TreeNode[] };

export function buildTree(members: Member[]): TreeNode[] {
  const nodes = new Map<string, TreeNode>(members.map((m) => [m.id, { ...m, children: [] }]));
  const roots: TreeNode[] = [];
  for (const n of nodes.values()) {
    const parent = n.reportsTo ? nodes.get(n.reportsTo) : undefined;
    if (parent) parent.children.push(n);
    else roots.push(n);
  }
  return roots;
}

export const initials = (name: string) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]!.toUpperCase())
    .join("");
