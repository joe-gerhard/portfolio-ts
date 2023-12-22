import { FC } from "react";
import { StyledErrorPage } from "./styles";
import { useRouteError } from "react-router-dom";

const ErrorPage: FC = () => {
    const error = useRouteError();
    console.error(error);

    let errorText: string | null = null;

    // Type checking for unknown return value from useRouteError()
    if (typeof error === "object" && error !== null) {
        if ("statusText" in error && typeof error.statusText === "string")
            errorText = error.statusText;
        if ("message" in error && typeof error.message === "string")
            errorText = error.message;
    }

    return (
        <StyledErrorPage>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occured:</p>$
            {errorText && (
                <p>
                    <i>{errorText}</i>
                </p>
            )}
        </StyledErrorPage>
    );
};

export default ErrorPage;
