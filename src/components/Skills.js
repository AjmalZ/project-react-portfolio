/* eslint-disable indent */
/* eslint-disable linebreak-style */
import React from 'react';
import './Skills.css';

export const Skills = () => {
  return (
    <div className="skillSection">
      <section className="skills">
        <h2>Skills</h2>
        <div className="skillsBox">
          <div className="code skillInfo">
            <h3 className="skillh3 skillsh3Red">Cloud & Infra</h3>
            <p>Microsoft Azure</p>
            <p>Amazon AWS</p>
            <p>IaaS/PaaS/SaaS</p>
            <p>Virtualisering</p>
            <p>Hyper-V</p>
          </div>

          <div className="tools skillInfo">
            <h3 className="skillh3 skillsh3LightBlue">Nätverk & Säkerhet</h3>
            <p>Windows Server</p>
            <p>Active Directory</p>
            <p>DNS/DHCP/GPO</p>
            <p>Linux</p>
            <p>TCP/IP</p>
            <p>VPN/Firewall</p>
            <p>WireGuard</p>
            <p>Kerberos</p>
            <p>LDAP</p>
            <p>Security Groups</p>
          </div>

          <div className="more skillInfo">
            <h3 className="skillh3 skillsh3Blue">Scripting & Dev</h3>
            <p>PowerShell</p>
            <p>Python</p>
            <p>Bash</p>
            <p>JavaScript ES6</p>
            <p>React</p>
            <p>Node.js</p>
          </div>

          <div className="upcomming skillInfo">
            <h3 className="skillh3 skillsh3Green">Verktyg</h3>
            <p>Git/GitHub</p>
            <p>Figma</p>
            <p>VSCode</p>
            <p>Agile/Scrum</p>
            <p>MongoDB</p>
          </div>
        </div>
      </section>
    </div>
  );
};
