import svgPaths from "./svg-zlnv7x2zrk";
import imgPrimaryLogoPng1 from "figma:asset/8dbec7d185f4cfdc25e5452734fb76cd610c2b86.png";

function Icon() {
  return (
    <div className="h-[25.556px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[69.42%_12.51%_12.5%_69.41%]" data-name="Vector">
        <div className="absolute inset-[-23.04%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.75093 6.75093">
            <path d={svgPaths.p11ead980} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.12963" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_20.83%_20.83%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.1667 19.1667">
            <path d={svgPaths.p3999280} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.12963" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[10.222px] px-[10.222px] relative rounded-[42875068px] shrink-0 size-[46px]" data-name="Button">
      <Icon />
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[25.556px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[83.33%_62.5%_8.33%_29.16%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.25926 4.25926">
            <path d={svgPaths.p337348f0} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.12963" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[83.33%_16.66%_8.33%_75.01%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.25926 4.25926">
            <path d={svgPaths.p337348f0} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.12963" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.54%_7.97%_33.13%_8.53%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-4.99%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.4685 17.0376">
            <path d={svgPaths.p30024180} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.12963" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[10.222px] px-[10.222px] relative rounded-[42875068px] shrink-0 size-[46px]" data-name="Button">
      <Icon1 />
    </div>
  );
}

function BasicGrid() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="Basic / Grid_9">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="Basic / Grid_9">
          <path d={svgPaths.p1a25bf00} fill="var(--fill-0, black)" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p3cc62600} fill="var(--fill-0, black)" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p2a3f3480} fill="var(--fill-0, black)" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p2a416380} fill="var(--fill-0, black)" id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.peb08000} fill="var(--fill-0, black)" id="Vector_5" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p177abb80} fill="var(--fill-0, black)" id="Vector_6" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p29046800} fill="var(--fill-0, black)" id="Vector_7" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p1cb1ec00} fill="var(--fill-0, black)" id="Vector_8" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p2c024300} fill="var(--fill-0, black)" id="Vector_9" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex gap-[31px] items-center left-[1501px] top-[37px]">
      <Button />
      <Button1 />
      <BasicGrid />
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <div className="-translate-x-1/2 absolute bg-white h-[120px] left-1/2 rounded-[100px] top-0 w-[1755px]" />
      <Frame />
      <div className="-translate-x-1/2 absolute h-[76px] left-[calc(50%-755.5px)] top-[22px] w-[124px]" data-name="primary-logo.png 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPrimaryLogoPng1} />
      </div>
    </div>
  );
}