import React from 'react'

export default function Banner({children,title,subtitle,slug}) {
    return (
      <div className="banner">
        <h1>{title}</h1>
        <h1>{subtitle}</h1>
        <h1>{slug}</h1>
        {children}
      </div>
    );
}
