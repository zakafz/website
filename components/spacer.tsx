type SpacerProps = "xs" | "sm" | "md" | "lg";

export default function Spacer(props: { size: SpacerProps }) {
  const height = (() => {
    switch (props.size) {
      case "xs":
        return "h-5";
      case "sm":
        return "h-10";
      case "md":
        return "h-32";
      case "lg":
        return "h-40";
      default:
        return "h-0";
    }
  })();
  return <div className={`w-full ${height}`} />;
}
