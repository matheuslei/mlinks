import "./social.css";

export function Social({ children, url }) {
  return (
    <a className="social" href={url} rel="noopener noreferrer" targe="_blank">
      {children}
    </a>
  );
}
