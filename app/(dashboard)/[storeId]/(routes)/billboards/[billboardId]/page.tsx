import prismadb from '@/lib/prismadb';
import { BillboardForm } from './components/billboard-form';

const BillboardPage = async ({
  params,
}: {
  params: { billboardId: string };
}) => {
  // Check if the billboardId is "new", and if so, bypass the query
  if (params.billboardId === 'new') {
    return (
      <div className='flex-col'>
        <div className='flex-1 space-y-4 p-8 pt-6'>
          <BillboardForm initialData={null} />{' '}
          {/* Render an empty form for creating a new billboard */}
        </div>
      </div>
    );
  }

  // Otherwise, fetch the existing billboard from the database
  const billboard = await prismadb.billboard.findUnique({
    where: {
      id: params.billboardId,
    },
  });

  // Handle the case where the billboard is not found
  if (!billboard) {
    return <div>Billboard not found</div>;
  }

  return (
    <div className='flex-col'>
      <div className='flex-1 space-y-4 p-8 pt-6'>
        <BillboardForm initialData={billboard} />{' '}
        {/* Render the form with the existing billboard data */}
      </div>
    </div>
  );
};

export default BillboardPage;
