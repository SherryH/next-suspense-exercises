import LibraryGameCardSkeleton from '@/components/LibraryGameCardSkeleton';
import { range } from '@/utils';

export default function Loading() {
  // Or a custom loading skeleton component
  console.log('loading...');
  return (
    <section className="max-width-wrapper">
      <header className="library-header">
        <h1>🧠My games</h1>
      </header>
      <div className="game-grid">
        {range(12).map((num) => (
          <LibraryGameCardSkeleton key={num} />
        ))}
      </div>
    </section>
  );
  // return <p>loading</p>;
}
