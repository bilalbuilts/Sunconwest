import Image from "next/image";
import { buildTree, initials, type Member, type TreeNode } from "@/content/team";

function Avatar({ m, size = 48 }: { m: Member; size?: number }) {
  return m.photo ? (
    <Image src={m.photo} alt={m.name} width={size} height={size} className="rounded-full object-cover" style={{ width: size, height: size }} />
  ) : (
    <span
      aria-hidden
      className="grid shrink-0 place-items-center rounded-full bg-accent/15 font-bold text-accent"
      style={{ width: size, height: size, fontSize: size * 0.36 }}
    >
      {initials(m.name)}
    </span>
  );
}

function Card({ m, top = false }: { m: Member; top?: boolean }) {
  return (
    <div
      className={`flex w-52 flex-col items-center rounded-2xl border p-4 text-center transition hover:-translate-y-0.5 ${
        top ? "border-navy bg-navy text-white" : "border-line bg-surface hover:border-accent"
      }`}
    >
      <Avatar m={m} size={top ? 60 : 48} />
      <p className={`mt-3 font-bold leading-tight ${top ? "text-white" : "text-heading"}`}>{m.name}</p>
      <p className={`mt-1 text-sm font-medium leading-snug ${top ? "text-accent" : "text-muted"}`}>{m.role}</p>
    </div>
  );
}

/* ---------- Desktop: connected tree ---------- */
function TreeItem({ n, top }: { n: TreeNode; top?: boolean }) {
  const branches = n.children.filter((c) => c.children.length > 0);
  const leaves = n.children.filter((c) => c.children.length === 0);
  // Many leaves under one manager read better as a vertical stack than a wide row.
  const stackLeaves = leaves.length >= 2;
  const horizontal = stackLeaves ? branches : n.children;

  return (
    <li>
      <Card m={n} top={top} />
      {(horizontal.length > 0 || stackLeaves) && (
        <ul>
          {horizontal.map((c) => (
            <TreeItem key={c.id} n={c} />
          ))}
          {stackLeaves && (
            <li>
              <div className="flex flex-col gap-3">
                {leaves.map((l) => (
                  <Card key={l.id} m={l} />
                ))}
              </div>
            </li>
          )}
        </ul>
      )}
    </li>
  );
}

/* ---------- Mobile: indented list ---------- */
function MobileItem({ n, depth = 0 }: { n: TreeNode; depth?: number }) {
  return (
    <li>
      <div className={`flex items-center gap-3 rounded-xl border p-3 ${depth === 0 ? "border-navy bg-navy text-white" : "border-line bg-surface"}`}>
        <Avatar m={n} size={40} />
        <div className="min-w-0">
          <p className={`truncate font-bold leading-tight ${depth === 0 ? "text-white" : "text-heading"}`}>{n.name}</p>
          <p className={`text-sm leading-snug ${depth === 0 ? "text-accent" : "text-muted"}`}>{n.role}</p>
        </div>
      </div>
      {n.children.length > 0 && (
        <ul className="mt-2 ml-5 space-y-2 border-l-2 border-[color:var(--org-line)] pl-4">
          {n.children.map((c) => (
            <MobileItem key={c.id} n={c} depth={depth + 1} />
          ))}
        </ul>
      )}
    </li>
  );
}

export function OrgChart({ members }: { members: Member[] }) {
  const roots = buildTree(members);
  return (
    <>
      <div className="org-tree hidden overflow-x-auto pb-4 md:block" role="group" aria-label="Suncon West organisation chart">
        <div className="mx-auto w-max min-w-full">
          <ul>
            {roots.map((r) => (
              <TreeItem key={r.id} n={r} top />
            ))}
          </ul>
        </div>
      </div>
      <ul className="space-y-2 md:hidden" aria-label="Suncon West organisation chart">
        {roots.map((r) => (
          <MobileItem key={r.id} n={r} />
        ))}
      </ul>
    </>
  );
}
