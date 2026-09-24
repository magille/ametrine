const paths = {
  compass: <><circle cx="12" cy="12" r="9" /><path d="m15.5 8.5-2.1 4.9-4.9 2.1 2.1-4.9 4.9-2.1Z" /></>,
  chart: <><path d="M4 19V5" /><path d="M4 19h16" /><path d="m7 15 3-4 3 2 4-6" /></>,
  database: <><ellipse cx="12" cy="5" rx="7" ry="3" /><path d="M5 5v7c0 1.7 3.1 3 7 3s7-1.3 7-3V5" /><path d="M5 12v7c0 1.7 3.1 3 7 3s7-1.3 7-3v-7" /></>,
  users: <><circle cx="9" cy="8" r="3" /><path d="M3 20c.4-3.3 2.4-5 6-5s5.6 1.7 6 5" /><path d="M15 5.5a3 3 0 0 1 0 5.8M17 15c2.3.5 3.6 2.1 4 5" /></>,
  lightbulb: <><path d="M9 18h6M10 21h4" /><path d="M8.5 14.5a6 6 0 1 1 7 0c-.9.7-1.5 1.6-1.5 2.5h-4c0-.9-.6-1.8-1.5-2.5Z" /></>,
  graduation: <><path d="m3 9 9-5 9 5-9 5-9-5Z" /><path d="M7 12v4c2.8 2.2 9.2 2.2 12 0v-4M21 9v6" /></>,
  eye: <><path d="M2.5 12s3.2-6 9.5-6 9.5 6 9.5 6-3.2 6-9.5 6-9.5-6-9.5-6Z" /><circle cx="12" cy="12" r="2.5" /></>,
  target: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4" /><circle cx="12" cy="12" r="1" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="1" /><path d="m3 7 9 6 9-6" /></>,
  phone: <><path d="M6.5 3.5 9 3l2 5-2 1.5a14 14 0 0 0 3.5 3.5L14 11l5 2 .5 2.5c.2 1.2-.8 2.3-2 2.1C10.8 16.6 5.4 11.2 4.4 4.5c-.2-1.2.9-2.2 2.1-2Z" /></>,
  linkedin: <><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 10v6M8 7.5v.1M12 16v-6M12 13c0-2 4-2.5 4 0v3" /></>,
  instagram: <><rect x="4" y="4" width="16" height="16" rx="4" /><circle cx="12" cy="12" r="3.5" /><path d="M17.5 6.5h.1" /></>,
  health: <><path d="M12 21s-7-4.4-9.3-9A5.4 5.4 0 0 1 12 6a5.4 5.4 0 0 1 9.3 6C19 16.6 12 21 12 21Z" /><path d="M9 12h2l1-2 2 4 1-2h2" /></>,
  shield: <><path d="M12 3 5 6v5c0 4.5 3 7.5 7 10 4-2.5 7-5.5 7-10V6l-7-3Z" /><path d="m9 12 2 2 4-4" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.5 3.5 6 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-6-3.5-9s1-6.5 3.5-9Z" /></>,
  briefcase: <><rect x="3" y="8" width="18" height="11" rx="1" /><path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18" /></>,
  network: <><circle cx="12" cy="4.5" r="2" /><circle cx="5" cy="18" r="2" /><circle cx="19" cy="18" r="2" /><path d="M12 6.5v5M12 11.5 5 16M12 11.5l7 4.5" /></>,
}

export default function Icon({ name, label, className = "h-5 w-5" }) {
  return (
    <svg
      aria-label={label}
      role={label ? "img" : undefined}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden={label ? undefined : true}
    >
      {paths[name] || paths.target}
    </svg>
  )
}
