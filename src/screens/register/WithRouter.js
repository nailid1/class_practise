import { useNavigate } from "react-router";

export const withRouter = (Component) => {
  return (props) => {
    const navigation = useNavigate();
    return <Component navigation={navigation} {...props} />;
  };
};
