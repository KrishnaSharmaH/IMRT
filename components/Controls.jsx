import React from "react";

export default function Controls({ socket, params, setParams, onStart, onPause, onReset }) {
  return (
    <div className="panel card">
      <div className="header">
        <div style={{flex:1}}>
          <div className="logo">AutoPlanner RL — Neon Lab</div>
          <div className="small-muted">SARSA Dose Optimization</div>
        </div>
      </div>

      <div style={{marginTop:12}}>
        <div className="control-row">
          <div className="label">α (Alpha) <span className="value">{params.ALPHA.toFixed(2)}</span></div>
          <input type="range" min="0.01" max="1" step="0.01" value={params.ALPHA}
            onChange={(e) => setParams({...params, ALPHA: +e.target.value})} />
        </div>

        <div className="control-row">
          <div className="label">γ (Gamma) <span className="value">{params.GAMMA.toFixed(2)}</span></div>
          <input type="range" min="0" max="1" step="0.01" value={params.GAMMA}
            onChange={(e) => setParams({...params, GAMMA: +e.target.value})} />
        </div>

        <div className="control-row">
          <div className="label">ε (Epsilon) <span className="value">{params.EPSILON.toFixed(2)}</span></div>
          <input type="range" min="0" max="1" step="0.01" value={params.EPSILON}
            onChange={(e) => setParams({...params, EPSILON: +e.target.value})} />
        </div>

        <div className="control-row">
          <div className="label">Episodes <span className="value">{params.NUM_EPISODES}</span></div>
          <input type="range" min="10" max="1000" step="10" value={params.NUM_EPISODES}
            onChange={(e) => setParams({...params, NUM_EPISODES: +e.target.value})} />
        </div>

        <div style={{display:"flex", gap:8, marginTop:12}}>
          <button className="btn" onClick={onStart}>Start</button>
          <button className="btn" onClick={onPause}>Pause</button>
          <button className="btn" onClick={onReset}>Reset</button>
        </div>

        <div style={{marginTop:12}} className="small-muted">
          Connects via WebSocket for live updates. Use sliders then hit Start.
        </div>
      </div>
    </div>
  );
}
