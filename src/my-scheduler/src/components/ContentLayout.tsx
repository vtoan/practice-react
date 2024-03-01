import { ReactNode } from 'react';
import Loading from './Loading';

type Props = {
  children: ReactNode;
  isLoading?: boolean;
  isError?: boolean;
  errorMessage?: string;
};

export default function ContentLayout({
  isLoading,
  children,
  isError,
  errorMessage,
}: Readonly<Props>) {
  const loadedContent = isError ? <p>{errorMessage}</p> : children;
  return <>{isLoading ? <Loading /> : loadedContent}</>;
}
