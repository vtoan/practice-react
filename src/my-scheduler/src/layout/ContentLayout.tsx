import { ReactNode } from 'react';
import Loading from '../components/Loading';

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
  const loadedContent = isError ? (
    <p className="text-center py-5"> {errorMessage}</p>
  ) : (
    children
  );
  return (
    <>
      {isLoading ? (
        <div className="text-center py-5">
          <Loading />
        </div>
      ) : (
        loadedContent
      )}
    </>
  );
}
