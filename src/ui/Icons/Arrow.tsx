export default function Arrow({classname}: {classname?: string}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="43"
      height="14"
      aria-hidden="true"
      focusable="false"
      className={classname}
    >
      <g fill="none" fillRule="evenodd" stroke="currentColor">
        <path d="M0 7h41.864M35.428 1l6 6-6 6" />
      </g>
    </svg>
  );
}
