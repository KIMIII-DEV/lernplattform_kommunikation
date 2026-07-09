import { CSSProperties, ReactNode, useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import { useIsMobile } from './useIsMobile';

/* IZURE Icon-Rail — Design Blueprint v2.1, Abschnitt 5.1 + Komponenten-Zeile "Sidebar/Rail".
   Fixe 64px-Spalte, nur Icons; der aktive Zweig zeigt seine children als
   Ausklapp-Panel NEBEN der Rail (Teil der Shell, kein Overlay).
   Mobil (<768px, Masterplan Phase 10.3): dockt als horizontale Icon-Leiste
   an den unteren Rand, das Kinder-Panel öffnet nach oben. */

export interface IconRailItem {
  id: string;
  icon: LucideIcon;
  label: string;
  children?: { id: string; label: string; href: string }[];
}

export interface IconRailProps {
  items: IconRailItem[];
  activeId: string;
  onNavigate: (to: string) => void;
  bottom?: ReactNode;
}

function isBranchActive(item: IconRailItem, activeId: string): boolean {
  if (item.id === activeId) return true;
  return !!item.children?.some((c) => c.id === activeId);
}

export default function IconRail({ items, activeId, onNavigate, bottom }: IconRailProps) {
  const expanded = items.find((i) => i.children?.length && isBranchActive(i, activeId));
  const mobile = useIsMobile();

  return (
    <nav
      aria-label="IZURE Navigation"
      style={
        mobile
          ? {
              position: 'fixed',
              left: 12,
              right: 12,
              bottom: 12,
              zIndex: 100,
              display: 'flex',
              flexDirection: 'column-reverse',
              alignItems: 'stretch',
            }
          : {
              position: 'fixed',
              left: 12,
              top: 12,
              bottom: 12,
              zIndex: 100,
              display: 'flex',
              alignItems: 'stretch',
            }
      }
    >
      <div
        style={
          mobile
            ? {
                height: 64,
                background: 'var(--bg-panel)',
                borderRadius: 'var(--radius-outer)',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 20px',
              }
            : {
                width: 64,
                background: 'var(--bg-panel)',
                borderRadius: 'var(--radius-outer)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '20px 0',
              }
        }
      >
        <div style={{ display: 'flex', flexDirection: mobile ? 'row' : 'column', alignItems: 'center', gap: 10 }}>
          {items.map((item) => {
            const active = isBranchActive(item, activeId);
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                aria-label={item.label}
                aria-current={active ? 'page' : undefined}
                title={item.label}
                style={railButtonStyle(active)}
                onMouseOver={(e) => {
                  if (!active) e.currentTarget.style.color = 'var(--accent-primary)';
                }}
                onMouseOut={(e) => {
                  if (!active) e.currentTarget.style.color = 'var(--text-secondary)';
                }}
              >
                <Icon size={18} strokeWidth={1.5} />
              </button>
            );
          })}
        </div>
        {bottom && (
          <div style={{ display: 'flex', flexDirection: mobile ? 'row' : 'column', alignItems: 'center', gap: 10 }}>
            {bottom}
          </div>
        )}
      </div>

      {expanded?.children && (
        <div
          style={
            mobile
              ? {
                  marginBottom: 8,
                  background: 'var(--bg-panel)',
                  borderRadius: 'var(--radius-card)',
                  padding: '14px 8px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                }
              : {
                  width: 180,
                  marginLeft: 8,
                  alignSelf: 'flex-start',
                  marginTop: 20,
                  background: 'var(--bg-panel)',
                  borderRadius: 'var(--radius-card)',
                  padding: '18px 8px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                }
          }
        >
          <div
            className="t-label"
            style={{ fontSize: 9, color: 'var(--text-tertiary)', padding: '0 14px', marginBottom: 8 }}
          >
            {expanded.label}
          </div>
          {expanded.children.map((child) => {
            const childActive = child.id === activeId;
            return (
              <button
                key={child.id}
                onClick={() => onNavigate(child.href)}
                aria-current={childActive ? 'page' : undefined}
                style={{
                  textAlign: 'left',
                  padding: '9px 14px',
                  borderRadius: 'var(--radius-pill)',
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: 11,
                  fontWeight: childActive ? 600 : 400,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: childActive ? 'var(--bg-base)' : 'var(--text-secondary)',
                  background: childActive ? 'var(--text-primary)' : 'transparent',
                  transition: 'color var(--motion-micro), background var(--motion-micro)',
                  cursor: 'pointer',
                }}
                onMouseOver={(e) => {
                  if (!childActive) e.currentTarget.style.color = 'var(--accent-primary)';
                }}
                onMouseOut={(e) => {
                  if (!childActive) e.currentTarget.style.color = 'var(--text-secondary)';
                }}
              >
                {child.label}
              </button>
            );
          })}
        </div>
      )}
    </nav>
  );
}

function railButtonStyle(active: boolean): CSSProperties {
  return {
    width: 40,
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 'var(--radius-pill)',
    color: active ? 'var(--bg-base)' : 'var(--text-secondary)',
    background: active ? 'var(--text-primary)' : 'transparent',
    transition: 'color var(--motion-micro), background var(--motion-micro)',
    cursor: 'pointer',
  };
}

/* Rail-Bottom-Aktion (Step out, etc.) — gleiche Geometrie wie Rail-Items */
export function RailAction({
  label,
  icon: Icon,
  onClick,
}: {
  label: string;
  icon: LucideIcon;
  onClick: () => void;
}) {
  const [hover, setHover] = useState(false);
  return (
    <button
      onClick={onClick}
      aria-label={label}
      title={label}
      style={{
        ...railButtonStyle(false),
        color: hover ? 'var(--accent-primary)' : 'var(--text-tertiary)',
      }}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <Icon size={17} strokeWidth={1.5} />
    </button>
  );
}
