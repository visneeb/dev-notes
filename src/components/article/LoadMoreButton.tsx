type Props = {
  visible: number;
  total: number;
  loading: boolean;
  onClick: () => void;
};

export function LoadMoreButton({ visible, total, loading, onClick }: Props) {
  if (visible >= total) return null;

  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="text-brown-600 text-body-1 underline mx-auto block w-max pt-20"
    >
      View more
    </button>
  );
}
