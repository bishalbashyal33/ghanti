import React, { useState, useEffect, useRef, useCallback } from 'react';
import './App.css';

const BellSVG = () => {
  const chainPath = "M 1021.62 189.422 C 1023.67 189.971 1023.14 189.813 1025.01 190.869 C 1027.39 198.763 1025.82 225.263 1028.98 239.319 C 1046.31 228.358 1055.22 230.056 1072.38 239.547 C 1075.99 221.073 1072.85 207.068 1075.08 190.236 C 1081.23 189.921 1087.83 189.883 1094.03 189.741 C 1094.85 218.914 1098.66 234.323 1080.98 258.274 L 1080.87 329.656 C 1097.7 349.171 1093.91 369.21 1093.99 393.15 C 1094.04 408.51 1090.27 418.379 1080.96 430.58 L 1081.04 501.519 C 1085.15 506.398 1091.7 514.528 1092.57 520.753 C 1095.07 538.775 1093.65 560.171 1093.93 578.548 C 1094.35 629.105 1095.41 679.654 1097.12 730.183 C 1097.82 740.917 1097.9 752.016 1098.14 762.795 C 1066.29 762.907 1034.43 762.686 1002.59 762.131 C 1003.27 702.648 1004.68 643.177 1006.82 583.729 C 1007.62 554.12 1000.01 524.198 1020.09 500.081 C 1021 478.089 1020.65 454.31 1020.71 432.184 C 1003.42 409.754 1006.67 391.857 1006.86 364.876 C 1006.96 350.044 1011.23 340.956 1020.36 329.706 C 1021.54 312.332 1020.39 280.894 1020.44 262.057 C 1002.59 234.939 1006.73 222.565 1007.07 190.212 L 1021.62 189.422 z M 1030.88 409.986 C 1056.22 393.942 1059.06 409.764 1071.18 407.322 C 1075.87 401.77 1075.43 354.556 1070.74 349.966 C 1061.9 355.592 1054.4 358.893 1043.42 356.54 C 1038.43 355.434 1033.74 353.265 1029.66 350.179 C 1026.41 363.379 1024.42 396.941 1029.4 408.857 L 1030.88 409.986 z M 1052.38 489.114 C 1055.54 489.13 1057.53 489.633 1060 488.271 C 1060.6 473.689 1060.21 457.735 1060.12 443.04 L 1048.28 443.385 C 1044.8 443.726 1042.31 443.308 1040.04 445.095 C 1039.16 453.22 1038.88 481.758 1039.43 490.209 L 1052.38 489.114 z M 1040.11 316.853 C 1046.08 317.26 1056.1 317.12 1060.95 317.658 C 1060.1 303.351 1060.69 285.837 1060.85 271.252 C 1054.07 271.282 1046.54 271.485 1039.83 271.331 L 1040.11 316.853 z M 1028.05 540.841 C 1036.84 543.285 1062.31 543.258 1071.28 540.081 C 1075.59 538.555 1072.41 524.897 1070.93 521.351 C 1058.92 528.468 1051.67 529.49 1037.9 525.487 C 1025.18 521.789 1025.95 531.391 1028.05 540.841 z";

  return (
    <svg viewBox="0 0 100 230" fill="currentColor" className="bell-svg" preserveAspectRatio="xMidYMin meet">
      {/* Repeated chain links to cover the rope area */}
      {[0, 31.1, 65.4].map((y) => (
        <g key={y} transform={`translate(50, ${y})`}>
          <g transform="scale(0.06) translate(-1024, -190)">
            <path d={chainPath} />
          </g>
        </g>
      ))}

      {/* Bell Assembly starts at y=100 */}
      <g transform="translate(50, 100)">
        <g transform="scale(0.06) translate(-1024, -190)">
          <path d="M 688.263 1011.27 C 734.556 1015.47 778.619 1020.95 825.61 1024.28 C 947.318 1033.4 1069.47 1035.06 1191.38 1029.26 C 1238.78 1026.83 1286.13 1023.55 1333.41 1019.41 C 1358.02 1017.11 1385.22 1013.1 1409.51 1011.75 C 1411.74 1029.86 1419.26 1057.85 1423.59 1076.4 C 1447.69 1179.67 1481.72 1261.64 1542.57 1347.88 C 1557.2 1368.42 1573.18 1387.97 1590.39 1406.4 C 1602.65 1419.59 1616.7 1432.45 1627.91 1446.45 C 1651.5 1475.89 1664.93 1509.37 1670.66 1546.42 C 1652.7 1551.41 1624.72 1556.23 1605.83 1559.99 C 1538.88 1573.19 1471.43 1583.72 1403.65 1591.56 C 1375.96 1593.82 1346.64 1597.91 1318.53 1600.54 C 1268.1 1604.98 1217.57 1608.34 1167 1610.61 C 958.288 1618.6 749.313 1604.98 543.408 1569.96 C 503.649 1563.19 464.755 1554.64 425.28 1546.62 C 428.272 1534.35 429.508 1524.97 433.429 1511.98 C 449.795 1454.29 495.034 1422.93 531.027 1378.35 C 595.989 1297.91 639.372 1204.41 665.478 1104.5 C 670.117 1086.24 674.56 1067.92 678.808 1049.56 C 680.409 1042.52 685.682 1016 688.263 1011.27 z" />
          <path d="M 1677.26 1573.39 C 1682.14 1572.73 1684.98 1575.86 1687.47 1579.63 C 1707.5 1609.91 1713.61 1653.01 1708.38 1687.69 C 1693.94 1692.26 1662.64 1697.7 1646.65 1700.77 C 1601.87 1709.61 1556.86 1717.3 1511.67 1723.82 C 1147.61 1778.42 776.769 1768.35 416.205 1694.08 C 406.775 1691.95 399.017 1691.03 389.348 1688.29 C 388.496 1684.88 387.973 1681.36 387.52 1677.87 C 382.796 1640.77 392.864 1603.31 415.546 1573.57 C 459.518 1579.27 507.776 1589.48 552.367 1596.6 C 641.822 1611.17 731.735 1622.76 821.959 1631.37 C 887.512 1637.66 953.284 1641.41 1019.13 1642.6 C 1171.28 1644.24 1320.11 1629.91 1470.54 1608.09 C 1519.33 1600.79 1568.02 1592.78 1616.58 1584.07 C 1636.49 1580.62 1657.43 1576.23 1677.26 1573.39 z" />
          <path d="M 703.315 884.001 C 722.445 884.86 747.087 889.054 766.393 891.812 C 786.042 894.595 805.764 896.84 825.536 898.544 C 910.811 906.658 996.47 910.038 1082.12 908.667 C 1150.78 907.804 1219.36 903.978 1287.69 897.199 C 1308.87 894.766 1330 891.938 1351.08 888.718 C 1363.35 886.946 1378.97 884.356 1391.15 883.872 L 1392.8 883.814 C 1393.78 894.527 1403.05 958.029 1399.88 963.229 L 1397.24 963.697 C 1285.73 978.677 1173.32 985.877 1060.82 985.244 C 986.384 985.892 911.953 983.547 837.706 978.216 C 790.816 974.673 741.617 968.834 695.01 963.244 C 697.445 936.796 700.214 910.379 703.315 884.001 z" />
          <path d="M 1214.14 771.338 C 1218.49 766.335 1227.1 755.474 1233.21 753.583 C 1240.07 751.85 1247.91 754.356 1254.67 755.047 C 1282.81 758 1311.3 763.809 1337.83 773.868 C 1357.19 781.203 1381.06 797.438 1387.58 818.142 C 1389.26 824.855 1386.01 830.67 1379.29 832.664 C 1368.32 835.915 1356.4 837.206 1345.11 839.089 C 1320.04 843.27 1295.16 847.135 1269.91 850.083 C 1105.4 871.945 923.703 865.956 760.068 840.091 C 739.566 836.85 688.96 838.206 714.68 805.798 C 747.008 765.063 808.96 760.772 857.127 753.359 C 868.941 752.25 875.155 762.786 882.231 771.099 C 909.36 771.113 934.885 769.111 961.341 768.868 C 965.256 776.001 969.066 783.191 972.771 790.437 L 1124.59 790.365 C 1128.44 783.634 1132.33 775.28 1136.21 768.144 C 1162.16 769.735 1188.14 770.8 1214.14 771.338 z" />
          <path d={chainPath} />
          <path d="M 978.847 1797.53 C 1002.49 1796.26 1032.97 1797.36 1057.26 1797.22 C 1073.77 1797.12 1105.52 1796.45 1120.99 1797.83 C 1121.36 1824.23 1124.1 1900.12 1118.03 1921.37 C 1114.25 1934.58 1107.78 1944.47 1098.32 1954.27 C 1097.39 1955.11 1096.44 1955.93 1095.47 1956.73 C 1063.22 1982.89 1017.52 1978.8 991.685 1946.07 C 984.991 1937.7 980.294 1927.91 977.952 1917.46 C 972.731 1894.08 978.455 1854.9 976.27 1830.31 C 975.486 1821.49 976.668 1810.23 976.164 1801.14 C 976.039 1798.89 977.305 1798.54 978.847 1797.53 z" />
          <path d="M 927.634 548.435 C 944.124 547.352 969.389 548.026 986.697 547.971 L 986.906 604.094 C 972.75 604.379 956.08 601.885 942.358 605.352 C 935.828 607.002 932.636 612.01 929.625 617.708 C 930.419 659.638 941.285 711.125 943.484 753.858 C 929.586 754.035 910.48 756.014 896.251 757.072 C 890.03 718.951 882.218 679.735 875.217 641.578 C 867.46 599.299 878.594 556.429 927.634 548.435 z" />
          <path d="M 1114.34 547.19 C 1151.63 547.213 1193.23 540.943 1216.9 575.739 C 1222.99 584.567 1226.69 594.819 1227.64 605.499 C 1229.63 626.122 1220.32 670.028 1216.14 691.119 C 1212.51 709.749 1208.98 728.398 1205.54 747.065 C 1205.11 749.874 1203.84 753.294 1202.95 756.058 C 1187.8 755.42 1172.65 754.667 1157.5 753.801 C 1158.58 725.685 1163.42 695.444 1166.6 667.422 C 1168.64 649.535 1171.4 635.309 1170.98 617.111 C 1159.87 597.304 1135.63 603.319 1115 603.311 C 1114.92 584.603 1114.7 565.895 1114.34 547.19 z" />
        </g>
      </g>
    </svg>
  );
};

function App() {
  const [rotation, setRotation] = useState(0);
  const [showMotionBtn, setShowMotionBtn] = useState(false);
  const audioCtxRef = useRef(null);
  const audioBufferRef = useRef(null);
  const reverbRef = useRef(null);
  const velocityRef = useRef(0);
  const rotationRef = useRef(0);
  const lastTimeRef = useRef(performance.now());
  const lastRingTimeRef = useRef(0);

  // Initialize Audio and Load bell.wav
  const initAudio = async () => {
    if (audioCtxRef.current) return;

    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      const ctx = new AudioContext();
      audioCtxRef.current = ctx;

      // Load specific "bell.wav" for exact sound
      const response = await fetch('/bell.wav');
      const arrayBuffer = await response.arrayBuffer();
      audioBufferRef.current = await ctx.decodeAudioData(arrayBuffer);

      // Reverb fallback (not used if sample plays, but good to have)
      const duration = 2;
      const sampleRate = ctx.sampleRate;
      const length = sampleRate * duration;
      const impulse = ctx.createBuffer(2, length, sampleRate);
      for (let i = 0; i < 2; i++) {
        const channel = impulse.getChannelData(i);
        for (let j = 0; j < length; j++) {
          channel[j] = (Math.random() * 2 - 1) * Math.pow(1 - j / length, 4);
        }
      }
      const convolver = ctx.createConvolver();
      convolver.buffer = impulse;
      convolver.connect(ctx.destination);
      reverbRef.current = convolver;
    } catch (err) {
      console.error('Audio initialization failed:', err);
    }
  };

  const playSound = useCallback((intensity) => {
    const now = performance.now();
    if (now - lastRingTimeRef.current < 100) return;
    lastRingTimeRef.current = now;

    if (!audioCtxRef.current || audioCtxRef.current.state === 'suspended') return;
    const ctx = audioCtxRef.current;

    if (audioBufferRef.current) {
      const source = ctx.createBufferSource();
      source.buffer = audioBufferRef.current;
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(Math.min(0.3 + (intensity * 0.7), 1), ctx.currentTime);
      source.connect(gain);
      gain.connect(ctx.destination);
      source.start(0);
    } else if (reverbRef.current) {
      // Fallback only if reverb is actually initialized
      const startTime = ctx.currentTime;
      const harmonics = [520, 780, 1040, 1300, 1664, 2132];
      const amplitudes = [1.0, 0.6, 0.4, 0.3, 0.2, 0.1];

      harmonics.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const g = ctx.createGain();
        osc.frequency.setValueAtTime(freq, startTime);
        g.gain.setValueAtTime(amplitudes[i] * intensity, startTime);
        g.gain.exponentialRampToValueAtTime(0.001, startTime + 2);
        osc.connect(g);
        g.connect(reverbRef.current);
        osc.start(startTime);
      });
    }
  }, []);


  // Physics Loop
  useEffect(() => {
    let frameId;
    const gravity = 0.15; // Lowered from 0.5 for a "heavier", slower swing
    const friction = 0.992; // Increased from 0.985 for better damping
    const maxRotation = 60; // Prevent the bell from swinging too wildly
    lastTimeRef.current = performance.now();

    const update = () => {
      const currentTime = performance.now();
      let dt = (currentTime - lastTimeRef.current) / 16.66;
      if (dt > 2) dt = 2;
      lastTimeRef.current = currentTime;

      const springForce = -gravity * rotationRef.current;
      velocityRef.current += springForce * dt;
      velocityRef.current *= Math.pow(friction, dt); // Scale friction with time

      const oldRotation = rotationRef.current;
      rotationRef.current += velocityRef.current * dt;

      // Clamp rotation
      if (Math.abs(rotationRef.current) > maxRotation) {
        rotationRef.current = Math.sign(rotationRef.current) * maxRotation;
        velocityRef.current *= -0.5; // Slight bounce back
      }

      // Sound Trigger (only if moving fast enough)
      if ((rotationRef.current > 0 && oldRotation <= 0) || (rotationRef.current < 0 && oldRotation >= 0)) {
        if (Math.abs(velocityRef.current) > 0.8) {
          const intensity = Math.min(Math.abs(velocityRef.current) / 12, 1);
          playSound(intensity);
        }
      }

      setRotation(rotationRef.current);
      frameId = requestAnimationFrame(update);
    };

    frameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frameId);
  }, [playSound]);

  // Motion Permissions
  useEffect(() => {
    if (typeof DeviceMotionEvent !== 'undefined' && typeof DeviceMotionEvent.requestPermission === 'function') {
      setShowMotionBtn(true);
    }

    const handleMotion = (e) => {
      if (!e.accelerationIncludingGravity) return;
      const acc = e.accelerationIncludingGravity;

      // Use a threshold to ignore small jitters and scale input down
      const threshold = 0.5;
      let x = acc.x;
      if (Math.abs(x) < threshold) x = 0;

      // Significantly reduced multiplier for motion sensitivity
      velocityRef.current += x * 0.8;
    };

    window.addEventListener('devicemotion', handleMotion);
    return () => window.removeEventListener('devicemotion', handleMotion);
  }, []);

  useEffect(() => {
    const handleWindowClick = () => {
      initAudio();
      // Reduced click impulse from 40 to 15
      velocityRef.current += (Math.random() - 0.5) * 15;
    };
    window.addEventListener('click', handleWindowClick);
    return () => window.removeEventListener('click', handleWindowClick);
  }, []);

  const requestMotion = () => {
    DeviceMotionEvent.requestPermission()
      .then(response => {
        if (response === 'granted') {
          setShowMotionBtn(false);
          initAudio();
        }
      })
      .catch(console.error);
  };

  return (
    <div className="container">
      {showMotionBtn && (
        <button className="motion-btn" onClick={(e) => { e.stopPropagation(); requestMotion(); }}>
          Enable Motion
        </button>
      )}

      <div className="circle">
        <div className="bell" style={{ transform: `rotate(${rotation}deg)` }}>
          <BellSVG />
        </div>
      </div>

    </div>
  );
}

export default App;
