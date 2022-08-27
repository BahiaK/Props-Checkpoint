import PropTypes from "prop-types";

const HandleName = ({ followMe, name }) => {
  return (
    <button className="primary ghost" onClick={followMe.bind(this, name)}>
      Follow Me{" "}
    </button>
  );
};

HandleName.defaultProps = {};

HandleName.propTypes = {
  name: PropTypes.string,
};

export default HandleName;
