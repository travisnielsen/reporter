import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { SignInButton } from "./SignInButton";
import { AccountButton } from "./AccountButton";
import { InteractionStatus } from "@azure/msal-browser";

const SignInAccountButton = () => {
    const { inProgress } = useMsal();
    const isAuthenticated = useIsAuthenticated();

    if (isAuthenticated) {
        return <AccountButton />;
    } else if (inProgress !== InteractionStatus.Startup && inProgress !== InteractionStatus.HandleRedirect) {
        return <SignInButton />;
    } else {
        return null;
    }
}

export default SignInAccountButton;