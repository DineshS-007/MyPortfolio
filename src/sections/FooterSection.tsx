import React from 'react'
import { PORTFOLIO_DATA } from '../constants/portfolioData'

export const FooterSection: React.FC = () => {
  const { meta } = PORTFOLIO_DATA

  return (
    <footer className="footer" id="contact">
      <p className="footer_note">// got a project? a mobile app? an idea?</p>

      <a className="footer_cta" href={`mailto:${meta.email}`}>
        WRITE ME
        <svg
          className="arr-svg"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M18 8L22 12L18 16" />
          <path d="M2 12H22" />
        </svg>
      </a>

      <div className="footer_contact-grid">
        <a href={`mailto:${meta.email}`} className="footer_link">
          <span className="footer_label">Email:</span>
          <span>{meta.email}</span>
        </a>
        <a href={`tel:${meta.phone}`} className="footer_link">
          <span className="footer_label">Phone:</span>
          <span>{meta.phoneFormatted}</span>
        </a>
        <a
          href={meta.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="footer_link"
        >
          <span className="footer_label">LinkedIn:</span>
          <span>{meta.linkedInDisplay}</span>
        </a>
        <span className="footer_link">
          <span className="footer_label">Location:</span>
          <span>{meta.location}</span>
        </span>
      </div>

      <div className="footer_meta">
        <span>{meta.email}</span>
        <span>{meta.phoneFormatted}</span>
        <span>{meta.location} · Remote Worldwide</span>
        <span>{meta.copyright}</span>
      </div>
    </footer>
  )
}
