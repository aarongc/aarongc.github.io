// Simple SVG tree component
function TreeDoodle({ x = 0, y = 0, scale = 1, color = '#22c55e', trunk = '#a16207', style }) {
  return (
    <svg width={60 * scale} height={80 * scale} style={{ position: 'absolute', left: x, top: y, ...style }}>
      <rect x={25 * scale} y={60 * scale} width={10 * scale} height={20 * scale} rx={4 * scale} fill={trunk} />
      <ellipse cx={30 * scale} cy={50 * scale} rx={20 * scale} ry={25 * scale} fill={color} />
      <ellipse cx={40 * scale} cy={40 * scale} rx={12 * scale} ry={15 * scale} fill={color} />
      <ellipse cx={20 * scale} cy={40 * scale} rx={12 * scale} ry={15 * scale} fill={color} />
    </svg>
  );
}
function DuckDoodle({ color = '#fbbf24', style }) {
  return (
    <svg width="70" height="70" viewBox="0 0 70 70" style={style}>
      <ellipse cx="35" cy="40" rx="18" ry="12" fill={color} />
      <ellipse cx="50" cy="35" rx="8" ry="5" fill={color} />
      <circle cx="30" cy="38" r="2" fill="#333" />
      <polygon points="58,38 65,40 58,42" fill="#f59e42" />
      <ellipse cx="35" cy="55" rx="10" ry="3" fill="#fde68a" />
    </svg>
  );
}

function LoveBirdDoodle({ color = '#f472b6', secondary = '#fef3c7', style }) {
  // Simple stylized lovebird SVG
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" style={style}>
      <ellipse cx="30" cy="35" rx="14" ry="18" fill={color} />
      <ellipse cx="30" cy="50" rx="10" ry="4" fill={secondary} />
      <circle cx="24" cy="38" r="2" fill="#333" />
      <circle cx="36" cy="38" r="2" fill="#333" />
      <ellipse cx="30" cy="28" rx="7" ry="5" fill={secondary} />
      <polygon points="30,42 33,46 27,46" fill="#f59e42" />
    </svg>
  );
}
function ChickDoodle({ color = '#fde68a', style }) {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" style={style}>
      <circle cx="30" cy="32" r="18" fill={color} />
      <ellipse cx="30" cy="50" rx="10" ry="4" fill="#fef3c7" />
      <circle cx="24" cy="32" r="2" fill="#333" />
      <circle cx="36" cy="32" r="2" fill="#333" />
      <polygon points="30,38 33,42 27,42" fill="#f59e42" />
      <ellipse cx="18" cy="28" rx="3" ry="1.2" fill={color} transform="rotate(-20 18 28)" />
      <ellipse cx="42" cy="28" rx="3" ry="1.2" fill={color} transform="rotate(20 42 28)" />
    </svg>
  );
}
function RabbitDoodle({ color = '#f59e42', border = '#e0e7ff', style }) {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" style={style}>
      <ellipse cx="40" cy="55" rx="18" ry="12" fill="#fff" stroke={border} strokeWidth="4" />
      <ellipse cx="32" cy="35" rx="6" ry="18" fill="#fff" transform="rotate(-15 32 35)" stroke={border} strokeWidth="3" />
      <ellipse cx="48" cy="35" rx="6" ry="18" fill="#fff" transform="rotate(15 48 35)" stroke={border} strokeWidth="3" />
      <ellipse cx="40" cy="55" rx="4" ry="3" fill={color} />
      <circle cx="34" cy="58" r="2" fill="#333" />
      <circle cx="46" cy="58" r="2" fill="#333" />
      <ellipse cx="40" cy="65" rx="6" ry="2" fill="#e0e7ff" />
    </svg>
  );
}
import React from 'react';
import './App.css'


function TrafficDoodle({ color, style }) {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" style={style}>
      <circle cx="40" cy="40" r="30" fill={color} opacity="0.7" />
      <rect x="30" y="20" width="20" height="40" rx="10" fill="#fff" opacity="0.5" />
      <circle cx="40" cy="35" r="5" fill="#333" />
      <rect x="37" y="45" width="6" height="15" fill="#333" rx="3" />
    </svg>
  );
}

function App() {

  // Track which buddy is active (clicked)
  const [activeBuddy, setActiveBuddy] = React.useState(null);
  const [activeAnimation, setActiveAnimation] = React.useState('');
  // List of buddies for easier mapping
  const buddies = [
    {
      key: 'duck',
      doodle: <DuckDoodle style={{ transform: 'scale(1.1) rotate(-12deg)' }} />,
      name: 'Titanium',
      nameColor: '#fbbf24',
    },
    {
      key: 'squishy',
      doodle: <RabbitDoodle color="#a3a3a3" border="#a3a3a3" style={{ transform: 'scale(1.1) rotate(-10deg)' }} />,
      name: 'Squishy',
      nameColor: '#64748b',
    },
    {
      key: 'crunchy',
      doodle: <RabbitDoodle color="#f3f3f3" border="#e0e7ff" style={{ transform: 'scale(1.05) rotate(0deg)' }} />,
      name: 'Crunchy',
      nameColor: '#64748b',
    },
    {
      key: 'lexy',
      doodle: <RabbitDoodle color="#fff" border="#222" style={{ transform: 'scale(1.05) rotate(3deg)' }} />,
      name: 'Lexy',
      nameColor: '#222',
    },
    {
      key: 'cecilia',
      doodle: <RabbitDoodle color="#1f2937" border="#1f2937" style={{ transform: 'scale(1.1) rotate(10deg)' }} />,
      name: 'Cecilia',
      nameColor: '#64748b',
    },
    {
      key: 'bixy',
      doodle: <ChickDoodle style={{ transform: 'scale(1.1) rotate(-8deg)' }} />,
      name: 'Bixy',
      nameColor: '#f59e42',
    },
    {
      key: 'whiskey',
      doodle: <ChickDoodle color="#fde047" style={{ transform: 'scale(1) rotate(6deg)' }} />,
      name: 'Whiskey',
      nameColor: '#f59e42',
    },
    // Love birds
    {
      key: 'lovebird1',
      doodle: <LoveBirdDoodle color="#39ff14" secondary="#fef3c7" style={{ transform: 'scale(1.05) rotate(-8deg)' }} />,
      name: 'Bobby',
      nameColor: '#39ff14',
    },
    {
      key: 'lovebird2',
      doodle: <LoveBirdDoodle color="#fff" secondary="#fef3c7" style={{ transform: 'scale(1.05) rotate(8deg)' }} />,
      name: 'Witey',
      nameColor: '#fff',
    },
    {
      key: 'lovebird3',
      doodle: <LoveBirdDoodle color="#34d399" secondary="#fef3c7" style={{ transform: 'scale(1.05) rotate(-4deg)' }} />,
      name: 'Mint',
      nameColor: '#34d399',
    },
    {
      key: 'lovebird4',
      doodle: <LoveBirdDoodle color="#fbbf24" secondary="#fef3c7" style={{ transform: 'scale(1.05) rotate(4deg)' }} />,
      name: 'Sunny',
      nameColor: '#fbbf24',
    },
    {
      key: 'lovebird5',
      doodle: <LoveBirdDoodle color="#a78bfa" secondary="#fef3c7" style={{ transform: 'scale(1.05) rotate(-12deg)' }} />,
      name: 'Violetly',
      nameColor: '#a78bfa',
    },
    {
      key: 'lovebird6',
      doodle: <LoveBirdDoodle color="#fb7185" secondary="#fef3c7" style={{ transform: 'scale(1.05) rotate(12deg)' }} />,
      name: 'Berry Stomp',
      nameColor: '#fb7185',
    },
  ];

  // Handler for click/touch
  const animations = ['bounce', 'spin', 'shake', 'flip', 'pulse'];
  const handleBuddyClick = (key) => {
    // Pick a random animation
    const randomAnim = animations[Math.floor(Math.random() * animations.length)];
    setActiveBuddy(key);
    setActiveAnimation(randomAnim);
    // Remove active after animation duration
    setTimeout(() => {
      setActiveBuddy(null);
      setActiveAnimation('');
    }, 500);
  };

  return (
    <div className="traffic-doodles-landing" style={{
      minHeight: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(180deg, #a7f3d0 0%, #f8fafc 60%, #bbf7d0 100%)',
      marginLeft: 0,
      marginRight: 0,
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Carrot-shaped clouds at top */}
      {/* Carrot-shaped clouds at top */}
      {/* <CarrotCloud x={60} y={30} scale={1.2} /> */}
      {/* <CarrotCloud x={globalThis.innerWidth/2 - 80} y={50} scale={1.5} /> */}
      {/* <CarrotCloud x={globalThis.innerWidth - 180} y={20} scale={1.1} /> */}
      {/* Nature background: hills, trees, grasses */}
// Carrot-shaped cloud SVG
      {/* Distant hills */}
      <svg width={globalThis.innerWidth} height={180} style={{ position: 'absolute', left: 0, top: 0, zIndex: 0 }}>
        <path d={`M0,120 Q${globalThis.innerWidth/4},80 ${globalThis.innerWidth/2},120 Q${globalThis.innerWidth*0.75},160 ${globalThis.innerWidth},120 L${globalThis.innerWidth},180 L0,180 Z`} fill="#bbf7d0" />
        <path d={`M0,150 Q${globalThis.innerWidth/3},110 ${globalThis.innerWidth/1.5},150 Q${globalThis.innerWidth*0.9},170 ${globalThis.innerWidth},150 L${globalThis.innerWidth},180 L0,180 Z`} fill="#a7f3d0" />
      </svg>
      {/* Foreground grasses */}
      {[...Array(22)].map((_, i) => (
        <GrassDoodle
          key={i}
          x={10 + i * ((globalThis.innerWidth - 40) / 22) + Math.random() * 18}
          y={globalThis.innerHeight - 50 - Math.random() * 40}
          scale={0.7 + Math.random() * 0.8}
          color={i % 3 === 0 ? '#22c55e' : i % 3 === 1 ? '#4ade80' : '#16a34a'}
          style={{ zIndex: 2, opacity: 0.7 + Math.random() * 0.2 }}
        />
      ))}
      <h1 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '1rem', color: '#ffb97a' }}>Carrot Buddies</h1>
      <p style={{ fontSize: '1.25rem', color: '#334155', marginBottom: '2rem', maxWidth: 400, textAlign: 'center' }}>
        Welcome to Carrot Buddies! Enjoy playful carrot-themed Buddies and interactive fun.
      </p>
      <div style={{ display: 'flex', gap: '3rem', marginBottom: '2rem', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'flex-end' }}>
        {buddies.map((buddy, idx) => {
          const isActive = activeBuddy === buddy.key;
          const animClass = isActive ? ` ${activeAnimation}` : '';
          // Random delay for each bud animation (0-200ms)
          const delay = isActive ? `${Math.floor(Math.random() * 200)}ms` : '0ms';
          return (
            <div
              key={buddy.key}
              className={`buddy${animClass}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                transition: 'transform 0.4s cubic-bezier(.68,-0.55,.27,1.55)',
                animationDelay: delay,
              }}
              onClick={() => handleBuddyClick(buddy.key)}
              onTouchStart={() => handleBuddyClick(buddy.key)}
            >
              {buddy.doodle}
              <span style={{ marginTop: '0.5rem', color: buddy.nameColor, fontWeight: 500, fontSize: '1.1rem' }}>{buddy.name}</span>
            </div>
          );
        })}
      </div>
      <button style={{ padding: '0.75rem 2rem', fontSize: '1rem', borderRadius: '999px', background: '#ffb97a', color: '#fff', border: 'none', boxShadow: '0 2px 8px rgba(255,185,122,0.15)', cursor: 'pointer' }}>
        Play
      </button>
      <footer style={{ marginTop: '3rem', color: '#64748b', fontSize: '0.9rem' }}>
        &copy; 2025 Carrot Buddies. All rights reserved.
      </footer>
      <div style={{ marginTop: '0.5rem', color: '#94a3b8', fontSize: '0.85rem', fontStyle: 'italic', letterSpacing: '0.05em' }}>
        for ages 7 to 10 years old only
      </div>
    </div>
  );
}

// Simple SVG grass component
function GrassDoodle({ x = 0, y = 0, scale = 1, color = '#22c55e', style }) {
  return (
    <svg width={60 * scale} height={30 * scale} style={{ position: 'absolute', left: x, top: y, ...style }}>
      <path d={`M5,30 Q15,10 25,30 Q35,10 45,30 Q55,10 60,30`} stroke={color} strokeWidth={4 * scale} fill="none" />
      <path d={`M10,30 Q20,20 30,30 Q40,20 50,30`} stroke={color} strokeWidth={2 * scale} fill="none" />
    </svg>
  );
}

export default App
