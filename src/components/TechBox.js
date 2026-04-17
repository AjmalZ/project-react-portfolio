/* eslint-disable indent */
import React from 'react';
import './TechBox.css';

export const TechBox = () => {
    return (

        <div className="techBox">
            <div className="techText">
                <h2>Tekniker</h2>
            </div>
            <div className="techInfo">
                <p>
                  <span className="hl-1">Windows Server</span>, <span className="hl-2">Active Directory</span>, <span className="hl-3">Linux</span>, <span className="hl-4">Hyper-V</span>, <span className="hl-5">WireGuard VPN</span>, <span className="hl-6">Azure</span>, <span className="hl-7">AWS</span>, DNS, DHCP, GPO, FSMO, <span className="hl-8">PowerShell</span>, Python, Bash, TCP/IP, Kerberos, LDAP, IIS, Git, Virtualisering
                </p>
            </div>
        </div>
    )
};