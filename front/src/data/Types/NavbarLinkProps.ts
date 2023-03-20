export interface NavbarLinkProps {
  icon: React.FC<any>;
  label: string;
  active?: boolean;
  to: string;
  onClick?(): void;
}