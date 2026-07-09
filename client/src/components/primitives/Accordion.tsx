import { CSSProperties, ReactNode } from 'react';
import * as RadixAccordion from '@radix-ui/react-accordion';
import { ChevronRight } from 'lucide-react';

/* IZURE Accordion — Blueprint v2.1, Schritt 2.2 + Abschnitt 6.
   type="single" collapsible: nur ein Item pro Ebene offen, Geschwister
   schließen automatisch (echtes Accordion, kein Collapsible). Verschachtelte
   Ebenen sind eigene Roots und schließen unabhängig. Chevron rotiert 0°→90°.
   Timing: --motion-accordion (400ms ease-out — Blueprint gewinnt über den
   Guide-Wert var(--motion-base); Widerspruch gemeldet). */

export function Accordion({
  children,
  defaultValue,
  className,
  style,
}: {
  children: ReactNode;
  defaultValue?: string;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <RadixAccordion.Root type="single" collapsible defaultValue={defaultValue} className={className} style={style}>
      {children}
    </RadixAccordion.Root>
  );
}

export function AccordionItem({
  value,
  children,
  style,
}: {
  value: string;
  children: ReactNode;
  style?: CSSProperties;
}) {
  return (
    <RadixAccordion.Item
      value={value}
      style={{ borderBottom: '1px solid var(--border-hairline)', ...style }}
    >
      {children}
    </RadixAccordion.Item>
  );
}

export function AccordionTrigger({ children, meta }: { children: ReactNode; meta?: ReactNode }) {
  return (
    <RadixAccordion.Header style={{ display: 'flex' }}>
      <RadixAccordion.Trigger
        className="izure-accordion-trigger"
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          padding: '16px 4px',
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'var(--text-primary)',
          textAlign: 'left',
          cursor: 'pointer',
        }}
      >
        <ChevronRight size={14} strokeWidth={1.5} className="izure-accordion-chevron" style={{ flexShrink: 0, color: 'var(--text-tertiary)' }} />
        <span style={{ flex: 1 }}>{children}</span>
        {meta && (
          <span style={{ color: 'var(--text-tertiary)', fontWeight: 400, fontVariantNumeric: 'tabular-nums' }}>
            {meta}
          </span>
        )}
      </RadixAccordion.Trigger>
    </RadixAccordion.Header>
  );
}

export function AccordionContent({ children }: { children: ReactNode }) {
  return (
    <RadixAccordion.Content className="izure-accordion-content">
      <div style={{ padding: '4px 4px 20px 30px' }}>{children}</div>
    </RadixAccordion.Content>
  );
}
