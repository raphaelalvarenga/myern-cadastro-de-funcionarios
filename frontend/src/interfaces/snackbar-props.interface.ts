import { ReactNode } from "react";

export default interface SnackbarProps {
    open: boolean | undefined;
    message: string | ReactNode;
    fecharSnackbar: () => void;
}