import PropTypes from "prop-types";

Background.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function Background({ children }) {
  return (
    <div
    id="background"     
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        background:
          "linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(0,0,255,1) 100%)",
      }}
    >
      {children}
    </div>
  );
}
