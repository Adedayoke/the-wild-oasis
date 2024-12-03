import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { Navigate } from "react-router-dom";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function ProtectedRoutes({ children }) {
  const { user, isLoading, isAuthenticated } = useUser();
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );
  if (!isAuthenticated) {
    return <Navigate to="/login" replace={true} />;
  }
  return children;
}
