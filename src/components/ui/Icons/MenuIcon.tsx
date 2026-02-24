export default function MenuIcon({classname}: {classname?: string}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="6"
      aria-hidden="true"
      focusable="false"
      className={classname}
    >
      <g fillRule="evenodd">
        <path d="M0 0h20v1H0zM0 5h20v1H0z" stroke="currentColor" />
      </g>
    </svg>
  );
}
