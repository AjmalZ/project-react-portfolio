/* eslint-disable max-len */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import './InfraProjects.css';
import vdcDiagram from '../images/vdc-diagram.png';
import norditDiagram from '../images/nordit-diagram.png';

const infraProjects = [
  {
    id: 'vdc',
    title: 'Säkrat virtuellt datacenter (vDC)',
    image: vdcDiagram,
    description:
      'Designade och implementerade ett säkrat virtuellt datacenter med segmenterad nätverksarkitektur. Dual-NIC-logik på Ubuntu-servrar för att separera webb- och managementtrafik, Windows Domain Controller integrerad med Linux via Active Directory (DNS, LDAP, Kerberos), säkerhetsgrupper och säker åtkomst via Floating IP och DNAT/SNAT.',
    tags: ['Linux', 'Windows Server', 'Active Directory', 'Dual-NIC', 'SSH', 'TCP/IP', 'Virtualisering']
  },
  {
    id: 'nordit',
    title: 'Skalbar Windows Servermiljö (NORDIT)',
    image: norditDiagram,
    description:
      'Byggde en multi-site företagsdomän med fyra platser kopplade via WireGuard site-to-site VPN. Primär Domain Controller med FSMO-roller, sekundära DC:er för redundans, filserver med resursdelning, IIS-webbserver i isolerat subnät och AD-replikering mellan alla sites.',
    tags: ['Windows Server', 'Active Directory', 'WireGuard VPN', 'Hyper-V', 'DNS', 'FSMO', 'AD Replication', 'IIS']
  }
];

export const InfraProjects = () => {
  const [lightbox, setLightbox] = useState(null);

  const openLightbox = (project) => setLightbox(project);
  const closeLightbox = () => setLightbox(null);

  return (
    <div className="infraSection">
      <section className="infraProjects">
        <h2>Infrastructure Projects</h2>
        <div className="infraCards">
          {infraProjects.map((project) => (
            <div className="infraCard" key={project.id}>
              <div
                className="infraCardImage"
                onClick={() => openLightbox(project)}
                onKeyDown={(e) => e.key === 'Enter' && openLightbox(project)}
                role="button"
                tabIndex={0}>
                <img src={project.image} alt={project.title} />
                <div className="infraZoomHint">🔍 Klicka för att förstora</div>
              </div>
              <div className="infraCardBody">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="infraTags">
                  {project.tags.map((tag) => (
                    <span className="infraTag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {lightbox && (
        <div
          className="infraLightbox"
          onClick={closeLightbox}>
          <div
            className="infraLightboxContent"
            onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="infraLightboxClose"
              onClick={closeLightbox}
              aria-label="Stäng">
              ✕
            </button>
            <h3 className="infraLightboxTitle">{lightbox.title}</h3>
            <img src={lightbox.image} alt={lightbox.title} />
          </div>
        </div>
      )}
    </div>
  );
};
