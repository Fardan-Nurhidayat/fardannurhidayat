import PropTypes from "prop-types";

const ButtonPrimary = ({ href, target, label, icon, classes }) => {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={"btn btn-primary " + classes}>
        {label}
        {icon ? (
          <span
            className='material-symbols-rounded'
            aria-hidden='true'>
            {icon}
          </span>
        ) : undefined}
      </a>
    );
  } else {
    return (
      <button className={"btn btn-primary " + classes}>
        {label}
        {icon ? (
          <span
            className='material-symbols-rounded'
            aria-hidden='true'>
            {icon}
          </span>
        ) : undefined}
      </button>
    );
  }
};
const ButtonOutline = ({ href, target, label, icon, classes }) => {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={"btn btn-outline " + classes}>
        {label}
        {icon ? (
          <span
            className='material-symbols-rounded'
            aria-hidden='true'>
            {icon}
          </span>
        ) : undefined}
      </a>
    );
  } else {
    return (
      <button className={"btn btn-outline " + classes}>
        {label}
        {icon ? (
          <span
            className='material-symbols-rounded'
            aria-hidden='true'>
            {icon}
          </span>
        ) : undefined}
      </button>
    );
  }
};

ButtonPrimary.propTypes = {
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string,
  classes: PropTypes.string,
};
ButtonOutline.propTypes = {
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string,
  classes: PropTypes.string,
};

export { ButtonPrimary, ButtonOutline };