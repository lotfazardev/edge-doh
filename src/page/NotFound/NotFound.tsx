import AppLayout from '@src/layouts/AppLayout';

function NotFound() {
  return (
    <AppLayout className="flex h-screen items-center justify-center bg-[#915018]">
      <div className="max-w-md rounded-lg border-2 border-yellow-900 bg-[#f3e9d2] p-8 shadow-2xl">
        <h1 className="font-cinzel mb-4 text-2xl font-bold text-yellow-900">
          404 - NotFound
        </h1>
        <q className="font-serif text-lg italic leading-relaxed text-yellow-900">
          Not all those who wander are lost.
        </q>
        <p className="font-cinzel mt-4 font-semibold text-yellow-900">
          — J.R.R. Tolkien
        </p>
      </div>
    </AppLayout>
  );
}

export default NotFound;
