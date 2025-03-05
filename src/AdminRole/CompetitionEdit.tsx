import { useParams} from "react-router-dom";

const AdminCompetitionEdit = () => {
  const { id } = useParams(); 

  return (
      <div className="container mx-auto flex text-center justify-center mt-[25px] gap-[34px] lg:gap-[104px] md:gap-[44px] sm:gap-[104px] sm:text-left sm:justify-start">
      Competition Edit
      </div>
  );
};

export default AdminCompetitionEdit;