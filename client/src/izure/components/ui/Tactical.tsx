import type { CSSProperties, ReactNode } from 'react';

/* ── Bracket: [ TEXT ] ──────────────────────────────────────── */
export function Bracket({
  children, tone, className = '',
}: { children: ReactNode; tone?: 'warn' | 'ok' | 'bright'; className?: string }) {
  const cls = ['bracket', tone ?? '', className].filter(Boolean).join(' ');
  return <span className={cls}>{children}</span>;
}

/* ── Tag: small chip ────────────────────────────────────────── */
export function Tag({
  children, tone, className = '',
}: {
  children: ReactNode;
  tone?: 'warn' | 'ok' | 'caution' | 'solid';
  className?: string;
}) {
  const cls = ['tag', tone ?? '', className].filter(Boolean).join(' ');
  return <span className={cls}>{children}</span>;
}

/* ── Glitch text ────────────────────────────────────────────── */
export function Glitch({ children, always = false }: { children: string; always?: boolean }) {
  return (
    <span className={`glitch-text ${always ? 'always' : ''}`} data-text={children}>
      {children}
    </span>
  );
}

/* ── Cursor _ blink ─────────────────────────────────────────── */
export function Cursor() {
  return <span className="cursor" />;
}

/* ── Keyboard hint ──────────────────────────────────────────── */
export function KbdHint({ keys, label }: { keys: string[]; label: string }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        fontSize: 10,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: 'var(--text-dim)',
      }}
    >
      {keys.map((k) => (
        <span key={k} className="kbd">
          {k}
        </span>
      ))}
      <span>{label}</span>
    </span>
  );
}

/* ── TacticalCard: header + body, optional corner-marks ─────── */
export function TacticalCard({
  title, status, statusTone, tone, marks = false,
  headRight, className = '', children, style,
}: {
  title?: ReactNode;
  status?: ReactNode;
  statusTone?: 'live' | 'ok';
  tone?: 'bordered' | 'alert' | 'confirm';
  marks?: boolean;
  headRight?: ReactNode;
  className?: string;
  children?: ReactNode;
  style?: CSSProperties;
}) {
  const cls = ['tcard', tone ?? '', marks ? 'corner-marks' : '', className]
    .filter(Boolean).join(' ');
  return (
    <div className={cls} style={style}>
      {title && (
        <div className="tcard-head">
          <span>
            <span className={`dot ${statusTone === 'live' ? 'live' : statusTone === 'ok' ? 'ok' : ''}`} />
            {title}
            {status && <span style={{ marginLeft: 12, color: 'var(--text-faint)' }}>// {status}</span>}
          </span>
          {headRight}
        </div>
      )}
      <div className="tcard-body">{children}</div>
    </div>
  );
}

/* ── Stepped progress ───────────────────────────────────────── */
export function ProgressSegments({
  total, done, active = false,
}: { total: number; done: number; active?: boolean }) {
  return (
    <div className="tprog">
      {Array.from({ length: total }).map((_, i) => {
        const cls = i < done ? 'done' : i === done && active ? 'active' : '';
        return <div key={i} className={`seg ${cls}`} />;
      })}
    </div>
  );
}

/* ── StatusLine: dashed key:value row ───────────────────────── */
export function StatusLine({
  label, value, tone,
}: { label: string; value: ReactNode; tone?: 'warn' | 'ok' }) {
  return (
    <div
      className="row-between"
      style={{ padding: '6px 0', borderBottom: '1px dashed var(--line)' }}
    >
      <span className="label">{label}</span>
      <span className={`mono ${tone ?? ''}`} style={{ fontSize: 12 }}>{value}</span>
    </div>
  );
}

/* ── BigNumber ──────────────────────────────────────────────── */
export function BigNumber({
  value, label, tone,
}: { value: ReactNode; label: string; tone?: 'warn' | 'ok' }) {
  return (
    <div>
      <div className={`big-num ${tone ?? ''}`}>{value}</div>
      <div className="label" style={{ marginTop: 6 }}>{label}</div>
    </div>
  );
}

/* ── Ticker ─────────────────────────────────────────────────── */
export function Ticker({
  items,
}: { items: Array<{ label: string; value: string; tone?: 'warn' | 'ok' | '' }> }) {
  const repeated = items.concat(items).concat(items);
  return (
    <div className="ticker-wrap">
      <div className="ticker-track">
        {repeated.map((it, i) => (
          <span key={i}>
            <span className={it.tone ?? ''}>
              [{it.label}] {it.value}
            </span>
            <span className="sep">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
