import React from "react";

export default function LogPanel({ logs }) {
  return (
    <div className="panel card" style={{width:320, display:'flex', flexDirection:'column', gap:12}}>
      <div style={{fontFamily:'Orbitron, sans-serif', fontSize:14, color:'#ff9ee8'}}>Live Console</div>
      <div className="log">
        {logs.slice().reverse().map((l, idx) => (
          <div key={idx} style={{marginBottom:6}}>{l}</div>
        ))}
      </div>
      <div className="small-muted" style={{textAlign:'right'}}>Real-time updates via WebSocket</div>
    </div>
  )
}
