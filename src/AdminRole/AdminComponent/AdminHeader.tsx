import avatar from '../../assets/avatar.svg'


const AdminHeader = () => {
    return (
      <>
      <div className="flex items-center justify-between w-full p-3 mt-6 ">

        <div></div>
        
        <h1 className='text-lg font-semibold'>
            Admin
        </h1>

        <div className='flex items-center gap-4'>
            <img src={avatar} alt="" />
            <h2>
            Alisher Pardayev
            </h2>
        </div>
      </div>
      
      </>
    );
  };
  
  export default AdminHeader;
  