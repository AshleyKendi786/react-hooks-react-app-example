 export const Link = ({ children, to }) => <a href={to}>{children}</a>;
export const useNavigate = () => jest.fn();
export const useLocation = () => ({ pathname: '/' });