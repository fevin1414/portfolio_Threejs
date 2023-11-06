export const styles = {
  floatingAnimation: {
    animation: "float 3s infinite", // You can adjust the animation duration and other properties here
    "@keyframes float": {
      "0%": { transform: "translateY(0)" },
      "50%": { transform: "translateY(20px)" },
      "100%": { transform: "translateY(0)" },
    },
  },
};
