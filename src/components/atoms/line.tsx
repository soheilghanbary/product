import { HTMLAttributes } from "react";

export default function Line({ ...rest }: HTMLAttributes<HTMLElement>) {
    return <hr {...rest} />
}