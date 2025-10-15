import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

export default function RewardChart({ rewards }) {
  const data = rewards.map((r, i) => ({ episode: i + 1, avgReward: Number(r) }));
  return (
    <div className="card" style={{height:360}}>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:8}}>
        <div style={{fontFamily:'Orbitron, sans-serif', fontSize:14, color:'#bfefff'}}>Average Reward vs Episode</div>
        <div style={{fontSize:12, color:'#9aa0a6'}}>Episodes →</div>
      </div>
      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={data}>
          <CartesianGrid stroke="#0a0a0a" />
          <XAxis dataKey="episode" tick={{fill:'#9aa0a6'}} />
          <YAxis tick={{fill:'#9aa0a6'}} />
          <Tooltip />
          <Line type="monotone" dataKey="avgReward" stroke="#00e6ff" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
