interface BadgeProps {
  children: React.ReactNode;
}
/**
 * Badge component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The content of the badge.
 * @returns {React.ReactNode} The rendered badge component.
 */
const Badge = ({ children }: BadgeProps): React.ReactNode => {
  return (
    <span className="rounded border bg-muted px-2 py-0.5 text-sm font-medium text-muted-foreground">
      {children}
    </span>
  );
};

export default Badge;
