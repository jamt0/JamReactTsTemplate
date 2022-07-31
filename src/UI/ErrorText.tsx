import { FunctionComponent } from 'react';

type Props = {};

const ErrorText: FunctionComponent<Props> = (props) => <p>{props.children}</p>;
export default ErrorText;
