import React, { useRef } from 'react';

type CopyButtonProps = {
  text: string;
  label?: string;
  variant?: 'default' | 'surface';
};

export function CopyButton({ text, label = 'Copy', variant = 'default' }: CopyButtonProps) {
  const btnRef = useRef<HTMLButtonElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  function showFeedback(ok: boolean) {
    const btn = btnRef.current;
    if (!btn) return;
    clearTimeout(timerRef.current);
    btn.classList.remove('copied');
    btn.setAttribute('data-label', ok ? 'Copied!' : 'Copy failed');
    void btn.offsetWidth;
    btn.classList.add('copied');
    timerRef.current = setTimeout(() => btn.classList.remove('copied'), 1600);
  }

  function fallbackCopy(value: string): boolean {
    const ta = document.createElement('textarea');
    ta.value = value;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.top = '0';
    ta.style.left = '0';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    ta.setSelectionRange(0, ta.value.length);
    let ok = false;
    try {
      ok = document.execCommand('copy');
    } catch {
      ok = false;
    }
    document.body.removeChild(ta);
    return ok;
  }

  function handleClick() {
    if (navigator.clipboard?.writeText && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(
        () => showFeedback(true),
        () => showFeedback(fallbackCopy(text)),
      );
    } else {
      showFeedback(fallbackCopy(text));
    }
  }

  return (
    <button
      ref={btnRef}
      type="button"
      className={`copy-btn${variant === 'surface' ? ' copy-btn--surface' : ''}`}
      data-label="Copied!"
      aria-label={label}
      onClick={handleClick}>
      <svg
        className="icon-copy"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <rect x="9" y="9" width="12" height="12" rx="2" />
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
      </svg>
      <svg
        className="icon-check"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </button>
  );
}
