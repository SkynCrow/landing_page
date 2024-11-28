import propTypes from "prop-types";

export const StatsContext = StatsContext(StatsProvider);
export function StatsProvider({ children }) {

  return (
    <StatsContext.Provider >
      {children}
    </StatsContext.Provider>
  );
}

StatsProvider.propTypes = {
  children: propTypes.node.isRequired,
};
