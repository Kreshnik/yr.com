export function CelestialBackground() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none select-none"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* 4-pointed sparkle stars */}
      <g fill="#6D28D9">
        <path opacity="0.13" transform="translate(120, 140)" d="M0-9 L2.2-2.2 L9 0 L2.2 2.2 L0 9 L-2.2 2.2 L-9 0 L-2.2-2.2Z">
          <animate attributeName="opacity" values="0.13;0.22;0.13" dur="4s" begin="0s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="rotate" from="0 120 140" to="360 120 140" dur="18s" repeatCount="indefinite" additive="sum" />
        </path>
        <path opacity="0.10" transform="translate(380, 80)" d="M0-7 L1.7-1.7 L7 0 L1.7 1.7 L0 7 L-1.7 1.7 L-7 0 L-1.7-1.7Z">
          <animate attributeName="opacity" values="0.10;0.18;0.10" dur="5s" begin="1.3s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="rotate" from="0 380 80" to="360 380 80" dur="22s" repeatCount="indefinite" additive="sum" />
        </path>
        <path opacity="0.15" transform="translate(700, 50)" d="M0-11 L2.7-2.7 L11 0 L2.7 2.7 L0 11 L-2.7 2.7 L-11 0 L-2.7-2.7Z">
          <animate attributeName="opacity" values="0.15;0.26;0.15" dur="3.5s" begin="2.1s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="rotate" from="0 700 50" to="360 700 50" dur="20s" repeatCount="indefinite" additive="sum" />
        </path>
        <path opacity="0.09" transform="translate(980, 110)" d="M0-8 L2-2 L8 0 L2 2 L0 8 L-2 2 L-8 0 L-2-2Z">
          <animate attributeName="opacity" values="0.09;0.16;0.09" dur="6s" begin="0.7s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="rotate" from="0 980 110" to="360 980 110" dur="25s" repeatCount="indefinite" additive="sum" />
        </path>
        <path opacity="0.12" transform="translate(1260, 170)" d="M0-10 L2.5-2.5 L10 0 L2.5 2.5 L0 10 L-2.5 2.5 L-10 0 L-2.5-2.5Z">
          <animate attributeName="opacity" values="0.12;0.20;0.12" dur="4.5s" begin="3.2s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="rotate" from="0 1260 170" to="360 1260 170" dur="16s" repeatCount="indefinite" additive="sum" />
        </path>
        <path opacity="0.08" transform="translate(60, 480)" d="M0-8 L2-2 L8 0 L2 2 L0 8 L-2 2 L-8 0 L-2-2Z">
          <animate attributeName="opacity" values="0.08;0.15;0.08" dur="5.5s" begin="1.8s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="rotate" from="0 60 480" to="360 60 480" dur="28s" repeatCount="indefinite" additive="sum" />
        </path>
        <path opacity="0.11" transform="translate(1380, 400)" d="M0-9 L2.2-2.2 L9 0 L2.2 2.2 L0 9 L-2.2 2.2 L-9 0 L-2.2-2.2Z">
          <animate attributeName="opacity" values="0.11;0.19;0.11" dur="4s" begin="4.5s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="rotate" from="0 1380 400" to="360 1380 400" dur="21s" repeatCount="indefinite" additive="sum" />
        </path>
        <path opacity="0.10" transform="translate(820, 820)" d="M0-7 L1.7-1.7 L7 0 L1.7 1.7 L0 7 L-1.7 1.7 L-7 0 L-1.7-1.7Z">
          <animate attributeName="opacity" values="0.10;0.17;0.10" dur="3.8s" begin="2.9s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="rotate" from="0 820 820" to="360 820 820" dur="19s" repeatCount="indefinite" additive="sum" />
        </path>
        {/* Extra stars — row 2 */}
        <path opacity="0.11" transform="translate(250, 60)" d="M0-8 L2-2 L8 0 L2 2 L0 8 L-2 2 L-8 0 L-2-2Z">
          <animate attributeName="opacity" values="0.11;0.20;0.11" dur="4.2s" begin="0.9s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="rotate" from="0 250 60" to="360 250 60" dur="23s" repeatCount="indefinite" additive="sum" />
        </path>
        <path opacity="0.09" transform="translate(540, 200)" d="M0-9 L2.2-2.2 L9 0 L2.2 2.2 L0 9 L-2.2 2.2 L-9 0 L-2.2-2.2Z">
          <animate attributeName="opacity" values="0.09;0.17;0.09" dur="5.2s" begin="2.6s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="rotate" from="0 540 200" to="360 540 200" dur="17s" repeatCount="indefinite" additive="sum" />
        </path>
        <path opacity="0.13" transform="translate(840, 340)" d="M0-7 L1.7-1.7 L7 0 L1.7 1.7 L0 7 L-1.7 1.7 L-7 0 L-1.7-1.7Z">
          <animate attributeName="opacity" values="0.13;0.21;0.13" dur="3.7s" begin="1.1s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="rotate" from="0 840 340" to="360 840 340" dur="26s" repeatCount="indefinite" additive="sum" />
        </path>
        <path opacity="0.08" transform="translate(1100, 480)" d="M0-10 L2.5-2.5 L10 0 L2.5 2.5 L0 10 L-2.5 2.5 L-10 0 L-2.5-2.5Z">
          <animate attributeName="opacity" values="0.08;0.15;0.08" dur="4.8s" begin="3.5s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="rotate" from="0 1100 480" to="360 1100 480" dur="30s" repeatCount="indefinite" additive="sum" />
        </path>
        <path opacity="0.12" transform="translate(1420, 720)" d="M0-8 L2-2 L8 0 L2 2 L0 8 L-2 2 L-8 0 L-2-2Z">
          <animate attributeName="opacity" values="0.12;0.20;0.12" dur="3.3s" begin="0.4s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="rotate" from="0 1420 720" to="360 1420 720" dur="24s" repeatCount="indefinite" additive="sum" />
        </path>
        <path opacity="0.09" transform="translate(170, 720)" d="M0-9 L2.2-2.2 L9 0 L2.2 2.2 L0 9 L-2.2 2.2 L-9 0 L-2.2-2.2Z">
          <animate attributeName="opacity" values="0.09;0.16;0.09" dur="5.8s" begin="2s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="rotate" from="0 170 720" to="360 170 720" dur="20s" repeatCount="indefinite" additive="sum" />
        </path>
        <path opacity="0.10" transform="translate(660, 560)" d="M0-7 L1.7-1.7 L7 0 L1.7 1.7 L0 7 L-1.7 1.7 L-7 0 L-1.7-1.7Z">
          <animate attributeName="opacity" values="0.10;0.18;0.10" dur="4s" begin="3.8s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="rotate" from="0 660 560" to="360 660 560" dur="22s" repeatCount="indefinite" additive="sum" />
        </path>
        {/* Extra stars — row 3 */}
        <path opacity="0.07" transform="translate(310, 380)" d="M0-8 L2-2 L8 0 L2 2 L0 8 L-2 2 L-8 0 L-2-2Z">
          <animate attributeName="opacity" values="0.07;0.14;0.07" dur="6.2s" begin="1.5s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="rotate" from="0 310 380" to="360 310 380" dur="32s" repeatCount="indefinite" additive="sum" />
        </path>
        <path opacity="0.11" transform="translate(1050, 200)" d="M0-10 L2.5-2.5 L10 0 L2.5 2.5 L0 10 L-2.5 2.5 L-10 0 L-2.5-2.5Z">
          <animate attributeName="opacity" values="0.11;0.19;0.11" dur="3.6s" begin="0.3s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="rotate" from="0 1050 200" to="360 1050 200" dur="19s" repeatCount="indefinite" additive="sum" />
        </path>
        <path opacity="0.09" transform="translate(720, 860)" d="M0-7 L1.7-1.7 L7 0 L1.7 1.7 L0 7 L-1.7 1.7 L-7 0 L-1.7-1.7Z">
          <animate attributeName="opacity" values="0.09;0.16;0.09" dur="4.4s" begin="2.7s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="rotate" from="0 720 860" to="360 720 860" dur="27s" repeatCount="indefinite" additive="sum" />
        </path>
        <path opacity="0.12" transform="translate(450, 460)" d="M0-9 L2.2-2.2 L9 0 L2.2 2.2 L0 9 L-2.2 2.2 L-9 0 L-2.2-2.2Z">
          <animate attributeName="opacity" values="0.12;0.21;0.12" dur="5s" begin="4.1s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="rotate" from="0 450 460" to="360 450 460" dur="21s" repeatCount="indefinite" additive="sum" />
        </path>
      </g>

      {/* Crescent moons */}
      <g fill="#7C3AED" fillRule="evenodd">
        <g opacity="0.09" transform="translate(230, 300)">
          <circle cx="0" cy="0" r="12" /><circle cx="7" cy="-3" r="10" fill="#E9D5FF" />
          <animateTransform attributeName="transform" type="rotate" from="0 230 300" to="360 230 300" dur="40s" repeatCount="indefinite" additive="sum" />
          <animate attributeName="opacity" values="0.09;0.15;0.09" dur="7s" begin="0.5s" repeatCount="indefinite" />
        </g>
        <g opacity="0.07" transform="translate(1150, 250)">
          <circle cx="0" cy="0" r="16" /><circle cx="9" cy="-4" r="14" fill="#E9D5FF" />
          <animateTransform attributeName="transform" type="rotate" from="0 1150 250" to="360 1150 250" dur="50s" repeatCount="indefinite" additive="sum" />
          <animate attributeName="opacity" values="0.07;0.13;0.07" dur="8s" begin="3s" repeatCount="indefinite" />
        </g>
        <g opacity="0.08" transform="translate(500, 750)">
          <circle cx="0" cy="0" r="14" /><circle cx="8" cy="-3" r="12" fill="#F3E8FF" />
          <animateTransform attributeName="transform" type="rotate" from="0 500 750" to="360 500 750" dur="45s" repeatCount="indefinite" additive="sum" />
          <animate attributeName="opacity" values="0.08;0.14;0.08" dur="6s" begin="1.5s" repeatCount="indefinite" />
        </g>
        <g opacity="0.06" transform="translate(1300, 650)">
          <circle cx="0" cy="0" r="10" /><circle cx="6" cy="-2" r="8.5" fill="#F3E8FF" />
          <animateTransform attributeName="transform" type="rotate" from="0 1300 650" to="360 1300 650" dur="55s" repeatCount="indefinite" additive="sum" />
          <animate attributeName="opacity" values="0.06;0.11;0.06" dur="9s" begin="5s" repeatCount="indefinite" />
        </g>
        {/* Extra moons */}
        <g opacity="0.07" transform="translate(760, 160)">
          <circle cx="0" cy="0" r="13" /><circle cx="8" cy="-3" r="11" fill="#E9D5FF" />
          <animateTransform attributeName="transform" type="rotate" from="0 760 160" to="360 760 160" dur="48s" repeatCount="indefinite" additive="sum" />
          <animate attributeName="opacity" values="0.07;0.12;0.07" dur="9s" begin="1.8s" repeatCount="indefinite" />
        </g>
        <g opacity="0.06" transform="translate(350, 600)">
          <circle cx="0" cy="0" r="11" /><circle cx="7" cy="-2" r="9" fill="#F3E8FF" />
          <animateTransform attributeName="transform" type="rotate" from="0 350 600" to="360 350 600" dur="52s" repeatCount="indefinite" additive="sum" />
          <animate attributeName="opacity" values="0.06;0.11;0.06" dur="7.5s" begin="4s" repeatCount="indefinite" />
        </g>
        <g opacity="0.08" transform="translate(1060, 820)">
          <circle cx="0" cy="0" r="15" /><circle cx="9" cy="-3" r="13" fill="#F3E8FF" />
          <animateTransform attributeName="transform" type="rotate" from="0 1060 820" to="360 1060 820" dur="43s" repeatCount="indefinite" additive="sum" />
          <animate attributeName="opacity" values="0.08;0.13;0.08" dur="8s" begin="2.5s" repeatCount="indefinite" />
        </g>
        <g opacity="0.05" transform="translate(900, 420)">
          <circle cx="0" cy="0" r="9" /><circle cx="6" cy="-2" r="7.5" fill="#EDE9FE" />
          <animateTransform attributeName="transform" type="rotate" from="0 900 420" to="360 900 420" dur="60s" repeatCount="indefinite" additive="sum" />
          <animate attributeName="opacity" values="0.05;0.10;0.05" dur="10s" begin="6s" repeatCount="indefinite" />
        </g>
      </g>

      {/* Small dot stars */}
      <g fill="#A855F7">
        <circle cx="200" cy="220" r="2.5" opacity="0.18"><animate attributeName="opacity" values="0.18;0.05;0.18" dur="3s" begin="0.2s" repeatCount="indefinite" /></circle>
        <circle cx="460" cy="160" r="2" opacity="0.14"><animate attributeName="opacity" values="0.14;0.04;0.14" dur="4.2s" begin="1s" repeatCount="indefinite" /></circle>
        <circle cx="620" cy="290" r="3" opacity="0.12"><animate attributeName="opacity" values="0.12;0.22;0.12" dur="2.8s" begin="0.8s" repeatCount="indefinite" /></circle>
        <circle cx="860" cy="180" r="2" opacity="0.16"><animate attributeName="opacity" values="0.16;0.05;0.16" dur="3.6s" begin="2.4s" repeatCount="indefinite" /></circle>
        <circle cx="1050" cy="340" r="2.5" opacity="0.10"><animate attributeName="opacity" values="0.10;0.20;0.10" dur="5s" begin="1.6s" repeatCount="indefinite" /></circle>
        <circle cx="1200" cy="90" r="2" opacity="0.14"><animate attributeName="opacity" values="0.14;0.04;0.14" dur="3.2s" begin="3.8s" repeatCount="indefinite" /></circle>
        <circle cx="1360" cy="530" r="2.5" opacity="0.09"><animate attributeName="opacity" values="0.09;0.18;0.09" dur="4.8s" begin="0.4s" repeatCount="indefinite" /></circle>
        <circle cx="100" cy="680" r="2" opacity="0.11"><animate attributeName="opacity" values="0.11;0.04;0.11" dur="3.4s" begin="2s" repeatCount="indefinite" /></circle>
        <circle cx="320" cy="600" r="3" opacity="0.08"><animate attributeName="opacity" values="0.08;0.16;0.08" dur="4s" begin="1.2s" repeatCount="indefinite" /></circle>
        <circle cx="750" cy="700" r="2" opacity="0.13"><animate attributeName="opacity" values="0.13;0.04;0.13" dur="3.8s" begin="0.6s" repeatCount="indefinite" /></circle>
        <circle cx="1100" cy="770" r="2.5" opacity="0.10"><animate attributeName="opacity" values="0.10;0.19;0.10" dur="5.2s" begin="4.2s" repeatCount="indefinite" /></circle>
        <circle cx="940" cy="520" r="2" opacity="0.09"><animate attributeName="opacity" values="0.09;0.17;0.09" dur="2.6s" begin="1.4s" repeatCount="indefinite" /></circle>
        {/* Extra dots — batch 2 */}
        <circle cx="140" cy="310" r="2" opacity="0.12"><animate attributeName="opacity" values="0.12;0.04;0.12" dur="3.1s" begin="0.6s" repeatCount="indefinite" /></circle>
        <circle cx="430" cy="390" r="2.5" opacity="0.10"><animate attributeName="opacity" values="0.10;0.19;0.10" dur="4.6s" begin="2.2s" repeatCount="indefinite" /></circle>
        <circle cx="570" cy="80" r="2" opacity="0.15"><animate attributeName="opacity" values="0.15;0.05;0.15" dur="2.9s" begin="1.7s" repeatCount="indefinite" /></circle>
        <circle cx="780" cy="460" r="3" opacity="0.08"><animate attributeName="opacity" values="0.08;0.16;0.08" dur="5.4s" begin="3.3s" repeatCount="indefinite" /></circle>
        <circle cx="1020" cy="640" r="2" opacity="0.11"><animate attributeName="opacity" values="0.11;0.04;0.11" dur="3.7s" begin="0.9s" repeatCount="indefinite" /></circle>
        <circle cx="1240" cy="380" r="2.5" opacity="0.09"><animate attributeName="opacity" values="0.09;0.17;0.09" dur="4.1s" begin="4.7s" repeatCount="indefinite" /></circle>
        <circle cx="1390" cy="140" r="2" opacity="0.13"><animate attributeName="opacity" values="0.13;0.04;0.13" dur="3s" begin="1.4s" repeatCount="indefinite" /></circle>
        <circle cx="50" cy="820" r="2" opacity="0.10"><animate attributeName="opacity" values="0.10;0.18;0.10" dur="5.6s" begin="2.9s" repeatCount="indefinite" /></circle>
        <circle cx="270" cy="160" r="2.5" opacity="0.12"><animate attributeName="opacity" values="0.12;0.04;0.12" dur="4.3s" begin="1.1s" repeatCount="indefinite" /></circle>
        <circle cx="690" cy="830" r="2" opacity="0.09"><animate attributeName="opacity" values="0.09;0.16;0.09" dur="3.5s" begin="5.1s" repeatCount="indefinite" /></circle>
        <circle cx="900" cy="120" r="3" opacity="0.11"><animate attributeName="opacity" values="0.11;0.20;0.11" dur="2.7s" begin="0.5s" repeatCount="indefinite" /></circle>
        <circle cx="1160" cy="560" r="2" opacity="0.08"><animate attributeName="opacity" values="0.08;0.15;0.08" dur="4.9s" begin="3.6s" repeatCount="indefinite" /></circle>
        {/* Extra dots — batch 3 */}
        <circle cx="490" cy="720" r="2.5" opacity="0.10"><animate attributeName="opacity" values="0.10;0.18;0.10" dur="3.9s" begin="2.3s" repeatCount="indefinite" /></circle>
        <circle cx="1310" cy="280" r="2" opacity="0.12"><animate attributeName="opacity" values="0.12;0.04;0.12" dur="4.7s" begin="1.6s" repeatCount="indefinite" /></circle>
        <circle cx="80" cy="200" r="2" opacity="0.09"><animate attributeName="opacity" values="0.09;0.17;0.09" dur="5.1s" begin="0.8s" repeatCount="indefinite" /></circle>
        <circle cx="610" cy="420" r="2.5" opacity="0.11"><animate attributeName="opacity" values="0.11;0.20;0.11" dur="3.4s" begin="4.4s" repeatCount="indefinite" /></circle>
        <circle cx="1070" cy="70" r="2" opacity="0.14"><animate attributeName="opacity" values="0.14;0.05;0.14" dur="2.8s" begin="1.9s" repeatCount="indefinite" /></circle>
        <circle cx="360" cy="840" r="3" opacity="0.08"><animate attributeName="opacity" values="0.08;0.15;0.08" dur="6s" begin="3s" repeatCount="indefinite" /></circle>
        <circle cx="1200" cy="680" r="2" opacity="0.10"><animate attributeName="opacity" values="0.10;0.18;0.10" dur="4s" begin="5.5s" repeatCount="indefinite" /></circle>
        <circle cx="870" cy="640" r="2.5" opacity="0.09"><animate attributeName="opacity" values="0.09;0.16;0.09" dur="3.6s" begin="0.7s" repeatCount="indefinite" /></circle>
      </g>
    </svg>
  );
}
