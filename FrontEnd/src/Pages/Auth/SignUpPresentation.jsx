import { Link } from "react-router-dom";

function SignUpPresentation({handelUserInput,handelFormSubmit}){

    return (
      <div className="flex flex-col w-full md:flex-row justify-center items-center bg-slate-100 h-screen">

                    <div className="hidden lg:block  items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" id="a" width="550" height="600" viewBox="0 0 865.76 682.89">
  <g>
    <polyline points="55.76 102.76 55.76 463.42 326.55 463.42 326.55 106.15" fill="none" stroke="#002346" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M43.92,28.53V96.73s30.34,25.44,86.22,3.35c0,0,49.66,27.05,117.77,3.98,0,0,55.61,20.69,93.36-6.19V28.53s-296.35,1-297.35,0Z" fill="none" stroke="#002346" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M43.92,75.05s25.34,27.12,86.22,4.04c0,0,53.69,25.92,117.79,2.92,0,0,46.6,25.31,92.35-5.34" fill="none" stroke="#002346" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M43.92,84.05s25.34,27.12,86.22,4.04c0,0,53.69,25.92,117.79,2.92,0,0,46.6,25.31,92.35-5.34" fill="none" stroke="#002346" stroke-linecap="round" stroke-linejoin="round"/>
    <line x1="80.63" y1="109.14" x2="80.63" y2="426.81" fill="none" stroke="#002346" stroke-linecap="round" stroke-linejoin="round"/>
    <line x1="154.63" y1="110.14" x2="154.63" y2="426.81" fill="none" stroke="#002346" stroke-linecap="round" stroke-linejoin="round"/>
    <line x1="301.63" y1="112.14" x2="301.63" y2="425.81" fill="none" stroke="#002346" stroke-linecap="round" stroke-linejoin="round"/>
    <line x1="231.63" y1="109.14" x2="231.63" y2="426.81" fill="none" stroke="#002346" stroke-linecap="round" stroke-linejoin="round"/>
    <line x1="81.13" y1="130.1" x2="301.43" y2="130.1" fill="none" stroke="#002346" stroke-linecap="round" stroke-linejoin="round"/>
    <line x1="81.13" y1="223.1" x2="301.43" y2="223.1" fill="none" stroke="#002346" stroke-linecap="round" stroke-linejoin="round"/>
    <line x1="81.13" y1="328.1" x2="301.43" y2="328.1" fill="none" stroke="#002346" stroke-linecap="round" stroke-linejoin="round"/>
    <polyline points="55.76 463.42 81.02 426.99 302.02 426.99 326.55 463.42" fill="none" stroke="#002346" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <g>
    <rect x="498.84" y="146.86" width="323" height="228" rx="16.79" ry="16.79" fill="#fff" stroke="#002346" stroke-miterlimit="10"/>
    <path d="M821.84,163.65v31.21H498.84v-31.21c0-9.27,7.52-16.79,16.79-16.79h289.42c9.27,0,16.79,7.52,16.79,16.79Z" fill="#f69074" stroke="#002346" stroke-miterlimit="10"/>
    <g>
      <circle cx="758.34" cy="170.86" r="6.5" fill="#fff" stroke="#002346" stroke-miterlimit="10"/>
      <circle cx="778.34" cy="170.86" r="6.5" fill="#fff" stroke="#002346" stroke-miterlimit="10"/>
      <circle cx="798.34" cy="170.86" r="6.5" fill="#fff" stroke="#002346" stroke-miterlimit="10"/>
    </g>
    <g>
      <g>
        <path d="M589.84,279.86c0,7.89-2.62,15.19-7.03,21.04-6.39,8.48-16.54,13.96-27.97,13.96s-21.58-5.48-27.97-13.96c-4.41-5.85-7.03-13.15-7.03-21.04,0-19.33,15.67-35,35-35s35,15.67,35,35Z" fill="#fff" stroke="#002346" stroke-miterlimit="10"/>
        <path d="M582.81,300.9c-6.39,8.48-16.54,13.96-27.97,13.96s-21.58-5.48-27.97-13.96c.49-15.02,12.83-27.04,27.97-27.04s27.48,12.02,27.97,27.04Z" fill="#fbe493" stroke="#002346" stroke-miterlimit="10"/>
        <circle cx="555.34" cy="266.36" r="13.5" fill="#fbe493" stroke="#002346" stroke-miterlimit="10"/>
      </g>
      <g>
        <rect x="612.84" y="223.86" width="179" height="19" rx="9.5" ry="9.5" fill="#e6e7e8" stroke="#002346" stroke-miterlimit="10"/>
        <rect x="612.84" y="252.86" width="179" height="19" rx="9.5" ry="9.5" fill="#e6e7e8" stroke="#002346" stroke-miterlimit="10"/>
        <rect x="612.84" y="284.86" width="179" height="19" rx="9.5" ry="9.5" fill="#e6e7e8" stroke="#002346" stroke-miterlimit="10"/>
        <rect x="612.84" y="316.86" width="179" height="19" rx="9.5" ry="9.5" fill="#fbe493" stroke="#002346" stroke-miterlimit="10"/>
      </g>
      <text transform="translate(624.78 237.25)" fill="#002346" font-family="Barlow-Regular, Barlow" font-size="12">
        <tspan x="0" y="0">Email</tspan>
      </text>
      <text transform="translate(625.78 266.25)" fill="#002346" font-family="Barlow-Regular, Barlow" font-size="12">
        <tspan x="0" y="0">C</tspan>
        <tspan x="7.28" y="0" letter-spacing="0em">re</tspan>
        <tspan x="17.93" y="0" letter-spacing="0em">a</tspan>
        <tspan x="24.01" y="0" letter-spacing="-.01em">t</tspan>
        <tspan x="28.2" y="0">e </tspan>
        <tspan x="37" y="0" letter-spacing="0em">P</tspan>
        <tspan x="44.06" y="0">a</tspan>
        <tspan x="50.2" y="0" letter-spacing="-.01em">s</tspan>
        <tspan x="55.79" y="0" letter-spacing="-.03em">s</tspan>
        <tspan x="61.19" y="0" letter-spacing="-.02em">w</tspan>
        <tspan x="69.64" y="0">o</tspan>
        <tspan x="76.18" y="0" letter-spacing="0em">r</tspan>
        <tspan x="80.48" y="0">d</tspan>
      </text>
      <text transform="translate(625.78 298.25)" fill="#002346" font-family="Barlow-Regular, Barlow" font-size="12">
        <tspan x="0" y="0" letter-spacing="0em">C</tspan>
        <tspan x="7.27" y="0">onfirm </tspan>
        <tspan x="44.32" y="0" letter-spacing="0em">P</tspan>
        <tspan x="51.38" y="0">a</tspan>
        <tspan x="57.52" y="0" letter-spacing="-.01em">s</tspan>
        <tspan x="63.11" y="0" letter-spacing="-.03em">s</tspan>
        <tspan x="68.51" y="0" letter-spacing="-.02em">w</tspan>
        <tspan x="76.96" y="0">o</tspan>
        <tspan x="83.5" y="0" letter-spacing="0em">r</tspan>
        <tspan x="87.8" y="0">d</tspan>
      </text>
      <text transform="translate(684.41 330.25)" fill="#002346" font-family="Barlow-Regular, Barlow" font-size="12">
        <tspan x="0" y="0">Signup</tspan>
      </text>
    </g>
    <path d="M670.38,592.44l6.75,5.56c1.68,1.38,2.28,3.71,1.44,5.72-3,7.22-12.34,23.75-37.09,32.34l-.16-13.76,29.05-29.86Z" fill="#fff" stroke="#002346" stroke-miterlimit="10"/>
    <polygon points="338.48 578.82 322.09 635.83 334.2 635.83 360.57 578.82 338.48 578.82" fill="#e6e7e8" stroke="#002346" stroke-miterlimit="10"/>
    <polygon points="512.35 574.55 521.62 631.56 509.5 631.56 490.26 574.55 512.35 574.55" fill="#e6e7e8" stroke="#002346" stroke-miterlimit="10"/>
    <polygon points="247.98 572.41 231.59 629.42 243.7 629.42 270.07 572.41 247.98 572.41" fill="#e6e7e8" stroke="#002346" stroke-miterlimit="10"/>
    <path d="M619.95,590.23s2.14-2.14,7.84,.71l11.66,4.08c1.66,.58,3.45,.64,5.14,.16,5.06-1.43,16.49-4.34,23.47-3.66,2.78,.27,4.6,3.05,3.72,5.7-1.93,5.81-7.96,16.82-26.77,27.19l-33.6-9.24-3.56-4.28s-2.85-7.13,.71-9.98l11.4-10.69Z" fill="#f69074" stroke="#002346" stroke-miterlimit="10"/>
    <path d="M613.01,608.32c5.42-2.44,13.79-5.42,18.35-3.13,0,0-9.98,.71-25.65,12.83,0,0-13.54,11.4-34.2,11.4,0,0-19.95,1.43-24.23,9.98l.71-18.53,12.82-3.45c3.77-1.01,7.31-2.74,10.43-5.08l3.83-2.87,3.77-4.84c.7-.9,1.95-1.14,2.93-.56l13.97,8.25s6.25,2.84,10.63-.1c2.14-1.44,4.3-2.83,6.65-3.89Z" fill="#f69074" stroke="#002346" stroke-miterlimit="10"/>
    <path d="M559.84,586.86l15.22,22.6s-2.14,18.53-27.08,11.4l-9.26-19.24,21.12-14.76Z" fill="#f1b2c0" stroke="#002346" stroke-miterlimit="10"/>
    <path d="M570.84,460.86l-7.18,124.37h-40.62l-199.44-3.76-76.47-1.44c-15.63-.29-28.86-11.65-31.52-27.06l-37.8-219.49c-2.72-15.82,8.17-30.56,23.74-32.88,.8-.13,1.61-.21,2.44-.26l81.41-5.15,110.62,.56c19.9,.1,36.88,14.43,40.32,34.03l13.3,75.88,105.57,8.48c10.33,.83,18.08,9.8,17.39,20.14l-1.76,26.57Z" fill="#e6e7e8" stroke="#002346" stroke-miterlimit="10"/>
    <polygon points="523.1 427.2 569.36 563.86 523.75 590.23 463.95 434.22 523.1 427.2" fill="#fbe493" stroke="#002346" stroke-miterlimit="10"/>
    <polygon points="535.87 425.62 445.37 436.31 371.97 427.04 372.68 422.77 442.52 432.03 482.42 347.94 575.77 341.53 535.87 425.62" fill="#fff" stroke="#002346" stroke-miterlimit="10"/>
    <path d="M372.78,422.74l52.64-14.23,20.67,4.99,4.28,2.14-7.84,16.39-69.74-9.25s-.02-.03,0-.04Z" fill="#e6e7e8" stroke="#002346" stroke-miterlimit="10"/>
    <polygon points="539.84 575.86 520.19 590.94 530.88 610.18 550.23 595.44 539.84 575.86" fill="#fff" stroke="#002346" stroke-miterlimit="10"/>
    <path d="M572.21,600.2l4.99,6.41,1.61-2.32c.73-.73,1.86-.87,2.75-.35l14.17,8.37s7.13,3.56,12.11-1.43c0,0-2.85-5.7,.71-9.98l11.4-10.69-18.64-12.6-29.1,22.58Z" fill="#f1b2c0" stroke="#002346" stroke-miterlimit="10"/>
    <path d="M547.27,639.4s-.82,6.17,1.73,9.5l89.49-23.04,5.08,4.34s8.46-22.86-12.21-25c0,0-9.98,.71-25.65,12.83,0,0-14.96,12.11-34.2,11.4,0,0-19.24,.71-24.23,9.98Z" fill="#002346" stroke="#002346" stroke-miterlimit="10"/>
    <path d="M250.12,415.64s44.18,.71,54.16,63.42l19.33,102.42-76.47-1.44c-15.63-.29-28.86-11.65-31.52-27.06l-38.36-219.22c-2.89-16.53,9.13-31.95,25.87-33.16l22.07-1.6,24.93,116.64Z" fill="#fff" stroke="#002346" stroke-miterlimit="10"/>
    <path d="M376.25,423.24l27.16,3.49s6.34,.31,8.47-3.25l6.41,.71s4.99,1.43,5.7-2.85l5.93,4.31c1.79,1.3,4.26,1.45,6.06,.17,.73-.52,1.33-1.27,1.55-2.34,0,0,5.7,2.14,7.84-.71l1.52,.29,3.47-7.42-4.28-3.56h.71s4.99,.71,4.28-3.56l-17.1-7.84s-5.4-4.26-15.89,.36c0,0-10.37,4.16-21.47,4.04l-16.09-.84s-4.99,8.79-4.28,19Z" fill="#f1b2c0" stroke="#002346" stroke-miterlimit="10"/>
    <path d="M450.36,415.64l7.13-14.25-23.52-19.24s1.53-10.18-2.73-16.77c-1.96-3.03-3.32-6.4-3.72-9.98l-4.24-38.8s-2.85-19.95-22.09-29.93l-20.9-14.64-21.15,3.95-19.95-9.26-27.79,11.4s-27.08,9.98-37.77,33.49c0,0-10.69,20.67-3.56,56.3,0,0,2.85,12.11-1.43,24.23,0,0-2.85,12.83,2.85,18.53l29.22-2.14s35.63-4.28,51.31,21.38l24.94-.71s-2.85-13.54,3.56-24.94l18.53,.71s9.98-.71,17.81-3.56c0,0,9.98-4.99,17.1-.71l17.1,7.84s1.25,3.78-4.99,3.56l4.28,3.56Z" fill="#f69074" stroke="#002346" stroke-miterlimit="10"/>
    <path d="M352.73,228.94s4.99,20.67-13.54,37.77l21.92,25.25c1.06,1.22,2.04,2.51,2.94,3.85l11.48,17.22s8.09-22.87,4.76-41.01l-16.16-32.39-1.43-15.68-9.98,4.99Z" fill="#f1b2c0" stroke="#002346" stroke-miterlimit="10"/>
    <rect x="362.59" y="193.05" width="44.34" height="70.8" rx="22.17" ry="22.17" transform="translate(45.86 -63.74) rotate(10.07)" fill="#f1b2c0" stroke="#002346" stroke-miterlimit="10"/>
    <path d="M352.84,242.86v-14l.6-17.03s-2.85-17.81,11.4-23.52c0,0,27.08-24.23,41.33-2.85,0,0,8.98-2.64,13.75,2.99,1.41,1.66,2.1,3.81,2.17,5.99,.14,4.3-.82,12.71-10.18,14.79-3.84,.85-7.92,.33-11.29-1.7-.88-.53-1.74-1.17-2.5-1.96-1.55-1.61-3.62-2.66-5.86-2.66-1.16,0-2.49-.09-3.9-.36-3.11-.59-6.34-.03-8.95,1.76l-4.74,3.24c-2.28,1.56-3.98,3.86-4.69,6.53-.34,1.31-.91,2.8-1.83,4.16-1.18,1.76-1.89,3.78-2.03,5.89-.39,5.96-6.86,16.77-13.3,18.7Z" fill="#002346" stroke="#002346" stroke-miterlimit="10"/>
    <ellipse cx="364.8" cy="226.53" rx="4.54" ry="6.06" fill="#f1b2c0" stroke="#002346" stroke-miterlimit="10"/>
    <path d="M352.02,429.89s2.82,16.97,5.82,38.97l64.13,15.62c5.43,1.56,10.29,4.67,13.98,8.95,17.09,19.8,85.88,78.44,112.73,105.35l37.77-34.2-122.52-130.35-18.58,2.09-68.46-9.11,.05,1.99-24.94,.71Z" fill="#fbe493" stroke="#002346" stroke-miterlimit="10"/>
    <polygon points="544.42 600.2 559.84 614.86 603.56 575.26 588.6 561.01 544.42 600.2" fill="#fff" stroke="#002346" stroke-miterlimit="10"/>
    <path d="M643.47,620.16s-3.56-12.83-24.94-1.43c0,0-23.52,16.39-39.91,16.39,0,0-26.05-.59-29.58,10.64-.72,2.29,.3,4.76,2.39,5.95,2.27,1.3,6.25,2.66,12.94,2.66,0,0,32.78-.71,33.49-.71s52.73-1.43,45.61-33.49Z" fill="#fff" stroke="#002346" stroke-miterlimit="10"/>
    <ellipse cx="385.84" cy="203.36" rx="15" ry="7.5" fill="#002346" stroke="#002346" stroke-miterlimit="10"/>
    <polyline points="332.12 270.43 346.56 308.22 361.7 293.51" fill="none" stroke="#002346" stroke-linecap="round" stroke-linejoin="round"/>
    <polyline points="380.88 294.15 392 305.62 386.37 276.28" fill="none" stroke="#002346" stroke-linecap="round" stroke-linejoin="round"/>
    <line x1="376.18" y1="316.8" x2="376.18" y2="397.22" fill="none" stroke="#002346" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M380.52,404.24l-57.03-12.22c-4.07-.87-8.26-1.01-12.38-.4l-12.77,1.89" fill="none" stroke="#002346" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M282.23,298.8s29.14-2.48,31.88,24.29" fill="none" stroke="#002346" stroke-linecap="round" stroke-linejoin="round"/>
    <line x1="314.11" y1="330.71" x2="311.52" y2="388.89" fill="none" stroke="#002346" stroke-linecap="round" stroke-linejoin="round"/>
    <line x1="433.97" y1="382.15" x2="424.49" y2="374.13" fill="none" stroke="#002346" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M398.71,404.32s7.88-4.82,.75-18.89c0,0-5.62-6.15-.87-15.61l8.16-18.04,2.07,30.36s-.08,15.33,8.22,18.77" fill="none" stroke="#002346" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M411.88,423.48s3.76-10.16,12.11-2.14" fill="none" stroke="#002346" stroke-linecap="round" stroke-linejoin="round"/>
    <line x1="437.53" y1="423.48" x2="425.18" y2="412.81" fill="none" stroke="#002346" stroke-linecap="round" stroke-linejoin="round"/>
    <line x1="445.37" y1="422.77" x2="431.35" y2="408.51" fill="none" stroke="#002346" stroke-linecap="round" stroke-linejoin="round"/>
    <line x1="446.08" y1="412.08" x2="435.84" y2="405.86" fill="none" stroke="#002346" stroke-linecap="round" stroke-linejoin="round"/>
    <line x1="448.34" y1="432.03" x2="486.06" y2="351.79" fill="none" stroke="#002346" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M259.79,407.08l72.6-2.62c9.36-.34,17.48,6.42,18.84,15.69l17.82,121.09c1.73,11.73,10.96,20.92,22.7,22.6l28.46,4.06" fill="#e6e7e8" stroke="#002346" stroke-miterlimit="10"/>
    <line x1="412.56" y1="319.51" x2="407.87" y2="347.44" fill="none" stroke="#002346" stroke-linecap="round" stroke-linejoin="round"/>
    <g>
      <path d="M246.41,570.32c.2,2.34,.51,4.98,.96,7.67,0,0,9.48-31.02,40.64-27.02l-6.12-13.48-5.06-5.06c-10.16,5.28-20,3.69-26.72,17.32-3.14,6.36-4.31,13.51-3.69,20.58Z" fill="#7cd295" stroke="#002346" stroke-miterlimit="10"/>
      <path d="M334.26,540.61c-28.12,.03-32.32-41.41-3.91-75.9,.09-.11,.27-.04,.26,.11-1.12,11.76,33.4,53.9,10.78,73.19-1.99,1.69-4.51,2.6-7.12,2.6Z" fill="#7cd295" stroke="#002346" stroke-miterlimit="10"/>
      <path d="M332.56,525.13c-17.74-10.53-13.74-42.1,38.83-60.73,.1-.03,.2,.06,.16,.15-.6,1.71-4.08,12.88-5.91,44.4-.49,8.4-12.49,28.4-33.08,16.17Z" fill="#7cd295" stroke="#002346" stroke-miterlimit="10"/>
      <path d="M350.92,594.32c.8,6.21-41.3,6.21-40.5,0-.8-6.21,41.3-6.21,40.5,0Z" fill="#002346" stroke="#002346" stroke-miterlimit="10"/>
      <path d="M352.58,649.32c-1.82-.27-48.18,.79-48.29-.86-9.13-4.33-9.52-18.47-9.52-18.47-1.38-18.87,15.65-28.99,15.65-28.99v-6.67c-.8,6.21,41.3,6.21,40.5,0v7.13c22.29,14.63,17.77,46.38,1.66,47.86Z" fill="#f69074" stroke="#002346" stroke-miterlimit="10"/>
      <path d="M352.3,609.74c.05,3.58-5.58,3.58-5.52,0-.05-3.58,5.58-3.58,5.52,0Z" fill="#fff"/>
      <path d="M360.58,618.03c.05,3.58-5.58,3.58-5.52,0-.05-3.58,5.58-3.58,5.52,0Z" fill="#fff"/>
      <path d="M361.96,631.37c.05,3.58-5.58,3.58-5.52,0-.05-3.58,5.58-3.58,5.52,0Z" fill="#fff"/>
      <path d="M354.6,641.5c.05,3.58-5.58,3.58-5.52,0-.05-3.58,5.58-3.58,5.52,0Z" fill="#fff"/>
      <path d="M332.05,644.26c.05,3.58-5.58,3.58-5.52,0-.05-3.58,5.58-3.58,5.52,0Z" fill="#fff"/>
      <path d="M314.56,641.5c.05,3.58-5.58,3.58-5.52,0-.05-3.58,5.58-3.58,5.52,0Z" fill="#fff"/>
      <path d="M304.9,633.67c.05,3.58-5.58,3.58-5.52,0-.05-3.58,5.58-3.58,5.52,0Z" fill="#fff"/>
      <path d="M306.28,618.03c.05,3.58-5.58,3.58-5.52,0-.05-3.58,5.58-3.58,5.52,0Z" fill="#fff"/>
      <path d="M316.4,608.82c.05,3.58-5.58,3.58-5.52,0-.05-3.58,5.58-3.58,5.52,0Z" fill="#fff"/>
      <path d="M325.61,617.11c.05,3.58-5.58,3.58-5.52,0-.05-3.58,5.58-3.58,5.52,0Z" fill="#fff"/>
      <path d="M315.02,624.47c.05,3.58-5.58,3.58-5.52,0-.05-3.58,5.58-3.58,5.52,0Z" fill="#fff"/>
      <path d="M324.23,633.67c.05,3.58-5.58,3.58-5.52,0-.05-3.58,5.58-3.58,5.52,0Z" fill="#fff"/>
      <path d="M334.35,625.85c.05,3.58-5.58,3.58-5.52,0-.05-3.58,5.58-3.58,5.52,0Z" fill="#fff"/>
      <path d="M336.19,610.2c.05,3.58-5.58,3.58-5.52,0-.05-3.58,5.58-3.58,5.52,0Z" fill="#fff"/>
      <path d="M344.48,619.87c.05,3.58-5.58,3.58-5.52,0-.05-3.58,5.58-3.58,5.52,0Z" fill="#fff"/>
      <path d="M350.92,626.31c.05,3.58-5.58,3.58-5.52,0-.05-3.58,5.58-3.58,5.52,0Z" fill="#fff"/>
      <path d="M341.71,635.51c.05,3.58-5.58,3.58-5.52,0-.05-3.58,5.58-3.58,5.52,0Z" fill="#fff"/>
      <path d="M375.77,563.26c-15.18-12.36-36.76,4.61-15.19,25.77,0,0,11.05,10.12,15.65,20.71,0,0,21.17-15.19,21.63-35.9,0,0,0-21.17-22.09-10.59Z" fill="#7cd295" stroke="#002346" stroke-miterlimit="10"/>
      <path d="M246.93,560.69c23.85-42.04,34.03,1.19,69.93-4.8,.54-48.33-69.4-46.3-69.93,4.8Z" fill="#7cd295" stroke="#002346" stroke-miterlimit="10"/>
      <path d="M310.42,601s16.99,8.72,40.5,.46" fill="none" stroke="#002346" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M334.93,578.69s10-42,35.45-21.63c3.58,2.86,5.82,7.08,6.91,11.53,1.69,6.9,3.83,19.46,1.14,31.6" fill="none" stroke="#002346" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M367.43,468.19s-47,34-31,126" fill="none" stroke="#002346" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M265.43,533.19s62-1,64,60" fill="none" stroke="#002346" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
  </g>
                    </svg>      
                    </div>
                    <div className=" flex flex-row justify-center items-center montserrat-font1 ml-7 p-6 w-full flex-col justify-center items-end mr-6 ">
                    <form className="flex flex-col bg-slate-200 p-4 rounded-lg h-[95%] md:w-[58%]  ">
                        <h1 className="text-2xl font-semibold mb-4">Sign Up</h1>
                        <label className="text-base font-semibold">First Name  <span className="text-red-500">*</span></label>
                        
                        <input
                        className="w-full p-6 rounded-md h-9 mt-2 text-grey-700 rounded outline-noe border-xl border-solid border-slate-900 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 "
                        type="text"
                        placeholder="John"
                        required
                        minLength={5}
                        id="firstName"
                        name="firstName"
                        onChange={handelUserInput}
                        
                        />
                        <label className="font-semibold">Email  <span className="text-red-500">*</span></label>
                        
                        <input
                        className="w-full p-6 rounded-md h-9 mt-2 text-grey-700  border-2xl border-solid border-slate-900 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 "
                        type="text"
                        placeholder="JohnDoe123@gmail.com"
                        required
                        minLength={5}
                        id="email"
                        name="email"
                        onChange={handelUserInput}

                        />
                        <label className="font-semibold">Mobile Number  <span className="text-red-500">*</span></label>
                        
                        <input
                        className="w-full p-6 rounded-md h-9 mt-2 text-grey-700  border-2xl border-solid border-slate-900 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 "
                        type="number"
                        placeholder="91567*****"
                        required
                        minLength={10}
                        maxLength={10}
                        id="mobileNumber"
                        name="mobileNumber"
                        onChange={handelUserInput}

                        />
                        <label className="font-semibold">Password  <span className="text-red-500">*</span></label>
                        
                        <input
                        type:text
                        className="w-full p-6 rounded-md h-9 mt-2 text-grey-700  border-2xl border-solid border-slate-900 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 "
                        type="text"
                        placeholder="*******"
                        required
                        minLength={6}
                        id="password"
                        name="password"
                        onChange={handelUserInput}

                        />
                        <button  onClick={handelFormSubmit} className="w-full px-8 py-2 mt-3 text-lg text-white bg-yellow-500 border-0 rounded focus:outline-none hover:bg-yellow-600 hover:text-slate-500">
                            Create Acount</button>
                            <span className="mt-3 text-xs text-gray-500">Already have an acount? <Link to="/auth/login"className="text-yellow-500">Login</Link></span>
                            
    
                    </form>
                    </div>
        </div>
    )

}
export default SignUpPresentation;